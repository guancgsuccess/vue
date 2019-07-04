<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="https://img.alicdn.com/imgextra/i3/113418469/O1CN01tSbH8W2CQqntTJaGD_!!0-saturn_solar.jpg_220x220.jpg_.webp">
            <h1 class="title">小米(Mi)小米Note 16G双网通版</h1>
        </div>
         <!-- 在网页中,有两种跳转方式
            方式1:使用a标签的形式叫做标签跳转
            方式2:使用window.location.href的形式,叫做编程式导航
          -->
         <div class="goods-item" @click="goDetail(1)">
            <img src="https://img.alicdn.com/imgextra/i3/113418469/O1CN01tSbH8W2CQqntTJaGD_!!0-saturn_solar.jpg_220x220.jpg_.webp">
            <h1 class="title">小米(Mi)小米Note 16G双网通版</h1>
        </div>
         <div class="goods-item" @click="goDetail(2)">
            <img src="https://img.alicdn.com/imgextra/i3/113418469/O1CN01tSbH8W2CQqntTJaGD_!!0-saturn_solar.jpg_220x220.jpg_.webp">
            <h1 class="title">小米(Mi)小米Note 16G双网通版</h1>
        </div>
    </div>
</template>
<script>
export default {
    name:"GoodsList",
    methods:{
        goDetail(id){
            //使用JS的形式进行路由导航
            //注意一定要区分this.$route和this.$router
            //this.$route是路由[参数对象,所有路由中的参数,query,params都是他]
            //this.$router是一个路由导航对象,使用它可以方便进行路由前进后退,跳转
            //1. 最简单的
            this.$router.push("/goods/goodsinfo/"+id);
        }
    }
}
</script>
<style scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content:space-between;
        
    }

    .goods-item{
        width: 48%;
        border:1px solid #ccc;
        box-shadow: 0px 0px 8px #ccc;
        /* margin: 5px; */
        margin: 2px;
    }

    .goods-item img{
        width:100%
    }
    .title{
        font-size: 14px;
    }
</style>

