<template>
  <swiper-slide>
    <div class="wrapper">
      <div :class="classname"><slot /></div>
    </div>
  </swiper-slide>
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
.wrapper {
  max-width: 500px;
  margin: 20px 10px 0;
  height: 100%;
}
.slide {
  background: #fff;
  box-shadow: 0 22.3363px 24.3466px rgba(75, 57, 140, 0.0357664),
    0 12.5216px 13.6485px rgba(75, 57, 140, 0.03),
    0 6.6501px 7.24861px rgba(75, 57, 140, 0.0242336),
    0 2.76726px 3.01631px rgba(75, 57, 140, 0.0168687);
  border-radius: 20px;
  padding: 30px 25px 10px;
  height: 100%;
}

@media (max-width: 767px) {
  .wrapper {
    display: flex;
    justify-content: center;
    margin: 20px auto 50px;
    max-width: 90%;
  }
  .slide {
    min-height: 360px;
  }
}
</style>
