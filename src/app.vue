<template>
    <div class="app">{{ initMessage }}</div>
</template>

<script>
export default {
    data() {
        return {
            initMessage: "项目初始化"
        };
    }
};
</script>

<style lang="stylus" scoped>
.app {
    text-align: center;
    font-size : 20px
}
</style>

