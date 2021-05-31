<template>
  <Vacancies :data="data" />
</template>

<script>
import Vacancies from '@/containers/Vacancies'
import meta from '@/components/meta'

export default {
  name: 'VacanciesPage',
  components: { Vacancies },
  layout: 'custom',
  async asyncData({ $prismic, i18n, error }) {
    try {
      const { data } = await $prismic.api.getSingle('vacancies', {
        lang: i18n.localeProperties.iso,
      })
      return {
        data,
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
