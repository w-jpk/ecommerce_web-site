<template>
  <div class="wishlist__section">
    <h3 class="wishlist__section__header">Wishlist</h3>

    <div class="wishlist__section__orders">
      <product-card />

      <product-card />

      <product-card />

      <product-card />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wishlist__section {
  flex: 1;

  .wishlist__section__header {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #333;
  }

  .wishlist__section__orders {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
  }
}
</style>
