<template>
    <div class="detailBox">
        <h1>이 상품의 아이디는 {{ $route.params.id }} 입니다.</h1>
        <div>
            <div class="photo">
                <figure>
                    <img v-bind:src="product.image">
                </figure>
            </div>
            <div class="info">
                <h1>{{ product.title }}</h1>
                <p>{{ product.detailInfo }}</p>
                <p v-html="product.description"></p>
                <p>
                    {{   product.price | formatPrice }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'PatDetail',
        data() {
            return {
                product:''
            }
        },
        created(){
            this.product = this.$store.state.products.filter((data)=>{
                return data.id === this.$route.params.id
            })[0]
            console.log(this.product)
            this.product.image = '/' + this.product.image
        },
        filters:{
            formatPrice(price) {	
            if (!parseInt(price)) { return ""; }	
            if (price > 99999) {	
                var priceString = (price / 100).toFixed(2);	
                var priceArray = priceString.split("").reverse();	
                var index = 3;	
                while (priceArray.length > index + 3) {	
                priceArray.splice(index+3, 0, ",");	
                index += 4;	
                }	
                return "$" + priceArray.reverse().join("");	
            } else {
                return "$" + (price / 100).toFixed(2);	
            }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .detailBox {
        img { max-width:100% }
    }
</style>