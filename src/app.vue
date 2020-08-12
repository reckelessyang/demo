<template>
    <div class="app-container">
        <mt-header fixed title="Sneaker"></mt-header>
        
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
					<span class="mui-badge">0</span>
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

