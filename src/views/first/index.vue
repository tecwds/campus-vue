<script setup>
import { ref } from "vue"
import Ftabbar from "@/components/tab-bar/f-tab-bar.vue"
import { useRoute } from "vue-router";


const route = useRoute()
</script>

<template>
    <RouterView></RouterView>
    <!-- <Ftabbar v-if="!route.meta.hideFtabbar" /> -->
    <Ftabbar  />
</template>

<style lang="less" scoped></style>