<template>
  <div class="login-wrapper">
    <form @submit.prevent="login" v-if="isLogin" class="login-form">
      <input
        class="input-data"
        type="text"
        placeholder="Email"
        v-model="userData.email"
      />
      <input
        class="input-data"
        type="password"
        placeholder="Password"
        v-model="userData.pass"
      />
      <button class="login-btn">
        <span>Log in</span>
      </button>
      <a class="login-link">Forgot password?</a>
      <a class="login-link" @click="isLogin = !isLogin">Sign up</a>
    </form>
    <form @submit.prevent="register" v-else class="login-form">
      <input
        class="input-data"
        type="text"
        placeholder="Email"
        v-model="userData.email"
      />
      <input
        class="input-data"
        type="password"
        placeholder="Password"
        v-model="userData.pass"
      />
      <input
        class="input-data"
        type="password"
        placeholder="Repeat password"
        v-model="userData.repeatPass"
      />
      <button class="login-btn">
        <span>Sign up</span>
      </button>
      <a class="login-link" @click="isLogin = !isLogin"
        >Already have an account?</a
      >
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import AuthService from '../scripts/services/auth-service'

const isLogin = ref(true)
const userData = ref({ email: '', pass: '', repeatPass: '' })

function login() {
  AuthService.login(userData.value.email, userData.value.pass)
}

function register() {
  AuthService.register(userData.value.email, userData.value.pass)
}
</script>

<style scoped>
/* Inter font */
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'); */

* {
  font-family: Verdana;
  font-size: large;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #9d9d9d;
}

.login-wrapper {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.login-form {
  display: grid;
  place-items: center;
  background-color: var(--primary);
  border-radius: 15px;
  /* width: 350px;
  height: 450px; */
  padding: 50px 20px;
  box-shadow: 0 20px 20px #484848;
}

.input-data {
  margin: 10px 30px;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border-style: none;
  /* width: 300px; */
  /* height: 50px; */
  background-color: #ffffff;
}

::placeholder {
  opacity: 75%;
  font-weight: 500;
  color: var(--dark-primary);
}

.login-btn {
  margin: 10px;
  padding: 15px 30px;
  border-radius: 20px;
  border-style: none;
  background-color: var(--darker-primary);
  color: #e5e5e5;
  transition: 0.5s;
  cursor: pointer;
  font-weight: 600;
}

.login-btn:hover {
  box-shadow: 0px 5px var(--shadow);
}

.login-link {
  margin: 10px;
  font-weight: 400;
  color: #000000;
  cursor: pointer;
}

.login-link:hover {
  text-decoration: underline;
}

.login-form input,
button,
a {
  margin: 10px;
}
</style>
