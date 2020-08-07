# 这是一个购物车项目

## 我的第一个入门项目

## 制作首页App组件
1、完成Header区域，使用的是Mint-UI中的Header组件
2、制作底部的Tabbar区域，使用的是MUI的tabbar.html
3、要在中间区域放置一个router-view来展示路由匹配到的组件
4、使用扩展图标时，类要保证有mui-icon这个根类

## 改造tabbar为router-link

## 设置路由高亮

## 点击tabbar中的路由链接，展示对应的路由组件
    + 在src创建component文件夹放子组件

## 首页
    +轮播图
    +加载首页轮播图数据
        -获取数据，使用vue-resource
        -使用vue-resource 的this.$https.get获取数据
        -获取到的数据保存到data上
        -使用v-for循环渲染到轮播图上
    
    +动画切换问题
        -解决滚动条到时上下跟着动画移动
        因为当动画开始产生，会有两个div大小的场景，而上下两端只有一个div大小，所以会造成移动。
        使用overflow-x:hidden保证不移动，不用overflow是保证后面下拉能正常使用
        -实现切换页面时下一次页面的内容能在最滑动时就出现下一次页面
        应在v-leave-to里面设置position:absolute

