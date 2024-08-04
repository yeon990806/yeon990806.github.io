/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yeon990806.github.io',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 1,
  exclude: ['/about'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/about'
        ]
      },
    ]
  }
};