import VueRouter from 'vue-router'
//导入对应路由组件
import HomeContainer from '../component/tabbar/HomeContainer.vue'
import VipContainer from '../component/tabbar/VipContainer.vue'
import ShopcarContainer from '../component/tabbar/ShopcarContainer.vue'
import SearchContainer from '../component/tabbar/SearchContainer.vue'

const router = new VueRouter({
    routes:[
        { path: '/', redirect:'/home' },
        { path: '/home', component: HomeContainer },
        { path: '/vip', component: VipContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer }
    ],
    linkActiveClass:'mui-active'    //覆盖默认路由高亮的类，默认的类角坐router-link-active
})

export default router