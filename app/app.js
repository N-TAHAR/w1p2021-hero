import './assets/scss/styles.scss';
import Vue from 'vue';
import router from './router';


Vue.component('inventory', {
  data: function () {
    return {
      keyGenerator: false,
      keyPhone:  false,
      keyCount:  0,
      key: ''
    }
  },
  template: '<ul class="inventory"><li class="full" v-show="key"></li></ul>'
})
// new Vue({ el: '#components-demo' })

new Vue({ router: router }).$mount('#root');

