<template>
  <swiper-slide>
    <div class="story-slide">
      <div class="left-side">
        <div class="dots-left" />
        <img
          v-for="(img, index) in item.image_left"
          :key="`story-image-left-${index + 1}`"
          :class="['story-image-left', `story-image-left-${index + 1}`]"
          :src="require(`~/assets/${img}`)"
          alt=""
        />
      </div>
      <div class="slide-body">
        <h5 class="h5 slide-title text-center">{{ item.title }}</h5>
        <p class="text">{{ item.content }}</p>
      </div>
      <div class="right-side">
        <div class="dots-right" />
        <img
          v-for="(img, index) in item.image_right"
          :key="`story-image-right-${index + 1}`"
          :class="['story-image-right', `story-image-right-${index + 1}`]"
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
  },
}
</script>
<style scoped>
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
.story-slide .text {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 30px;
}

.left-side {
  position: absolute;
  top: 0;
  left: 10%;
  height: 100%;
}
.right-side {
  position: absolute;
  top: 0;
  right: 10%;
}
.dots-left {
  background-image: url(~/assets/images/stories/dots.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 260px;
  height: 572px;
  position: absolute;
  top: 40px;
  left: 120px;
}
.dots-right {
  background-image: url(~/assets/images/stories/dots-red.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 242px;
  height: 534px;
  position: absolute;
  z-index: 0;
  right: 0;
  top: 40%;
}
.story-image-left,
.story-image-right {
  position: absolute;
  top: 0;
}
.story-image-right {
  right: 0;
}

.story-image-left-1 {
  left: 120px;
  top: -80px;
}

.story-image-left-2 {
  left: -20px;
  top: 50%;
}

.story-image-left-3 {
  left: 80px;
  top: 100%;
}
</style>
