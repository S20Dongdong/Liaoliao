<template>
  <div>
    <!-- 头部标题栏 -->
    <div>
      <mt-header class="h-color" title="我的标签" fixed>
        <mt-button slot="left" icon="back" @click="baoCun()"></mt-button>
      </mt-header>
    </div>
    <!-- 头部标题栏 结束 -->
    <!-- 内容区域 -->
    <div id="my">
      <mt-checklist v-model="loves" align="right" :options="label"></mt-checklist>
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
        this.$store.commit("label", love);
      } else {
        this.$store.commit("label", this.loves);
      }
      this.$router.push("/change");
    }
  },
  mounted() {
    if (this.$store.state.label != 1 ) {
      this.loves = this.$store.state.label;
    }
  },
  data() {
    return {
      //运动
      label: [
        { label: "调皮", value: "调皮" },
        { label: "傲娇", value: "傲娇" },
        { label: "随性", value: "随性" },
        { label: "安静", value: "安静" },
        { label: "可爱", value: "可爱" },
        { label: "喜欢简单", value: "喜欢简单" },
        { label: "叛逆", value: "叛逆" },
        { label: "极品吃货", value: "极品吃货" },
        { label: "叫我逗比", value: "叫我逗比" },
        { label: "萌萌哒", value: "萌萌哒" },
        { label: "女汉子", value: "女汉子" },
        { label: "强迫症", value: "强迫症" },
        { label: "拖延症", value: "拖延症" },
        { label: "双重人格", value: "双重人格" },
        { label: "敢爱敢恨", value: "敢爱敢恨" },
        { label: "选择恐惧症", value: "选择恐惧症" },
        { label: "文艺", value: "文艺" },
        { label: "温柔", value: "温柔" },
        { label: "害羞", value: "害羞" },
        { label: "腼腆", value: "腼腆" },
        { label: "活泼", value: "活泼" },
        { label: "古怪", value: "古怪" }
      ],
      loves: []
    };
  }
};
</script>