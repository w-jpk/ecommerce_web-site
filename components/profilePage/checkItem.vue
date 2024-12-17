<template>
  <div class="check__item">
    <h3 class="check__item__title">Покупка</h3>

    <div class="check__item__details">
      <p>{{ data }}</p>
    </div>

    <div class="check__item__price">
      <p class="price">{{ price }} ₽</p>
    </div>

    <div class="check__item__status">
      <button class="view-button">Посмотреть</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref("14 декабря, 10:54");
const price = ref("295");
</script>

<style lang="scss" scoped>
.check__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  padding: 1rem;
  background: #fff;
  width: 100%;

  .check__item__title {
    font-size: 1.2rem;
    color: #333;
  }

  .check__item__details {
    h4 {
      margin: 0;
      font-size: 1.1rem;
      color: #000;
    }

    p {
      margin: 0.25rem 0;
      font-size: 0.9rem;
      color: #666;
    }

    .check__item__details-price {
      font-weight: bold;
      color: #333;
    }
  }

  .check__item__price {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    color: #333;
  }

  .check__item__status {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    .status {
      font-size: 0.9rem;
      font-weight: bold;
      text-transform: uppercase;
    }

    .processing {
      color: #e68a00;
    }

    .completed {
      color: #28a745;
    }

    .view-button {
      border: 1px solid #000;
      background: none;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background 0.3s, color 0.3s;

      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }
}
</style>
