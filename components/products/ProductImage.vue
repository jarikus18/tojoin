<template>
  <div class="image-wrap">
    <div
      class="blur"
      :style="{
        backgroundImage: `url(${image})`,
      }"
    />
    <img class="image" loading="lazy" :src="image" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
.image-wrap {
  border-radius: 20px;
  box-shadow: -25px 18px 34px rgba(84, 48, 209, 0.35),
    -25px 18px 34px rgba(84, 48, 209, 0.35);
  position: relative;
  display: inline-block;
  margin: 80px 20px 30px;
}
.blur {
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  filter: blur(50px);
  border-radius: 20px;
}
.image {
  position: relative;
  border-radius: 20px;
  margin-bottom: -2px;
  max-width: 100%;
  object-fit: cover;
}
@media (max-width: 768px) {
  .image-wrap {
    box-shadow: 0 20px 30px -9px rgba(84, 48, 209, 0.35);
  }
  .blur {
    display: none;
  }
}
</style>
