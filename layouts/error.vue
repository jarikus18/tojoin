<template>
  <div class="page">
    <div class="page-logo">
      <Logo />
    </div>
    <div class="page-container">
      <div class="col">
        <img
          class="img-responsive"
          src="~@/assets/images/page-not-found.svg"
          alt=""
        />
      </div>
      <div class="col">
        <div v-if="error.statusCode === 404" class="page-content">
          <h2 class="h2 title">Error</h2>
          <p class="subtitle">
            Страница, которую вы ищете, не существует, либо устарела.
          </p>

          <NuxtLink class="btn-common" to="/">
            Вернуться на главную страницу
          </NuxtLink>
          <div class="page-404">404</div>
          <SocialLinks />
          <div class="tag"><Tag /></div>
          <div class="dots"><ThreeDots /></div>
          <div class="plus"><Plus /></div>
        </div>
        <h1 v-else>An error occurred</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import SocialLinks from '@/components/SocialLinks'
import { Tag, ThreeDots, Plus } from '@/components/decor'

export default {
  components: { Logo, SocialLinks, Tag, ThreeDots, Plus },
  layout: 'error',
  props: {
    error: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
<style lang="scss" scoped>
.page {
  padding: 50px 35px;
  background: linear-gradient(
    180deg,
    #e5efff 9.72%,
    #fafbfe 92.03%,
    #fafbfe 145.03%
  );
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  &-logo {
    position: absolute;
    top: 50px;
    left: 35px;
  }
  &-container {
    padding: 100px 0;
    margin: auto;
    display: flex;
    justify-content: center;
    & .col {
      flex: 0 0 50%;
      padding: 0 5%;
      max-width: 850px;
    }
  }
  &-content {
    position: relative;
    & .subtitle {
      display: block;
      font-size: 24px;
      line-height: 120%;
      margin: 20px 0 50px;
      max-width: 380px;
    }
    & .tag {
      position: absolute;
      right: -20%;
      top: 20%;
    }
    & .dots {
      position: absolute;
      bottom: 2%;
      right: -5%;
    }
    & .plus {
      position: absolute;
      right: -5%;
      top: 15%;
    }
  }
  &-404 {
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 220px;
    line-height: 120%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #b0cdfe;
    margin-top: 30px;
  }
  @media (max-width: 1450px) {
    &-container {
      & .col {
        max-width: 550px;
      }
      & .btn-common {
        font-size: 20px;
      }
    }
    &-404 {
      font-size: 180px;
    }
  }
  @media (max-width: 991px) {
    padding: 35px 15px;
    display: block;
    &-logo {
      position: relative;
      top: auto;
      left: auto;
    }
    &-container {
      flex-direction: column-reverse;
      & .col {
        flex: 0 0 auto;
        max-width: 100%;
        margin-bottom: 50px;
      }
    }
    &-404 {
      font-size: 160px;
    }
  }
  @media (max-width: 576px) {
    &-container {
      padding: 80px 0;
      & .col {
        padding: 0;
      }
      & .btn-common {
        font-size: 14px;
      }
    }
    &-404 {
      font-size: 120px;
    }
  }
}
</style>
