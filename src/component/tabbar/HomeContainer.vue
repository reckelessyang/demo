<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
        <mt-swipe-item :key="item.id" v-for="item in lunbotuList">
            <img :src="item.img" alt="">    
        </mt-swipe-item>
        </mt-swipe>
        
        <!-- 九宫格--六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newslist">
                <img src="/src/image/nmd.png" alt="">
                <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/photoslist">
                <img src="/src/image/adidas.png" alt="">
                <div class="mui-media-body">图片分享</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/goodslist">
                <img src="/src/image/airjordan.png" alt="">
                <div class="mui-media-body">商品购买</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newslist">
                <img src="/src/image/converse.png" alt="">
                <div class="mui-media-body">留言反馈</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newslist">
                <img src="/src/image/vans.png" alt="">
                <div class="mui-media-body">视频专区</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newslist">
                <img src="/src/image/yeezy.png" alt="">
                <div class="mui-media-body">联系我们</div>
            </router-link>
        </li>
    </ul> 
    </div>
    
    
</template>

<script>
import {Toast} from 'mint-ui'

export default {
    data () {
        return {
            lunbotuList:[]
        }
    },
    created(){
        this.getLunbotu()
    },
    methods: {
        getLunbotu(){
            this.$http.get('http://localhost:5000/index')
            .then(data=>{
                if(data.status === 200){
                    //成功了
                    this.lunbotuList = data.body
                    console.log(data.body)
                }else{

                }
            })
        }
    }
}
</script>

<style lang='scss' scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            /* 交集选择器 */
            &:nth-child(1){
                background-color: pink;
            }
            &:nth-child(2){
                background-color: skyblue;
            }    
            &:nth-child(3){
                background-color: yellowgreen;
            }  
            img{
                width: 100%;
                height: 100%;
            }      
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: white;
        img{
            width: 60px;
            height: 60px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }


</style>