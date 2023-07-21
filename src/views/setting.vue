<template>
    <div class="box">
        <navBar></navBar>
        <div style="margin-top: 30px;">
            <van-cell-group inset>
                <van-cell title="消息提醒">
                    <template #value>
                        <span><van-switch v-model="checked" />
                        </span>
                    </template>
                </van-cell>
                <van-cell title="清除缓存" is-link />
                <van-cell title="关于我们" is-link />
            </van-cell-group>
        </div>
        <button class="button">退出登录</button>
      
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
const checked = ref(false);
</script>

<style scoped lang="less">
.box {
    width: 100vw;
    background-color: #efeff4;
    min-height: 100vh;
    .button{
        width: 90vw;
        height: 44px;
        display: block;
        // margin: auto;
        margin:30px auto;
        background: #fff;
        border:1px solid red ;
        color: red;
    }
}
</style>