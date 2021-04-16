<template>
  <Home :data="data" />
</template>

<script>
import Home from '@/containers/Home'

export default {
  name: 'HomePage',
  components: { Home },
  async asyncData({ $prismic, i18n }) {
    const { data } = await $prismic.api.getSingle('home_page', {
      lang: i18n.localeProperties.iso,
    })
    return {
      data,
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
}
</script>
