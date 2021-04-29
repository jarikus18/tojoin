<template>
  <div class="page">
    <div class="head">
      <div class="container head-container">
        <div class="col">
          <div class="image">
            <img
              :src="data.affiliate_image.url"
              alt=""
              class="img-responsive"
            />
          </div>
        </div>
        <div class="col">
          <div class="decor decor-top circle-before-blue">
            <div class="tag">
              <div class="plus">
                <Plus />
              </div>
              <Tag />
            </div>
            <div class="picture">
              <Picture />
            </div>
          </div>
          <h1 class="h1">{{ $prismic.asText(data.title) }}</h1>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="description" v-html="$prismic.asHtml(data.subtitle)" />

          <div class="button">
            <NavLink
              classname="btn-common orange-bg"
              :href="data.become_a_partner_link.url"
              :type="data.become_a_partner_link.link_type"
            >
              {{ data.become_a_partner }}
            </NavLink>
          </div>
          <div class="decor decor-bottom">
            <div class="star star-1"><Star /></div>
            <div class="dots-block"><ThreeDots /></div>
            <div class="star star-2"><Star /></div>
          </div>
        </div>
      </div>
    </div>

    <section class="instruments circle-before-blue circle-after-blue">
      <h3 class="h3 text-center">
        {{ $prismic.asText(data.what_do_you_need) }}
      </h3>
      <div class="container">
        <ul class="instruments-list">
          <li
            v-for="(resource, index) in data.steps"
            :key="index"
            class="instruments-item"
          >
            <Step
              :data="{
                number: index + 1,
                image: resource.image.url,
                title: resource.tile,
              }"
            />
          </li>
        </ul>
        <div class="partnership circle-before-blue">
          <form class="partnership-form" @submit.prevent="onSubmit">
            <div class="tag">
              <div class="plus">
                <Plus />
              </div>
              <Tag />
            </div>
            <div v-if="isLoading" class="isLoading">
              <Loader />
            </div>
            <TextInput
              :value="formData.name"
              name="name"
              :label="data.your_name"
              @handleChange="handleChange($event)"
            />
            <TextInput
              :value="formData.email"
              name="email"
              type="email"
              :label="data.your_email"
              @handleChange="handleChange($event)"
            />
            <div class="btn-group">
              <button class="btn-common">{{ data.register }}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Step from '@/components/content/Step'
import NavLink from '@/components/NavLink'
import { Picture, Tag, ThreeDots, Plus, Star } from '@/components/decor'
import TextInput from '@/components/form/TextInput'
import Loader from '@/components/Loader'

export default {
  components: {
    Step,
    NavLink,
    Picture,
    Tag,
    ThreeDots,
    Plus,
    Star,
    TextInput,
    Loader,
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
      payload: '',
      errors: [],
      formData: {
        name: '',
        email: '',
      },
      isLoading: false,
      sent: {
        success: 'Ваше сообщение успешно утправлено',
        error: 'Простите, возникла ошибка',
      },
      methods: {
        async onSubmit() {
          try {
            if (this.name && this.email) {
              return true
            }
            this.isLoading = true
            await this.$axios.$post('/.netlify/functions/send', {
              ...this.formData,
            })

            this.formData = {
              name: '',
              email: '',
            }

            this.errors = []
          } catch (error) {
            return null
          } finally {
            this.isLoading = false
          }
        },
        handleChange(e) {
          const { name, value } = e.target
          this.formData[name] = value
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.page {
  margin-bottom: 300px;
  position: relative;
  @media (max-width: 767px) {
    margin-bottom: 100px;
    background: linear-gradient(
      180deg,
      #e5efff 9.72%,
      #fafbfe 92.03%,
      #fafbfe 145.03%
    );
  }
}

.head {
  padding-top: 150px;
  margin-bottom: 100px;
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
  & .col {
    flex: 0 0 50%;
    padding: 0 5%;
  }
  & .image {
    text-align: right;
  }
  & .decor {
    &-top {
      display: flex;
      justify-content: space-between;
      position: relative;
      &.circle-before-blue::before {
        background: linear-gradient(224.72deg, #86aefa -1%, #fafbfe 100.5%);
        width: 100px;
        height: 100px;
        right: 50%;
        top: -5%;
      }
    }
    &-bottom {
      margin-left: auto;
      max-width: 70%;
      & .star-1 {
        text-align: right;
      }
      & .dots-block {
        display: flex;
        justify-content: center;
        margin: 20px 0;
      }
    }
  }
  & .description {
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    margin-bottom: 8%;
  }
  @media (max-width: 767px) {
    padding: 140px 15px 0;
    margin-bottom: 50px;
    background: transparent;
    &-container {
      display: block;
      max-width: 100%;
    }
    & .col {
      flex: 0 0 auto;
      padding: 0;
    }
    & .image {
      max-width: 70%;
      margin: auto;
    }
    & .decor {
      &-top {
        display: none;
      }
    }
    & .h1 {
      line-height: 120%;
    }
    & .description {
      font-size: 18px;
      line-height: 140%;
    }
  }
}

.instruments {
  position: relative;
  margin-bottom: 100px;
  background: linear-gradient(
    180deg,
    rgba(236, 240, 253, 0) 0%,
    rgba(236, 240, 253, 0.53) 14.32%,
    #ecf0fd 45.83%,
    rgba(236, 240, 253, 0.43) 84.33%,
    rgba(236, 240, 253, 0) 100%
  );
  &-list {
    max-width: 1480px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 140px;
  }
  &-item {
    margin: 0 0 5%;
    &:nth-child(even) {
      margin-top: 6%;
    }
    & .step {
      max-width: 670px;
    }
    &::v-deep .step-title {
      font-size: 36px;
      line-height: 49px;
    }
  }
  &.circle-before-blue::before {
    background: linear-gradient(225.91deg, #8fb8fd -46.01%, #fafbfe 85.99%);
    transform: rotate(144.55deg);
    width: 323px;
    height: 323px;
    left: -120px;
    top: -5%;
  }
  &.circle-after-blue::after {
    background: linear-gradient(225.91deg, #8fb8fd -46.01%, #fafbfe 85.99%);
    width: 323px;
    height: 323px;
    right: -150px;
    bottom: 15%;
  }
  @media (max-width: 767px) {
    background: none;
    padding: 0 15px;
    & .h3 {
      text-align: left;
    }
    &-list {
      margin: auto;
      flex-direction: column;
      align-items: center;
      margin-top: 80px;
    }
    &-item {
      margin-bottom: 60px;
      margin-top: 50px;
      position: relative;
      &::v-deep .step-title {
        font-size: 24px;
        line-height: 32px;
        max-width: 300px;
      }
    }
    &.circle-before-blue::before,
    &.circle-after-blue::after {
      display: none;
    }
  }
}

.partnership {
  margin-top: 150px;
  position: relative;
  &.circle-before-blue::before {
    background: linear-gradient(225.91deg, #8fb8fd -46.01%, #fafbfe 85.99%);
    transform: rotate(173.68deg);
    width: 323px;
    height: 323px;
    left: -156px;
    top: -156px;
  }
  &-form {
    display: block;
    position: relative;
    max-width: 600px;
    margin: auto;
    & .tag {
      position: absolute;
      right: -150px;
      top: -20px;
      & .plus {
        position: absolute;
        left: -100px;
        top: -50px;
      }
    }
    &::before {
      content: '';
      mix-blend-mode: normal;
      opacity: 0.2;
      background: url('~/assets/images/blog/bitmap.png') no-repeat 0 0 / 422px;
      width: 422px;
      height: 422px;
      position: absolute;
      z-index: -1;
      top: -45%;
      left: -50%;
    }
    & .btn-group {
      margin-top: 40px;
      text-align: center;
    }
    & .isLoading {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -100px;
      & ~ * {
        filter: blur(5px);
      }
    }
    @media (max-width: 767px) {
      margin-top: 80px;
    }
  }
}
</style>
