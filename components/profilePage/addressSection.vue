<template>
  <div class="address__section">
    <h3 class="address__section__header">Shipping Address</h3>

    <div class="address__section__orders">
      <div class="address__section__order-item street">
        <p>Street Address</p>

        <input type="text" class="input" />
      </div>

      <div class="address__section__order-item city">
        <p>City</p>

        <input type="text" class="input" />
      </div>

      <div class="address__section__order-item zip">
        <p>Zip Code</p>

        <input type="text" class="input" />
      </div>

      <div class="address__section__order-item country">
        <p>Country</p>

        <input type="text" class="input" />
      </div>

      <div class="address__section__order-item phone-number">
        <p>Phone Number</p>

        <input type="text" class="input" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.address__section {
  flex: 1;

  .address__section__header {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #333;
  }

  .address__section__orders {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    width: 50%;

    .address__section__order-item {
      padding: 1rem;

      .input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
      }
    }

    .street {
      grid-column: span 2;
    }
  }
}
</style>
