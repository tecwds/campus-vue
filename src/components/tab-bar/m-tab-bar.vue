<template>
  <div class="m-tab-bar">
    <template v-for="(item, index) in MtabbarData">
      <div 
      class="tab-bar-item" 
      :class="{ active: currentIndex === index }" 
      @click="itemClick(index, item)"
      >
        <img v-if="currentIndex !== index" :src="getAssetURL(item.Image)" alt="">
        <img v-else :src="getAssetURL(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>

      </div>
    </template>
  </div>
</template>

<script setup>

import MtabbarData from "@/assets/data/Mtabbar.js";
import { getAssetURL } from "@/utils/load_assets_img.js"
import { ref } from "vue";
import { useRouter } from "vue-router";

const currentIndex = ref(0)
const router = useRouter()
const itemClick = (index, item) => {
  console.log(item)
  currentIndex.value = index

  router.push(item.path)
}


</script>

<style lang="less" scoped>
.m-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;

  border-top: 1px solid #e1e0e0;
}

.tab-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4px;

  &.active {
    color: var(--primary-color);
  }
}

.text {
  font-size: 12px;
}

img {
  width: 32px;
}
</style>