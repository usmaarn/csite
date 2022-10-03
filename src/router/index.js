import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../views/FormView.vue"),
    },
    {
      path: "/poster",
      name: "poster",
      component: () => import("../views/PosterView.vue"),
    },
    {
      path: "/data",
      name: "data",
      component: () => import("../views/DataView.vue"),
    },
  ],
});

export default router;
