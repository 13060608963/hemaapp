import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from '@/router/index';
Vue.use(Vuex)

var state={
    img_list:[],

}
var getters={
    img_list(){
        return state.img_list
        
    }
    
}
var actions={
    img_list_incident(ctx){
        axios.get('/ShowCatList')
        .then((res)=>{
                // console.log(res.data)
                ctx.commit('img_list_incident',res.data)
        })
        
        
    }

}
var mutations={
    img_list_incident(state,res){
        state.img_list=res
        // console.log(state.img_list)
    }

}
export default new Vuex.Store({
	state,
	getters,
	actions,
    mutations,
    axios,
    router
	
})