<template>
  <div>
    <!-- 头部标题栏 -->
    <div>
      <mt-header class="h-color" title="星座" fixed>
        <router-link slot="left" to='/change'>
          <mt-button>取消</mt-button>
        </router-link>
      </mt-header>
    </div>
    <!-- 头部标题栏 结束 -->
    <!-- 内容区域 -->
    <div id="my">
      <mt-radio
        v-model="loves"
        align="right"
        :options="constellation"
        @click="baoCun()"
        >
      </mt-radio>
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
</style>
<script>
export default {
  mounted(){
   this.loves=this.$store.state.constellation
  },
  updated(){
    if(this.loves != this.$store.state.constellation){
      this.$router.push("/change");
      this.$store.state.constellation = this.loves
    }
  },
  data(){
    return{
      constellation:[
        {label:'白羊座',value:"白羊座"},
        {label:'金牛座',value:"金牛座"},
        {label:'双子座',value:"双子座"},
        {label:'巨蟹座',value:"巨蟹座"},
        {label:'狮子座',value:"狮子座"},
        {label:'处女座',value:"处女座"},
        {label:'天秤座',value:"天秤座"},
        {label:'天蝎座',value:"天蝎座"},
        {label:'射手座',value:"射手座"},
        {label:'摩羯座',value:"摩羯座"},
        {label:'水瓶座',value:"水瓶座"},
        {label:'双鱼座',value:"双鱼座"}
      ],
      loves:""
    }
  },
 
}
</script>
