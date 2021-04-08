<template>
  <ul class="menu-list">
    <li class="menu-list-item">
      <NavLink classname="color-text small-text" href="/how-it-works">
        Как это работает
      </NavLink>
    </li>
    <li class="menu-list-item">
      <NavLink classname="color-text small-text" href="/products">
        Продукты
      </NavLink>
    </li>
    <li class="menu-list-item">
      <NavLink classname="color-text small-text" href="/tariff">
        Тарифы
      </NavLink>
    </li>
    <li class="menu-list-item">
      <NavLink classname="color-text small-text" href="/resources">
        Ресурсы
      </NavLink>
    </li>
  </ul>
</template>

<script>
import NavLink from '../components/NavLink'
export default {
  components: {
    NavLink,
  },
}
</script>

<style scoped>
.menu-list {
  list-style: none;
  display: flex;
}
.menu-list-item {
  margin: 0 15px;
  white-space: nowrap;
}
</style>
