<template>
  <Blog
    :data="data"
    :posts="posts"
    :title="$prismic.asText(data.title)"
    :description="$prismic.asText(data.description)"
    vendor="examples"
  />
</template>

<script>
import Blog from '@/containers/Blog'
import meta from '@/components/meta'

export default {
  name: 'StoriesPage',
  components: { Blog },
  layout: 'custom',
  async asyncData({ $prismic, i18n, error }) {
    try {
      const { data } = await $prismic.api.getSingle('stories_page', {
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
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return meta(this.data)
  },
}
</script>
