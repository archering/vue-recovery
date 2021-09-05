<template>
    <div class="main-wrapper">
        <!-- <div class="left-menu-wrapper">
            <left-menu></left-menu>
        </div>
        <div class="content-wrapper">
            <router-view></router-view>
        </div> -->
    </div>
</template>
<script>
    //import LeftMenu from './left-menu.component.vue';
    export default {
        name:"app",
        data:function(){
            return {}
        },
        // components:{
        //     "left-menu":LeftMenu
        // }
    }
</script>
<style scoped>
    .main-wrapper{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        box-sizing: border-box;
    }

    .left-menu-wrapper{
        position: relative;
        display: flex;
        width: 300px;
        height: 100%;
    }

    .content-wrapper{
        position: relative;
        display: flex;
        width: calc(100% - 300px);
        height: 100%;
    }

</style>