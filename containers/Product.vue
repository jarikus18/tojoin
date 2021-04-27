<template>
  <div class="page product">
    <div class="product-head">
      <div class="container product-head-container">
        <div class="col">
          <img
            class="product-image img-responsive"
            :src="product.product_image.url"
            alt=""
          />
        </div>
        <div class="col circle-before-blue">
          <div class="product-head-content dots-bg-greed__red circle-after">
            <h1 class="h1">{{ $prismic.asText(product.title) }}</h1>
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="content-text"
              v-html="$prismic.asHtml(product.subtitle)"
            ></div>
            <div class="product-head-button">
              <LinkTryFree />
            </div>
            <div class="social-links">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="product-tasks">
      <h3 class="h3 text-center">{{ settings.tasks_that_we_solve }}</h3>
      <div class="container">
        <ul class="list">
          <li
            v-for="(task, index) in product.product_tasks"
            :key="index"
            :class="[
              'item',
              index === 0 && 'dots-bg-greed__green',
              index === 2 && 'circle-before',
              index === 3 && 'dots-bg-greed',
            ]"
          >
            <img class="task-image" :src="task.task_image.url" alt="" />
            <h5 class="h5 title">{{ task.task_title }}</h5>
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="text"
              v-html="$prismic.asHtml(task.task_description)"
            ></div>
          </li>
        </ul>
      </div>
    </section>
    <section class="product-functional">
      <h3 class="h3 text-center">{{ settings.functional }}</h3>
      <div class="product-functional-bg">
        <div class="container">
          <div class="product-functional-body">
            <div
              v-for="(func, index) in product.functional"
              :key="index"
              :class="[
                'product-functional-item circle-before-blue dots-bg-greed',
                `product-functional-item-${index}`,
                (index + 1) % 2 === 0 && 'even',
              ]"
            >
              <div class="product-functional-item-image circle-before">
                <ImageWithBlur :image="func.functional_image.url" />
              </div>
              <div class="product-functional-item-content">
                <h4 class="h4">{{ func.functional_title }}</h4>
                <!-- eslint-disable vue/no-v-html -->
                <div
                  class="text"
                  v-html="$prismic.asHtml(func.functional_description)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="product-description">
      <div class="container">
        <div class="content dots-bg-greed__green">
          <Story classname="product-story dots-bg-greed__red">
            <div class="h5 text-center">
              {{ product.product_description_title }}
            </div>
            <div
              class="text color-text"
              v-html="$prismic.asHtml(product.product_description)"
            ></div>
          </Story>
        </div>
        <div class="image-list">
          <div
            v-for="(img, index) in product.description_images"
            :key="index"
            class="image-item"
          >
            <img :src="img.description_image.url" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import LinkTryFree from '@/components/content/LinkTryFree'
import ImageWithBlur from '@/components/content/ImageWithBlur'
import Story from '@/components/content/Story'
import SocialLinks from '@/components/SocialLinks'
import { mapState } from 'vuex'

export default {
  components: { LinkTryFree, Story, ImageWithBlur, SocialLinks },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    ...mapState(['settings']),
  },
}
</script>
<style scoped lang="scss">
.page {
  padding-bottom: 400px;
}
.product {
  &-head {
    padding: 200px 0 50px;
    margin-bottom: 100px;
    background: linear-gradient(
      180deg,
      #e5efff 9.72%,
      #fafbfe 92.03%,
      #fafbfe 145.03%
    );
    &-container {
      display: flex;
      align-items: flex-end;
      margin: auto;
      max-width: 1450px;
      & .col {
        flex: 0 0 50%;
        padding: 0 1%;
        position: relative;
        &.circle-before-blue::after {
          transform: rotate(94.28deg);
          height: 166px;
          width: 166px;
          right: -50px;
          bottom: -100px;
        }
      }
    }
    &-button {
      margin-bottom: 40px;
    }
    &-content {
      &.dots-bg-greed__red::before {
        height: 183px;
        width: 534px;
        top: -200px;
        left: 30%;
      }
      &.circle-after::after {
        border: 6px solid #ffba49;
        width: 209px;
        height: 209px;
        top: -250px;
        left: 10%;
      }
    }
    & .content-text {
      font-size: 28px;
      line-height: 40px;
      color: #342e56;
      letter-spacing: 0.396px;
      margin-bottom: 60px;
    }
    & .social-links {
      display: none;
    }
  }
  &-tasks {
    & .h3 {
      margin-bottom: 100px;
    }
    background: linear-gradient(
      180deg,
      rgba(236, 240, 253, 0) 0%,
      rgba(236, 240, 253, 0.53) 14.32%,
      #ecf0fd 45.83%,
      rgba(236, 240, 253, 0.43) 84.33%,
      rgba(236, 240, 253, 0) 100%
    );
    position: relative;
    z-index: 1;
    & .list {
      max-width: 1200px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    & .item {
      flex: 0 0 auto;
      width: 50%;
      background: #fff;
      box-shadow: 0 0 70px rgba(0, 0, 0, 0.03);
      border-radius: 20px;
      padding: 30px;
      max-width: 524px;
      margin-bottom: 120px;
      & .task-image {
        margin: 0 auto 20px;
        display: block;
        max-width: 180px;
        max-height: 190px;
        width: 100%;
      }
      & .title {
        margin-bottom: 15px;
      }
      & .text {
        font-size: 24px;
        line-height: 33px;
      }
      &.dots-bg-greed::before {
        width: 100%;
        height: 100%;
        top: -80px;
        right: -140px;
        z-index: -1;
      }
      &.circle-before::before {
        width: 213px;
        height: 213px;
        right: -80px;
        top: -80px;
        z-index: -1;
      }
      &.dots-bg-greed__green::before {
        width: 100%;
        height: 100%;
        top: 80px;
        left: -140px;
        z-index: -1;
      }
    }
  }
  &-functional {
    .h3 {
      position: relative;
      z-index: 1;
      margin-bottom: 100px;
    }
    &-bg {
      background: #e5efff;
      position: relative;
      &::before,
      &::after {
        content: '';
        position: absolute;
        z-index: 0;
        top: 0;
        left: 50%;
        width: 130%;
        height: 420px;
        border-radius: 50%;
        background-color: #fafbfe;
        transform: translate(-50%, -64%);
      }
      &::after {
        top: 96%;
        background-color: #e5efff;
      }
    }
    &-body {
      position: relative;
      z-index: 1;
    }
    &-item {
      display: flex;
      align-items: flex-end;
      &-image {
        max-width: 396px;
      }
      &.even {
        margin-left: auto;
        flex-direction: row-reverse;
      }
      &-content {
        max-width: 560px;
        margin: 0 50px 50px;
        .h4 {
          line-height: 52px;
          letter-spacing: 0.396px;
          margin-bottom: 15px;
        }
      }
    }
    &-item-0 {
      padding-left: 15%;
      &.dots-bg-greed::before {
        width: 368px;
        height: 213px;
        transform: rotate(90deg);
        left: 3%;
        bottom: 0;
      }
      &.circle-before-blue::after {
        width: 230px;
        height: 230px;
        right: 15%;
        top: 30%;
      }
      & .product-functional-item-image {
        &.circle-before::before {
          width: 220px;
          height: 220px;
          right: -90px;
          top: -90px;
        }
      }
    }
    &-item-1 {
      padding-right: 10%;
      &.dots-bg-greed::before {
        width: 368px;
        height: 213px;
        right: 3%;
        top: -15%;
      }
      &.circle-before-blue::after {
        width: 230px;
        height: 230px;
        left: 15%;
        top: 20%;
      }
      & .product-functional-item-image {
        &.circle-before::before {
          width: 220px;
          height: 220px;
          right: -20%;
          bottom: -15%;
        }
      }
    }
    &-item-2 {
      padding-left: 5%;
      &.dots-bg-greed::before {
        width: 368px;
        height: 213px;
        left: 1%;
        top: -20%;
      }
      &.circle-before-blue::after {
        content: none;
      }
      & .product-functional-item-image {
        &.circle-before::before {
          width: 220px;
          height: 220px;
          left: -20%;
          bottom: -15%;
        }
      }
    }
    &-item-3 {
      padding-right: 5%;
      margin-top: -5%;
      &.dots-bg-greed::before {
        width: 368px;
        height: 213px;
        transform: rotate(90deg);
        right: 16%;
        top: -25%;
      }
      &.circle-before-blue::after {
        width: 190px;
        height: 190px;
        left: 12%;
        bottom: 0;
      }
      & .product-functional-item-image {
        &.circle-before::before {
          width: 220px;
          height: 220px;
          right: -20%;
          bottom: -15%;
        }
      }
      & .product-functional-item-content {
        max-width: 660px;
      }
    }

    &-item-4 {
      padding-left: 5%;
      &.dots-bg-greed::before {
        width: 368px;
        height: 213px;
        left: 1%;
        top: -20%;
      }
      &.circle-before-blue::after {
        content: none;
      }
      & .product-functional-item-image {
        &.circle-before::before {
          width: 220px;
          height: 220px;
          left: -20%;
          bottom: -15%;
        }
      }
    }
    &-item-5 {
      padding-right: 5%;
      margin-top: -5%;
      &.dots-bg-greed::before {
        width: 368px;
        height: 213px;
        transform: rotate(90deg);
        right: 16%;
        top: -25%;
      }
      &.circle-before-blue::after {
        width: 190px;
        height: 190px;
        left: 12%;
        bottom: 0;
      }
      & .product-functional-item-image {
        &.circle-before::before {
          width: 220px;
          height: 220px;
          right: -20%;
          bottom: -15%;
        }
      }
      & .product-functional-item-content {
        max-width: 660px;
      }
    }
    &-item-6 {
      padding-left: 5%;
      &.dots-bg-greed::before {
        width: 368px;
        height: 213px;
        left: 1%;
        top: -20%;
      }
      &.circle-before-blue::after {
        content: none;
      }
      & .product-functional-item-image {
        &.circle-before::before {
          width: 220px;
          height: 220px;
          left: -20%;
          bottom: -15%;
        }
      }
    }
  }
  &-description {
    position: relative;
    margin-top: 15%;
    & .content {
      position: relative;
      max-width: 900px;
      margin: auto;
      &.dots-bg-greed__green::before {
        width: 259px;
        height: 572px;
        bottom: -30%;
        left: -15%;
        transform: rotate(90deg);
      }
      & .dots-bg-greed__red::before {
        width: 534px;
        height: 242px;
        top: 30%;
        right: -35%;
        transform: rotate(90deg);
      }
    }
    & .image {
      &-list {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
      }
      &-item {
        position: absolute;
        &:nth-child(1) {
          left: 15%;
          top: -5%;
        }
        &:nth-child(2) {
          left: 5%;
          top: 40%;
        }
        &:nth-child(3) {
          left: 10%;
          top: 85%;
        }
        &:nth-child(4) {
          right: 15%;
          top: -5%;
        }
        &:nth-child(5) {
          right: 10%;
          top: 45%;
        }
        &:nth-child(6) {
          right: 15%;
          top: 90%;
        }
      }
    }
  }
  @media (max-width: 767px) {
    padding-bottom: 80px;
    background: linear-gradient(
      179.99deg,
      #e5efff 9.73%,
      #fafbfe 64.86%,
      #fafbfe 111.01%
    );
    &-head {
      padding: 120px 15px 0;
      background: none;
      &-container {
        flex-direction: column;
      }
      & .h1 {
        line-height: 52px;
        hyphens: auto;
      }
      & .content-text {
        font-size: 18px;
        line-height: 25px;
      }
      & .product-image {
        max-width: 80%;
        margin: auto;
        display: block;
      }
      &-content {
        & .col {
          padding: 0;
        }
        &.dots-bg-greed__red::before,
        &.circle-after::after {
          content: none;
        }
      }
      & .social-links {
        display: block;
        margin-top: 80px;
      }
    }
    &-tasks {
      padding: 0 15px;
      background: none;
      .h3 {
        text-align: left;
        margin-bottom: 50px;
      }

      & .list {
        flex-direction: column;
        align-items: center;
      }
      & .item {
        width: 100%;
        margin-bottom: 50px;
        padding: 20px 15px;
        box-shadow: 16px 16px 48px rgba(0, 0, 0, 0.0994678);
        &::before {
          content: none;
        }
        & .task-image {
          max-width: 120px;
        }
        & .title {
          font-weight: bold;
          font-size: 24px;
          line-height: 122%;
        }
        & .text {
          font-size: 18px;
          line-height: 25px;
        }
      }
    }
    &-functional {
      padding: 0 15px;
      &-bg {
        background: none;
        &::before,
        &::after {
          content: none;
        }
      }
      .h3 {
        text-align: left;
      }
      &-item {
        flex-direction: column;
        align-items: flex-start;
        padding-top: 100px;
        &-image {
          max-width: 50%;
        }
        &.circle-before-blue::after {
          content: none;
        }
        &-content {
          margin: 20px 0 30px;
          & .h4 {
            font-size: 26px;
            line-height: 120%;
            position: absolute;
            top: 0;
          }
          & .text {
            font-size: 18px;
            line-height: 25px;
            max-width: 90%;
          }
        }
        &.even {
          flex-direction: column;
          align-items: flex-end;
        }
      }
      &-item-0 {
        padding-left: 0;
        padding-top: 60px;
        &.dots-bg-greed::before {
          width: 180px;
          height: 92px;
          transform: rotate(0deg);
          left: 40%;
          bottom: 30%;
        }
        & .product-functional-item-image {
          &.circle-before::before {
            width: 114px;
            height: 114px;
            right: -50px;
            top: -10px;
          }
        }
      }
      &-item-1 {
        padding-right: 0;
        &.dots-bg-greed::before {
          width: 180px;
          height: 92px;
          right: 40%;
          bottom: 40%;
          top: auto;
        }
        & .product-functional-item-image {
          &.circle-before::before {
            width: 117px;
            height: 117px;
            right: 80%;
            bottom: 25%;
          }
        }
      }
      &-item-2 {
        padding-left: 0;
        padding-top: 120px;
        &.dots-bg-greed::before {
          width: 178px;
          height: 100px;
          left: 30%;
          top: 40%;
          transform: rotate(90deg);
        }
        & .product-functional-item-image {
          &.circle-before::before {
            content: none;
          }
        }
      }
      &-item-3 {
        padding-right: 0;
        &.dots-bg-greed::before {
          width: 180px;
          height: 92px;
          right: 40%;
          top: 40%;
          transform: rotate(0deg);
        }
        & .product-functional-item-image {
          &.circle-before::before {
            width: 117px;
            height: 117px;
            right: 80%;
            bottom: 25%;
          }
        }
      }
      &-item-4 {
        padding-left: 0;
        padding-top: 120px;
        &.dots-bg-greed::before {
          width: 178px;
          height: 100px;
          left: 30%;
          top: 40%;
          transform: rotate(90deg);
        }
        & .product-functional-item-image {
          &.circle-before::before {
            content: none;
          }
        }
      }
      &-item-5 {
        padding-right: 0;
        &.dots-bg-greed::before {
          width: 180px;
          height: 92px;
          right: 40%;
          top: 40%;
          transform: rotate(0deg);
        }
        & .product-functional-item-image {
          &.circle-before::before {
            width: 117px;
            height: 117px;
            right: 80%;
            bottom: 25%;
          }
        }
      }
      &-item-6 {
        padding-left: 0;
        padding-top: 120px;
        &.dots-bg-greed::before {
          width: 178px;
          height: 100px;
          left: 30%;
          top: 40%;
          transform: rotate(90deg);
        }
        & .product-functional-item-image {
          &.circle-before::before {
            content: none;
          }
        }
      }
    }
    &-description {
      display: none;
    }
  }
}
</style>
