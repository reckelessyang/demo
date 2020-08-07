//入口文件
import Vue from 'vue'

import app from '../app.vue'

//导入vue-resource
import VueResourve from 'vue-resource'
Vue.use(VueResourve)

//按需导入mint-UI中的组件
import {Header} from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//引入mui组件
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'

//导入路由组件
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入自己的路由
import router from './router'

const vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
    
})
