<script setup>
import { ref } from "vue"
import Mtabbar from "@/components/tab-bar/m-tab-bar.vue"
import { useRoute } from "vue-router";


const route = useRoute()
</script>

<template>
    <RouterView></RouterView>
    <!-- <Ftabbar v-if="!route.meta.hideFtabbar" /> -->
    <Mtabbar  />
</template>

<style lang="less" scoped></style>