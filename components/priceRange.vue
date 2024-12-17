<template>
  <div class="range-slider">
    <!-- Привязка ref к элементам -->
    <input
      type="range"
      ref="rangeMin"
      min="0"
      max="200"
      v-model="minValue"
      step="1"
      @input="updateSlider" />
    <input
      type="range"
      ref="rangeMax"
      min="0"
      max="200"
      v-model="maxValue"
      step="1"
      @input="updateSlider" />
    <div class="slider-track" ref="sliderTrack"></div>
    <div class="range-values">
      <span>{{ `$${minValue}` }}</span>
      <span>{{ `$${maxValue}` }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const rangeMin = ref(null); // Ссылка на первый input
const rangeMax = ref(null); // Ссылка на второй input
const sliderTrack = ref(null); // Ссылка на полосу трека

const minValue = ref(50); // Начальное значение для минимального ползунка
const maxValue = ref(200); // Начальное значение для максимального ползунка

const minGap = 10; // Минимальный разрыв между значениями
const sliderMaxValue = 200; // Максимальное значение ползунка

// Обновляем трек и значения
function updateSlider() {
  if (maxValue.value - minValue.value < minGap) {
    if (event.target === rangeMin.value) {
      minValue.value = maxValue.value - minGap;
    } else {
      maxValue.value = minValue.value + minGap;
    }
  } else {
    const percentMin = (minValue.value / sliderMaxValue) * 100;
    const percentMax = (maxValue.value / sliderMaxValue) * 100;

    // Обновляем стили трека
    sliderTrack.value.style.left = percentMin + "%";
    sliderTrack.value.style.width = percentMax - percentMin + "%";
  }
}

// Инициализация
onMounted(() => {
  updateSlider();
});
</script>

<style lang="scss" scoped>
.range-slider {
  position: relative;
  width: 300px;
  margin: 50px auto;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  background: #e5e5e5;
  outline: none;
  border-radius: 5px;
  position: absolute;
  pointer-events: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: all;
}

.slider-track {
  position: absolute;
  height: 8px;
  background: black;
  top: 0;
  border-radius: 5px;
  z-index: 1;
}

.range-values {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
}
</style>
