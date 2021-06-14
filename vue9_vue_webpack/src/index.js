import Vue from 'vue';

import App from './vues/one.component.vue';

new Vue({
    el:"#app",
    data:{

    },
    render:function(h){
        h(App);
    }
});