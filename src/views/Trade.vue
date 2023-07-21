<template>
    <div id="main">
        <div class="header">
            <img src="../../public/UI/icons/left-green-white.png" alt="" @click="returnBack">
            <h5>交易详情</h5>
            <div></div>
        </div>
        <div class="card-box">
            <ul class="card-content">
                <li class="success-icon">
                    <img src="../../public/UI/image/product/store-headerM.png" alt="">
                </li>
                <li class="pay-text">
                    <span>1099 TOP</span>
                </li>
                <li class="pay-tips">
                    <span>支付成功</span>
                </li>
            </ul>
            <ul class="list-info">
                <li class="item-info">
                    <label for="">商品</label>
                    <span>古力娜扎的新装</span>
                </li>
                <li class="item-info">
                    <label for="">支付方式</label>
                    <span>TOP支付</span>
                </li>
                <li class="item-info">
                    <label for="">支付单号</label>
                    <span>101010101010101010</span>
                </li>
                <li class="item-info">
                    <label for="">成交时间</label>
                    <span>2019年06月06日 16:36:33</span>
                </li>
            </ul>
            <div class="login-register-btns">
                <span class="register-btn" @click="finish">完成</span>
                <span class="login-btn" @click="shop">返回商家</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

function returnBack() {
    history.back();
}
let router = useRouter();
function finish() {
    router.push({ path: '/TabList' });
}
function shop() {
    router.push({ path: '/ShopCar' });
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#main {
    height: 100vh;
    padding: 0 20px;
    background-color: #efeff4;
}

.header {
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
}

.header img,
.order-list .small {
    width: 24px;
    height: 24px;
    margin-right: 5px;
}

.card-box {
    padding: 0 0.42rem;
    margin-top: 0.26rem;
    width: 9rem;
    height: 11.81rem;
    background-color: #fff;
    box-shadow: 0 0.13rem 0.13rem 0 rgba(0, 0, 0, .1);
    border-radius: 0.10rem;
    box-sizing: border-box;
}

.card-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #333;
}

.success-icon {
    padding-top: 0.8rem;
    padding-bottom: 0.26rem;
}

.success-icon img {
    width: 0.85rem;
    height: 0.85rem;
}

.pay-text {
    padding-bottom: 0.26rem;
    font-size: .69rem;
    font-weight: 600;
}

.pay-tips {
    font-size: .45rem;
}

.list-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    font-size: .37rem;
    padding-top: 1.06rem;
}

.list-info .item-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.42rem;
}

.item-info label {
    color: #9b9b9b;
}

.item-info span {
    color: #3a3a3a;
}

.login-register-btns {
    padding-top: 0.93rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.register-btn {
    line-height: 1.17rem;
    color: #949497;
    font-size: .45rem;
    border: 0.02rem solid #949497;
    background-color: transparent;
    border-radius: .010rem;
    width: 4rem;
    height: 1.17rem;
}

.login-btn {
    width: 4rem;
    height: 1.17rem;
    line-height: 1.17rem;
    color: #fff;
    font-size: .45rem;
    border: 0.02rem solid #d8182d;
    border-radius: 0.10rem;
    background-color: #d8182d;
    margin-left: 0.4rem;
}</style>