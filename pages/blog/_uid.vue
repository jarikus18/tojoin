<template>
  <div class="article">
    <code>{{ post }}</code>
  </div>
</template>

<script>
export default {
  name: 'ArticlePage',
  async asyncData({ $prismic, params, error }) {
    try {
      const post = (await $prismic.api.getByUID('posts', params.uid)).data
      return {
        post,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
