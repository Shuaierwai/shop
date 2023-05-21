<!-- 二级分类下模块  -->
<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }"
          >{{ filterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
        <!-- v-model绑定的值和name一样 改变name的值 -->
      <el-tabs v-model="list.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem v-for="item in list.goodsList" :key="item.id" :goods="item"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCategoryFilterAPI, getCategoryGoodsAPI } from "@/apis/subCategory";
//导入我们之前封装好的商品列表
import GoodsItem from "../Home/components/GoodsItem.vue";
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
//获取面包屑
const route = useRouter();
const filterData = ref({});
onMounted(() => getFilter());
const getFilter = async () => {
  let id = route.currentRoute.value.params.id;
  let res = await getCategoryFilterAPI(id);
  if (res.code == 1) {
    filterData.value = res.result;
  }
};

//获取商品列表
const list = reactive({
  goodsList: [],
  categoryId: route.currentRoute.value.params.id,
  pageSize: 20,
  page: 1,
  sortField: "publishTime", //字段名和tab组件的name一样
});
onMounted(() => getCategoryGoods());
let getCategoryGoods = async() => {
  let data = {
    categoryId:list.categoryId,
    pageSize:list.pageSize,
    page:list.page,
    sortField:list.sortField,
  };
  let res=await getCategoryGoodsAPI(data)
  console.log(res);
  if(res.code==1){
    list.goodsList=res.result.items
  }
};

//tab切换事件
let tabChange=()=>{
    console.log(list.sortField);
    list.page=1;
    getCategoryGoods()
}
//加载更多 获取到新数据和旧数据拼接在一起
let disabled=ref(false) //判断数据是否传完了
let load=async()=>{ 
    console.log('加载更多');
    list.page++;
    let data = {
    categoryId:list.categoryId,
    pageSize:list.pageSize,
    page:list.page,
    sortField:list.sortField,
  };
  let res=await getCategoryGoodsAPI(data);
  if(res.code==1){
    //进行数据拼接
    list.goodsList=[...list.goodsList,...res.result.items];
    if(res.result.items.length==0){
      disabled.value=true;
      
    }
  }
}

</script>

<style lang="less" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: @priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
