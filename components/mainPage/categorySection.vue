<template>
  <section class="container">
    <div class="category__back">
      <h4 class="category__title">поиск по стилю одежды</h4>

      <div class="category__grid">
        <div class="item item1"><h3 class="text">Casual</h3></div>

        <div class="item item2"><h3 class="text">Formal</h3></div>

        <div class="item item3"><h3 class="text">Party</h3></div>

        <div class="item item4"><h3 class="text">Gym</h3></div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  padding: 0 5rem;
  min-height: max-content;
  background-color: white;

  .category__back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    border-radius: 4rem;
    width: 100%;
    height: 860px;
    gap: 3rem;

    .category__title {
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      font-size: 50px;
      color: $text-color;
    }

    .category__grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1.5rem;

      .item {
        height: 290px;
        background-color: white;
        padding: 2rem;
        border-radius: 1rem;
        cursor: pointer;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.01);
        }

        .text {
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
          font-size: 30px;
          color: $text-color;
        }
      }

      .item1 {
        width: 410px;
        background-image: url("~/assets/image/category4.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .item2 {
        grid-column-start: 2;
        grid-column-end: 4;
        background-image: url("~/assets/image/category3.jpg");
        background-size: cover;
        background-position: 1rem -7rem;
        background-repeat: no-repeat;
      }

      .item3 {
        grid-column-start: 1;
        grid-column-end: 3;
        background-image: url("~/assets/image/category2.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .item4 {
        background-image: url("~/assets/image/category1.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
