import { defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

export default {
  base: '/js_tricks/',
  title: 'js tricks',
  description: '常用的js方法，js_tricks',
  dest: './dist',
  repo: 'https://qishaoxuan.github.io/js_tricks/',
  head: [
    ['link', {rel: 'icon', href: `/images/favicon.png`}],
    ['meta', {name: 'theme-color', content: '#00adb5'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['meta', {name: 'msapplication-TileColor', content: '#00adb5'}],
    ['meta', {name: 'description', itemprop: 'description', content: '常用的js方法，js_tricks'}],
    ['meta', {itemprop: 'name', content: 'js_trick'}],
    ['meta', {itemprop: 'image', content: '/js_tricks/images/favicon.png'}],
  ],
  theme: defaultTheme({
    colorMode: 'dark',  // 在colorModeSwitch为false时生效
    colorModeSwitch: true, // 默认为true
    navbar: [
      /*{
        text: '首页',
        link: '/'
      },*/
      { text: 'css tricks', link: 'https://qishaoxuan.github.io/css_tricks/' },
      { text: 'blog', link: 'https://qishaoxuan.github.io/blog/' },
      // { text: 'GitHub', link: 'https://github.com/zzzzbbbxxx/js_tricks' },
    ],
    repo: 'https://github.com/zzzzbbbxxx/js_tricks',
    sidebar: [
      '/dom/',
      '/bom/',
      '/array/',
      '/date/',
      '/number/',
      '/cookie/',
      '/color/',
    ],
    contributors: true,
  }),
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
  },
  plugins: [
    searchPlugin({
      // 配置项
      locales: {
        '/': {
          placeholder: '搜索',
        }
      }
    })
  ],
}

