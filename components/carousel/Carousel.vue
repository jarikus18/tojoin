<template>
  <swiper ref="mySlider" :options="swiperOptions">
    <slot></slot>
    <div slot="button-prev" class="slider-button-prev"></div>
    <div slot="button-next" class="slider-button-next"></div>
  </swiper>
</template>

<script>
export default {
  name: 'Carrousel',
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 0,
        // slidesPerGroup: 1,
        centeredSlides: true,
        loop: true,
        // freeMode: true,
        // effect: 'fade',

        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev',
        },
        // Some Swiper option/callback... https://swiperjs.com/swiper-api
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySlider.$swiper
    },
  },
  mounted() {
    this.swiper.slideTo(1, 1000, false)
  },
}
</script>

<style>
.swiper-container {
  padding-bottom: 150px;
}

.slider-button-prev,
.slider-button-next {
  top: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s linear;
  box-shadow: 1px 3px 12px rgba(185, 185, 185, 0.25);
}
.slider-button-prev:hover,
.slider-button-next:hover {
  box-shadow: 1px 1px 1px rgba(185, 185, 185, 0.25);
}
.slider-button-prev::after,
.slider-button-next::after {
  content: '';
  background-image: url('~@/assets/icons/arrow-right.svg');
  width: 51px;
  height: 25px;
}
.slider-button-next::after {
  transform: rotate(180deg);
}
</style>
