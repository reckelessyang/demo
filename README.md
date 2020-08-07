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
        -解决上面头部跟下面尾部切换路由时也会跟着移动的情况
        使用overflow-x:hidden保证不移动

