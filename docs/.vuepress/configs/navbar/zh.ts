import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
  {
    text: '指南',
    link: "/guide/index.md"
  },
  {
    text: '前端',
    children: [
      {
        text: '笔记',
        children: [
          { text: 'html', link: '/web/html/README.md' },
          { text: 'css', link: '/web/css/README.md' },
          { text: 'javascript', link: '/web/javascript/README.md' },
          { text: 'typescript', link: '/web/typescript/README.md' },
          { text: 'nestjs', link: '/web/nestjs/README.md' },
          { text: 'node', link: '/web/node/README.md' },
          { text: 'react', link: '/web/react/README.md' },
          { text: 'vue', link: '/web/vue/README.md' }
        ]
      },
      {
        text: '工具',
        children: [
          { text: 'npm', link: '/tool/npm.md' },
          { text: 'yarn', link: '/tool/yarn.md' },
          { text: 'pnpm', link: '/tool/pnpm.md' },
          { text: 'nrm', link: '/tool/nrm.md' },
        ]
      },
      {
        text: 'Github',
        children: [
          { text: 'Git', link: '/github/git.md' },
          { text: 'Github', link: '/github/github.md' },
          { text: 'Github Actions', link: '/github/github-actions.md' },
          { text: 'Github Pages', link: '/github/github-pages.md' },
        ]
      },
    ]
  },
  {
    text: '精选',
    children: [
      {
        text: '记录',
        children: [
          { text: '开发npm包流程', link: '/home/npm.md' },
          { text: '自动化打包发布', link: '/home/github.md' },
          { text: 'VuePress2.x配置', link: '/home/vuepress.md' },
        ]
      }
    ]
  }
]

// '/web/html/README.md',
// '/web/css/README.md',
// '/web/javascript/README.md',
// '/web/typescript/README.md',
// '/web/nestjs/README.md',
// '/web/node/README.md',
// '/web/react/README.md',
// '/web/vue/README.md',
//   {
//     text: '材料',
//     link: "/material/index.md"
//   },
//   {
//     text: '其他',
//     link: "/other/index.md"
//   },
//   {
//     text: 'Github Actions',
//     link: "/github/index.md"
//   }