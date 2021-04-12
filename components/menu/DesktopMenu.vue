<template>
  <ul class="menu-list">
    <li class="menu-list-item">
      <NavLink classname="color-text small-text" href="/how-it-works">
        Как это работает
      </NavLink>
    </li>
    <li
      :class="[
        'menu-list-item color-text small-text has-submenu',
        productList && 'has-submenu--active',
      ]"
      @mouseover="productList = true"
      @mouseleave="productList = false"
    >
      Продукты
      <transition name="fade">
        <ul v-if="productList" class="submenu-list two-column">
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
        resoursesList && 'has-submenu--active',
      ]"
      @mouseover="resoursesList = true"
      @mouseleave="resoursesList = false"
    >
      Ресурсы

      <transition name="fade">
        <ul v-if="resoursesList" class="submenu-list">
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
      productList: true,
      resoursesList: false,
    }
  },
}
</script>

<style scoped>
.menu-list {
  list-style: none;
  display: flex;
}
.menu-list-item {
  margin: 0 20px;
  white-space: nowrap;
  position: relative;
}
.menu-list-item.has-submenu {
  margin-right: 35px;
}
.submenu-list {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(
    1.42deg,
    #fff 80.53%,
    rgba(255, 255, 255, 0) 95.31%
  );
  border-radius: 0 0 20px 20px;
  padding: 35px 25px 0;
  width: 384px;
  padding-top: 40px;
}
.menu-list-item.has-submenu::after {
  content: '';
  position: absolute;
  top: 0;
  width: 24px;
  height: 24px;
  background-color: #1b1732;
  mask: url('~@/assets/icons/arrow-down.svg') no-repeat center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.3s;
}
.menu-list-item.has-submenu--active::after {
  transform: rotate(180deg);
  background-color: #f09231;
}
.submenu-list.two-column {
  width: 760px;
  display: flex;
  flex-wrap: wrap;
}
.submenu-item {
  font-size: 24px;
  line-height: 30px;
  font-family: 'Rubik', sans-serif;
  margin-bottom: 17px;
  width: 50%;
  padding-left: 55px;
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 46px;
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
