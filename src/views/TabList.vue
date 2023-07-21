<template>
    <h2>分类</h2>
    <tabbar></tabbar>
    <div>
        <van-tree-select v-model:main-active-index="activeIndex" height="75vh" :items="items">
            <template #content>
                <!-- {{ items[activeIndex].list }} -->
                <div v-for="i in items[activeIndex].list">

                    <p style="font-weight: bold;">{{ i.title }}</p>

                    <div v-for="item in i.productList"  class="content-t">
                        <!-- {{ item. imgUrl}} -->
                        <img :src="item.imgUrl" alt="">
                        <span>{{ item.title }}</span>
                    </div>
                </div>
            </template>
        </van-tree-select>

    </div>
</template>
<script setup>
import tabbar from '../components/tabbar.vue'
import { ref } from 'vue';
const activeIndex = ref(0);
let items = ref([
    {
        text: '热门推荐',
        // img: "https://loremflickr.com/640/480/city",
        list: []
    }
])
const active = ref(0);
let data = ref({
    categoryData: {
        imgUrl: []
    },
    banners2: {
        imgUrl: []
    },
    tabList: {

    }
});
function onChange(index) {
    console.log(index);
    // provide('index',index)
}
// 获取数据
import {getCategoryData } from '../api/index'
import { provide } from 'vue';
let message = ref(0)
let params = {
    message: 1213
}
getCategoryData(params).then(res => {
    // console.log(res.categoryData[0].list);
    data.value = res
    items.value[0].list = res.categoryData[0].list
    res.categoryData.forEach(element => {
        // console.log(element);
        // items.value = element
        items.value.push({
            'text': element.name,
            'list': element.list,
            'img': element.mainImgUrl
        })
        // console.log(items.value);
    });

    // console.log(data.value);
}).catch(err => {
    console.log(err);
})


</script>

<style scoped lang="less">
.LIst {
    width: 85px;
    height: 77px;
    font-size: 14px;

    span {
        width: 30px;
        height: 20px;
        text-decoration: none;
    }
}

.van-tree-select {
    height: 800px;
    .van-sidebar{
        overflow-y: auto;
    }
   
}
.content-t{
    display: inline-block;
    width: 72px;
    height: 90px;
    margin-left: 10px;
    img{
        width: 55px;
        height: 68px;
    }
    span{
        display: block;
        margin: 5px 0 5px 5px;
    }
}
</style>