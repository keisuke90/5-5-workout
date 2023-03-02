<template>
  <form>
    <h1>ログイン</h1>
    <label for="email">メール</label>
    <input type="text" id="email" name="email" v-model="email" required />
    <label for="password">パスワード</label>
    <input
      type="password"
      id="password"
      name="password"
      v-model="password"
      required
    />
    <input type="button" value="登録" @click="loginUser()" />
  </form>
</template>

<script setup lang="ts">
import { sessionApiService } from "../services/sessionAPI";
import router from "../router";
import { useToast } from "vue-toastification";

const toast = useToast();
let email: string = "";
let password: string = "";

const loginUser = () => {
  sessionApiService
    .loginUser(email, password)
    .then((res) => {
      document.cookie = res.data.token;
      toast.success("ログインしました。");
      router.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
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
input[type="button"] {
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
