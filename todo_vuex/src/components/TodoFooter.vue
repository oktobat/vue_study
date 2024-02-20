<template>
    <footer>
        <span @click="allClear">전부삭제</span>
    </footer>
</template>

<script>
    export default {
        name:'TodoFooter',
        methods:{
            allClear(){
                this.$store.commit('all__Remove')
            }
        }
    }
</script>

<style lang="scss" scoped>
    footer {
        text-align:center;
        span { display:inline-block; padding:10px 20px; background:#fff;
            color:#f00; cursor:pointer
        }
    }
</style>