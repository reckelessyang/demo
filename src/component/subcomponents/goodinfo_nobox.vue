<template>
      <div>
        <yd-spinner :max="max" unit="1" v-model="spinner1"></yd-spinner>
    </div>
</template>
<script >

export default {
  data () {
    return {
    spinner1: 1
    };
  },
  mounted () {
    
  },
  methods: {

  },
  props:['max'],
  watch: {
      //使用场景：监听单个的虚拟数据
      max:function(newval,oldval){
          console.log(this.max)
      }
  }
}
</script>
<style lang="scss" scoped>
div{
    touch-action: none;
}
</style>