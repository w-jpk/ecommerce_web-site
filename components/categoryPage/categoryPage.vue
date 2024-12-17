<template>
  <section id="category-container">
    <div class="category-container__filters">
      <div class="category-container__filters-header">
        <h3>Фильтры</h3>

        <Icon name="lets-icons:filter" class="icon" />
      </div>

      <div class="border"></div>

      <div class="category-container__filters-category">
        <div class="category-container__filters-category-item">
          <p>Все</p>

          <Icon name="weui:arrow-filled" width="12" height="24" class="icon" />
        </div>

        <div class="category-container__filters-category-item">
          <p>Платья</p>

          <Icon name="weui:arrow-filled" width="12" height="24" class="icon" />
        </div>

        <div class="category-container__filters-category-item">
          <p>Юбки</p>

          <Icon name="weui:arrow-filled" width="12" height="24" class="icon" />
        </div>

        <div class="category-container__filters-category-item">
          <p>Блузки</p>

          <Icon name="weui:arrow-filled" width="12" height="24" class="icon" />
        </div>
      </div>

      <div class="border"></div>

      <div class="category-container__filters-item">
        <div class="category-container__filters-item__header">
          <p>Цена</p>

          <Icon name="weui:arrow-filled" width="12" height="24" class="icon" />
        </div>

        <div class="category-container__filters-price__range">
          <input
            type="range"
            min="0"
            max="100"
            value="20"
            class="price__range price__range-min" />

          <input
            type="range"
            min="0"
            max="100"
            value="80"
            class="price__range price__range-max" />

          <div class="price__range-values">
            <span class="price__min-value">$0</span>

            <span class="price__current-values">$20 - $80</span>

            <span class="price__max-value">$100</span>
          </div>
        </div>
      </div>

      <div class="border"></div>

      <div class="category-container__filters-item">
        <div class="category-container__filters-item__header">
          <p>Цвет</p>

          <Icon name="weui:arrow-filled" width="12" height="24" class="icon" />
        </div>

        <div class="category-container__filters-colors">
          <div class="category-container__filters-colors-item blue"></div>

          <div class="category-container__filters-colors-item red"></div>

          <div class="category-container__filters-colors-item green"></div>

          <div class="category-container__filters-colors-item yellow"></div>

          <div class="category-container__filters-colors-item black"></div>

          <div class="category-container__filters-colors-item white"></div>

          <div class="category-container__filters-colors-item orange">
            <Icon
              name="fluent:checkmark-12-filled"
              width="12"
              height="12"
              class="check-icon" />
          </div>

          <div class="category-container__filters-colors-item purple"></div>
        </div>
      </div>

      <div class="border"></div>

      <div class="category-container__filters-item">
        <div class="category-container__filters-item__header">
          <p>Размер</p>

          <Icon name="weui:arrow-filled" width="12" height="24" class="icon" />
        </div>

        <div class="category-container__filters-size">
          <div class="category-container__filters-size-item">XS</div>

          <div class="category-container__filters-size-item">S</div>

          <div class="category-container__filters-size-item active">M</div>

          <div class="category-container__filters-size-item">L</div>

          <div class="category-container__filters-size-item">XL</div>

          <div class="category-container__filters-size-item">XXL</div>

          <div class="category-container__filters-size-item">XXXL</div>
        </div>
      </div>

      <div class="border"></div>

      <div class="category-container__filters-item">
        <div class="category-container__filters-item__header">
          <p>Бренды</p>

          <Icon name="weui:arrow-filled" width="12" height="24" class="icon" />
        </div>

        <div class="category-container__filters-brands">
          <div class="category-container__filters-brands-item">
            <input type="checkbox" /> ZARA
          </div>

          <div class="category-container__filters-brands-item">
            <input type="checkbox" /> GUCCI
          </div>

          <div class="category-container__filters-brands-item">
            <input type="checkbox" /> VERSACE
          </div>

          <div class="category-container__filters-brands-item">
            <input type="checkbox" /> PRADA
          </div>

          <div class="category-container__filters-brands-item">
            <input type="checkbox" /> FENDI
          </div>

          <div class="category-container__filters-brands-item">
            <input type="checkbox" /> DIOR
          </div>
        </div>
      </div>

      <div class="border"></div>

      <div class="category-container__filters-item">
        <div class="category-container__filters-item__header">
          <p>Стиль Одежды</p>

          <Icon name="weui:arrow-filled" width="12" height="24" class="icon" />
        </div>

        <div class="category-container__filters-category">
          <div class="category-container__filters-category-item">
            <p>Все</p>

            <Icon
              name="weui:arrow-filled"
              width="12"
              height="24"
              class="icon" />
          </div>

          <div class="category-container__filters-category-item">
            <p>Повседневный</p>

            <Icon
              name="weui:arrow-filled"
              width="12"
              height="24"
              class="icon" />
          </div>

          <div class="category-container__filters-category-item">
            <p>Официальный</p>

            <Icon
              name="weui:arrow-filled"
              width="12"
              height="24"
              class="icon" />
          </div>

          <div class="category-container__filters-category-item">
            <p>Вечеринка</p>

            <Icon
              name="weui:arrow-filled"
              width="12"
              height="24"
              class="icon" />
          </div>

          <div class="category-container__filters-category-item">
            <p>Спортивный</p>

            <Icon
              name="weui:arrow-filled"
              width="12"
              height="24"
              class="icon" />
          </div>
        </div>
      </div>

      <button class="category-container__filters-button">
        Применить фильтры
      </button>
    </div>

    <div class="category-container__products">
      <div class="category-container__products-header">
        <h3>Результаты</h3>

        <div class="category-container__products-header__sort">
          <p>Показаны 1-10 из 100 продуктов</p>

          <div class="category-container__products-header__sort-item">
            <p>Сортировать по</p>

            <p class="category-container__products-header__sort-item-active">
              Популярности
              <Icon
                name="weui:arrow-filled"
                width="12"
                height="24"
                class="icon" />
            </p>
          </div>
        </div>
      </div>

      <div class="category-container__products-item">
        <div v-for="i in 12" :key="i">
          <product-card />
        </div>
      </div>

      <div class="border"></div>

      <div class="category-container__products-pagination">
        <div class="category-container__products-pagination__arrow">
          <Icon name="mdi:arrow-left" class="icon" />

          <p>Предыдущая</p>
        </div>

        <div class="category-container__products-pagination-item">
          <p class="item active">1</p>
          <p class="item">2</p>
          <p class="item">3</p>
          <p class="item">...</p>
          <p class="item">8</p>
          <p class="item">9</p>
          <p class="item">10</p>
        </div>

        <div class="category-container__products-pagination__arrow">
          <p>Следующая</p>

          <Icon name="mdi:arrow-right" class="icon" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const minRange = ref(20);
const maxRange = ref(80);

const updateRange = () => {
  if (minRange.value > maxRange.value) {
    minRange.value = maxRange.value;
  }
};
</script>

<style lang="scss" scoped>
#category-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  gap: 2rem;

  .category-container__filters {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 400px;
    min-height: 500px;
    border-radius: 1rem;
    border: 1px solid $border-color;
    align-self: start;

    .category-container__filters-header {
      display: flex;
      justify-content: space-between;

      .icon {
        color: $second-text-color;
        width: 24px;
        height: 24px;
      }
    }

    .category-container__filters-category {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .category-container__filters-category-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $second-text-color;
        font-size: 14px;
      }
    }

    .category-container__filters-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .category-container__filters-item__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 15px;

        .icon {
          transform: rotate(-90deg);
          transition: transform 0.3s ease;

          &:hover {
            transform: rotate(90deg);
          }
        }
      }
    }

    .category-container__filters-price__range {
      position: relative;

      .price__range {
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
        height: 8px;
        background: #dcdcdc;
        border-radius: 5px;
        outline: none;
        transition: background 0.3s ease;

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: #3498db;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        &::-webkit-slider-runnable-track {
          background: #dcdcdc;
          height: 8px;
          border-radius: 5px;
        }

        &::-webkit-slider-thumb:hover {
          background: #2980b9;
        }
      }

      .price__range-values {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        font-size: 14px;

        .price__min-value,
        .price__max-value {
          color: #777;
        }

        .price__current-values {
          color: #3498db;
          font-weight: bold;
        }

        .price__range:focus {
          background: #3498db;
        }
      }
    }

    .category-container__filters-colors {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .category-container__filters-colors-item {
        width: 37px;
        height: 37px;
        border-radius: 50%;
        border: 1px solid $border-color;
        cursor: pointer;

        &.blue {
          background-color: #3498db;
        }

        &.red {
          background-color: #ff1900;
        }

        &.green {
          background-color: #00ff00;
        }

        &.yellow {
          background-color: #ffff00;
        }

        &.black {
          background-color: #000;
        }

        &.white {
          background-color: #fff;
        }

        &.gray {
          background-color: #808080;
        }

        &.orange {
          position: relative;
          background-color: #ffa500;
          border: 2px solid rgba(0, 0, 0, 0.2);

          .check-icon {
            color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        &.purple {
          background-color: #800080;
        }
      }
    }

    .category-container__filters-size {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .category-container__filters-size-item {
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        border: 1px solid $border-color;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;

        &.active {
          background-color: black;
          color: #fff;
          border: none;
        }
      }
    }

    .category-container__filters-brands {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .category-container__filters-brands-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;

        input {
          cursor: pointer;
        }
      }
    }

    .category-container__filters-button {
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      border: 1px solid $border-color;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      background-color: black;
      color: #fff;
      border: none;
      margin-top: 1rem;
    }
  }

  .border {
    width: 100%;
    height: 1px;
    background-color: $border-color;
    margin: 1rem 0;
  }

  .category-container__products {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 1rem;

    .category-container__products-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .category-container__products-header__sort {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: $second-text-color;

      .category-container__products-header__sort-item {
        display: flex;
        align-items: center;
        gap: 0.2rem;

        .category-container__products-header__sort-item-active {
          color: $text-color;
          display: flex;
          align-items: center;
          gap: 0.2rem;

          .icon {
            transform: rotate(90deg);
          }
        }
      }
    }

    .category-container__products-item {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .category-container__products-pagination {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;

      .category-container__products-pagination__arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        border: 1px solid $border-color;
        cursor: pointer;
        gap: 0.5rem;
      }

      .category-container__products-pagination-item {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .item {
          padding: 0.7rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          font-weight: bold;
          background-color: transparent;
          color: $second-text-color;
          border: none;

          &.active {
            background-color: $background-color-light;
            color: $text-color;
          }
        }
      }
    }
  }
}
</style>
