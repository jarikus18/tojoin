<template>
  <main class="main">
    <section class="first-screen">
      <div class="resources">
        <div class="bg-line" />
        <div class="ticket" />
        <div class="gift" />
        <div class="girl" />
        <div class="j" />
        <div class="dots-first-screen" />
        <div class="save" />
        <div class="sale" />
        <div class="positive-review" />
        <div class="chart-vector">
          <div class="top">
            <span class="small-text">Прирост клиентов</span>
            <span class="small-text green">+ 73%</span>
          </div>
          <div class="bottom">
            <img
              src="~@/assets/images/first-screen/chart_vector.svg"
              alt="chart"
            />
            <span class="blue">20245</span>
          </div>
        </div>
      </div>
      <div class="text-block">
        <h1 class="h1 m-0">{{ $t('title_home') }}</h1>
        <p class="caption-1 color-subtitle subtitle">
          TutSvoi - приложение для автоматизации бизнеса
        </p>
        <NavLink href="/" classname="btn-orange-gradient">
          Попробовать бесплатно
        </NavLink>
      </div>
    </section>
    <section class="tasks">
      <h3 class="h3 text-center">Задачи которые мы решаем</h3>
      <client-only>
        <div class="carousel-wrap">
          <Carrousel>
            <Slide>
              <div class="img-wrap text-center">
                <img src="~@/assets/images/tasks/comment.svg" alt="" />
              </div>
              <h5 class="h5 slide-title">Сбор обратной связи</h5>
              <p class="text">
                Узнайте, что людям нравится в вашем бизнесе, а что напротив,
                отталкивает. Определите свои конкурентные преимущества и
                используйте их в рекламных активностях.
              </p>
            </Slide>
            <Slide>
              <div class="img-wrap text-center">
                <img src="~@/assets/images/tasks/research.svg" alt="" />
              </div>
              <h5 class="h5 slide-title">Поиск слабых мест бизнеса</h5>
              <p class="text">
                Почему люди не приходят к вам повторно? Какая смена приносит
                меньшую прибыль? Почему конкурент зарабатывает больше?
              </p>
            </Slide>
            <Slide>
              <div class="img-wrap text-center">
                <img src="~@/assets/images/tasks/clock.svg" alt="" />
              </div>
              <h5 class="h5 slide-title">
                Ускорение тестирования новых продуктов
              </h5>
              <p class="text">
                Уведомите клиента о поступлении нового товара и предложите его
                опробовать на взаимовыгодных условиях.
              </p>
            </Slide>
            <Slide>
              <div class="img-wrap text-center">
                <img src="~@/assets/images/tasks/hand.svg" alt="" />
              </div>
              <h5 class="h5 slide-title">Создание адвокатов бренда</h5>
              <p class="text">
                Соберите группу людей, которые смогут не только рекомендовать
                ваш бизнес, но и бороться с негативом в его сторону.
              </p>
            </Slide>
            <Slide>
              <div class="img-wrap text-center">
                <img src="~@/assets/images/tasks/community.svg" alt="" />
              </div>
              <h5 class="h5 slide-title">Коммуникация с клиентом</h5>
              <p class="text">
                Ведите переписку, отвечайте на вопросы, получайте заказы,
                напоминайте о себе, уведомляйте о специальных предложениях.
              </p>
            </Slide>
            <Slide>
              <div class="img-wrap text-center">
                <img src="~@/assets/images/tasks/comment.svg" alt="" />
              </div>
              <h5 class="h5 slide-title">Сбор обратной связи</h5>
              <p class="text">
                Узнайте, что людям нравится в вашем бизнесе, а что напротив,
                отталкивает. Определите свои конкурентные преимущества и
                используйте их в рекламных активностях.
              </p>
            </Slide>
            <Slide>
              <div class="img-wrap text-center">
                <img src="~@/assets/images/tasks/cycle.svg" alt="" />
              </div>
              <h5 class="h5 slide-title">Продление жизненного цикла клиента</h5>
              <p class="text">
                Удержите клиента и сделайте его постоянным. Дешевле сохранить
                существующего покупателя, чем привести нового.
              </p>
            </Slide>
            <Slide>
              <div class="img-wrap text-center">
                <img src="~@/assets/images/tasks/speakers.svg" alt="" />
              </div>
              <h5 class="h5 slide-title">Стимулирование сарафанного радио</h5>
              <p class="text">
                Заставьте постоянного клиента привести своих друзей. Сделайте их
                постоянными покупателями и повторите всё ещё раз.
              </p>
            </Slide>
          </Carrousel>
        </div>
      </client-only>
    </section>
    <section class="products">
      <h3 class="h3 text-center">Наши продукты</h3>
      <div class="products-sub-logo">
        <img src="~@/assets/images/products/ut.svg" alt="ut" />
      </div>
      <div class="products-container text-center" style="margin: auto">
        <ProductImage
          :image="require('~/assets/images/products/celebration.jpg')"
        />
      </div>
    </section>
    <section class="stories">
      <h3 class="h3 text-center">Истории успеха</h3>
    </section>
  </main>
</template>

<script>
import Carrousel from '@/components/carousel/Swiper'
import Slide from '@/components/carousel/Slide'
import NavLink from '@/components/NavLink'
import ProductImage from '@/components/products/ProductImage'

export default {
  components: {
    NavLink,
    Carrousel,
    Slide,
    ProductImage,
  },
}
</script>

<style scoped>
.first-screen {
  position: relative;
  min-height: 1000px;
}
.first-screen::after {
  position: absolute;
  z-index: -1;
  content: '';
  top: 0;
  left: 0;
  min-height: 1500px;
  width: 100%;
  background: linear-gradient(
    180deg,
    #e5efff 9.72%,
    #fafbfe 92.03%,
    #fafbfe 145.03%
  );
}
.text-block {
  position: relative;
  padding-top: 320px;
  padding-left: 220px;
  max-width: 60vw;
}
.subtitle {
  margin-top: 10px;
  margin-bottom: 55px;
}
.resources {
  position: absolute;
  right: 0;
  top: 0;
  /* transform: scale(0.9); */
}
.bg-line {
  position: absolute;
  top: 0;
  right: 50px;
  background-image: url('~@/assets/images/first-screen/bg-line.svg');
  background-repeat: no-repeat;
  background-size: contain;
  height: 820px;
  width: 920px;
}
.ticket {
  position: absolute;
  top: 100px;
  right: 390px;
  background-image: url('~@/assets/images/first-screen/ticket.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 127px;
  height: 76px;
}
.gift {
  position: absolute;
  top: 200px;
  right: 880px;
  background-image: url('~@/assets/images/first-screen/gift.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 145px;
  height: 85px;
}

.girl {
  position: absolute;
  top: 62px;
  right: 340px;
  background-image: url('~@/assets/images/first-screen/girl.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 636px;
  height: 809px;
}

.j {
  position: absolute;
  top: 102px;
  right: 0;
  background-image: url('~@/assets/images/first-screen/j.svg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 1166px;
  height: 1158px;
}

.dots-first-screen {
  position: absolute;
  top: 102px;
  right: 200px;
  background-image: url('~@/assets/images/first-screen/dots_first_screen.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 553px;
}

.save {
  position: absolute;
  top: 742px;
  right: 1090px;
  background-image: url('~@/assets/images/first-screen/safe.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 125px;
  height: 87px;
}

.sale {
  position: absolute;
  top: 238px;
  right: 168px;
  background-image: url('~@/assets/images/first-screen/sale.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 128px;
  height: 128px;
}
.positive-review {
  position: absolute;
  top: 588px;
  right: 268px;
  background-image: url('~@/assets/images/first-screen/positive-review.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 173px;
  height: 173px;
}
.chart-vector {
  position: absolute;
  top: 545px;
  right: 820px;
  background: #ffffff;
  box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 20px;
  padding: 21px 23px;
  white-space: nowrap;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
.bottom {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 30px;
  line-height: 150%;
}

.tasks {
  position: relative;
}
.img-wrap {
  height: 208px;
}
.img-wrap img {
  max-height: 208px;
}
.slide-title {
  line-height: 46px;
  margin: 20px 0 10px;
}
.carousel-wrap {
  padding: 30px 0 50px;
}
.products {
  position: relative;
  overflow: hidden;
}
.products-container {
  background: #e5efff;
  height: 800px;
  position: relative;
  overflow: hidden;
}
.products-container::before,
.products-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 130%;
  height: 420px;
  border-radius: 50%;
  background-color: #fafbfe;
  transform: translate(-50%, -64%);
}
.products-container::after {
  top: 100%;
  transform: translate(-50%, -34%);
}
.products-sub-logo {
  position: absolute;
  right: 15%;
  top: 0;
  width: 236px;
  height: 385px;
  z-index: 1;
}

.stories {
  padding: 50px 0 300px;
}
</style>
