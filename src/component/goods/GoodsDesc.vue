<template>
<div v-html="msg.message" class="container">
    <img src="" alt="" style="width:100%">
</div>

</template>
<script>
export default {
  data () {
    return {
      msg:{}
    };
  },
  created(){
    this.getGoodsDesc()
  },
  methods: {
      getGoodsDesc(){
        this.$http.get("http://localhost:5000/goods/getdesc/"+this.id)
        .then(data=>{
          this.msg = data.body
          console.log(this.msg.message)
        })
      }
  },
  props: ['id']
}
</script>
<style lang="scss">
.container{
  margin-top: 20px;
  padding:10px;
  img{
    width: 100%;
  }
}
</style>