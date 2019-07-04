<template>
  <div>
    <!--小球-->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!--商品轮播区域-->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <my-swiper :lunbodatas="datalist" :isfull="false"></my-swiper>
        </div>
      </div>
    </div>

    <!--商品购买区域-->
    <div class="mui-card">
      <div class="mui-card-header">商品的名称标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>$2399</del>&nbsp;&nbsp;销售价:
            <span class="now_price">$2000</span>
          </p>
          <p>
            购买数量:
            <my-number-box @func="show"></my-number-box>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="add">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!--商品参数区域-->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:</p>
          <p>库存情况:</p>
          <p>上架时间:</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
//导入轮播组件
import swiper from "../subcomponents/swiper";
//导入numberbox自定义组件
import numberbox from "../subcomponents/goodsinfo_numberbox";

export default {
  name: "GoodsInfo",
  data() {
    return {
      id: this.$route.params.id,
      seletedCount:1,
      ballFlag: false,
      datalist: [
        { id: 1, url: "/static/img/b1.png" },
        { id: 2, url: "/static/img/b2.png" },
        { id: 3, url: "/static/img/b3.png" }
      ]
    };
  },
  components: {
    "my-swiper": swiper,
    "my-number-box": numberbox
  },
  methods: {
    
    add() {
      this.ballFlag = !this.ballFlag;

      //保存到store中的car数组中的商品的信息对象
      var goodsinfo = {
        id:this.id,
        count:this.seletedCount
      }
      //调用store总能的mutations
      this.$store.commit('addToCar',goodsinfo);
    },

    show(data){
        console.log("父组件:"+data);
        this.seletedCount = data;
    },

    //el代表的执行动画的DOM元素,是一个原生的js对象
    beforeEnter(el) {
      //表示动画入场之前,动画尚未开始时的样式
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      //获取小球的页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      //alert(ballPosition.left)
      //获取徽标在页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
      // alert(xDist+":"+yDist)

      el.offsetWidth; //强制刷新动画效果,否则没有动画的效果
      //动画开始之后的样式,这里,可以设置动画最终的状态
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all 1s ease";
      done(); //强制调用afterEnter()函数 - 让小球动画完毕之后立即消失
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
  }
};
</script>
<style scoped>
.now_price {
  color: red;
  font-weight: bold;
}

.ball {
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  top: 388px;
  left: 137px;
}
</style>


