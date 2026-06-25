---
title: '마크다운 · 코드 · 표 미리보기'
description: '블로그 렌더링 검증용 데모 포스트. 헤딩, 코드 블록, 표, 인용, 리스트 등을 한 번에 테스트.'
pubDate: '2026-06-20'
tags: ['메타', '디자인']
draft: true
---

이 글은 마크다운 렌더링 검증용 데모입니다. 게시 전 삭제하거나 `draft: true`로 두세요.

## 본문 톤 확인

본문은 [Pretendard](https://github.com/orioncactus/pretendard) 가변폰트로 렌더됩니다. 한·영 혼용에서 자연스러운 베이스라인을 잡습니다. **굵게**, *기울임*, ~~취소선~~, 그리고 [링크](https://astro.build).

### 세 번째 단계 헤딩

#### 네 번째 단계 헤딩

##### 다섯 번째 단계 헤딩

## 인라인 코드와 키보드

인라인 코드는 `const x = 42;` 처럼 보입니다. 키보드 단축키는 <kbd>Ctrl</kbd>+<kbd>K</kbd>.

## 코드 블록 — JavaScript

```js
// 간단한 디바운스 함수
function debounce(fn, ms = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

const onResize = debounce(() => console.log('resized'), 150);
window.addEventListener('resize', onResize);
```

## 코드 블록 — TypeScript

```ts
type Post = {
  id: string;
  title: string;
  tags: string[];
  series?: string;
};

const byNewest = (a: Post, b: Post) => b.id.localeCompare(a.id);
```

## 코드 블록 — Shell

```bash
pnpm install
pnpm run dev
```

## 리스트

순서 있는 리스트:

1. 첫 번째
2. 두 번째
3. 세 번째
   1. 중첩 항목
   2. 중첩 항목

순서 없는 리스트:

- 항목
- 항목
  - 중첩
  - 중첩
- 항목

## 표

| 항목 | 설명 | 비고 |
|---|---|---|
| Astro | 정적 사이트 빌더 | v6 |
| Tailwind | 유틸리티 CSS | v4 |
| Pretendard | 본문 폰트 | Variable |

## 인용

> 매일 조금씩 쌓는다.
> 그게 가장 빠른 길이다.

## 구분선 아래

---

본문 끝.
