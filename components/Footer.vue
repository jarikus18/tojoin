<template>
  <footer class="footer">
    <div class="subscribe">
      <div class="text">
        <p class="title">Протестируйте бесплатно!</p>
        <p class="subtitle">И сделай свой бизнес “смарт”.</p>
      </div>
      <div class="button">
        <NavLink href="/" classname="btn-orange-gradient">
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
      <div class="products">
        <div class="menu-title color-text">Продукты</div>
        <ul class="menu-list">
          <li class="menu-item">Бонусная программа</li>
          <li class="menu-item">Подарки и скидки</li>
          <li class="menu-item">Qr-коды</li>
          <li class="menu-item">Свои правила</li>
          <li class="menu-item">Реферальная система</li>
          <li class="menu-item">Отзывы и показатель лояльности</li>
          <li class="menu-item">CRM и аналитика бизнеса</li>
          <li class="menu-item">Геймификация</li>
        </ul>
      </div>
      <div class="resources">
        <div class="menu-title color-text">Ресурсы</div>
        <ul class="menu-list">
          <li class="menu-item">Учебник</li>
          <li class="menu-item">Примеры использования</li>
          <li class="menu-item">Описание API</li>
          <li class="menu-item">Помощь</li>
        </ul>
      </div>
      <div class="company">
        <div class="menu-title color-text">Компания</div>
        <ul class="menu-list">
          <li class="menu-item">О нас</li>
          <li class="menu-item">Вакансии</li>
          <li class="menu-item">Связаться</li>
          <li class="menu-item">Политика конфиденциальности</li>
          <li class="menu-item">Условия использования</li>
          <li class="menu-item">Партнерская программа</li>
        </ul>
      </div>
    </div>
    <ScrollTop />
  </footer>
</template>

<script>
import NavLink from '@/components/NavLink'
import ScrollTop from '@/components/ScrollTop'
import SocialLinks from '@/components/SocialLinks'

export default {
  components: {
    NavLink,
    ScrollTop,
    SocialLinks,
  },
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
}
.menu-list {
  padding-left: 10px;
}
.menu-item {
  margin-bottom: 10px;
  line-height: 30px;
}

.copyright {
  color: #afb5c0;
}
@media (max-width: 1200px) {
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
}
@media (max-width: 992px) {
  .footer-bottom {
    flex-wrap: wrap;
  }
  .info {
    order: 1;
    margin-top: 30px;
    width: 100%;
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
  .menu-list {
    padding-left: 0;
    margin-bottom: 30px;
  }
  .text .title {
    white-space: normal;
  }
}
</style>
