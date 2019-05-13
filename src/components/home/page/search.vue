<template>
    <div>
        <div class="nav_top">
            <div class="come_back" @click="come_back"><i class="iconfont icon-fanhui"></i></div>
        </div>
    </div>
</template>
<script>
export default {
    name:"search",
    data(){
        return{
            
        }
    },
    methods:{
        come_back(){
            this.$router.go(-1)
        }
    }
    
}
</script>
<style scoped>
.nav_top{
    width: 100%;
    height: 0.35rem;
    background: #ffffff;
    padding: 0 0.1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}
.come_back{
    color: #909090;
}
.come_back i{
    font-size: 0.28rem;
}


</style>