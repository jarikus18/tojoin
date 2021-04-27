<template>
  <div
    :class="['step', `step-${data.number}`, data.number % 2 === 0 && 'even']"
  >
    <div class="step-bg">
      <img
        :src="require(`~/assets/images/steps/cloud-${data.number}.svg`)"
        alt=""
      />
    </div>
    <div class="step-number">
      <img
        :src="require(`~/assets/images/steps/num-${data.number}.svg`)"
        alt=""
        class="img-responsive"
      />
    </div>
    <div class="step-image">
      <img :src="data.image" alt="" class="img-responsive" />
    </div>
    <div class="step-title">{{ data.title }}</div>
    <div class="step-description color-text">{{ data.description }}</div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
<style scoped lang="scss">
.step {
  position: relative;
  width: 100%;
  max-width: 675px;
  padding: 50px 40px 100px 80px;
  &.even {
    margin-left: auto;
  }
  &-bg {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }
  &-number {
    position: absolute;
    top: 0;
    left: 20%;
  }
  &-image {
    text-align: center;
    display: block;
    margin-bottom: 20px;
  }
  &-title {
    font-weight: 600;
    font-size: 38px;
    line-height: 52px;
  }
  &-description {
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
  }
  /* &-1::before {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('~/assets/images/steps/cloud-1.svg') no-repeat 0 0 / cover;
  } */
  &-2 {
    background: url('~/assets/images/steps/cloud-2.svg') no-repeat 0 0 / contain;
  }
  &-3 {
    background: url('~/assets/images/steps/cloud-3.svg') no-repeat 0 0 / contain;
  }
  &-4 {
    background: url('~/assets/images/steps/cloud-4.svg') no-repeat 0 0 / contain;
  }
  &-5 {
    background: url('~/assets/images/steps/cloud-5.svg') no-repeat 0 0 / contain;
  }
}
</style>
