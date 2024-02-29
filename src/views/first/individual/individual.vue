<template>
  <div class="individual">
    <div class="head">
      <div class="pic"></div>
      <div class="name">昵称</div>
    <div class="num">ID:0000000</div>
    </div>

    <div class="ways">
      <ul>
        <li>功能1</li>
        <li>功能2</li>
        <li>功能3</li>
      </ul>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.head{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 300px;
  background-color: #00cad1;
  .pic{
    border-radius: 75px;
    width: 150px;
    height: 150px;
    background-color: #fff;
  }
  .name{
    margin-top: 10px;
  }
  .num{
    margin-top: 10px;
  }
}

.ways ul li{
  display: block;
  height: 70px;
  background-color: #ffffff;
  border-bottom: 1px solid #00cad1;
}
</style>