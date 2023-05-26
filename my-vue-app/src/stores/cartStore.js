import { defineStore } from "pinia";
import { ref, computed } from "vue";
import {insertCartAPI,getNewCartApi,delCartApi} from '@/apis/cart'
//导入user的token
import { useUserStore } from "./user";
//购物车的pinia
export const useCartStore = defineStore(
  "cart",
  () => {
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);

    //获取最新的购物车列表
    const updateNewCart=async()=>{
      let res= await getNewCartApi();
      if(res.code==1){
        cartList.value=res.result;
      }
    }
    //设置state
    const cartList = ref([]);

    //action 方法 加入购物车
    const addCart = async(goods) => {
      if (isLogin.value) {
        //登录情况
        let data={
          skuId:goods.skuId,
          count:goods.count
        }
        await insertCartAPI(data);
        updateNewCart()
      } else {
        //问题：当数量不为1时，count只加一
        const isCartData = cartList.value.find(
          (item) => item.skuId == goods.skuId
        );
        if (isCartData) {
          console.log(isCartData);
          //表示购物车有，count数量++
          isCartData.count++;
        } else {
          //表示没有，直接加入
          cartList.value.push(goods);
        }
      }
    };

    //删除商品函数
    const delCart = async(id) => {
      if(isLogin.value){
        await delCartApi([id]);
        updateNewCart();
      }else{
        cartList.value = cartList.value.filter((item) => {
          return item.skuId != id;
        });
      }
     
    };

    //清空购物车
    const clearCart=()=>{
      cartList.value=[]
    }

    //购物车结算
    //总的数量  reduce((初始值，转过来的值)=>初始值+初始值，转过来的值,初始值)
    const shopSum = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0)
    );
    //总价格
    const shopPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    );

    //单选功能
    const singleCheck = (skuId, selected) => {
      //找到选中的一条数据
      const findItem = cartList.value.find((item) => item.skuId == skuId);
      findItem.selected = selected;
    };

    //是否全选  every检测数组所有元素是否都符合指定条件
    const isAll = computed(() => cartList.value.every((item) => item.selected));

    //点击全选
    const allCheck = (selected) => {
      cartList.value.forEach((item) => {
        item.selected = selected;
      });
    };

    //已选择的数量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, b) => a + b.count, 0)
    );

    //已选择的商品总价
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, b) => a + b.count * b.price, 0)
    );

    return {
      cartList,
      addCart,
      delCart,
      shopSum,
      shopPrice,
      singleCheck,
      isAll,
      allCheck,
      selectedCount,
      selectedPrice,
      clearCart,
      updateNewCart
    };
  },
  {
    persist: true,
  }
);
