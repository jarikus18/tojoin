<template>
  <Blog :data="data" :posts="posts" title="Наш Блог" vendor="blog" />
</template>

<script>
import Blog from '@/containers/Blog'

export default {
  name: 'BlogPage',
  components: { Blog },
  async asyncData({ $prismic, i18n }) {
    // TODO change for blog page
    const { data } = await $prismic.api.getSingle('home_page', {
      lang: i18n.localeProperties.iso,
    })

    // Query to get posts content to preview
    const blogPosts = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'posts'),
      {
        orderings: '[my.post.date desc]',
        pageSize: 100,
        lang: i18n.localeProperties.iso,
      }
    )
    return {
      data,
      posts: blogPosts,
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
