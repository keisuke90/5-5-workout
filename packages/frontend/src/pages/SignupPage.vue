<template>
  <form>
    <h1>サインアップ</h1>
    <label for="username">ユーザー名</label>
    <input type="text" id="name" name="name" required v-model="user.name" />
    <label for="username">メール</label>
    <input type="text" id="email" name="email" required v-model="user.email" />
    <label for="password">パスワード</label>
    <input
      type="password"
      id="password"
      name="password"
      required
      v-model="password"
    />
    <label for="confirm_password">パスワード確認</label>
    <input
      type="password"
      id="confirm_password"
      name="confirm_password"
      required
      v-model="confirm_password"
    />
    <input type="submit" value="登録" @click="createUser()" />
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { UsersApiService } from "../services/usersApi";
import { User } from "../../../shared/types/user";
import crypto from "crypto-js";

let password = ref("");
const password_digest = crypto.AES.encrypt(password.value, "key").toString();

const user: User = { id: null, name: "", email: "", password: password_digest };
let confirm_password: string | null;
const createUser = () => {
  if (password.value === confirm_password) {
    UsersApiService.createUser(user);
  }
};
</script>

<style lang="scss" scoped>
form {
  background-color: #fff;
  padding: 20px;
  width: 400px;
  margin: 50px auto;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
}
input[type="text"],
input[type="password"] {
  display: block;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
}
input[type="submit"] {
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}
</style>
