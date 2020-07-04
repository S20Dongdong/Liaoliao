import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Change from '../views/change/Change.vue'
Vue.use(VueRouter);



const routes = [
  //测试
  {
    path:'/',
    component:Change
  }, 

  {//1.首页 郭志勇
    path: '/A',
    name: 'Home',
    component: Home
  },
  { //2.登录  郭志勇
    path: '/login',
    component: () => import(
      /* webpackChunkName: "login" */ 
      '../views/Login.vue'
      )
  },  
  { //3.注册  郭志勇
    path: '/register',
    component: () => import(
      /* webpackChunkName: "register" */ 
      '../views/Register.vue'
      )
  },
  { //4.直播页面  龙梅
    path: '/streaming',
    component: () => import(
      /* webpackChunkName: "streaming" */ 
      '../views/Streaming.vue'
      )
  },
  { //5.播放页面  龙梅
    path: '/play',
    component: () => import(
      /* webpackChunkName: "play" */ 
      '../views/Play.vue'
      )
  },
  { //6.聊天列表页面  钟一鸣
    path: '/chat',
    component: () => import(
      /* webpackChunkName: "chat" */ 
      '../views/Chat.vue'
      )
  },
  { //7.朋友圈页面  钟一鸣
    path: '/friends',
    component: () => import(
      /* webpackChunkName: "friends" */ 
      '../views/Friends.vue'
      )
  },
  { //8.个人资料页面  付香东
    path: '/database',
    component: () => import(
      /* webpackChunkName: "database" */ 
      '../views/Database.vue'
      )
  },
  { //9.对话页面  付香东
    path: '/dialogue',
    component: () => import(
      /* webpackChunkName: "dialogue" */ 
      '../views/Dialogue.vue'
      )
  },
  { //10.修改信息页面  张进东
    path: '/change',
    component: () => import(
      /* webpackChunkName: "change" */ 
      '../views/change/Change.vue'
      ),
  },
  {//10.1 进入个人信息
    path:'/change_my',
    component: () => import(
      /* webpackChunkName: "change_my" */ 
      '../views/change/Change_my.vue'
      )
  },
  {//10.2 进入个人信息_行业
    path:'/change_hangYe',
    component: () => import(
      /* webpackChunkName: "change_hangYe" */ 
      '../views/change/Change_hangYe.vue'
      )
  },
  {//10.3 进入行业领域
    path:'/change_lingYu',
    component: () => import(
      /* webpackChunkName: "change_lingYu" */ 
      '../views/change/Change_lingYu.vue'
      )
  },
  {//10.4 进入公司
    path:'/change_gongSi',
    component: () => import(
      /* webpackChunkName: "change_gongSi" */ 
      '../views/change/Change_gongSi.vue'
      )
  },
  {//10.4 来自哪里
    path:'/change_laiZi',
    component: () => import(
      /* webpackChunkName: "change_laiZi" */ 
      '../views/change/Change_laiZi.vue'
      )
  },
  {//10.5 星座
    path:'/constellation',
    component: () => import(
      /* webpackChunkName: "constellation" */ 
      '../views/change/constellation'
      )
  },
  {//10.6 个性签名
    path:'/change_ianMing',
    component: () => import(
      /* webpackChunkName: "change_ianMing" */ 
      '../views/change/Change_ianMing.vue'
      )
  },
  {//10.7 个性标签
    path:'/label',//标签
    component: () => import(
      /* webpackChunkName: "label" */ 
      '../views/change/Change_label.vue'
      )
  },
  {//10.8 运动：movement
    path:'/movement',
    component: () => import(
      /* webpackChunkName: "movement" */ 
      '../views/change/Change_movement.vue'
      )
  },
  {//10.9 音乐：music
    path:'/music',
    component: () => import(
      /* webpackChunkName: "music" */ 
      '../views/change/Change_music.vue'
      )
  },
  {//10.10 食物：food
    path:'/food',
    component: () => import(
      /* webpackChunkName: "food" */ 
      '../views/change/Change_food.vue'
      )
  },
   {//10.11 电影：video
    path:'/video',
    component: () => import(
      /* webpackChunkName: "video" */ 
      '../views/change/Change_video.vue'
      )
  }, {//10.12 书：book
    path:'/book',
    component: () => import(
      /* webpackChunkName: "book" */ 
      '../views/change/Change_book.vue'
      )
  }, {//10.13 旅行：travel
    path:'/travel',
    component: () => import(
      /* webpackChunkName: "travel" */ 
      '../views/change/Change_travel.vue'
      )
  },
];

const router = new VueRouter({
  mode: 'history',  //路由模式
  base: process.env.BASE_URL,
  routes
})

export default router
