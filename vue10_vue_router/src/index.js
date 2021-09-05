import Vue from 'vue';
//import VueRouter from 'vue-router';


import App from './vues/app.component.vue';
//import router from './app.routing'
import './index.css';

//Vue.use(VueRouter);
new Vue({
    el:"#app",
    data:{

    },
  //  router,
    render:function(h){
        return h(App);
    }
});