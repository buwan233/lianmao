<template>
    <div class="content">
        <div id="main">
        <div class="header">
            <img src="../../public/UI/icons/left-green-white.png" alt="" @click="returnBack">
            <h5>订单详情</h5>
            <div></div>
        </div>
        <div class="order-card">
            <ul class="order-list">
                <li class="list-item">
                    <div>
                        <img class="small" src="../../public/UI/image/product/store-headerM.png" alt="">
                        <span>店铺名称</span>
                    </div>
                    <span class="pay">待支付</span>
                </li>
                <li class="item-info">
                    <img >
                    <div class="order-detail">
                        <p class="info-one">
                            <span>娜扎新装LOOK</span>
                            <i>￥222</i>
                        </p>
                        <p class="info-two">
                            <span>型号;规格;颜色;</span>
                            <span>×2</span>
                        </p>
                    </div>
                </li>
                <li class="order-count">
                    <span>订单总价：</span>
                    <i>$444</i>
                </li>
                <li class="real-pay">
                    <span>实付款：</span>
                    <i>￥444</i>
                </li>
            </ul>
        </div>
        <div class="order-info">
            <ul class="info-list">
                <li class="info-title">
                    <img src="../../public/UI/svg-icons/svgs/my-complaint.svg" alt="">
                    <span>订单信息</span>
                </li>
                <li class="info-item">
                    <label for="">订单编号：</label>
                    <span>201905211540350025</span>
                </li>
                <li class="info-item">
                    <label for="">创建时间：</label>
                    <span>2019/05/01 13:40:40</span>
                </li>
                <li class="receiver-addres">
                    <img src="../../public/UI/svg-icons/svgs/shipping-address.svg" alt="">
                    <div class="address-content">
                        <label for="">收货人：咋地 13545900066</label>
                        <span>广东省深圳市南山区科研路1001号比科大厦</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="pay-btn">
            <div class="pay-count">
                <span>
                    共2件商品，小计：
                    <i>￥222</i>
                </span>
                <span>59：59后取消订单</span>
            </div>
            <van-button type="danger" @click="showPicker=true">
                <span>立即支付</span>
            </van-button>
        </div>
    </div>
    <van-popup v-model:show="showPicker" round position="bottom">
        <van-picker
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
        />
    </van-popup>
    </div>

</template>

<script setup>
import {ref} from 'vue';
let showPicker=ref(false);
let columns=ref([
    {text:'Top-Pay',value:'Top-Pay'},
    {text:'支付宝',value:'支付宝'},
    {text:'微信',value:'微信'},
    {text:'银行卡',value:'银行卡'}
]);
function returnBack(){
    history.back();
}
import { closeToast, showLoadingToast } from 'vant';
import { useRouter } from 'vue-router';
let router=useRouter();
import 'vant/es/toast/style';
function onConfirm(){
    showPicker.value = false;
    showLoadingToast({
        message: '支付中...',
        forbidClick: true,
        loadingType: 'spinner',
        duration:2000
    });
    setTimeout(() => {
        closeToast();
        router.push({path:'/trade'});
    }, 2500);
}
</script>

<style scoped>
i{
    font-style:normal;
}
*{
    margin:0;padding:0;
}
#main{
    height:100vh;
    padding:0 20px;
    background-color: #efeff4;
}
.header{
    display:flex;
    height:50px;
    align-items:center;
    justify-content:space-between;
}
.header img,.order-list .small{
    width:24px;
    height:24px;
    margin-right:5px;
}
.order-card{
    padding:0.26rem 0.53rem;
    border-radius:0.13rem;
    background-color:#fff;
}
.list-item{
    display:flex;
    font-size:0.34rem;
    align-items:center;
    justify-content:space-between;
}
.list-item div{
    display:flex;
    align-items:center;
}
.list-item .pay{
    color:#d8182d;
    font-size:0.29rem;
}
.item-info{
    padding-top:0.26rem;
    display:flex;
}
.item-info img{
    width:80px;
    height:80px;
    border-radius:0.10rem;
    background-color:#d8182d;
}
.order-detail{
    flex:1;
    padding-left:0.42rem;
    padding-bottom:0.10rem;
}
.info-one,.info-two{
    color:#3a3a3a;
    font-size:0.34rem;
    padding-bottom:0.13rem;
    display:flex;
    justify-content:space-between;
}
.info-one i{
    font-weight:700;
}
.info-two{
    color:#949494;
}
.order-count{
    display:flex;
    font-size:0.34rem;
    color:#949494;
    justify-content:flex-end;
}
.real-pay{
    display:flex;
    justify-content:flex-end;
    font-size:0.34rem;
    font-weight:600;
    padding-top:0.10rem;
}
.real-pay span{
    color:#3a3a3a;
}
.real-pay i{
    color:#d8182d;
    padding-left:0.13rem;
}
.order-info{
    background-color:#fff;
    border-radius:0.13rem;
    margin-top:0.53rem;
    padding:0.53rem;
}
.info-list{
    color:#3a3a3a;
}
.info-title{
    display:flex;
    font-weight:600;
    justify-content:flex-start;
    align-items:center;
}
.info-title img{
    width:0.64rem;
    height:0.64rem;
    vertical-align:middle;
}
.info-title span{
    font-size:0.34rem;
    padding-left:0.18rem;
    font-weight:700;
}
.info-item{
    font-size:0.29rem;
    padding-left:0.90rem;
    padding-bottom:0.16rem;
}
.receiver-addres{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    margin-top:0.53rem;
}
.receiver-addres img{
    width:0.64rem;
    height:0.64rem;
    vertical-align:middle;
}
.address-content{
    padding-left:0.18rem;
    color:#3a3a3a;
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    flex-direction:column;
}
.address-content label{
    font-size:0.34rem;
    font-weight:600;
}
.address-content span{
    padding-top:0.10rem;
    font-size:0.29rem;
}
.pay-btn{
    position:fixed;
    width:100%;
    bottom:0.26rem;
    left:0;
    right:0;
    padding:0 0.42rem;
    box-sizing:border-box;
}
.pay-count{
    display:flex;
    justify-content:space-between;
    color:#949497;
    font-size:0.29rem;
    padding-bottom:0.32rem;
}
.pay-count i{
    color:#d8182d;
    font-weight:700;
}
.pay-btn .van-button{
    width:100%;
}
.van-button--danger{
    background-color:#d8182d;
    line-height:1.17rem;
    font-size:.48rem;
}
</style>