<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <slot></slot>
    <div slot="pagination" class="swiper-pagination"></div>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </swiper>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 3,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // Some Swiper option/callback... https://swiperjs.com/swiper-api
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false)
  },
}
</script>

<style>
.swiper-container {
  padding-bottom: 150px;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 80px;
}
.swiper-pagination-bullet {
  width: 15px;
  height: 15px;
}
.swiper-pagination-bullet-active {
  background: #f09231;
  width: 45px;
  height: 15px;
  border-radius: 10px;
}
.swiper-button-prev,
.swiper-button-next {
  top: 85%;
  border-radius: 100%;
  background: #fff;
  width: 92px;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s linear;
  box-shadow: 1px 3px 12px rgba(185, 185, 185, 0.25);
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  box-shadow: 1px 1px 1px rgba(185, 185, 185, 0.25);
}
.swiper-button-prev::after,
.swiper-button-next::after {
  content: '';
  background-image: url('~@/assets/icons/arrow-right.svg');
  width: 51px;
  height: 25px;
}
.swiper-button-next::after {
  transform: rotate(180deg);
}
</style>
