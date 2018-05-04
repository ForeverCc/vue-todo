<template>
    <div id="app">{{ initMessage }}</div>
</template>

<script>
export default {
    data(){
        return {
            initMessage: '项目初始化'
        }
    }
}
</script>

<style>
#app {
    text-align: center;
    color: red;
}
</style>
