<template>
  <div id="app">
      <tabbar class="tabbar" v-if="this.$route.meta.showTabber"></tabbar>
    <router-view/>
  </div>
</template>

<script>
import tabbar from '@/tabbar/tabbar'
export default {
  name: 'App',
  components:{
  	tabbar
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
