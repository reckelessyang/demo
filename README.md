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

## 改造新闻资讯路由链接

## 新闻资讯页面制作
    +绘制界面
    +使用vue-resource获取数据
    +渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
    +把列表中的每一项改造为router-link，同时在跳转时提供唯一的Id标识符
    +创建新闻详情的组件页面 NewsInfo.vue
    +在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情的布局和数据渲染
    +正常渲染会导致图片变大，这里可以去掉scoped可以解决

## 单独封装一个comment.vue 评论子组件
    +先创建一个单独的comment.vue组件模板
    +在需要使用comment组件的页面中，先手动导入comment组件
    `import comment from './comment.vue'`
    +在父组件中使用`commponents`属性将刚才导入comment组件，注册为自己的子组件
    +将注册子组件时候的，注册名称以标签形式在页面中引用即可

## 获取所有的评论数据显示到页面中

## 实现点击加载更多评论的功能
    +为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
    +点击加载更多让pageIndex++，然后重新调用this.getcomments()方法重新获取最新一页的数据
    +为了防止新数据覆盖老数据，在点击加载更多的时候每当获取到新数据，应该让老数据调用数组合并concat方法

## 发表评论
    +把文本框做成双向数据绑定
    +为发表按钮绑定一个事件
    +校验评论内容是否为空，如果为空用Toast提示用户，评论内容不能为空
    +通过vue-resource发送一个请求，把评论内容提交给服务器
    +当发表评论OK后，重新刷新列表，以查看最新的评论
        -如果调用getComments 方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
    +换一种思路：当评论成功后，在客户端手动拼接出一个最新的评论对象，然后调用数据的unshift方法，把最新的评论追加到
    data中的comments中

## 改造图片分析 按钮为路由的组件页面

## 绘制图片列表 组件页面结构
    +顶部的滑动条
        -滑动条无法正常触发滑动，这是JS组件，需要被初始化一下
        -导入mui.js
        -调用官方提供的方式初始化
        ```
        mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        ```
    +底部图片列表

## 实现图片详情中缩略图的功能

1.使用插件vue-preview这个缩略图插件
2.获取到所有的图片列表，然后使用v-for指令渲染数据
3.注意：image标签上的class不能去掉
4.每个图片数据对象中，必须有w和h属性

## 绘制商品列表

## 使用手机调试Vue项目
    +保证自己手机和当前项目的电脑处于同一wifi环境中
    +cmd终端中运行命令`ipconfig`查看iPv4的地址
    +吧赋值的ip地址粘贴到package.json `"dev": "webpack-dev-server --open --port 3000  --hot --host ipv4地址"`

## 改造进入商品详情页面的路由链接
    +讲每个商品item项改造成`router-link`，同时提供`tag="div"`属性把路由渲染成div，再指定`:to`属性,拼接上商品的id值
    +添加新的组件页面
    +添加路由和组件的对应规则

## 实现商品详情页面

## 把goodsInfo的购买数量传给父组件的购物车数量
