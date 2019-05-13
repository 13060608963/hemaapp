<template>
    <div>
        <div class="nav_top">
            {{title}}
        </div>   
    </div>
</template>
<script>
export default {
    name:"classify_children",
    data(){
        return{
            title:'新鲜水果'
                
        }
    },
    // created(){
    //     this.id=this.$route.params.id
    // }
    
}
</script>
<style scoped>
.nav_top{
    width: 100%;
    height: 0.5rem;
    background: #fff;
    display:flex;
    justify-content: center;
    line-height: 0.6rem;
    font-weight: bold;
    font-size: 0.18rem;
}


</style>