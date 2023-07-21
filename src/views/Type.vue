<template>
    
    <h3 class="title">商品分类</h3>
    <div class="box">
        <div class="nav">
            <van-sidebar v-model="active">
                <van-sidebar-item :title="item.label" v-for="item in navList" />
            </van-sidebar>
        </div>
        <div class="con">
            <div class="conItem" v-for="item in conList">
                {{ item }}
                <h3 class="con_title">{{ item.name }}</h3>
                <div class="item" v-for="item in item.list">
                    <div v-for="item in item.productList">
                        <img :src="item.imgUrl" alt="">
                        <p>{{ item.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <tabbar></tabbar>
</template>

<script setup>
import tabbar from '../components/tabbar.vue'
import { getCategoryData } from '../api/index'
import { ref, onActivated } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router';
let navList = ref([])
let conList = ref([])
const active = ref(0);

getCategoryData().then(res => {
    console.log('00123');
        navList.value = res.tabsLabel
        // conList.value = res.categoryData
        console.log(res.categoryData);
        // let arr = navList.value.filter(i => {
        //     return i.label == '手机数码'

        // })
        // console.log(arr)
    
    console.log(res)
    console.log(22)
}
)
// onActivated(() => {
//     getCategoryData()
// })
// onBeforeRouteUpdate((to)=>{
//     console.log('111')
// })
</script>

<style scoped lang="less">
h3 {
    margin: 0;
    padding: 0;
}

.title {
    text-align: center;
    font-size: 16px;
}

.box {
    display: flex;

    .con {
        .conItem {
            .item {
                img {
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }
}
</style>