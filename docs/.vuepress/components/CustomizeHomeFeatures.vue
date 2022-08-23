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
import { computed, nextTick } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/lib/shared'
import { useRouter } from 'vue-router'
const router = useRouter()

// import * as matter from 'gray-matter';

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const features = computed(() => {
  if (isArray(frontmatter.value.features)) {
    return frontmatter.value.features
  }
  return []
})

// src/utils/isLinkMailto.ts
const isLinkMailto = (link) => /^mailto:/.test(link);

// src/utils/isLinkTel.ts
const isLinkTel = (link) => /^tel:/.test(link);

// src/utils/isLinkHttp.ts
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);

const checkDetails = () => {
  router.push('/github/index.md')
}

// 获取首页精选文章文件，组合成想要的数据
// const markdowns = import.meta.glob('../../featured/**/*.md')

// const getFeaturedfileName = () => {
//   console.log(markdowns);
//   console.log(features.value);

//   Object.entries(markdowns).forEach(([file, Module]) => {
//     const name = file.replace('../..', '')
//     // const name = file.replace(/.+featured\/|\.md/gi, '')
//     // const bg = file.replace(/.+theme\/+(theme-fm-)|\.scss/gi, '')
//     console.log(name);

//   })
// }
// getFeaturedfileName()

// const str = '---\nfoo: bar\n---\nThis is an excerpt.\n---\nThis is content';
// console.log(matter(str));


// console.log(matter.stringify('foo bar baz', { title: 'Home' }));
// const file = matter('---\nfoo: bar\n---\nThis is an excerpt.\n---\nThis is content', { excerpt: true });

// console.log(matter.read('blog-post.md'));


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
            <div class="label">
              <!-- <span v-for="child in 2">
                <i>1</i>
                标题
              </span>-->
            </div>
            <h2 @click="checkDetails">{{ feature.title }}</h2>
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