<template>
    <div>
      <div class="tabbar" >
        <router-link to="/home"  tag="div" class="tabbar_title" :class="{active:this.$route.path.includes('/home')}">
          <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/classify"  tag="div" class="tabbar_title" :class="{active:this.$route.path.includes('/classify')}">
          <i class="iconfont icon-fenlei"></i>
          <span>分类</span>
        </router-link>
        <router-link to="/community"  tag="div" class="tabbar_title" :class="{active:this.$route.path.includes('/community')}">
          <i class="iconfont icon-luntan1"></i>
          <span>聊天</span>
        </router-link>
        <router-link to="/shopcart"  tag="div" class="tabbar_title" :class="{active:this.$route.path.includes('/shopcart')}">
          <i class="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </router-link>
         <router-link to="/me"  tag="div" class="tabbar_title" :class="{active:this.$route.path.includes('/me')}">
          <i class="iconfont icon-My"></i>
          <span>我的</span>
        </router-link>
      </div>
    </div>
</template>

<script>

export default {
  name: "tabbar",
  data() {
    return {
      
    };
  },
  computed:{

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar {
  width: 100%;
  height: 0.6rem;
  background: #ffffff;
  display: flex;
  border-top: 0.01rem solid #e0e0e0;
}
.tabbar_title{
  display: flex;
  width: 20%;
  flex-flow: wrap column;
  align-items: center;
  justify-content: center
}
.tabbar i{
  font-size: 0.28rem;
}
.active{
  color: #20aaff;
}


</style>
