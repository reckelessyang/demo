<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120" v-model="msg">
        </textarea>
        <mt-button type = 'primary' size='large' @click="postComment">发表评论</mt-button>
        <div class="cmt-list" v-for="(item,index) in comments" :key="index">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户:{{item.name}} &nbsp;&nbsp;发表时间：{{item.date_time | dateFormat('yyyy-mm--dd')}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type = 'danger' size='large' plain @click="getmore">加载更多</mt-button>
    </div>
</template>

<script>

import {Toast} from 'mint-ui'

export default {
    data(){
        return {
            pageIndex:1,
            comments:[],
            msg:''
        }
    },
    created(){
        this.getComment()
    },
    methods: {
        getComment(){
            this.$http.get(`http://localhost:5000/comment?id=${this.id}&pageIndex=${this.pageIndex}`)
            .then(data=>{
                //用数组拼接来实现加载更多数据
                this.comments = this.comments.concat(data.body)          
            })           
        },
        getmore(){
            this.pageIndex ++
            this.getComment()
        },
        postComment(){
            //校验是否为空
            if(this.msg.trim().length === 0){
                return Toast('评论内容不能为空')
            }
            //发表评论 trim()
            this.$http.post("http://localhost:5000/postcomment/"+this.id,
            {content:this.msg.trim(), name:'匿名傻仔'})
            .then(data=>{
                this.comments.unshift(data)   
                this.getComment()           
            })
            this.msg = ''

        }
    },
    props:['id']
}
</script>

<style lang='scss' scoped>
.cmt-container{
    margin-top: 10px;
    h3{
        text-align: center;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }

    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size:13px;
            .cmt-title{
                line-height: 30px;
                background-color: #cccccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>