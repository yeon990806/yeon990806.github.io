// Site-wide constants. Centralize anything that might change so pages don't hardcode it.

export const SITE_TITLE = 'yeon.dev';
export const SITE_DESCRIPTION = 'yeon의 글, 코드, 기록.';
export const SITE_AUTHOR = 'yeon';

export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/tags', label: 'Tags' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/yeon990806',
  email: 'mailto:yeon990806@gmail.com',
  rss: '/rss.xml',
} as const;
