<template>
  <section class="container">
    <div class="new-arriwals__section">
      <h3 class="new-arriwals__title">НОВЫЕ ПОСТАВКИ</h3>

      <div class="new-arriwals__products-list">
        <product-card />
        <product-card />
        <product-card />
        <product-card />
      </div>

      <div class="new-arriwals__view-all">
        <span class="view-all__text">Посмотреть всё</span>
      </div>
    </div>

    <div class="border__section"></div>

    <div class="new-arriwals__section">
      <h3 class="new-arriwals__title">ТОП ПРОДАЖ</h3>

      <div class="new-arriwals__products-list">
        <product-card />
        <product-card />
        <product-card />
        <product-card />
      </div>

      <div class="new-arriwals__view-all">
        <span class="view-all__text">Посмотреть всё</span>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  padding: 0 5rem;
  background-color: $background-color;

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

    .new-arriwals__view-all {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 40px;
      border: 1px solid $border-color;
      border-radius: 2rem;

      .view-all__text {
        color: $text-color;
      }
    }
  }

  .border__section {
    display: flex;
    width: 100%;
    height: 1px;
    background-color: $border-color;
  }
}
</style>
