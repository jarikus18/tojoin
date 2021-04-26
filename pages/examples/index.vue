<template>
  <Blog
    :data="data"
    :posts="posts"
    title="Примеры использования"
    vendor="examples"
  />
</template>

<script>
import Blog from '@/containers/Blog'
import meta from '@/components/meta'

export default {
  name: 'BlogPage',
  components: { Blog },
  layout: 'custom',
  async asyncData({ $prismic, i18n }) {
    // TODO change for blog page
    const { data } = await $prismic.api.getSingle('home_page', {
      lang: i18n.localeProperties.iso,
    })

    const blogStories = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'story'),
      {
        orderings: '[my.post.date desc]',
        pageSize: 100,
        lang: i18n.localeProperties.iso,
      }
    )
    return {
      data,
      posts: blogStories,
    }
  },
  head() {
    return meta(this.data)
  },
}
</script>
