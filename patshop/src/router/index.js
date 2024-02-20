import Vue from 'vue'
import Router from 'vue-router'
import CheckOut from '@/components/CheckOut'
import PatList from '@/components/PatList'
import PatDetail from '@/components/PatDetail'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/home',
        },
        { 
            path:'/home',
            name:'home',
            component : PatList,
        },
        { 
            path:'/checkout',
            name:'checkout',
            component : CheckOut,
        },
        {
            path:'/home/:id',
            name:'Id',
            component:PatDetail,
        },
        {
            path:'*',
            redirect:'/'
        }
    ]
})