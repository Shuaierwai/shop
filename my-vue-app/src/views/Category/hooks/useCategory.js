//封装分类业务相关代码
import { getCategoryApi } from "@/apis/category";
import { onMounted, reactive } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  const route = useRoute();
  const data = reactive({
    categoryData: {},
    // bannerData: [],
  });
  onMounted(() => {
    //获取分类数据
    getCategory();
  });
  //期望路由参数发生变化时，可以重新调用分类接口
  //监听路由变化
  onBeforeRouteUpdate((to) => {
    console.log("参数发生了变化", to);
    getCategory(to.params.id);
  });

  //id=route.params.id 表示默认参数
  const getCategory = async (id = route.params.id) => {
    let res = await getCategoryApi(id);
    console.log(res);
    if (res.code == 1) {
      data.categoryData = res.result;
    }
  };

  return {
    data,
  };
}
