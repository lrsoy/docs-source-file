import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("F:/study-notes/docs/.vuepress/theme/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("F:/study-notes/docs/.vuepress/theme/layouts/Layout.vue")),
}
