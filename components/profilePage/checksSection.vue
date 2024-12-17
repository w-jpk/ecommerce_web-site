<template>
  <div class="check__section">
    <h3 class="check__section__header">Checks</h3>

    <div class="check__section__orders">
      <profile-page-check-item />

      <profile-page-check-item />

      <profile-page-check-item />

      <profile-page-check-item />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.check__section {
  flex: 1;

  .check__section__header {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #333;
  }

  .check__section__orders {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
  }
}
</style>
