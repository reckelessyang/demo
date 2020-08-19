<template>
      <div>
        <yd-spinner  unit="1" v-model="count"></yd-spinner>
    </div>
</template>
<script >

import {mapMutations} from 'vuex'
export default {
  data () {
    return {
       count:0
    };
  },
  mounted () {
    this.count = this.initcount
  },
  updated () {
    this.updateGoodsCount({id:this.id,count:this.count})
  },
  methods: {
    ...mapMutations(['updateGoodsCount'])
  },
  props: ['initcount','id']


  
}
</script>
<style lang="scss" scoped>
div{
    touch-action: none;
}
</style>