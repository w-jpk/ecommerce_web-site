<template>
  <div class="cart__item">
    <img :src="image" :alt="title" class="cart__item-img" />

    <div class="cart__item-info__container">
      <div class="cart__item-info">
        <h4 class="cart__item-info-title">{{ title }}</h4>

        <div class="cart__item-info-container">
          <div class="cart__item-info-stars">
            <span>Size: {{ size }}</span>
            <span>Color: {{ color }}</span>
          </div>
        </div>

        <div class="cart__item-info-price__container">
          <p class="cart__item-info-price">{{ price }}</p>
        </div>
      </div>

      <div class="cart__item-info-actions__container">
        <Icon name="material-symbols:delete" class="delete" @click="onDelete" />

        <div class="quantity-selector">
          <Icon name="ic:round-minus" class="icon" @click="decrementQuantity" />
          <span>{{ quantity }}</span>
          <Icon name="ic:round-add" class="icon" @click="incrementQuantity" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

defineProps({
  image: String,
  title: String,
  size: String,
  color: String,
  price: String,
  quantity: Number,
});

const emits = defineEmits(["update:quantity", "delete-item"]);

const quantity = ref(1);

const incrementQuantity = () => {
  emits("update:quantity", quantity + 1);
};

const decrementQuantity = () => {
  if (quantity > 1) {
    emits("update:quantity", quantity - 1);
  }
};

const onDelete = () => {
  emits("delete-item");
};
</script>

<style lang="scss" scoped>
.cart__item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}

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
}

.cart__item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.cart__item-info-title {
  font-size: 20px;
  font-weight: bold;
}

.cart__item-info-container {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.cart__item-info-price__container {
  gap: 0.5rem;
}

.cart__item-info-price {
  font-size: 20px;
  font-weight: bold;
}

.cart__item-info-actions__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

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
  background-color: #f3f3f3;
  padding: 0.7rem 1.5rem;
  gap: 1.5rem;
}

.icon {
  cursor: pointer;
  font-size: 1.5rem;
}
</style>
