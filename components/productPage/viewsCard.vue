<template>
  <div class="comment-card">
    <div class="comment-header">
      <div class="user-info">
        <p class="user-name">{{ name }}</p>

        <span class="comment-date">{{ commentDate }}</span>
      </div>

      <span class="stars">
        <Icon
          name="mdi:star"
          v-for="star in 5"
          :key="star"
          class="star filled" />

        <!-- <Icon name="mdi:star-half-full" class="star half" /> -->
      </span>
    </div>

    <div class="comment-content">
      <p class="comment-text">{{ text }}</p>

      <img class="comment-img" src="/assets/image/model.jpg" alt="" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  text: String,
  commentDate: String,
});
</script>

<style lang="scss" scoped>
.comment-card {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 1rem;
  padding: 2rem;
  min-width: 400px;
  min-height: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .comment-header {
    display: flex;
    justify-content: space-between;

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
  }

  .comment-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.4rem;

    .comment-text {
      font-size: 14px;
      color: $second-text-color;
      line-height: 1.5;
    }

    .comment-img {
      width: 100px;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
