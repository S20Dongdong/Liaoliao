<template>
  <div>
    <!-- 头部标题栏 -->
    <div>
      <mt-header class="h-color" title="旅行" fixed>
        <mt-button slot="left" icon="back" @click="baoCun()"></mt-button>
      </mt-header>
    </div >
    <!-- 头部标题栏 结束 -->
    <!-- 内容区域 -->
    <div id="my">
      <mt-checklist
        v-model="loves"
        align="right"
        :options="travel">
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
        this.$store.commit("travel",love);
      }else{
        this.$store.commit("travel",this.loves);    
    }
     this.$router.push("/change");
    }
  },
  mounted(){
    this.loves=this.$store.state.travel
  },
  data(){
    return{
      //运动
      travel:[
        {label:'成都',value:'成都'},
        {label:'桂林',value:'桂林'},
        {label:'三亚',value:'三亚'},
        {label:'丽江',value:'丽江'},
        {label:'大理',value:'大理'},
        {label:'香格里拉',value:'香格里拉'},
        {label:'西藏',value:'西藏'},
        {label:'鼓浪屿',value:'鼓浪屿'},
        {label:'张家界',value:'张家界'},
        {label:'九寨沟',value:'九寨沟'},
        {label:'台湾',value:'台湾'},
        {label:'日本',value:'日本'},
        {label:'北海道',value:'北海道'},
        {label:'云南',value:'云南'},
        {label:'马尔代夫',value:'马尔代夫'},
        {label:'青海玉树',value:'青海玉树'},
        {label:'云南丽江',value:'云南丽江'},
        {label:'云南大理',value:'云南大理'},
        {label:'贵州黄果树',value:'贵州黄果树'}
      ],
      loves:[]
    }
  }
}
</script>