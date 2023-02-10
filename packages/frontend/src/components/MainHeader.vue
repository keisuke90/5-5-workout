<template>
  <div class="header">
    <div class="logo">
      <span class="logo__inner">Workout</span>
      <span class="logo__inner">Generator</span>
    </div>
    <nav class="menu">
      <ul>
        <li class="menu__item">About</li>
        <li class="menu__item">Signin</li>
        <li class="menu__item">Login</li>
      </ul>
    </nav>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
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
