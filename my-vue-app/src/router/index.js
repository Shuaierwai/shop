import { createRouter, createWebHistory } from "vue-router";
//一级路由
import Login from "@/views/Login/Login.vue";
import Layout from "@/views/Layout/index.vue";

import Home from '@/views/Home/index.vue';
import Category from '@/views/Category/index.vue'
const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "category/:id",
        name: "category",
        component: Category,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
