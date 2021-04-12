<template>
  <ul class="menu-list">
    <li class="menu-list-item">
      <NavLink classname="color-text small-text" href="/about">
        О платформе
      </NavLink>
    </li>
    <li
      :class="[
        'menu-list-item color-text small-text has-submenu',
        submenu.productList && 'has-submenu--active',
      ]"
      @click="toggleSubmenu('productList')"
    >
      <span>Продукты</span>
      <transition name="fade">
        <ul v-if="submenu.productList" class="submenu-list">
          <li
            class="submenu-item"
            :style="{
              backgroundImage: `url(${require('~/assets/icons/menu/bonus.svg')})`,
            }"
          >
            Бонусная программа
          </li>
          <li class="submenu-item">Бонусная программа</li>
          <li class="submenu-item">Бонусная программа</li>
          <li class="submenu-item">Бонусная программа</li>
          <li class="submenu-item">Бонусная программа</li>
          <li class="submenu-item">Бонусная программа</li>
          <li class="submenu-item">Бонусная программа</li>
          <li class="submenu-item">Бонусная программа</li>
          <li class="submenu-item">Бонусная программа</li>
        </ul>
      </transition>
    </li>
    <li class="menu-list-item color-text small-text">
      <NavLink classname="color-text small-text" href="/tariff">
        Тарифы
      </NavLink>
    </li>
    <li
      :class="[
        'menu-list-item color-text small-text has-submenu',
        submenu.resoursesList && 'has-submenu--active',
      ]"
      @click="toggleSubmenu('resoursesList')"
    >
      <span>Ресурсы</span>
      <transition name="fade">
        <ul v-if="submenu.resoursesList" class="submenu-list">
          <li class="submenu-item">Описание API</li>
          <li class="submenu-item">Примеры использования</li>
          <li class="submenu-item">Учебник</li>
          <li class="submenu-item">Помощь</li>
          <li class="submenu-item">Блог</li>
        </ul>
      </transition>
    </li>
  </ul>
</template>

<script>
import NavLink from '@/components/NavLink'

export default {
  components: {
    NavLink,
  },
  data() {
    return {
      submenu: {
        productList: false,
        resoursesList: false,
      },
    }
  },
  methods: {
    toggleSubmenu(value) {
      this.submenu[value] = !this.submenu[value]
    },
  },
}
</script>

<style scoped>
.menu-list-item {
  margin: 30px 15px 10px;
  position: relative;
}

.submenu-list {
  padding: 15px 15px 0;
  padding-top: 20px;
}
.menu-list-item.has-submenu span {
  position: relative;
}
.menu-list-item.has-submenu span::after {
  content: '';
  position: absolute;
  top: 0;
  right: -30px;
  width: 24px;
  height: 24px;
  background-color: #1b1732;
  mask: url('~@/assets/icons/arrow-down.svg') no-repeat center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.3s;
}
.menu-list-item.has-submenu--active span::after {
  transform: rotate(180deg);
  background-color: #f09231;
}

.submenu-item {
  font-size: 18px;
  line-height: 30px;
  font-family: 'Rubik', sans-serif;
  margin-bottom: 17px;
  padding-left: 38px;
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 30px;
  display: flex;
  align-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
