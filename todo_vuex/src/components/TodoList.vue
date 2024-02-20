<template>
    <section>
        <transition-group name="list" tag="ul">
            <li v-for="(item, num) in todos" :key="item.id">
                <label><i :class="{'fa-regular':item.chec, 'fa-square':item.chec, 'fa-solid':!item.chec, 'fa-square-check':!item.chec}" @click="onCheck(item.id)"></i></label>
                <label :for="item.id"><i :class="{'fa-solid':true, 'fa-pen-to-square':!item.modify, 'fa-floppy-disk':item.modify }" @click="onToggle(item.id)"></i></label>
                <input :class="{done:!item.chec}" :id="item.id" type="text" @input="onInput(item.id, $event)" :value="item.text" :disabled="!item.modify">  
                {{  item.id }}
                <i class="fa-solid fa-trash-can" @click="onRemove(num)"></i>
            </li>
        </transition-group>
    </section>
</template>

<script>
    export default {
        name:'TodoList',
        computed:{
            todos(){
                return this.$store.state.todos
            },
            showModal(){
                return this.$store.state.showModal
            },
        },
        methods:{
            onToggle(id){
                // this.$emit('onToggle', id)
                this.$store.commit('on__Toggle', id)
            },
            onInput(id, e){
                console.log(e.target.value)
                // this.$emit('onUpdate', id, e.target.value)
                let value = e.target.value
                this.$store.commit('on__Update', {id, value})
            },
            onRemove(num) {
                // this.$emit('onRemove', num)
                if (window.confirm('정말로 삭제하시겠습니까?')) {
                    this.$store.commit('on__Remove', num)
                }
                
            },
            onCheck(id){
                this.$store.commit('on__Chec', id)
            }
        }
    }
</script>

<style lang="scss" scoped>
  section { 
    ul {
        li { background:#fff;
            min-height:50px;
            height:50px;
            line-height:50px;
            margin:5px 0;
            padding:0 1em;
            display:flex; align-items:center; 
            label { margin-right:5px }
            input { flex:1; background:none; padding:5px 5px; margin:0 5px;
                &.done { text-decoration:line-through; color:red }
            }
        }
    }

    .list-enter-active, .list-leave-active {
        transition:all 1s;
    }
    .list-enter, .list-leave-to {
        opacity:0;
        transform:translateY(50px)
    } 
    /*
    .list-enter-to {
        opacity:1;
        transform:translateY(0px)
    }
    */

    /*
    .list-leave {
        opacity:1; 
        transform:translateY(0px)
    }
    */
   

  }
  
</style>