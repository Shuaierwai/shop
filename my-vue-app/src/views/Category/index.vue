<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ data.categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="home-banner">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in data2.bannerData" :key="item.id">
          <img :src="item.imgUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 分类数据 -->
    <div class="sub-list">
      <h3>全部分类</h3>
      <ul>
        <li v-for="i in data.categoryData.children" :key="i.id">
          <RouterLink to="/">
            <img :src="i.picture" />
            <p>{{ i.name }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div
      class="ref-goods"
      v-for="item in data.categoryData.children"
      :key="item.id"
    >
      <div class="head">
        <h3>- {{ item.name }}-</h3>
      </div>
      <div class="body">
        <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
// import { getCategoryApi } from "@/apis/category";

// import { onMounted, reactive } from "vue";
// import { useRoute ,onBeforeRouteUpdate} from "vue-router";
import GoodsItem from "../Home/components/GoodsItem.vue";
//导入banner的hooks函数
import {useBanner} from './hooks/useBanner';
//导入category的hooks函数
import { useCategory } from "./hooks/useCategory";
// const route = useRoute();
const {data2}=useBanner();
const {data} =useCategory()
// const data = reactive({
//   categoryData: {},
//   // bannerData: [],
// });

// onMounted(() => {
//   //获取分类数据
//   getCategory();
//   //获取banner数据
//   // getBannerFun();
//   console.log(data2);
// });
//期望路由参数发生变化时，可以重新调用分类接口
//监听路由变化
// onBeforeRouteUpdate((to)=>{
//   console.log('参数发生了变化',to);
//   getCategory(to.params.id)
// })

//id=route.params.id 表示默认参数
// const getCategory = async (id=route.params.id) => {
//   let res = await getCategoryApi(id);
//   console.log(res);
//   if (res.code == 1) {
//     data.categoryData = res.result;
//   }
// };
//获取banner函数
// const getBannerFun = async () => {
//   let res = await getBanner({ distributionSite: "2" });
//   console.log(res);
//   if (res.code == 1) {
//     data.bannerData = res.result;
//   }
// };
</script>

<style lang="less" scoped>
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }

  .home-banner {
    width: 1240px;
    height: 500px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 500px;
    }
  }
}
</style>
