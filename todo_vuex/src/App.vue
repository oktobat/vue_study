<template>
  <div id="container">
     <TodoHeader></TodoHeader>
     <TodoInput></TodoInput>
     <TodoList></TodoList>
     <TodoFooter></TodoFooter>
  </div>
</template>

<script>
  import './assets/reset.css'

  import TodoHeader from './components/TodoHeader.vue'
  import TodoInput from './components/TodoInput.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'

  export default {
    name:'App',
    created(){
      if (localStorage.id){
        this.$store.state.id = JSON.parse(localStorage.id)
      }
      if ( localStorage.todos ) {
        let item = JSON.parse(localStorage.todos)
        this.$store.state.todos = item
      }
    },
    components:{
       'TodoHeader' : TodoHeader,
       'TodoInput' : TodoInput,
       'TodoList' : TodoList,
       'TodoFooter':TodoFooter
    }
  }
</script>

<!-- scoped 속성을 가지고 있으면, css는 현재 컴포넌트의 요소에만 적용 -->
<style scoped>
    
    #container { max-width:500px; margin:50px auto; }

</style>