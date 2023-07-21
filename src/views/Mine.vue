<template>
    <div class="box">
        <!-- 头部 -->
        <div class="nav" style="background: transparent;">
            <van-card thumb="../../public/UI/image/product/store-new.png" style="background: transparent;">
                <template #title>
                    <p class="title">aaaa</p>
                </template>
                <template #desc>
                    <span style=" background: url(../../public/UI/image/product/sharing-node.png); ">
                        分享节点
                    </span>
                    <span style="background: #71c0f6; border-radius: 15px; text-align: center;">商品节点</span>
                </template>
            </van-card>
        </div>
        <!-- 关注 -->
        <div class="guanzhu">
            <div>
                <p>09</p>
                <p>商品关注</p>
            </div>
            <div>
                <p>09</p>
                <p>店铺关注</p>
            </div>
            <div>
                <p>09</p>
                <p>我的足迹</p>
            </div>
        </div>
        <!-- 订单 -->
        <div class="order">
            <p @click="router.push({path:'/myorder',query:{title:'我的订单'}})">查看所有订单>></p>
            <div class="o-List" @click="router.push({path:'/orderDetail',query:{title:'订单详情'}})">
                <div>
                    <img src="../../public/UI/svg-icons/svgs/pending-pay.svg" alt="">
                    <p>待付款</p>
                </div>
                <div>
                    <img src="../../public/UI/svg-icons/svgs/be-delivered.svg" alt="">
                    <p>待发货</p>
                </div>
                <div>
                    <img src="../../public/UI/svg-icons/svgs/pending-receipt.svg" alt="">
                    <p>待收货</p>
                </div>
                <div>
                    <img src="../../public/UI/svg-icons/svgs/be-delivered.svg" alt="">
                    <p>退款售后</p>
                </div>
            </div>
        </div>
        <!-- 地址 -->
        <div class="site">
            <van-cell  is-link="" v-for="(item,index) in data"  @click="site(index)" :titleName="item.title">
                <template #icon>
                    <span style="margin-right: 20px;">
                        <img :src="item.img" alt="" style="display:inline-block ; width: 23px; height: 23px;"> </span>
                </template>
                <template #title>
                    <span>{{item.title}}</span>
                </template>
                <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            </van-cell>

        </div>
    </div>

    <tabbar></tabbar>
</template>
<script setup>

import { ref } from 'vue';
import { provide } from 'vue';
let data = ref([
   {
    title:'收货地址',
    img:'../../public/UI/svg-icons/svgs/anchor-point.svg',
    path:'/site'
   },
   {
    title:'消息中心',
    img:'../../public/UI/svg-icons/svgs/message-center.svg',
    path:'/information'
   },
   {
    title:'帮助中心',
    img:'../../public/UI/svg-icons/svgs/help-center.svg',
    path:'/help'
   },
   {
    title:'设置',
    img:'../../public/UI/svg-icons/svgs/setting.svg',
    path:'/setting'
   }
])

import { useRoute, useRouter}  from 'vue-router'
let router = useRouter()
function site(index){
    // console.log(index);
    router.push({ 
        path: data.value[index].path,
        
        query:{
            title:data.value[index].title
        }
     })
}
</script>

<style scoped lang="less">
.custom-title {
    margin-right: 4px;
    vertical-align: middle;
}

.search-icon {
    font-size: 16px;
    line-height: inherit;
}

.box {
    height: 800px;

    background: linear-gradient(#fe4f70, #ff9351);

    .nav {
        padding: 20px 10px;

        img {
            width: 70px;
            height: 70px;
        }

        .van-card {
            color: #fff;

            .van-card__content {
                div {
                    .title {
                        font-weight: bold;
                        font-size: 15px;
                        margin: 20px 0 10px 20px;
                    }

                    span {
                        display: inline-block;
                        margin-left: 20px;
                        width: 75px;
                        height: 25px;
                        line-height: 25px;
                        text-align: right;
                    }
                }

            }

        }

    }

    .guanzhu {
        display: flex;
        color: #fff;
        font-size: 13px;
        justify-content: space-around;
        align-items: center;
        font-weight: bold;
        text-align: center;
    }

    .site {
        background: #fff;
        width: 90vw;
        margin: 30px auto;
        border-radius: 15px;
        font-size: 12px;
        padding: 14px 0 18px 19px;
    }

    .order {
        background: #fff;
        width: 90vw;
        margin: auto;
        border-radius: 15px;
        font-size: 12px;
        padding: 14px 0 18px 19px;

        .o-List {
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 14px;
            font-weight: bold;
            text-align: center;

            img {
                width: 22px;
                height: 18px;
            }
        }
    }
}
</style>    