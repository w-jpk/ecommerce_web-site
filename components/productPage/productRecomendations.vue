<template>
  <div class="new-arriwals__section">
    <h3 class="new-arriwals__title">ВАМ МОЖЕТ ПОНРАВИТЬСЯ</h3>

    <div class="new-arriwals__products-list">
      <product-card />
      <product-card />
      <product-card />
      <product-card />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.new-arriwals__section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 5rem;
  gap: 3rem;

  .new-arriwals__title {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 40px;
    font-weight: bold;
  }

  .new-arriwals__products-list {
    display: flex;
    gap: 2rem;
  }
}
</style>
