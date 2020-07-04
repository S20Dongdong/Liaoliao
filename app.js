//1.加载express模块__创建服务器
const express=require("express");

//加载cors模块__处理网页之间跨域问题
const cors=require("cors");

//加载mysql数据库__提取后台数据
const mysql=require("mysql");

//加载body——parser模块__转换接收前端发给后端的数据
const bodyParser=require("body-parser");

//加载mds模块__用户密码实现加密效果
const md5=require("mds");

//创建mysql连接池__链接后台数据库
const pool=mysql.createPool({
  //mysql 数据库服务器的地址
  host:"127.0.0.1",
  //mysql 数据库服务器端口号
  port:3306,
  //用户名
  user:"root",
  //密码
  password:"",
  //数据库名称
  database:"car"
});

// 1.创建express应用
const server=express();

//使用cors模块
server.use(cors({
  origin:['http://127.0.0.1:8080','http://localhost:8080']
}))