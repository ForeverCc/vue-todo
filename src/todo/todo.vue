<template>
    <section class="main">
        <input type="text" class="add-input" autofocus="autofocus" placeholder="what want to do next" @keyup.enter="addTodo" />
        <todo-item v-for="todo in filterTodos" :todo="todo" :key="todo.id" @del="delItem" ></todo-item>
        <tab :filter="filter" :todos="todos" @changeStatus="changeState" @clear="clearAll"></tab>
    </section>
</template>

<script>
import TodoItem from './item.vue';
import Tab  from './tab.vue';
let id = 0;
export default {
    data() {
        return {
            todos: [],
            filter: 'all'
        }
    },
    components: {
        TodoItem,
        Tab
    },
    computed: {
        filterTodos(){
            if(this.filter === 'all'){
                return this.todos;
            }
            let completed = this.filter === 'completed';           
            return this.todos.filter((item) =>{return item.completed === completed})
        }
    },
    methods: {
        //添加todoItem
        addTodo(e){
            this.todos.unshift({
                id: id ++ ,
                content: e.target.value.trim(),
                completed: false
            })
            e.target.value ='';
        },
        //删除todoItem
        delItem(id) {
            this.todos.splice(this.todos.findIndex((item)=>item.id === id),1)
        },
        //改变筛选状态，接受子组件传过来的参数
        changeState(state) {
            this.filter = state
        },
        //清空todos
        clearAll(){
            this.todos = []
        }
    }
}
</script>

<style lang="stylus" scoped>
.main {
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666
}
.add-input {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    outline: none;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    font-smoothing: antialiased;
    padding: 16px 16px 16px 60px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>

