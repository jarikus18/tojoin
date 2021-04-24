<template>
  <div :class="['wrap', classname]">
    <img class="wrap-image" src="~@/assets/images/blog/tag.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Tag',
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
