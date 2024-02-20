import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{ 
        id:0,
        todos:[ // { id:0, text:'할일1', modify:false, chec:true } 
        ],
        showModal:false,
     },     
    mutations:{ 
        add__Todo(state, text){
            state.todos.push( { id:state.id, text:text, modify:false, chec:true } )
            ++state.id
            localStorage.id = JSON.stringify(state.id)
            localStorage.todos = JSON.stringify(state.todos)
        },
        on__Remove(state, num){
            state.todos.splice(num, 1)                 // 자식이 보내준 번호 요소 1개 삭제
            localStorage.todos = JSON.stringify(state.todos)
        },
        on__Toggle(state, id){
            state.todos.map((item)=>{
              if (item.id===id) {
                item.modify = !item.modify     // false => true
              }
            })
            localStorage.todos = JSON.stringify(state.todos)
        },
        on__Update(state, idval){
            let {id, value} = idval  // { id:id, value:value }
            console.log(id, value)
            state.todos.map((item)=>{
                if (item.id===id){
                    if (value) {
                        item.text = value
                    } else {
                        return false
                    }
                }
            })
            localStorage.todos = JSON.stringify(state.todos)
        },
        all__Remove(state){
            state.todos.splice(0, state.todos.length)   // 배열 전체요소 삭제
            localStorage.removeItem('todos')          // 로컬스토리지의 todos(키) 삭제함
        },
        on__Chec(state, id){
            state.todos.map(item=>{
                if (item.id === id) {
                    item.chec = !item.chec
                }
            })
        }
    },   
    actions:{ },    
    getters:{ }     
})
