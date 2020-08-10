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
    {id : 1 , img : `http://www2.flightclub.cn/news/uploads/allimg/200809/12-200P9121T4.jpg`},
    {id : 2 , img : 'http://www2.flightclub.cn/news/uploads/allimg/200728/23-200HQ32952.jpg'},
    {id : 3 , img : 'http://www2.flightclub.cn/news/uploads/allimg/200807/6-200PG34606.jpg'}
]

const news = [
    {
        id : 1,
        title:`今年 Jordan Brand 的骚操作！新火焰红 AJ3 上脚效果你打几分`,
        add_date_time:new Date(),
        zhaiyao:'内容1',
        click:1,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 2,
        title:'四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！',
        add_date_time:new Date(),
        zhaiyao:'内容2',
        click:1,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 3,
        title:'科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！',
        add_date_time:new Date(),
        zhaiyao:'内容3',
        click:3,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 4,
        title:'标题4',
        add_date_time:new Date(),
        zhaiyao:'内容4',
        click:2,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 5,
        title:'标题4',
        add_date_time:new Date(),
        zhaiyao:'内容4',
        click:2,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 6,
        title:'标题4',
        add_date_time:new Date(),
        zhaiyao:'内容4',
        click:2,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 7,
        title:'标题4',
        add_date_time:new Date(),
        zhaiyao:'内容4',
        click:2,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 8,
        title:'标题4',
        add_date_time:new Date(),
        zhaiyao:'内容4',
        click:2,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 9,
        title:'标题4',
        add_date_time:new Date(),
        zhaiyao:'内容4',
        click:2,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 10,
        title:'标题4',
        add_date_time:new Date(),
        zhaiyao:'内容4',
        click:2,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    }
 
]


const content = [
    {
        title:`今年 Jordan Brand 的骚操作！新火焰红 AJ3 上脚效果你打几分？`,
        msg:`<img src="http://www2.flightclub.cn/news/uploads/allimg/200807/6-200PGH346.jpg" alt="">
        <p>今年 Air Jordan 3 开启了双标后跟的骚操作，不过相比于藤原浩的闪电联名和仅在日本发售的日文限定，眼前这款新火焰红 Air Jordan 3 SE Denim “Fire Red” 则相对入手难度更低。</p>
        <p>采用经典火焰红的构色方案，鞋身爆裂纹图案辅以丹宁材质示人，营造复古氛围的同时，更释放出浓郁的街头气质。</p>
        <img src="http://www2.flightclub.cn/news/uploads/allimg/200808/6-200PP94135-52.jpg" alt="">
        <img src="http://www2.flightclub.cn/news/uploads/allimg/200808/6-200PP94134.jpg" alt="">
        <p>最讨喜的地方还要算后跟的 Nike Air 与 Jumpman 跳跳人双标合体，上脚效果不经意间的个性释放，让人过目不忘！</p>
        <img src="http://www2.flightclub.cn/news/uploads/allimg/200808/6-200PP94135.jpg" alt="">
        <p>相信随着铺货范围逐渐增多，市价相对会有所回落，国内进一步发售信息我们将密切留意，感兴趣的小伙伴不妨再耐心等待一下啦！</p>`,
        date_date_time:new Date(),
        click:3
    
    },
    {
        title:``,
        msg:`中国限定「紫禁之巅」Air Jordan 7 近日曝光，颇有深度的中国风设计，引起了不少玩家关注。<br />
        <br />
        明天就要发售了，真让人猝不及防，堪称本周最大惊喜！<br />
        <br />
        <img src="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S244.jpg" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" ><br />
        <br />
        配色、细节甚至发售日期都颇有深意，光鞋盒就让小编看懵了。<br />
        <br />
        小编今天抢先带来<strong>设计揭秘 + 上脚</strong>，这些设计恐怕你都没看懂。<br />
        &nbsp;
        <div style="text-align: right;">▼ 小编实拍</div>
        <img src="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S245.jpg" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" ><br />
        <br />
        &nbsp;
        <h1><br />
        <strong>01</strong></h1>
        
        <h3><strong>四年才出一双<br />
        这次还是中国限定</strong></h3>
        <br />
        其实每隔四年，Jordan Brand 便会推出一款特殊配色 Air Jordan 7，致敬奥运盛会。<br />
        <br />
        本次则以中国古典元素为灵感，带来眼前这双规格极高的「紫禁之巅」Air Jordan 7 ！<br />
        <br />
        大红主色映衬烫金字体，中央酷似玉玺印章的字样，恐怕大多数人和小编一样，第一眼就看不太懂。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S219.jpg"/><br />
        <br />
        右边是<strong>「贰拾」</strong>两字，左边就更难认了，是篆体<strong>「叁」</strong>和数字&nbsp;<strong>23</strong>&nbsp;的结合。<br />
        <br />
        打开鞋盒后，特别打造的半透明衬纸，铺满金印更显奢华。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S200.jpg"/><br />
        <br />
        本次配色以紫禁之巅为主题，不仅包含中国故宫的建筑元素，更致敬奥运赛场的巅峰对决。<br />
        <br />
        所以这是一款在奥运年专为中国打造的配色，虽然奥运遗憾推迟，但这款鞋还是如期登场。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S217.jpg"/><br />
        <br />
        以乔丹 92 年征战奥运的 Air Jordan 7 为蓝本，融入中国韵味的黑白红金配色装扮。<br />
        <br />
        内外采用不对称的<strong>阴阳设计</strong>，外侧为黑白双色<strong>盘龙暗纹</strong>，风格霸气且内敛，代表传统建筑中的龙纹雕刻。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S236.jpg"/><br />
        <br />
        内侧以黑色主调搭配<strong>编织材质</strong>和<strong>彩色图案</strong>，展现宫殿建筑房顶的雕梁画栋和斗拱工艺。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S919.jpg"/><br />
        <br />
        鞋底呈现中国玉装扮，绿色部分暗藏<strong>夜光</strong>效果，在夜晚同样耀眼华丽。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S240.jpg"/><br />
        <br />
        细节方面，更是极具内涵。<br />
        <br />
        鞋舌「贰拾叁」和「23」字样的印章字体，与鞋盒呼应。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S228.jpg"/><br />
        <br />
        后跟繁体玖字，既代表中国文化中九五至尊的伟大寓意，也是致敬乔丹 92 年巴塞罗那奥运会的 9 号球衣，再次彰显奥运主题。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S242.jpg"/><br />
        <br />
        鞋帮金线刺绣 Jumpman Logo 凸显奢华气质，金色电镀鞋带头同样彰显非凡规格。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S211.jpg"/><br />
        <br />
        <br />
        &nbsp;
        <h1><strong>02</strong></h1>
        
        <h3><strong>帅气好搭有内涵<br />
        这样鞋真不多见</strong></h3>
        <br />
        这双「紫禁之巅」Air Jordan 7 在彰显中国元素的同时，还兼具出众的搭配效果。<br />
        <br />
        整体黑白主调搭配红金两色点缀，配色复古韵味十足，搭配起来更轻松。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S301.jpg"/><br />
        <br />
        鞋面盘龙印花采用低调的暗纹处理，远看并不明显，日常穿毫无违和感。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S310.jpg"/><br />
        <br />
        内外阴阳设计可以说是上脚最大的惊喜，买一双鞋就能穿出鸳鸯效果，一双顶两双。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S303.jpg"/><br />
        <br />
        内侧彩色细节点缀，增加亮眼元素，看起来更加独特。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S258.jpg"/><br />
        <br />
        绿色夜光水晶底，玉石般的质感相当诱人，在夜晚更能成为目光焦点。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S311.jpg"/><br />
        <br />
        除了外观，Air Jordan 7 鞋型另一大特点就是，脚感相比此前正代，舒适度大幅提升。<br />
        <br />
        中底内置 Air Sole 气垫缓震柔软，鞋面采用弹性内靴 + 皮革支撑，包裹舒适。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" title="Air Jordan 7,AJ7,紫禁之巅  四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200805/14-200P51S308.jpg"/><br />
        <br />
        好看好搭又好穿，算是近年来一款难得佳作。<br />
        <br />
        如果你喜欢中国风球鞋，一定能感受到它扑面而来的细腻诚意。<br />`,
        date_date_time:new Date(),
        click:3
    },
    {
        title:`今年 Jordan Brand 的骚操作！新火焰红 AJ3 上脚效果你打几分？`,
        msg:`<img src="http://www2.flightclub.cn/news/uploads/allimg/200728/23-200HQ32952.jpg" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" ><br />
        <br />
        7 月底球鞋圈狠货接连不断，OFF-WHITE 联名、天价小熊 Dunk SB，你入手了哪双？<br />
        <br />
        在即将到来的 8 月，即将发售 11 双 Air Jordan 系列以及 2 双 Yeezy 系列。<br />
        <br />
        但是！8 月传闻 Nike 即将重启 Kobe 系列战靴！<br />
        <br />
        多双 Kobe 5 Protro 很有可能将在科比生日当天以及 &ldquo;科比&middot;布莱恩特日&rdquo;回归！<br />
        <br />
        毫无疑问这就是 8 月球鞋发售最大惊喜。<br />
        <br />
        <img src="http://www2.flightclub.cn/news/uploads/allimg/200128/3-20012Q03338.jpg" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" ><br />
        <br />
        <br />
        &nbsp;
        <h3 style="text-align: center;"><span style="color:#FFFFFF;"><strong><span style="background-color:#000000;">&nbsp;Air Jordan 4 SP &ldquo;Pine Green&rdquo;&nbsp;</span></strong></span></h3>
        
        <div style="text-align: center;">货号：CK6630-100<br />
        发售日期：8 月 5 日<br />
        发售价格：$225 美元</div>
        <br />
        眼前这双备受关注的白绿 Air Jordan 4 早在今年年初就以曝光效果图。<br />
        <br />
        近日传闻将于 8 月 5 日正式发售，清爽的白绿色调相较于五月份发售的金属系列更加富有复古气质。<br />
        <br />
        <img src="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH32103-51.jpg" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" ><br />
        <br />
        <br />
        &nbsp;
        <h3 style="text-align: center;"><span style="color:#FFFFFF;"><strong><span style="background-color:#000000;">&nbsp;Air Jordan 1 High OG WMNS &ldquo;Satin Snake&rdquo;&nbsp;</span></strong></span></h3>
        
        <div style="text-align: center;">货号：CD0461-601<br />
        发售日期：8 月 6 日<br />
        发售价格：$170 美元</div>
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH32102.jpg"/><br />
        <br />
        Air Jordan 1 丝绸家族再度迎来全新配色，鞋身以元年白红芝加哥为基础，后跟注入奢华的蛇纹加持！<br />
        <br />
        丝绸材质暗藏在鞋舌及内衬部位，这双同时拥有芝加哥、蛇纹、丝绸三大主题的新品，恐怕会很抢手。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH32103.jpg"/><br />
        <br />
        <br />
        &nbsp;
        <h3 style="text-align: center;"><strong><span style="color:#FFFFFF;"><span style="background-color:#000000;">&nbsp;Air Jordan 1 High OG CO.JP &ldquo;Tokyo&rdquo;&nbsp;</span></span></strong></h3>
        
        <div style="text-align: center;">货号：DA0382-029<br />
        发售日期：8 月 7 日<br />
        发售价格：$170 美元</div>
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH32300.jpg"/><br />
        <br />
        此前多次曝光的日本 Air Jordan 1 CO.JP &ldquo;Tokyo&rdquo; 时隔 19 年后即将回归，鞋身无论是整体配色还是细节都高度还原当年的版本。<br />
        <br />
        同时今年的复刻拥有两个版本：普通鞋盒市售版以及超限量 2020 双的手提箱鞋盒版本。不过遗憾的是特殊鞋盒版本仅在日本发售，国内小伙伴只能等等普通版本了。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH32102-50.jpg"/><br />
        <br />
        <br />
        &nbsp;
        <h3 style="text-align: center;"><span style="color:#FFFFFF;"><strong><span style="background-color:#000000;">&nbsp;Air Jordan 1 High Zoom &ldquo;Space Hippie&rdquo;&nbsp;</span></strong></span></h3>
        
        <div style="text-align: center;">货号：CW2414-001<br />
        发售日期：8 月 12 日<br />
        发售价格：$170 美元</div>
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH32103-50.jpg"/><br />
        <br />
        Nike Space Hippie 系列近期收获不小的人气，紧随其后 Jordan Brand 也将迎来环保主题鞋款，首双便是将于 8 月发售的 Air Jordan 1 Zoom &ldquo;Space Hippie&rdquo;。<br />
        <br />
        整双鞋采用炭黑主色调，回收材质打造的织物布料为主体，鞋帮海绵采用外露设计，鞋面融入回收材料的花线，中底和外底也使用了回收橡胶。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH32102-51.jpg"/><br />
        <br />
        <br />
        &nbsp;
        <h3 style="text-align: center;"><span style="color:#FFFFFF;"><strong><span style="background-color:#000000;">&nbsp;Air Jordan 4 GS &ldquo;Lemon Venom&rdquo;&nbsp;</span></strong></span></h3>
        
        <div style="text-align: center;">货号：CV7808-100<br />
        发售日期：8 月 14 日<br />
        发售价格：$150 美元</div>
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH31K9.jpg"/><br />
        <br />
        本月刚刚发售的 OFF-WHITE x Air Jordan 4 市价已经突破￥6000 元大关，作为一款专为女性打造的鞋款，没能入手的小姐姐们不妨可以看看眼前这双。<br />
        <br />
        此款全新配色整体采用大面积漆皮材质覆盖，全白色为主调的鞋身辅以果冻质感的荧光黄、荧光粉点缀。清爽百搭的气质，绝对是不错的穿搭选择。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH31K8-55.jpg"/><br />
        <br />
        <br />
        &nbsp;
        <h3 style="text-align: center;"><span style="color:#FFFFFF;"><strong><span style="background-color:#000000;">&nbsp;Air Jordan 5 &ldquo;Alternate Bel-Air&rdquo;&nbsp;</span></strong></span></h3>
        
        <div style="text-align: center;">货号：DB3335-100<br />
        发售日期：8 月 15 日<br />
        发售价格：$200 美元</div>
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200728/23-200HP03J2-50.jpg"/><br />
        <br />
        又一款献礼 Air Jordan 5 三十周年的全新配色即将发售，全新「新鲜王子」整体风格上延续了新鲜王子的经典元素。<br />
        <br />
        仅在鞋面部分改为白色皮革材质，而其他彩色细节则与老版本如出一辙。内衬采用多彩色块拼接打造，同时不对称鸳鸯设计更显整双鞋的独特性。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200728/23-200HP03J2.jpg"/><br />
        <br />
        <br />
        &nbsp;
        <h3 style="text-align: center;"><span style="color:#FFFFFF;"><strong><span style="background-color:#000000;">&nbsp;Union x Air Jordan 4&nbsp;</span></strong></span></h3>
        
        <div style="text-align: center;">货号：DC9533-001<br />
        发售日期：8 月 15 日<br />
        发售价格：$250 美元</div>
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH31K8-50.jpg"/><br />
        <br />
        紧随糖果色调 Air Jordan 4 之后的就是这双 Union x Air Jordan 4，作为近年来的天价联名系列，此次共将推出两款配色，目前蓝色款实物率先曝光。<br />
        <br />
        以深浅不同的蓝色色调作为主线，织物材质打造鞋面，辅以做旧外底和红色细节，不过有消息指出此款尚未得到证实，如果市售版真如此，你会心动吗？<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH31K8.jpg"/><br />
        <br />
        <br />
        &nbsp;
        <h3 style="text-align: center;"><span style="color:#FFFFFF;"><strong><span style="background-color:#000000;">&nbsp;Air Jordan 3 WMNS &ldquo;Laser Orange&rdquo;&nbsp;</span></strong></span></h3>
        
        <div style="text-align: center;">货号： CK9246-108<br />
        发售日期：8 月 21 日<br />
        发售价格：$190 美元</div>
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH31K8-54.jpg"/><br />
        <br />
        由于黑紫配色 Air Jordan 3 取消发售，不少湖人以及科比粉丝纷纷着眼于这双白黄配色。一样的湖人主题配色，穿在脚上相当能够体现湖人球迷身份。<br />
        <br />
        清爽配色搭配标志性爆裂纹，上脚想必也十分出色。不过遗憾仅为 WMNS 规格，大脚小伙伴恐怕只能奢望了。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH31K8-53.jpg"/><br />
        <br />
        <br />
        &nbsp;
        <h3 style="text-align: center;"><span style="color:#FFFFFF;"><strong><span style="background-color:#000000;">&nbsp;Air Jordan 12 &ldquo;Indigo&rdquo;&nbsp;</span></strong></span></h3>
        
        <div style="text-align: center;">货号：130690-404<br />
        发售日期：8 月 22 日<br />
        发售价格：$190 美元</div>
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200728/23-200HP03937.jpg"/><br />
        <br />
        被玩家称为水洗蓝配色的 Air Jordan 12 &ldquo;Indigo&rdquo;，采用靛蓝色鞋身，搭配白色侧边，整体呈现出清新亮眼的高级构色感。<br />
        <br />
        细腻的皮革打造，鞋舌刺绣 Logo 装饰，哑光银色鞋带扣，细节设计依旧考究。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200728/23-200HP03937-50.jpg"/><br />
        <br />
        <br />
        &nbsp;
        <h3 style="text-align: center;"><strong><span style="color:#FFFFFF;"><span style="background-color:#000000;">&nbsp;Air Jordan 8 &ldquo;Mushroom&rdquo;&nbsp;</span></span></strong></h3>
        
        <div style="text-align: center;">发售日期：8 月 22 日<br />
        发售价格：$190 美元</div>
        <br />
        继此前珍珠奶茶配色 Air Jordan 1 以及 Air Jordan 4 发售之后，又一款珍珠奶茶配色 Air Jordan 正代即将发售。<br />
        <br />
        眼前这双 Air Jordan 8 采用皮革与翻毛皮材质打造鞋面。浅卡其色、象牙白色以及黑色三种颜色构成「珍珠奶茶」配色，预计将于 8 月 22 日正式发售。<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200727/23-200HH31K7.jpg"/><br />
        <br />
        <br />
        &nbsp;
        <h3 style="text-align: center;"><span style="color:#FFFFFF;"><strong><span style="background-color:#000000;">&nbsp;Nike Kobe 5 &ldquo;Protro&rdquo;&nbsp;</span></strong></span></h3>
        
        <div style="text-align: center;">发售日期：8 月 23 日 / 24 日<br />
        发售价格：$180 美元</div>
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200728/23-200HQ13639.gif"/><br />
        <br />
        近日海外球鞋店铺 Footlocker 泄露了两款 Kobe 5 Protro 的发售信息。传闻黑紫配色、Big Stage Parade 配色将于 8 月 23 日科比生日当天发售！<br />
        <br />
        此前瓦妮莎也曾在个人 Instagram 晒出两双李小龙配色 Kobe 5，也有消息指出 8 月 24 日 &ldquo;科比&middot;布莱恩特日&rdquo; 这两双鞋即将发售！届时如果能够如期发售，可以说是 8 月最大的惊喜！<br />
        <br />
        <img src="http://www2.flightclub.cn/static/img/news_blank_bg_pic.png" class="lazy" alt="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" title="清单,8 月发售,科比  科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！" data-original="http://www2.flightclub.cn/news/uploads/allimg/200728/23-200HQ15031.gif"/><br />
        <br />
        <br />
        &nbsp;
        <h3 style="text-align: center;"><strong><span style="color:#FFFFFF;"><span style="background-color:#000000;">&nbsp;Air Jordan 3 SE &ldquo;Fire Red&rdquo;&nbsp;</span></span></strong></h3>
        
        <div style="text-align: center;">货号：CZ6431-100<br />
        发售日期：8 月 27 日<br />
        发售价格：$200 美元</div>`,
        date_date_time:new Date(),
        click:3
    }
]

const comments = [
    {id:1,name:'reckelessyang',date_time:new Date(),content:'我要买，冲！！'},
    {id:2,name:'reckelessyang',date_time:new Date(),content:'我要买，冲！！'},
    {id:3,name:'reckelessyang',date_time:new Date(),content:'我要买，冲！！'},
    {id:4,name:'reckelessyang',date_time:new Date(),content:'我要买，冲！！'},
    {id:5,name:'reckelessyang',date_time:new Date(),content:'我要买，冲！！'},
    {id:6,name:'reckelessyang',date_time:new Date(),content:'我要买，冲！！'},
    {id:7,name:'reckelessyang',date_time:new Date(),content:'我要买，冲！！'},
    {id:8,name:'reckelessyang',date_time:new Date(),content:'我要买，冲！！'},
    {id:9,name:'reckelessyang',date_time:new Date(),content:'我要买，冲！！'},
    {id:10,name:'reckelessyang',date_time:new Date(),content:'我要买，冲！！'}
]

const comments1 = [
    {id:1,name:'John',date_time:new Date(),content:'我要买，冲！！'},
    {id:2,name:'John',date_time:new Date(),content:'我要买，冲！！'},
    {id:3,name:'John',date_time:new Date(),content:'我要买，冲！！'},
    {id:4,name:'John',date_time:new Date(),content:'我要买，冲！！'},
    {id:5,name:'John',date_time:new Date(),content:'我要买，冲！！'},
    {id:6,name:'John',date_time:new Date(),content:'我要买，冲！！'},
    {id:7,name:'John',date_time:new Date(),content:'我要买，冲！！'},
    {id:8,name:'John',date_time:new Date(),content:'我要买，冲！！'},
    {id:9,name:'John',date_time:new Date(),content:'我要买，冲！！'},
    {id:10,name:'John',date_time:new Date(),content:'我要买，冲！！'}
]

app.get('/index',(req,res)=>{
    res.send(list)
})

app.get('/news',(req,res)=>{
    res.send(news)
})

app.get('/newscontent/:id',(req,res)=>{
    if(req.params.id === '1'){
        res.send(content[0])
    }else if(req.params.id === '2'){
        res.send(content[1])
    }else if(req.params.id === '3'){
        res.send(content[2])
    }
})

app.get('/comment',(req,res)=>{
    if(req.query.id ==='1' && req.query.pageIndex === '1'){
        res.send(comments)
    }else if(req.query.id ==='1' && req.query.pageIndex === '2'){
        res.send(comments1)
    }
})

app.post('/postcomment/:id',(req,res)=>{
    console.log(req.params)
    if(req.params.id === '1'){
        req.body.date_time = new Date()
        req.body.id = comments.length+1
        comments.unshift(req.body)
        res.send(comments[0])
    }else if(req.params.id === '2'){
        res.send('这是第二个帖子')
    }
})

app.listen(5000,()=>{
    console.log('service is running...')
})
