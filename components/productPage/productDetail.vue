<template>
  <section class="product-details">
    <div class="product-gallery">
      <div class="gallery-thumbnails">
        <img
          v-for="(img, index) in product.images"
          :key="index"
          :src="img"
          alt="Thumbnail"
          :class="{ active: selectedImage === img }"
          @click="selectedImage = img" />
      </div>

      <div class="main-image">
        <img :src="selectedImage" alt="Selected Product" />
      </div>
    </div>

    <div class="product-info">
      <div class="product-header">
        <h1 class="product-title">{{ product.title }}</h1>

        <Icon
          name="mdi:heart-outline"
          class="wishlist"
          v-if="!isWishlisted"
          @click="togleWish" />

        <Icon
          name="mdi:heart"
          class="wishlist filled"
          v-if="isWishlisted"
          @click="togleWish" />
      </div>

      <div class="rating">
        <span class="stars">
          <Icon
            name="mdi:star"
            v-for="star in 4"
            :key="star"
            class="star filled" />

          <Icon name="mdi:star-half-full" class="star half" />
        </span>

        <span class="rating-score">{{ product.rating }} / 5</span>
      </div>

      <div class="product-price">
        <span class="current-price">${{ product.price }}</span>

        <span class="original-price">${{ product.originalPrice }}</span>

        <span class="discount">-{{ product.discount }}%</span>
      </div>

      <p class="product-description">{{ product.description }}</p>

      <div class="border__section"></div>

      <div class="product-colors">
        <p>Select Colors</p>

        <div class="container-circle">
          <span
            v-for="(color, index) in product.colors"
            :key="index"
            class="color-circle"
            :style="{ backgroundColor: color }"
            :class="{ selected: selectedColor === color }"
            @click="selectedColor = color">
            <Icon
              v-if="selectedColor === color"
              name="fluent:checkmark-12-filled"
              width="12"
              height="12"
              class="check-icon" />
          </span>
        </div>
      </div>

      <div class="border__section"></div>

      <div class="product-sizes">
        <p>Choose Size</p>

        <div class="sizes">
          <button
            v-for="size in product.sizes"
            :key="size"
            @click="selectedSize = size"
            :class="{ selected: selectedSize === size }">
            {{ size }}
          </button>
        </div>
      </div>

      <div class="border__section"></div>

      <div class="product-actions">
        <div class="quantity-selector">
          <Icon name="ic:round-minus" class="icon" @click="decrementQuantity" />

          <span>{{ quantity }}</span>

          <Icon name="ic:round-add" class="icon" @click="incrementQuantity" />
        </div>

        <button class="add-to-cart">Добавить в корзину</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import image1 from "~/assets/image/dress (1).jpg";
import image2 from "~/assets/image/dress (2).jpg";
import image3 from "~/assets/image/dress (3).jpg";

const isWishlisted = ref(false);

const togleWish = () => {
  isWishlisted.value = !isWishlisted.value;
};

const product = {
  title: "Платье лапша в обтяг с разрезом трикотажное длинное",
  rating: 4.5,
  price: 180,
  originalPrice: 300,
  discount: 40,
  description:
    "Платье трикотажное женское с разрезом, станет незаменимым элементом гардероба любой модной женщины. Оно теплое и стильное, изготовлено из высококачественного трикотажного материала, обеспечивая вам комфорт в прохладные осенние дни. ",
  colors: ["#d6c1ac", "#fff", "#000"],
  sizes: ["S", "M", "L", "XL"],
  images: [image1, image2, image3],
};

const selectedImage = ref(product.images[0]);
const selectedColor = ref(product.colors[0]);
const selectedSize = ref(product.sizes[0]);
const quantity = ref(1);

const incrementQuantity = () => {
  quantity.value++;
};

const decrementQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};
</script>

<style lang="scss" scoped>
.product-details {
  display: flex;
  gap: 2rem;
  padding: 2rem 5rem;

  .product-gallery {
    display: flex;
    gap: 1rem;

    .gallery-thumbnails {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      img {
        width: 152px;
        height: 167px;
        object-fit: cover;
        cursor: pointer;
        border: 2px solid transparent;
        border-radius: 1.5rem;

        &.active {
          border-color: #000;
        }
      }
    }

    .main-image {
      img {
        width: 444px;
        height: 530px;
        object-fit: cover;
        border-radius: 1.5rem;
      }
    }
  }

  .product-info {
    width: 100%;

    .product-header {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .product-title {
        font-family: "Integral CF", sans-serif;
        font-size: 2rem;
        font-weight: bold;
      }

      .wishlist {
        font-size: 2rem;
        cursor: pointer;
      }

      .filled {
        color: red;
      }
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 1rem 0;

      .stars {
        display: flex;

        .star {
          color: #ffc107;
          font-size: 1.2rem;
        }
      }
    }

    .product-price {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 1rem 0;

      .current-price {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 26px;
        font-weight: bold;
        color: $text-color;
      }

      .original-price {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 26px;
        text-decoration: line-through;
        color: $second-text-color;
      }

      .discount {
        background-color: $discont-color-dim;
        color: $discont-color;
        padding: 0.2rem 0.5rem;
        border-radius: 2rem;
      }
    }

    .product-description {
      color: $second-text-color;
    }

    .product-colors {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      p {
        color: $second-text-color;
        font-size: 14px;
      }

      .container-circle {
        display: flex;
        gap: 1rem;

        .color-circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          &.selected {
            border: 2px solid rgba(0, 0, 0, 0.2);
          }

          .check-icon {
            color: #fff;
            position: absolute;
          }
        }
      }
    }

    .product-sizes {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      p {
        color: $second-text-color;
        font-size: 14px;
      }

      .sizes {
        display: flex;
        gap: 1rem;

        button {
          border: none;
          border-radius: 2rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          background: $background-color-light;
          transition: all 0.2s;
          color: $second-text-color;

          &.selected {
            background-color: #000;
            color: #fff;
          }
        }
      }
    }

    .product-actions {
      display: flex;
      align-items: center;
      gap: 1rem;

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

        button {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: $background-color-light;
          border: 1px solid $second-text-color;
          cursor: pointer;
        }
      }

      .add-to-cart {
        background-color: #000;
        color: #fff;
        padding: 0.7rem 1.5rem;
        font-size: 1rem;
        border: none;
        border-radius: 2rem;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          background-color: white;
          color: $text-color;
          border: 1px solid $text-color;
        }
      }
    }

    .border__section {
      display: flex;
      width: 100%;
      height: 0.8px;
      background-color: $border-color;
      margin: 1.5rem 0;
    }
  }
}
</style>
