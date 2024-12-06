<template>
  <div class="comment-card">
    <div class="stars">
      <i class="star" v-for="star in 5" :key="star">★</i>
    </div>
    <div class="user-info">
      <p class="user-name">{{ name }}</p>
      <span class="verified">✔</span>
    </div>
    <p class="comment-text">"{{ text }}"</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  text: String,
});
</script>

<style lang="scss" scoped>
.comment-card {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 1rem;
  padding: 2rem;
  width: 400px;
  height: 240px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .stars {
    display: flex;
    margin-bottom: 8px;

    .star {
      font-size: 18px;
      color: $stars-color;
      margin-right: 4px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    .user-name {
      font-weight: bold;
      font-size: 16px;
      margin-right: 8px;
    }

    .verified {
      font-size: 14px;
      color: $checkmark-color;
    }
  }

  .comment-text {
    font-size: 14px;
    color: $second-text-color;
    line-height: 1.6;
  }
}
</style>
