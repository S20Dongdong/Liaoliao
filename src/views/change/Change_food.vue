<template>
  <div>
    <!-- 头部标题栏 -->
    <div>
      <mt-header class="h-color" title="食物" fixed>
        <mt-button slot="left" icon="back" @click="baoCun()"></mt-button>
      </mt-header>
    </div >
    <!-- 头部标题栏 结束 -->
    <!-- 内容区域 -->
    <div id="my">
      <mt-checklist
        v-model="loves"
        align="right"
        :options="movement">
      </mt-checklist>
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
      if(this.loves.length== 0){
        var love=1
        this.$store.commit("food",love);
      }else{
        this.$store.commit("food",this.loves);    
    }
     this.$router.push("/change");
    }
  },
  mounted(){
    this.loves=this.$store.state.food
  },
  data(){
    return{
      //运动
      movement:[
        {label:'北京烤鸭',value:'北京烤鸭'},
        {label:'港式早餐',value:'港式早餐'},
        {label:'火锅',value:'火锅'},
        {label:'烤串',value:'烤串'},
        {label:'麻辣烫',value:'麻辣烫'},
        {label:'麻辣香锅',value:'麻辣香锅'},
        {label:'麻小',value:'麻小'},
        {label:'生煎包',value:'生煎包'},
        {label:'卤肉饭',value:'卤肉饭'},
        {label:'寿司',value:'寿司'},
        {label:'生鱼片',value:'生鱼片'},
        {label:'日本拉面',value:'日本拉面'},
        {label:'日式铁板烧',value:'日式铁板烧'},
        {label:'麻辣香锅',value:'麻辣香锅'},
        {label:'海底捞',value:'海底捞'},
        {label:'探鱼',value:'探鱼'},
        {label:'摩打食堂',value:'摩打食堂'},
        {label:'小龙虾',value:'小龙虾'},
        {label:'家常菜',value:'家常菜'},
        {label:'烧烤',value:'烧烤'}
      ],
      loves:[]
    }
  }
}
</script>