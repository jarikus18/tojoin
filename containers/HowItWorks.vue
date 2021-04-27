<template>
  <div class="page">
    <section class="page-head">
      <div class="container page-head-container">
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
          </Modal>
        </div>
        <div class="col">
          <div class="picture">
            <Picture />
          </div>
          <div class="tag">
            <Tag />
          </div>
          <div class="dots">
            <ThreeDots />
          </div>
          <h1 class="h1 m-0 title">{{ $prismic.asText(data.title) }}</h1>
          <div class="link">
            <LinkTryFree />
          </div>
          <div class="plus">
            <Plus />
          </div>
          <div class="star">
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
            <div class="step">{{ index + 1 }}</div>
            <div class="image">
              <img :src="work.step_image.url" alt="" />
            </div>
            <div class="title">{{ work.step_title }}</div>
            <div class="description">{{ work.step_description }}</div>
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
              class="grows-item"
            >
              {{ key.business_key }}
            </li>
          </ul>
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
  margin-bottom: 300px;
  &-head {
    padding: 200px 0;
    background: linear-gradient(
      180deg,
      #e5efff 9.72%,
      #fafbfe 92.03%,
      #fafbfe 145.03%
    );
    &-container {
      display: flex;
    }
    & .col {
      flex: 0 0 50%;
    }
    & .social-link {
      display: none;
    }
  }
  & .head-image {
    position: relative;
    max-width: 650px;
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
}
.video {
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 5% auto;
  & .videoWrapper {
    background: #000;
  }
}
</style>
