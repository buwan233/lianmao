<template>
   <router-view />
    <van-tabbar route>
        <van-tabbar-item  to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item  to="/TabList" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item  to="/ShopCar" icon="cart-o" :badge="num">购物车</van-tabbar-item>
        <van-tabbar-item  to="/Mine" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script setup>
import { RouterView } from 'vue-router';
import {computed} from 'vue'
import { useStore } from 'vuex';
let store = useStore()
let num = computed(()=>{
  return  store.state.cart.product.length;
}) 
// console.log(num);
</script>

<style scoped>
</style>