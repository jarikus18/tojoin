<template>
  <article class="article">
    <div class="article-wrapper">
      <div class="article-image">
        <ImageWithBlur :image="article.data.image.url" />
        <div class="article-button">
          <NavLink
            classname="simple-btn big-btn-text"
            :href="`/${article.type === 'posts' ? 'blog' : 'examples'}/${
              article.uid
            }`"
            >подробнее</NavLink
          >
        </div>
      </div>

      <div class="article-content">
        <Story>
          <h5 class="article-content-title m-0">
            {{ $prismic.asText(article.data.title) }}
          </h5>
          <!-- eslint-disable vue/no-v-html -->
          <div
            class="article-content-description"
            v-html="$prismic.asHtml(article.data.short_description)"
          ></div>
        </Story>
      </div>
    </div>
  </article>
</template>

<script>
import Story from '@/components/content/Story'
import ImageWithBlur from '@/components/content/ImageWithBlur'

export default {
  components: { ImageWithBlur, Story },
  props: {
    article: {
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
  &-wrapper {
    display: flex;
    justify-content: center;
  }
  &-image {
    max-width: 286px;
    margin-right: 50px;
  }
  &-button {
    text-align: center;
    margin-top: 68px;
  }
  &-content {
    max-width: 380px;
    &-description {
      font-weight: 600;
      font-size: 20px;
      line-height: 27px;
      color: #6a6a6a;
    }
    &-title {
      font-size: 26px;
      line-height: 122%;
      margin-bottom: 20px;
    }
  }
}
</style>
