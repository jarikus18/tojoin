<template>
  <swiper-slide
    ><div class="slide"><slot /></div
  ></swiper-slide>
</template>

<script>
export default {}
</script>
<style scoped>
.slide {
  background: #fff;
  box-shadow: 16px 16px 48px rgba(0, 0, 0, 0.0994678);
  border-radius: 20px;
  height: 548px;
  width: 100%;
  padding: 30px;
  max-width: 500px;
  margin: 38px auto 58px;
}
</style>
