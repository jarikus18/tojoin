<template>
  <div class="page">
    <div class="container">
      <div class="col">
        <h1 class="h1 m-0">{{ $prismic.asText(data.title) }}</h1>
        <p class="subtitle">
          {{ data.subtitle }}
        </p>
        <ul class="contacts">
          <li class="contacts-item">
            <a :href="`tel:${data.phone}`">{{ data.phone }}</a>
          </li>
          <li class="contacts-item">
            <a :href="`mailto:${data.email}`">{{ data.email }}</a>
          </li>
        </ul>
        <div class="image-wrapper">
          <img src="~@/assets/images/pages/contacts.svg" alt="contacts" />
        </div>
        <SocialLinks />
      </div>
      <div class="col">
        <div class="picture">
          <img src="~@/assets/images/blog/picture.svg" alt="" />
        </div>
        <form class="form" @submit.prevent="onSubmit">
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

export default {
  name: 'ContactPage',
  components: { SocialLinks, TextInput },
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
    }
  },
  head() {
    return {
      title: this.data.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.data.meta_description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.data.meta_keywords,
        },
        {
          property: 'og:title',
          content: this.data.meta_title,
          vmid: 'og:title',
        },
        {
          property: 'og:description',
          content: this.data.meta_description,
          vmid: 'og:description',
        },
        {
          property: 'og:image',
          content: this.data.meta_image.url,
          vmid: 'og:image',
        },
      ],
    }
  },
  methods: {
    async onSubmit(e) {
      // eslint-disable-next-line no-console
      console.log(this.formData)
      if (this.name && this.email) {
        return true
      }
      const res = await this.$axios.$post('/.netlify/functions/send', {
        ...this.formData,
      })
      console.log('res', res)
      // fetch('/', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //   body: this.encode({
      //     'form-name': e.target.getAttribute('name'),
      //     ...this.formData,
      //   }),
      // })
      //   .then((res) => console.log('sended', res))
      //   .catch((error) => alert(error))
      this.errors = []
      e.preventDefault()
    },
    handleChange(e) {
      const { name, value } = e.target
      this.formData[name] = value
    },
  },
}
</script>
<style lang="scss" scoped>
.page {
  padding-top: 200px;
  margin-bottom: 400px;
  background: linear-gradient(
    180deg,
    #e5efff 9.72%,
    #fafbfe 92.03%,
    #fafbfe 145.03%
  );
}
.container {
  display: flex;
  padding: 0 12%;
  & .col {
    flex: 0 0 50%;
  }
}
.picture {
  text-align: right;
  margin: 40px 0;
}
.form {
  & .btn-group {
    margin-top: 40px;
    text-align: right;
  }
}
</style>
