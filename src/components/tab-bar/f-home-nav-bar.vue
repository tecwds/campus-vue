<template>
  <div class="f-home-nav-bar">
    <div class="nav_bar">

      <div class="ss">侧边栏</div>
     
      <div class="ss1">搜索按钮</div>
      <input type="text" placeholder=" 搜 索 内 容 G O">

      <ul>
        <li></li>
        <li></li>
      </ul>

      <!-- <div class="top_title title">鱼摆摆</div>
      <div class="bottom_title title">campus</div> -->
      <div class="">

      </div>
    </div>
  </div>
</template>


<script setup>

</script>


<style lang="less" scoped>

.f_home {
    .nav_bar {
      .ss{
          float: left;
          width: 35px;
          height: 35px;
          margin-left: 8px; 
          background-color: #00878c;
        }

        input{
              border: none;
              border-radius: 17px;
              float: right;
              width: 150px;
              height: 34px;
              margin-right: 10px;
              background-color: rgba(255,255,255,0.5);
            }
        .ss1{
            float: right;
            border-radius: 50%;
            width: 35px;
            height: 35px;
            background-color: #00878c;
            margin-right: 10px;
          }

        li{
            float: left;
            margin-left: 20px;
            width: 35px;
            height: 35px;
            background-color: #ffffff;
          }

          li:hover{
            background-color: #f6e500;
            border-bottom: 2px solid #ffffff;
          }

      // display: flex;
      background-color: #00cad1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 46px;
      padding-top: 10px;
      border-bottom: 1px solid #e1e0e0;


    }

    
    // .title {
    //   color: white;
    //   font-size: 18px;
    //   font-weight: 700;
      
    // }

  }


</style>