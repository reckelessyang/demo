<template>
    <div class="newsinfo-container">
        <h1 class="title">
            {{contentList.title}}
        </h1>
        <p class="subtitle">
            <span>发表时间:{{contentList.date_time |dateFormat('yyyy-mm--dd')}}</span>
            <span>点击:{{contentList.click}}次</span>
        </p>
        <hr>
        <!-- 内容去 -->
    <div v-html="contentList.msg" class="content">
    </div>
        <!-- 评论区 -->
        <comment :id = 'id'></comment>
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'


export default {
  data () {
    return {
        id:this.$route.params.id,
        content:'',
        contentList:''
    }
  },
  created(){
      this.getNewsInfo()
  },
  methods: {
      getNewsInfo(){
          this.$http.get('http://localhost:5000/newscontent/'+ this.id).then(data=>{
              if(data.status === 200)
              this.contentList = data.body
              console.log(this.contentList)
          })
      }
  },
  components: {
      comment
  }
}
</script>
<style lang="scss">
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: black;
        }
        .subtitle{
            font-size: 13px;
            color: blue;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img{
                width: 400px;
                margin: 10px 0;
            }
        }
    }
</style>