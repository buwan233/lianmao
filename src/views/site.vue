<template>
    <div class="box">
        
        <navBar></navBar>
        <div class="site">

            <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" add-button-text="新建地址"
                @add="onAdd" />

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
// console.log(route);
provide('title',route.query.title)

const onAdd = () => {
    router.push({ path: '/addSite' })
};

// const onEdit = (item, index) => showToast('编辑地址:' + index);

const chosenAddressId = ref('1');
const list = [
    {
        id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        isDefault: true,
    },
    {
        id: '2',
        name: '李四',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号',
    },
];

</script>

<style scoped lang="less">
.box {
    height: 800px;
    background: #efeff4;
}
</style>