<template>
    <div>
        <form @submit.prevent="getTodo">       
            <input type="text" v-model="newText" placeholder="할일">
            <button type="submit">
                <i class="fa-solid fa-plus"></i>
            </button>
        </form>
        <transition name="modal">
            <Modal v-if="showModal">
                <template v-slot:header>
                    <h2>경고</h2>
                </template>
                <template v-slot:content>
                    <p>할일을 입력하세요.</p>
                </template>
            </Modal>
        </transition>
    </div>
</template>

<script>
    import Modal from './Modal.vue'

    export default {
        name:'TodoInput',
        data() {
            return {
                newText: '',
            }
        },
        computed:{
            showModal(){
                return this.$store.state.showModal
            }
        },
        methods:{
            getTodo(){
                if ( this.newText ) {
                    let value = this.newText
                    // console.log(value)
                    // this.$emit('addTodo', value)
                    this.$store.commit('add__Todo', value)
                    this.newText = ''
                } else {
                    this.$store.state.showModal = !this.$store.state.showModal
                }
            }
        },
        components:{
            Modal:Modal
        }
    }
</script>

<style lang="scss" scoped>
    form { display:flex; height:43px;
        input { flex:1; padding-left:1em; background:#555; color:#fff }
        button { width:56px; font-size:20px; 
            transition:all 0.5s; 
            &:hover { background:#999 }
        }
    }

    .modal-enter, .modal-leave-to { opacity:0; transform:scale(0) }
    /* .modal-enter-to { opacity:1; transform:scale(1) } */
    .modal-enter-active, .modal-leave-active  { transition:all 1s }
    /* .modal-leave { opacity:1; transform:scale(1)  } */
  







</style>