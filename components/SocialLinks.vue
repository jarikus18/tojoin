<template>
  <ul class="social-list">
    <li
      v-for="{ name, link, icon } in settings.social_item"
      :key="name"
      class="social-item"
    >
      <a class="social-link" :href="link.url" target="_blank" rel="noopener">
        <img data-not-lazy class="social-image" :src="icon.url" :alt="name" />
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['settings']),
}
</script>

<style scoped>
.social-list {
  display: flex;
  align-items: center;
}
.social-item {
  margin-right: 16px;
}
.social-link {
  background: #fff;
  box-shadow: 0 1px 1px rgba(17, 19, 35, 0.01);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s linear;
}
.social-link:hover {
  box-shadow: 0 13px 18px rgba(17, 19, 35, 0.08);
}
.social-image {
  width: 24px;
  height: 24px;
}
@media (max-width: 1450px) {
  .social-link {
    width: 58px;
    height: 58px;
  }
  .social-image {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 767px) {
  .social-link {
    width: 36px;
    height: 36px;
    box-shadow: 0 13px 18px rgba(17, 19, 35, 0.08);
  }
  .social-link:hover {
    box-shadow: none;
  }
  .social-image {
    width: 20px;
    height: 20px;
  }
}
</style>
