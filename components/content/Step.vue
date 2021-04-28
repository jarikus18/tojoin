<template>
  <div
    :class="['step', `step-${data.number}`, data.number % 2 === 0 && 'even']"
  >
    <div class="step-bg">
      <img
        class="step-bg-desktop"
        :src="require(`~/assets/images/steps/cloud-${data.number}.svg`)"
        alt=""
      />
      <img
        class="step-bg-mobile"
        :src="require(`~/assets/images/steps/cloud-mob-${data.number}.svg`)"
        alt=""
      />
      <img class="step-bg-arc" src="~@/assets/images/steps/arc.svg" alt="" />
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
  max-width: 700px;
  padding: 50px 40px 100px 80px;
  &.even {
    margin-left: auto;
  }
  &-bg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    &-mobile {
      display: none;
    }
    &-arc {
      position: absolute;
      width: 129px;
      height: 97px;
      object-fit: contain;
    }
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
    position: relative;
  }
  &-title {
    font-weight: 600;
    font-size: 38px;
    line-height: 52px;
    margin-bottom: 15px;
    position: relative;
  }
  &-description {
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    position: relative;
  }
  &-1 {
    & .step-bg-arc {
      right: 6%;
      top: 12%;
      transform: rotate(13deg);
    }
  }
  &-2 {
    & .step-number {
      left: 10%;
    }
    & .step-bg-arc {
      right: 14%;
      bottom: 6%;
      transform: rotate(115deg);
    }
  }
  &-3 {
    & .step-number {
      left: 5%;
    }
    & .step-bg-arc {
      right: 22%;
      bottom: 2%;
      transform: rotate(140deg);
    }
  }
  &-4 {
    & .step-number {
      top: 2%;
      left: auto;
      right: 30%;
    }
    & .step-image {
      text-align: left;
      margin-left: 100px;
    }
    & .step-bg-arc {
      right: 3%;
      top: 22%;
      transform: rotate(13deg);
    }
  }
  &-5 {
    & .step-number {
      top: 8%;
      left: auto;
      right: 10%;
    }
    & .step-image {
      margin-right: 100px;
    }
    & .step-bg-arc {
      left: 7%;
      top: 7%;
      transform: rotate(293deg);
    }
  }
  @media (max-width: 767px) {
    padding: 20px 20px 50px 40px;
    &-image {
      max-width: 54px;
      margin: auto;
    }
    &-title {
      font-size: 24px;
      line-height: 33px;
      font-weight: bold;
      color: #1b1732;
      margin-bottom: 5px;
    }
    &-description {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      max-width: 90%;
    }
    &-number {
      & img {
        max-height: 72px;
      }
    }
    &-bg {
      &-desktop {
        display: none;
      }
      &-mobile {
        display: block;
      }
      & img {
        max-width: 100%;
      }
      &-arc {
        height: 60px;
        object-fit: cover;
      }
    }
    &-1 {
      & .step-bg-arc {
        right: 4%;
        bottom: 27%;
        top: auto;
        transform: rotate(98deg);
      }
    }
    &-2 {
      & .step-bg-arc {
        right: 12%;
        top: 4%;
        bottom: auto;
        transform: rotate(344deg);
      }
    }
    &-3 {
      & .step-number {
        left: 20%;
        top: -5%;
      }
      & .step-bg-arc {
        right: 14%;
        top: 6%;
        bottom: auto;
        transform: rotate(338deg);
      }
    }
    &-4 {
      & .step-number {
        left: 30%;
        top: -5%;
      }
      & .step-image {
        margin-right: 50px;
        margin-left: auto;
        text-align: right;
      }
      & .step-bg-arc {
        top: auto;
        right: -2%;
        bottom: 24%;
        transform: rotate(78deg);
      }
    }
    &-5 {
      & .step-number {
        top: -10%;
      }
      & .step-image {
        margin-right: auto;
      }
      & .step-bg-arc {
        left: 2%;
        top: 16%;
        transform: rotate(290deg);
      }
    }
  }
}
</style>
