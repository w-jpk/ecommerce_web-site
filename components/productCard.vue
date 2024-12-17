<template>
  <div class="card">
    <div class="card__product__img">
      <img class="card__img" src="/assets/image/model.jpg" alt="Product Card" />
    </div>

    <div class="card__info">
      <h4 class="card__info-title">Product Name</h4>

      <div class="card__info-stars">
        <span class="stars">
          <Icon
            name="mdi:star"
            v-for="star in 4"
            :key="star"
            class="star filled" />

          <Icon name="mdi:star-half-full" class="star half" />
        </span>

        <span class="rating-value"
          >4.5/<span class="rating-value-top">5</span></span
        >
      </div>

      <div class="card__info-price__container">
        <h3 class="card__info__price">$120</h3>

        <h3 class="card__info__price-discont">$120</h3>

        <div class="card__info__discont">
          <h5 class="card__info__discont-text">-30%</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  height: 400px;
  background-color: transparent;

  .card__product__img {
    width: 295px;
    height: 298px;
    cursor: pointer;
    overflow: hidden;

    .card__img {
      border-radius: 1rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  &:hover {
    .card__img {
      transform: scale(1.1);
    }
  }

  .card__info {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin-top: 0.8rem;

    .card__info-title {
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      font-size: 20px;
      color: $text-color;
    }

    .card__info-stars {
      display: flex;
      align-items: center;

      .rating-value {
        font-size: 1rem;
        color: $text-color;
        margin-left: 8px;

        .rating-value-top {
          color: $second-text-color;
        }
      }

      .stars {
        display: flex;

        .star {
          color: #ffc107;
          font-size: 1.2rem;
        }
      }
    }

    .card__info-price__container {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .card__info__price {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 26px;
        color: $text-color;
      }

      .card__info__price-discont {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 26px;
        text-decoration: line-through;
        color: $second-text-color;
      }

      .card__info__discont {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 25px;
        border-radius: 2rem;
        background-color: $discont-color-dim;

        .card__info__discont-text {
          color: $discont-color;
        }
      }
    }
  }
}
</style>
