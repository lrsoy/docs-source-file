<!-- CustomizeHomeFeatures 修改原 首页的底部列表组件-->

<!-- <script setup>
import { ref, defineEmits, defineProps, nextTick, reactive, onMounted, watch, computed, onUnmounted } from 'vue'
</script>
<template>
  <div>创建组件</div>
</template>

<style  scoped>
</style> -->


<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/lib/shared'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const features = computed(() => {
  if (isArray(frontmatter.value.features)) {
    return frontmatter.value.features
  }
  return []
})
</script>

<template>
  <div class="CustomizeHomeFeatures features" v-if="features.length">
    <div class="item" v-for="feature in features" :key="feature.title">
      <article>
        <div class="entry-media">
          <img src="/images/CustomizeHomeFeatures02.png" />
        </div>
        <div class="contents">
          <div class="avatar">
            <img src="/images/user.jpeg" />
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