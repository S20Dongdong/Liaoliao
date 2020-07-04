<template>
  <div>
    <!-- 头部标题栏 -->
    <div>
      <mt-header class="h-color" title="行业" fixed>
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
        :options="hangYe"
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
   this.loves=this.$store.state.hangYe
  },
  data(){
    return{
      hangYe:[
        {label:'学生',value:"学生"},
        {label:'文化/艺术',value:"文化/艺术"},
        {label:'影视/娱乐',value:"影视/娱乐"},
        {label:'金融',value:"金融"},
        {label:'医药/健康',value:"医药/健康"},
        {label:'工业/制造业',value:"工业/制造业"},
        {label:'IT/互联网/通信',value:"IT/互联网/通信"},
        {label:'媒体/公关',value:"媒体/公关"},
        {label:'零售',value:"零售"},
        {label:'教育/科研',value:"教育/科研"},
        {label:'其他',value:"其他"}
      ],
      loves:""
    }
  },
  updated(){
    if(this.loves != this.$store.state.hangYe){
      this.$store.state.hangYe = this.loves 
      this.$router.push("/change")
    }
  }
}
</script>
