<template>
  <!-- 吸顶导航 -->
  <LayoutFixNav/>
  <!-- 头部组件 -->
    <LayoutHeader/>
    <!-- 导航栏组件 -->
    <LayoutNav/>
     <!-- 二级路由显示 -->
    <router-view></router-view>
    <!-- 底部组件 -->
    <LayoutFooter/>
</template>

<script setup>
 import LayoutHeader from './components/LayoutHeader.vue';
 import LayoutNav from './components/LayoutNav.vue';
 import LayoutFooter from './components/LayoutFooter.vue';
 import LayoutFixNav from './components/LayoutFixNav.vue';

import {useCategory} from '@/stores/category.js';
import { onMounted } from 'vue';
  const store=useCategory()
  onMounted(()=>{
    store.getLayoutNavData()
  })
</script>

<style lang="less" scoped>

</style>