import VueRouter from 'vue-router'
//导入对应路由组件
import HomeContainer from '../component/tabbar/HomeContainer.vue'
import VipContainer from '../component/tabbar/VipContainer.vue'
import ShopcarContainer from '../component/tabbar/ShopcarContainer.vue'
import SearchContainer from '../component/tabbar/SearchContainer.vue'
import NewsList from '../component/news/NewsList.vue'
import NewsInfo from '../component/news/NewsInfo.vue'
import PhotoList from '../component/photo/PhotoList.vue'
import GoodList from '../component/goods/GoodsList.vue'
import GoodsInfo from '../component/goods/GoodsInfo.vue'

const router = new VueRouter({
    routes:[
        { path: '/', redirect:'/home' },
        { path: '/home', component: HomeContainer },
        { path: '/vip', component: VipContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo },
        { path: '/home/photoslist', component: PhotoList },
        { path: '/home/goodslist', component: GoodList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo,props:true }//启用props来接收传来的id
    ],
    linkActiveClass:'mui-active'    //覆盖默认路由高亮的类，默认的类叫router-link-active
})

export default router