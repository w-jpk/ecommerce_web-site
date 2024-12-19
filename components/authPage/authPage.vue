<template>
  <div class="auth-wrapper">
    <div class="forms-container">
      <div class="form login">
        <h2>Login</h2>

        <form @submit.prevent="onLogin">
          <label>
            Enter Your Email Or Phone

            <input
              type="email"
              placeholder="michael.joe@xmail.com"
              v-model="email"
              required />
          </label>

          <label>
            Enter Your Password

            <div class="password-container">
              <input
                type="password"
                placeholder="••••••••"
                v-model="password"
                required />

              <Icon name="weui:eyes-on-outlined" class="toggle-password" />

              <Icon name="weui:eyes-off-outlined" class="toggle-password" />
            </div>
          </label>

          <button type="submit" class="btn">Login</button>
        </form>

        <a href="/forgot-password" class="forgot-password">
          Forgot Your Password
        </a>
      </div>

      <div class="form register">
        <h2>Signup</h2>

        <form @submit.prevent="onRegister">
          <div class="form-group">
            <label>
              Full Name

              <input
                type="text"
                placeholder="michael joe"
                v-model="name"
                required
                class="register-input" />
            </label>

            <label>
              Email

              <input
                type="email"
                placeholder="michael.joe@xmail.com"
                v-model="email"
                required
                class="register-input" />
            </label>
          </div>

          <div class="form-group">
            <label>
              Password

              <div class="password-container">
                <input
                  type="password"
                  placeholder="••••••••"
                  v-model="password"
                  required
                  class="register-input" />

                <Icon name="weui:eyes-on-outlined" class="toggle-password" />
              </div>
            </label>

            <label>
              Confirm Password

              <div class="password-container">
                <input
                  type="password"
                  placeholder="••••••••"
                  v-model="confirmPassword"
                  required
                  class="register-input" />

                <Icon name="mdi:eye-off-outline" class="toggle-password" />
              </div>
            </label>
          </div>

          <div class="checkbox-group">
            <input
              type="checkbox"
              id="terms"
              v-model="acceptedTerms"
              required
              class="terms-check" />

            <label for="terms" class="terms-label">
              I have read and agreed to the
              <a href="/terms">Terms of Service</a>
              and
              <a href="/privacy">Privacy Policy</a>.
            </label>
          </div>

          <button type="submit" class="btn">Create Account</button>
        </form>
      </div>
    </div>

    <div
      class="switch-panel"
      :class="{
        'switch-left': isRegisterVisible,
        'switch-right': !isRegisterVisible,
      }">
      <h3 v-if="!isRegisterVisible">Don't have an account?</h3>

      <h3 v-else>Already have an account?</h3>

      <button @click="toggleForm" class="btn">
        {{ isRegisterVisible ? "Login" : "Register" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isRegisterVisible = ref(false);
const email = ref("");
const password = ref("");
const name = ref("");

const toggleForm = () => {
  isRegisterVisible.value = !isRegisterVisible.value;
};

const onLogin = () => {
  alert("Logging in...");
};

const onRegister = () => {
  alert("Registering...");
};
</script>

<style lang="scss" scoped>
.auth-wrapper {
  display: flex;
  position: relative;
  height: 100vh;
  width: 100%;
  background: #f0f0f0;
  overflow: hidden;

  .forms-container {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .form {
      width: 50%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .login {
      flex: 1;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #fff;
      text-align: center;

      h2 {
        margin-bottom: 10px;
        font-size: 24px;
      }

      p {
        font-size: 14px;
        margin-bottom: 20px;
        color: #666;
      }

      a {
        color: #007bff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      label {
        display: block;
        margin-bottom: 15px;
        text-align: left;
        font-size: 14px;
        color: #333;
      }

      input {
        width: 100%;
        padding: 10px;
        font-size: 14px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      .password-container {
        position: relative;
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 5px;

        input {
          width: calc(100% - 30px);
          display: inline-block;
          border: none;

          &:focus {
            outline: none;
          }
        }

        .toggle-password {
          width: 25px;
          height: 25px;
          margin-right: 10px;
          color: gray;
          cursor: pointer;
        }
      }

      .btn {
        width: 100%;
        padding: 10px;
        background: #000;
        color: #fff;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          background: #444;
        }
      }

      .forgot-password {
        display: block;
        margin-top: 10px;
        font-size: 14px;
        color: #007bff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .register {
      flex: 1;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #fff;
      text-align: center;

      h2 {
        margin-bottom: 10px;
        font-size: 24px;
      }

      p {
        font-size: 14px;
        margin-bottom: 20px;
        color: #666;
      }

      a {
        color: #007bff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      label {
        display: block;
        font-size: 14px;
        color: #333;
        text-align: left;
      }

      .form-group {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 20px;

        label {
          flex: 1;
        }
      }

      .register-input {
        width: 100%;
        padding: 10px;
        font-size: 14px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      .password-container {
        position: relative;
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 5px;

        input {
          width: calc(100% - 30px);
          display: inline-block;
          border: none;

          &:focus {
            outline: none;
          }
        }

        .toggle-password {
          width: 25px;
          height: 25px;
          margin-right: 10px;
          color: gray;
          cursor: pointer;
        }
      }

      .checkbox-group {
        display: flex;
        align-items: center;
        text-align: left;
        margin-bottom: 20px;

        .terms-check {
          margin-right: 10px;
        }

        .terms-label {
          font-size: 14px;
          color: #333;
        }
      }

      .btn {
        width: 100%;
        padding: 10px;
        background: #000;
        color: #fff;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          background: #444;
        }
      }
    }
  }
}

.switch-panel {
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #333;
  color: #fff;
  transition: transform 0.5s ease;
  z-index: 10;

  button {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin-top: 20px;
  }
}

.switch-left {
  transform: translateX(0);
}

.switch-right {
  transform: translateX(100%);
}
</style>
