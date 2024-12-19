<template>
  <!-- <div class="container">
    <div class="auth-form">
      <div v-if="isLogin">
        <auth-page-login-form @switchForm="toggleForm" />
      </div>
      <div v-else>
        <auth-page-register-form @switchForm="toggleForm" />
      </div>
    </div>

    <div class="welcome-message">
      <h1>{{ isLogin ? "Добро пожаловать!" : "Создайте аккаунт!" }}</h1>

      <p>
        {{
          isLogin
            ? "Войдите в свою учетную запись."
            : "Зарегистрируйтесь для доступа."
        }}
      </p>
    </div>
  </div> -->
  <div>
    <auth-page />
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "auth",
});

const isLogin = ref(true);

function toggleForm() {
  isLogin.value = !isLogin.value;
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.auth-form {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.welcome-message {
  flex: 1;
  background: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

h1 {
  margin-bottom: 10px;
  color: #333;
}
</style>
