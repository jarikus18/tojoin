<template>
  <NavLink
    :href="settings.try_free_link.url"
    :type="settings.try_free_link.link_type"
    classname="btn-orange-gradient"
  >
    {{ settings.try_free }}
  </NavLink>
</template>
<script>
import NavLink from '@/components/NavLink'
import { mapState } from 'vuex'

export default {
  components: { NavLink },
  computed: {
    ...mapState(['settings']),
  },
}
</script>
