<template>
  <header id="header" class="header">
    <div class="left">
      <div class="logo">
        <NavLink href="/">
          <Logo />
        </NavLink>
      </div>
      <DesktopMenu />
    </div>
    <div class="right">
      <LangSwitcher />
      <div class="ml-1">
        <NavLink href="/" classname="btn"> Присоединиться </NavLink>
      </div>
    </div>
  </header>
</template>

<script>
// import { mapActions, mapState } from 'vuex'
import NavLink from './NavLink'
import LangSwitcher from './LanguageSwitcher'
import DesktopMenu from './menu/DesktopMenu'

export default {
  components: {
    NavLink,
    LangSwitcher,
    DesktopMenu,
  },
  // data() {},
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
</style>
