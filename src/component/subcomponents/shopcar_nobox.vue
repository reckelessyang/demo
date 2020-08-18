<template>
      <div>
        <yd-spinner  unit="1" v-model="initcount"></yd-spinner>
    </div>
</template>
<script >

export default {
  data () {
    return {
        
    };
  },
  mounted () {
    this.count = this.initcount
    
  },
  methods: {
      change(){
          console.log("123")
      }
  },
  props: ['initcount']

  
}
</script>
<style lang="scss" scoped>
div{
    touch-action: none;
}
</style>