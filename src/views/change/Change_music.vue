<template>
  <div>
    <!-- 头部标题栏 -->
    <div>
      <mt-header class="h-color" title="音乐" fixed>
        <mt-button slot="left" icon="back" @click="baoCun()"></mt-button>
      </mt-header>
    </div>
    <!-- 头部标题栏 结束 -->
    <!-- 内容区域 -->
    <mt-checklist
      v-model="loves"
      align="right"
      :options="music"
      id="my">
    </mt-checklist>
     
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
        this.$store.commit("music",love);
      }else{
        this.$store.commit("music",this.loves);    
    }
     this.$router.push("/change");
    }
  },
  mounted(){
    this.loves=this.$store.state.music
  },
  data(){
    return{
      //音乐
      music:[
        {label:'欧美',value:'欧美'},
        {label:'日韩',value:'日韩'},
        {label:'流行',value:'流行'},
        {label:'摇滚',value:'摇滚'},
        {label:'电子',value:'电子'},
        {label:'嘻哈',value:'嘻哈'},
        {label:'爵士',value:'爵士'},
        {label:'布鲁斯',value:'布鲁斯'},
        {label:'金属',value:'金属'},
        {label:'轻音乐',value:'轻音乐'},
        {label:'古典',value:'古典'},
        {label:'乡村',value:'乡村'},
        {label:'校园名谣',value:'校园名谣'},
        {label:'小幸运',value:'小幸运'},
        {label:'稻香',value:'稻香'},
        {label:'同桌的你',value:'同桌的你'},
        {label:'预谋',value:'预谋'},
        {label:'晴天',value:'晴天'},
        {label:'天后',value:'天后'},
        {label:'飘洋过海来看你',value:'飘洋过海来看你'},
        {label:'你不知道的事',value:'你不知道的事'}
      ],
      loves:[]
    }
  }
}

</script>