<template>
  <section id="cart">
    <h3 class="cart__title">Ваша корзина</h3>

    <div class="cart__container">
      <div class="cart__list">
        <div class="cart__item">
          <img
            src="/assets/image/dress (1).jpg"
            alt="Product Card"
            class="cart__item-img" />

          <div class="cart__item-info__container">
            <div class="cart__item-info">
              <h4 class="cart__item-info-title">
                Платье лапша в обтяг с разрезом трикотажное длинное
              </h4>

              <div class="cart__item-info-container">
                <div class="cart__item-info-stars">
                  <span>Size: S (40-42)</span>

                  <span>Color: Бежевый</span>
                </div>
              </div>

              <div class="cart__item-info-price__container">
                <p class="cart__item-info-price">$120</p>
              </div>
            </div>

            <div class="cart__item-info-actions__container">
              <Icon name="material-symbols:delete" class="delete" />

              <div class="quantity-selector">
                <Icon
                  name="ic:round-minus"
                  class="icon"
                  @click="decrementQuantity" />

                <span>{{ quantity }}</span>

                <Icon
                  name="ic:round-add"
                  class="icon"
                  @click="incrementQuantity" />
              </div>
            </div>
          </div>
        </div>

        <div class="border"></div>

        <div class="cart__item">
          <img
            src="/assets/image/dress (2).jpg"
            alt="Product Card"
            class="cart__item-img" />

          <div class="cart__item-info__container">
            <div class="cart__item-info">
              <h4 class="cart__item-info-title">Product Name</h4>

              <div class="cart__item-info-container">
                <div class="cart__item-info-stars">
                  <span>Size: S</span>

                  <span>Color: Black</span>
                </div>
              </div>

              <div class="cart__item-info-price__container">
                <p class="cart__item-info-price">$120</p>
              </div>
            </div>

            <div class="cart__item-info-actions__container">
              <Icon name="material-symbols:delete" class="delete" />

              <div class="quantity-selector">
                <Icon
                  name="ic:round-minus"
                  class="icon"
                  @click="decrementQuantity" />

                <span>{{ quantity }}</span>

                <Icon
                  name="ic:round-add"
                  class="icon"
                  @click="incrementQuantity" />
              </div>
            </div>
          </div>
        </div>

        <div class="border"></div>

        <div class="cart__item">
          <img
            src="/assets/image/dress (3).jpg"
            alt="Product Card"
            class="cart__item-img" />

          <div class="cart__item-info__container">
            <div class="cart__item-info">
              <h4 class="cart__item-info-title">Product Name</h4>

              <div class="cart__item-info-container">
                <div class="cart__item-info-stars">
                  <span>Size: S</span>

                  <span>Color: Black</span>
                </div>
              </div>

              <div class="cart__item-info-price__container">
                <p class="cart__item-info-price">$120</p>
              </div>
            </div>

            <div class="cart__item-info-actions__container">
              <Icon name="material-symbols:delete" class="delete" />

              <div class="quantity-selector">
                <Icon
                  name="ic:round-minus"
                  class="icon"
                  @click="decrementQuantity" />

                <span>{{ quantity }}</span>

                <Icon
                  name="ic:round-add"
                  class="icon"
                  @click="incrementQuantity" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cart__checkout">
        <h4 class="cart__checkout-info-title">Резюме заказа</h4>

        <div class="cart__checkout-info">
          <div class="cart__checkout-info-price">
            <div class="cart__checkout-info-price__item">
              <p class="cart__checkout-info-price__item-title">
                Промежуточный итог
              </p>

              <p class="cart__checkout-info-price__item-price">0 ₽</p>
            </div>

            <div class="cart__checkout-info-price__item">
              <p class="cart__checkout-info-price__item-title">Скидка (-20%)</p>

              <p class="cart__checkout-info-price__item-price discount">-0 ₽</p>
            </div>

            <div class="cart__checkout-info-price__item">
              <p class="cart__checkout-info-price__item-title">Доставка</p>

              <p class="cart__checkout-info-price__item-price">0 ₽</p>
            </div>

            <div class="border"></div>

            <div class="cart__checkout-info-price__item">
              <p class="cart__checkout-info-price__item-title total">Итого</p>

              <p class="cart__checkout-info-price__item-price total">0 ₽</p>
            </div>
          </div>

          <div class="cart__checkout-info-promo">
            <div class="promo-container">
              <Icon name="lsicon:badge-promotion-outline" class="promo-icon" />
              <input
                type="text"
                placeholder="Введите промокод"
                class="promo-input" />
            </div>
            <button class="promo-btn">Принять</button>
          </div>

          <button class="success-btn">
            Оформить заказ <Icon name="maki:arrow" width="24" height="24" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const quantity = ref(1);

const incrementQuantity = () => {
  quantity.value++;
};

const decrementQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};
</script>

<style lang="scss" scoped>
#cart {
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  gap: 3rem;

  .cart__title {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 40px;
    font-weight: bold;
  }

  .cart__container {
    display: flex;
    align-items: flex-start;
    gap: 2rem;

    .cart__list {
      flex: 2;
      display: flex;
      flex-direction: column;
      border: 1px solid $border-color;
      border-radius: 1rem;

      .cart__item {
        display: flex;
        gap: 1rem;
        padding: 1rem;

        .cart__item-img {
          width: 124px;
          height: 124px;
          object-fit: cover;
          border-radius: 1rem;
        }

        .cart__item-info__container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;

          .cart__item-info {
            flex: 1;
            display: flex;
            flex-direction: column;

            .cart__item-info-title {
              font-size: 20px;
              font-weight: bold;
            }

            .cart__item-info-container {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 100%;

              .cart__item-info-stars {
                display: flex;
                flex-direction: column;
                margin-top: 0.2rem;
                gap: 0.2rem;
              }
            }
          }

          .cart__item-info-price__container {
            gap: 0.5rem;

            .cart__item-info-price {
              font-size: 20px;
              font-weight: bold;
            }
          }

          .cart__item-info-actions__container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .delete {
              font-size: 1.5rem;
              color: red;
              align-self: flex-end;
              cursor: pointer;
            }

            .quantity-selector {
              display: flex;
              align-items: center;
              border-radius: 2rem;
              background-color: $background-color-light;
              padding: 0.7rem 1.5rem;
              gap: 1.5rem;

              .icon {
                cursor: pointer;
                font-size: 1.5rem;
                font-weight: bold;
              }
            }
          }
        }
      }
    }

    .border {
      height: 1px;
      background-color: $border-color;
      margin: 0 1rem;
    }

    .cart__checkout {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border: 1px solid $border-color;
      border-radius: 1rem;
      padding: 1rem;

      .cart__checkout-info-title {
        font-size: 20px;
        font-weight: bold;
      }

      .cart__checkout-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .cart__checkout-info-price {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;

          .cart__checkout-info-price__item {
            display: flex;
            justify-content: space-between;

            .cart__checkout-info-price__item-title {
              font-size: 16px;
              color: $second-text-color;
            }

            .cart__checkout-info-price__item-price {
              font-size: 20px;
              font-weight: bold;
              color: $text-color;
            }

            .discount {
              color: $discont-color;
            }

            .total {
              color: $text-color;
              font-size: 26px;
            }
          }
        }
      }

      .cart__checkout-info-promo {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;

        .promo-container {
          position: relative;
          display: flex;
          align-items: center;
          background-color: #f3f3f3;
          border-radius: 20px;
          padding: 5px 15px;
          width: 100%;

          .promo-icon {
            position: absolute;
            width: 24px;
            height: 24px;
            left: 1rem;
            color: gray;
          }

          .promo-input {
            width: 100%;
            padding: 8px 8px 8px 35px;
            border: none;
            outline: none;
            background-color: transparent;
            font-size: 14px;
            color: black;

            &::placeholder {
              color: gray;
            }
          }
        }

        .promo-btn {
          background-color: #000;
          color: #fff;
          padding: 0.7rem 1.5rem;
          font-size: 1rem;
          border: none;
          border-radius: 2rem;
          cursor: pointer;
          transition: color 0.3s;

          &:hover {
            background-color: $background-color-light;
            color: $text-color;
            border: 1px solid $text-color;
          }
        }
      }

      .success-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        background-color: #000;
        color: #fff;
        margin-top: 1rem;
        padding: 0.7rem 1.5rem;
        font-size: 1rem;
        border: none;
        border-radius: 2rem;
        cursor: pointer;
        transition: color 0.3s;
        width: 100%;

        &:hover {
          background-color: $background-color-light;
          color: $text-color;
          border: 1px solid $text-color;
        }
      }
    }
  }
}
</style>
