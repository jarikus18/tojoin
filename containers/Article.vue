<template>
  <div class="page">
    <div class="head">
      <SectionTop mode="article" />
    </div>
    <article class="single-article">
      <h1 class="h1 title">{{ $prismic.asText(post.title) }}</h1>
      <div class="content">
        <div class="content-image">
          <div class="dots" />
          <div class="circle" />
          <div class="circle-big" />
          <ImageWithBlur :image="post.image.url" />
        </div>
        <!-- eslint-disable vue/no-v-html -->
        <div class="content-text" v-html="$prismic.asHtml(post.content)"></div>
        <div class="content-mobile">
          <Story>
            <h5 class="content-mobile-title m-0">
              {{ $prismic.asText(post.title) }}
            </h5>
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="content-mobile-description"
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
    </article>
    <div v-if="related.total_pages > 0" class="related">
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
</template>
<script>
import SectionTop from '@/components/sections/SectionTop'
import ImageWithBlur from '@/components/content/ImageWithBlur'
import RelatedArticle from '@/components/content/RelatedArticle'
import Story from '@/components/content/Story'

export default {
  components: { SectionTop, ImageWithBlur, RelatedArticle, Story },
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
}
</script>

<style lang="scss" scoped>
.page {
  margin-bottom: 250px;
  @media (max-width: 767px) {
    margin-bottom: 150px;
    background: linear-gradient(
      179.99deg,
      #e5efff 9.73%,
      #fafbfe 64.86%,
      #fafbfe 111.01%
    );
  }
}
.single-article {
  margin-bottom: 150px;
  margin-top: -180px;
  position: relative;
  .title {
    margin-left: 35%;
    margin-bottom: 5%;
    padding-right: 5%;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .content {
    display: flex;
    position: relative;
    padding: 0 5%;
    &-image {
      flex: 0 0 42%;
      margin-left: auto;
      padding-right: 70px;
      text-align: right;
      position: relative;
      &::v-deep .image-wrap {
        max-width: 557px;
      }
      &::v-deep img {
        border-radius: 0;
      }
      .dots {
        background: url('~/assets/images/article/green-dots.svg') no-repeat;
        max-width: 572px;
        height: 259px;
        width: 100%;
        position: absolute;
        bottom: 10%;
      }
      .circle {
        position: absolute;
        top: -5%;
        left: 6%;
        width: 108px;
        height: 108px;
        border: 5px solid #ffba49;
        border-radius: 50%;
      }
      .circle-big {
        position: absolute;
        bottom: -5%;
        right: 10%;
        width: 230px;
        height: 230px;
        border: 5px solid #ffba49;
        border-radius: 50%;
      }
      @media (max-width: 767px) {
        flex: 1;
        padding-right: 0;
        text-align: left;
        &::v-deep .image-wrap {
          max-width: 50%;
        }
        &::v-deep img {
          border-radius: 20px;
        }
        .dots {
          height: 92px;
          background-size: contain;
          left: 40%;
        }
        .circle-big {
          display: none;
        }
        .circle {
          width: 114px;
          height: 114px;
          left: 30%;
          top: -15%;
        }
      }
    }
    &-text {
      flex: 0 0 58%;
      padding-right: 40px;
      font-weight: 600;
      font-size: 26px;
      line-height: 40px;
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
    &::before {
      content: '';
      position: absolute;
      top: 0;
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
      right: -3%;
      bottom: -30%;
      background: linear-gradient(225.91deg, #8fb8fd -46.01%, #fafbfe 85.99%);
      transform: rotate(57.84deg);
      border-radius: 50%;
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
  }
}
.related {
  padding: 0 10%;
  &-title {
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
