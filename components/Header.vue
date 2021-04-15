<template>
  <header id="header" class="header">
    <div class="left">
      <div class="logo">
        <NavLink href="/">
          <Logo />
        </NavLink>
      </div>
      <div class="desktop-menu">
        <DesktopMenu :menu="menu" />
      </div>
      <transition name="slide-fade">
        <div v-if="showMenu" class="mobile-menu">
          <MobileMenu :menu="menu" />
        </div>
      </transition>
    </div>
    <div class="right">
      <LangSwitcher />
      <div class="ml-1 btn-connect">
        <NavLink href="/" classname="btn"> Присоединиться </NavLink>
      </div>
      <div :class="['hamburger', showMenu && 'active']" @click="toggleMenu">
        <span />
        <span />
        <span />
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import NavLink from './NavLink'
import LangSwitcher from './LanguageSwitcher'
import DesktopMenu from './menu/DesktopMenu'
import MobileMenu from './menu/MobileMenu'

export default {
  components: {
    NavLink,
    LangSwitcher,
    DesktopMenu,
    MobileMenu,
  },
  data() {
    return {
      showMenu: false,
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.showMenu ? 'body_overflow' : '',
      },
    }
  },
  computed: mapState(['menu']),
  watch: {
    $route() {
      this.showMenu = false
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
<style scoped>
.header {
  position: absolute;
  top: 52px;
  left: 0;
  padding: 0 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 100;
}
.left,
.right {
  display: flex;
  align-items: center;
}
.ml-1 {
  margin-left: 12px;
}
.logo {
  margin-right: 15px;
}
.desktop-menu {
  display: block;
}
.mobile-menu {
  display: none;
  position: absolute;
  top: 81px;
  left: 0;
  background: linear-gradient(
    179.99deg,
    #e5efff 9.73%,
    #fafbfe 64.86%,
    #fafbfe 111.01%
  );
  height: calc(100vh - 81px);
  min-height: -webkit-fill-available;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
@media (max-width: 1200px) {
  .header {
    padding: 0 22px;
  }
  .btn-connect {
    display: none;
  }
}
@media (max-width: 992px) {
  .header {
    padding: 0 16px;
  }
}
@media (max-width: 768px) {
  .header {
    background-color: #fff;
    top: 0;
    padding-top: 25px;
    padding-bottom: 10px;
  }
  .desktop-menu {
    display: none;
  }
  .mobile-menu {
    display: block;
    padding-bottom: 30px;
  }
}
@media (max-width: 568px) {
  .header {
    padding-top: 34px;
    padding-bottom: 12px;
  }
}
</style>

<style lang="scss" scoped>
.hamburger {
  width: 26px;
  height: 26px;
  display: none;
  margin-left: 30px;
  span {
    border-radius: 6px;
    width: 26px;
    height: 4px;
    display: block;
    background: #ec8133;
    margin: 4px 0;
    transition: all 0.3s;
  }
  &.active {
    span:first-child {
      transform: rotate(45deg) translate(10px, -6px);
      width: 16px;
    }
    span:last-child {
      transform: rotate(-45deg) translate(10px, 6px);
      width: 16px;
    }
  }
  @media (max-width: 768px) {
    display: block;
  }
}
</style>
