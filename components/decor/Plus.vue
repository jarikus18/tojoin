<template>
  <div :class="['wrap', classname]">
    <img class="wrap-image" src="~@/assets/images/blog/plus.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Plus',
  props: {
    classname: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.wrap {
  &-image {
    max-width: 100%;
  }
}
</style>
