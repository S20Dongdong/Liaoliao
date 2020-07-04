<template>
  <div>
    <!-- 头部标题栏 -->
    <div>
      <mt-header class="h-color" title="编辑个人资料" fixed>
        <mt-button slot="left" @click="back()" icon="back">返回</mt-button>
        <mt-button slot="right" @click="handler()">确认</mt-button>
      </mt-header>
    </div>
    <!-- 中间内容区域 -->
    <div id="iBody">
      <!--图片区域 -->
      <!-- 第一排图，1大2小  -->
      <div class="ziPai">
        <!-- 大图 -->
        <!-- <div> -->
        <img class="big" :src="this.$store.state.images[0]" />
        <!-- </div> -->
        <!-- 小图 -->
        <div class="small_2">
          <img class="small" :src="this.$store.state.images[1]" />
          <img class="small" :src="this.$store.state.images[2]" />
        </div>
      </div>
      <!-- 图片区域 第二排 -->
      <div class="ziPai_2">
        <!-- 三张小图 -->
        <img class="small_3" :src="this.$store.state.images[3]" />
        <img class="small_3" v-if="this.$store.state.images[4]" :src="this.$store.state.images[4]" />
        <img v-else src="../../assets/images/tianjia.png" alt="">
        <img v-if="this.$store.state.images[5] " class="small_3" :src="this.$store.state.images[5]" />
        <img v-else src="../../assets/images/tianjia.png" alt="">
      </div>
      <!-- 图片区域 结束 -->
      <!-- 提示栏 -->
      <div class="jingGao">
        <div>
          <img src="../../assets/images/jingGao.png" alt />
        </div>
        <p>尊敬的用户，你上传的头像和文字信息须遵守相关法律法规和社区规则，请严格遵守相关规定，以免违规。我们要求用户提供真实照片来保证平台和用户安全</p>
      </div>
      <!-- 提示栏 结束 -->
      <!-- 个人信息 -->
      <div>
        <mt-cell
          class="font-hei"
          :title="this.$store.state.uname + '，' + this.$store.state.uage"
          label="点击编辑个人信息爱（如姓名，年龄）"
          isLink
          to="/change_my"
        >
          <img class="sex" v-if="this.$store.state.sex == '女' " src="../../assets/images/nan.png" />
          <img v-else />
        </mt-cell>
      </div>
      <!-- 个人信息 结束 -->
      <!-- 我的信息栏 -->
      <div>
        <div class="my-xinXi">
          <p>我的信息</p>
        </div>

        <!-- 星座 -->
        <mt-cell class="font-hui" title="星座" isLink to="/constellation">
          <p
            class="xinXi_value font-hei w-20"
            v-if="this.$store.state.constellation "
          >{{this.$store.state.constellation }}</p>
          <p class="xinXi_value" v-else>添加你的星座</p>
        </mt-cell>

        <!-- 行业 -->
        <mt-cell class="font-hui" title="行业" isLink to="/change_hangYe">
          <p
            class="xinXi_value font-hei"
            v-if="this.$store.state.hangYe"
          >{{this.$store.state.hangYe}}</p>
          <p class="xinXi_value" v-else>添加行业信息</p>
        </mt-cell>

        <!-- 家乡信息 -->
        <mt-cell class="font-hui" title="来自" isLink to="/change_laiZi">
          <p class="xinXi_value font-hei" v-if="this.$store.state.from">{{this.$store.state.from}}</p>
          <p class="xinXi_value" v-else>添加你的家乡信息</p>
        </mt-cell>

        <!-- 个性签名 -->
        <mt-cell class="font-hui" title="个性签名" isLink to="/change_ianMing">
          <p
            class="xinXi_value font-hei w-20"
            v-if="this.$store.state.autograph"
          >{{this.$store.state.autograph}}</p>
          <p class="xinXi_value" v-else>添加你的个性签名</p>
        </mt-cell>
      </div>
      <!-- 我的标签 -->
      <div>
        <div class="my-xinXi">
          <p>我的标签</p>
        </div>
        <mt-cell-swipe class="font-hei" isLink to="/label">
          <img src="../../assets/images/biaoQiao.png" slot="icon" alt />
          <div class="xingQu">
            <span class="font-hei" v-if="this.$store.state.label == 1 ">我的标签</span>
            <span
              class="biaoqian label"
              v-else
              v-for="(item,index) in this.$store.state.label"
              :key="index"
            >{{item}}</span>
          </div>
        </mt-cell-swipe>
      </div>

      <!-- 我的标签 结束 -->
      <!-- 我的兴趣 -->
      <div>
        <div class="my-xinXi">
          <p>我的兴趣</p>
        </div>
        <!-- 我喜欢的运动 -->
        <mt-cell-swipe class="font-hei" isLink to="/movement">
          <img src="../../assets/images/yunDong.png" slot="icon" alt />
          <div class="xingQu">
            <span class="font-hei" v-if="this.$store.state.movement ==1 ">我喜欢的运动</span>
            <span
              class="movement label"
              v-else
              v-for="(item,index) in this.$store.state.movement"
              :key="index"
            >{{item}}</span>
          </div>
        </mt-cell-swipe>
        <!-- 我喜欢的音乐 -->
        <mt-cell-swipe class="font-hei" isLink to="/music">
          <img src="../../assets/images/yinYue.png" slot="icon" alt />
          <div class="xingQu">
            <span class="font-hei" v-if="this.$store.state.music == 1 ">我喜欢的音乐</span>
            <span
              class="music label"
              v-else
              v-for="(item,index) in this.$store.state.music"
              :key="index"
            >{{item}}</span>
          </div>
        </mt-cell-swipe>
        <!-- 我喜欢的食物 -->
        <mt-cell-swipe class="font-hei" isLink to="/food">
          <img src="../../assets/images/shiWu.png" slot="icon" alt />
          <div class="xingQu">
            <span class="font-hei" v-if="this.$store.state.food == 1 ">我喜欢的食物</span>
            <span
              class="food label"
              v-else
              v-for="(item,index) in this.$store.state.food"
              :key="index"
            >{{item}}</span>
          </div>
        </mt-cell-swipe>
        <!-- 我喜欢的电影 -->
        <mt-cell-swipe class="font-hei" isLink to="/video">
          <img src="../../assets/images/dianYin.png" slot="icon" alt />
          <div class="xingQu">
            <span class="font-hei" v-if="this.$store.state.video == 1 ">我喜欢的电影</span>
            <span
              class="video label"
              v-else
              v-for="(item,index) in this.$store.state.video"
              :key="index"
            >{{item}}</span>
          </div>
        </mt-cell-swipe>
        <!-- 我喜欢的书和动漫 -->
        <mt-cell-swipe class="font-hei" isLink to="/book">
          <img src="../../assets/images/shu.png" slot="icon" alt />
          <div class="xingQu">
            <span class="font-hei" v-if="this.$store.state.book == 1 ">我喜欢的书和动漫</span>
            <span
              class="book label"
              v-else
              v-for="(item,index) in this.$store.state.book"
              :key="index"
            >{{item}}</span>
          </div>
        </mt-cell-swipe>
        <!-- 我的旅行足迹 -->
        <mt-cell-swipe class="font-hei" isLink to="/travel">
          <img src="../../assets/images/lvXing.png" slot="icon" alt />
          <div class="xingQu">
            <span class="font-hei" v-if="this.$store.state.travel == 1 ">我的旅行足迹</span>
            <span
              class="travel label"
              v-else
              v-for="(item,index) in this.$store.state.travel"
              :key="index"
            >{{item}}</span>
          </div>
        </mt-cell-swipe>
      </div>
      <!-- 我的兴趣 结束 -->
      <div>
        
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 上导航栏溢出 */
#iBody {
  margin-top: 2.5rem;
}
/* 标题栏 */
.h-color {
  background-image: linear-gradient(to right, #c73716, #d36314);
}
.ziPai {
  width: 100%;
  display: flex;
  margin-bottom: 0.2rem;
}
/* 大图 */
.big {
  width: 66%;
  height: 15.6rem;
  margin-right: 0.2rem;
}
/* 小图 */
.small {
  width: 100%;
  height: 7.8rem;
}
.small_2 {
  height: 15.6rem;
  width: 33%;
}
/* 第二排图片 */
.ziPai_2 {
  display: flex;
  margin-bottom: 0.3rem;
}
.ziPai_2 img + img {
  margin-left: 0.2rem;
}
.small_3 {
  width: 32.5%;
  height: 8rem;
}
/* 警告栏 */
.jingGao {
  font-size: 0.78rem;
  background-color: #f7f7f7;
  padding: 1rem;
  color: #9a9a9a;
  display: flex;
  margin: 0.3rem 0 0.3rem 0;
  border-left: #ffffff solid 0.5rem;
  border-right: #ffffff solid 0.5rem;
}
.jingGao > div {
  line-height: 38.2px;
  margin-right: 0.7rem;
}
.sex {
  margin: -1.125rem 0 0 -10.625rem;
}
/* 个人信息 */
.xinXi_value {
  margin-left: -13.5rem;
  color: #9e9e9e;
}
.my-xinXi {
  color: #989896;
  background-color: #f5f6f1;
  padding: 1.4rem 0rem 0.7rem 0.6rem;
}
/* 字体灰 */
.font-hui {
  color: #9e9e9e;
}
/* 字体黑 */
.font-hei {
  color: black;
}
/* 个人兴趣图片离标题位置 */
.mint-cell-title img {
  margin-right: 0.6rem;
}
.xingQu {
  width: 19rem;
}
.label {
  color: #fff;
  padding: 0.3rem;
  margin-right: 0.3rem;
  border-radius: 0.5rem;
}
.biaoqian {
  background: linear-gradient(#50d3cc, #50d3cf);
}
.movement {
  background: linear-gradient(#438045, #43804e);
}
.music {
  background: linear-gradient(#4e56c7, #4e56c1);
}
.food {
  background: linear-gradient(#be6d63, #be6d6a);
}
.video {
  background: linear-gradient(#6f7094, #6f709f);
}
.book {
  background: linear-gradient(#d4b34c, #d4b341);
}
.travel {
  background: linear-gradient(#6fa0c5, #6fa0cf);
}
.w-20 {
  width: 13rem;
}
</style>
<script>
export default {
  mounted() {
    if (this.$store.state.label == "") {
      this.$store.dispatch("getData");
    }
  },
  data() {
    return {
      selected: "wo",
      updatedCount: 0,
    };
  },
  methods: {
    handler() {
      this.$store.dispatch("postData");
    },
    back() {
      // if (this.$store.state != this.$store.state.date) {
      //   this.MessageBox.confirm("确认修改信息", "提示");
      // }
      console.log(this.$store.state)
      console.log(this.$store.state.date)
    }
  }
};
</script>