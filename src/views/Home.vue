<template>
    <div class="box">
        <!-- 搜索框 -->
        <div class="search">
            <van-search v-model="value" placeholder="请输入搜索关键词" @click="search" />
        </div>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in data.banners" :key="item.categoryId">
                <img :src="item.imgUrl" alt="" @click="toDetail(item)">
            </van-swipe-item>
        </van-swipe>
        <!-- 滑动播放 -->
        <div class="swiper-hd">
            <div class="imgA">
                <span v-for="item in data.banners" :key="item.categoryId" @click="toDetail(item)">
                    <img :src="item.imgUrl" alt="">
                </span>

            </div>
        </div>

        <!-- 列表介绍 -->
        <div class="navList">
            <ul>
                <li>
                    <div>
                        <img src="../../public/UI/svg-icons/svgs/chain-cat-boutique.svg" alt="">
                    </div>
                    <p>链猫精品</p>
                </li>
                <li>
                    <div>
                        <img src="../../public/UI/svg-icons/svgs/cm-area.svg" alt="">
                    </div>
                    <p>CM专区</p>
                </li>
                <li>
                    <div>
                        <img src="../../public/UI/svg-icons/svgs/collar-cm.svg" alt="">
                    </div>
                    <p>领CM币</p>
                </li>
                <li>
                    <div>
                        <img src="../../public/UI/svg-icons/svgs/coupon-svg.svg" alt="">
                    </div>
                    <p>领券</p>
                </li>
                <li>
                    <div>
                        <img src="../../public/UI/svg-icons/svgs/chain-cat-boutique.svg" alt="">
                    </div>
                    <p>链猫会员</p>
                </li>
            </ul>
        </div>
        <!-- proDuck -->
        <div class="produck">
            <div class="one">
                <div class="left">
                    <div class="title">
                        <span class="bold1">链猫秒杀</span>
                        <span>8点场</span>
                        <span> <van-count-down :time="time" /></span>
                    </div>
                    <div class="img">
                        <div>
                            <div><img src="../../public/UI/image/home/demo1.png" alt=""></div>
                            <p>￥121</p>
                            <p class="oldPrice">￥125</p>
                        </div>

                        <div>
                            <img src="../../public/UI/image/home/demo2.png" alt="">
                            <p>￥121</p>
                            <p class="oldPrice">￥125</p>
                        </div>
                        <div>
                            <img src="../../public/UI/image/home/demo3.png" alt="">
                            <p>￥121</p>
                            <p class="oldPrice">￥125</p>
                        </div>

                    </div>

                </div>
                <div class="right">
                    <div class="title">
                        <div>
                            <span class="bold1">
                                发现好货
                            </span>
                            <span class="biankuang">品质好物</span>
                        </div>
                        <span>好物不贵</span>
                    </div>
                    <div class="img">
                        <img src="../../public/UI/image/home/demo4.png" alt="">
                        <img src="../../public/UI/image/home/demo5.png" alt="">
                    </div>
                </div>
            </div>
            <div class="two">
                <div>
                    <div class="title">特价秒杀</div>
                    <div class="jieshao">10元抢购</div>
                    <div class="img">
                        <img src="../../public/UI/image/home/demo6.png" alt="">
                    </div>
                </div>
                <div>
                    <div class="title">品牌秒杀</div>
                    <div class="jieshao">笔记本秒杀</div>
                    <div class="img">
                        <img src="../../public/UI/image/home/demo7.png" alt="">
                    </div>
                </div>
                <div>
                    <div class="title">新品首发</div>
                    <div class="jieshao">小黑盒新品</div>
                    <div class="img">
                        <img src="../../public/UI/image/home/demo8.png" alt="">
                    </div>
                </div>
                <div>
                    <div class="title">优品排行</div>
                    <div class="jieshao">榜上好物购</div>
                    <div class="img">
                        <img src="../../public/UI/image/home/demo9.png" alt="">
                    </div>
                </div>
            </div>
            <div class="three">
                <div class="left">
                    <div class="title">
                        <div>
                            <span class="bold1">
                                大牌购走
                            </span>
                            <span class="biankuang">戴尔></span>
                        </div>
                        <span>信赖大品牌</span>
                    </div>
                    <div class="img">
                        <img src="../../public//UI//image/home/demo10.png" alt="">
                        <img src="../../public//UI//image/home/demo11.png" alt="">
                    </div>
                </div>
                <div class="right">
                    <div class="title">
                        <div>
                            <span class="bold1">
                                爱逛好店
                            </span>
                            <span class="biankuang">懂你所要</span>
                        </div>
                        <span>来逛个够</span>
                    </div>
                    <div class="img">
                        <img src="../../public//UI//image/home/demo12.png" alt="">
                        <img src="../../public//UI//image/home/demo13.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- tabList -->
        <div class="tabList">
            <div class="title">
                <van-tabs v-model:active="active" swipeable title-active-color="red" color="red" :ellipsis="false">
                    <van-tab v-for="item in data.tabList">
                        <template #title>
                            <span style="display: block; text-align: center;">{{ item.title }}</span>
                            <span style="display: block; font-size: 12px;">{{ item.name }}</span>
                        </template>
                        <!-- {{ item }} -->
                        <!-- {{item.list}} -->
                        <div class="T-card">
                            <div v-for="i in item.list" class="card" @click="toDetail(i)">
                                <div class="img">
                                    <img :src="i.img" alt="">
                                </div>

                                <p class="title">{{ i.title }}</p>
                                <div class="C-name">
                                    <span class="name">{{ i.forceValue }}算力</span>
                                    <span class="addCard" @click.stop="toShopCar(i)"> +</span>
                                </div>

                            </div>
                        </div>

                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <!-- tabbar -->
        <tabbar></tabbar>
    </div>

    <!-- <Button type="primary">提交</Button> -->
</template>
<script setup>

// import { Button } from "vant";
import { ref, provide, toRaw } from 'vue';
import { useRoute, useRouter, RouterView } from 'vue-router'
let router = useRouter()
import { showDialog } from 'vant';
import 'vant/es/dialog/style';
import axios from 'axios'
import { getHomeData } from '../api/index'


import { useStore } from 'vuex';
let store = useStore()


let message = ref(0)
let value = ref('')
let time = ref(30 * 60 * 60 * 1000);
let active = ref()

// 将数据存到一个数组里并进行本地存储
// let shopCarData = ref([])
// if(sessionStorage.getItem('data')){
//     shopCarData.value = JSON.parse(sessionStorage.getItem('data')) 
// }else{
//     shopCarData.value=[]
// }
// 将数据传到购物车页面
function toShopCar(item) {
    // item.id = new Date().getTime(),
        // console.log(i);
    // 使用vueX写法来进行购物车页面的业务逻辑
    store.commit('addState', item)

    // 本地存储的方法进行业务逻辑
    // shopCarData.value.unshift( i )

    // sessionStorage.setItem('data',JSON.stringify(toRaw(shopCarData.value)))
}

// 跳转到搜索页面
function search() {
    router.push({ path: '/search' })
    console.log(1);
}
// 跳转详情页
function toDetail(item) {
    router.push({
        path: '/detail', query: item
    }
    )
}

let params = {
    message: 1213
}
let data = ref({
    banners: {
        imgUrl: []
    },
    banners2: {
        imgUrl: []
    },
    tabList: {

    }
});
// 获取数据
getHomeData(params, '/home', 'POST').then(res => {
    // console.log(res);
    data.value = res
    // console.log(data.value);
}).catch(err => {
    console.log(err);
})
// 获取页面数据
// axios.get('/')
// axios.get('/sugrec?prod=pc&wd=a')
//     .then(res => {
//         console.log(res);

//     }).catch(err => {
//         console.log(err);
//         showDialog({ message: err.message })
//     })
</script>

<style scoped lang="less">
.box {
    background: #ccc;
    padding-bottom: 60px;
}

.tabList {
    width: 100vw;
    overflow: hidden;

    .title {
        .van-tabs__nav {
            background: transparent;
        }

        font-size: 12px;
        color: #ccc;

        .T-card {
            display: flex;
            flex-wrap: wrap;
            flex: 2;

            .card {
                width: 165px;
                background: #fff;
                margin: 10px;
                // padding: 10px;
                border-radius: 15px;

                // display: flex;
                img {
                    border-radius: 15px;
                    width: 165px;
                    height: 196px;
                }

                p,
                span {
                    margin: 5px 5px 5px 15px;
                }



                .C-name {
                    display: flex;
                    justify-content: space-between;

                    .name {
                        border-radius: 10px;
                        line-height: 22px;
                        background: red;
                        color: #fff;
                    }

                    .addCard {
                        // float:right;
                        margin-left: 30px;
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        line-height: 24px;
                        text-align: center;
                        background: red;
                        color: #fff;
                        border-radius: 25px;
                    }
                }

            }
        }



    }
}

.produck {
    width: 90vw;
    height: 400px;
    margin: 20px auto;
    background: #fff;
    border-radius: 15px;

    .one {
        display: flex;

        .left {
            margin-left: 10px;

            // height: 20px;
            .title {
                margin-top: 10px;

                span {
                    display: inline-block;
                }

                // height: 20px;
                .bold1 {
                    font-size: 14px;
                    font-weight: bold;
                    margin-right: 5px;
                    height: 23px;
                    line-height: 23px;
                }

                :nth-child(2) {
                    height: 18px;
                    line-height: 21px;
                    background-color: red;
                    color: #fff;
                    padding: 3px;

                    font-size: 12px;
                }

                :nth-child(3) {
                    .van-count-down {
                        border: 1px solid red;
                        font-size: 12px;
                        color: red;
                    }
                }

            }

            .img {
                display: flex;
                font-size: 12px;
                color: red;

                :nth-child(2) {
                    font-weight: bold;
                    margin: 0;
                }

                .oldPrice {
                    margin: 0;
                    color: #ccc;
                    text-decoration: line-through;
                }
            }

        }

        .right {
            font-size: 12px;

            .title {
                margin-top: 15px;

                .bold1 {
                    font-size: 14px;
                    font-weight: bold;
                    margin-right: 5px;
                    height: 23px;
                    line-height: 23px;
                    color: #000;
                }

                .biankuang {
                    // height: 23px;
                    // line-height: 50px;
                    border: 1px solid red;
                    color: red;
                }

                span {
                    color: #ccc;
                }
            }

            .img {
                width: 50px;
                height: 50px;
                display: flex;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .two {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;

        .title {
            font-size: 14px;
            font-weight: bold;
        }

        .jieshao {
            font-size: 8px;
            color: orange;
        }

        .img {
            width: 50px;
            height: 50px;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .three {
        display: flex;
        justify-content: space-around;

        .title {
            margin-top: 15px;
            font-size: 12px;

            .bold1 {
                font-size: 14px;
                font-weight: bold;
                margin-right: 5px;
                height: 23px;
                line-height: 23px;
                color: #000;
            }

            .biankuang {
                // height: 23px;
                // line-height: 50px;
                border: 1px solid red;
                color: red;
            }

            span {
                color: #ccc;
            }
        }
    }

}

.search {
    position: fixed;

    z-index: 100;
    width: 100vw;

    .van-search {
        background: transparent;
        border-radius: 15px;
    }
}

.swiper-hd {
    width: 100vw;
    overflow-x: auto;
}

.swiper-hd::-webkit-scrollbar {
    display: none;
}

.imgA {
    width: 1000px;

    span {
        display: inline-block;
        width: 60vw;
        height: 100px;
        margin-left: 20px;
        margin-top: 20px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
        }
    }

}

.my-swipe .van-swipe-item {
    img {
        width: 100vw;
        height: 175px;
    }
}

.navList {
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 12px;
        margin-top: 20px;

        li {
            width: 50px;
            height: 50px;

            div {
                width: 35px;
                height: 35px;
                margin: auto;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            p {
                margin-top: 5px;
                padding: 0;
                text-align: center;
            }
        }
    }
}

// div {
//     width: 375px;
//     height: 50px;
//     background: aqua;

//     p {
//         display: block;
//         width: 100px;
//         height: 30px;
//         background: @blue;
//     }
// }
</style>