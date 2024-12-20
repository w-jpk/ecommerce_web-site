<template>
  <div class="blog__container">
    <div class="blog__container__first">
      <h3 class="blog__container__first__title">Наши посты</h3>

      <div class="blog__container__first__posts">
        <blog-page-blog-item />

        <blog-page-blog-item />

        <blog-page-blog-item />
      </div>
    </div>

    <div class="blog__container__first">
      <h3 class="blog__container__first__title">Наши посты</h3>

      <div class="blog__container__first__posts">
        <blog-page-blog-item />

        <blog-page-blog-item />

        <blog-page-blog-item />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.blog__container {
  .blog__container__first {
    display: flex;
    flex-direction: column;
    margin: 2rem 5rem;
    gap: 3rem;

    .blog__container__first__title {
      font-size: 40px;
      font-weight: bold;
    }

    .blog__container__first__posts {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }
  }
}
</style>
