<template>
  <div class="empty__section">
    <Icon name="game-icons:cardboard-box" class="empty__section__icon" />
    <h3 class="empty__section__header">Твоя история заказов пуста</h3>
  </div>
</template>

<style lang="scss" scoped>
.empty__section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .empty__section__icon {
    font-size: 5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }

  .empty__section__header {
    font-size: 1.5rem;
    color: #333;
  }
}
</style>
