//引入大三房express模块
const express=require('express');

//为解决跨域问题
const cors=require('cors');

//引入MD5模块
const md5=require('md5');

//引入body-parser中间件
const bodyParser=require('body-parser');

//引入mysql模块，并进行相关配置
const mysql=require('mysql');
const { query } = require('express');

// const app= require("http").createServer();
// const io = require("socket.io")(app);
// io.on("connect",(client)=>{
//     client.on('send message',(data)=>{
//         console.log(data)
//         //服务器向所有客户端广播
//         // server.emit('boast message',{message:data.message})
//     })
    
// })

//创建连接池对象
const pool=mysql.createPool({
     //mysql数据库服务器地址
     host:"127.0.0.1",
     //mysql数据库服务器端口
     port:3306,
     //数据库用户的用户名
     user:"root",
     //数据库用n户的密码
     password:"",
     //数据库名称
     database:"acar",
     //数据库编码方式
     charset:"utf8",
     //最大连接数
     connectionlimit:15
});

//创建WEB服务器
const server=express();

//使用cors模块
server.use(cors({
    //数组里输入要跨域的地址
    origin:['http://localhost:8080','http://119.123.103.44:8080','http://192.168.1.102:8080','http://192.168.0.33:8080']
}));

//使用bodyParser中间件
server.use(bodyParser.urlencoded({
    extended:false
}));


//创建register的post请求
server.post('/register',(req,res)=>{
    //获取用户输入的信息
    var phone=req.body.phone;
    var password=md5(req.body.password);
    //将数据插入到数据库
    //先查找数据库有没有此用户
    var sql="SELECT COUNT(id) AS count FROM acar_users WHERE phone=?"
    pool.query(sql,[phone],(err,result)=>{
        if(err) throw err;
        var count=result[0].count;

        //判断是否存在
        if(count==1){
            res.send({message:'注册失败',code:0});
        }else{
            //如果不存在，则插入数据
            var sql="INSERT acar_users(phone,password) VALUES(?,?)";
            pool.query(sql,[phone,password],(err,result)=>{
                if(err) throw err;
                res.send({message:'注册成功',code:1});
            });
        }
    })
})


//创建login的post路由
server.post('/login',(req,res)=>{
    //获取用户登录的电话和密码
    var phone=req.body.phone;
    var password=md5(req.body.password);
    //根据用户输入的信息查询数据库有没有此用户
   var sql="SELECT id,phone FROM acar_users WHERE phone=? AND password=?";
   pool.query(sql,[phone,password],(err,result)=>{
       if(err) throw err;

       if(result.length>0){
         res.send({message:'登录成功',code:1,phone:result[0].phone,id:result[0].id});
       }else{
           res.send({message:'登录失败',code:0});
       }
   });
})

//请求用户信息
server.get('/xinxi',(req,res)=>{
    var $bid = req.query.bid;
    var sql = "SELECT * FROM user_details,user_xingge WHERE bid=? AND bid=cid";
    pool.query(sql,[$bid],(err,result)=>{
        if(err) throw err;
        // console.log(result)
        res.send({message:'查询成功',result:result});
    })
})

server.post('/update',(req,res)=>{
    var id = req.body.id;
    
    // 姓名 / 年龄
    var uname = req.body.uname;
    var uage = req.body.uage;
    // 星座 / 行业 / 来自哪 / 个性签名
    var xingzuo = req.body.constellation;
    var uoccupation = req.body.hangye;
    var uhome = req.body.from;
    var autograph = req.body.autograph;
     // 标签 / 运动 / 音乐 / 美食 / 电影 / 书 / 旅行 // 标签 / 运动 / 音乐 / 美食 / 电影 / 书 / 旅行
    var ulabel = req.body.label;
    var umotion = req.body.movement;
    var umusic = req.body.music;
    var ufood = req.body.food;
    var ufilm = req.body.video;
    var obook = req.body.book;
    var utour = req.body.trave;
    var sql = "UPDATE user_details set uname=?,uage=?,xingzuo=?,uoccupation=?,uhome=?,autograph=? where bid=?";
    pool.query(sql,[uname,uage,xingzuo,uoccupation,uhome,autograph,id],(err,result)=>{
        if(err)  throw  err;
    })
    var sql = "update user_xingge set ulabel=?,umotion=?,umusic=?,ufood=?,ufilm=?,obook=?,utour=? where cid=?";
         pool.query(sql,[ulabel,umotion,umusic,ufood,ufilm,obook,utour,id],(err,result)=>{
            if (err)  throw err;
             if(result.affectedRows == 1){
                res.send('1')
         }
     }) 
})

//创建端口号
server.listen(4000);
