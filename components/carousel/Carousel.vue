<template>
  <swiper ref="mySlider" class="carousel-container" :options="swiperOptions">
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
        speed: 500,
        effect: 'fade',
        autoHeight: true,
        spaceBetween: 20,
        // autoplay: {
        //   delay: 5000,
        // },
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
}
</script>

<style>
.carousel-container {
  padding-top: 120px;
  /* padding-bottom: 100px; */
  z-index: auto;
  width: 100%;
  /* height: auto; */
}

.slider-button-prev,
.slider-button-next {
  bottom: 0;
  left: 66%;
  transform: translateX(-66%);
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s linear;
  cursor: pointer;
  width: 51px;
  height: 25px;
}

.slider-button-prev {
  left: 62%;
  transform: translateX(-62%);
}

.slider-button-prev::after,
.slider-button-next::after {
  content: '';
  background-image: url('~@/assets/icons/arrow-right.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 51px;
  height: 25px;
  margin: 0 5px;
}
.slider-button-next::after {
  transform: rotate(180deg);
}
.carousel-container .swiper-slide {
  opacity: 0 !important;
  transition: all 1s linear;
}

.carousel-container .swiper-slide-active {
  opacity: 1 !important;
  position: relative;
}

.carousel-container .swiper-slide::before {
  bottom: -35px;
  transition: all 0.5s linear;
}

.carousel-container .swiper-slide::after {
  bottom: 1px;
  width: 900px;
  transition: all 0.5s linear;
}

.carousel-container .swiper-slide-active::after {
  content: '';
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0.1px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 20px;
  width: 820px;
  height: 200px;
  margin: auto;
  background-color: #fff;
  z-index: 1;
}

.carousel-container .swiper-slide-active::before {
  content: '';
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0.1px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 20px;
  max-width: 760px;
  width: 100%;
  height: 200px;
  margin: auto;
  background-color: #fff;
  z-index: 1;
}

.carousel-container .swiper-button-disabled {
  cursor: not-allowed;
  pointer-events: all !important;
}
.carousel-container .swiper-button-disabled::after,
.carousel-container .swiper-button-disabled::before {
  width: 32px;
  height: 19px;
  filter: opacity(50%);
}

@media (max-width: 1200px) {
  .slider-button-prev {
    left: 47%;
    transform: translateX(-47%);
  }
  .slider-button-next {
    left: 53%;
    transform: translateX(-53%);
  }
}
</style>
