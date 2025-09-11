/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.dschool.vn', // ← Thay bằng domain thật
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/admin', '/api/*'], // Tuỳ chọn: loại trừ route không muốn index
};
