<template>
  <div :class="['wrap', classname]">
    <img class="wrap-image" src="~@/assets/images/blog/picture.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Picture',
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
