import VueRouter from 'vue-router';


let routes = [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        name:"home",
        component:()=> import(/* 'webpackChunkName':'main' */  './vues/page-one.component.vue')
    },
    {
        path:"/view",
        name:"view",
        component:()=>import(/* 'webpackChunkName':'others' */  './vues/page-two.component.vue')
    },
    {   path: '*', 
        name:"notfound",
        component: ()=> import(/* 'webpackChunkName':'404' */  './vues/not-found.component.vue')
    }
];

export default new VueRouter({
    routes
})