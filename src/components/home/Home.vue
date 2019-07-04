<template>
  <div>
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../assets/index_first.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/index_two.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/index_three.jpg">
      </mt-swipe-item>
    </mt-swipe> -->

    <!--轮播已经被封装成一个组件了-->
    <my-swiper :lunbodatas="datalist" :isfull="true"></my-swiper>

    <!--九宫格-->
      <home-body></home-body>
  </div>
</template>

<script>
import HomeBody from "./HomeBody";

//导入自定义封装的轮播的组件
import swiper from '../subcomponents/swiper'

export default {
  name: "Home",
  data(){
    return{
      datalist:[{"id":1,"url":require("../../assets/index_first.jpg")},{"id":2,"url":require("../../assets/index_two.jpg")},{"id":3,"url":require("../../assets/index_three.jpg")}],
    }
  },
  components: {
    "home-body": HomeBody,
    "my-swiper": swiper
  }
};
</script>
<style scoped>

body {
  background-color: white;
}

</style>