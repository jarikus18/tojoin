<template>
  <Article :post="post" :related="relatedPosts" back="blog" />
</template>

<script>
import Article from '@/containers/Article'
import meta from '@/components/meta'

export default {
  name: 'ArticlePage',
  components: { Article },
  async asyncData({ $prismic, params, error, i18n }) {
    try {
      const post = await $prismic.api.getByUID('posts', params.uid, {
        lang: i18n.localeProperties.iso,
      })

      const relatedPosts = await $prismic.api.query(
        [
          $prismic.predicates.similar(post.id, 10),
          $prismic.predicates.at('document.type', 'posts'),
        ],
        { pageSize: 3, lang: i18n.localeProperties.iso }
      )

      return {
        post: post.data,
        relatedPosts,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return meta({
      meta_title: this.$prismic.asText(this.post.title),
      meta_description: this.$prismic.asText(this.post.short_description),
      meta_image: this.post.image,
    })
  },
}
</script>
