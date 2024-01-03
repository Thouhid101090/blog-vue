import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/category/:id",
    name: "category",
    component: () => import("./components/Category")
  },
  {
    path: "/blog/:id",
    name: "blog",
    component: () => import("./components/Details")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;