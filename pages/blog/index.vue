<template>
  <Blog :data="data" :posts="posts" title="Наш Блог" vendor="blog" />
</template>

<script>
import Blog from '@/containers/Blog'
import meta from '@/components/meta'

export default {
  name: 'BlogPage',
  components: { Blog },
  layout: 'custom',
  async asyncData({ $prismic, i18n, error }) {
    try {
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
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return meta(this.data)
  },
}
</script>
