import { defineUserConfig } from 'vuepress-vite'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme, } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { localTheme } from './theme'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Lrsoy',
  description: '这是我的第一个 VuePress 站点',
  // base:"/docs-source-file/",
  theme: localTheme({
    logo: '/images/logoNavBook.png',
    logoDark: "/images/logoNavBookDark.png",
    navbar: [
      {
        text: 'VuePress配置',
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
      },
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
  },
  // 配置 vite 配置文件 ‘ vite.config.ts ’ 中的相关配置
  // bundler: viteBundler({
  //   viteOptions: { // vite 的基础配置
  //     // ...other config settings
  //     optimizeDeps: { // 官方配置错误解决地址 // https://github.com/jonschlinkert/gray-matter/issues/143
  //       esbuildOptions: {
  //         // Node.js global to browser globalThis
  //         define: {
  //           global: 'globalThis'
  //         },
  //         // Enable esbuild polyfill plugins
  //         plugins: [
  //           NodeGlobalsPolyfillPlugin({
  //             buffer: true
  //           })
  //         ]
  //       }
  //     }
  //   }
  // })
})
