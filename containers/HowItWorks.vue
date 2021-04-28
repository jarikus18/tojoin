<template>
  <div class="page">
    <section class="page-head">
      <div class="container page-head-container">
        <h1 class="h1 m-0 mobile-title">
          {{ $prismic.asText(data.title_for_mobile) }}
        </h1>
        <div class="col">
          <div class="head-image">
            <img
              class="preview img-responsive"
              :src="data.preview_image.url"
              alt=""
            />
            <div class="play-button" @click="setModal">
              <img src="~@/assets/icons/triangle.svg" alt="" />
            </div>
          </div>
          <Modal v-if="showModal" @close="showModal = false">
            <div slot="body" class="video">
              <div class="video-block">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div class="videoWrapper">
                  <iframe
                    width="560"
                    height="315"
                    :src="`https://www.youtube.com/embed/${data.youtube_video_id}?autoplay=1`"
                    title="Marketing"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <div class="col">
          <div class="decor-wraper">
            <div class="tag">
              <Tag />
            </div>
            <div class="dots-block">
              <ThreeDots />
            </div>
            <div class="picture">
              <Picture />
            </div>
          </div>
          <h1 class="h1 m-0 title">{{ $prismic.asText(data.title) }}</h1>
          <div class="link">
            <LinkTryFree />
          </div>
          <div class="plus">
            <Plus />
          </div>
          <div class="star star-1">
            <Star />
          </div>
          <div class="star star-2">
            <Star />
          </div>
        </div>
        <div class="social-link">
          <SocialLinks />
        </div>
      </div>
    </section>
    <section class="work">
      <h3 class="h3 text-center">{{ data.how_it_works_title }}</h3>
      <div class="container">
        <ul class="work-list">
          <li
            v-for="(work, index) in data.how_it_works_list"
            :key="index"
            class="work-item"
          >
            <Step
              :data="{
                number: index + 1,
                image: work.step_image.url,
                title: work.step_title,
                description: work.step_description,
              }"
            />
          </li>
        </ul>
      </div>
    </section>
    <div class="grows">
      <h3 class="h3 text-center">{{ data.business_grows }}</h3>
      <div class="grows-bg">
        <div class="container">
          <ul class="grows-list">
            <li
              v-for="(key, index) in data.business_keys"
              :key="index"
              class="grows-item circle-before"
            >
              <span class="grows-item-text">{{ key.business_key }}</span>
            </li>
          </ul>
          <div class="grows-image dots-bg-greed dots-bg-greed__after">
            <img
              src="~@/assets/images/pages/grows.svg"
              alt=""
              class="img-reponsive"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SocialLinks from '@/components/SocialLinks'
import { Picture, Tag, ThreeDots, Plus, Star } from '@/components/decor'
import LinkTryFree from '@/components/content/LinkTryFree'
import Modal from '@/components/content/Modal'
import Step from '@/components/content/Step'
import meta from '@/components/meta'

export default {
  components: {
    Modal,
    Picture,
    Tag,
    ThreeDots,
    Plus,
    Star,
    SocialLinks,
    LinkTryFree,
    Step,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
  head() {
    return {
      ...meta(this.data),
      bodyAttrs: {
        style: this.showModal ? 'overflow: hidden' : '',
      },
    }
  },
  methods: {
    setModal() {
      this.showModal = true
      document.body.classList = 'body_overflow'
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  margin-bottom: 200px;
  &-head {
    padding: 200px 0 0;
    margin-bottom: 150px;
    position: relative;
    background: linear-gradient(
      180deg,
      #e5efff 9.72%,
      #fafbfe 92.03%,
      #fafbfe 145.03%
    );
    &-container {
      display: flex;
    }
    & .mobile-title {
      display: none;
    }
    & .col {
      flex: 0 0 50%;
      padding: 0 2%;
    }
    & .social-link {
      display: none;
    }
    & .tag {
      padding-bottom: 30px;
      margin-right: 50px;
    }
    & .dots-block {
      flex: 1;
    }
    & .decor-wraper {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 20px;
    }
    & .link {
      margin-top: 6%;
    }
    & .plus {
      position: absolute;
      bottom: -15%;
      left: 70%;
    }
    & .star {
      position: absolute;
      right: 5%;
      bottom: 5%;
      &-2 {
        right: 20%;
        bottom: 0;
        width: 25px;
        height: 25px;
      }
    }
  }
  & .head-image {
    position: relative;
    max-width: 650px;
    margin-left: auto;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(224.72deg, #7a76e1 -1%, #acc9f9 100.5%);
      box-shadow: -24px 24px 44px rgba(84, 48, 209, 0.3);
      border-radius: 15px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
      bottom: -30px;
      left: -30px;
    }
    & .play-button {
      position: absolute;
      right: -30px;
      top: calc(50% - 106px / 2);
      width: 106px;
      height: 106px;
      background: #fff;
      box-shadow: 16px 16px 48px rgba(0, 0, 0, 0.101959);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    & .preview {
      position: relative;
      display: block;
      border-radius: 15px;
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 100px;
    background: linear-gradient(
      179.99deg,
      #e5efff 9.73%,
      #fafbfe 64.86%,
      #fafbfe 111.01%
    );
    &-head {
      padding: 140px 15px 0;
      background: none;
      margin-bottom: 50px;
      & .mobile-title {
        display: block;
        margin-bottom: 30px;
      }
      &-container {
        display: block;
      }
      & .col {
        flex: 0 0 auto;
        padding: 0;
      }
      & .link {
        margin-top: 15%;
        text-align: center;
      }
      & .title,
      & .decor-wraper,
      & .star {
        display: none;
      }
      & .social-link {
        display: block;
        margin-top: 100px;
        &::v-deep .social-list {
          justify-content: center;
        }
      }
    }
    & .head-image {
      &::before {
        bottom: -10px;
        left: -10px;
      }
      & .play-button {
        right: calc(50% - 65px / 2);
        top: calc(50% - 65px / 2);
        width: 65px;
        height: 65px;
      }
    }
  }
}
.video {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  &-block {
    max-width: 1200px;
    width: 100%;
    margin: auto;
  }
}
.work {
  position: relative;
  margin-bottom: 150px;
  .h3 {
    margin-bottom: 120px;
  }
  &-list {
    padding: 0 12%;
  }
  &-item {
    margin-top: -10%;
    &:first-child {
      margin-top: 0;
    }
  }
  @media (max-width: 767px) {
    padding: 0 15px;
    margin-bottom: 50px;
    .h3 {
      margin-bottom: 60px;
      text-align: left;
    }
    &-list {
      padding: 0;
    }
    &-item {
      margin-top: 15%;
    }
  }
}

.grows {
  & .h3 {
    position: relative;
    z-index: 1;
  }
  &-bg {
    position: relative;
    background: #e5efff;
    padding: 120px 0;
    &::before,
    &::after {
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
    &::after {
      top: 100%;
      transform: translate(-50%, -34%);
      height: 520px;
    }
  }
  & .container {
    max-width: 1720px;
    margin: auto;
    position: relative;
  }
  &-list {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  &-item {
    position: absolute;
    &-text {
      display: block;
      padding: 18px 54px;
      position: relative;
      background: #fff;
      filter: drop-shadow(-25px 20px 44px rgba(84, 48, 209, 0.35));
      border-radius: 20px;
      display: inline-block;
      font-weight: 600;
      font-size: 34px;
      line-height: 150%;
      z-index: 2;
    }
    &.circle-before::before {
      width: 240px;
      height: 240px;
      z-index: -1;
    }
    &:nth-child(1) {
      top: 15%;
      left: 5%;
      &::before {
        left: -20%;
        top: -50%;
      }
    }
    &:nth-child(2) {
      top: 10%;
      right: 0;
      &::before {
        right: -15%;
        top: -50%;
      }
    }
    &:nth-child(3) {
      top: 40%;
      left: 0;
      &::before {
        right: 0;
        top: -120%;
        width: 65px;
        height: 65px;
      }
    }
    &:nth-child(4) {
      bottom: 10%;
      right: 0;
      &::before {
        right: -15%;
        top: -120%;
      }
    }
    &:nth-child(5) {
      bottom: 15%;
      left: 10%;
      &::before {
        right: -8%;
        bottom: -60%;
        width: 87px;
        height: 87px;
      }
    }
  }
  &-image {
    padding: 250px 0;
    text-align: center;
    margin-left: 20%;
    position: relative;
    & img {
      position: relative;
      z-index: 1;
    }
    &.dots-bg-greed::before,
    &.dots-bg-greed__after::after {
      width: 368.8px;
      height: 213.76px;
      left: 0;
      bottom: 25%;
    }
    &.dots-bg-greed::before {
      transform: rotate(90deg);
      left: auto;
      right: 20%;
      bottom: auto;
      top: 35%;
    }
  }
  @media (max-width: 767px) {
    padding: 0 15px;
    .h3 {
      margin-bottom: 0;
      text-align: left;
    }
    &-bg {
      background: none;
      padding: 20px 0;
      &::before,
      &::after {
        content: none;
      }
    }
    & .container {
      display: flex;
      flex-direction: column-reverse;
    }
    &-list {
      position: relative;
    }
    &-item {
      position: static;
      margin-bottom: 40px;
      max-width: 80%;
      &-text {
        font-size: 24px;
        line-height: 117%;
        padding: 18px 24px;
        box-shadow: -8px 18px 39px -7px rgba(84, 48, 209, 0.24);
        filter: none;
        background: #fff url('~/assets/icons/quotes.svg') no-repeat 95% 10% /
          110px;
      }
      &::before {
        content: none;
      }
      &:nth-child(even) {
        margin-left: auto;
      }
    }
    &-image {
      padding: 0;
      margin-left: 0;
      margin-bottom: 40px;
      &::before,
      &::after {
        content: none;
      }
      & img {
        max-width: 80%;
      }
    }
  }
}
</style>
