<template>
    <div class="container">
        <h3>新闻列表</h3>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src=item.img_url>
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间: <span>{{item.date_time | dateFormat('yyyy-mm--dd')}}</span></span>
                                <span>点击: <span>{{item.click}}</span>次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>

export default {
    data () {
        return {
            newList:[]
        }
    },
    created(){
        this.getnews()
    },
    methods: {
        getnews(){
            this.$http.get('http://localhost:5000/news').then(result=>{
                if(result.status === 200){
                    this.newList = result.body
                    console.log(this.newList)
                }else{
                    console.log('读取失败')
                }
            })
        }
    }
}
</script>

<style lang='scss' scoped>

.mui-table-view{
    li{
        h1{
            font-size: 20px;
            color: black;
        }
        .mui-ellipsis{
            color: skyblue;
            display: flex;
            justify-content: space-between;
        }
    }
}
h3{
    text-align: center;
    font-size: 30px;
}
</style>