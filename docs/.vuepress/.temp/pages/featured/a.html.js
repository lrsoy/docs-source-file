export const data = JSON.parse("{\"key\":\"v-360f0400\",\"path\":\"/featured/a.html\",\"title\":\"测试文件\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1661270471000,\"contributors\":[{\"name\":\"lrsoy\",\"email\":\"lying_jk_bp@163.com\",\"commits\":1}]},\"filePathRelative\":\"featured/a.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}