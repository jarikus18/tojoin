<template>
  <div class="section-wrapper">
    <div class="circle-big" />
    <div class="circle-medium" />
    <div class="circle-small" />
    <div class="bitmap">
      <div class="bitmap-bg" />
      <ul class="bitmap-list">
        <li
          v-for="(img, index) in bitmapImages"
          :key="index"
          class="bitmap-item"
        >
          <img
            data-not-lazy
            :src="require(`~/assets/${img.src}`)"
            class="bitmap-image"
            :width="img.size"
            :height="img.size"
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
  </div>
</template>
<script>
export default {
  name: 'SectionTop',
  props: {
    title: {
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
    }
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
  }
  &-title {
    width: 50%;
    margin: 0 0 0 auto;
    padding-top: 340px;
    padding-left: 40px;
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
}
.circle-medium {
  background: linear-gradient(224.7deg, #d2e4ff 7.09%, #fafbfe 100.49%);
  width: 172px;
  height: 172px;
  border-radius: 50%;
  position: absolute;
  top: 55%;
  left: 52%;
}
.circle-small {
  background: linear-gradient(224.72deg, #86aefa -1%, #fafbfe 100.5%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 16%;
  left: 70%;
}
.bitmap {
  position: absolute;
  top: 25%;
  left: 20%;
  &-bg {
    width: 100%;
    height: 100%;
    background: url('~/assets/images/blog/bitmap.png') no-repeat;
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
  }
}
.picture {
  position: absolute;
  top: 20%;
  left: 82%;
}
.star {
  position: absolute;
  &.one {
    top: 48%;
    left: 65%;
  }
  &.two {
    top: 70%;
    left: 90%;
  }
}
.plus {
  position: absolute;
  top: 20%;
  left: 50%;
  &-big {
    position: absolute;
    top: 60%;
    left: 46%;
  }
}
.dots {
  position: absolute;
  top: 45%;
  left: 74%;
  display: flex;
  div {
    background: #b0cdfe;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0 5px;
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
</style>
