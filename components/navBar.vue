<template>
  <section class="navbar" :class="{ sticky: isSticky }">
    <div class="navbar-top" v-show="isShow">
      <p>
        Зарегистрируйтесь и получите скидку 20% на первый заказ.
        <a class="signup-link" @click="goToPage">Зарегистрироваться</a>
      </p>
      <button class="close-btn" @click="toggleShow">✕</button>
    </div>

    <div class="navbar-main">
      <div class="navbar-logo">
        <Icon
          name="mingcute:menu-fill"
          width="24"
          height="24"
          style="color: #000"
          class="menu-icon" />
        <h1 @click="goToHome">SHOP.JPK</h1>
      </div>

      <div class="navbar-main__section">
        <nav class="navbar-links">
          <div
            class="dropdown"
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false">
            <a href="#" style="display: flex; align-items: center; gap: 5px">
              Магазин
              <Icon name="oui:arrow-down" width="16" height="16" />
            </a>
            <ul class="dropdown-menu" v-show="showDropdown">
              <li><a href="/category">Одежда</a></li>
              <li><a href="/category">Обувь</a></li>
              <li><a href="/category">Аксессуары</a></li>
              <li><a href="/category">Электроника</a></li>
            </ul>
          </div>

          <a href="#">В продаже</a>
          <a href="#">Новые поступления</a>
          <a href="#">Бренды</a>
        </nav>

        <div class="search-container">
          <Icon name="tabler:search" class="search-icon" />
          <input
            type="text"
            placeholder="Поиск товаров..."
            class="search-input" />
        </div>
      </div>

      <div class="navbar-actions">
        <Icon name="tabler:search" class="mob-search-icon" />
        <Icon name="mdi:cart-outline" class="icon-btn" @click="goToCart" />
        <Icon
          name="mingcute:user-4-line"
          class="icon-btn"
          @click="goToProfile" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

let isShow = ref(true);
const isSticky = ref(false);
const showDropdown = ref(false);
const isSearchVisible = ref(false);

const goToPage = () => {
  window.location.href = "/auth";
};

const goToHome = () => {
  window.location.href = "/";
};

const goToCart = () => {
  window.location.href = "/cart";
};

const goToProfile = () => {
  window.location.href = "/profile";
};

const toggleSearch = () => {
  isSearchVisible.value = !isSearchVisible.value;
};

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

    @media screen and (max-width: 1000px) {
      padding: 5px 0.5rem;

      p {
        font-size: 12px;
      }
    }

    .signup-link {
      color: white;
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: $second-text-color;
      }
    }

    .close-btn {
      background: none;
      border: none;
      color: white;
      font-size: 16px;
      position: absolute;
      right: 5rem;
      cursor: pointer;

      @media screen and (max-width: 1000px) {
        font-size: 12px;
        right: 0.5rem;
      }
    }
  }

  .navbar-main {
    display: flex;
    align-items: center;
    padding: 15px 5rem;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    gap: 3rem;

    @media screen and (max-width: 1000px) {
      padding: 15px 2rem;
      gap: 1rem;
    }

    @media screen and (max-width: 768px) {
      padding: 15px 1rem;
      gap: 1rem;
    }

    .navbar-logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 24px;
      font-weight: bold;

      .menu-icon {
        display: none;

        @media screen and (max-width: 1000px) {
          display: block;
          color: black;
          width: 24px;
          height: 24px;
          cursor: pointer;

          &:hover {
            color: gray;
          }
        }
      }

      h1 {
        cursor: pointer;
      }
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
        gap: 2rem;

        .dropdown {
          position: relative;

          .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 10px 0;
            list-style: none;
            min-width: 150px;

            li {
              margin: 0;

              a {
                display: block;
                padding: 8px 15px;
                text-decoration: none;
                color: black;
                transition: color 0.3s;

                &:hover {
                  background-color: #f3f3f3;
                  color: gray;
                }
              }
            }
          }
        }

        a {
          text-decoration: none;
          color: black;
          font-size: 16px;
          transition: color 0.3s;

          &:hover {
            color: gray;
          }
        }

        @media screen and (max-width: 1000px) {
          display: none;
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

        @media screen and (max-width: 1200px) {
          display: none;
        }
      }
    }

    .navbar-actions {
      display: flex;
      align-items: center;
      gap: 15px;

      .mob-search-icon {
        display: none;

        @media screen and (max-width: 1200px) {
          display: block;
          color: black;
          width: 24px;
          height: 24px;
          cursor: pointer;

          &:hover {
            color: gray;
          }
        }
      }

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

@media screen and (max-width: 1200px) {
  .search-container {
    display: none;
  }

  .search-icon-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background: transparent;
    border: none;
    color: black;

    &:hover {
      color: gray;
    }
  }
}
</style>
