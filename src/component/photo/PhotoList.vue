<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :key="item.id" v-for="item in phototitle" class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							{{item.title}}
						</a>                        
					</div>
				</div>

			</div>
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
<style lang="scss" scoped>

</style>