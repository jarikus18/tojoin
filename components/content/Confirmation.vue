<template>
  <div class="confirm">
    <button class="confirm-close" type="button" @click="onClose">✕</button>
    <div class="confirm-container">
      <div class="confirm-col">
        <img
          class="confirm-image"
          src="~/assets/images/pages/confirm.svg"
          alt=""
        />
      </div>
      <div class="confirm-col">
        <div class="confirm-decor-top">
          <Star />
        </div>

        <h4 class="h4 confirm-message">{{ message }}</h4>
        <div class="confirm-decor-bottom">
          <Tag />
          <Star classname="star" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tag, Star } from '@/components/decor'

export default {
  name: 'Confirmation',
  components: { Tag, Star },
  props: {
    message: {
      default: '',
      type: String,
    },
    click: {
      type: Function,
      default() {
        return {}
      },
    },
  },
  methods: {
    onClose() {
      this.click()
    },
  },
}
</script>

<style lang="scss" scoped>
.confirm {
  position: relative;
  max-width: 830px;
  padding: 40px 30px;
  background: #fff;
  box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 20px;
  &-close {
    position: absolute;
    right: 30px;
    top: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  &-container {
    display: flex;
    justify-content: space-between;
  }
  &-message {
    line-height: 60px;
    letter-spacing: 0.4px;
  }
  &-decor {
    &-top {
      margin-right: 200px;
    }
    &-bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      margin-left: 100px;
      margin-right: 50px;
    }
  }
  @media (max-width: 767px) {
    padding: 20px 10px;
    &-close {
      right: 15px;
      top: 15px;
      font-size: 28px;
    }
    &-image {
      max-width: 118px;
      position: absolute;
      left: 15px;
      top: 15px;
    }
    &-message {
      font-weight: bold;
      font-size: 26px;
      line-height: 130%;
      margin-top: 10px;
      white-space: pre-line;
    }
    &-container {
      display: block;
    }
    &-col {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
    &-decor {
      &-top {
        display: none;
      }
      &-bottom {
        justify-content: space-around;
        margin: 30px 0 0 50px;
        .star {
          width: 26px;
          height: 26px;
          position: absolute;
          right: 40px;
        }
      }
    }
  }
}
</style>
