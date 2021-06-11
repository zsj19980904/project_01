import Vue from 'vue'
import App from './App.vue'
import store from './store'
import dataItem from '@/model/dataItem'
import category from '@/model/cateEnum'
import dataAction from '@/store/dataAction'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')


let newItem = new dataItem(1, category.Study, '学习', '我喜欢在金渡教育学习')
new dataAction().addData(newItem)
// console.log(newItem)
