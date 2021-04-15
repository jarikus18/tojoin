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
          <span>{{ $prismic.asText(item.menu_item_name) }}</span>

          <transition name="fade">
            <ul v-if="submenu[item.submenu_linked]" class="submenu-list">
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
