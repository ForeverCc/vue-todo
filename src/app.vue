<template>
    <div class="app">
        <div class="cover"></div>
        <header-component></header-component>
        <todo-component></todo-component> 
        <footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from './todo/header.vue';
import FooterComponent from './todo/footer.jsx';
import TodoComponent from './todo/todo.vue';

export default {
    data() {
        return {
        };
    },
    components: {
        HeaderComponent,
        TodoComponent,
        FooterComponent
    }
};
</script>

<style lang="stylus" scoped>
.app {
    position absolute
    left 0
    right 0
    top 0
    bottom 0
}
.cover {
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background-color #999
    opacity .6
    z-index -1
}
</style>

