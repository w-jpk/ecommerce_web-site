<template>
  <section id="container">
    <section class="product-charact">
      <h3 class="product-charact__title">Характеристики</h3>

      <div class="product-charact__list">
        <div class="product-charact__main-info">
          <h5 class="product-charact__main-info__title">Основная информация</h5>
          <div class="product-charact__item">
            <p class="product-charact__title-label">Состав</p>

            <p class="product-charact__desc">
              хлопок 70%; эластан 5%; полиэстер 25%
            </p>
          </div>

          <div class="product-charact__item">
            <p class="product-charact__title-label">Цвет</p>

            <p class="product-charact__desc">
              бежевый; бежевый лайт; теплый белый; мягкий белый; молочный
            </p>
          </div>
        </div>

        <div class="product-charact__second-info">
          <h5 class="product-charact__second-info__title">
            Дополнительная информация
          </h5>

          <div class="product-charact__item">
            <p class="product-charact__title-label">Размер на модели</p>

            <p class="product-charact__desc">42-44</p>
          </div>

          <div class="product-charact__item">
            <p class="product-charact__title-label">Рост модели на фото</p>

            <p class="product-charact__desc">170 см</p>
          </div>

          <div class="product-charact__item">
            <p class="product-charact__title-label">
              Параметры модели на фото (ОГ-ОТ-ОБ)
            </p>

            <p class="product-charact__desc">90-60-90</p>
          </div>

          <div class="product-charact__item">
            <p class="product-charact__title-label">Особенности модели</p>

            <p class="product-charact__desc">
              теплое осеннее лапша; с разрезом; длинное
            </p>
          </div>

          <div class="product-charact__item">
            <p class="product-charact__title-label">Материал подкладки</p>

            <p class="product-charact__desc">без подкладки</p>
          </div>

          <div class="product-charact__item">
            <p class="product-charact__title-label">Вид застежки</p>

            <p class="product-charact__desc">без застежки</p>
          </div>

          <div class="product-charact__item">
            <p class="product-charact__title-label">Страна производства</p>

            <p class="product-charact__desc">Турция</p>
          </div>
        </div>
      </div>
    </section>

    <div class="border"></div>

    <div class="product-description">
      <h5 class="product-description__title">Описание</h5>

      <p class="product-description__text">
        Платье трикотажное женское с разрезом, станет незаменимым элементом
        гардероба любой модной женщины. Оно теплое и стильное, изготовлено из
        высококачественного трикотажного материала, обеспечивая вам комфорт в
        прохладные осенние дни. Молочный оттенок платья придаст вашему образу
        изысканности и неповторимого шарма. Платье в рубчик идеально подходит
        для создания офисного стиля и сможет стать прекрасной вариацией
        повседневного наряда. Это демисезонное обтягивающее платье отлично
        сочетается под кеды или ботинками и станет настоящим must-have в вашей
        гардеробной коллекции. А при сочетании с аксессуарами и каблуками оно
        превратится в вечернее, идеально подходящее для особых мероприятий.
        Такая вещь для беременных женщин- позволит вам чувствовать себя
        комфортно и уверенно во время этого волшебного периода. Изготовленное из
        плотного трикотажа, оно обеспечит вам тепло и комфорт даже в холодные
        осенние и зимние дни. Облегающее вязаное зимнее платье миди с длинным
        рукавом – это идеальный выбор на весну или осень для высоких активных и
        модных женщин, которые ценят стиль и комфорт. Оно обязательно привлечет
        внимание окружающих и подчеркнет ваш неповторимый стиль. Добавьте его в
        свою коллекцию одежды уже сегодня и наслаждайтесь его элегантностью и
        изысканностью!
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
#container {
  display: flex;

  .product-charact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .product-charact__title {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .product-charact__list {
      display: grid;
      grid-template-rows: repeat(1fr);
      gap: 0.5rem;

      .product-charact__main-info {
        .product-charact__main-info__title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
      }

      .product-charact__second-info {
        .product-charact__second-info__title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
      }

      .product-charact__item {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        margin-bottom: 0.5rem;

        .product-charact__title-label {
          color: $second-text-color;
          display: flex;
          white-space: nowrap;
          overflow: hidden;

          &::after {
            content: "..................................................................................";
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0 0.2rem;
          }
        }

        .product-charact__desc {
          color: $text-color;
          align-self: flex-end;
        }
      }
    }
  }

  .border {
    max-height: 100vh;
    background-color: $border-color;
    margin-top: 2rem;
    padding: 0 1px;
  }

  .product-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0 1rem;

    .product-description__title {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .product-description__text {
      color: $text-color;
      text-align: justify;
    }
  }
}
</style>
