<template>
  <div :class="['wrap', classname]">
    <img class="wrap-image" src="~@/assets/images/blog/star.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Star',
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
