import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import classify from '@/components/classify/classify'
import community from '@/components/community/community'
import shopcart from '@/components/shopcart/shopcart'
import me from '@/components/me/me'
import search from '@/components/home/page/search'

// 二级路由
import classify_children from '@/components/classify/page/classify_children'



Vue.use(Router)

export default new Router({
  routes: [
      //tabbar路由
    {
      path:"/",
      redirect:"/home",
    },

    {
        path:"/home",
        name:"home",
        component:home,
        meta:{showTabber:true}
      },
    {
        path:"/classify",
        name:"classify",
        component:classify,
        meta:{showTabber:true},
        
    },
    {path:'/classify_children',name:'classify_children', component:classify_children},

    
    {
        path:"/community",
        name:"community",
        component:community,
        meta:{showTabber:true}
    },
    {
        path:"/shopcart",
        name:"shopcart",
        component:shopcart,
        meta:{showTabber:true}
    },
    {
        path:"/me",
        name:"me",
        component:me,
        meta:{showTabber:true}
    },

    //非tabbar路由
    {
        path:"/search",
        name:"search",
        component:search,
    },
    

  ]
})
