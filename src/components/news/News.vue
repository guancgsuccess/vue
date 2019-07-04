<template>
  <div>
    <ul class="mui-table-view">
      <li v-for="item in new_list" :key="item.id" class="mui-table-view-cell mui-media">
        <router-link :to="'/news/newsInfo/'+item.id">
          <img class="mui-media-object mui-pull-left" src="https://avatar.gitee.com/uploads/79/1202179_guancg.png!avatar100?1485131240">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间: {{item.ct_time}}</span>
              <span>点击:{{item.count}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
// Vue.use(MintUI)
export default {
  name: "News",
  data(){
    return{
      new_list:[]//新闻列表
    }
  },
  methods:{
    getNewsInfo(){
      	//发起vue-resource请求
          this.$http.get("news/list").then(function(result){
            if(result.status==200){
              console.log(result.body.data);
              this.new_list = result.body.data;
            }else{
              Toast("数据加载失败!")
            }
          })
      }
  },
  created(){
    this.getNewsInfo()
  }
};
</script>
<style scoped>
  h1{
    font-size: 14px;
  }
  .mui-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
    color:#226aff;
    display: flex;
    justify-content:space-between;
}
</style>
