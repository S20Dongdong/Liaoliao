<template>
  <div>
    <!-- 头部标题栏 -->
    <div>
      <mt-header class="h-color" title="电影" fixed>
          <mt-button slot="left" icon="back" @click="baoCun()"></mt-button>
      </mt-header>
    </div >
    <!-- 头部标题栏 结束 -->
    <!-- 内容区域 -->
    <div id="my">
      <mt-checklist
        v-model="loves"
        align="right"
        :options="video">
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
        this.$store.commit("video",love);
      }else{
        this.$store.commit("video",this.loves);    
    }
     this.$router.push("/change");
    }
  },
  mounted(){
    this.loves=this.$store.state.video
  },
  data(){
    return{
      //运动
      video:[
        {label:'肖申克得救赎',value:'肖申克的救赎'},
        {label:'霸王别姬',value:'霸王别姬'},
        {label:'这个杀手不太冷',value:'这个杀手不太冷'},
        {label:'教父',value:'教父'},
        {label:'阿甘正传',value:'阿甘正传'},
        {label:'泰坦尼克号',value:'泰坦里克号'},
        {label:'盗梦空间',value:'盗梦空间'},
        {label:'黑客帝国',value:'黑客帝国'},
        {label:'蝙蝠侠',value:'蝙蝠侠'},
        {label:'低俗小说',value:'低俗小说'},
        {label:'搏击俱乐部',value:'搏击俱乐部'},
        {label:'海上钢琴师',value:'海上钢琴师'},
        {label:'触不可及',value:'触不可及'},
        {label:'夏洛特烦恼',value:'夏洛特烦恼'},
        {label:'当幸福来敲门',value:'当幸福来敲门'},
        {label:'阿甘正传',value:'阿甘正传'},
        {label:'复仇者联盟',value:'复仇者联盟'},
        {label:'西红柿首富',value:'西虹市首富'},
        {label:'少年与海',value:'少年与海'},
        {label:'小丑',value:'小丑'},
        {label:'寄生虫',value:'寄生虫'}
      ],
      loves:[]
    }
  }
}
</script>