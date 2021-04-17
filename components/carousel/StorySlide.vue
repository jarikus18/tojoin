<template>
  <swiper-slide>
    <div :class="['story-slide', index % 2 !== 0 && 'isEven', index]">
      <div class="left-side">
        <div class="dots-left" />
        <img
          v-for="(img, ind) in imageLeft"
          :key="`story-image-left-${ind + 1}`"
          :class="['story-image-left', `story-image-left-${ind + 1}`]"
          :src="require(`~/assets/${img}`)"
          alt=""
        />
      </div>
      <div class="slide-body">
        <h5 class="h5 slide-title text-center">{{ item.title }}</h5>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="story-text" v-html="$prismic.asHtml(item.content)"></div>
      </div>
      <div class="right-side">
        <div class="dots-right" />
        <img
          v-for="(img, ind) in imageRight"
          :key="`story-image-right-${ind + 1}`"
          :class="['story-image-right', `story-image-right-${ind + 1}`]"
          :src="require(`~/assets/${img}`)"
          alt=""
        />
      </div>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      imageLeft: [
        'images/stories/story-left-1.png',
        'images/stories/story-left-2.png',
        'images/stories/story-left-3.png',
      ],
      imageRight: [
        'images/stories/story-right-1.png',
        'images/stories/story-right-2.png',
        'images/stories/story-right-3.png',
      ],
    }
  },
}
</script>
<style scoped>
.story-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1920px;
  margin: auto;
}

.slide-body {
  background: #fff;
  box-shadow: 0.1px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 20px;
  padding: 40px 110px 55px;
  max-width: 900px;
  margin: auto;
  position: relative;
  z-index: 2;
  background-image: url(~/assets/icons/quotes.svg);
  background-repeat: no-repeat;
  background-size: 337px;
  background-position: right 100px top 20px;
}
.story-slide .h5 {
  margin-bottom: 30px;
}
.story-text >>> p {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 30px;
}

.left-side {
  height: 100%;
  position: absolute;
  left: 10%;
  top: 0;
}

.right-side {
  height: 100%;
  position: absolute;
  right: 10%;
  top: 0;
}

.dots-left {
  background-image: url(~/assets/images/stories/dots.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 260px;
  height: 572px;
  position: absolute;
  z-index: -1;
  top: 40px;
  left: 120px;
}
.isEven .dots-left {
  transform: rotate(90deg);
  top: auto;
  bottom: 0;
  left: 300px;
}
.dots-right {
  background-image: url(~/assets/images/stories/dots-red.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 534px;
  height: 242px;
  position: absolute;
  z-index: -1;
  right: 80px;
  top: 40%;
}
.isEven .dots-right {
  transform: rotate(90deg);
  top: 20%;
  right: 20px;
}
.story-image-left,
.story-image-right {
  position: absolute;
  top: 0;
}

.story-image-left-1 {
  left: 60px;
  top: -80px;
}

.story-image-left-2 {
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
}

.story-image-left-3 {
  left: 80px;
  top: 100%;
}
.story-image-right-1 {
  right: 100px;
  top: -80px;
}
.story-image-right-2 {
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
}
.story-image-right-3 {
  right: 120px;
  top: 100%;
}
</style>
