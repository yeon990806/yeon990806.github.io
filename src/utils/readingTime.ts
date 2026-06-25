/**
 * Estimate reading time in minutes for a mixed Korean/English body.
 * Heuristic: 500 chars/min — works well for Korean prose,
 * close enough for English in a personal-blog context.
 * Floors to 1 minute minimum.
 */
export function readingTime(body: string | undefined | null): number {
  if (!body) return 1;
  // Strip frontmatter, code fences, and markdown markup roughly.
  const stripped = body
    .replace(/^---[\s\S]*?---/, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[[^\]]*\]\([^)]*\)/g, '');
  const chars = stripped.replace(/\s+/g, '').length;
  return Math.max(1, Math.ceil(chars / 500));
}
