<template>
    <div class="goods-list">
        <router-link tag="div" :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="item in goods" :key="item.id">
            <img :src="item.src" alt="">
            <h1 class="title">{{item.name}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.new_price}}</span>
                    <span class="old">￥{{item.old_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.quantity}}件</span>
                </p>
            </div>
        </router-link>
    </div>  
</template>

<script>
export default {
    data () {
        return {
            goods:[]
        }
    },
    created(){
        this.getgoods()
    },
    methods: {
        getgoods(){
            this.$http.get('http://localhost:5000/getgoods')
            .then(data=>{
                this.goods = data.body
            })
        }
    }
}
</script>

<style lang='scss'>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    .goods-item{
        width: 45%;
        margin: 30px 0 0 10px;
        padding: 2px;
        background-color: #eeeeee;
        img{
            width: 100%;
            
        }
    .info{
        margin-top: 10px;
        .price{
            .now{
                color: red;
                font-size: 16px;
            }
            .old{
                text-decoration: line-through;
                font-size: 12px;
                margin-left: 10px;
            }
        }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }
    }
}
}

</style>