<template>
    <div class="content">
        <div class="box">

<div style="display: flex; justify-content: space-between;font-size: 12px; color: red; ">
    <div style="font-weight: bold;font-size: 16px;color: #000;">购物车</div>
    <div @click="editable">{{ flagA ? '编辑' : '完成' }}</div>
</div>
<tabbar></tabbar>
<!-- <van-checkbox-group v-model="radioS" ref="checkboxGroup1" >
    <div class="card">
        <div class="nav">
            <van-checkbox class="checkbox" name="a" @click="radioAll"></van-checkbox>

            <img src="../../public/UI/image/product/store-header.png">
            <span style="display: inline-block; padding: 20px; 0 0 10px">店铺名称</span>
        </div>
        <div class="card-con">
            <van-checkbox class="checkbox" name="b"> </van-checkbox>
            <img src="../../public/UI/image/shopCart/购物车-1.png" alt="">
            <div class="right">
                <div class="title">1234578653645</div>
                <div class="guige">型号；规格；颜色</div>
                <div class="price-g">
                    <span class="price">￥200</span>
                    <div>
                        <span class="num">
                            -
                        </span>
                        <span class="num">1</span>
                        <span class="num">+</span>
                    </div>

                </div>
                <div style="text-align: right; margin-top: 20px;" v-show="!flagA">合计：134</div>
                <div v-show="flagA" @click="remove">删除</div>
            </div>
        </div>
    </div>
</van-checkbox-group> -->
<!-- <van-checkbox-group v-model="checked" ref="checkboxGroup"> -->
    <div class="card">
        <div class="nav">
            <van-checkbox class="checkbox"></van-checkbox>
            <img src="../../public/UI/image/product/store-header.png">
            <span style="display: inline-block; padding: 20px; 0 0 10px">店铺名称</span>
        </div>
        <div class="card-con" v-for="item in data" :key="item.productId">
            <van-checkbox class="checkbox" v-model="item.checked" :name="item.name"> </van-checkbox>
            <img :src="item.img" alt="">
            <div class="right">
                <div class="title">{{ item.title }}</div>
                <div class="guige">型号；规格；颜色</div>
                <div class="price-g">
                    <span class="price">￥{{ item.price }}</span>
                    <div>
                        <span class="num" @click="reduce(item)">
                            -
                        </span>
                        <span class="num">{{ item.num }}</span>
                        <span class="num" @click="increment(item)">+</span>
                    </div>

                </div>
                <div style="text-align: right; margin-top: 20px;">小计：{{ item.num * item.price }}</div>
            </div>
        </div>
    </div>
<!-- </van-checkbox-group> -->

</div>
<div class="bottom">
<van-checkbox v-model="checkbox"  @click="quanxuan">
    全选
</van-checkbox>
<div>
    <span>合计：</span>
    <span class="Gprice">￥{{total}}</span>
</div>
<van-button color="red" square @click="removeState"> {{ flagA ? '结算' : '删除' }}</van-button>
</div>
    </div>

</template>
<script setup>
import { ref ,computed} from 'vue';
import tabbar from '../components/tabbar.vue'
import { useStore } from 'vuex';
import {showConfirmDialog} from 'vant'
let store = useStore()
let data =computed(()=>store.state.cart.product) 
let total = computed (()=>store.getters.totalPrice)
let flagA = ref(true) 
// 编辑按钮
function editable(){
    flagA.value = !flagA.value
}
// 删除数据
function removeState(){
    if(flagA.value){
        console.log(flagA.value);
        console.log('跳转到订单也');
    }else{
        showConfirmDialog({
            message:'是否删除选中商品'
        }).then(()=>{
            store.commit('REMOVE_STATE')
            flagA.value =!flagA.value
        }).catch(()=>{
            console.log('取消删除');
        })
    }
    
} 

// 全选
let checkbox = ref(false)

function quanxuan(){
  store.commit('SET_CHECKED')
}
// 商品数量减少
function reduce(item) {
    console.log(item);
    store.commit('DECREMENT',item)
}
// 商品数量增加
function increment(item) {
    store.commit('INCREMENT',item)
}
</script>

<style scoped lang="less">
.box {
    padding: 20px;
    background: #efeff4;
    min-height: 100vh;
    padding-bottom: 60px;
    .card {
        width: 90vw;
        min-height: 200px;
        margin: 20px auto;
        background: #ffff;
        border-radius: 15px;
        font-size: 12px;

        .nav {
            display: flex;

            .checkbox {
                display: inline-block;
                // width: 16px;
                // height: 16px;
                // border-radius: 50%;
                padding: 15px;
                background: transparent;
            }

            img {
                padding: 15px 0 15px 0;
                width: 24px;
                height: 24px;
                // vertical-align: middle;
            }

        }

        .card-con {
            width: 100%;
            display: flex;
            margin: 15px 15px;
            img {
                width: 100px;
                height: 100px;
                border-radius: 15px;
                margin-left: 15px;
            }

            .right {
                width: 170px;
                // background: red;

                margin-left: 10px;

                .price-g {
                    display: flex;
                    justify-content: space-between;
                }

                .title {
                    font-size: 16px;
                }

                .guige {
                    color: #ccc;
                    margin: 10px 0 40px 0;
                }

                .price {
                    font-weight: bold;
                    color: red;
                    font-size: 16px;

                }

                .num {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                    text-align: center;
                    line-height: 20px;
                }
            }


        }
    }
   
}
.bottom{
        width: 100vw;
        height: 50px;
        position: fixed;
        bottom: 50px;
        display: flex;
        background: #fff;
        font-size: 14px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        .van-checkbox{
            margin-left: 30px;
        }
        .Gprice{
            font-size: 16px;
            color: red;
            font-weight: bold;
        }
}
</style>