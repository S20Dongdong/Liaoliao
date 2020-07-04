<template>
  <div>
    <!-- 头部标题栏 -->
    <div>
      <mt-header class="h-color" title="个人信息" fixed>
        <mt-button slot="left" icon='back' @click="baoCun()"></mt-button>
      </mt-header>
    </div>
    <!-- 头部标题栏 结束 -->
    <!-- 内容区域 -->
    <div id="my">
      <!-- 个人详情标题 -->
      <div class="my-xinXi">
        <p>个人详情</p>
      </div>
      <!-- 个人详情标题 结束 -->
      <!-- 性别 -->
      <mt-field class="my_input" label="性别" v-model="this.$store.state.sex" readonly disabled></mt-field>
      <mt-field class="my_input" type="text" label="昵称" v-model="username" :attr="{maxlength:'8'}" ></mt-field>
      <mt-field class="my_input" type="text" label="年龄" v-model="uage" :attr="{maxlength:'2'}" ></mt-field>
    </div>
  </div>
</template>
<style scoped>
   /* 标题栏 */
  .h-color{
    background-image: linear-gradient(to right,#C73716,#D36314);
    padding-left: 1rem;
  }
  #my{
    margin-top: 2.5rem;
  }
  .my-xinXi{
    color: #989896;
    background-color: #F5F6F1;
    padding: 1.6rem 0rem 0.7rem 0.6rem;
    
  }
  .my_input{
    border-bottom: #aaaaa7 0.1px solid;
  }
</style>
<script>
export default {
  methods:{
    baoCun(){
      if(this.username== '' ){
        this.$store.state.uname;
      }else{
        this.$store.commit("uname",this.username); 
     } 
     if(this.uage== '' ){
        this.$store.state.uage;
      }else{
        this.$store.commit("uage",this.uage);
     } 
     this.$router.push("/change");
    }
  },
  mounted(){
   this.username=this.$store.state.uname,
   this.uage=this.$store.state.uage
  },
  data(){
    return{
      // sex:'男',
      username:'',
      uage:''
      // birthday:'2020-10-10'
    }
  }
}
</script>