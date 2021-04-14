<template>
  <swiper-slide
    ><div :class="classname"><slot /></div
  ></swiper-slide>
</template>

<script>
export default {
  props: {
    classname: {
      type: String,
      default: 'slide',
    },
  },
}
</script>
<style scoped>
.slide {
  background: #fff;
  box-shadow: 0 41px 79px rgba(75, 57, 140, 0.06),
    0 41.7776px 45.5376px rgba(75, 57, 140, 0.0431313),
    0 22.3363px 24.3466px rgba(75, 57, 140, 0.0357664),
    0 12.5216px 13.6485px rgba(75, 57, 140, 0.03),
    0 6.6501px 7.24861px rgba(75, 57, 140, 0.0242336),
    0 2.76726px 3.01631px rgba(75, 57, 140, 0.0168687);
  border-radius: 20px;
  height: 548px;
  width: 100%;
  padding: 30px;
  max-width: 500px;
  margin-bottom: 58px;
}
@media (max-width: 1600px) {
  .slide {
    padding: 25px 20px;
    max-width: 450px;
  }
}
</style>
