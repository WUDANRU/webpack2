// let i = 45.0;
// console.log('hello webpack' + i);

import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

console.log(CONSTANT);