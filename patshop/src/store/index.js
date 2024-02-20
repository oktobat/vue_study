import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{ 
        products:[],
        cart:[]
    },     
    mutations:{ 
        SET_STORE(state, products){
            state.products = products
        },
        ADD_CART(state, id){
            state.cart.push(id)
        }
    },   
    actions:{ 
        initStore:( { commit } )=>{
            axios.get('/assets/data/products.json').then((res)=>{
                commit('SET_STORE', res.data.products)
            })
        }
    },    
    getters:{
        products : state => state.products,
        cart : state => state.cart
    }     
})
