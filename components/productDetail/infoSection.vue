<template>
  <section class="container">
    <div class="info__list">
      <div
        class="product-info"
        @click="activeInfo = index"
        :class="{ active: activeInfo === index }"
        v-for="(info, index) in infos"
        :key="index">
        {{ info }}
        <div class="border__section"></div>
      </div>
    </div>

    <div class="info__content">
      <div v-if="activeInfo === 0">
        <product-detail-product-charact />
      </div>

      <div v-if="activeInfo === 1">
        <product-detail-product-reviews />
      </div>

      <div v-if="activeInfo === 2">
        <product-detail-product-questions />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeInfo = ref(0);
const infos = ["Характеристики", "Отзывы", "Вопросы"];
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .info__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1rem 5rem;

    .product-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      width: 300px;
      font-weight: bold;
      color: $second-text-color;

      &.active {
        color: $text-color;

        .border__section {
          background-color: $text-color;
          height: 2px;
        }
      }

      .border__section {
        display: flex;
        width: 100%;
        height: 0.8px;
        background-color: $border-color;
        margin: 1.5rem 0;
      }
    }
  }

  .info__content {
    padding: 0 5rem;
    margin: 0;

    .product-reviews {
      margin: 0;
    }
  }
}
</style>
