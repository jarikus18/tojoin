<template>
  <div class="card">
    <div class="card-title">{{ title }}</div>
    <div class="card-description text">{{ description }}</div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  background: #fff;
  box-shadow: 0 0 70px rgba(0, 0, 0, 0.03);
  border-radius: 30px;
  padding: 50px 30px;
  cursor: pointer;
  color: #1b1732;
  &:hover {
    color: #2f80ed;
  }
  &-title {
    font-weight: 600;
    font-size: 38px;
    line-height: 52px;
  }
  &-description {
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
  }
  @media (max-width: 767px) {
    padding: 30px 10px;
    &-title {
      font-weight: 600;
      font-size: 28px;
      line-height: 38px;
    }
    &-description {
      font-size: 20px;
      line-height: 27px;
    }
  }
}
</style>
