<template>
  <div class="f_home">
    <!-- <Mtabbar v-if="!route.meta.hideMtabbar"/> -->
    <f-home-nav-bar/>
    <div class="banner">
      <img src="../../../../public/backgroung.jpg" alt="banner">
    </div>
    <!-- d -->
    <div class="f_box">
      <div class="function"> 
        <div class="function_img ">
            <img src="../../../assets/img/first/function/ershou.png" alt="ershou" @click="ershou">
        </div>
      </div>
      <div class="function"> 
        <div class="function_img">
          <a href="#">
            <img src="../../../assets/img/first/function/xiaoyuan.png" alt="ershou">
          </a>
        </div>
      </div>
      <div class="function">
        <div class="function_img">
          <a href="#">
            <img src="../../../assets/img/first/function/shixi.png" alt="ershou">
          </a>
        </div> 
      </div>
      <div class="function"> 
        <div class="function_img">
          <a href="#">
            <img src="../../../assets/img/first/function/shejiao.png" alt="ershou">
          </a>
        </div>
      </div>
    </div>

    <f-content/>

  </div>  
</template>


<script setup>

  import Mtabbar from "@/components/tab-bar/m-tab-bar.vue"
  import MtabbarData from '@/assets/data/Mtabbar';
  import { useRoute } from 'vue-router';
  import { useRouter } from 'vue-router';

  const route = useRoute()
  const router = useRouter()

  const ershou = () => {
    router.push("/merchandise/m_home")
  }


</script>


<style lang="less" scoped>

  .banner {
    display: flex;
    justify-content: center;
    
  }

  .f_box {
    display: flex;
    border-radius: 20%;
    border: 1px solid #e1e0e0;
    justify-content: space-evenly;
  }

  .f_box img {
    width: 36px;
    height: 36px;
  }

</style>
