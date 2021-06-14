<template>
    <div class="one-wrapper">
    {{desc}}
    </div>
</template>
<script>

export default {
        name:"com-one",
        data:function(){
            return {
                desc:"hello vue"
            }
        }
}
</script>

<style scoped>
    .one-wrapper {
        position: relative;
        width: 400px;
        height: 400px;
        background-color: red;
        color:white;
        padding: 20px;
    }
</style>
