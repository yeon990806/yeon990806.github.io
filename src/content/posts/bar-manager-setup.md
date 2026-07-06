---
title: 바 매니저 만들기 ① — 환경 설정과 차감 엔진까지
description: 모노레포부터 Docker·Prisma·NestJS·Vite까지, 사이드 프로젝트 설정 시작.
pubDate: 2026-06-28
tags: [사이드프로젝트, 풀스택, NestJS, Prisma, Vite, React, Docker, 모노레포]
series: '바매니저'
seriesOrder: 2
draft: true
---

> [기획 글](/posts/bar-manager-planning)에서 "칵테일 한 잔 = 재료 차감"을 코어로 잡아뒀다. 이제 그걸 실제 코드로 풀어야 한다. 모노레포·DB·인증·첫 화면까지.

## 0. 시작 전 — 원칙 세 가지

작은 사이드 프로젝트라도 끝까지 혼자 책임지는 구조라, 처음에 원칙 세 개부터 정해두고 갔다.

1. **타입은 한 번만 정의한다** — 프론트랑 백엔드가 같은 타입을 공유. 두 번 정의해서 어긋나기 시작하면 그때부터 모든 게 와르르 무너지더라.
2. **차감은 트랜잭션으로 한다** — "한 잔 만들면 재료 N개 차감 + 로그 기록"이 전부 아니면 전무여야 한다. 중간에 실패하면 재고가 바로 거짓말하기 시작하니까.
3. **로컬이랑 운영 환경이 똑같다** — Docker로 묶어두면 "내 컴퓨터에선 됐는데요" 같은 말이 사라진다.

이 세 가지가 모노레포·Prisma·Docker라는 선택으로 자연스럽게 이어졌다.

---

## 1. 모노레포 세팅 — pnpm workspaces + Turborepo

디렉토리 구조부터:

```
bar-manager/
├── apps/
│   ├── api/       # NestJS + Prisma
│   └── web/       # Vite + React
├── packages/
│   └── shared/    # Zod 스키마 (양쪽이 import)
├── docker-compose.yml
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

`pnpm-workspace.yaml`:

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

루트 `package.json`:

```json
{
  "name": "bar-manager",
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "db:up": "docker compose up -d db",
    "db:down": "docker compose down"
  },
  "devDependencies": {
    "turbo": "^2.0.0"
  }
}
```

`turbo.json`:

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": { "dependsOn": ["^build"], "outputs": ["dist/**"] },
    "dev": { "cache": false, "persistent": true }
  }
}
```

`turbo run dev` 한 번 치면 web이랑 api가 같이 뜨고, `shared`를 바꾸면 양쪽이 알아서 다시 컴파일된다.

### 왜 pnpm + Turborepo였나
pnpm은 디스크를 적게 쓰고 workspace 링크가 깔끔하다 (npm/yarn보다 빠르다). Turborepo는 패키지 간 빌드 캐시를 잡아주는 게 핵심인데, 덕분에 shared만 바꾼 PR이 매번 풀빌드를 안 돌게 된다. 사이드 프로젝트 규모에서도 차이가 꽤 크게 느껴진다.

---

## 2. Docker로 PostgreSQL — 로컬·운영 환경을 같게

```yaml
# docker-compose.yml
services:
  db:
    image: postgres:16-alpine
    container_name: bar-manager-db
    restart: unless-stopped
    environment:
      POSTGRES_USER: bm
      POSTGRES_PASSWORD: bm
      POSTGRES_DB: bar_manager
    ports:
      - '5432:5432'
    volumes:
      - bm_data:/var/lib/postgresql/data

volumes:
  bm_data:
```

`apps/api/.env`:

```env
DATABASE_URL="postgresql://bm:bm@localhost:5432/bar_manager?schema=public"
JWT_SECRET="dev-secret-change-me"
```

`pnpm db:up` 한 번이면 DB가 뜬다. 운영에서도 똑같이 RDS PostgreSQL로 바꿔주기만 하면 끝 — URL만 갈아치우는 식이라 코드는 손댈 일이 거의 없다.

---

## 3. shared 패키지 — Zod로 도메인 타입 한 곳에

`packages/shared/package.json`:

```json
{
  "name": "@bar-manager/shared",
  "version": "0.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": { "build": "tsc -p tsconfig.json" },
  "dependencies": { "zod": "^3.23.0" }
}
```

`packages/shared/src/ingredient.ts`:

```ts
import { z } from 'zod';

export const baseUnitSchema = z.enum(['ML', 'G', 'EA']);
export type BaseUnit = z.infer<typeof baseUnitSchema>;

export const ingredientSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string().nullable(),
  baseUnit: baseUnitSchema,
  stockQty: z.number(),
  minStock: z.number(),
  cost: z.number(),
});
export type Ingredient = z.infer<typeof ingredientSchema>;

export const createIngredientSchema = ingredientSchema.omit({ id: true }).extend({
  stockQty: z.number().default(0),
  minStock: z.number().default(0),
  cost: z.number().default(0),
});
export type CreateIngredientInput = z.infer<typeof createIngredientSchema>;
```

이 한 파일이 양쪽에서 다 쓰인다.

- 백엔드 controller의 validation pipe (`new ZodValidationPipe(createIngredientSchema)`)
- 프론트 폼 인풋의 타입 추론
- API 응답 객체의 타입 가드

**같은 타입을 두 번 쓸 일이 없어진다.** 처음 한 번 설정해두는 게 좀 귀찮을 뿐, 그 뒤로는 도메인이 늘어날수록 이득이 복리처럼 쌓이더라.

---

## 4. API 만들기 — NestJS + Prisma

### 4.1 NestJS init

```bash
cd apps
nest new api --package-manager pnpm
```

기본 구조에서 `apps/api/src/` 아래에 도메인별로 모듈을 하나씩 추가해가는 식이다.

### 4.2 Prisma init

```bash
cd apps/api
pnpm add @prisma/client
pnpm add -D prisma
pnpm prisma init
```

`apps/api/prisma/schema.prisma` 첫 버전:

```prisma
generator client {
  provider = "prisma-client-js"
}
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id           String  @id @default(cuid())
  email        String  @unique
  passwordHash String
  handle       String  @unique
  barName      String  @default("My Bar")
  createdAt    DateTime @default(now())

  ingredients Ingredient[]
  recipes     Recipe[]

  @@map("users")
}

model Ingredient {
  id        String  @id @default(cuid())
  ownerId   String
  name      String
  category  String?
  baseUnit  String  // 'ML' | 'G' | 'EA'
  stockQty  Float   @default(0)
  minStock  Float   @default(0)
  cost      Float   @default(0)
  createdAt DateTime @default(now())

  owner             User               @relation(fields: [ownerId], references: [id], onDelete: Cascade)
  recipeIngredients RecipeIngredient[]
  stockLogs         StockLog[]

  @@index([ownerId])
  @@map("ingredients")
}

model Recipe {
  id        String  @id @default(cuid())
  ownerId   String
  name      String
  price     Int     @default(0)
  isActive  Boolean @default(true)
  createdAt DateTime @default(now())

  owner       User               @relation(fields: [ownerId], references: [id], onDelete: Cascade)
  ingredients RecipeIngredient[]

  @@index([ownerId])
  @@map("recipes")
}

model RecipeIngredient {
  id           String @id @default(cuid())
  recipeId     String
  ingredientId String
  amount       Float

  recipe     Recipe     @relation(fields: [recipeId], references: [id], onDelete: Cascade)
  ingredient Ingredient @relation(fields: [ingredientId], references: [id], onDelete: Restrict)

  @@unique([recipeId, ingredientId])
  @@map("recipe_ingredients")
}

enum StockLogType { RESTOCK CONSUME WASTE ADJUST }

model StockLog {
  id           String       @id @default(cuid())
  ingredientId String
  type         StockLogType
  amount       Float
  createdAt    DateTime     @default(now())

  ingredient Ingredient @relation(fields: [ingredientId], references: [id], onDelete: Cascade)

  @@index([ingredientId])
  @@map("stock_logs")
}
```

핵심은 **`RecipeIngredient`가 다리** 역할을 한다는 거다. 칵테일 한 잔이 어떤 재료를 얼마나 쓰는지가 전부 여기에 담긴다. 차감 엔진은 이 테이블을 읽고 트랜잭션을 돈다.

마이그레이션:

```bash
pnpm prisma migrate dev --name init
```

---

## 5. 차감 엔진의 첫 코드

`apps/api/src/recipe/recipe.service.ts`의 핵심:

```ts
async make(ownerId: string, recipeId: string, qty = 1) {
  // 1. 레시피 + 구성 재료 로드
  const recipe = await this.prisma.recipe.findFirst({
    where: { id: recipeId, ownerId },
    include: { ingredients: { include: { ingredient: true } } },
  });
  if (!recipe) throw new NotFoundException('레시피 없음');

  // 2. 재고 부족 사전 검증
  const shortages = recipe.ingredients.filter(
    (ri) => ri.ingredient.stockQty < ri.amount * qty,
  );
  if (shortages.length > 0) {
    throw new BadRequestException(
      `재고 부족: ${shortages.map((s) => s.ingredient.name).join(', ')}`,
    );
  }

  // 3. 트랜잭션 — 차감 + 로그가 한 묶음
  return this.prisma.$transaction(async (tx) => {
    for (const ri of recipe.ingredients) {
      const used = ri.amount * qty;
      await tx.ingredient.update({
        where: { id: ri.ingredientId },
        data: { stockQty: { decrement: used } },
      });
      await tx.stockLog.create({
        data: {
          ingredientId: ri.ingredientId,
          type: 'CONSUME',
          amount: -used,
        },
      });
    }
    return { recipeId, qty };
  });
}
```

이게 **차감 엔진의 본질**이다. 50줄도 안 되는 코드가 세 가지를 다 책임진다.

- 재고가 부족하면 즉시 거부 (atomicity)
- 재료 차감이랑 StockLog 기록이 한 트랜잭션 안에서 일어남 (하나라도 실패하면 전부 롤백)
- 같은 함수를 직원 주문에서도, 손님 QR 주문에서도 그대로 호출

나중에 기주 옵션·visit·결제·QR 승인 흐름이 다 이 한 함수의 변주로 풀린다. 그래서 이 50줄을 제일 먼저, 가장 단단하게 짜두는 게 중요했다.

---

## 6. 인증 — JWT로 stateless

`apps/api/src/auth/auth.service.ts`:

```ts
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async register(input: RegisterInput): Promise<AuthResponse> {
    const exists = await this.prisma.user.findFirst({
      where: { OR: [{ email: input.email }, { handle: input.handle }] },
    });
    if (exists) throw new ConflictException('이미 사용 중');

    const passwordHash = await bcrypt.hash(input.password, 10);
    const user = await this.prisma.user.create({
      data: { email: input.email, passwordHash, handle: input.handle, barName: input.barName },
    });
    return this.sign(user);
  }

  async login(input: LoginInput): Promise<AuthResponse> {
    const user = await this.prisma.user.findUnique({ where: { email: input.email } });
    if (!user || !(await bcrypt.compare(input.password, user.passwordHash))) {
      throw new UnauthorizedException('인증 실패');
    }
    return this.sign(user);
  }

  private sign(user: { id: string; email: string; handle: string; barName: string }) {
    const payload = { sub: user.id, email: user.email, handle: user.handle, barName: user.barName };
    return { token: this.jwt.sign(payload), user };
  }
}
```

`JwtAuthGuard`는 모든 protected route에 붙는다:

```ts
@Controller('ingredients')
@UseGuards(JwtAuthGuard)
export class IngredientController {
  @Get()
  list(@CurrentUser() user: AuthedUser) {
    return this.service.list(user.id);
  }
}
```

세션 서버 따로 두지 않고 토큰 하나로 검증. 이 정도 규모엔 딱 적당하더라.

---

## 7. 웹 셋업 — Vite + React + Tailwind

```bash
cd apps
pnpm create vite web --template react-ts
cd web
pnpm add @tanstack/react-query @tanstack/react-table react-router-dom axios
pnpm add @bar-manager/shared@workspace:*
pnpm add -D tailwindcss postcss autoprefixer
pnpm tailwindcss init -p
```

`apps/web/vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
});
```

dev 서버 5173에서 들어오는 `/api` 요청을 3001로 프록시한다. CORS도 안 겪고 쿠키도 같은 origin처럼 동작해서 편함.

`apps/web/src/lib/api.ts`:

```ts
import axios from 'axios';

export const api = axios.create({ baseURL: '/api' });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('bm_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export function errorMessage(err: unknown): string {
  if (axios.isAxiosError(err)) {
    return err.response?.data?.message ?? err.message;
  }
  return String(err);
}
```

---

## 8. 첫 화면들

가장 단순한 흐름부터 만들었다. **로그인 → 재고 보기 → 레시피 한 잔 만들기**.

### 로그인
이메일·비밀번호 입력 → POST `/api/auth/login` → 토큰을 localStorage에 저장 → 대시보드로 redirect.

### 재고 페이지
`useQuery(['ingredients'])`로 fetch해서 카드 그리드로 보여준다. 카테고리별 그룹핑은 taxonomy 만들면서 나중에 붙였다.

### 레시피 페이지
`useQuery(['recipes'])`로 가져와서 각 레시피 카드에 **`한 잔 만들기`** 버튼을 단다.

```tsx
const makeMutation = useMutation({
  mutationFn: (id: string) => api.post(`/recipes/${id}/make`),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['recipes'] });
    queryClient.invalidateQueries({ queryKey: ['ingredients'] });
    toast.success('한 잔 차감했어요');
  },
  onError: (e) => toast.error(errorMessage(e)),
});
```

**이 버튼 한 번이 차감 엔진을 그대로 호출하는 거다.** 재고가 줄고, StockLog가 쌓이고, "지금 만들 수 있는 칵테일" 계산이 자동으로 바뀐다. 0장에서 정한 세 원칙이 한 번의 클릭으로 다 동작하는 셈이다.

---

## 9. 첫 통합 — 끝에서 끝까지 한 번 돌려보기

여기까지 만들면 가능한 시나리오는 이렇게 된다.

1. `pnpm db:up` — PostgreSQL 컨테이너 띄우기
2. `pnpm dev` — API(3001) + Web(5173) 같이 뜬다
3. 브라우저로 회원가입 → 로그인
4. 재고 추가 (탱커레이 진 700ml, 토닉워터 1500ml, 라임 8개)
5. 레시피 추가 (진토닉 = 진 45ml + 토닉 120ml + 라임 1개)
6. **한 잔 만들기** 클릭 → 재고가 진 655ml, 토닉 1380ml, 라임 7개로 줄어든다
7. StockLog 페이지에서 방금 찍힌 차감 로그 확인

이 흐름이 한 번 깔끔하게 돌아가면, **그 뒤에 붙는 모든 기능은 이 위의 변주**가 된다.

- 기주 옵션? `RecipeIngredient`에 대체 후보만 추가하면 끝.
- 손님 QR 주문? `recipe.make()`를 `source='QR'`로 호출하면 끝.
- 매출 통계? StockLog랑 OrderItem을 집계하면 끝.

기획 글에서 "차감 엔진 위에 다 얹힌다"고 했던 게 코드 레벨에서 실제로 그렇게 동작하기 시작하는 시점이다.

---

## 10. 이 단계에서 얻은 것

### 코어는 50줄로 짤 수 있을 만큼 작게
`recipe.make()`가 50줄을 넘었으면 나중에 기주 옵션·QR·취소를 그 위에 얹기 진짜 어려웠을 거다. **"이 함수가 책임지는 게 정확히 뭐냐"**를 한 문장으로 답할 수 있을 만큼 작게 시작해야 한다. 코어가 작아야 그 위에 뭐든 얹힐 수 있더라.

### 타입을 한 곳에 정의하는 부담은 처음만
shared 패키지를 만드는 초기엔 좀 귀찮다 — workspace 셋업, tsconfig path, import 경로 같은 것들. 근데 한 달쯤 지나서 도메인 모델이 10개 넘어가기 시작하면 그 초기 부담의 10배가 돌아온다. 처음 한 번만 참으면 그 뒤로는 편하다.

### Docker는 미래의 자기 자신한테 친절한 일
처음엔 `brew install postgresql`이 더 쉽다. 근데 두 달 뒤 OS 새로 깔거나 노트북 바꾸면 그 짓을 또 해야 한다. `docker compose up -d db` 한 줄이 그때 훨씬 친절하다. 새 환경에서 5분 만에 똑같은 DB가 뜨는 경험을 한 번 하면 다시 못 돌아가더라.

### Prisma 마이그레이션을 무서워하지 말 것
"마이그레이션이 무섭다"는 보통 이전 DB가 무서운 거다. Prisma + Docker DB 조합이라면 `migrate reset` 한 줄로 깨끗한 상태로 돌아갈 수 있다 (시드도 자동). 그러면 마이그레이션이 무거운 의식이 아니라 가벼운 도구가 된다.

---

## 다음 글에서

여기까지가 **"한 잔 만들면 재료가 차감된다"**의 첫 구현이다. 다음 글에선 그 위에 도메인을 차근차근 얹어볼 거다.

- 재료 카테고리(taxonomy) — 술·베르무트·리큐어·시럽... 한 트리로
- 입고·폐기·상미기한 — `stockLog.type`을 활용
- 메뉴북 — 사장이 손님에게 보여주는 화면 (색·폰트·레이아웃을 전부 설정값으로)
- 좌석·예약 — 업장 운영 레이어의 첫걸음

같은 차감 엔진 위에 이게 다 얼마나 자연스럽게 얹히는지가 다음 글의 핵심이 될 거다.
