<template>
    <header>
        <div>
            <h1><router-link to="/home">{{ sitename  }}</router-link></h1>
        </div>
        <button type="button">
            <router-link to="/checkout">
                <span class="fa-sharp fa-solid fa-cart-shopping">{{ cartItemCount }}</span>
                <span>체크아웃</span>
            </router-link>
        </button>
    </header>

</template>

<script>
    export default {
        name:'PatHeader',
        data(){
            return {
                sitename:'애완용품샵'
            }
        },
        methods:{
            
        },
        computed:{
            cartItemCount(){
                return this.$store.getters.cart.length || ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    header {
        display:flex; justify-content:space-between;
        padding:30px 20px; background:#eee; 
    }
</style>