<template>
    <div class="content">
        <div class="go" @click="() => this.$router.go(-1)"> &lt; </div>
    <div class="banner">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in 5" :key="image">
                <img :src="data.img" />
            </van-swipe-item>
        </van-swipe>
    </div>
    <div class="con">
        <div class="header">
            <span>{{ data.forceValue }}倍算力</span>
            <van-icon :name="flag ? 'like-o':'like'" color="red" @click="() => flag = !flag" />
        </div>
        <p>{{ data.title }}</p>
        <div class="num">
            <span>快递包邮</span>
            <span>月销：888</span>
        </div>
        <div class="action">
            <span>发货地</span>
            <van-icon name="location" />
        </div>
        <div class="origin">
            品牌
        </div>
        <div class="select">
            <van-cell is-link title="基础用法" @click="show = true" />
            <van-action-sheet v-model:show="show" title=" ">
                <div class="content">
                    <div class="item">
                        <img :src="data.img" alt="">
                        <div>
                            <p class="price">{{ data.price }}</p>
                            <p>库存19999件</p>
                            <p>选择颜色;尺码</p>
                        </div>
                    </div>
                </div>
            </van-action-sheet>
        </div>
        <div class="bottom">
            <span class="car">加入购物车</span>
            <span class="buy" @click="addOrder">立即购买</span>
        </div>
    </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRoute,useRouter } from 'vue-router';
let router = useRouter()
let route = useRoute()
let flag = ref(true)
let data = ref(route.query)
let show = ref(false)
function addOrder(){
    router.push({path:'/order'})
}
</script>

<style scoped lang="less">
.item{
    display: flex;
    img{
        width: 100px;
        height: 100px;
    }
}
.content {
    padding: 16px 16px 160px;
}

.go {
    width: 30px;
    height: 30px;
    border: 1px solid greenyellow;
    color: greenyellow;
    line-height: 30px;
    text-align: center;
    position: fixed;
    top: 30px;
    left: 30px;
    border-radius: 50%;
    z-index: 500;
}

.banner {
    img {
        width: 100%;
        height: 50vh;
    }
}

.con {
    width: 90vw;
    margin: 0 auto;
    .origin{
        font-size: 14px;
    }
}

.header {
    display: flex;
    justify-content: space-between;

    span {
        background-color: red;
        height: 20px;
        font-size: 12px;
        border-radius: 20px;
        line-height: 20px;
        text-align: center;
        color: #fff;
    }

    .num {
        display: flex;
        justify-content: space-around;

        span {
            flex: 1;
        }
    }
}

p {
    font-size: 12px;
    color: #ccc;
}

.num {
    display: flex;
    justify-content: space-around;

    span {
        flex: 1;
        font-size: 12px;
        color: #efefef;
        text-align: center;

    }
}

.action {
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    margin: 10px 0;

    span {
        margin-right: 20px;
    }
}
.van-cell{
    padding: 0;
    margin: 10px 0;
    color: black;
}
.bottom{
    width: 100%;
    height:50px ;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    span{
        flex: 1;
        font-size: 16px;
        text-align: center;
        line-height: 50px;
        color: #fff;
    }
    .car{
        background-color: orange;

    }
    .buy{
        background-color: red;
    }
}
</style>