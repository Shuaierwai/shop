<!-- 商品详情热榜组件 -->
<template>
    <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in data.hotGoodsList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<script setup>
import {getFetchHotGoodsAPI} from '@/apis/detail'
import {reactive,onMounted,computed} from 'vue';
import {useRoute} from 'vue-router';
const data=reactive({
   hotGoodsList:[]
})
const route=useRoute();

//设置props参数 适配不同的title和数据
const props=defineProps({
  hotType:{
    type:Number
  }
})
//适配title 1 ：24小时热榜   2：周热榜
const typeTitle={
   1:'24小时热榜',
   2:'周热榜'
}
const title=computed(()=>typeTitle[props.hotType])
//获取数据
onMounted(()=>getFetchHotGoods())
const getFetchHotGoods=async()=>{
   let res=await getFetchHotGoodsAPI({
    id:route.params.id,
    type: props.hotType,
   })
   console.log(res);
   if(res.code==1){
     data.hotGoodsList=res.result
   }
}
</script>

<style lang="less" scoped>
.goods-hot {
  h3 {
    height: 70px;
    background: @helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>