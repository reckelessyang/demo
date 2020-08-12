<template>
    <div>
        <!-- 顶部滑动条 -->
    <yd-scrollnav>
        <yd-scrollnav-panel :style="{margin:'30px 0px'}" :label="item.title" v-for="(item,key) in phototitle" :key="key">
          
            <p>{{item.title}}</p>
            <yd-list :theme="1">
                <yd-list-item v-for="i in 10" :key="i">
                    <img slot="img" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2910748489,1515877704&fm=26&gp=0.jpg">
                    <span slot="title">{{item.title}}</span>
                </yd-list-item>
            </yd-list>
  
        </yd-scrollnav-panel>
    </yd-scrollnav>
    </div>
</template>
<script>


export default {
  data () {
    return {
		phototitle:[]
    };
  },
  created(){
	  this.getPhoto()
  },
  methods: {
      getPhoto(){
		  this.$http.get('http://localhost:5000/getphoto')
		  .then(data=>{
			  this.phototitle = data.body
			  console.log(this.phototitle)
		  })
	  }
  }
}
</script>
<style lang="scss">
.yd-scrollnav{
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
.yd-scrollnav-tab{
	margin-top: 30px;
	li{
		font-size: 20px;
	}	
}
.yd-scrollnav-unfold-header{
	font-size: 20px;
}
.yd-scrollnav-content{
  background-color: #cccccc;
  p{
    text-align: center;
    font-size: 30px;
    color: black;
    font-weight: bolder; 
  }
  .yd-list-mes
  {
    opacity: .8;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  }
  .yd-list-img{
    img{
      margin-top: -50px;;
    }
  }
}

</style>