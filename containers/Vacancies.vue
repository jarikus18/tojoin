<template>
  <div class="page">
    <section class="page-head circle-after-blue">
      <div class="container page-head-container">
        <div class="col right">
          <h1 class="h1 m-0 title">
            {{ $prismic.asText(data.title) }}
          </h1>
          <br />
          <div class="caption-1 subtitle">{{ data.subtitle }}</div>
          <div class="social-link">
            <SocialLinks />
          </div>
          <h4 class="h4 what-we-offer">{{ data.what_we_offer }}</h4>
          <div class="caption-1 what-we-offer-text pre-line">
            {{ $prismic.asText(data.what_we_offer_text) }}
          </div>
        </div>
        <div class="col">
          <div class="bitmap">
            <Bitmap />
          </div>
          <div class="decor-wraper-top">
            <div class="star">
              <Star />
            </div>
            <div class="picture">
              <Picture />
            </div>
          </div>
          <div class="head-image">
            <img
              class="preview img-responsive"
              :src="data.what_we_offer_image.url"
              alt=""
            />
          </div>
          <div class="plus">
            <Plus />
          </div>
          <div class="decor-wraper-bottom">
            <div class="tag">
              <Tag />
            </div>
            <div class="dots-block">
              <ThreeDots />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="vacancies text-center">
      <div class="h3 text-center">{{ data.vacancies_title }}</div>
      <ul class="container vacancies-list">
        <li
          v-for="(item, index) in data.vacancies_list"
          :key="index"
          class="vacancies-item"
        >
          <NavLink
            :type="item.vacancy_link.link_type"
            :href="item.vacancy_link.url"
          >
            <Card
              :title="item.vacancy_title"
              :description="item.vacancy_description"
            />
          </NavLink>
        </li>
      </ul>
    </section>
    <section class="form text-center">
      <div class="container">
        <div class="form-bitmap">
          <Bitmap />
        </div>
        <div class="form-title h5">{{ data.send_your_cv }}</div>
        <div class="caption-1 mail">
          <img
            src="~/assets/icons/mail.svg"
            alt=""
            class="img-responsive mail-image"
          />
          <a :href="`mailto:${settings.email}`" class="mail-link">
            {{ settings.email }}
          </a>
        </div>
        <div class="text form-subtitle">{{ data.send_cv_description }}</div>
        <div class="form-tag">
          <Tag />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SocialLinks from '@/components/SocialLinks'
import { Picture, Tag, ThreeDots, Plus, Star, Bitmap } from '@/components/decor'
import Card from '@/components/content/Card'
import NavLink from '@/components/NavLink'
import { mapState } from 'vuex'

export default {
  components: {
    Picture,
    Tag,
    ThreeDots,
    Plus,
    Star,
    Bitmap,
    SocialLinks,
    Card,
    NavLink,
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
  computed: {
    ...mapState(['settings']),
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
      justify-content: center;
    }
    &.circle-after-blue:after {
      bottom: 0;
      left: -5%;
      height: 340px;
      width: 340px;
      transform: rotate(-165.73deg);
    }
  }
  @media (max-width: 767px) {
    &-head {
      padding: 120px 10px 0;
      margin-bottom: 50px;
      &-container {
        flex-direction: column-reverse;
      }
      &.circle-after-blue:after {
        top: 570px;
        right: -20%;
        left: auto;
        height: 232px;
        width: 232px;
      }
    }
  }
}
.col {
  &.right {
    max-width: 600px;
  }
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
}
.title {
  position: relative;
  z-index: 1;
  @media (max-width: 767px) {
    font-weight: 800;
    font-size: 44px;
    line-height: 52px;
  }
}
.subtitle {
  margin-bottom: 5%;
  line-height: 40px;
  letter-spacing: 0.4px;
  @media (max-width: 767px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
  }
}

.what-we-offer {
  position: relative;
  z-index: 1;
  @media (max-width: 767px) {
    font-weight: 800;
    font-size: 38px;
    line-height: 46px;
    &-text {
      font-size: 18px;
      line-height: 26px;
    }
  }
}

.social-link {
  display: none;
  @media (max-width: 767px) {
    display: block;
    margin: 50% 0 15%;
  }
}
.bitmap {
  position: absolute;
  top: 5%;
  @media (max-width: 767px) {
    width: 282px;
    height: 282px;
    top: 450px;
    left: -33%;
  }
}
.head-image {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-top: 1%;
  @media (max-width: 767px) {
    text-align: left;
    .preview {
      max-width: 60%;
    }
  }
}
.decor-wraper {
  &-top {
    display: flex;
    justify-content: space-between;
    padding-left: 10%;
    margin-top: 2%;
    @media (max-width: 767px) {
      display: none;
    }
  }
  &-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-left: 20%;
    @media (max-width: 767px) {
      display: none;
    }
  }
}
.plus {
  padding-left: 10%;
  margin: 2% 0;
}
.vacancies {
  margin: 0 auto 5%;
  position: relative;
  z-index: 1;
  &-list {
    display: flex;
    margin-top: 2%;
  }
  &-item {
    width: 33.33%;
    margin: 0 30px;
  }
  @media (max-width: 767px) {
    padding: 0 10px;
    .h3 {
      text-align: left;
      line-height: 46px;
    }
    &-list {
      flex-direction: column;
    }
    &-item {
      width: 100%;
      margin: 3% 0;
    }
  }
}

.form {
  position: relative;
  margin: 7% 0 12%;
  &-bitmap {
    position: absolute;
    z-index: 0;
    top: 50%;
    margin-left: 15%;
    transform: translateY(-50%);
  }
  &-title {
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.4px;
  }
  &-tag {
    position: absolute;
    top: 50%;
    margin-left: 70%;
    transform: translateY(-50%);
  }
  .mail {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1% 0;
    &-image {
      margin-right: 20px;
    }
    &-link {
      color: #342e56;
    }
  }
  @media (max-width: 767px) {
    padding: 0 10px;
    text-align: left;
    margin-top: 100px;
    &-title {
      font-size: 26px;
      line-height: 120%;
    }
    &-subtitle {
      font-weight: 600;
      font-size: 22px;
      line-height: 120%;
    }
    &-tag {
      display: none;
    }
    &-bitmap {
      top: -10%;
      margin-left: 0;
      left: -15%;
      width: 282px;
      height: 282px;
    }
    .mail {
      justify-content: start;
      font-size: 18px;
      line-height: 40px;
      & img {
        max-width: 25px;
      }
    }
  }
}
</style>
