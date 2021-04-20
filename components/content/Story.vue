<template>
  <div class="body">
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
}
</style>
