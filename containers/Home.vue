<template>
  <div class="home">
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
      <div class="mobile-block">
        <div class="social-list-wrapper">
          <SocialLinks />
        </div>
      </div>
    </section>
    <section class="tasks">
      <h3 class="h3 text-center">Задачи которые мы решаем</h3>
      <client-only>
        <div class="carousel-wrap">
          <Slider>
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
          </Slider>
        </div>
      </client-only>
    </section>
    <section class="products">
      <h3 class="h3 text-center">Наши продукты</h3>
      <div class="products-sub-logo">
        <img src="~@/assets/images/products/ut.svg" alt="ut" />
      </div>
      <div class="products-container">
        <ul class="product-list">
          <li class="product-item review">
            <div class="product-image">
              <span class="big-circle" />
              <span class="small-circle" />
              <span class="dots" />
              <ProductImage
                :image="require('~/assets/images/products/happy-couple.jpg')"
              />
            </div>
            <div class="description">
              <h4 class="h4 product-title">Отзывы и показатель лояльности</h4>
              <div class="product-content">
                Насколько клиенты удовлетворены обслуживанием? Получите оценку
                от 1 до 10 и прочтите развёрнутый комментарий.
              </div>
              <div class="product-button">
                <NavLink classname="simple-btn" href="/">подробнее</NavLink>
              </div>
            </div>
          </li>
          <li class="product-item content-right bonus">
            <div class="description">
              <h4 class="h4 product-title">Кэшбэк и бонусы</h4>
              <div class="product-content">
                Начисление бонусных баллов при совершении покупки. Участники
                программы лояльности смогут использовать баллы на частичную
                оплату повторных покупок.
              </div>
              <div class="product-button">
                <NavLink classname="simple-btn" href="/">подробнее</NavLink>
              </div>
            </div>
            <div class="product-image">
              <span class="big-circle" />
              <span class="small-circle" />
              <span class="dots horisontal" />
              <ProductImage
                :image="require('~/assets/images/products/portrait-happy.jpg')"
              />
            </div>
          </li>
          <li class="product-item gifts">
            <div class="product-image">
              <span class="big-circle" />
              <ProductImage
                :image="require('~/assets/images/products/celebration.jpg')"
              />
            </div>
            <div class="description">
              <h4 class="h4 product-title">Подарки и скидки</h4>
              <div class="product-content">
                Создавайте QR-коды и назначайте на них любые действия, либо
                дарите клиентам подарки через панель администратора.
              </div>
              <div class="product-button">
                <NavLink classname="simple-btn" href="/">подробнее</NavLink>
              </div>
            </div>
          </li>
          <li class="product-item content-right referal">
            <div class="description">
              <h4 class="h4 product-title">Реферальная система</h4>
              <div class="product-content">
                Ваши клиенты могут приглашать друзей в систему лояльности, тем
                самым приводя к вам новых клиентов.
              </div>
              <div class="product-button">
                <NavLink classname="simple-btn" href="/">подробнее</NavLink>
              </div>
            </div>
            <div class="product-image">
              <span class="big-circle" />
              <span class="dots horisontal" />
              <ProductImage
                :image="require('~/assets/images/products/girls-star.jpg')"
              />
            </div>
          </li>
          <li class="product-item analitics">
            <div class="product-image">
              <span class="small-circle" />
              <span class="dots" />
              <ProductImage
                :image="require('~/assets/images/products/analitics.jpg')"
              />
            </div>
            <div class="description">
              <h4 class="h4 product-title">Аналитика</h4>
              <div class="product-content">
                Все показатели бизнеса собраны в одном месте. Анализ и
                оптимизация ещё никогда не были настолько удобными.
              </div>
              <div class="product-button">
                <NavLink classname="simple-btn" href="/">подробнее</NavLink>
              </div>
            </div>
          </li>
          <li class="product-item content-right game">
            <div class="description">
              <h4 class="h4 product-title">Геймификация</h4>
              <div class="product-content">
                Превратите шопинг в игру. Создайте сценарий покупок и дарите
                вознаграждение тем, кто ему следует.
              </div>
              <div class="product-button">
                <NavLink classname="simple-btn" href="/">подробнее</NavLink>
              </div>
            </div>
            <div class="product-image">
              <span class="big-circle" />
              <span class="dots" />
              <ProductImage
                :image="require('~/assets/images/products/excited-happy.jpg')"
              />
            </div>
          </li>
          <li class="product-item crm">
            <div class="product-image">
              <span class="big-circle" />
              <span class="dots horisontal" />
              <ProductImage
                :image="require('~/assets/images/products/business.jpg')"
              />
            </div>
            <div class="description">
              <h4 class="h4 product-title">CRM-система</h4>
              <div class="product-content">
                Ведите учёт клиентов, собирайте данные и обрабатывайте заявки.
              </div>
              <div class="product-button">
                <NavLink classname="simple-btn" href="/">подробнее</NavLink>
              </div>
            </div>
          </li>
          <li class="product-item content-right rules">
            <div class="description">
              <h4 class="h4 product-title">Свои правила</h4>
              <div class="product-content">
                Автоматизируй бизнесс процессы. Создавай свои правила для
                поздравле- ний клиентов, напоминаний, свои условия для бонусной
                программы, собирай информацию с пользователей и использовать её
                в работе (дарить купон на любимую еду).
              </div>
              <div class="product-button">
                <NavLink classname="simple-btn" href="/">подробнее</NavLink>
              </div>
            </div>
            <div class="product-image">
              <span class="big-circle" />
              <span class="dots horisontal" />
              <ProductImage
                :image="require('~/assets/images/products/notebook.jpg')"
              />
            </div>
          </li>
          <li class="product-item qr-code">
            <div class="product-image">
              <span class="big-circle" />
              <ProductImage
                :image="require('~/assets/images/products/qr-code.jpg')"
              />
            </div>
            <div class="description">
              <h4 class="h4 product-title">QR-коды</h4>
              <div class="product-content">
                Открывай меню, приглашай в лояльность, дари подарки. Вешай любое
                действие.
              </div>
              <div class="product-button">
                <NavLink classname="simple-btn" href="/">подробнее</NavLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div class="container company-logos">
      <div class="company-logo">
        <img src="~@/assets/images/companies/compact.png" alt="" />
      </div>
      <div class="company-logo">
        <img src="~@/assets/images/companies/company.png" alt="" />
      </div>
      <div class="company-logo">
        <img src="~@/assets/images/companies/iocc.png" alt="" />
      </div>
      <div class="company-logo">
        <img src="~@/assets/images/companies/tv-digital.png" alt="" />
      </div>
      <div class="company-logo">
        <img src="~@/assets/images/companies/changes.png" alt="" />
      </div>
    </div>
    <section class="stories">
      <h3 class="h3 text-center">Истории успеха</h3>
      <client-only>
        <Carousel>
          <StodySlide
            v-for="(story, index) in stories"
            :key="story.id"
            :item="story"
            :index="index"
          />
          <!-- <StodySlide>
            <h5 class="h5 slide-title text-center">Кофейни</h5>

            <p class="text">
              В современном бизнесе открыть кофейню и получит потом клиентов в
              первый же месяц довольно тяжело. Конкуренция большая, потребитель
              избалован, сложно из онлайна привести клиента в оффлайн.
            </p>
            <p class="text">
              Чем в этом случае поможет наше приложение? В шапке профиля
              Instagram мы разместим ссылку, которая ведёт на страницу кофейни в
              ToJoin. Перейдя по ссылке, клиент сразу же получает небольшой
              бонус, который можно потратить в счёт частичной оплаты первой
              покупки. Так мы стимулируем первое касание с аудиторией уже в
              оффлайне.
            </p>
            <p class="text">
              После первой покупки наступает этап удержания клиента. Реализуем
              мы его с помощью всё тех же бонусов за каждую покупку. Но что
              более интересно, в ход идёт геймификация и разблокировка
              достижений. Например, 5 раз в неделю зайди за утренним кофе и
              получи статус «кофеман» (название изменяемо). Другой сценарий -
              вам нужно протестировать новый напиток. Мы предлагаем посетителю
              попробовать его и разблокировать достижение «новатор».
            </p>
            <p class="text">
              Возможен сценарий, когда клиент уже бывал у вас, но по какой-то
              причине давно не заходил. Мы можем догнать его с помощью
              push-уведомления и напомнить о себе и специальном предложении на
              утренний кофе.
            </p>
            <p class="text">
              Доступны уведомление по геолокации - напоминайте своим клиентам,
              работающим рядом, что можно зайти за утренним кофе по дороге в
              офис.
            </p>
          </StodySlide>

          <StodySlide>
            <h5 class="h5 slide-title text-center">Фитнес-центр</h5>
            <p class="text">
              Основная задача фитнес-центра - не просто привести клиента, а
              сделать его постоянным и не допустить ухода в другой зал. В этом
              может помочь бонусная программа, которая предусматривает кэшбэк с
              каждого приобретённого абонемента. Таким образом за год покупки
              месячного абонемента клиент может накопить баллы на один
              бесплатный месяц занятий, что неплохо мотивирует его ходить именно
              к вам, а не к вашим конкурентам.
            </p>
            <p class="text">
              Также не стоит забывать, что многие спортсмены тренируются с
              друзьями. Мы можем стимулировать коллективные посещения с помощью
              реферальной программы. Её суть в том, что приглашённый и
              пригласивший получают бонусы для дальнейшей оплаты своих
              абонементов.
            </p>
            <p class="text">
              После приглашения друзей и перехода их в статус вашего клиента
              возвращаемся к первому пункту и работаем над его удержанием.
            </p>
            <p class="text">
              Помимо систем лояльности, мы можем собирать обратную связь от
              посетителей. Например, узнать, насколько им понравился тренер,
              либо каких групповых занятий им не хватает.
            </p>
            <p class="text">
              В приложении также реализована система чатов уведомлений. Вы
              можете всегда быть на связи со своими клиентами, информировать их
              о новых форматах занятий, записывать их на персональные тренировки
              и напоминать о том, что их абонемент скоро закончится.
            </p>
          </StodySlide> -->
        </Carousel>
      </client-only>
      <div class="show-more">
        <NavLink class="light-btn" href="/">Еще истории успеха</NavLink>
      </div>
    </section>
  </div>
</template>

<script>
import Slider from '@/components/carousel/Swiper'
import Slide from '@/components/carousel/Slide'
import StodySlide from '@/components/carousel/StorySlide'
import NavLink from '@/components/NavLink'
import ProductImage from '@/components/products/ProductImage'
import Carousel from '@/components/carousel/Carousel'
import SocialLinks from '@/components/SocialLinks'
import stories from '@/assets/stories.json'

export default {
  components: {
    NavLink,
    Slider,
    Slide,
    StodySlide,
    ProductImage,
    Carousel,
    SocialLinks,
  },
  data() {
    return {
      stories,
    }
  },
}
</script>

<style scoped>
.home {
  margin-top: -200px;
}
.first-screen {
  position: relative;
  min-height: 1000px;
  overflow: hidden;
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
  max-width: 1600px;
  width: 100%;
  padding-left: 40px;
  margin: auto;
}
.subtitle {
  margin-top: 20px;
  margin-bottom: 55px;
}
.resources {
  position: absolute;
  right: 0;
  top: 0;
  /* transform: scale(0.9); */
}
.mobile-block {
  display: none;
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
  max-width: 1620px;
  margin: auto;
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
  position: relative;
  overflow: hidden;
  padding: 0 10%;
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
  height: 520px;
}
.product-list {
  max-width: 1920px;
  margin: auto;
}
.products-sub-logo {
  position: absolute;
  right: 15%;
  top: 0;
  width: 236px;
  height: 385px;
  z-index: 1;
}

.product-item {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
}
.product-item.content-right {
  margin-left: auto;
}
.description {
  margin-bottom: 40px;
  margin-left: 20px;
}
.product-title {
  margin-bottom: 20px;
  line-height: 46px;
  letter-spacing: 0.396px;
}
.product-content {
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 50px;
}
.stories {
  padding: 50px 0 300px;
}

.big-circle {
  display: block;
  width: 227px;
  height: 227px;
  background-image: url(~/assets/images/products/big-circle.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
}
.small-circle {
  display: block;
  width: 65px;
  height: 65px;
  background-image: url(~/assets/images/products/small-circle.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
}
.dots {
  display: block;
  width: 213px;
  height: 368px;
  background-image: url(~/assets/images/products/dots-vertical.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
}
.dots.horisontal {
  transform: rotate(90deg);
}

.company-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 80px 10% 120px;
}
.company-logos .company-logo {
  margin: 0 30px 30px;
}
.show-more {
  position: relative;
  margin-left: 33%;
  top: -40px;
  z-index: 1;
  display: inline-block;
}
@media (max-width: 1800px) {
  .resources {
    right: -10%;
  }
}
@media (max-width: 1500px) {
  .resources {
    right: -20%;
  }
  .girl {
    top: 120px;
  }
  .gift {
    display: none;
  }
  .text-block {
    max-width: 600px;
    margin-right: auto;
    margin-left: 0;
    padding-top: 200px;
  }
}
@media (max-width: 1200px) {
  .resources {
    right: -30%;
  }
}
@media (max-width: 992px) {
  .first-screen {
    overflow: initial;
    min-height: auto;
  }
  .first-screen::before {
    content: '';
    position: absolute;
    z-index: 0;
    content: '';
    bottom: -150px;
    left: 0;
    min-height: 700px;
    width: 100%;
    background: url('~/assets/images/illustration.svg') center no-repeat;
    background-size: contain;
    background-position: bottom right;
  }
  .resources {
    display: none;
  }
  .text-block {
    padding-top: 150px;
    padding-left: 15px;
    max-width: none;
  }
  .show-more {
    margin-left: 0;
  }
  .mobile-block {
    display: block;
    margin-top: 50px;
    height: 420px;
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 1;
  }
  .social-list-wrapper {
    padding: 0 0 100px 15px;
  }
}
@media (max-width: 1200px) {
  .text-block .h1 {
    line-height: 52px;
  }
  .text-block .subtitle {
    font-size: 18px;
    line-height: 25px;
  }
}
@media (max-width: 768px) {
  .first-screen::before {
    bottom: -250px;
    background-position: center right;
  }
}
@media (max-width: 414px) {
  .first-screen::before {
    bottom: -150px;
  }
}
</style>

<style lang="scss">
.product-item.review {
  max-width: 80%;
  z-index: 10;
  justify-content: flex-start;
  .dots {
    top: 360px;
    left: 10px;
  }
  .small-circle {
    left: -50px;
    top: 140px;
  }
  .big-circle {
    top: 160px;
    left: 20px;
    width: 336px;
    height: 336px;
  }
  .product-image {
    margin-left: 160px;
  }
  .product-content {
    max-width: 480px;
  }
}
.product-item.bonus {
  max-width: 70%;
  margin-top: -100px;
  justify-content: flex-end;
  z-index: 9;
  .dots {
    top: 360px;
    right: 10px;
  }
  .small-circle {
    right: 400px;
    top: 40px;
  }
  .big-circle {
    top: 0px;
    right: 60px;
  }
  .product-image {
    margin-right: 160px;
  }
  .product-content {
    max-width: 400px;
    margin-right: 40px;
  }
}
.product-item.gifts {
  max-width: 70%;
  margin-top: -180px;
  justify-content: start;
  z-index: 8;
  .big-circle {
    top: 400px;
    left: -100px;
  }
  .product-image {
    margin-left: -40px;
  }
  .product-content {
    max-width: 400px;
  }
}
.product-item.referal {
  max-width: 65%;
  margin-top: -180px;
  z-index: 7;
  justify-content: flex-end;
  .dots {
    top: 160px;
    right: -100px;
  }
  .big-circle {
    top: -60px;
    right: 230px;
  }
  .product-image {
    margin-right: 0px;
  }
  .product-content {
    max-width: 480px;
  }
}
.product-item.analitics {
  max-width: 70%;
  margin-top: -150px;
  justify-content: start;
  z-index: 6;
  .small-circle {
    top: 50px;
    left: 20px;
  }
  .dots {
    top: 240px;
    left: -30px;
  }
  .product-image {
    margin-left: 30px;
  }
  .product-content {
    max-width: 400px;
  }
}
.product-item.game {
  max-width: 70%;
  margin-top: -180px;
  justify-content: flex-end;
  z-index: 5;
  .big-circle {
    top: 390px;
    right: 60px;
  }
  .dots {
    top: -50px;
    right: 0px;
  }
  .product-image {
    margin-right: 100px;
  }
  .product-content {
    max-width: 400px;
    margin-right: 20px;
  }
}
.product-item.crm {
  max-width: 70%;
  margin-top: -210px;
  justify-content: start;
  z-index: 4;
  .big-circle {
    top: -10px;
    left: 220px;
  }
  .dots {
    top: 330px;
    left: -20px;
  }
  .product-image {
    margin-left: 0;
  }
  .product-content {
    max-width: 400px;
  }
}
.product-item.rules {
  max-width: 70%;
  margin-top: -180px;
  justify-content: flex-end;
  z-index: 3;
  .big-circle {
    top: 450px;
    right: -20px;
    width: 100px;
    height: 100px;
  }
  .dots {
    top: -150px;
    right: 270px;
  }
  .product-image {
    margin-right: 0px;
  }
  .product-content {
    max-width: 450px;
    margin-right: 20px;
  }
  .description {
    margin-bottom: 10px;
  }
}
.product-item.qr-code {
  max-width: 70%;
  margin-top: -210px;
  justify-content: start;
  z-index: 2;
  padding-bottom: 100px;
  .big-circle {
    top: 30px;
    left: 320px;
    width: 100px;
    height: 100px;
  }
  .product-image {
    margin-left: 0;
  }
  .product-content {
    max-width: 400px;
  }
}
</style>
