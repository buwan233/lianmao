import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('../views/Home.vue'),
      meta:{
        index:0
      }
    },
    {
      path: '/Mine',
      name: 'Mine',
      component:()=>import('../views/Mine.vue'),
      meta:{
        index:1
      }
    },
    {
      path: '/ShopCar',
      name: 'ShopCar',
      component:()=>import('../views/ShopCar.vue'),
      meta:{
        index:2
      }
    },
    {
      path: '/TabList',
      name: 'TabList',
      component:()=>import('../views/TabList.vue'),
      meta:{
        index:3
      }
    }
    ,
    {
      path: '/search',
      name: 'search',
      component:()=>import('../views/search.vue'),
      meta:{
        index:4
      }
    }
    ,
    {
      path: '/detail',
      name: 'detail',
      component:()=>import('../views/detail.vue'),
      meta:{
        index:5
      }
    },
    {
      path: '/site',
      name: 'site',
      component:()=>import('../views/site.vue'),
      meta:{
        index:6
      }
    }
    ,
    {
      path: '/addSite',
      name: 'addSite',
      component:()=>import('../views/addSite.vue'),
      meta:{
        index:7
      }
    },
    {
      path: '/information',
      name: 'information',
      component:()=>import('../views/information.vue'),
      meta:{
        index:8
      }
    }
    ,
    {
      path: '/help',
      name: 'help',
      component:()=>import('../views/help.vue'),
      meta:{
        index:9
      }
    }
    ,
    {
      path: '/fankui',
      name: 'fankui',
      component:()=>import('../views/fankui.vue'),
      meta:{
        index:10
      }
    }
    ,
    {
      path: '/setting',
      name: 'setting',
      component:()=>import('../views/setting.vue'),
      meta:{
        index:11
      }
    },
    {
      path: '/myorder',
      name: 'myorder',
      component:()=>import('../views/myorder.vue'),
      meta:{
        index:12
      }
    }
    ,
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component:()=>import('../views/orderDetail.vue'),
      meta:{
        index:13
      }
    },
    {
      path: '/order',
      name: 'order',
      component:()=>import('../views/Order.vue'),
      meta:{
        index:14
      }
    },
    {
      path: '/trade',
      name: 'trade',
      component:()=>import('../views/Trade.vue'),
      meta:{
        index:15
      }
    }
  ]
})

export default router
