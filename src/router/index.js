import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/users"
  },
  {
    path: "/users",
    name: "Users",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./../views/About.vue"),
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: () => import("./../views/Schedule.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
