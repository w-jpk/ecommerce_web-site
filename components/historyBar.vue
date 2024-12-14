<template>
  <section id="history">
    <p class="history-item">Главная</p>
    <Icon name="weui:arrow-filled" width="12" height="24" />
    <p class="history-item">Магазин</p>
    <Icon name="weui:arrow-filled" width="12" height="24" />
    <p class="history-item">Женская одежда</p>
    <Icon name="weui:arrow-filled" width="12" height="24" />
    <p class="history-item" :class="{ active: true }">Платья</p>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
#history {
  display: flex;
  align-items: center;
  margin: 1rem 5rem 0 5rem;
  gap: 0.5rem;
  color: $second-text-color;

  .history-item {
    cursor: pointer;

    &:hover {
      color: $text-color;
    }

    &.active {
      color: black;
    }
  }
}
</style>
