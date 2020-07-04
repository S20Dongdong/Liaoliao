<template>
  <div>
    <!-- 头部标题栏 -->
    <mt-header class="h-color" title="运动" fixed>
      <mt-button slot="left" icon="back" @click="baoCun()"></mt-button>
    </mt-header>

    <!-- 头部标题栏 结束 -->
    <!-- 内容区域 -->
    <div id="my">
      <mt-checklist v-model="loves" align="right" :options="movement"></mt-checklist>
    </div>
  </div>
</template>
<style scoped>
/* 标题栏 */
.h-color {
  background-image: linear-gradient(to right, #c73716, #d36314);
  padding-left: 1rem;
}
#my {
  margin-top: 2.5rem;
}

</style>
<script>
export default {
  methods: {
    baoCun() {
      if (this.loves.length == 0) {
        var love = 1;
        this.$store.commit("movement", love);
      } else {
        this.$store.commit("movement", this.loves);
      }
      this.$router.push("/change");
    }
  },
  mounted() {
    this.loves = this.$store.state.movement;
  },
  data() {
    return {
      //运动
      movement: [
        { label: "网球", value: "网球" },
        { label: "游泳", value: "游泳" },
        { label: "逛街", value: "逛街" },
        { label: "爬山", value: "爬山" },
        { label: "跑步", value: "跑步" },
        { label: "单车", value: "单车" },
        { label: "瑜伽", value: "瑜伽" },
        { label: "篮球", value: "篮球" },
        { label: "足球", value: "足球" },
        { label: "滑板", value: "滑板" },
        { label: "滑雪", value: "滑雪" },
        { label: "兵乓球", value: "兵乓球" },
        { label: "羽毛球", value: "羽毛球" },
        { label: "高尔夫", value: "高尔夫" },
        { label: "台球", value: "台球" },
        { label: "宅家", value: "宅家" },
        { label: "电竞", value: "电竞" },
        { label: "直播", value: "直播" }  
      ],
      loves: []
    };
  }
};
</script>