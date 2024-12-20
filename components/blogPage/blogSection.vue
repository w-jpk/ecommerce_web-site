<template>
  <div class="blog__section">
    <div class="blog__section__header">
      <h3 class="blog__section__header__title">Блог</h3>

      <button class="blog__section__header__button" @click="goToBlog">
        Смотреть все<Icon name="ep:arrow-right-bold" />
      </button>
    </div>

    <div class="blog__section__posts">
      <blog-page-blog-item />

      <blog-page-blog-item />

      <blog-page-blog-item />
    </div>
  </div>
</template>

<script setup>
const goToBlog = () => {
  window.location.href = "/blog";
};
</script>

<style lang="scss" scoped>
.blog__section {
  display: flex;
  flex-direction: column;
  margin: 5rem;
  gap: 3rem;

  .blog__section__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .blog__section__header__title {
      font-size: 40px;
      font-weight: bold;
    }

    .blog__section__header__button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1rem;
      border: 1px solid #000;
      border-radius: 2rem;
      background-color: #000;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
  }

  .blog__section__posts {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
}
</style>
