<template>
    <div>
        <div class="box">
            <navBar></navBar>
            <div class="card">
                <div class="card-i">
                    <div>
                        <img src="../../public/UI/svg-icons/svgs/product-help.svg" alt="">
                        
                        <div>产品帮助</div>
                    </div>
                    <div @click="router.push({path:'/fankui',query:{title:'问题反馈'}})">
                        <img src="../../public/UI/svg-icons/svgs/feedback-svg.svg" alt="">
                        <div>问题反馈</div>
                    </div>
                </div>
            </div>
            <div class="card">
                <h3>产品帮助</h3>
                <van-collapse v-model="activeNames">
                    <van-collapse-item title="会员帮助" name="1">
                       <div>如何修改登录密码？</div> 
                       <div>账号登录</div> 
                       <div>发现账号异常怎么办？</div> 
                    </van-collapse-item>
                    <van-collapse-item title="支持方式" name="2">
                        技术无非就是那些开发它的人的共同灵魂。
                    </van-collapse-item>
                    <van-collapse-item title="退货换货" name="3">
                        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
                    </van-collapse-item>
                    <van-collapse-item title="商家帮助" name="4">
                        在代码阅读过程中质量的唯一标准。
                    </van-collapse-item>
                    <van-collapse-item title="服务承诺" name="5">
                        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
                    </van-collapse-item>
                    <van-collapse-item title="联系我们" name="6">
                        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
                    </van-collapse-item>
                </van-collapse>

            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import navBar from '../components/navBar.vue'
import { provide } from 'vue';
let router = useRouter()
let route = useRoute()
provide('title', route.query.title)
let activeNames= ref(['1'])
</script>

<style scoped lang="less">
.box {
    background-color: #efeff4;
    min-height: 100vh;
    .card {
        width: 80vw;
        // height: 90px;
        margin: auto;
        border-radius: 15px;
        background: #fff;
        margin-top: 20px;
        padding: 16px;
        font-size: 12px;
       
        .card-i {
            display: flex;
            justify-content: space-around;
            text-align: center;
            img{
            height: 70px;
            width: 70px;
        }
        }
    }
}
</style>