<template>
    <div>
        <div class="mui-content">
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
					</div>
				</div>
			</div>
		</div>

        <ul class="photo-list">
            <router-link tag="li" to="/share/photoinfo" v-for="item in imgsUrl" :key="item.id">
                <!-- <img v-lazy="item.url" alt="图片加载失败" src=""> -->
                <!-- {{item.url}} -->
                <img v-lazy="item.url" alt="图片加载失败2" >
                <div class="info">
                    <div class="info-title">图片标题ssssss</div>
                    <div class="info-body">图片说明ssssss</div>
                </div>
            </router-link> 
        </ul>
        <!-- <img src="../../assets/img/b3.png"> -->
    </div>
</template>

<script>
import mui from '../../../static/mui/js/mui.min.js'

export default {
    name: "ShareInfo",
    data:function(){
        return {
            imgsUrl:[]
        }
    },
    created(){
        this.getImgsUrl()
    },
    methods:{
        getImgsUrl(){
            this.imgsUrl = [{"id":"1","url":"/static/img/s2.png"},{"id":"2","url":"/static/img/s2.png"},{"id":"3","url":"/static/img/s3.png"},{"id":"4","url":"/static/img/b1.png"},{"id":"5","url":"/static/img/b2.png"},{"id":"6","url":"/static/img/s3.png"}]
        }
    },
    mounted:function(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>
<style scoped>
    *{
        touch-action: pan-y
    }
    .photo-list{
        list-style: none;
        margin:0;
        padding: 0
    }
    .photo-list li{
        color:white;
        margin-bottom: 10px;
        position: relative;
    }
    .photo-list img{
        width: 100%;
        vertical-align: middle
        
    }
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
        }
    .info{
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
        text-align: left;
        width: 100%
    }
</style>


