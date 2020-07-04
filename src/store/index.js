import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

import qs from 'qs'
Vue.prototype.qs = qs;

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:"",
    // 音乐
    music:"",
    // 运动
    movement:"",
    // 食物
    food:"",
    // 电影
    video:"",
    // 书
    book:"",
    // 旅行
    travel:"",
    //标签
    label:"",
    // 行业
    hangYe:"",
    // 领域
    lingYu:"",
    // 年龄
    uage:'',
    // 昵称
    uname:"",
    // 性别
    sex:"",
    // 来自哪
    from:"",
    // 个性签名
    autograph:"",
    // 星座
    constellation:"",
    //头像
    images:[]
  },
  mutations: {
    // 音乐
    music(state,payload){
      state.music=payload
    },
    // 运动
    movement(state,payload){
      state.movement=payload
    },
    // 食物
    food(state,payload){
      state.food=payload
    },
    // 电影
    video(state,payload){
      state.video=payload
    },
    // 书
    book(state,payload){
      state.book=payload
    },
    // 旅行
    travel(state,payload){
      state.travel=payload
    },
    // 标签
    label(state,payload){
      state.label=payload
    },
    // 行业
    hangYe(state,payload){
      state.hangYe=payload
    },
    // 领域
    lingYu(state,payload){
      state.lingYu=payload
    },
    // 姓名
    uname(state,payload){
      state.uname=payload
    },
    // 年龄
    uage(state,payload){
      state.uage=payload
    },
    // 来自
    from(state,payload){
      state.from=payload
    },
    // 星座
    constellation(state,payload){
      state.constellation=payload
    },
    // 个性签名
    autograph(state,payload){
      state.autograph=payload
    },
    setData(state,payload){
     console.log(payload)
     //  喜欢的音乐 
      state.music=(payload[0].umusic).split(",")
      // 喜欢的食物
      state.food=(payload[0].ufood).split(",");
      // 喜欢的运动
      state.movement=(payload[0].umotion).split(",");
      // 个人标签
      state.label=(payload[0].ulabel).split(",");
      // 喜欢的电影
      state.video=(payload[0].ufilm).split(",");
      // 旅行去过的地方
      state.travel=(payload[0].utour).split(",");
      // 喜欢的书和动漫
      state.book=(payload[0].obook).split(",");
      // 用户昵称
      state.uname=payload[0].uname;
      // 用户年龄
      state.uage=payload[0].uage;
      // 来自哪里
      state.from=payload[0].uhome;
      // 个性签名
      state.autograph=payload[0].autograph;
      // 行业
      state.hangYe=payload[0].uoccupation;
      // 星座
      state.constellation=payload[0].xingzuo;
      // 用户性别
      if(payload[0].usex == 1 ){
        state.sex = "男"
      }else{
        state.sex = "女"
      }
    }
  },
  actions: {
    getData(context){
      var id="7"
      axios.get('/xinxi?bid='+id).then((res)=>{
        context.commit('setData',res.data.result);
        sessionStorage.setItem('images',res.data.result[0].images);
        var my_image = sessionStorage.getItem("images").split(",");
        my_image.forEach(item => {
          if (item.length) {
            item = require("../assets/images/user_images/" + item);
         }
         this.state.images.push(item);
        });
      });
    },
    postData(){
      //  var book = this.state.book.join(',')
      //  console.log(book)
      var obj={
        id: this.state.id,
        // 姓名 / 性别
        uname:this.state.uname,
        uage:this.state.uage,
        // 星座 / 行业 / 来自哪 / 个性签名
        constellation:this.state.constellation,
        hangye:this.state.hangYe,
        from:this.state.from,
        autograph:this.state.autograph,
        // 标签 / 运动 / 音乐 / 美食 / 电影 / 书 / 旅行
        label: this.state.label.join(','),
        movement: this.state.movement.join(','),
        music: this.state.music.join(','),
        food: this.state.food.join(','),
        video: this.state.video.join(','),
        trave: this.state.travel.join(','),
        book: this.state.book.join(','),  
      }
      console.log(obj)
      axios.post('/update',qs.stringify(obj))
    }
  },
  modules: {
  }
})
