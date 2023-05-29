import { createRouter, createWebHistory } from "vue-router";
//一级路由
import Login from "@/views/Login/Login.vue";
import Layout from "@/views/Layout/index.vue";

import Home from "@/views/Home/index.vue";
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
        component: () => import("@/views/Category/index.vue"),
      },
      {
        path: "category/subCategory/:id",
        name: "subCategory",
        component: () => import("@/views/SubCategory/index.vue"),
      },
      //商品详情
      {
        path: "detail/:id",
        name: "detail",
        component: () => import("@/views/Detail/index.vue"),
      },
      {
        path: "shopCart",
        name: "shopCart",
        component: () => import("@/views/shopCart/index.vue"),
      },
      //订单详情
      {
        path: "checkoutCart",
        name: "checkoutCart",
        component: () => import("@/views/CheckoutCart/index.vue"),
      },
      //支付页面
      {
        path: "pay",
        name: "pay",
        component: () => import("@/views/pay/index.vue"),
      },
      {
        path: "paycallback",
        name: "paycallback",
        component: () => import("@/views/pay/PaycallBack.vue"),
      },
      //会员中心
      {
        path: "member",
        name: "member",
        component: () => import("@/views/Member/index.vue"),
        
        children: [
          {
            path: "",
            component: () => import("@/views/Member/components/UserInfo.vue"),
          },
          {
            path: "user",
            name: "user",
            component: () => import("@/views/Member/components/UserInfo.vue"),
          },
          {
            path: "order",
            name: "order",
            component: () => import("@/views/Member/components/UserOder.vue"),
          },
        ],
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
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
