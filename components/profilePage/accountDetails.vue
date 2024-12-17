<template>
  <div class="details__section">
    <h3 class="details__section__header">Account Details</h3>

    <div class="details__section__items">
      <div class="details__section__img">
        <img src="/assets/image/model.jpg" alt="" />
      </div>

      <div class="details__section__item">
        <p>Full name</p>

        <input type="text" class="input" />
      </div>

      <div class="details__section__item">
        <p>Email</p>

        <input type="text" class="input" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.details__section {
  flex: 1;

  .details__section__header {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #333;
  }

  .details__section__items {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.5rem;
    width: 50%;

    .details__section__item {
      padding: 1rem;

      .input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
      }
    }

    .details__section__img {
      img {
        margin: 1rem;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
}
</style>
