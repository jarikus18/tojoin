<template>
  <div :class="['section-wrapper', mode]">
    <div class="container">
      <div :class="['circle-big', description && 'has-description']" />
      <div class="circle-small" />
      <div class="bitmap">
        <div class="bitmap-bg" />
        <ul v-if="mode !== 'price'" class="bitmap-list">
          <li v-for="(img, index) in images" :key="index" class="bitmap-item">
            <div
              v-if="mode === 'about'"
              class="circle"
              :style="`width: ${img.size - 10}px; height: ${img.size - 10}px`"
            />
            <img
              :src="require(`~/assets/${img.src}`)"
              class="bitmap-image desktop"
              :width="img.size"
              :height="img.size"
              alt=""
            />
            <img
              :src="require(`~/assets/${img.src}`)"
              class="bitmap-image mobile"
              :width="img.size / 2"
              :height="img.size / 2"
              alt=""
            />
          </li>
        </ul>
        <div v-if="mode === 'price'"><PriceTop :data="data" /></div>
      </div>
      <div class="plus">
        <img src="~@/assets/images/blog/plus.svg" alt="" />
      </div>
      <div class="plus-big">
        <img src="~@/assets/images/blog/plus-big.svg" alt="" />
      </div>
      <div :class="['picture', description && 'has-description']">
        <img src="~@/assets/images/blog/picture.svg" alt="" />
      </div>

      <div class="star two">
        <img src="~@/assets/images/blog/star.svg" alt="" />
      </div>
      <div class="dots">
        <div />
        <div />
        <div />
      </div>
      <div class="tag"><img src="~@/assets/images/blog/tag.svg" alt="" /></div>
      <div :class="['dot-orange', description && 'has-description']" />

      <div class="section-text">
        <div class="circle-medium" />
        <div class="star one">
          <img src="~@/assets/images/blog/star.svg" alt="" />
        </div>
        <div class="dot-blue" />
        <h1 v-if="title" class="h1 section-title">{{ title }}</h1>

        <div v-if="description" class="description">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="description-content" v-html="description" />
          <div class="description-btn"><LinkTryFree /></div>
        </div>
      </div>
      <div :class="['social-list-wrapper', description && 'has-description']">
        <SocialLinks />
      </div>
    </div>
  </div>
</template>
<script>
import SocialLinks from '@/components/SocialLinks'
import LinkTryFree from '@/components/content/LinkTryFree'
import PriceTop from './PriceTop'

export default {
  name: 'SectionTop',
  components: { SocialLinks, LinkTryFree, PriceTop },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    data: {
      type: Object,
      default() {
        return {}
      },
    },
    mode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      bitmapImages: [
        {
          src: 'images/blog/sto.png',
          size: 60,
        },
        {
          src: 'images/blog/girl-with-phone.png',
          size: 100,
        },
        {
          src: 'images/stories/story-left-1.png',
          size: 140,
        },
        {
          src: 'images/stories/story-right-2.png',
          size: 200,
        },
        {
          src: 'images/blog/fisher.png',
          size: 140,
        },
      ],
      articleImages: [
        { src: 'images/article/bitmap-3.svg', size: 90 },
        { src: 'images/article/bitmap-4.svg', size: 113 },
        { src: 'images/article/bitmap-5.svg', size: 160 },
        { src: 'images/article/bitmap-1.svg', size: 210 },
        { src: 'images/article/bitmap-2.svg', size: 155 },
      ],
    }
  },
  computed: {
    images() {
      if (this.mode === 'about') {
        return this.articleImages
      }
      return this.bitmapImages
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_mixin';

.section {
  &-wrapper {
    position: relative;
    background: linear-gradient(
      180deg,
      #e5efff 9.72%,
      #fafbfe 92.03%,
      #fafbfe 145.03%
    );
    width: 100%;
    & .container {
      min-height: 950px;
    }

    @media (max-width: 767px) {
      background: none;
      padding-top: 160px;
      margin: 0 0 50px;
      & .container {
        min-height: 600px;
      }
      &.about .container {
        min-height: 400px;
      }
      & img {
        max-width: 100%;
      }
    }
  }
  &-text {
    position: relative;
    margin: 0 auto 0 50%;
    padding-left: 40px;
    padding-top: 340px;
    .description {
      font-weight: 600;
      font-size: 28px;
      line-height: 40px;
      position: relative;
      max-width: 700px;
      &-btn {
        margin-top: 30px;
        display: none;
      }
      @media (max-width: 767px) {
        font-size: 18px;
        line-height: 25px;
        display: block;
        padding: 0 15px;
        margin: 20px 0 0;
        &-btn {
          display: block;
        }
      }
    }
    @media (max-width: 767px) {
      margin: 0;
      padding-left: 0;
      padding-top: 0;
    }
  }
  &-title {
    max-width: 500px;
    position: relative;
    @media (max-width: 767px) {
      margin: auto;
      padding: 80px 15px 0;
      font-weight: 800;
      font-size: 41px;
      line-height: 48px;
      letter-spacing: 0.396px;
      .about & {
        text-align: center;
        position: relative;
      }
    }
  }
}
.circle-big {
  background: linear-gradient(225.91deg, #8fb8fd -46.01%, #fafbfe 85.99%);
  transform: rotate(-142.96deg);
  width: 323px;
  height: 323px;
  border-radius: 50%;
  position: absolute;
  left: -4%;
  top: 60%;
  @media (max-width: 767px) {
    width: 232px;
    height: 232px;
    right: -166px;
    top: 75%;
    left: auto;
    &.has-description {
      width: 82px;
      height: 82px;
      top: 95%;
      right: -26px;
    }
  }
}
.circle-medium {
  background: linear-gradient(224.7deg, #d2e4ff 7.09%, #fafbfe 100.49%);
  width: 172px;
  height: 172px;
  border-radius: 50%;
  position: absolute;
  bottom: -10%;
  left: -2%;
  .article & {
    top: 70%;
    left: auto;
    right: -2%;
  }
  @media (max-width: 767px) {
    width: 91px;
    height: 91px;
    left: -50px;
    top: 75%;
    &.has-description {
      top: 100%;
    }
  }
}
.circle-small {
  background: linear-gradient(224.72deg, #86aefa -1%, #fafbfe 100.5%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 16%;
  left: 70%;
  .article & {
    left: 80%;
  }
  @media (max-width: 767px) {
    top: 36%;
    left: 90%;
    width: 76px;
    height: 76px;
  }
}
.bitmap {
  position: absolute;
  top: 25%;
  left: 20%;
  &-bg {
    width: 100%;
    height: 100%;
    background: url('~/assets/images/blog/bitmap.png') no-repeat;
    box-shadow: 16px 16px 48px rgba(0, 0, 0, 0.101959);
    border-radius: 50%;
    mix-blend-mode: normal;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
  }
  &-list {
    width: 458px;
    height: 458px;
    position: relative;
    @include distribute-on-circle(5, 458px, 200px, false);
  }
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-image {
    position: relative;
    max-width: 100%;
    display: block;
    object-fit: contain;
    border-radius: 50%;
    box-shadow: 0 20px 30px -9px rgba(84, 48, 209, 0.3);
    transform: rotate(-25deg);
    &.mobile {
      display: none;
    }
  }
  .about &-item {
    .circle {
      box-shadow: 0 20px 30px -9px rgba(84, 48, 209, 0.3);
      background: #fff;
      border-radius: 50%;
      position: absolute;
    }
  }

  .about &-image {
    border-radius: unset;
    box-shadow: none;
  }

  @media (max-width: 767px) {
    position: relative;
    top: auto;
    left: auto;
    width: 218px;
    height: 218px;
    margin: 0 auto;
    .about & {
      position: absolute;
    }
    &-list {
      width: 218px;
      height: 218px;
      @include distribute-on-circle(5, 218px, 100px, false);
    }
    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-image {
      &.mobile {
        display: block;
        margin: auto;
      }
      &.desktop {
        display: none;
      }
    }
    .about &-bg {
      top: 0;
      left: -20px;
    }
    .about &-item {
      display: none;
    }
  }
}
.picture {
  position: absolute;
  top: 20%;
  left: 82%;
  .article & {
    top: 40%;
    left: 60%;
  }
  @media (max-width: 767px) {
    max-width: 120px;
    top: auto;
    left: 50%;
    bottom: 10%;
    &.has-description,
    .about & {
      display: none;
    }
  }
}
.star {
  position: absolute;
  &.one {
    top: 110%;
    left: 30%;
    .article & {
      left: 85%;
    }
  }
  &.two {
    top: 70%;
    left: 90%;
    .article & {
      left: 80%;
    }
  }
  @media (max-width: 767px) {
    display: none;
  }
}
.plus {
  position: absolute;
  top: 20%;
  left: 50%;
  @media (max-width: 767px) {
    display: none;
  }
  &-big {
    position: absolute;
    top: 60%;
    left: 46%;
    .article & {
      left: 50%;
    }
    @media (max-width: 767px) {
      top: 80%;
      left: 16%;
      display: block;
      width: 13px;
      height: 13px;
    }
  }
}
.dots {
  position: absolute;
  bottom: 20%;
  left: 74%;
  display: flex;
  div {
    background: #b0cdfe;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0 5px;
  }

  @media (max-width: 767px) {
    display: none;
    .about & {
      display: flex;
      left: 54%;
      top: 55%;
    }
  }
}
.tag {
  position: absolute;
  top: 24%;
  left: 53%;
  background: #b0cdfe;
  width: 69px;
  height: 69px;
  border-radius: 50%;

  @media (max-width: 767px) {
    display: none;
    .about & {
      display: block;
      top: auto;
      bottom: 20%;
    }
  }
}
.dot {
  &-orange {
    background: #fea151;
    width: 16px;
    height: 16px;
    position: absolute;
    border-radius: 50%;
    top: 32.5%;
    left: 79%;
    .article & {
      top: 53%;
      left: 56%;
    }
    @media (max-width: 767px) {
      top: 87%;
      left: 34%;
      &.has-description {
        display: none;
      }
    }
  }
  &-blue {
    background: #b0cdfe;
    width: 8px;
    height: 8px;
    position: absolute;
    border-radius: 50%;
    top: 27%;
    left: 45%;
    @media (max-width: 767px) {
      display: none;
    }
  }
}
.social-list-wrapper {
  display: none;
  position: absolute;
  bottom: 0;
  left: 15px;
  @media (max-width: 767px) {
    display: block;
    &.has-description {
      margin-top: 40px;
      padding-left: 15px;
      position: static;
    }
  }
}
</style>
