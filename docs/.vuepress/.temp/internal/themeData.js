export const themeData = JSON.parse("{\"logo\":\"/images/logoNavBook.png\",\"logoDark\":\"/images/logoNavBookDark.png\",\"navbar\":[{\"text\":\"VuePress配置\",\"link\":\"/guide/index.md\"},{\"text\":\"前端\",\"link\":\"/web/index.md\"},{\"text\":\"材料\",\"link\":\"/material/index.md\"},{\"text\":\"其他\",\"link\":\"/other/index.md\"},{\"text\":\"Github Actions\",\"link\":\"/github/index.md\"},{\"text\":\"Github\",\"link\":\"https://github.com/lrsoy\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
