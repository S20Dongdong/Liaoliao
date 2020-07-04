<template>
  <div>
    <input type="text" :disabled="!sex">
    <input type="checkbox" v-model="sex"> 
    <button @click="show()">获取性别</button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      sex: false
    };
  },
  methods: {
    show() {
      console.log(this.sex);
    }
  }
};
</script>