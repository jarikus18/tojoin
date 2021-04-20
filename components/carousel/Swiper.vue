<template>
  <swiper ref="mySwiper" class="tasks-swiper" :options="swiperOptions">
    <slot></slot>
    <div slot="pagination" class="swiper-pagination"></div>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </swiper>
</template>

<script>
import throttle from 'lodash/throttle'

export default {
  name: 'Slider',
  data() {
    return {
      mobileContainer: 767,
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 2,
        keyboardControl: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: false,
            simulateTouch: false,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 2,
            keyboardControl: true,
          },
        },
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
    this.$nextTick(function () {
      this.onResize()
    })
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize: throttle(function () {
      if (window.innerWidth <= this.mobileContainer) {
        this.swiper.slideTo(0, 0, false)
      }
    }, 500),
  },
}
</script>

<style>
.swiper-container {
  padding-bottom: 200px;
}

.swiper-container .swiper-slide {
  height: auto;
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
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 51px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-button-next::after {
  transform: rotate(180deg);
}

@media (max-width: 1440px) {
  .swiper-button-prev,
  .swiper-button-next {
    width: 68px;
    height: 68px;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    width: 31px;
  }
}

@media (max-width: 767px) {
  .tasks-swiper.swiper-container {
    padding-bottom: 0;
    pointer-events: none;
  }
  .swiper-pagination,
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
  .tasks-swiper .swiper-wrapper {
    display: block;
  }
}
</style>
