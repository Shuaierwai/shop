import { createRouter, createWebHistory } from "vue-router";
//一级路由
import Login from "@/views/Login/Login.vue";
import Layout from "@/views/Layout/index.vue";

import Home from '@/views/Home/index.vue';
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
        component: ()=>import('@/views/Category/index.vue'),
      },
      {
        path: "category/subCategory/:id",
        name: "subCategory",
        component: ()=>import('@/views/SubCategory/index.vue')
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
  // 路由滚动行为定制
  scrollBehavior(){
    return {top:0}
  }
});

export default router;
