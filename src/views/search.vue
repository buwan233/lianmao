<template >
    <div style="background: #efefef;">
        <!-- 搜索框 -->
        <div style="display: flex; justify-content: space-around; background: #efefef;">
            <span
                style="display: block; border-radius: 50%; background: #fff; border: 0;  width: 15px; height: 30px; line-height: 30px; margin: auto 0; font-weight: bold;"
                @click="router.go(-1)">&lt;
            </span>

            <van-search v-model="value" show-action placeholder="请输入搜索关键词" >
                <template #action>
                    <div @click="onClickButton">搜索</div>
                </template>
            </van-search>
            <i></i>
        </div>

        <div class="box">
            <p>热搜词</p>
            <div>
                <span v-for=" item in hot">
                {{ item.title }}
                <van-icon name="fire" color="#ee0a24"  v-if="item.hot"/>
                </span>
            </div>
            <p> 历史搜索 <van-icon name="cross" @click="remove" /></p>
            <span v-for="item in data">{{ item.val }}</span>

        </div>
    </div>
</template>
<script setup>
import { toRaw, ref } from 'vue';
import { Dialog, showDialog, showConfirmDialog } from 'vant';
import {useRoute, useRouter,RouterView} from 'vue-router'
import { getHotData } from '../api/index'
let router = useRouter()
const value = ref('');
let data = ref([
    // {
    //     val: 1
    // },
    // {
    //     val: 2
    // }
])
if (sessionStorage.getItem('val')) {

    data.value = JSON.parse(sessionStorage.getItem('val'))
    // console.log(data.value);
}
const onClickButton = () => {
    // console.log(value.value);
    if (!value.value) return
    data.value.push(
        {
            val: value.value
        }
    )
    sessionStorage.setItem('val', JSON.stringify(toRaw(data.value)))
    value.value = ''
}
function out() {
    router.push({path:'/'})
}
function remove() {
    showDialog({
        message: '确认删除历史记录',
        showCancelButton: true
    }).then(() => {
        // on close
        // console.log(1);
        sessionStorage.removeItem('val');
        // data.value=ref()
        location.reload()
        console.log(data.value);
        // data.value = ref([])
    }).catch(() => {
        return
    })
}
let hot =ref([])

let message = ref(0)
let params = {
    message: 1213
}
getHotData(params).then(res => {
    console.log(res);
    hot.value = res.data
    console.log(hot.value);

}).catch(err => {
    console.log(err);
})
</script>

<style scoped lang="less">
span {
    display: inline-block;
    border: 1px solid red;
    margin: 0 16px 0 0;
    font-size: 13px;
    padding: 2px 10px;
    border-radius: 5px;
}
.van-search--show-action{
    background: #efefef;
}
.box {
    margin-left: 15px;
    height: 700px;
    p {
        color: red;
        font-size: 14px;
    }
}
</style>