<template>
  <section class="product-reviews">
    <div class="product-reviews__container">
      <h3 class="product-reviews__title">Отзывы</h3>

      <div class="product-reviews__list">
        <div v-for="(customer, index) in customers" :key="index">
          <product-detail-views-card
            :name="customer.name"
            :text="customer.text"
            :commentDate="customer.commentDate" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const customers = ref([
  {
    commentDate: "14 декабря",
    name: "Анастасия С.",
    text: "Удобное, не колется, хорошо сидит, не слишком тонкое",
  },
  {
    commentDate: "14 декабря",
    name: "Анастасия С.",
    text: "Удобное, не колется, хорошо сидит, не слишком тонкое",
  },
  {
    commentDate: "14 декабря",
    name: "Анастасия С.",
    text: "Удобное, не колется, хорошо сидит, не слишком тонкое",
  },
  {
    commentDate: "14 декабря",
    name: "Анастасия С.",
    text: "Удобное, не колется, хорошо сидит, не слишком тонкое",
  },
  {
    commentDate: "14 декабря",
    name: "Анастасия С.",
    text: "Удобное, не колется, хорошо сидит, не слишком тонкое",
  },
]);
</script>

<style lang="scss" scoped>
.product-reviews {
  width: 100%;
  margin: 0;

  .product-reviews__container {
    width: 100%;
    margin: 0;
    padding: 0;

    .product-reviews__title {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .product-reviews__list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: 1rem;
      justify-content: space-between;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-content: center;
      }
    }
  }
}
</style>
