<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" ref="count" @change.prevent.stop="changeCount" type="number" value="5" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../../static/mui/js/mui.js";

export default {
  name: "numberbox",
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods:{
      changeCount(){
        console.log(this+'zzzz')
        this.$emit('func',this.$refs.count.value)
      }
  }
};
</script>

