<template>
  <div>
    <!-- 头部标题栏 -->
    <div>
      <mt-header class="h-color" title="工作领域" fixed>
        <router-link slot="left" to='/change'>
          <mt-button>取消</mt-button>
        </router-link>
        <mt-button slot="right" @click="baoCun()">完成</mt-button>
      </mt-header>
    </div>
    <!-- 头部标题栏 结束 -->
    <!-- 内容区域 -->
    <div id="my">
       <mt-radio
        v-model="loves"
        align="right"
        :options="lingYu">
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
  methods:{
    baoCun(){
      this.$store.commit("lingYu",this.loves); 
      this.$router.push("/change")
    }
  },
  mounted(){
   this.loves=this.$store.state.lingYu
  },
  data(){
    return{
      lingYu:[
        {label:'创始人',value:"创始人"},
        {label:'高管',value:"高管"},
        {label:'投资人',value:"投资人"},
        {label:'职业经理人',value:"职业经理人"},
        {label:'咨询顾问',value:"咨询顾问"},
        {label:'市场',value:"市场"},
        {label:'产品',value:"产品"},
        {label:'客服',value:"客服"},
        {label:'零售',value:"零售"},
        {label:'销售',value:"销售"},
        {label:'商务',value:"商务"},
        {label:'公关',value:"公关"},
        {label:'人事',value:"人事"},
        {label:'行政',value:"行政"},
        {label:'财务',value:"财务"},
        {label:'律师',value:"律师"},
        {label:'法务',value:"法务"}
      ],
      loves:""
    }
  }
 }
</script>