<template>
    <RouterView></RouterView>
    <van-nav-bar class="nav">
        <template #left>
            <div class="back" @click="router.go(-1)">&lt;</div>
        </template>
        <template #title>
            <div class="title">{{ a }}</div>
        </template>
        <template #right>
            <div class="slot"></div>
        </template>
    </van-nav-bar>

</template>
<script setup>
import { ref, inject } from 'vue';
import { RouterView, useRoute, useRouter } from 'vue-router';
let a = inject('title')
let router = useRouter()
</script>

<style scoped lang="less">
.nav {
    width: 95vw;
    margin: auto;
    // display: flex;
    // justify-content: space-between;
    // padding-top: 20px;
    background: transparent;
    .back {
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-align: center;
        background: #fff;
        border-radius: 50%;
        // margin-left: 13px;
    }

    .title {

        font-size: 18px;
        font-weight: bold;
    }

    .slot {
        width: 30px;
    }
}</style>