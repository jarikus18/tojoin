<template>
  <div :class="['wrapper', classname]">
    <div class="photo">
      <img :src="data.photo.url" class="img-responsive" alt="" />
    </div>
    <div class="name">{{ data.name }}</div>
    <div class="position color-text">{{ data.position }}</div>
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
    classname: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
.wrapper {
  background: #fff;
  box-shadow: 0 0 70px rgba(0, 0, 0, 0.03);
  border-radius: 30px;
  padding: 60px 20px 70px;
  max-width: 430px;
  margin: auto;
}
.photo {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  margin: 0 auto 20px;
}
.name {
  font-size: 38px;
  line-height: 52px;
}
.position {
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
}
@media (max-width: 767px) {
  .wrapper {
    box-shadow: 0 0 70px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    padding: 30px 15px 40px;
  }
  .photo {
    width: 140px;
    height: 140px;
  }
  .name {
    font-size: 28px;
    line-height: 38px;
  }
  .position {
    font-size: 20px;
    line-height: 27px;
  }
}
</style>
