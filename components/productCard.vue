<template>
  <div class="card">
    <div class="card__info__discont">
      <h5 class="card__info__discont-text">-50%</h5>
    </div>

    <div class="card__info__wishlist">
      <Icon name="mdi:heart-outline" class="card__info__wishlist-icon" />
    </div>

    <div class="card__product__img" @click="goToProductPage">
      <img class="card__img" src="/assets/image/model.jpg" alt="Product Card" />
    </div>

    <div class="card__info">
      <div class="card__info-container">
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

          <span class="rating-value">
            4.5/<span class="rating-value-top">5</span>
          </span>

          <span class="rewievs-value"> 992 оценки </span>
        </div>

        <div class="card__info-price__container">
          <h3 class="card__info__price">$120</h3>

          <h3 class="card__info__price-discont">$240</h3>
        </div>
      </div>
    </div>

    <div class="card__info__cart-icon__container">
      <Icon name="mdi:cart-outline" class="card__info__cart-icon" />
      добавить в карзину
    </div>
  </div>
</template>

<script setup>
const goToProductPage = () => {
  window.location.href = "/product";
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 286px;
  height: 432px;
  background-color: transparent;

  .card__info__discont {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 25px;
    border-radius: 2rem;
    background-color: black;
    margin: 0.5rem;

    .card__info__discont-text {
      color: white;
    }
  }

  .card__info__wishlist {
    position: absolute;
    align-self: flex-end;
    margin: 0.5rem;

    .card__info__wishlist-icon {
      width: 28px;
      height: 28px;
      color: white;

      &:hover {
        color: red;
        cursor: pointer;
      }
    }
  }

  .card__product__img {
    width: 100%;
    height: 360px;
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

  .card__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .card__info-container {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      margin-top: 0.5rem;

      .card__info-title {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 20px;
        color: $text-color;
      }

      .card__info-stars {
        display: flex;
        align-items: center;
        font-size: 0.8rem;

        .rating-value {
          color: $text-color;
          margin-left: 8px;

          .rating-value-top {
            color: $second-text-color;
          }
        }

        .stars {
          .star {
            color: #ffc107;
          }
        }

        .rewievs-value {
          color: $second-text-color;
          margin-left: 8px;
        }
      }

      .card__info-price__container {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .card__info__price {
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
          font-size: 1.3rem;
          color: $text-color;
        }

        .card__info__price-discont {
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
          font-size: 1.3rem;
          text-decoration: line-through;
          color: $second-text-color;
        }

        .card__info__discont {
          position: absolute;
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

  .card__info__cart-icon__container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 0.5rem;
    border: 1px solid $text-color;
    width: 100%;
    margin-top: 0.5rem;
    color: $text-color;
    cursor: pointer;

    .card__info__cart-icon {
      font-size: 1rem;
      cursor: pointer;
    }

    &:hover {
      background-color: $text-color;
      color: $background-color-light;
    }
  }
}
</style>
