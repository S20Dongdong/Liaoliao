<template >
  <div>
    <!-- 头部标题栏 -->
    <div>
      <mt-header class="h-color" title="来自" fixed>
        <router-link slot="left" to="/change">
          <mt-button>取消</mt-button>  
        </router-link>
        <mt-button slot="right" @click="baoCun()">完成</mt-button>
      </mt-header>
    </div>
    <!-- 头部标题栏 结束 -->
    <!-- 内容区域 -->
    <div id="my">
      <mt-field class="text" type="textarea" v-model="from" placeholder="添加居住地址"></mt-field>
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
    background-color: #F5F6F1;
  }
  .height{
    height: 39.5rem;
  }
  .text{
    margin:0rem 0.5rem;
    padding-top: 1rem;
    background: #F5F6F1;
  }
  .text input{
    color: #CACBC6;
    background: #F5F6F1;
    border-bottom: 0.1rem solid #D7D8D3;
  }
</style>
<script>
export default {
  methods:{
    baoCun(){
      this.$store.commit("from",this.from); 
      this.$router.push("/change")
    }
  },
  mounted(){
   this.from=this.$store.state.from
  },
  data(){
    return{
      from:""
    }
  }
}
</script>