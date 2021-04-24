<template>
  <div :class="['wrap', classname]">
    <img class="wrap-image" src="~@/assets/images/blog/bitmap.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Bitmap',
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
    opacity: 0.2;
    max-width: 100%;
  }
}
</style>
