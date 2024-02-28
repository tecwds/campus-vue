<template>
  <div class="app">
    <RouterView/>
    <Ftabbar v-if="!route.meta.hideFtabbar"/>
  </div>
</template>

<script setup>
  import Ftabbar from "@/components/tab-bar/f-tab-bar.vue"
  import { useRoute } from "vue-router";


  const route = useRoute()
  

</script>

<style scoped>

</style>
