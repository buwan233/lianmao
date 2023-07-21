<template>
    <div class="box">
        <navBar></navBar>
        <div class="card">
            <h3>选择类型</h3>
            <van-radio-group v-model="checked" direction="horizontal">
                <van-radio name="1">功能异常</van-radio>
                <van-radio name="2">体验问题</van-radio>
                <van-radio name="3">新功能建议</van-radio>
                <van-radio name="4">其他问题</van-radio>
            </van-radio-group>
            <textarea name="" id="" cols="30" rows="10" placeholder="请填写问题描述" class="textarea"></textarea>
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
const checked = ref('1');
</script>

<style scoped lang="less">
.box {
    background-color: #efeff4;
    height: 100vh;

    .card {
        width: 80vw;
        height: 90vh;
        margin: auto;
        border-radius: 15px;
        background: #fff;
        margin-top: 20px;
        padding: 16px;
        font-size: 12px;
        .textarea{
            width: 90%;
            height: 290px;
            margin:30px auto;
            padding: 10px;
            border-radius: 15px;
            border: 1px solid #ccc;

        }
    }
}
</style>