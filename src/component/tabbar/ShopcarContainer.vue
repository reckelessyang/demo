<template>
    <div>
        <div class="shopcar-container" v-for="item in goodslist" :key="item.id">
            <div class="mui-card">
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner goods-item">
                            <!-- 开关 -->
                            <!-- <yd-switch @click="changeSelect(item.id,seletedObj[item.id])" v-model="seletedObj[item.id]"></yd-switch -->
                            <mt-switch @change="changeSelect(item.id,seletedObj[item.id])" v-model="seletedObj[item.id]"></mt-switch>
                            <img :src="item.img">
                            <div class="info">
                                <h1>{{item.title}}</h1>
                                <div class="goods-info">
                                    <span class="price">￥{{item.Selling_value}}</span>
                                    <nobox :id="item.id" :initcount='countObj[item.id]'></nobox>
                                    <a href="#" @click.prevent = 'del(item.id)'>删除</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
        <!-- 计算区域 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
                            <p>总计(不含运费)</p>
                            <p>
                                已勾选商品<span class="num">0</span>件，总价<span class="num">￥0</span>
                            </p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
    </div> 
    <!-- 计算区域 -->
    
</template>

<script>
import nobox from '../subcomponents/shopcar_nobox.vue'
import {mapGetters,mapMutations} from 'vuex'
export default {
    data () {
        return {
            switch1: true,
            goodslist:[],    //商品列表
        }
    },
    created () {
        this.getGoodList()       
    },
    mounted () {
        this.count = this.countObj
        console.log(this.count)
        console.log(this.seletedObj)
    },
    methods: {
        ...mapMutations(['delFromCart','changeSelectState']),
    getGoodList(){
        if(this.idstr<=0){
            return
        }
        this.$http.get('http://localhost:5000/goodsinfo/car/'+this.idstr)
        .then(data=>{
            this.goodslist = data.body
        })
        },
        //从界面删除
    del(id){
        //删除商品
        console.log(id)
        this.goodslist.some((item,i)=>{
            if(item.id == id){
                this.goodslist.splice(i,1)
                return true
            }
        })
        this.delFromCart(id)
    },
    changeSelect(id,select){
        //更改开关状态
        this.changeSelectState({id,selected:select})
    }
    },
    components: {
        nobox
    },
    computed: {
        ...mapGetters(['idstr','countObj','seletedObj'])
    }
}
</script>

<style lang='scss' scoped>
.shopcar-container{
    background-color: #eeeeee;
    overflow: hidden;
    .goods-item{
        display: flex;
        justify-content:space-between;
        img{
            width: 60px;
            
        }
        .info{
            h1{
                font-size: 18px;
            }
            .goods-info{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .price{
                    color: orange;
                    font-size: 20px;
                }
                a{
                    color:red;
                }
            }
        }
    }
}
.jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        .num{
            color: orange;
            font-size: 20px;
        }
    }
}

</style>