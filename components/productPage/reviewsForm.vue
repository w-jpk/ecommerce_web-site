<template>
  <div class="review">
    <div class="review__container">
      <div class="contact">
        <div class="item">
          <p>Your name</p>

          <input type="text" placeholder="Введите ваше имя" />
        </div>

        <div class="item">
          <p>Your email</p>

          <input type="email" placeholder="Введите вашу почту" />
        </div>
      </div>

      <div class="text">
        <textarea class="input" placeholder="Введите ваш комментарий" />
      </div>

      <div class="action">
        <div class="rating">
          <p>Ваша оценка</p>

          <span class="stars">
            <Icon
              name="mdi:star"
              v-for="star in 4"
              :key="star"
              class="star filled" />

            <Icon name="mdi:star-half-full" class="star half" />
          </span>
        </div>

        <button class="btn">Отправить</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.review {
  width: 100%;
  background-color: #f2f2f2;
  border: 1px solid #d3d3d3;
  border-radius: 1rem;
  margin-bottom: 2rem;

  .review__container {
    display: flex;
    flex-direction: column;
    margin: 3rem;

    .contact {
      display: flex;
      align-items: center;
      gap: 5rem;

      .item {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;

        input {
          border: 1px solid gray;
          border-radius: 0.9rem;
          padding: 0.5rem 1rem;
        }
      }
    }

    .text {
      margin-top: 2rem;

      .input {
        width: 100%;
        height: 100px;
        border-radius: 0.9rem;
        border: 1px solid gray;
        padding: 0.5rem 1rem;
        resize: none;
      }
    }

    .action {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;

      .rating {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
}
</style>
