import Vue from 'vue';
import App from './src/app.vue';

const root = document.querySelector('#root');

new Vue({
    render: (h)=>h(App)
}).$mount(root)
