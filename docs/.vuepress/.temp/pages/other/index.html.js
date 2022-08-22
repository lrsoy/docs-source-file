export const data = JSON.parse("{\"key\":\"v-e4cb1150\",\"path\":\"/other/\",\"title\":\"其他内容\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"other/index.md\"}")

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
