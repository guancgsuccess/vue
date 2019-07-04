// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Header from './components/global/Header'

import router from './router'

import '../static/mui/css/mui.min.css'

import '../static/mui/css/icons-extra.css'

import Footer from './components/global/Footer'

//导入vue-resource
import VueResource from 'vue-resource';

import { Lazyload } from 'mint-ui';

import VuePreview from 'vue-preview';
Vue.use(VuePreview) 

Vue.use(Lazyload);

//使用
Vue.use(VueResource)

Vue.http.options.root = ' https://www.easy-mock.com/mock/5cfb7f58e5e7b850d846cd5b/news/list';

Vue.component("my-footer",Footer)

// import { Header } from 'mint-ui';

// import { Button } from 'mint-ui';

// Vue.component(Button.name, Button);

// Vue.component(Header.name, Header);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//注册vuex
import Vuex from 'vuex'

Vue.use(Vuex);

Vue.use(MintUI)

Vue.config.productionTip = false
//全局启用emulateJSON
Vue.http.options.emulateJSON = true

// Vue.component("nav-header",Header);

var store = new Vuex.Store({
  state:{//this.$store.state.**
      car:[] //将购物车中的商品的数据,用一个数组存储起来,在car数组中,存储一些商品的对象
          //数据格式{id:商品的id,count:商品的购买数量,price:商品的单价,selected:false}
  },
  mutations:{//this.$store.commit('方法名称','按需传递唯一的参数')
      addToCar(state,goodsinfo){
        //点击加入购物车,把商品信息,保存到store中的car上
        //分析:
        //1. 如果购物车中,之前就已经有这个对应的商品了,那么,只需要更新数量
        //2. 如果没有,则直接把商品数据push到car中即可
        
        //假设在购物车中,没有找到对应的商品信息
        var flag = false;
        state.car.some(item => {
          if(item.id == goodsinfo.id){
            item.count+=parseInt(goodsinfo.count)
            flag = true;
            return true;
          }
        })
        //如果最终,循环完毕,得到的flag,还是false,则把商品数据直接push到购物车中
        if(!flag){
          state.car.push(goodsinfo);
        }
      }
  },
  getters:{//this.$store.getters.***
    getAllCount(state){
      var c = 0;
      state.car.forEach(item=>{
        c+=item.count
      })
      return c;
    }
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store//挂载store状态管理对象
});
