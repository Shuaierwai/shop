<template> 
  <!--人气推荐 -->
  <HomeCommonUse title="人气推荐2" sub-title="人气爆款 不容错过">
    <ul class="goods-list">
        <li v-for="item in data.hotList" :key="item.id">
          <RouterLink to="/">
            <img v-img-lazy="item.picture"  alt="">
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
  </HomeCommonUse>
    <!-- 下面是插槽主体内容模版
    <ul class="goods-list">
      <li v-for="item in data.newList" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
    -->
  </template>
  
  <script setup>
   import HomeCommonUse from './HomeCommonUse.vue';
   import {getHotApi} from '@/apis/home';
   import {reactive,onMounted} from 'vue';
  
   let data=reactive({
    hotList:[]
   })
  
   onMounted(()=>{
    getHot()
   })
   //获取新鲜好物的数据
   const getHot=async()=>{
     let res=await getHotApi();
    //  console.log(res);
     if(res.code==1){
       data.hotList=res.result
     }
   }
  </script>
  
  <style lang="less" scoped>
 .goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
  </style>