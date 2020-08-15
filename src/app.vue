<template>
    <div class="app-container">
        <mt-header fixed title="Sneaker">
			<span slot="left">
				<mt-button icon="back" @click="goBack" v-show="flag">返回</mt-button>
			</span>
		</mt-header>
        
		<transition>
		<router-view></router-view>
		</transition>

        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/vip">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon  mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
	data () {
		return {
			flag:true
		}
	},
	methods: {
		goBack(){
			//点击返回按钮向后跳转
			this.$router.go(-1);
			console.log("以点击")
		}
	},
	created () {
		//页面一刷新开始created,再一层判断
		if (this.$route.path ==='/home') {
		this.flag = false
		}else{
		this.flag = true
		}
		
	},
	watch:{
		'$route.path':function(newvalue,oldvalue){
			if (newvalue ==='/home') {
				this.flag = false
			}else{
				this.flag = true
			}
		}
	}
}
</script>

<style>
    .app-container{
		padding: 40px 0 50px 0;
		overflow-x: hidden;
	}
	
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
		position: absolute;
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,.v-leave-active{
		transition: all 0.5s ease;
	}
	.mint-header-title{
		color: pink;
		font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		font-size: 30px;
	}
	.is-fixed{
		background-image: linear-gradient(to right, #434343 0%, black 100%);
		opacity: .8;
	}
	
</style>

