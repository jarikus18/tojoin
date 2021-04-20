<template>
  <div class="section-wrapper">
    <h1 v-if="title" class="h1 section-title">{{ title }}</h1>
  </div>
</template>
<script>
export default {
  name: 'SectionTop',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.section {
  &-wrapper {
    position: relative;
  }
  &-title {
    width: 50%;
    margin-left: auto;
  }
}
</style>
