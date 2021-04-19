<template>
  <footer class="footer">
    <div class="subscribe">
      <div class="text">
        <p class="title">Протестируйте бесплатно!</p>
        <p class="subtitle">И сделай свой бизнес “смарт”.</p>
      </div>
      <div class="button">
        <NavLink href="/" classname="btn-orange-gradient big-btn-text">
          Попробовать бесплатно
        </NavLink>
      </div>
    </div>
    <div class="footer-bottom footer-text-regular gray">
      <div class="info">
        <div class="footer-logo">
          <Logo />
        </div>
        <div class="slogan">TutSvoi - приложение для автоматизации бизнеса</div>
        <div class="social-list-wrapper"><SocialLinks /></div>
        <div class="copyright">® 2021 TutSvoi</div>
      </div>
      <template v-for="(item, index) in menu.menu_list">
        <div v-if="item.has_submenu" :key="index" class="footer-menu">
          <div class="menu-title color-text">
            {{ $prismic.asText(item.menu_item_name) }}
          </div>
          <ul class="menu-list">
            <li
              v-for="(el, ind) in menu[item.submenu_linked]"
              :key="ind"
              class="menu-item"
            >
              <NavLink
                classname="footer-text-regular"
                :href="`/${item.submenu_linked}/${$prismic.asText(el.link)}`"
              >
                {{ $prismic.asText(el.title) }}
              </NavLink>
            </li>
          </ul>
        </div>
      </template>
    </div>
    <ScrollTop />
  </footer>
</template>

<script>
import NavLink from '@/components/NavLink'
import ScrollTop from '@/components/ScrollTop'
import SocialLinks from '@/components/SocialLinks'
import { mapState } from 'vuex'

export default {
  components: {
    NavLink,
    ScrollTop,
    SocialLinks,
  },
  computed: mapState(['menu', 'settings']),
}
</script>

<style scoped>
.footer {
  background: #e5efff;
  position: relative;
}
.subscribe {
  position: absolute;
  top: -125px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  padding: 80px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
}
.text {
  margin-right: 50px;
}
.text .title {
  font-weight: bold;
  font-size: 39px;
  line-height: 41px;
  white-space: nowrap;
  color: #0b132a;
}
.text .subtitle {
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #4f5665;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  padding: 200px 10% 75px;
}
.footer-logo {
  position: relative;
}
.footer-logo::after {
  content: '®';
  position: absolute;
}
.social-list-wrapper {
  margin: 80px 0 100px;
}
.info {
  width: 33%;
}
.footer-menu {
  width: 22.22%;
}
.slogan {
  max-width: 210px;
  line-height: 19px;
  margin-top: 20px;
}
.menu-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 20px;
  padding-left: 10px;
}
.menu-list {
  padding-left: 10px;
}
.menu-item {
  margin-bottom: 20px;
  line-height: 30px;
}

.menu-item >>> a {
  color: #4f5665;
  white-space: normal;
  line-height: 20px;
  display: block;
}

.copyright {
  color: #afb5c0;
}
@media (max-width: 1450px) {
  .slogan {
    font-size: 20px;
    line-height: 26px;
    max-width: 260px;
  }
  .menu-title {
    font-size: 24px;
  }
  .menu-item >>> a {
    font-size: 22px;
    line-height: 28px;
  }
  .copyright {
    font-size: 20px;
    line-height: 26px;
  }
}
/* @media (max-width: 1200px) {
  .subscribe {
    flex-wrap: wrap;
    justify-content: center;
    top: -180px;
  }
  .text {
    margin-right: 0;
    text-align: center;
    margin-bottom: 30px;
  }
  .footer-bottom {
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 40px;
  }
} */
/* @media (max-width: 992px) {
  .footer-bottom {
    flex-wrap: wrap;
  }
  .info {
    order: 1;
    margin-top: 30px;
    width: 100%;
  }
  .footer-menu {
    width: 50%;
  }
  .social-list-wrapper {
    margin: 25px 0 35px;
  }
}
@media (max-width: 768px) {
  .footer::before {
    content: '';
    position: absolute;
    top: -80px;
    left: 0;
    width: 100%;
    height: 314px;
    background: linear-gradient(
      180deg,
      rgba(236, 240, 253, 0) 0%,
      rgba(236, 240, 253, 0.53) 14.32%,
      #ecf0fd 45.83%,
      rgba(236, 240, 253, 0.43) 84.33%,
      rgba(236, 240, 253, 0) 100%
    );
  }
  .subscribe {
    background: none;
    top: -60px;
    padding: 20px 15px;
  }
  .menu-title {
    padding-left: 0;
  }
  .menu-list {
    padding-left: 0;
    margin-bottom: 30px;
  }
  .text .title {
    white-space: normal;
  }
} */
@media (max-width: 568px) {
  .footer-menu {
    width: auto;
    padding-right: 15px;
  }
}
</style>
