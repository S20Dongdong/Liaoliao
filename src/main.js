import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import qs from 'qs'
Vue.prototype.qs=qs

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:4000' 
Vue.prototype.axios = axios;
Vue.config.productionTip = false

//导入Mint UI
import MintUI from 'mint-ui';

//导入样式表文件
import "mint-ui/lib/style.min.css";

//通过Vue.ues()方法使用插件
Vue.use(MintUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// Vue.prototype.my-focus;
// Vue.directive("my-focus",{
//         //当拥有该指令的元素被渲染到页面上显示之后，自动执行inserted()函数
//         inserted(elem){
//           //每次: elem都自动获得当前带有这个指令的DOM元素对象
//           //本例中: 希望当前元素自动获得焦点
//           elem.focus();//原生DOM中的函数，复习DOM第三天
//         }
//       })