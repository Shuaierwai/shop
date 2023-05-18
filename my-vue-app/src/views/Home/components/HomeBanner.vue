<template>
    <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in data.bannerData" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { getBanner } from '@/apis/home';
import {reactive,onMounted} from 'vue'

const data=reactive({
    bannerData:[]
})
onMounted(()=>{
    getBannerFun()
})
const getBannerFun=async()=>{
   let res=await getBanner();
   console.log(res);
   if(res.code==1){
      data.bannerData=res.result
   }
}

</script>

<style lang="less" scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>