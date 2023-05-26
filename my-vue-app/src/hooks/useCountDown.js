import { ref ,computed,onUnmounted} from "vue";
import dayjs from "dayjs";

export const useCountDown=()=>{
    const time=ref(0);
    const timer=null;
    //格式时间
    const formTime=computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
    //开始倒计时
    const start=(currentTime)=>{
        time.value=currentTime;
        timer= setInterval(()=>{
            time.value--
        },1000)
    }
    //定时器容易造成内存泄漏
    onUnmounted(()=>{
      timer && clearInterval(timer)
    })

    return{
        start,
        formTime
    }
}