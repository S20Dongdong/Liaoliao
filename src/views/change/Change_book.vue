<template>
  <div>
    <!-- 头部标题栏 -->
    <div>
      <mt-header class="h-color" title="书籍" fixed>
        <mt-button slot="left" icon="back" @click="baoCun()" ></mt-button>
      </mt-header>
    </div >
    <!-- 头部标题栏 结束 -->
    <!-- 内容区域 -->
    <div id="my">
      <mt-checklist
        v-model="loves"
        align="right"
        :options="book">
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
        this.$store.commit("book",love);
      }else{
        this.$store.commit("book",this.loves);    
    }
     this.$router.push("/change");
    }
  },
  mounted(){
    this.loves=this.$store.state.book
  },
  data(){
    return{
      //运动
      book:[
        {label:'网球王子',value:'网球王子'},
        {label:'进击的巨人',value:'进击的巨人'},
        {label:'哆啦A梦',value:'哆啦A梦'},
        {label:'火隐忍者',value:'火隐忍者'},
        {label:'七龙珠',value:'七龙珠'},
        {label:'蜡笔小新',value:'蜡笔小新'},
        {label:'城市猎人',value:'城市猎人'},
        {label:'妖精的尾巴',value:'妖精的尾巴'},
        {label:'海贼王',value:'海贼王'},
        {label:'死神',value:'死神'},
        {label:'黑子的篮球',value:'黑子的篮球'},
        {label:'喜羊羊与灰太狼',value:'喜羊羊与灰太狼'},
        {label:'幽游白书',value:'幽游白书'},
        {label:'遮天',value:'遮天'},
        {label:'圣墟',value:'圣墟'},
        {label:'最强弃少',value:'最强弃少'},
        {label:'完美世界',value:'完美世界'},
        {label:'草房子',value:'草房子'},
        {label:'活着',value:'活着'},
        {label:'最慢的是活着',value:'最慢的是活着'},
        {label:'穆斯林的葬礼',value:'穆斯林的葬礼'},
        {label:'围城',value:'围城'}
      ],
      loves:[]
    }
  }
}
</script>