//封装banner轮播图的业务相关代码
import { onMounted,reactive } from "vue";
import { getBanner } from "@/apis/home";
export function useBanner(){
    const data2=reactive({
        bannerData: [],
    })
    onMounted(()=>{
        getBannerFun()
    })
    const getBannerFun = async () => {
        let res = await getBanner({ distributionSite: "2" });
        console.log(res);
        if (res.code == 1) {
          data2.bannerData = res.result;
        }
      };

      return{
        data2,
      }
}