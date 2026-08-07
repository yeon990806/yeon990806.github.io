import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * 본문이 있는 글만 개별 페이지를 갖습니다.
 *
 * 케이스 스터디는 posts에 있지만, 회고 글 없이 /portfolio 피드에만 올리는
 * 작업도 있습니다(showcase: true + 빈 본문). 그런 항목까지 글 목록·RSS·태그에
 * 넣으면 빈 페이지로 연결되므로 여기서 걸러냅니다.
 */
export function hasWriteup(entry: CollectionEntry<'posts'>): boolean {
  return (entry.body ?? '').trim().length > 0;
}

/** 읽을 본문이 있는 글. 글 목록·RSS·태그·시리즈는 전부 이걸 씁니다. */
export async function getArticles(includeDrafts = false) {
  return getCollection(
    'posts',
    ({ data }) => includeDrafts || !data.draft,
  ).then((entries) => entries.filter(hasWriteup));
}

/** /portfolio 피드에 오르는 작업. 본문 유무와 무관합니다. */
export async function getShowcase(includeDrafts = false) {
  return getCollection(
    'posts',
    ({ data }) => data.showcase && (includeDrafts || !data.draft),
  );
}
