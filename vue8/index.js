import Vue from 'vue';

import mainCom from './main.component.vue';
new Vue({
    el:"#app",
    data:{

    },
    render:function(h){
        h(mainCom);
    }
});