<template>
    <div>
        <div class="title">
            分类
        </div>
        <div class="content_list">
            <div class="content_list_items" v-for="(item,index) in img_list_incident" :key="index" @click=" router_to(item.id)">
                <img :src="item.imges">
                <p>{{item.name}}</p>
            </div>
            
        </div>
        <div class="bottom">

        </div>

    </div>
</template>
<script>

export default {
    name:"classify",
    data(){
        return{

        }
    },
    mounted(){       
        this.$store.dispatch('img_list_incident')     
    },
    computed:{
        img_list_incident(){
            return this.$store.getters.img_list
        }
       
    },
    methods:{
        router_to(id){
            this.$router.push({name:'classify_children',params:{id}})
        }
    }
}
</script>
<style scoped>
.content_list_items p{
    margin: 0;
    width: 100%;
    font-size: 0.18rem;
    display: flex;
    justify-content: center;
}
.content_list_items img{
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
}
.content_list_items{
    width: 1.25rem;
    margin-top: 0.1rem;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    
}
.content_list{
    width: 100%;
    display: flex;
    /* justify-content: flex-start; */
    flex-flow: row wrap;
}
.title{
    width: 100%;
    height: 0.5rem;
    background: #0dbffd;
    font-size: 0.18rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bottom{
    width: 100%;
    margin-bottom: 0.5rem;
}
</style>