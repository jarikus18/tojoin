<template>
  <div class="home">
    <section class="first-screen">
      <div class="resources">
        <div class="bg-line" />
        <div class="ticket" />
        <div class="gift" />
        <div class="girl" />
        <div class="j" />
        <div class="dots-first-screen" />
        <div class="save" />
        <div class="sale" />
        <div class="positive-review" />
        <div class="chart-vector">
          <div class="top">
            <span class="small-text">{{ data.chart_text }}</span>
            <span class="small-text green">{{ data.chart_percent }}</span>
          </div>
          <div class="bottom">
            <img
              data-not-lazy
              src="~@/assets/images/first-screen/chart_vector.svg"
              alt="chart"
            />
            <span class="blue">{{ data.chart_numbers }}</span>
          </div>
        </div>
      </div>
      <div class="text-block">
        <h1 class="h1 m-0">{{ $prismic.asText(data.home_title) }}</h1>
        <p class="caption-1 color-subtitle subtitle">
          {{ data.home_subtitle }}
        </p>
        <NavLink
          :href="data.button_link.url"
          :type="data.button_link.link_type"
          classname="btn-orange-gradient"
        >
          {{ data.button_name }}
        </NavLink>
      </div>
      <div class="mobile-block">
        <span class="circle" />
        <span class="circle-big" />
        <div class="social-list-wrapper">
          <SocialLinks />
        </div>
      </div>
    </section>
    <section class="tasks">
      <h3 class="h3 text-center">{{ data.task_title }}</h3>
      <client-only>
        <div class="carousel-wrap">
          <Slider>
            <Slide v-for="(slide, index) in data.task_carousel" :key="index">
              <div class="img-wrap text-center slide-image">
                <img data-not-lazy :src="slide.image.url" alt="" />
              </div>
              <h5 class="h5 slide-title">{{ slide.title }}</h5>
              <p class="text slide-text">
                {{ $prismic.asText(slide.content) }}
              </p>
            </Slide>
          </Slider>
        </div>
      </client-only>
    </section>
    <section class="products">
      <h3 class="h3 text-center">{{ data.products_title }}</h3>
      <div class="products-container">
        <ul class="product-list">
          <li
            v-for="(product, index) in data.products_list"
            :key="index"
            :class="[
              'product-item',
              product.css_selector,
              index % 2 === 1 && 'content-right',
            ]"
          >
            <div class="product-image">
              <span class="big-circle" />
              <span class="small-circle" />
              <span class="dots" />
              <ProductImage :image="product.image.url" />
            </div>
            <div class="description">
              <h4 class="h4 product-title">{{ product.title }}</h4>
              <div class="text product-content color-text">
                {{ $prismic.asText(product.description) }}
              </div>
              <div class="product-button">
                <NavLink
                  classname="simple-btn big-btn-text"
                  :href="`/${product.link}`"
                  >подробнее</NavLink
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div class="container company-logos">
      <div
        v-for="(logotype, index) in data.logotypes_list"
        :key="index"
        class="company-logo"
      >
        <img v-lazy-load :src="logotype.image.url" alt="" />
      </div>
    </div>
    <section class="stories">
      <h3 class="h3 text-center">{{ data.stories_title }}</h3>
      <client-only>
        <Carousel>
          <StodySlide
            v-for="(story, index) in data.stories_slider"
            :key="story.id"
            :item="story"
            :index="index"
          />
        </Carousel>
      </client-only>
      <div class="show-more">
        <NavLink
          classname="light-btn"
          :href="`/${data.more_success_stories_link}`"
          >{{ data.more_success_stories }}</NavLink
        >
      </div>
    </section>
  </div>
</template>

<script>
import Slider from '@/components/carousel/Swiper'
import Slide from '@/components/carousel/Slide'
import StodySlide from '@/components/carousel/StorySlide'
import NavLink from '@/components/NavLink'
import ProductImage from '@/components/products/ProductImage'
import Carousel from '@/components/carousel/Carousel'
import SocialLinks from '@/components/SocialLinks'

export default {
  components: {
    NavLink,
    Slider,
    Slide,
    StodySlide,
    ProductImage,
    Carousel,
    SocialLinks,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped lang="scss">
.home {
  margin-top: -200px;
}
.first-screen {
  position: relative;
  min-height: 1000px;
}
.first-screen::after {
  position: absolute;
  z-index: -1;
  content: '';
  top: 0;
  left: 0;
  min-height: 1500px;
  width: 100%;
  background: linear-gradient(
    180deg,
    #e5efff 9.72%,
    #fafbfe 92.03%,
    #fafbfe 145.03%
  );
}
.text-block {
  position: relative;
  padding-top: 320px;
  max-width: 1600px;
  width: 100%;
  padding-left: 40px;
  margin: auto;
}
.subtitle {
  margin-top: 20px;
  margin-bottom: 55px;
}
.resources {
  position: absolute;
  right: 0;
  top: 0;
  @media (max-width: 1800px) {
    right: -10%;
  }
  @media (max-width: 1500px) {
    transform: scale(0.9);
  }
  @media (max-width: 1280px) {
    right: -15%;
    transform: scale(0.85);
  }
  @media (max-width: 1200px) {
    transform: scale(0.8);
  }
  @media (max-width: 992px) {
    display: none;
  }
}
.mobile-block,
.mobile-block .circle,
.mobile-block .circle-big {
  display: none;
}
.bg-line {
  position: absolute;
  top: 0;
  right: 50px;
  background-image: url('~@/assets/images/first-screen/bg-line.svg');
  background-repeat: no-repeat;
  background-size: contain;
  height: 820px;
  width: 920px;
}
.ticket {
  position: absolute;
  top: 100px;
  right: 390px;
  background-image: url('~@/assets/images/first-screen/ticket.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 127px;
  height: 76px;
}
.gift {
  position: absolute;
  top: 200px;
  right: 880px;
  background-image: url('~@/assets/images/first-screen/gift.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 145px;
  height: 85px;
}

.girl {
  position: absolute;
  top: 62px;
  right: 340px;
  background-image: url('~@/assets/images/first-screen/girl.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 636px;
  height: 809px;
}

.j {
  position: absolute;
  top: 102px;
  right: 0;
  background-image: url('~@/assets/images/first-screen/j.svg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 1166px;
  height: 1158px;
}

.dots-first-screen {
  position: absolute;
  top: 102px;
  right: 200px;
  background-image: url('~@/assets/images/first-screen/dots_first_screen.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 553px;
}

.save {
  position: absolute;
  top: 742px;
  right: 1090px;
  background-image: url('~@/assets/images/first-screen/safe.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 125px;
  height: 87px;
}

.sale {
  position: absolute;
  top: 238px;
  right: 168px;
  background-image: url('~@/assets/images/first-screen/sale.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 128px;
  height: 128px;
}
.positive-review {
  position: absolute;
  top: 588px;
  right: 268px;
  background-image: url('~@/assets/images/first-screen/positive-review.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 173px;
  height: 173px;
}
.chart-vector {
  position: absolute;
  top: 545px;
  right: 820px;
  background: #ffffff;
  box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 20px;
  padding: 21px 23px;
  white-space: nowrap;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
.bottom {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 30px;
  line-height: 150%;
}

.tasks {
  position: relative;
  max-width: 1620px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    max-width: 1280px;
  }
  @media (max-width: 1280px) {
    max-width: 1100px;
  }
}

.img-wrap {
  height: 208px;
  img {
    max-width: 100%;
    height: 100%;
  }
  @media (max-width: 1440px) {
    height: 158px;
  }
  @media (max-width: 1280px) {
    height: 128px;
  }
}

.slide-title {
  line-height: 46px;
  margin: 20px 0 10px;
  @media (max-width: 1440px) {
    line-height: 36px;
  }
}
.carousel-wrap {
  padding: 30px 0 50px;
}
.products {
  position: relative;
  overflow: hidden;
}
.products-container {
  background: #e5efff;
  position: relative;
  overflow: hidden;
}
.products-container::before,
.products-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 130%;
  height: 420px;
  border-radius: 50%;
  background-color: #fafbfe;
  transform: translate(-50%, -64%);
}
.products-container::after {
  top: 100%;
  transform: translate(-50%, -34%);
  height: 520px;
}
.product-list {
  max-width: 1620px;
  margin: auto;
  @media (max-width: 1440px) {
    max-width: 1320px;
  }
}

.product-item {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
}
.product-item.content-right {
  margin-left: auto;
  flex-direction: row-reverse;
  justify-content: flex-start;
}
.description {
  margin-bottom: 40px;
  margin-left: 20px;
}
.product-title {
  margin-bottom: 20px;
  line-height: 46px;
  letter-spacing: 0.396px;
}
.product-content {
  line-height: 30px;
  margin-bottom: 50px;
}
.stories {
  padding: 50px 0 300px;
}

.big-circle {
  display: block;
  width: 227px;
  height: 227px;
  background-image: url(~/assets/images/products/big-circle.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
}
.small-circle {
  display: block;
  width: 65px;
  height: 65px;
  background-image: url(~/assets/images/products/small-circle.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
}
.dots {
  display: block;
  width: 213px;
  height: 368px;
  background-image: url(~/assets/images/products/dots-vertical.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
}
.dots.horisontal {
  transform: rotate(90deg);
}

.company-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 80px 10% 120px;
}
.company-logos .company-logo {
  margin: 0 30px 30px;
}
.show-more {
  position: relative;
  margin-left: 33%;
  top: -40px;
  z-index: 1;
  display: inline-block;
}

@media (max-width: 1500px) {
  .girl {
    top: 120px;
  }
  .gift {
    display: none;
  }
  .text-block {
    margin-right: auto;
    margin-left: 0;
    padding-top: 200px;
  }
}
@media (max-width: 1200px) {
  .text-block .h1 {
    line-height: 52px;
  }
  .text-block .subtitle {
    line-height: 25px;
  }
}
@media (max-width: 992px) {
  .first-screen {
    overflow: initial;
    min-height: auto;
  }
  .first-screen::before {
    content: '';
    position: absolute;
    z-index: 0;
    content: '';
    bottom: -150px;
    left: 0;
    min-height: 700px;
    width: 100%;
    background: url('~/assets/images/illustration.svg') center no-repeat;
    background-size: contain;
    background-position: bottom right;
  }
  .text-block {
    padding-top: 150px;
    padding-left: 15px;
    max-width: none;
  }
  .show-more {
    margin-left: 0;
  }
  .mobile-block {
    display: block;
    margin-top: 50px;
    height: 420px;
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 1;
  }
  .mobile-block .circle {
    display: block;
    width: 46px;
    height: 46px;
    background: linear-gradient(224.72deg, #528ef9 -1%, #eef4fe 100.5%);
    opacity: 0.5;
    border-radius: 50%;
    position: absolute;
    top: -90px;
    right: -23px;
  }
  .mobile-block .circle-big {
    display: block;
    width: 91px;
    height: 91px;
    background: linear-gradient(119.86deg, #5291ff -34.21%, #edf4fe 112.91%);
    border-radius: 50%;
    position: absolute;
    top: -45px;
    right: -45px;
    z-index: -1;
  }
  .social-list-wrapper {
    padding: 0 0 100px 15px;
  }
  .product-title {
    font-size: 38px;
    line-height: 40px;
  }
}

@media (max-width: 768px) {
  .first-screen::before {
    bottom: -250px;
    background-position: center right;
  }
  .slide-title {
    font-size: 24px;
    line-height: 33px;
    font-weight: bold;
  }
  .slide-text {
    font-size: 18px;
    line-height: 25px;
  }
  .slide-image {
    max-width: 110px;
    margin: 0 auto;
  }
  .img-wrap {
    height: 100px;
  }
  .tasks .h3 {
    text-align: left;
    padding-left: 15px;
    line-height: 46px;
  }
  .products .h3 {
    margin-bottom: 50px;
    text-align: left;
    padding-left: 15px;
  }
  .products-container {
    background: none;
  }
  .company-logos {
    margin: 0 15px 100px;
  }
}
@media (max-width: 767px) {
  .product-item {
    flex-direction: column;
    align-items: start;
  }
  .product-item.content-right {
    flex-direction: column;
  }
  .product-title {
    position: absolute;
    top: 0;
    left: 15px;
  }
  .stories {
    display: none;
  }
}
@media (max-width: 567px) {
  .product-title {
    font-size: 26px;
    line-height: 120%;
  }
  .product-image {
    max-width: 60%;
  }
  .dots {
    max-height: 180px;
    max-width: 92px;
  }
}
@media (max-width: 414px) {
  .first-screen::before {
    bottom: -150px;
  }
}
</style>

<style lang="scss">
.product-item.review {
  max-width: 80%;
  z-index: 10;
  justify-content: flex-start;
  .dots {
    top: 360px;
    left: 10px;
  }
  .small-circle {
    left: -50px;
    top: 140px;
  }
  .big-circle {
    top: 160px;
    left: 20px;
    width: 336px;
    height: 336px;
  }
  .product-image {
    margin-left: 160px;
  }
  .product-content {
    max-width: 480px;
  }
  @media (max-width: 992px) {
    .product-image {
      margin-left: 15px;
      margin-top: 20px;
    }
  }
  @media (max-width: 767px) {
    max-width: none;

    .big-circle {
      top: 50px;
      left: 300px;
      width: 214px;
      height: 214px;
    }
    .dots {
      top: 300px;
      left: 45%;
      transform: rotate(90deg);
    }
    .product-content {
      max-width: none;
      margin: 20px 0;
    }
  }
  @media (max-width: 567px) {
    .product-image {
      margin-left: 0px;
    }
    .big-circle {
      top: 80px;
      left: 40%;
      width: 114px;
      height: 114px;
    }
    .dots {
      top: 260px;
      left: 50%;
    }
  }
}
.product-item.bonus {
  max-width: 70%;
  margin-top: -100px;
  z-index: 9;
  .dots {
    top: 300px;
    right: 10px;
    transform: rotate(90deg);
  }
  .small-circle {
    right: 400px;
    top: 40px;
  }
  .big-circle {
    top: 0px;
    right: 60px;
  }
  .product-image {
    margin-right: 120px;
  }
  .product-content {
    max-width: 400px;
    margin-right: 40px;
  }
  @media (max-width: 1500px) {
    margin-top: 0;
    max-width: none;
  }
  @media (max-width: 992px) {
    .product-image {
      margin-right: 15px;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    .big-circle {
      top: 340px;
      right: 260px;
      width: 214px;
      height: 214px;
    }
    .small-circle {
      right: 360px;
      top: 60px;
    }
    .dots {
      top: 15%;
      right: 50%;
    }
    .product-image {
      margin-left: auto;
    }
    .product-content {
      max-width: none;
      margin: 20px 0;
    }
  }
  @media (max-width: 567px) {
    .product-image {
      margin-right: 0px;
    }
    .big-circle {
      top: 240px;
      right: 160px;
      width: 117px;
      height: 117px;
    }
    .small-circle {
      right: 40%;
      top: 60px;
    }
    .dots {
      top: 25%;
      right: 50%;
    }
  }
}
.product-item.gifts {
  max-width: 70%;
  margin-top: -180px;
  justify-content: start;
  z-index: 8;
  .big-circle {
    top: 400px;
    left: -100px;
  }
  .dots {
    display: none;
  }
  .small-circle {
    display: none;
  }
  .product-image {
    margin-left: 20px;
  }
  .product-content {
    max-width: 400px;
  }
  @media (max-width: 1450px) {
    margin-top: 0;
    max-width: none;
  }
  @media (max-width: 767px) {
    .big-circle {
      display: none;
    }
    .dots {
      display: block;
      top: 15%;
      left: 50%;
    }
    .product-content {
      max-width: none;
      margin: 20px 0;
    }
  }
  @media (max-width: 567px) {
    .product-image {
      margin-left: 0px;
    }
    .dots {
      top: 20%;
      left: 55%;
    }
  }
}
.product-item.referal {
  max-width: 65%;
  margin-top: -180px;
  z-index: 7;
  justify-content: flex-end;
  .dots {
    top: 160px;
    right: -100px;
    transform: rotate(90deg);
  }
  .big-circle {
    top: -60px;
    right: 230px;
  }
  .small-circle {
    display: none;
  }
  .product-image {
    margin-right: 0px;
  }
  .product-content {
    max-width: 480px;
  }
  @media (max-width: 1450px) {
    margin-top: 0;
    max-width: none;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    .big-circle {
      top: 60px;
      right: 260px;
      width: 214px;
      height: 214px;
    }
    .dots {
      top: 15%;
      right: 40%;
    }
    .product-image {
      margin-left: auto;
    }
    .product-content {
      max-width: none;
      margin: 20px 0;
    }
  }
  @media (max-width: 567px) {
    .product-image {
      margin-right: 0px;
    }
    .big-circle {
      top: 60px;
      right: 160px;
      width: 117px;
      height: 117px;
    }
    .dots {
      top: 25%;
      right: 50%;
    }
  }
}
.product-item.analitics {
  max-width: 70%;
  margin-top: -150px;
  justify-content: start;
  z-index: 6;
  .small-circle {
    top: 50px;
    left: 20px;
  }
  .big-circle {
    display: none;
  }
  .dots {
    top: 240px;
    left: -30px;
  }
  .product-image {
    margin-left: 30px;
  }
  .product-content {
    max-width: 400px;
  }
  @media (max-width: 1450px) {
    margin-top: 0;
    max-width: none;
  }
  @media (max-width: 992px) {
    .product-image {
      margin-left: 15px;
    }
  }
  @media (max-width: 767px) {
    .dots {
      top: 35%;
      left: 50%;
      transform: rotate(90deg);
    }
    .small-circle {
      top: 50px;
      left: 320px;
      width: 123px;
      height: 123px;
    }
    .product-content {
      max-width: none;
      margin: 20px 0;
    }
  }
  @media (max-width: 567px) {
    .product-image {
      margin-left: 0px;
    }
    .small-circle {
      top: 60px;
      left: 170px;
      width: 73px;
      height: 73px;
    }
    .dots {
      top: 32%;
    }
  }
}
.product-item.game {
  max-width: 70%;
  margin-top: -180px;
  justify-content: flex-end;
  z-index: 5;
  .big-circle {
    top: 390px;
    right: 60px;
  }
  .dots {
    top: -50px;
    right: 0px;
  }
  .product-image {
    margin-right: 100px;
  }
  .product-content {
    max-width: 400px;
    margin-right: 20px;
  }
  @media (max-width: 1450px) {
    margin-top: 0;
    max-width: none;
  }
  @media (max-width: 992px) {
    .product-image {
      margin-right: 15px;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    .big-circle {
      top: 360px;
      right: 260px;
      width: 214px;
      height: 214px;
    }
    .dots {
      top: 15%;
      right: 50%;
      transform: rotate(90deg);
    }
    .product-image {
      margin-left: auto;
    }
    .product-content {
      max-width: none;
      margin: 20px 0;
    }
  }
  @media (max-width: 567px) {
    .product-image {
      margin-right: 0px;
    }
    .big-circle {
      top: 220px;
      right: 40%;
      width: 117px;
      height: 117px;
    }
  }
}
.product-item.crm {
  max-width: 70%;
  margin-top: -210px;
  justify-content: start;
  z-index: 4;
  .big-circle {
    top: -10px;
    left: 220px;
  }
  .dots {
    top: 330px;
    left: -20px;
    transform: rotate(90deg);
  }
  .small-circle {
    display: none;
  }
  .product-image {
    margin-left: 0;
  }
  .product-content {
    max-width: 400px;
  }
  @media (max-width: 1450px) {
    margin-top: 0;
    max-width: none;
  }
  @media (max-width: 767px) {
    .dots {
      top: 15%;
      left: 50%;
      transform: rotate(0);
    }
    .big-circle {
      display: none;
    }
    .product-content {
      max-width: none;
      margin: 20px 0;
    }
  }
  @media (max-width: 567px) {
    .product-image {
      margin-left: 0px;
    }
    .dots {
      top: 20%;
      left: 60%;
    }
  }
}
.product-item.rules {
  max-width: 70%;
  margin-top: -180px;
  justify-content: flex-end;
  z-index: 3;
  .big-circle {
    top: 450px;
    right: -20px;
    width: 100px;
    height: 100px;
  }
  .dots {
    top: -150px;
    right: 270px;
    transform: rotate(90deg);
  }
  .small-circle {
    display: none;
  }
  .product-image {
    margin-right: 0px;
  }
  .product-content {
    max-width: 450px;
    margin-right: 20px;
  }
  .description {
    margin-bottom: 10px;
  }
  @media (max-width: 1450px) {
    margin-top: 0;
    max-width: none;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    .big-circle {
      top: 280px;
      right: auto;
      left: 20px;
      width: 184px;
      height: 184px;
    }
    .dots {
      top: 10%;
      right: 50%;
      transform: rotate(90deg);
    }
    .product-image {
      margin-left: auto;
    }
    .product-content {
      max-width: none;
      margin: 20px 0;
    }
  }
  @media (max-width: 567px) {
    .product-image {
      margin-right: 0px;
    }
    .big-circle {
      top: 180px;
      left: 20px;
      width: 89px;
      height: 89px;
    }
  }
}
.product-item.qr-code {
  max-width: 70%;
  margin-top: -210px;
  justify-content: start;
  z-index: 2;
  padding-bottom: 100px;
  .big-circle {
    top: 30px;
    left: 320px;
    width: 100px;
    height: 100px;
  }
  .small-circle {
    display: none;
  }
  .dots {
    display: none;
  }
  .product-image {
    margin-left: 0;
  }
  .product-content {
    max-width: 400px;
  }
  @media (max-width: 1450px) {
    margin-top: 0;
    max-width: none;
  }
  @media (max-width: 767px) {
    .big-circle {
      top: 250px;
      left: 50%;
      width: 184px;
      height: 184px;
    }
    .dots {
      top: 15%;
      right: 80px;
      display: block;
    }
    .product-content {
      max-width: none;
      margin: 20px 0;
    }
  }
  @media (max-width: 567px) {
    .product-image {
      margin-left: 0px;
    }
    .big-circle {
      top: 150px;
      left: 50%;
      width: 83px;
      height: 83px;
    }
  }
}
</style>
