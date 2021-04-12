<template>
  <client-only>
    <a
      v-scroll-to="'#header'"
      href="#"
      :class="[height > 300 && 'active', 'scroll_to_top']"
    ></a>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      height: 0,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll, true)
    this.height = window.scrollY
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (process.client) {
        this.height = window.scrollY
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.scroll_to_top {
  position: fixed;
  right: 15px;
  bottom: 15px;
  display: block;
  width: 51px;
  height: 51px;
  background: red;
  box-shadow: 0 13px 18px rgba(17, 19, 35, 0.08);
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  background-size: 70%;
  transition: all 0.15s ease-in-out;
  mask: url('~@/assets/icons/arrow-right.svg') no-repeat center;
  transform: rotate(90deg);
  &.active {
    opacity: 0.6;
    visibility: visible;
  }
}
</style>
