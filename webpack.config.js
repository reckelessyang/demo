//这个配置文件其实就是一个js文件，通过node中模块操作向外暴露一个配置对象*

var path = require('path');

const webpack = require('webpack')
//只要是插件，都一定要放到plugins结点中去
const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry:path.join(__dirname,'./src/js/main.js') ,
/*   devServer:{
    open:true,//自动打开浏览器
    port:3000,  //设置启动的运行端口
    contentBase:'src',//指定托管的根目录
    hot:true //启用热更新
  }, */
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins:[
    new htmlWebpackPlugin({
      //创建一个在内存中生成html页面的插件
      template:path.join(__dirname,'src/index.html'),//指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
      filename:'index.html' //指定生成内存中的页面
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=71444&name=[hash:8]-[name].[ext]'},
      {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {test:/\.vue$/, use:'vue-loader'},
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
      }
    ]
  },
  resolve:{
    alias: {
      //设置vue被导入时候包的路径
      'vue$':'vue/dist/vue.js'
    }
  }
};