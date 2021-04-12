<template>
  <ul class="social-list">
    <li class="social-item">
      <a class="social-link" href="#">
        <img
          class="social-image"
          src="~@/assets/icons/facebook.svg"
          alt="facebook"
        />
      </a>
    </li>
    <li class="social-item">
      <a class="social-link" href="#"
        ><img
          class="social-image"
          src="~@/assets/icons/google-play.svg"
          alt="google-play"
      /></a>
    </li>
    <li class="social-item">
      <a class="social-link" href="#">
        <img
          class="social-image"
          src="~@/assets/icons/instagram.svg"
          alt="instagram"
        />
      </a>
    </li>
    <li class="social-item">
      <a class="social-link" href="#">
        <img
          class="social-image"
          src="~@/assets/icons/telegram.svg"
          alt="telegram"
      /></a>
    </li>
  </ul>
</template>

<script>
export default {}
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
.social-image {
  width: 24px;
  height: 24px;
}
</style>
