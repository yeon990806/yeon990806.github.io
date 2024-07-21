import { DefaultSeo, DefaultSeoProps } from "next-seo"

export const siteConfig = {
  title: 'YeON.me',
  description: '',
  url: 'https://yeon990806.github.io',
  author: {
    name: 'Doyeon Kim',
    bio: '',
    contacts: {
      email: 'yeon990806@gmail.com',
      github: 'yeon990806',
      twitter: '',
      velog: '',
      linkedIn: '',
      youtube: '',
      instagram: ''
    }
  },
  menus: [
    { label: 'blog', path: '/blog' },
    { label: 'series', path: '/series' },
    { label: 'timeline', path: '/timeline' },
    { label: 'about me', path: '/about' }
  ]
}

export const seoConfig: DefaultSeoProps = {
  title: siteConfig.title,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: 'ko-KR',
    url: siteConfig.url,
    siteName: siteConfig.title,
  },
  additionalMetaTags: [
    { name: 'author', content: siteConfig.author.name }
  ]
}