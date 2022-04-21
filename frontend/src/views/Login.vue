<template>
  <div class="container-login">
    <form @submit.prevent="login" v-if="isLogin">
      <div class="inner-form">
        <input class="input_data" type="text" placeholder="Email" v-model="userData.email" />
        <input class="input_data" type="password" placeholder="Password" v-model="userData.pass" />
        <button class="login-btn">
          <span>Log in</span>
        </button>
        <a>Forgot password?</a>
        <a @click="isLogin = !isLogin">Sign up</a>
      </div>
    </form>
    <form @submit.prevent="register" v-else>
      <div class="inner-form">
        <input class="input_data" type="text" placeholder="Email" v-model="userData.email" />
        <input class="input_data" type="password" placeholder="Password" v-model="userData.pass" />
        <input class="input_data" type="password" placeholder="Repeat password" v-model="userData.repeatPass" />
        <button class="login-btn">
          <span>Sign up</span>
        </button>
        <a @click="isLogin = !isLogin">Already have an account?</a>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import AuthService from "../scripts/services/auth-service";

const isLogin = ref(true);
const userData = ref({ email: "", pass: "", repeatPass: "" });

function login() {
  AuthService.login(userData.value.email, userData.value.pass);
}

function register() {
  AuthService.register(userData.value.email, userData.value.pass);
}
</script>

<style scoped>
.container-login {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 3fr 1fr;
  gap: 30px;
  padding: 30px;
  box-sizing: border-box;
  justify-items: center;
  align-items: center;
}

.input_data {
  width: 260px;
  height: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  font-size: 17px;
}

form {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d4cd87;
  border-radius: 15px;
  width: 350px;
  height: 450px;
}

@media (max-width: 480px) {
  .container-login {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    gap: 0;
  }
  .input_data {
    width: 240px;
    height: 45px;
  }
  form {
    width: 300px;
    height: 400px;
  }
}

.inner-form {
  display: grid;
  justify-items: center;
}

form input,
button,
a {
  display: block;
  margin: 10px;
}

form input {
  margin: 10px 30px;
  padding: 0px 0px 0px 10px;
  border-radius: 15px;
  outline: none;
  border-style: none;
  width: 200px;
}

::placeholder {
  opacity: 75%;
  font-weight: 500;
  color: #b9b37a;
}

form button {
  width: 150px;
  height: 50px;
  border-radius: 20px;
  border-style: none;
  background-color: #87814e;
  color: #e5e5e5;
  transition: 0.5s;
  cursor: pointer;
}

form button:hover {
  box-shadow: 0px 5px #504c2f;
}

form a {
  font-weight: 400;
  color: #000000;
  text-decoration: underline;
  cursor: pointer;
}
</style>
