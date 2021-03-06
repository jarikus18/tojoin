<template>
  <footer class="footer">
    <div class="subscribe">
      <div class="text">
        <p class="title">{{ settings.test_it_for_free }}</p>
        <p class="subtitle">{{ settings.make_your_business_smart }}</p>
      </div>
      <div class="button">
        <LinkTryFree />
      </div>
    </div>
    <div class="footer-bottom footer-text-regular gray">
      <div class="info">
        <div class="footer-logo">
          <Logo />
        </div>
        <div class="slogan">{{ settings.description }}</div>
        <div class="social-list-wrapper"><SocialLinks /></div>
        <div class="copyright">® {{ settings.copyright }}</div>
      </div>
      <template v-for="(item, index) in menu.menu_list">
        <div v-if="item.has_submenu" :key="index" class="footer-menu">
          <div class="menu-title">
            {{ $prismic.asText(item.menu_item_name) }}
          </div>
          <ul class="menu-list">
            <li
              v-for="(el, ind) in menu[item.submenu_linked]"
              :key="ind"
              class="menu-item"
              :style="{ display: el.show ? 'block' : 'none' }"
            >
              <NavLink
                classname="footer-text-regular"
                :href="`${submenu[item.submenu_linked]}/${$prismic.asText(
                  el.link
                )}`"
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
import LinkTryFree from '@/components/content/LinkTryFree'
import { mapState } from 'vuex'

export default {
  components: {
    NavLink,
    ScrollTop,
    SocialLinks,
    LinkTryFree,
  },
  data() {
    return {
      submenu: {
        resource: '',
        company: '/company',
        products: '/products',
      },
    }
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
@media (min-width: 1921px) {
  .footer-bottom {
    max-width: 1920px;
    margin: auto;
  }
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
@media (max-width: 991px) {
  .subscribe {
    top: -145px;
  }
  .text .title {
    font-size: 50px;
    line-height: 60px;
  }
  .text .subtitle {
    font-size: 30px;
    line-height: 38px;
  }

  .footer-bottom {
    flex-wrap: wrap;
  }
  .info {
    order: 1;
    margin-top: 30px;
    width: 100%;
  }
  .footer-menu {
    width: 33.33%;
  }
  .social-list-wrapper {
    margin: 25px 0 35px;
  }

  .slogan {
    font-size: 30px;
    line-height: 36px;
    max-width: 450px;
  }
  .menu-title {
    font-size: 38px;
    margin-bottom: 50px;
    padding-left: 0;
  }
  .menu-item >>> a {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 35px;
  }
  .copyright {
    font-size: 30px;
    line-height: 38px;
  }
  .menu-list {
    padding-left: 0;
  }
}

@media (max-width: 767px) {
  .subscribe {
    flex-wrap: wrap;
    justify-content: center;
    top: -60px;
    background: none;
    padding: 20px 15px;
  }
  .text .title {
    font-size: 40px;
    line-height: 44px;
    white-space: normal;
  }
  .text .subtitle {
    font-size: 18px;
    line-height: 25px;
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
  .footer-menu {
    width: auto;
    padding-right: 15px;
  }

  .menu-list {
    padding-left: 0;
    margin-bottom: 30px;
  }

  .slogan {
    display: none;
  }
  .menu-title {
    font-size: 16px;
    line-height: 30px;
    padding-left: 0;
    margin-bottom: 20px;
  }
  .menu-item >>> a {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0;
  }
  .copyright {
    font-size: 16px;
    line-height: 19px;
  }
}
</style>
