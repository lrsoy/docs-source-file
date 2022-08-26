<!-- CustomizeHomeFeatures 修改原 首页的底部列表组件-->

<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed, ref } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/lib/shared'
import { useRouter } from 'vue-router'
import { withBase } from '@vuepress/client'
const router = useRouter()

const imgs = ref([
  { id: 0, url: '/images/CustomizeHomeFeatures03.jpg', link: '/home/npm.md' },
  { id: 0, url: '/images/CustomizeHomeFeatures02.png', link: '/home/github.md' },
  { id: 0, url: '/images/CustomizeHomeFeatures01.jpg', link: '/home/vuepress.md' }
])

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const features = computed(() => {
  if (isArray(frontmatter.value.features)) {
    return frontmatter.value.features.map((item, i) => {
      item.url = imgs.value[i].url
      item.link = imgs.value[i].link
      return item
    })
  }
  return []
})

const checkDetails = (route: string) => {
  if (route) {
    router.push(route)
  }
}

</script>

<template>
  <div class="CustomizeHomeFeatures features" v-if="features.length">
    <div
      class="item"
      v-for="feature in features"
      :key="feature.title"
      @click="checkDetails(feature.link)"
    >
      <article>
        <div class="entry-media">
          <img :src="withBase(feature.url)" />
        </div>
        <div class="contents">
          <div class="avatar">
            <img src="/images/user.jpg" />
          </div>
          <div class="title">
            <div class="label"></div>
            <h2>{{ feature.title }}</h2>
          </div>
          <div class="content">{{ feature.details }}</div>
        </div>
      </article>
    </div>
  </div>
  <!-- <div v-if="features.length" class="features">
    <div v-for="feature in features" :key="feature.title" class="feature">
      <h2>{{ feature.title }}</h2>
      <p>{{ feature.details }}</p>
    </div>
  </div>-->
</template>