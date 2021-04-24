<template>
  <div :class="['dots', classname]">
    <div />
    <div />
    <div />
  </div>
</template>

<script>
export default {
  name: 'ThreeDots',
  props: {
    classname: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.dots {
  display: flex;
  & div {
    background: #b0cdfe;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0 5px;
  }
}
</style>
