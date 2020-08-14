<template>
        <mt-swipe :auto="4000">
        <mt-swipe-item :key="item.id" v-for="item in lunbotu">
            <img :src="item[imgname]" alt="">    
        </mt-swipe-item>
        </mt-swipe>
</template>
<script>
export default {
  data () {
    return {
    };
  },
  methods: {
      
  },
  //这个是子组件，可作为其他父组件的子组件，所以属于父组件给子组件传值
  props: ['lunbotu','imgname']//将来，谁使用这个轮播图组件，就必须为其传递一个lunbotu的数组，
  //同时，只能接收img属性的图片作为轮播图战术出来
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            /* 交集选择器 */
            &:nth-child(1){
                background-color: pink;
            }
            &:nth-child(2){
                background-color: skyblue;
            }    
            &:nth-child(3){
                background-color: yellowgreen;
            }  
            img{
                width: 100%;
                height: 100%;
            }      
        }
    }
</style>
