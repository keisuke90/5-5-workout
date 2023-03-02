<template>
  <div class="header">
    <router-link to="/">
      <div class="logo">
        <span class="logo__inner">Workout</span>
        <span class="logo__inner">Generator</span>
      </div>
    </router-link>
    <nav class="menu">
      <ul>
        <li class="menu__item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="menu__item" v-if="!isLogin">
          <router-link to="/signup">Signup</router-link>
        </li>
        <li class="menu__item" v-if="!isLogin">
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import jwtDecode from "jwt-decode";
import { computed } from "vue";

const decodedToken: any = jwtDecode(document.cookie);
const expirationDate = new Date(decodedToken.exp * 1000);
const currentDate = computed(() => {
  return new Date();
});
const isLogin = computed(() => {
  return currentDate.value < expirationDate;
});
</script>

<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
}
.header {
  display: flex;
  height: 65px;
  background-color: gray;
  padding: 0 50px;
  position: relative;
}

.logo {
  display: flex;
  font-weight: bold;
  flex-direction: column;
  padding: 10px 0;
  .logo__inner {
    line-height: 20px;
  }
}

.menu {
  position: absolute;

  right: 50px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    .menu__item {
      color: white;
      padding: 20px;
      cursor: pointer;

      &:hover {
        color: blue;
      }
    }
  }
}
</style>
