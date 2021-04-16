<template>
  <div v-click-outside class="lang" @click="toggleSwitcher">
    <span class="small-text lang-indicator">{{ $i18n.locale }}</span>
    <img
      class="lang-indicator-desktop"
      src="~@/assets/images/lang-switcher.svg"
      alt=""
    />
    <img
      class="lang-indicator-mobile"
      src="~@/assets/icons/lang-switcher-orange.svg"
      alt=""
    />
    <div :class="['modal', isDropdwonMenuVisible && 'open']">
      <ul class="text-center">
        <li v-for="locale in availableLocales" :key="locale.code">
          <NuxtLink
            class="lang-item small-text color-text"
            :to="switchLocalePath(locale.code)"
          >
            {{ locale.code }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      isDropdwonMenuVisible: false,
    }
  },
  computed: {
    ...mapState(['locale']),
    availableLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    },
  },
  methods: {
    toggleSwitcher() {
      this.isDropdwonMenuVisible = !this.isDropdwonMenuVisible
    },
  },
}
</script>

<style scoped>
.lang {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}
.lang span {
  text-transform: uppercase;
  padding-right: 8px;
  font-weight: 600;
}
.modal {
  position: absolute;
  top: 20px;
  left: -9px;
  padding: 10px 10px 5px;
  background: linear-gradient(
    1.95deg,
    #fff 75.17%,
    rgba(255, 255, 255, 0) 95.96%
  );
  border-radius: 0 0 15px 15px;
  opacity: 0;
}
.modal.open {
  opacity: 1;
}
.lang-item {
  transition: all 0.3s linear;
  text-transform: uppercase;
  margin-bottom: 7px;
  display: block;
}
.lang-item:hover {
  text-decoration: underline;
}
.lang-indicator-mobile {
  display: none;
}
@media (max-width: 768px) {
  .lang-indicator,
  .lang-indicator-desktop {
    display: none;
  }
  .lang-indicator-mobile {
    display: block;
  }
}
</style>
