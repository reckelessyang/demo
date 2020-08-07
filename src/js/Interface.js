const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//设置跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const list = [
    {id : 1 , img : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596811965932&di=325bec3f8baaa660032d98620b2fb7e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F4ec2d5628535e5dddaa4db7076c6a7efcf1b6290.jpg'},
    {id : 2 , img : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596812023741&di=79d5e9e38b78271b3bdd854191c9f126&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2338386168%2C1509223216%26fm%3D214%26gp%3D0.jpg'},
    {id : 3 , img : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596811965931&di=f37d10c1dbcb834dd86ec9b5ac258f09&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190627%2F22%2F1561646870-biwhYdJTZo.jpg'}
]

app.get('/index',(req,res)=>{
    res.send(list)
})

app.listen(5000,()=>{
    console.log('service is running...')
})
