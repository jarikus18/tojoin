<template>
  <img class="logo" data-not-lazy :src="settings.logo.url" alt="logo" />
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['settings']),
}
</script>
<style scoped>
@media (max-width: 568px) {
  .logo {
    max-width: 134px;
  }
}
</style>
