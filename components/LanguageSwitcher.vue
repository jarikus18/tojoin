<template>
  <div v-click-outside class="lang" @click="toggleSwitcher">
    <span class="small-text">{{ $i18n.locale }}</span>
    <img src="~@/assets/images/lang-switcher.svg" alt="" />
    <div :class="['modal', isDropdwonMenuVisible && 'open']">
      <ul class="text-center">
        <li>
          <NuxtLink
            class="lang-item small-text color-text"
            :to="switchLocalePath('en')"
          >
            En
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="lang-item small-text color-text"
            :to="switchLocalePath('ru')"
          >
            Ru
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="lang-item small-text color-text"
            :to="switchLocalePath('uk')"
          >
            Uk
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
  computed: mapState(['locale']),
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
  top: 25px;
  left: 15px;
  padding: 10px;
  border-radius: 10px;
  background: #eaf1fe;
  opacity: 0;
}
.modal.open {
  opacity: 1;
}
.lang-item {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s linear;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.lang-item:hover {
  text-decoration: underline;
}
</style>
