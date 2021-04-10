<template>
  <NuxtLink :to="localePath(href)" :class="['link-btn small-text', classname]">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    classname: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style scoped>
.link-btn {
  white-space: nowrap;
}
.btn {
  background-color: #eaf1fe;
  border: 1px solid #fea151;
  border-radius: 10px;
  color: #fea151;
  padding: 11px 15px;
  line-height: 150%;
  transition: box-shadow 0.3s linear;
}
.btn:hover {
  box-shadow: 22px 18px 53px -15px rgba(232, 97, 49, 0.69);
}
.btn-orange-gradient {
  background: linear-gradient(
    106.8deg,
    #fdc700 -52.6%,
    #f9b80e -39.87%,
    #f4a123 -16.42%,
    #f19430 5.9%,
    #f08f34 25.75%,
    #e86031 70.05%
  );
  border-radius: 60px;
  transition: box-shadow 0.3s linear;
  font-weight: bold;
  font-size: 28px;
  line-height: 150%;
  color: #fff;
  padding: 16px 57px;
}
.btn-orange-gradient:hover {
  box-shadow: -2px 20px 53px -8px rgba(232, 97, 49, 0.86);
}
.simple-btn {
  display: inline-block;
  background: #ffa800;
  border-radius: 60px;
  transition: box-shadow 0.3s linear;
  color: #fff;
  padding: 15px 60px;
}
.simple-btn:hover {
  box-shadow: 22px 18px 53px -15px rgba(232, 97, 49, 0.69);
}

.light-btn {
  display: inline-block;
  background: #ffb467;
  border-radius: 60px;
  transition: box-shadow 0.3s linear;
  color: #fff;
  padding: 15px 60px;
}
.light-btn:hover {
  box-shadow: 22px 18px 53px -15px rgba(232, 97, 49, 0.69);
}
</style>
