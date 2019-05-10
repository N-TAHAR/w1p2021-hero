import './assets/scss/styles.scss';
import Vue from 'vue';
import router from './router';

export const inventory = new Vue({
  data: {
    key: false
  }
})

new Vue({ router: router }).$mount('#root');