<template>
  <div class="order__section">
    <h3 class="order__section__header">Orders</h3>

    <div v-if="orders.length === 0" class="order__section__empty-orders">
      <profile-page-empty-order-section />
    </div>

    <div v-else class="order__section__orders">
      <product-card />

      <product-card />

      <product-card />

      <product-card />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const orders = ref([]);
</script>

<style lang="scss" scoped>
.order__section {
  flex: 1;

  .order__section__header {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #333;
  }

  .order__section__empty-orders {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .order__section__orders {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
  }
}
</style>
