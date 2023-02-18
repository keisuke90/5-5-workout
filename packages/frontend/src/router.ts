import { createRouter, createWebHistory } from "vue-router";
import FiveByFive from "./pages/FiveByFive.vue";
import AboutPage from "./pages/AboutPage.vue";
import SignupPage from "./pages/SignupPage.vue";
import LoginPage from "./pages/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: FiveByFive,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
