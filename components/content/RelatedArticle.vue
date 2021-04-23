<template>
  <article class="related-article">
    <div class="related-article-wrapper">
      <div class="related-article-image">
        <ImageWithBlur :image="article.data.image.url" :height="470" />
      </div>
      <div class="related-article-button">
        <NavLink
          :href="`/${article.type === 'posts' ? 'blog' : 'examples'}/${
            article.uid
          }`"
          ><h5 class="related-article-title m-0">
            {{ $prismic.asText(article.data.title) }}
          </h5></NavLink
        >
      </div>
    </div>
  </article>
</template>

<script>
import ImageWithBlur from '@/components/content/ImageWithBlur'

export default {
  components: { ImageWithBlur },
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
.related-article {
  &-wrapper {
    text-align: center;
  }
  &-image {
    max-width: 355px;
    height: 480px;
    margin: auto;
    border-radius: 20px;
  }

  &-button {
    margin-top: 35px;
    padding: 0 7.5%;
  }
  &-title {
    font-size: 28px;
    line-height: 38px;
    white-space: normal;
    position: relative;
    color: #1b1732;
    text-align: left;
    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      bottom: -3px;
      left: 50%;
      transform: translateX(-40%);
      width: 80%;
      height: 17px;
      background: #cbdefd;
      transition: all 0.3s ease;
    }
    &:hover {
      &::before {
        height: 5px;
      }
    }
  }
}
</style>
