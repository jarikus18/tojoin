<template>
  <div class="page">
    <article class="single-article">
      <div class="content">
        <div class="content-wrapper">
          <div class="content-image">
            <div class="dots" />
            <div class="circle" />
            <div class="circle-big" />
            <div :class="['content-image content-image__mobile', orientation]">
              <ImageWithBlur :image="post.image.url" />
            </div>
            <div :class="['content-image content-image__desktop', orientation]">
              <ImageWithBlur :image="post.image.url" />
            </div>
          </div>
          <h1 class="h1 title">{{ $prismic.asText(post.title) }}</h1>
          <!-- eslint-disable vue/no-v-html -->
          <div
            class="content-text color-text"
            v-html="$prismic.asHtml(post.content)"
          ></div>
          <div class="content-mobile">
            <Story>
              <h5 class="content-mobile-title m-0">
                {{ $prismic.asText(post.title) }}
              </h5>
              <!-- eslint-disable vue/no-v-html -->
              <div
                class="content-mobile-description color-text"
                v-html="$prismic.asHtml(post.content)"
              ></div>
            </Story>
            <div class="back">
              <NavLink classname="simple-btn big-btn-text" :href="back">
                Истории успеха
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </article>
    <div v-if="related.total_pages > 0" class="related">
      <div class="container">
        <h3 class="h3 related-title">Вам так же могут понравиться:</h3>
        <ul class="related-list">
          <li
            v-for="article in related.results"
            :key="article.uid"
            class="related-item"
          >
            <RelatedArticle :article="article" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import ImageWithBlur from '@/components/content/ImageWithBlur'
import RelatedArticle from '@/components/content/RelatedArticle'
import Story from '@/components/content/Story'

export default {
  components: { ImageWithBlur, RelatedArticle, Story },
  props: {
    back: {
      type: String,
      default: 'blog',
    },
    data: {
      type: Object,
      default() {
        return {}
      },
    },
    post: {
      type: Object,
      default() {
        return {}
      },
    },
    related: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    orientation() {
      const { width, height } = this.post?.image?.dimensions || {}
      return width >= height ? 'horizontal' : 'vertical'
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding: 180px 0 250px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      #e5efff 9.72%,
      #fafbfe 92.03%,
      #fafbfe 145.03%
    );
    width: 100%;
    height: 70vh;
  }
  @media (max-width: 767px) {
    padding: 0 0 150px;
    background: linear-gradient(
      179.99deg,
      #e5efff 9.73%,
      #fafbfe 64.86%,
      #fafbfe 111.01%
    );
    &:before {
      content: none;
    }
  }
}
.single-article {
  margin-bottom: 150px;
  position: relative;
  &::before {
    content: '';
    width: 172px;
    height: 172px;
    background: linear-gradient(224.7deg, #d2e4ff 7.09%, #fafbfe 100.49%);
    position: absolute;
    right: -85px;
    top: 5%;
    border-radius: 50%;
  }
  &::after {
    content: '';
    width: 323px;
    height: 323px;
    background: linear-gradient(225.91deg, #8fb8fd -46.01%, #fafbfe 85.99%);
    transform: matrix(-0.97, 0.26, 0.26, 0.97, 0, 0);
    border-radius: 50%;
    position: absolute;
    left: -155px;
    top: 20%;
  }
  .title {
    font-size: 50px;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .content {
    position: relative;
    padding: 0 5%;
    &-wrapper {
      max-width: 850px;
      margin: auto;
    }
    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(236, 240, 253, 0) 0%,
        rgba(236, 240, 253, 0.53) 14.32%,
        #ecf0fd 45.83%,
        rgba(236, 240, 253, 0.43) 84.33%,
        rgba(236, 240, 253, 0) 100%
      );
    }
    &::after {
      content: '';
      width: 278px;
      height: 278px;
      position: absolute;
      right: -5%;
      bottom: 30%;
      background: linear-gradient(225.91deg, #8fb8fd -46.01%, #fafbfe 85.99%);
      transform: rotate(57.84deg);
      border-radius: 50%;
    }
    &-image {
      position: relative;
      &__desktop {
        max-width: 80%;
        overflow: hidden;
        border-radius: 20px;
        height: 385px;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0 25%;
      }
      &__mobile {
        display: none;
      }
      .dots {
        background: url('~/assets/images/article/green-dots.svg') no-repeat;
        max-width: 572px;
        height: 259px;
        width: 100%;
        position: absolute;
        bottom: 10%;
        display: none;
      }
      .circle {
        position: absolute;
        top: -5%;
        left: 6%;
        width: 108px;
        height: 108px;
        border: 5px solid #ffba49;
        border-radius: 50%;
        display: none;
      }
      .circle-big {
        position: absolute;
        bottom: -5%;
        right: 10%;
        width: 230px;
        height: 230px;
        border: 5px solid #ffba49;
        border-radius: 50%;
        display: none;
      }
      @media (max-width: 767px) {
        &__mobile {
          display: block;
        }
        &__desktop {
          display: none;
        }
        &.horizontal {
          max-width: 100%;
        }
        &.vertical {
          max-width: 50%;
        }
        .dots {
          height: 92px;
          background-size: contain;
          left: 40%;
          display: block;
        }
        .circle-big {
          display: none;
        }
        .circle {
          width: 114px;
          height: 114px;
          left: 30%;
          top: -15%;
          display: block;
        }
      }
    }
    &-text {
      flex: 0 0 58%;
      padding-right: 40px;
      font-size: 20px;
      line-height: 27px;
      position: relative;
      &::v-deep p {
        position: relative;
      }
      &::before {
        content: '';
        position: absolute;
        top: -30px;
        right: -20px;
        width: 252px;
        height: 192px;
        background-image: url(~/assets/icons/quotes.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right 0px top 0px;
      }
      @media (max-width: 767px) {
        display: none;
      }
    }
    &-mobile {
      display: none;
    }

    @media (max-width: 767px) {
      padding: 0 15px;
      display: block;
      &-mobile {
        display: block;
        margin-top: 40px;
        &-title {
          font-size: 26px;
          line-height: 122%;
          text-align: center;
          margin-bottom: 20px;
        }
        &-description {
          font-weight: 600;
          font-size: 18px;
          line-height: 25px;
          color: #6a6a6a;
        }
        & .back {
          text-align: center;
          margin-top: 30px;
          position: relative;
        }
      }
      &::after {
        right: auto;
        bottom: auto;
        top: -25%;
        left: -5%;
        width: 58px;
        height: 58px;
      }
    }
  }
  @media (max-width: 767px) {
    margin: 0 auto 0;
    padding-top: 150px;
    &::after {
      width: 59px;
      height: 59px;
      opacity: 0.5;
      top: 4%;
      left: 0;
    }
    &::before {
      content: none;
    }
  }
}
.related {
  padding: 0 10%;
  .container {
    max-width: 1230px;
    margin: auto;
  }
  &-title {
    font-size: 50px;
    line-height: 65px;
    padding-left: 30px;
  }
  &-list {
    display: flex;
    margin: 80px 0 0;
  }
  &-item {
    flex: 0 0 33%;
  }
  @media (max-width: 767px) {
    display: none;
  }
}
@media (max-width: 767px) {
  .head {
    display: none;
  }
}
</style>
