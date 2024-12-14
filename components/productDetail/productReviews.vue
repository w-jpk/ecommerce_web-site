<template>
  <section class="product-reviews">
    <div class="product-reviews__container">
      <div class="product-reviews__actions__container">
        <h3 class="product-reviews__actions__title">
          Отзывы
          <span class="product-reviews__actions__count"
            >({{ customers.length }})</span
          >
        </h3>

        <div class="product-reviews__actions">
          <div class="product-reviews__actions__filter">
            <Icon name="lets-icons:filter" class="icon" />
          </div>

          <div class="product-reviews__actions__sort">Последние</div>

          <button class="product-reviews__actions__write">
            Написать отзыв
          </button>
        </div>
      </div>

      <div class="product-reviews__list">
        <div v-for="(customer, index) in customers" :key="index">
          <product-detail-views-card
            :name="customer.name"
            :text="customer.text"
            :commentDate="customer.commentDate" />
        </div>
      </div>

      <div class="new-arriwals__section">
        <div class="new-arriwals__view-all">
          <span class="view-all__text">Загрузить все отзывы</span>
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

    .product-reviews__actions__container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;

      .product-reviews__actions__title {
        display: flex;
        align-items: center;
        font-size: 40px;
        font-weight: bold;
        gap: 0.5rem;

        .product-reviews__actions__count {
          font-size: 24px;
          font-weight: normal;
          color: $second-text-color;
        }
      }

      .product-reviews__actions {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .product-reviews__actions__filter {
          display: flex;
          align-items: center;
          justify-content: center;
          background: $background-color-light;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          padding: 10px;
          cursor: pointer;

          .icon {
            color: black;
            width: 24px;
            height: 24px;
          }
        }

        .product-reviews__actions__sort {
          background: $background-color-light;
          padding: 15px;
          border-radius: 2rem;
          cursor: pointer;
        }

        .product-reviews__actions__write {
          background: black;
          color: white;
          padding: 15px;
          border-radius: 2rem;
          border: none;
          cursor: pointer;
        }
      }
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

    .new-arriwals__section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;

      .new-arriwals__view-all {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1rem;
        height: 40px;
        border: 1px solid $border-color;
        border-radius: 2rem;
        cursor: pointer;

        .view-all__text {
          color: $text-color;
        }

        &:hover {
          background-color: black;
          border: none;

          .view-all__text {
            color: $light-text-color;
          }
        }
      }
    }
  }
}
</style>
