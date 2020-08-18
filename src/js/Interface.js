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
        date_time:new Date(),
        zhaiyao:'内容1',
        click:1,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 2,
        title:'四年才出一双的神秘 AJ！还是罕见中国限定！明早记得抢！',
        date_time:new Date(),
        zhaiyao:'内容2',
        click:1,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 3,
        title:'科比生日传闻有惊喜！8 月的 AJ 新品还有蛇纹芝加哥、湖人、UNION 联名！',
        date_time:new Date(),
        zhaiyao:'内容3',
        click:3,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 4,
        title:'标题4',
        date_time:new Date(),
        zhaiyao:'内容4',
        click:2,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 5,
        title:'标题4',
        date_time:new Date(),
        zhaiyao:'内容4',
        click:2,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 6,
        title:'标题4',
        date_time:new Date(),
        zhaiyao:'内容4',
        click:2,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 7,
        title:'标题4',
        date_time:new Date(),
        zhaiyao:'内容4',
        click:2,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 8,
        title:'标题4',
        date_time:new Date(),
        zhaiyao:'内容4',
        click:2,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 9,
        title:'标题4',
        date_time:new Date(),
        zhaiyao:'内容4',
        click:2,
        img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596949070&di=a92eefe385b3bebd307797de3b0babb8&src=http://b-ssl.duitang.com/uploads/item/201805/20/20180520132639_mhnoq.thumb.224_0.jpg'
    },
    {
        id : 10,
        title:'标题4',
        date_time:new Date(),
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
        date_time:Date.now(),
        click:3
    
    },
    {
        title:`中国限定「紫禁之巅」Air Jordan 7 近日曝光，颇有深度的中国风设计，引起了不少玩家关注。`,
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
        date_time:Date.now(),
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
        date_time:Date.now(),
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

const goods = [
    {
        id:1,
        src:'https://qx.flightclub.cn/img/upload/20200806_212def0b517cd13d25c3ef4c17b54117.jpg',
        name:'Nike Dunk Low Samba',
        new_price:1599,
        old_price:1499,
        quantity:60
    },
    {
        id:2,
        src:'https://qx.flightclub.cn/img/upload/20200806_e492a1212faaa44d0f463fc49a163459.jpg',
        name:'Nike Kobe 5 Protro Lakers',
        new_price:1599,
        old_price:1499,
        quantity:60
    },
    {
        id:3,
        src:'http://dunkhome-production.oss-cn-hangzhou.aliyuncs.com/static_files/2020-05-17/EtedsXa4hWsR7JkWdSeq_image_wh_840x590.jpeg',
        name:'adidas Superstar',
        new_price:1599,
        old_price:1499,
        quantity:60
    },
    {
        id:4,
        src:'http://dunkhome-production.oss-cn-hangzhou.aliyuncs.com/static_files/2020-04-04/rM61gExn3vZEVyS-L_o2_image_wh_840x578.jpeg',
        name:'adidas Stan Smith',
        new_price:1599,
        old_price:1499,
        quantity:60
    },
    {
        id:5,
        src:'https://qx.flightclub.cn/img/upload/20200806_51733ee2a05f5b6bbaae1fe9ea79d972.jpg',
        name:'Air Jordan 5 反转新鲜王子',
        new_price:1599,
        old_price:1499,
        quantity:60
    },
    {
        id:6,
        src:'http://www2.flightclub.cn/news/uploads/allimg/200804/6-200P4111028.jpg',
        name:'《辛普森一家》 x Vans',
        new_price:1599,
        old_price:1499,
        quantity:60
    },
    
]

const title = [
    {id:1,title:'Nike',
    img:[
        {
            src:'https://qx.flightclub.cn/img/upload/20200806_212def0b517cd13d25c3ef4c17b54117.jpg',
            name:'Nike Dunk Low Samba'
        },
        {
            src:'http://dunkhome-production.oss-cn-hangzhou.aliyuncs.com/static_files/2020-02-23/jr6zYquxUPAtVN6ymreT_image_wh_840x549.jpeg',
            name:'Nike Kobe 5 Protro Lakers'
        }

    ]    
},
    {id:2,title:'Jordon',
    img:[
        {
            src:'https://qx.flightclub.cn/img/upload/20200806_51733ee2a05f5b6bbaae1fe9ea79d972.jpg',
            name:'Air Jordan 5 反转新鲜王子'
        },
        {
            src:'https://qx.flightclub.cn/img/upload/20200717_019383c0f1d8c0b1c5559db75c44f26f.jpg',
            name:'Air Jordan 3 WMNS 白黄'
        }

    ]    
},
    {id:3,title:'Adidas',
    img:[
        {
            src:'http://dunkhome-production.oss-cn-hangzhou.aliyuncs.com/static_files/2020-05-17/EtedsXa4hWsR7JkWdSeq_image_wh_840x590.jpeg',
            name:'adidas Superstar'
        },
        {
            src:'http://dunkhome-production.oss-cn-hangzhou.aliyuncs.com/static_files/2020-04-04/rM61gExn3vZEVyS-L_o2_image_wh_840x578.jpeg',
            name:'adidas Stan Smith'
        }

    ]    
},
    {id:4,title:'Converse',
    img:[
        {
            src:'http://dunkhome-production.oss-cn-hangzhou.aliyuncs.com/static_files/2020-05-28/o1ktxv4SLbJ-2QYt_FH-_image_wh_840x504.jpeg',
            name:'CONVERSE 2020 Pride'
        },
        {
            src:'http://dunkhome-production.oss-cn-hangzhou.aliyuncs.com/static_files/2020-05-28/cdX27Gwsqa3_e8o4g9vr_image_wh_840x504.jpeg',
            name:'CONVERSE Chuck Taylor All-Star'
        }

    ]    
    },
    {id:5,title:'vans',
    img:[
        {
            src:'http://www2.flightclub.cn/news/uploads/allimg/200804/6-200P4111028.jpg',
            name:'《辛普森一家》 x Vans'
        },
        {
            src:'http://www2.flightclub.cn/news/uploads/allimg/200813/17-200Q3151A6.jpg',
            name:'Alexander Lee Chang x Vans'
        }

    ]       
}
]
const dunksb = [
    {
        id:1,
        img:'http://p4.itc.cn/images01/20200525/a7dc85c2eb244ca5b2b314fa54c5dd5c.jpeg',       

    },
    {   id:2,
        img:'http://p0.itc.cn/images01/20200525/dd5d4297df6a4ae9a0efea89af2af460.jpeg'
    },{
        id:3,
        img:'http://p3.itc.cn/images01/20200525/59cd005c8fab4eb88bd05e811c5a3ce4.jpeg'
    }
]

const kobe5 = [
        {
        id:1,
        img:'http://dunkhome-production.oss-cn-hangzhou.aliyuncs.com/static_files/2020-02-23/GzMLCTs7C6s1PqhCPKzC_image_wh_840x569.jpeg',       

    },
    {   id:2,
        img:'http://dunkhome-production.oss-cn-hangzhou.aliyuncs.com/static_files/2020-02-23/jr6zYquxUPAtVN6ymreT_image_wh_840x549.jpeg'
    },{
        id:3,
        img:'http://dunkhome-production.oss-cn-hangzhou.aliyuncs.com/static_files/2020-02-23/ogfBBBQH7atxwW7DyfBM_image_wh_840x519.jpeg'
    }
]

const stan = [
    {
        id:1,
        img:'https://images.s.cn/images/wenzhangpic/20160719/69a4a98fff80110d.jpg'
    },
    {
        id:2,
        img:'https://images.s.cn/images/wenzhangpic/20160719/f706b0332ad2949a.jpg'
    },
    {
        id:3,
        img:"https://images.s.cn/images/wenzhangpic/20160719/c0f0179597dee9aa.jpg"
    }
]

const superstart = [
    {
    id:1,
    img:'https://images.s.cn/images/goods/20191213/032709e8e81cfddc.jpg',       

},
{   id:2,
    img:'https://images.s.cn/images/goods/20191024/579c7282ed38e1ef.jpg'
},{
    id:3,
    img:'https://images.s.cn/images/goods/20200509/2c6a7143d31ba3ce.jpg'
}
]

const aj = [
    {
        id:1,
        img:'http://www2.flightclub.cn/news/uploads/allimg/200813/12-200Q3115642.jpg',       
    
    },
    {   id:2,
        img:'http://www2.flightclub.cn/news/uploads/allimg/200813/12-200Q3142953-50.jpg'
    },{
        id:3,
        img:'http://www2.flightclub.cn/news/uploads/allimg/200813/12-200Q3142950.jpg'
    }
]

const vans = [
    {
        id:1,
        img:'http://www.meiletao.com/zb_users/upload/2020/08/202008041596511129383018.jpg',       
    
    },
    {   id:2,
        img:'http://www.meiletao.com/zb_users/upload/2020/08/202008041596511129139045.jpg'
    },{
        id:3,
        img:'http://www.meiletao.com/zb_users/upload/2020/08/202008041596511129136747.jpg'
    }
]

const goodsInfo = [
    {
        id:1,
        title:'nike dunk low',
        goods_no:'zzzzzzzzzzzzz',
        quantity:10,
        sell_date:'2020-10-1',
        market_value:2010,
        Selling_value:1499,
        img:"http://p0.itc.cn/images01/20200525/dd5d4297df6a4ae9a0efea89af2af460.jpeg"
    },
    {
        id:2,
        title:'kobe 5 lakers',
        goods_no:'xxxxxxxxx',
        quantity:10,
        sell_date:'2020-10-1',
        market_value:2500,
        Selling_value:1499,
        img:"http://dunkhome-production.oss-cn-hangzhou.aliyuncs.com/static_files/2020-02-23/jr6zYquxUPAtVN6ymreT_image_wh_840x549.jpeg"
    },
    {
        id:3,
        title:'Adidas superstart',
        goods_no:'xxxxxxxxx',
        quantity:10,
        sell_date:'2020-10-1',
        market_value:699,
        Selling_value:799,
        img:"https://images.s.cn/images/goods/20191213/032709e8e81cfddc.jpg"
    },
    {
        id:4,
        title:'Adidas stan smith',
        goods_no:'xxxxxxxxx',
        quantity:10,
        sell_date:'2020-10-1',
        market_value:699,
        Selling_value:799,
        img:"https://images.s.cn/images/wenzhangpic/20160719/c0f0179597dee9aa.jpg"
    },
    {
        id:5,
        title:'Aj5 翻转新鲜王子',
        goods_no:'xxxxxxxxx',
        quantity:10,
        sell_date:'2020-10-1',
        market_value:1799,
        Selling_value:1499,
        img:"http://www2.flightclub.cn/news/uploads/allimg/200813/12-200Q3142953-50.jpg"
    },
    {
        id:6,
        title:'Vans x 辛普森一家',
        goods_no:'xxxxxxxxx',
        quantity:10,
        sell_date:'2020-10-1',
        market_value:1299,
        Selling_value:799,
        img:"http://www.meiletao.com/zb_users/upload/2020/08/202008041596511129383018.jpg"
    }
]

const goodsDesc = [
    {
        message:`
        <p><img style="width:100%" src="http://p0.itc.cn/q_70/images03/20200806/23636cfc319a473087f9a01f2956500d.jpeg" /></p> 
<p style="text-align: justify; text-indent:2em"><strong><span style="font-size: 16px;">近日，网上出现一组Nike Dunk Low Samba 官方图片，此次出现的版本相较于2001年的版本鞋身亮度更加凸显，Swoosh 标志和鞋身后跟位置的碳纤维元素也得以还原。经典的灰蓝配色也突出了撞色的醒目效果，视觉效果不俗。</span></strong></p> 
<p><img  src="http://p4.itc.cn/q_70/images03/20200806/fddd61eb7c494a0fbda7f289c2f53a9c.jpeg" /></p> 
<p><img style="width:100%" src="http://p8.itc.cn/q_70/images03/20200806/fc8e5494da4e4509b9521b12811d2edd.jpeg" /></p> 
<p><img style="width:100%" src="http://p2.itc.cn/q_70/images03/20200806/c26995653c044c4b977572b21ef1d249.jpeg" /></p> 
<p><img style="width:100%" src="http://p6.itc.cn/q_70/images03/20200806/71bf4386b2b54129ada691aa7d18f87d.jpeg" /></p> 
<p><img style="width:100%" src="http://p0.itc.cn/q_70/images03/20200806/f613fc90c8b548069fe89b359eabad9a.jpeg" /></p> 
<p><img style="width:100%" src="http://p0.itc.cn/q_70/images03/20200806/eb07f0624ec94cd6a0b39cfa568bb705.jpeg" /></p>
        `
    },
    {
        message:`
        <div>
<p>Nike Zoom Kobe 5 Protro<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&mdash;&mdash;&ldquo;Lakers&rdquo;配色官方图<br />浓眉哥在全明星赛上脚的ZK5 Protro &ldquo;Lakers&rdquo;配色，采用了黑色与紫金相结合，据悉将于3月底发售。<br /><br />发售日期：2020年3月26日<br />货号：CD4991-500&nbsp;<br /><img style="width:100%" alt="" src="http://www.v1tuan.com/d/file/p/2020/02-23/415a10a1e0ec875aaffd68f58f1784ca.jpg" />
<p>Kobe Bryant 转战 Nike 后，Kobe 5 亦是备受鞋迷们喜爱的签名鞋款之一，而去年年底 Nike Zoom Kobe 5 Protro 才复刻了经典的「Chaos」小丑配色，今年年初也为了纪念 Kobe Bryant 的五座总冠军奖杯，预计有望推出一款 Nike Zoom Kobe 5 Protro「Big Stage Parade」别注版本鞋款，同时亦代表著致敬此位已故传奇球星。</p>
<p>而在刚刚结束的 NBA 2020 全明星赛周期间，现时效力于 Lakers 的知名球星 Anthony Davis 便率先著用了一双全新配色的 Nike Zoom Kobe 5 Protro，颜色上以 Lakers 球队的紫金配色为设计灵感来源，再搭配著黑色，呈现出 Lakers 与 Black Mamba 的融合。鞋款内衬的部分亦有紫金构成的纹路，另外也用上了大家爱不释手的冰蓝大底。</p>
<p>目前尚未有 Nike Zoom Kobe 5 Protro 新配色的发售价格释出，不过鞋款有望会在 3 月 26 日登场，各位不妨持续关注更新消息。</p></p> <div class="m-fenye"></div>
</div>
        `
    },
    {
        message:`
        <h3>阴阳 Superstar赏析</h3><p><img src="http://shanzhaiba.aiuquan.com/d/file/titlepic/202001/g1kr4xdbb21.png" title="Adidas Superstar新配色发售 Adidas Superstar 50周年款赏析" alt="Adidas Superstar新配色发售 Adidas Superstar 50周年款赏析"></p><p>延续贝壳头的最经典造型，黑白双色装扮的鞋身，一向是球鞋玩家中的心头好。</p><p>这款全新配色最大的亮点在于，鞋子的内外侧以阴阳方式呈现，玩味设计尽显满满个性。</p><p><img src="http://shanzhaiba.aiuquan.com/d/file/titlepic/202001/jfiz1wvu1qn.png" title="Adidas Superstar新配色发售 Adidas Superstar 50周年款赏析" alt="Adidas Superstar新配色发售 Adidas Superstar 50周年款赏析"></p><p>同时鞋舌处选用了最具辨识度的金标设计点缀，吸睛指数高到爆表。</p><p>目前的消息称，这双阴阳 Superstar 将于近期陆续发售，售价为 $80 美元，极具性价比的选择。</p><p>感兴趣的朋友可以搜索货号 FV0323 了解发售详情。</p><p><img src="http://shanzhaiba.aiuquan.com/d/file/titlepic/202001/lilvb0bajmu.png" title="Adidas Superstar新配色发售 Adidas Superstar 50周年款赏析" alt="Adidas Superstar新配色发售 Adidas Superstar 50周年款赏析"></p>
        `
    },
    {
        message:`
        一向积极致力于低碳环保的 adidas 为旗下销量最好的经典鞋型 Superstar 与 Stan Smith，打造可回收物料的 The Clean Classics 系列。让我们继 Ultra Boost 外，拥有更多上脚选择！<br />
<br />
简洁的乳白色鞋身采用 70% 的可回收物料制作，软木塞鞋垫与类似泼墨装扮的大底也贯彻环保理念，在传统球鞋制作工艺的基础上，加入回收废弃橡胶、可再生泡棉等材质。<br />
<br />
<img src="http://www2.flightclub.cn/news/uploads/allimg/200730/6-200I0130229.jpg" class="lazy" alt="adidas,Superstar,Stan Smith,Th  adidas 销量王推出「环保版本」，细节设计暗藏玄机！" title="adidas,Superstar,Stan Smith,Th  adidas 销量王推出「环保版本」，细节设计暗藏玄机！" ><br />
<br />
细看鞋面拼接边缘以方形轮廓示人，并没有进行额外裁剪修饰。<br />
<br />
而这样的做法，避免产生更多的边角料，从而达成减排目的。<br />
<br />
<img src="http://www2.flightclub.cn/news/uploads/allimg/200730/6-200I0130227-50.jpg" class="lazy" alt="adidas,Superstar,Stan Smith,Th  adidas 销量王推出「环保版本」，细节设计暗藏玄机！" title="adidas,Superstar,Stan Smith,Th  adidas 销量王推出「环保版本」，细节设计暗藏玄机！" ><br />
<br />
在保持复古经典轮廓的同时，鞋舌点缀 The Clean Classics 专属 Logo，彰显环保主题。<br />
        `
    },
    {
        message:`
        最近频频曝光报道的「新鲜王子 2.0」Air Jordan 5 &ldquo;Alternate Bel-Air&rdquo;，终于将于本周末迎来发售，今天海外球鞋店铺 sneakerpolitics 率先晒出实物美图。<br />
<br />
在 2013 年的 Bel-Air 之后，以威尔&middot;史密斯出演电影《新鲜王子妙事多》为灵感的「新鲜王子」已经成为 Air Jordan 5 的经典配色，今年这双「新鲜王子 2.0」自然备受期待。<br />
<br />
<img src="http://www2.flightclub.cn/news/uploads/allimg/200813/12-200Q3142953-50.jpg" class="lazy" alt="AJ5,Air Jordan 5,DB3335-100,发售  「新鲜王子 2.0」AJ5 最新美图来了！全家族尺码周六发售！" title="AJ5,Air Jordan 5,DB3335-100,发售  「新鲜王子 2.0」AJ5 最新美图来了！全家族尺码周六发售！" ><br />
<br />
整体风格延续初代 Air Jordan 5 &ldquo;Bel-Air&rdquo;，最大区别在于鞋面改为白色皮革材质。<br />
<br />
内衬采用多彩色块拼接打造，同时鞋舌与后跟的 Jumpman Logo、中底火焰涂装、外底色调都以不对称的鸳鸯设计呈现。<br />
<br />
<img src="http://www2.flightclub.cn/news/uploads/allimg/200813/12-200Q3142950.jpg" class="lazy" alt="AJ5,Air Jordan 5,DB3335-100,发售  「新鲜王子 2.0」AJ5 最新美图来了！全家族尺码周六发售！" title="AJ5,Air Jordan 5,DB3335-100,发售  「新鲜王子 2.0」AJ5 最新美图来了！全家族尺码周六发售！" ><br />
<br />
重现威尔&middot;史密斯在剧中穿搭的鲜明个性！相比 2013 年版本，白色鞋面令整体效果更加清爽，更适合夏季穿着。<br />
<br />
将于 8 月 15 日本周六上午 9 点在 Nike 官网和 SNKRS 发售，发售价格为 ￥1499 元，感兴趣的朋友不要错过！<br />
<br />
<strong>Air Jordan 5 &ldquo;Alternate Bel-Air&rdquo;</strong><br />
货号：DB3335-100<br />
发售日期：8 月 15 日<br />
发售价格：￥1499 元<br />
<br />`
    },
    {
        message:`<div id="content-area">
        <p>上月末，美乐淘潮牌汇曾报道过滑板品牌 Vans 即将携手《<strong>辛普森一家</strong>》打造联乘的消息，近期该系列终于完整公布。</p><p style="text-align:center"><img src="http://www.meiletao.com/zb_users/upload/2020/08/202008041596511106893839.jpg" title="Vans x《辛普森一家》全新联名系列-1.jpg" style="text-align: center; white-space: normal;"/></p><p style="text-align: center"><img src="http://www.meiletao.com/zb_users/upload/2020/08/202008041596511106432927.jpg" style="" title="Vans x《辛普森一家》全新联名系列-2.jpg"/></p><p style="text-align: center"><img src="http://www.meiletao.com/zb_users/upload/2020/08/202008041596511106277724.jpg" style="" title="Vans x《辛普森一家》全新联名系列-5.jpg"/></p><p style="text-align: center"><img src="http://www.meiletao.com/zb_users/upload/2020/08/202008041596511106337958.jpg" style="" title="Vans x《辛普森一家》全新联名系列-4.jpg"/></p><p style="text-align: center"><img src="http://www.meiletao.com/zb_users/upload/2020/08/202008041596511107189659.jpg" style="" title="Vans x《辛普森一家》全新联名系列-6.jpg"/></p><p style="text-align: center"><img src="http://www.meiletao.com/zb_users/upload/2020/08/202008041596511107978190.jpg" style="" title="Vans x《辛普森一家》全新联名系列-3.jpg"/></p><p>此番 <strong>Vans</strong> 选取了 Sk8-Hi、 Old Skool 以及 Slip-On Pro 等 5 款鞋型重塑，并在其中融入了剧中的 5 位家庭成员形象，另外还搭配了腰包、鸭舌帽、T-Shirt 等服饰。</p><p style="text-align: center"><img src="http://www.meiletao.com/zb_users/upload/2020/08/202008041596511129605546.jpg" style="" title="Vans x《辛普森一家》全新联名系列-7.jpg"/></p><p style="text-align: center"><img src="http://www.meiletao.com/zb_users/upload/2020/08/202008041596511129398618.jpg" style="" title="Vans x《辛普森一家》全新联名系列-8.jpg"/></p><p style="text-align: center"><img src="http://www.meiletao.com/zb_users/upload/2020/08/202008041596511129383018.jpg" style="" title="Vans x《辛普森一家》全新联名系列-9.jpg"/></p><p style="text-align: center"><img src="http://www.meiletao.com/zb_users/upload/2020/08/202008041596511129139045.jpg" style="" title="Vans x《辛普森一家》全新联名系列-11.jpg"/></p><p style="text-align: center"><img src="http://www.meiletao.com/zb_users/upload/2020/08/202008041596511129790119.jpg" style="" title="Vans x《辛普森一家》全新联名系列-12.jpg"/></p><p style="text-align: center"><img src="http://www.meiletao.com/zb_users/upload/2020/08/202008041596511129136747.jpg" style="" title="Vans x《辛普森一家》全新联名系列-10.jpg"/></p><p><strong>Vans x《辛普森一家》全新联名系列</strong>将在本月 7 日于 Vans 官网开启贩售，等待已久的粉丝们可要提前做好准备哟~</p>				</div>`
    }
]
app.get('/goodsinfo/car/:id',(req,res)=>{
    //console.log(req.params.id)
    let arr = []
    arr = req.params.id.split(',')
    //console.log(arr)
    let showGoods = []
    arr.forEach(item=>{
        showGoods.push(goodsInfo[+item -1])
    })
    res.send(showGoods)
})

app.get('/goods/getdesc/:id',(req,res)=>{
    switch (req.params.id) {
        case '1':
            res.send(goodsDesc[0])
            break;
            case '2':
                res.send(goodsDesc[1])
                break;
                case '3':
                    res.send(goodsDesc[2])
                    break;
                    case '4':
                    res.send(goodsDesc[3])
                    break;
                    case '5':
                    res.send(goodsDesc[4])
                    break;
                    case '6':
                    res.send(goodsDesc[5])
                    break;
        default:
            break;
    }
})

app.get('/goodsinfo/info/:id',(req,res)=>{
    switch (req.params.id) {
        case '1':
            res.send(goodsInfo[0])
            break;
            case '2':
                res.send(goodsInfo[1])
                break;
            case '3':
                res.send(goodsInfo[2])
                break;
                case '4':
                res.send(goodsInfo[3])
                break;
                case '5':
                res.send(goodsInfo[4])
                break;
                case '6':
                res.send(goodsInfo[5])
                break;
    
        default:
            break;
    }
})

app.get('/gooodsinfo/lunbotu/:id',(req,res)=>{
    switch (req.params.id) {
        case '1':
            res.send(dunksb)
            break;
        case '2':
            res.send(kobe5)
            break;
        case '3':
            res.send(superstart)
            break;
        case '4':
            res.send(stan)
            break;
            case '5':
                res.send(aj)
                break;
                case '6':
                    res.send(vans)
                    break;
        default:
            break;
    }
})

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
    switch (req.params.id) {
        case '1':
            req.body.date_time = new Date()
            req.body.id = comments.length+1
            comments.unshift(req.body)
            res.send(comments[0])
            break;    
        default:
            break;
    }
})

app.get('/getphoto',(req,res)=>{
    res.send(title)
})

app.get('/getgoods',(req,res)=>{
    res.send(goods)
})

app.listen(5000,()=>{
    console.log('service is running...')
})
