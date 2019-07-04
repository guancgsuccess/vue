<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbodatas" :key="item.id">
        <img :src="item.url" :class="{'full':isfull}">
      </mt-swipe-item>
      <!-- <mt-swipe-item>
        <img src="../../assets/index_two.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/index_three.jpg">
      </mt-swipe-item>-->
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: "swiper",
  //父组件向子组件传入值
  props: ["lunbodatas","isfull"]
};
</script>
<style>
.mint-swipe {
  overflow: hidden;
  position: relative;
  height: 200px;
}
/* .mint-swipe-item:nth-child(1) {
  background-color: red;
}
.mint-swipe-item:nth-child(2) {
  background-color: yellow;
}
.mint-swipe-item:nth-child(3) {
  background-color: greenyellow;
} */
img {
  /* width: 100%; */
  height: 100%;
}
.full{
  width:100%;
}
</style>
