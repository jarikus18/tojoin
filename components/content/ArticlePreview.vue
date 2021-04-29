<template>
  <article class="article">
    <div class="article-wrapper">
      <div class="article-image">
        <div class="circle" />
        <div class="dots" />
        <div class="article-image-block">
          <ImageWithBlur
            :image="article.data.image.url"
            classname="img-absolute"
          />
        </div>
        <div class="article-button">
          <NavLink
            classname="simple-btn big-btn-text"
            :href="`/${vendor}/${article.uid}`"
          >
            {{ settings.read_more }}
          </NavLink>
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
      <div class="article-button article-button__mobile">
        <NavLink
          classname="simple-btn big-btn-text"
          :href="`/${vendor}/${article.uid}`"
        >
          {{ settings.read_more }}
        </NavLink>
      </div>
    </div>
  </article>
</template>

<script>
import Story from '@/components/content/Story'
import ImageWithBlur from '@/components/content/ImageWithBlur'
import { mapState } from 'vuex'

export default {
  components: { ImageWithBlur, Story },
  props: {
    article: {
      type: Object,
      default() {
        return {}
      },
    },
    vendor: {
      type: String,
      default: 'blog',
    },
  },
  computed: {
    ...mapState(['settings']),
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
    &-block {
      height: 395px;
    }
  }
  &-button {
    text-align: center;
    margin-top: 68px;
    &__mobile {
      display: none;
    }
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
  @media (max-width: 767px) {
    &-wrapper {
      flex-direction: column;
    }
    &-image {
      max-width: 50%;
      width: 100%;
      height: auto;
      margin: 0 auto 30px 0;
      position: relative;
      &-block {
        height: auto;
      }
      .even & {
        margin: 0 0 30px auto;
      }
      .circle {
        border: 4px solid #ffba49;
        width: 114px;
        height: 114px;
        position: absolute;
        border-radius: 50%;
        left: 60%;
        top: -10%;
        .even & {
          width: 33px;
          height: 33px;
          left: -5%;
          top: -5%;
        }
      }
      .dots {
        content: '';
        min-width: 180px;
        height: 91px;
        position: absolute;
        left: 90%;
        top: 50%;
        background: url('~/assets/images/blog/dots.svg') no-repeat 0 0 / contain;
        .even & {
          left: -90%;
        }
      }
    }
    &-content {
      max-width: 100%;
      &-title {
        text-align: center;
        font-size: 26px;
        line-height: 122%;
      }
      &-description {
        font-size: 18px;
        line-height: 25px;
      }
    }
    &-button {
      display: none;
      &__mobile {
        display: block;
        margin-top: 25px;
      }
    }
  }
}
</style>
