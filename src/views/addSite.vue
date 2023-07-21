<template>
<van-address-edit
  :area-list="areaList"
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>

</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { areaList } from '@vant/area-data';
let router = useRouter()
const searchResult = ref([]);
// let areaList=areaList;
// console.log(areaList);
const onSave = () => {
    router.push({path:'/site'})
};
const onDelete = () =>{router.push({path:'/site'})};
const onChangeDetail = (val) => {
  if (val) {
    searchResult.value = [
      {
        name: '黄龙万科中心',
        address: '杭州市西湖区',
      },
    ];
  } else {
    searchResult.value = [];
  }
};
</script>

<style scoped>
</style>