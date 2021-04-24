<template>
  <HowItWorks />
</template>

<script>
import HowItWorks from '@/containers/HowItWorks'
import meta from '@/components/meta'

export default {
  name: 'AboutPage',
  components: { HowItWorks },
  head() {
    return meta(this.data)
  },
}
</script>
