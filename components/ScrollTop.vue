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
  display: none;
  width: 51px;
  height: 51px;
  background: #fff;
  box-shadow: 0 13px 18px rgba(17, 19, 35, 0.08);
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.15s ease-in-out;
  z-index: 10;
  &.active {
    opacity: 1;
    visibility: visible;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url('~@/assets/icons/arrow-top.svg') no-repeat center;
    background-size: contain;
    width: 30px;
    height: 30px;
  }
  @media (max-width: 992px) {
    display: block;
  }
}
</style>
