import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "./pages/AboutPage.vue";
import FiveByFive from "./pages/FiveByFive.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
