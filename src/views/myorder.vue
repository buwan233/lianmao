<template>
    <div class="box">
        <navBar></navBar>

        <van-tabs v-model:active="active" background="transparent">
            <van-tab title="全部">
                <div class="card">
                    <div class="tabNav">
                        <div>
                            <img src="../../public/UI/image/product/store-headerM.png" alt="">
                        <span>店铺名称</span>
                        </div>
                        <div >待支付</div>
                    </div>
                    <div class="card-con">
                        <img src="../../public/UI/image/product/bule0.png" alt="">    
                        <div class="right">
                            <p class="title">
                                <span class="name">name</span>
                                <span class="text">xxxxxx</span>
                            </p>
                            <p class="guige"> 
                                <span class="price">价格</span>
                                <span class="num">*2</span>
                            </p>
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <p>共2件商品，小计496</p>
                    <button>取消订单</button>
                    <button>去支付</button>
                    </div>
                    
                </div>

            </van-tab>
            <van-tab title="已取消">内容 2</van-tab>
            <van-tab title="待支付">内容 3</van-tab>
            <van-tab title="待发货">内容 4</van-tab>
            <van-tab title="已支付">内容 4</van-tab>

        </van-tabs>

    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import navBar from '../components/navBar.vue'
import { provide } from 'vue';
let router = useRouter()
let route = useRoute()
let active = ref()
provide('title', route.query.title)
</script>

<style scoped lang="less">
.box {
    background-color: #efeff4;
    min-height: 100vh;
    font-size: 12px;
    .card {
        width: 90vw;
        margin: 20px auto;
        border-radius: 10px;
        background: #fff;
        .tabNav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
                width: 24px;
                height: 24px;
                margin: 10px;
                line-height: 24px;
                vertical-align: middle;
            }

         

            span {
                display: inline-block;

            }
            div{
                margin-right: 20px;
            }
        }
       
        .card-con{
            width: 100%;
            // background: red;
            display: flex;
            img{
                width: 80px;
                height: 80px;
                // background: red;
                margin: 20px;
                border-radius:15px ;
            }
            // justify-content: space-around;
            span{
                    display: block;
                }
            .right{
                margin-top: 20px;
                width: 200px;
                display: flex;
                justify-content: space-between;
                .text{
                    color: #ccc;
                }
            }

        }
    }

}</style>