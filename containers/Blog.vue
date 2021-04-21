<template>
  <div class="page">
    <div class="head">
      <SectionTop title="Наш Блог" />
    </div>

    <ul class="article-list">
      <li
        v-for="article in posts.results"
        :key="article.uid"
        class="article-item"
      >
        <ArticlePreview :article="article" />
      </li>
    </ul>
  </div>
</template>
<script>
import ArticlePreview from '@/components/ArticlePreview'
import SectionTop from '@/components/sections/SectionTop'

export default {
  components: { ArticlePreview, SectionTop },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
    posts: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.article {
  &-list {
    max-width: 1620px;
    margin: 0 auto 300px;
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    flex: 0 50%;
    margin-bottom: 8%;
  }
}
</style>
