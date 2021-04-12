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
          <img src="~@/assets/images/logo-footer.svg" alt="logo footer" />
        </div>
        <div class="slogan">TutSvoi - приложение для автоматизации бизнеса</div>
        <ul class="social-list">
          <li class="social-item">
            <a class="social-link" href="#">
              <img src="~@/assets/icons/facebook.svg" alt="facebook" />
            </a>
          </li>
          <li class="social-item">
            <a class="social-link" href="#"
              ><img src="~@/assets/icons/google-play.svg" alt="google-play"
            /></a>
          </li>
          <li class="social-item">
            <a class="social-link" href="#">
              <img src="~@/assets/icons/instagram.svg" alt="instagram" />
            </a>
          </li>
          <li class="social-item">
            <a class="social-link" href="#">
              <img src="~@/assets/icons/telegram.svg" alt="telegram"
            /></a>
          </li>
        </ul>
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
export default {
  components: {
    NavLink,
    ScrollTop,
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
.menu-item {
  margin-bottom: 10px;
  line-height: 30px;
}
.social-list {
  display: flex;
  align-items: center;
  margin: 80px 0 100px;
}
.social-item {
  margin-right: 16px;
}
.social-link {
  background: #fff;
  box-shadow: 0.1px 1px 1px rgba(17, 19, 35, 0.01);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s linear;
}
.social-link:hover {
  box-shadow: 0.1px 13px 18px rgba(17, 19, 35, 0.08);
}
.social-link img {
  width: 24px;
  height: 24px;
}
.copyright {
  color: #afb5c0;
}
</style>
