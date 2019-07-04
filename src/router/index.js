import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import Member from '@/components/home/Member'
import Search from '@/components/home/Search'
import Shopping from '@/components/home/Shopping'
import News from '@/components/news/News'
import NewsInfo from '@/components/news/NewsInfo'
import ShareInfo from '@/components/share/ShareInfo'
import PhotoInfo from '@/components/share/PhotoInfo'
import GoodsList from '@/components/goods/GoodsList'
import GoodsInfo from '@/components/goods/GoodsInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      //name: 'Index',
      component: Home
    },{
      path:'/home/newlist',
      component: News
    },
    {
      path: '/member',
      component: Member
    },{
      path: '/shopping',
      component: Shopping
    }
    ,{
      path: '/search',
      component: Search
    },
    {
      path: '/news/newsInfo/:id',
      component: NewsInfo
    },
    {
      path: '/share/info',
      component: ShareInfo
    },{
      path:'/share/photoinfo',
      component:PhotoInfo
    },{
      path:'/goods/list',
      component:GoodsList
    },{
      path:'/goods/goodsinfo/:id',
      component:GoodsInfo,
      name:GoodsInfo
    }
  ],
   // 切换路由高亮显示
   linkActiveClass:"mui-active"
})
