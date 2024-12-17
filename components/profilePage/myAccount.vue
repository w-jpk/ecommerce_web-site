<template>
  <section id="profile">
    <div class="profile__section">
      <div
        v-for="item in items"
        :key="item.id"
        class="profile__section__item"
        :class="{ active: item.id === activeItem }"
        @click="activeItem = item.id">
        <Icon :name="item.icon" class="icon" />

        <p>{{ item.name }}</p>
      </div>
    </div>

    <div class="border"></div>

    <div class="profile__content">
      <profile-page-order-section v-if="activeItem === 1" />
      <profile-page-wishlist-section v-if="activeItem === 2" />
      <profile-page-address-section v-if="activeItem === 3" />
      <profile-page-checks-section v-if="activeItem === 4" />
      <profile-page-password-section v-if="activeItem === 5" />
      <profile-page-account-details v-if="activeItem === 6" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    id: 1,
    name: "Orders",
    icon: "mdi:cart",
  },
  {
    id: 2,
    name: "Wishlist",
    icon: "mdi:heart",
  },
  {
    id: 3,
    name: "Address",
    icon: "mdi:local-shipping",
  },
  {
    id: 4,
    name: "Checks",
    icon: "f7:tickets-fill",
  },
  {
    id: 5,
    name: "Password",
    icon: "mdi:key",
  },
  {
    id: 6,
    name: "Account Detail",
    icon: "mdi:user",
  },
  {
    id: 7,
    name: "Logout",
    icon: "mdi:logout",
  },
]);

const activeItem = ref(1);
</script>

<style lang="scss" scoped>
#profile {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 5rem;
  font-family: Arial, sans-serif;

  .profile__section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 250px;

    .profile__section__item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem;
      cursor: pointer;
      color: #666;
      border-radius: 0.5rem;
      transition: background 0.3s;

      .icon {
        font-size: 1.5rem;
      }

      &:hover,
      &.active {
        background-color: #f4f4f4;
        color: #000;
      }
    }
  }

  .border {
    width: 1px;
    background-color: #e0e0e0;
    margin: 0 2rem;
  }

  .profile__content {
    flex: 1;
  }
}
</style>
