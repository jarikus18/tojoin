<template>
  <div class="simple-page">
    <!-- eslint-disable vue/no-v-html -->
    <div class="simple-page-content" v-html="$prismic.asHtml(page.content)" />
  </div>
</template>

<script>
import meta from '@/components/meta'

export default {
  name: 'CompanyPage',
  layout: 'custom',
  async asyncData({ $prismic, params, error, i18n }) {
    try {
      const page = await $prismic.api.getByUID('simple_page', params.uid, {
        lang: i18n.localeProperties.iso,
      })

      return {
        page: page.data,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return meta(this.page)
  },
}
</script>
<style lang="scss">
.simple-page {
  padding: 200px 0 300px;
  margin: auto;
  position: relative;
  &-content {
    max-width: 1124px;
    margin: auto;
    & p {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 40px;
      color: #6a6a6a;
    }
  }
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(
      180deg,
      #e5efff 9.72%,
      #fafbfe 92.03%,
      #fafbfe 145.03%
    );
  }
  @media (max-width: 767px) {
    padding: 120px 15px 150px;
    &-content {
      & h2 {
        font-size: 32px;
        hyphens: auto;
      }
      & p {
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
}
</style>
