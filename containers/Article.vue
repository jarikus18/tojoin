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
      </div>
    </article>
  </div>
</template>
<script>
import SectionTop from '@/components/sections/SectionTop'
import ImageWithBlur from '@/components/content/ImageWithBlur'

export default {
  components: { SectionTop, ImageWithBlur },
  props: {
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
  },
}
</script>

<style lang="scss" scoped>
.single-article {
  margin-bottom: 250px;
  margin-top: -180px;
  position: relative;
  .title {
    margin-left: 35%;
    margin-bottom: 5%;
    padding-right: 5%;
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
      height: 287px;
      position: absolute;
      right: -3%;
      bottom: -30%;
      background: linear-gradient(225.91deg, #8fb8fd -46.01%, #fafbfe 85.99%);
      transform: rotate(57.84deg);
      border-radius: 50%;
    }
  }
}
</style>
