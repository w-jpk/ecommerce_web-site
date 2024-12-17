<template>
  <div class="password__section">
    <h3 class="password__section__header">Password</h3>

    <div class="password__section__items">
      <div class="password__section__item">
        <p>New Password</p>

        <input type="text" class="input" />
      </div>

      <div class="password__section__item">
        <p>Confirm Password</p>

        <input type="text" class="input" />
      </div>

      <div class="password__section__item">
        <button class="success-btn">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.password__section {
  flex: 1;

  .password__section__header {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #333;
  }

  .password__section__items {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.5rem;
    width: 50%;

    .password__section__item {
      padding: 1rem;

      .input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
      }

      .success-btn {
        background-color: #000;
        color: #fff;
        margin-top: 1rem;
        padding: 0.7rem 1.5rem;
        font-size: 1rem;
        border: none;
        border-radius: 2rem;
        cursor: pointer;
        transition: color 0.3s;
      }
    }
  }
}
</style>
