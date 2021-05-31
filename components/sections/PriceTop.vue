<template>
  <div class="price">
    <div class="left">
      <div class="price-image">
        <img
          src="~/assets/images/first-screen/price-top.svg"
          class="img-responsive"
          alt=""
        />
      </div>
      <div class="tag"><Tag /></div>
      <div class="chart-vector">
        <div class="top">
          <span class="small-text">{{ data.chart_text }}</span>
          <span class="small-text green">{{ data.chart_percent }}</span>
        </div>
        <div class="bottom">
          <img
            data-not-lazy
            src="~@/assets/images/first-screen/chart_vector.svg"
            alt="chart"
          />
          <span class="blue">{{ data.chart_numbers }}</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="bar">
        <div class="bar-image">
          <img
            src="~/assets/images/first-screen/bar.svg"
            class="img-responsive"
            alt=""
          />
        </div>
        <ul class="bar-list">
          <li
            v-for="({ chart_item }, index) in data.chart_list"
            :key="index"
            class="bar-item"
          >
            <span :class="['bar-color', `bar-color-${index}`]" />
            {{ chart_item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Tag } from '@/components/decor'
export default {
  name: 'PriceTop',
  components: { Tag },
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
<style lang="scss" scoped>
.price {
  position: relative;
  display: flex;
  left: -130px;
  bottom: -80px;
  .tag {
    display: none;
  }
  .chart-vector {
    background: #fff;
    box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
    border-radius: 20px;
    padding: 21px 23px;
    white-space: nowrap;
    min-width: 350px;
    left: -12%;
    position: relative;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 30px;
    line-height: 150%;
  }
  .bar {
    background: #fff;
    box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
    border-radius: 20px;
    padding: 21px 16px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-list {
      padding-left: 20px;
    }
    &-item {
      padding: 5px 0;
      display: flex;
      align-items: center;
    }
    &-color {
      width: 13px;
      height: 12px;
      border-radius: 4px;
      display: block;
      margin-right: 7px;
      &-0 {
        background-color: #fea151;
      }
      &-1 {
        background-color: #aac8fd;
      }
      &-2 {
        background-color: #3e56dd;
      }
    }
  }
  @media (max-width: 767px) {
    left: auto;
    bottom: auto;
    &-image,
    .bar {
      display: none;
    }
    .chart-vector {
      padding: 15px 10px;
      min-width: 250px;
    }
    .tag {
      display: block;
      text-align: right;
      padding-right: 40px;
      margin-bottom: 60px;
    }
  }
}
</style>
