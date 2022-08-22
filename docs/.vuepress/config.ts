import { defineUserConfig } from 'vuepress-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'



export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Lrsoy',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    logo: '/images/logoNavBook.png',
    logoDark: "/images/logoNavBookDark.png",
    navbar: [
      // my github
      {
        text: 'Github',
        link: 'https://github.com/lrsoy',
      }
    ]
  }),
  alias: {
    '@theme/HomeHero.vue': path.resolve(__dirname, './components/CustomizeHomeHero.vue'),
    '@theme/HomeFeatures.vue': path.resolve(__dirname, './components/CustomizeHomeFeatures.vue'),
  }
})