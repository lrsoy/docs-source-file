import { defineUserConfig } from 'vuepress-vite'
import { defaultTheme, } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { localTheme } from './theme'


export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Lrsoy',
  description: '这是我的第一个 VuePress 站点',
  base: "/docs-source-file/",
  theme: localTheme({
    logo: '/images/logoNavBook.png',
    logoDark: "/images/logoNavBookDark.png",
    lastUpdated: true,
    repo: 'https://github.com/lrsoy',
    lastUpdatedText: "更新时间",
    contributorsText: '贡献者',
    editLink: false,
    navbar: [
      {
        text: '指南',
        link: "/guide/index.md"
      },
      {
        text: '前端',
        link: "/web/index.md"
      },
      {
        text: '材料',
        link: "/material/index.md"
      },
      {
        text: '其他',
        link: "/other/index.md"
      },
      {
        text: 'Github Actions',
        link: "/github/index.md"
      }
    ]
  }),
  alias: {
    '@theme/HomeHero.vue': path.resolve(__dirname, './components/CustomizeHomeHero.vue'),
    '@theme/HomeFeatures.vue': path.resolve(__dirname, './components/CustomizeHomeFeatures.vue'),
  }
})
