<template>
  <section class="container">
    <div class="section__title">
      <h3 class="section__title-text">Наши довольные покупатели</h3>
      <div class="section__title-arrow">
        <Icon name="tabler:arrow-left" class="arrow-icon" @click="prevSlide" />
        <Icon name="tabler:arrow-right" class="arrow-icon" @click="nextSlide" />
      </div>
    </div>

    <div class="customer__slider">
      <div class="customer__track" :style="trackStyle">
        <div
          v-for="(customer, index) in customers"
          :key="index"
          class="customer__card"
          :class="{ 'customer__card--blurred': !isCardVisible(index) }">
          <customers-card :name="customer.name" :text="customer.text" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const customers = ref([
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Emily R.",
    text: "Great store with amazing quality products! Highly recommend.",
  },
  {
    name: "Michael T.",
    text: "Excellent service and unique designs. A true gem for shopping.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "Michael T.",
    text: "Excellent service and unique designs. A true gem for shopping.",
  },
]);

const currentSlide = ref(0);
const visibleCount = 3;

const trackStyle = computed(() => {
  return {
    transform: `translateX(-${currentSlide.value * (100 / visibleCount)}%)`,
  };
});

const isCardVisible = (index) => {
  return (
    index >= currentSlide.value && index < currentSlide.value + visibleCount
  );
};

const prevSlide = () => {
  currentSlide.value = Math.max(currentSlide.value - visibleCount, 0);
};

const nextSlide = () => {
  currentSlide.value = Math.min(
    currentSlide.value + visibleCount,
    customers.value.length - visibleCount
  );
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: white;

  .section__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 5rem;
    margin-bottom: 1rem;

    .section__title-text {
      font-size: 40px;
      font-weight: bold;
    }

    .section__title-arrow {
      display: flex;
      gap: 0.5rem;

      .arrow-icon {
        cursor: pointer;
        font-size: 1.5rem;
      }
    }
  }

  .customer__slider {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 5rem;

    .customer__track {
      display: flex;
      transition: transform 0.5s ease;
      width: 100%;
    }

    .customer__card {
      display: flex;
      justify-content: space-around;
      flex: 0 0 calc(100% / 3);
      margin-bottom: 1rem;
      transition: all 0.5s ease;
      opacity: 1;
      transform: scale(1);

      &--blurred {
        opacity: 0.5;
        filter: blur(5px);
        transform: scale(0.9);
      }
    }
  }
}
</style>
