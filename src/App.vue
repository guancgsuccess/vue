<template>
  <div id="app" class="app_container">
    <!--引入顶部的Header区域-->
    <!-- <nav-header></nav-header> -->
    <mt-header fixed title="驰星教育aistar"></mt-header>
    
    <!--中间的路由区域router-view-->
    <transition>
      <router-view></router-view>
    </transition>

    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .app_container{
    padding-top:40px;
    overflow-x: hidden
  }
  /* 动画效果 */
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}

.v-enter-active,
.v-leave-active {
  opacity: 1;
  transition: all 0.8s ease;
}
body{
  background-color: white
}
</style>
