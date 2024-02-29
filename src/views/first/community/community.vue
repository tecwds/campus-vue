<template>
  <div class="community">
    <div class="nav"></div>
    <div class="container">
    <div class="circle">
      用户头像留一
      <div class="image-slider">
        <div class="image"></div>
        <!-- Add more images here as needed -->
      </div>
    </div>
  </div>
    
  <div class="social">
    <div class="articles">文章留一</div>

  </div>
  

  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>

.container{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #9e9e9e;
    border-radius: 20px;
}

.social{
  flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.nav{
  height: 56px;
  background-color: #00dada;
}


.articles{
  margin-top: 10px;
  margin-left: 10px;

  width: 170px;
  height: 400px;
  background-color: #a9ffb2;
}/* 首尾元素的处理*/


.circle {
  margin: 10px 10px 10px 10px;

  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background-color: green; /* 设置圆形的背景颜色 */
  // position: relative;
}

.image-slider {
  display: flex;
  flex-direction: row;
  transition: transform 0.3s ease;
}

.image {
  flex: 0 0 100%;
  overflow: hidden;
  height: 100%;
  background-color: #ffffff; /* 设置图片容器的背景颜色 */
}

</style>