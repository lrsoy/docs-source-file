export const themeData = JSON.parse("{\"logo\":\"/images/logoNavBook.png\",\"logoDark\":\"/images/logoNavBookDark.png\",\"lastUpdated\":true,\"repo\":\"https://github.com/lrsoy\",\"lastUpdatedText\":\"更新时间\",\"contributorsText\":\"贡献者\",\"editLink\":false,\"navbar\":[{\"text\":\"指南\",\"link\":\"/guide/index.md\"},{\"text\":\"前端\",\"link\":\"/web/index.md\"},{\"text\":\"材料\",\"link\":\"/material/index.md\"},{\"text\":\"其他\",\"link\":\"/other/index.md\"},{\"text\":\"Github Actions\",\"link\":\"/github/index.md\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
