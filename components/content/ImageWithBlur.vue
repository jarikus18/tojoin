<template>
  <div class="image-wrap">
    <div
      class="blur"
      :style="{
        backgroundImage: `url(${image})`,
      }"
    />
    <img
      class="image"
      :src="image"
      alt=""
      :style="height && `max-height: ${height}px`"
    />
  </div>
</template>
<script>
export default {
  name: 'ImageWithBlur',
  props: {
    image: {
      type: String,
      default: '',
    },
    height: {
      type: Number,
      default: null,
    },
  },
}
</script>
<style scoped>
.image-wrap {
  border-radius: 20px;
  position: relative;
  display: inline-block;
  width: 100%;
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
  width: 100%;
  object-fit: cover;
}

@media (max-width: 767px) {
  .image-wrap {
    width: auto;
    min-height: auto;
  }
  .blur {
    display: none;
  }
}
</style>
