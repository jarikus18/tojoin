<template>
  <div :class="['body', classname]">
    <div class="body-content">
      <slot />
    </div>
    <span class="body-line1" />
    <span class="body-line2" />
  </div>
</template>

<script>
export default {
  name: 'Story',
  props: {
    classname: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.body {
  &-content {
    background: #fff;
    box-shadow: 0.1px 18px 52.8537px rgba(215, 228, 249, 0.5);
    border-radius: 20px;
    padding: 30px 15px 25px;
    max-width: 900px;
    margin: auto;
    background-image: url(~/assets/icons/quotes.svg);
    background-repeat: no-repeat;
    background-size: 130px;
    background-position: right 20px top 20px;
    position: relative;
    z-index: 3;
  }

  &-line1 {
    display: block;
    background: #fff;
    box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
    border-radius: 0 0 20px 20px;
    width: 94%;
    margin: -20px auto 0;
    height: 35px;
    position: relative;
    z-index: 2;
  }
  &-line2 {
    display: block;
    background: #fff;
    box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
    border-radius: 0 0 20px 20px;
    width: 88%;
    margin: -20px auto 0;
    height: 35px;
    position: relative;
    z-index: 1;
  }
  &.product-story {
    .body-content {
      padding: 50px 90px;
      background-size: 330px;
      background-position: right 50px top 20px;
      & .h5 {
        margin-bottom: 30px;
      }
    }
    .body-line1 {
      margin: 0 auto 0;
      height: 40px;
    }
    .body-line2 {
      margin: -10px auto 0;
    }
  }
}
</style>
