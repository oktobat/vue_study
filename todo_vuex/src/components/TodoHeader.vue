<template>
    <header>
        <h1>일정관리앱 {{ remain }}/{{ total }}건 처리</h1>
    </header>
</template>

<script>
    export default {
        name:'TodoHeader',
        computed:{
            remain(){
                return this.$store.state.todos.filter(item=>!item.chec).length
            },
            total(){
                return this.$store.state.todos.length
            }
        }
    }
</script>

<style scoped>
    h1 {
        background:#22b8cf;
        color:#fff;
        font-size:24px;
        text-align:center;
        padding:20px;
    }
</style>