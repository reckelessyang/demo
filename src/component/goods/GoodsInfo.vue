<template>
    <div class="goodsinfo-container">
        <!-- 轮播图区域 -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<swiper :lunbotu="lunbotu" :imgname="'img'"></swiper>
					</div>
				</div>
			</div>
        <!-- 商品购买区域 -->
      <div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
              市场价：<span style="margin-right:10px"><del>￥{{goodsinfo.market_value}}</del></span>
              发售价: <span class="sellprice">￥{{goodsinfo.Selling_value}}</span>
            </p>
            <div>
              <p>购买数量</p>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small">加入购物车</mt-button>
            </div>
					</div>
				</div>

			</div>
        <!-- 商品参数区域 -->
              <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{goodsinfo.goods_no}}</p>
            <p>库存情况:{{goodsinfo.quantity}}</p>
            <p>发售时间:{{goodsinfo.sell_date}}</p>
					</div>
				</div>
				<div class="mui-card-footer btnarea">
          <mt-button type="primary" size="large" plain>图文介绍</mt-button>
          <mt-button type="danger" size="large" plain>商品评论</mt-button>
        </div>
			</div>
    </div>
</template>
<script>
//导入自己封装的轮播图
import swiper from '../subcomponents/Swiper.vue'
export default {
  data () {
    return {
      lunbotu:[],
      goodsinfo:{}
    };
  },
  created(){
    this.getlunbotu()
    this.getGoodsInfoById()
  },
  methods: {
     getlunbotu(){
      this.$http.get('http://localhost:5000/gooodsinfo/lunbotu/'+this.id)
      .then(data=>{
        this.lunbotu = data.body
        console.log(this.lunbotu)
      })
    },
    getGoodsInfoById(){
      this.$http.get('http://localhost:5000/goodsinfo/info/'+this.id)
      .then(data=>{
        this.goodsinfo = data.body
        console.log(this.goodsinfo)
      })
    }
  },
  components: {
    swiper
  },
  //可以直接获取父组件传来的id
  props:['id']
}
</script>
<style lang="scss" scoped>
.goodsinfo-container{
  overflow: hidden;
  background-color: #eeeeee;
}
.sellprice{
  font-size: 16px;
  color: red;
  font-weight: bold;
}
.btnarea{
  flex-direction: column;
  button + button {
    margin-top: 15px;
  }
}
</style>