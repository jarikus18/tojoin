<template>
  <div class="page">
    <div class="container container-wrapper">
      <div class="col">
        <h1 class="h1 m-0 title">{{ $prismic.asText(data.title) }}</h1>
        <p class="subtitle">
          {{ data.subtitle }}
        </p>
        <ul class="contacts">
          <li class="contacts-item">
            <img src="~@/assets/icons/phone.svg" alt="" />
            <a class="contacts-link" :href="`tel:${data.phone}`">{{
              data.phone
            }}</a>
          </li>
          <li class="contacts-item">
            <img src="~@/assets/icons/mail.svg" alt="" />
            <a class="contacts-link" :href="`mailto:${data.email}`">{{
              data.email
            }}</a>
          </li>
        </ul>
        <div class="call circle-bg-before">
          <img
            class="call-image"
            src="~@/assets/images/pages/contacts.svg"
            alt="contacts"
          />
          <Plus classname="plus" />
          <Tag classname="tag" />
          <ThreeDots classname="dots" />
        </div>
        <div class="social">
          <SocialLinks />
        </div>
      </div>
      <div class="col">
        <Star classname="star" />
        <Plus classname="plus-head" />
        <Bitmap class="bitmap" />
        <div class="picture">
          <Picture />
        </div>
        <div v-if="sent.progress === 'success'" class="isSended h4 text-center">
          <Confirmation :message="sent[sent.progress]" :click="onClose" />
        </div>
        <form
          v-if="sent.progress !== 'success' && sent.progress !== 'error'"
          class="form"
          @submit.prevent="onSubmit"
        >
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
          <TextInput
            :value="formData.message"
            name="message"
            :required="false"
            :label="data.message"
            template="textarea"
            @handleChange="handleChange($event)"
          />
          <div class="btn-group">
            <button class="btn-common">{{ data.send }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SocialLinks from '@/components/SocialLinks'
import TextInput from '@/components/form/TextInput'
import Loader from '@/components/Loader'
import meta from '@/components/meta'
import { Picture, Bitmap, Tag, ThreeDots, Plus, Star } from '@/components/decor'
import Confirmation from '@/components/content/Confirmation'

export default {
  name: 'ContactPage',
  components: {
    SocialLinks,
    TextInput,
    Loader,
    Picture,
    Bitmap,
    Tag,
    ThreeDots,
    Plus,
    Star,
    Confirmation,
  },
  layout: 'custom',
  async asyncData({ $prismic, i18n }) {
    const { data } = await $prismic.api.getSingle('contact_page', {
      lang: i18n.localeProperties.iso,
    })
    return {
      data,
    }
  },
  data() {
    return {
      payload: '',
      errors: [],
      formData: {
        name: '',
        email: '',
        message: '',
      },
      isLoading: false,
      sent: {
        progress: 'idle',
        success: 'Сообщение \nотправленно',
        error: 'Простите, возникла ошибка',
      },
    }
  },
  head() {
    return meta(this.data)
  },
  methods: {
    async onSubmit() {
      try {
        if (this.name && this.email) {
          return true
        }
        this.isLoading = true
        this.sent.progress = 'loading'
        await this.$axios.$post('/.netlify/functions/send', {
          ...this.formData,
        })

        this.formData = {
          name: '',
          email: '',
          message: '',
        }
        this.sent.progress = 'success'
        this.errors = []
      } catch (error) {
        this.sent.progress = 'error'
        return null
      } finally {
        this.isLoading = false
      }
    },
    handleChange(e) {
      const { name, value } = e.target
      this.formData[name] = value
    },
    onClose() {
      this.sent.progress = 'idle'
    },
  },
}
</script>
<style lang="scss" scoped>
.page {
  padding: 200px 0;
  background: linear-gradient(
    180deg,
    #e5efff 9.72%,
    #fafbfe 92.03%,
    #fafbfe 145.03%
  );
  @media (max-width: 767px) {
    padding: 100px 0;
  }
}
.container {
  &-wrapper {
    display: flex;
    padding: 0 12%;
    color: #342e56;
  }
  & .col {
    flex: 0 0 50%;
    position: relative;
  }
  @media (max-width: 767px) {
    padding: 0 15px;
    flex-wrap: wrap;
    & .col {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
}
.title {
  margin-bottom: 20px;
  @media (max-width: 767px) {
    order: 2;
    line-height: 52px;
  }
}
.subtitle {
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: 0.396px;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    order: 2;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 25px;
  }
}

.contacts {
  margin-bottom: 50px;
  &-item {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    & img {
      width: 45px;
      height: 45px;
    }
  }
  &-link {
    color: #342e56;
    font-weight: 600;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 0.396px;
    padding-left: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 767px) {
    order: 2;
    &-item {
      margin-bottom: 5px;
      & img {
        width: 25px;
        height: 25px;
      }
    }
    &-link {
      font-size: 18px;
      line-height: 40px;
      padding-left: 10px;
    }
  }
}
.call {
  &-image {
    margin-bottom: 50px;
  }
  &.circle-bg-before::before {
    top: 30%;
    left: -400px;
  }
  & .tag {
    position: absolute;
    right: 25%;
    bottom: 15%;
  }
  & .dots {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  & .plus {
    position: absolute;
    right: 35%;
    bottom: 35%;
  }
  @media (max-width: 767px) {
    order: 0;
    &-image {
      max-width: 80%;
      margin-bottom: 20px;
    }
    & .plus,
    & .tag,
    & .dots {
      display: none;
    }

    &.circle-bg-before::before {
      top: 30%;
      left: auto;
      right: -180px;
      width: 232px;
      height: 232px;
    }
  }
}
.social {
  @media (max-width: 767px) {
    order: 3;
  }
}
.bitmap {
  position: absolute;
  width: 380px;
  height: 380px;
  left: -200px;
  top: 100px;
  @media (max-width: 767px) {
    left: auto;
    top: 0;
    width: 310px;
    height: 310px;
    right: -200px;
  }
}
.star {
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 767px) {
    display: none;
  }
}
.plus-head {
  position: absolute;
  top: 10%;
  left: 25%;
  @media (max-width: 767px) {
    display: none;
  }
}

.picture {
  text-align: right;
  margin: 40px 0;
  @media (max-width: 767px) {
    display: none;
  }
}
.form {
  display: block;
  position: relative;
  padding-left: 10%;
  & .btn-group {
    margin-top: 40px;
    text-align: right;
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
    padding-left: 0;
  }
}
</style>
