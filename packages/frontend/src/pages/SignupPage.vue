<template>
  <form>
    <h1>サインアップ</h1>
    <label for="username">ユーザー名</label>
    <input type="text" id="username" name="username" required />
    <label for="password">パスワード</label>
    <input type="password" id="password" name="password" required />
    <label for="password">パスワード確認</label>
    <input type="password" id="password" name="password" required />
    <input type="submit" value="登録" />
  </form>
</template>

<script setup></script>

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
