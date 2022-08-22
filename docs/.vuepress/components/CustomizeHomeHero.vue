<!-- CustomizeHomeHero  修改原有的首页header的内容与样式-->
<script setup lang="ts">
import AutoLink from '@vuepress/theme-default/lib/client/components/AutoLink.vue'
import {
  ClientOnly,
  usePageFrontmatter,
  useSiteLocaleData,
  withBase,
} from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import type { FunctionalComponent } from 'vue'
import { computed, h, nextTick } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/lib/shared'
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const siteLocale = useSiteLocaleData()
const isDarkMode = useDarkMode()

const heroImage = computed(() => {
  if (isDarkMode.value && frontmatter.value.heroImageDark !== undefined) {
    return frontmatter.value.heroImageDark
  }
  return frontmatter.value.heroImage
})

const heroText = computed(() => {
  if (frontmatter.value.heroText === null) {
    return null
  }
  return frontmatter.value.heroText || siteLocale.value.title || 'Hello'
})

const heroAlt = computed(
  () => frontmatter.value.heroAlt || heroText.value || 'hero'
)

const tagline = computed(() => {
  if (frontmatter.value.tagline === null) {
    return null
  }
  return (
    frontmatter.value.tagline ||
    siteLocale.value.description ||
    'Welcome to your VuePress site'
  )
})

const actions = computed(() => {
  if (!isArray(frontmatter.value.actions)) {
    return []
  }

  return frontmatter.value.actions.map(({ text, link, type = 'primary' }) => ({
    text,
    link,
    type,
  }))
})

const HomeHeroImage: FunctionalComponent = () => {
  if (!heroImage.value) return null
  const img = h('img', {
    src: withBase(heroImage.value),
    alt: heroAlt.value,
  })
  if (frontmatter.value.heroImageDark === undefined) {
    return img
  }
  // wrap hero image with <ClientOnly> to avoid ssr-mismatch
  // when using a different hero image in dark mode
  return h(ClientOnly, () => img)
}

</script>

<template>
  <header class="hero">
    <HomeHeroImage />

    <h1 v-if="heroText" id="main-title">{{ heroText }}</h1>

    <p v-if="tagline" class="description">{{ tagline }}</p>

    <!-- <p v-if="actions.length" class="actions">
      <AutoLink
        v-for="action in actions"
        :key="action.text"
        class="action-button"
        :class="[action.type]"
        :item="action"
      />
    </p>-->
    <button class="Home-blog-button" @click="btnClick" v-if="actions.length">
      <div class="icon">
        <div class="cannon"></div>
        <div class="confetti">
          <svg viewBox="0 0 18 16">
            <polyline points="1 10 4 7 4 5 6 1" />
            <path d="M4,13 C5.33333333,9 7,7 9,7 C11,7 12.3340042,6 13.0020125,4" />
            <path
              d="M6,15 C7.83362334,13.6666667 9.83362334,12.6666667 12,12 C14.1663767,11.3333333 15.8330433,9.66666667 17,7"
            />
          </svg>
          <i v-for="item in 6"></i>
          <div class="emitter"></div>
        </div>
      </div>
      <span>
        <AutoLink
          v-for="action in actions"
          :key="action.text"
          :class="[action.type]"
          :item="action"
        />
      </span>
    </button>
  </header>
</template>
