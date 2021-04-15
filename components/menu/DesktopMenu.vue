<template>
  <ul class="menu-list">
    <template v-for="(item, index) in menu.menu_list">
      <template v-if="!item.has_submenu">
        <li :key="index" class="menu-list-item">
          <NavLink
            classname="color-text small-text"
            :href="`/${$prismic.asText(item.menu_item_link)}`"
          >
            {{ $prismic.asText(item.menu_item_name) }}
          </NavLink>
        </li>
      </template>

      <template v-else-if="item.has_submenu && item.display_on_header">
        <li
          :key="index"
          :class="[
            'menu-list-item color-text small-text has-submenu',
            submenu[item.submenu_linked] && 'has-submenu--active',
          ]"
          @mouseover="submenu[item.submenu_linked] = true"
          @mouseleave="submenu[item.submenu_linked] = false"
        >
          {{ $prismic.asText(item.menu_item_name) }}
          <transition name="fade">
            <ul
              v-if="submenu[item.submenu_linked]"
              :class="[
                'submenu-list',
                item.submenu_linked === 'products' && 'two-column',
              ]"
            >
              <li
                v-for="(el, ind) in menu[item.submenu_linked]"
                :key="ind"
                class="submenu-item"
                :style="{
                  backgroundImage: `url(${require('~/assets/icons/menu/bonus.svg')})`,
                }"
              >
                <NavLink
                  classname="color-text"
                  :href="`/${item.submenu_linked}/${$prismic.asText(el.link)}`"
                >
                  {{ $prismic.asText(el.title) }}
                </NavLink>
              </li>
            </ul>
          </transition>
        </li>
      </template>
    </template>
  </ul>
</template>

<script>
import NavLink from '@/components/NavLink'

export default {
  components: {
    NavLink,
  },
  props: {
    menu: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      submenu: {
        products: false,
        resource: false,
      },
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
@media (max-width: 992px) {
  .menu-list-item {
    margin: 0 10px;
  }
}
</style>
