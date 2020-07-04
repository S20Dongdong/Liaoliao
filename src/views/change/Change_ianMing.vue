<template >
  <div>
    <!-- 头部标题栏 -->
    <div>
      <mt-header class="h-color" title="个新签名" fixed>
        <router-link slot="left" to='/change'>
          <mt-button>取消</mt-button>
        </router-link>
        <mt-button slot="right" @click="baoCun()">完成</mt-button>
      </mt-header>
    </div>
    <!-- 头部标题栏 结束 -->
    <!-- 内容区域 -->
    <div id="my">
      <mt-field class="text" v-model="autograph" type="textarea" row="4" :attr="{maxlength:'100'}" ></mt-field>
      
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
      this.$store.commit("autograph",this.autograph); 
      this.$router.push("/change")
    }
  },
  mounted(){
   this.autograph=this.$store.state.autograph
  },
  data(){
    return{
      autograph:""
    }
  }
}
</script>