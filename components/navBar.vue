<template>
  <header class="navbar" :class="{ sticky: isSticky }">
    <div class="navbar-top" v-show="isShow">
      <p>
        Зарегистрируйтесь и получите скидку 20% на первый заказ.

        <a href="#" class="signup-link">Зарегистрироваться</a>
      </p>

      <button class="close-btn" @click="toggleShow">✕</button>
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
          <Icon name="tabler:search" class="search-icon" />

          <input
            type="text"
            placeholder="Search for products..."
            class="search-input" />
        </div>
      </div>

      <div class="navbar-actions">
        <Icon name="mdi:cart-outline" class="icon-btn" />

        <Icon name="mingcute:user-4-line" class="icon-btn" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

let isShow = ref(true);
const isSticky = ref(false);

const toggleShow = () => {
  isShow.value = !isShow.value;
};

const handleScroll = () => {
  isSticky.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

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
          width: 24px;
          height: 24px;
          left: 1rem;
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
        color: black;
        width: 24px;
        height: 24px;
        cursor: pointer;

        &:hover {
          color: gray;
        }
      }
    }
  }
}

.navbar.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
