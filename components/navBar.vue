<template>
  <header class="navbar">
    <div class="navbar-top">
      <p>
        Зарегистрируйтесь и получите скидку 20% на первый заказ.

        <a href="#" class="signup-link">Зарегистрироваться</a>
      </p>

      <button class="close-btn">✕</button>
    </div>

    <div class="navbar-main">
      <div class="navbar-logo">
        <h1>SHOP.JPK</h1>
      </div>

      <div class="navbar-main__section">
        <nav class="navbar-links">
          <a href="#">Магазин</a>

          <a href="#">В продаже</a>

          <a href="#">Новые поступления</a>

          <a href="#">Бренды</a>
        </nav>

        <div class="search-container">
          <span class="search-icon">🔍</span>

          <input
            type="text"
            placeholder="Search for products..."
            class="search-input" />
        </div>
      </div>

      <div class="navbar-actions">
        <button class="icon-btn">🛒</button>

        <button class="icon-btn">👤</button>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  font-family: Arial, sans-serif;

  .navbar-top {
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;

    .signup-link {
      color: white;
      text-decoration: underline;
    }

    .close-btn {
      background: none;
      border: none;
      color: white;
      font-size: 16px;
      position: absolute;
      right: 5rem;
      cursor: pointer;
    }
  }

  .navbar-main {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    padding: 15px 5rem;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    gap: 3rem;

    .navbar-logo {
      font-size: 24px;
      font-weight: bold;
    }

    .navbar-main__section {
      display: flex;
      justify-content: space-between;
      width: 100%;
      gap: 3rem;

      .navbar-links {
        display: flex;
        text-wrap: nowrap;
        align-items: center;
        // width: 100%;
        gap: 2rem;
        a {
          text-decoration: none;
          color: black;
          font-size: 16px;
          transition: color 0.3s;

          &:hover {
            color: gray;
          }
        }
      }

      .search-container {
        position: relative;
        display: flex;
        align-items: center;
        background-color: #f3f3f3;
        border-radius: 20px;
        padding: 5px 15px;
        width: 100%;

        .search-icon {
          position: absolute;
          left: 10px;
          font-size: 16px;
          color: gray;
        }

        .search-input {
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
    }

    .navbar-actions {
      display: flex;
      align-items: center;
      gap: 15px;

      .icon-btn {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;

        &:hover {
          color: gray;
        }
      }
    }
  }
}
</style>
