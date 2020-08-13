<template>
    <div>
        <!-- 顶部滑动条 -->
    <yd-scrollnav>
        <yd-scrollnav-panel :style="{margin:'30px 0px'}" :label="item.title" v-for="(item,key) in phototitle" :key="key">        
            <p>{{item.title}}</p>
            <yd-list :theme="1">
                <yd-list-item v-for="(item,i) in item.img" :key="i">
                    <img slot="img" :src="item.src">
                    <span slot="title">{{item.name}}</span>
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
	margin-top: 40px;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%) !important;
	li{
		font-size: 20px;
	}	
}
.yd-scrollnav-unfold-header{
	font-size: 20px;
}
.yd-scrollnav-content{
  margin-bottom: 20px;
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
      box-shadow: 0 0 6px #999;
    }
  }
}

</style>