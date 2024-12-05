<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">
        НАЙДИТЕ ОДЕЖДУ, <br />
        КОТОРАЯ СООТВЕТСТВУЕТ <br />
        ВАШЕМУ СТИЛЮ
      </h1>

      <p class="hero-description">
        Ознакомьтесь с нашим разнообразным ассортиментом тщательно изготовленных
        изделий, призванных подчеркнуть вашу индивидуальность и удовлетворить
        ваше чувство стиля.
      </p>

      <button class="hero-button">Купить сейчас</button>

      <div class="hero-stats">
        <div class="stat-item">
          <p class="stat-number">200+</p>

          <p class="stat-label">Международные Бренды</p>
        </div>

        <div class="stat-divider" />

        <div class="stat-item">
          <p class="stat-number">2,000+</p>

          <p class="stat-label">Высококачественные Товары</p>
        </div>

        <div class="stat-divider" />

        <div class="stat-item">
          <p class="stat-number">30,000+</p>

          <p class="stat-label">Счастливые Покупатели</p>
        </div>
      </div>
    </div>

    <div class="hero-image">
      <img src="/assets/image/model.jpg" alt="Fashion Models" />
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
  padding: 5rem;
  background-color: $background-color;

  .hero-content {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .hero-title {
      font-size: 48px;
      font-weight: 900;
      line-height: 1.2;
      margin-bottom: 20px;
    }

    .hero-description {
      font-size: 16px;
      color: #666;
      margin-bottom: 30px;
    }

    .hero-button {
      align-self: flex-start;
      background-color: black;
      color: white;
      border: none;
      padding: 15px 30px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #333;
      }
    }

    .hero-stats {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;

      .stat-item {
        text-align: center;

        .stat-number {
          font-size: 24px;
          font-weight: 700;
        }

        .stat-label {
          font-size: 14px;
          color: #888;
        }
      }

      .stat-divider {
        width: 1px;
        height: 50px;
        background-color: #ccc;
      }
    }
  }

  .hero-image {
    position: relative;

    img {
      max-width: 450px;
      border-radius: 10px;
    }
  }
}
</style>
