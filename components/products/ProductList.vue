<template>
  <ul class="product-list">
    <li class="product-item">
      <ProductImage
        :image="require('~/assets/images/products/happy-couple.jpg')"
      />
      <div class="description">
        <div class="product-title">Отзывы и показатель лояльности</div>
        <div class="product-content">
          Насколько клиенты удовлетворены обслуживанием? Получите оценку от 1 до
          10 и прочтите развёрнутый комментарий.
        </div>
        <div class="product-button">
          <NavLink classname="simple-btn" href="/">подробнее</NavLink>
        </div>
      </div>
    </li>
    <li class="product-item"></li>
    <li class="product-item"></li>
    <li class="product-item"></li>
    <li class="product-item"></li>
    <li class="product-item"></li>
    <li class="product-item"></li>
    <li class="product-item"></li>
  </ul>
</template>
