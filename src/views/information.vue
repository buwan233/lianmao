<template>
    <!-- <h4>消息中心</h4> -->
    
    <div class="box">
        <navBar></navBar>
        <div class="card">
            <div style="display: flex; justify-content: space-between;">
                <div style="background: #ffbf43; color: #fff;">
                    问题反馈
                </div>
                <div>
                    时间
                </div>
            </div>
            <div>
                您的反馈我们已经收到，我们会及时跟踪改进，感谢一路有你
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
</script>

<style scoped lang="less">
    .box{
        background-color: #efeff4;
        height: 100vh;
        .card{
            width: 80vw;
            height: 90px;
            margin: auto;
            border-radius: 15px;
            background: #fff;
            margin-top: 20px;
            padding: 16px;
            font-size: 12px;
        }
    }
</style>