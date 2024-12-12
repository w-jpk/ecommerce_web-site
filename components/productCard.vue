<template>
  <div class="card">
    <div class="card__product__img">
      <img
        class="card__img"
        src="/assets/image/product.png"
        alt="Product Card" />
    </div>

    <div class="card__info">
      <h4 class="card__info-title">Product Name</h4>

      <div class="card__info-stars">
        <span class="star full"></span>

        <span class="star full"></span>

        <span class="star full"></span>

        <span class="star half"></span>

        <span class="star empty"></span>

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

      .star {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 4px;
        background-size: contain;
        background-repeat: no-repeat;

        &.full {
          background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffc107"><path d="M12 .587l3.668 7.428 8.18 1.179-5.897 5.747 1.391 8.102L12 18.897l-7.342 3.866 1.391-8.102L.152 9.194l8.18-1.179z"/></svg>');
        }

        &.half {
          background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M22.543 9.771L15.54 8.707 12 2l-3.54 6.707-7.003 1.064 5.062 4.914-1.194 6.958L12 17.813l6.676 3.504-1.194-6.958 5.062-4.914z" fill="%23e0e0e0"/><path d="M12 3.75v12.697l5.703 3.006-1.019-5.95 4.3-4.175-5.942-.902L12 3.75z" fill="%23ffc107" transform="scale(-1, 1) translate(-24, 0)"/></svg>');
        }

        &.empty {
          background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23e0e0e0"><path d="M12 .587l3.668 7.428 8.18 1.179-5.897 5.747 1.391 8.102L12 18.897l-7.342 3.866 1.391-8.102L.152 9.194l8.18-1.179z"/></svg>');
        }
      }

      .rating-value {
        font-size: 1rem;
        color: $text-color;
        margin-left: 8px;

        .rating-value-top {
          color: $second-text-color;
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
