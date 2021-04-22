<template>
  <div :class="['section-wrapper', mode]">
    <div class="circle-big" />
    <div class="circle-medium" />
    <div class="circle-small" />
    <div class="bitmap">
      <div class="bitmap-bg" />
      <ul class="bitmap-list">
        <li v-for="(img, index) in images" :key="index" class="bitmap-item">
          <div
            v-if="mode === 'article'"
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
    </div>
    <div class="plus"><img src="~@/assets/images/blog/plus.svg" alt="" /></div>
    <div class="plus-big">
      <img src="~@/assets/images/blog/plus-big.svg" alt="" />
    </div>
    <div class="picture">
      <img src="~@/assets/images/blog/picture.svg" alt="" />
    </div>
    <div class="star one">
      <img src="~@/assets/images/blog/star.svg" alt="" />
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
    <div class="dot-orange" />
    <div class="dot-blue" />
    <h1 v-if="title" class="h1 section-title">{{ title }}</h1>
    <div class="social-list-wrapper">
      <SocialLinks />
    </div>
  </div>
</template>
<script>
import SocialLinks from '@/components/SocialLinks'

export default {
  name: 'SectionTop',
  components: { SocialLinks },
  props: {
    title: {
      type: String,
      default: '',
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
      if (this.mode === 'article') {
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
    min-height: 950px;

    @media (max-width: 767px) {
      background: none;
      padding-top: 160px;
      min-height: 750px;
      margin: 0 0 50px;
      & img {
        max-width: 100%;
      }
    }
  }
  &-title {
    margin: 0 auto 0 50%;
    padding-top: 340px;
    padding-left: 40px;
    max-width: 500px;
    @media (max-width: 767px) {
      margin: auto;
      padding: 80px 15px 0;
      font-weight: 800;
      font-size: 41px;
      line-height: 48px;
      letter-spacing: 0.396px;
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
  }
}
.circle-medium {
  background: linear-gradient(224.7deg, #d2e4ff 7.09%, #fafbfe 100.49%);
  width: 172px;
  height: 172px;
  border-radius: 50%;
  position: absolute;
  top: 55%;
  left: 52%;
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
  .article &-item {
    .circle {
      box-shadow: 0 20px 30px -9px rgba(84, 48, 209, 0.3);
      background: #fff;
      border-radius: 50%;
      position: absolute;
    }
  }

  .article &-image {
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
  }
}
.star {
  position: absolute;
  &.one {
    top: 53%;
    left: 65%;
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
  top: 52%;
  left: 74%;
  display: flex;
  div {
    background: #b0cdfe;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0 5px;
  }
  .article & {
    top: 58%;
    left: 72%;
  }

  @media (max-width: 767px) {
    display: none;
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
  }
}
.social-list-wrapper {
  display: none;
  position: absolute;
  bottom: 0;
  left: 15px;
  @media (max-width: 767px) {
    display: block;
  }
}
</style>
