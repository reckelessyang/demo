<template>
    <div class="goodsinfo-container">
      <!-- 要实现动画的小球 -->
      <transition name="fade"  @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="flag"></div>
        </transition>
      
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
              <p>
                购买数量:
                <!-- 注意这里的max是库存量 -->
                <!-- <nobox :max ='goodsinfo.quantity' ></nobox> -->
                <!-- 由于goodsinfo是通过ajax动态获取的，但是ajax是异步请求 -->
                <!-- 因此可能导致这样的情况：nobox组件先于ajax渲染出来，
                  此时就会导致传递的max的值为undifine
                 -->

                <nobox ref="count" :max="goodsinfo.quantity"></nobox>
                </p>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button  type="danger" size="small" @click="addGoodscar">加入购物车</mt-button>
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
          <mt-button type="primary" size="large" plain @click="goDesc">图文介绍</mt-button>
        </div>
			</div>
    </div>
</template>
<script>
//导入自己封装的轮播图
import swiper from '../subcomponents/Swiper.vue'
//导入数字狂组件
import nobox from '../subcomponents/goodinfo_nobox.vue'
export default {
  data () {
    return {
      lunbotu:[],
      goodsinfo:{},
      flag:false,//小球的状态
      count:1
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
    },
    goDesc(){
      //点击按钮，跳转到商品的描述页面
      //this.$router.push('/home/goodsdesc/'+this.goodsinfo.id)
      this.$router.push({name:'goodsdesc',params:{id:this.goodsinfo.id}})
    },
    addGoodscar(){
      this.flag = !this.flag
      this.count = this.$refs.count.$data.spinner1
      //调用mutations中的addToCar
      this.$store.commit("addToCar",{id:this.id,count:this.count,selected:true,price:this.goodsinfo.Selling_value})

      
    },
    beforeEnter(el){
        el.style.transform = 'translate(0,0)'
    },
    enter(el,done){
        el.offsetLeft
        //动态获取小球的横纵坐标
        const ballPos = el.getBoundingClientRect()
        //动态获取徽标的横纵坐标
        const badgePos = document.getElementById('badge').getBoundingClientRect()
        
        const left = badgePos.left - ballPos.left
        const top = badgePos.top - ballPos.top
        //动态设置top和left值
        el.style.transform = "translate("+left+"px,"+top+"px)"
        el.style.transition = 'all .5s ease'
        done()
        
    },
    afterEnter(el){
        this.flag = !this.flag
    },
    getSelectCount(count){
      this.count = count
    }
  },
  components: {
    swiper,
    nobox
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
.ball{
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  position:absolute;
  z-index: 99;
  left: 70px;
  top: 400px;
  /* transform: translate(165px,218px); */
}
</style>