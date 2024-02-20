<template>
    <main>
        <div class="list">
            <div>
              <button @click="sortProductName">상품명순</button>
              <button @click="sortProductPrice">가격순</button>
            </div>
            <ul v-for="product in products" v-bind:key="product.id">
                <li>
                  <div class="photo">
                    <figure>
                      <img v-bind:src="product.image">
                    </figure>
                  </div>
                  <div class="info">
                    <h1><router-link :to="{name:'Id', params:{ id : product.id}}">{{ product.title }}</router-link></h1>
                    <p v-html="product.description"></p>
                    <p>
                      {{   product.price | formatPrice }}
                    </p>
                    <button v-on:click="addToCart(product.id)" v-if="canAddToCart(product)">장바구니 담기</button>
                    <button disabled="true" class="forbiden" v-else>장바구니 담기</button>
                    <span v-if="product.availableInventory - cartIdCount(product.id) == 0">품절!</span>
                    <span v-else-if="product.availableInventory - cartIdCount(product.id) < 5">{{ product.availableInventory - cartIdCount(product.id) }}개 남았습니다.</span>
                    <span v-else>지금 구매하세요.</span>
                    <div class="rating">
                      <span v-for="n in 5" v-bind:key="n" v-bind:class="{ 'rating-active': checkRating(n, product) }">☆</span>
                    </div>
                  </div>
                </li>
                <hr>
            </ul>
          </div>
        
    </main>
</template>

<script>
    export default {
        name:'PatList',
        created(){
            this.$store.dispatch('initStore')
        },
        data(){
            return {
                sflag : false,
                dflag : false,
                
            }
        },
        computed:{
            products(){
                return this.$store.getters.products
            }
        },
        methods:{
            addToCart(id) {
                this.$store.commit('ADD_CART', id)
            },
            canAddToCart(aProduct) {
                return aProduct.availableInventory > this.cartIdCount(aProduct.id)
            },
            cartIdCount(id){
                let count = 0
                for (let i in this.$store.getters.cart) {
                    if(id===this.$store.getters.cart[i]) {
                        count++
                    }
                }
                return count
            },
            checkRating(n, rProduct){
                return rProduct.rating - n >= 0
            },
            sortProductName(){
                this.sflag = !this.sflag
                if (this.sflag) {
                    this.$store.getters.products.sort(compare)
                } else {
                    this.$store.getters.products.reverse()
                }
                function compare(a, b){
                    if (a.title < b.title) return -1
                    if (a.title > b.title) return 1
                    return 0
                }
            },
            sortProductPrice(){
                this.dflag = !this.dflag
                if (this.dflag) {
                    this.$store.getters.products.sort(compare)
                } else {
                    this.$store.getters.products.reverse()
                }
                function compare(a, b) { return a.price - b.price }
            },
            
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
   .list {
     ul {
        li {
            display:flex; margin:30px 0;
            .photo { width:250px; 
                img { width:100% }
            }
            .info { 
                flex:1; margin-left:30px; 
                .forbiden {
                    background:lightblue; 
                }
                .rating { float:right; 
                    span { position:relative }
                }
                .rating-active:before {
                    content:"\2605";
                    position:absolute; 
                }
            }
        }
     }
   }
</style>