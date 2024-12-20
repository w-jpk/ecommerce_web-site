<template>
  <div class="blog__item" @click="goToBlog">
    <img src="/assets/image/category2.jpg" alt="" class="blog__item__img" />

    <div class="blog__item__info">
      <h3 class="blog__item__info__title">Blog Title</h3>

      <p class="blog__item__info__time">18 jan 2022</p>
    </div>
  </div>
</template>

<script setup>
const goToBlog = () => {
  window.location.href = "/blogDetail";
};
</script>

<style lang="scss" scoped>
.blog__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  gap: 1.5rem;

  .blog__item__img {
    width: 100%;
    height: 275px;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .blog__item__info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .blog__item__info__title {
      font-size: 20px;
      font-weight: bold;
      color: $text-color;
    }

    .blog__item__info__time {
      font-size: 13px;
      color: $second-text-color;
    }
  }
}
</style>
