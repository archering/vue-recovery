<template>
    <div class="left-menu-wrapper">
        <router-link v-for="menu in menus" :key="menu.name" :to="menu.path">{{menu.label}}</router-link>
    </div>
</template>
<script>
    export default {
        name:"left-menu",
        data:function(){
            return {
                menus: [
                    {
                        name:"home",
                        label:"首页",
                        path:"/home"
                    },
                    {
                        name:"view",
                        label:"视图",
                        path:"/view"
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .left-menu-wrapper{
        position: relative;
    }
    a{
        position: relative;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        border: 1px solid #ccc;
    }
</style>