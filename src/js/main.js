//入口文件
import Vue from 'vue'

import app from '../app.vue'

//导入vue-resource
import VueResourve from 'vue-resource'
Vue.use(VueResourve)

//按需导入mint-UI中的组件
import {Header} from 'mint-ui'
import { Swipe, SwipeItem,Button } from 'mint-ui';

Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
//引入mui组件
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'

//导入路由组件
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入自己的路由
import router from './router'

//全局设置post时候表单数据格式
Vue.http.options.emulateJSON = true

//定义全局过滤器
Vue.filter('dateFormat',function(dateStr,pattern){
    //根据给定的时间字符串得到特定的时间
    var dt = new Date(dateStr)
    var y = dt.getFullYear()
    var m = (dt.getMonth()+1).toString().padStart(2,'0')
    var d = dt.getDate().toString().padStart(2,'0')


    if(pattern && pattern.toLowerCase() === 'yyyy-mm--dd'){
        /* return y + '-' + m + '-' +d */
        //模板字符串
        return `${y}-${m}-${d}`
    }else{
        var hh = dt.getHours().toString().padStart(2,'0')
        var mm = dt.getMinutes().toString().padStart(2,'0')
        var ss = dt.getSeconds().toString().padStart(2,'0')
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    }
})

const vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
    
})
