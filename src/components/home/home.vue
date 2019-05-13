<template>
    <div>
        <!-- 头部导航 -->
        <div class="nav_top">
            <div class="head_portrait">
                <img :src="sss" >
            </div>
            <router-link to="/search" tag="div" class="sherch_content" >
                <i class="iconfont icon-sousuo"></i>
                搜索美食....
            </router-link>
            <div class="chat"><i class="iconfont icon-luntan1"></i></div>
        </div>


        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in list" :key="index">
              <img :src="item.imgurl"/>
              </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>

        



    </div>
</template>
<script>

import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper';
export default {
  name: "home",
  data() {
    return {
      sss: require("./image/head_portrait.jpg"),
      list:[
        {imgurl:require("./image/carousel_photo.jpg")},
        {imgurl:require("./image/carousel_photo.jpg")},
        {imgurl:require("./image/carousel_photo.jpg")},
        {imgurl:require("./image/carousel_photo.jpg")}
      ],
    }
  },
  mounted(){
    new Swiper ('.swiper-container', {
      loop: true,
      autoplay:4000,
      observer:true,
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        autoplay: {
        　　disableOnInteraction: false,   // 手动滑动后继续自动播放
    　　 },
						//分页器
						pagination:{
							el:'.swiper-pagination'
			}
    })
  },

  
  
 

};
</script>
<style scoped>
.swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .swiper-wrapper {
    height: 200px;
  }
  .swiper-slide img {
    max-width: 100%;
  }
  .swiper-slide {
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
.nav_top {
  width: 100%;
  height: 0.6rem;
  background: #08b6fe;
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  padding: 0 0.1rem;
  box-sizing: border-box;
}
.sherch_content {
  width: 2.5rem;
  height: 0.4rem;
  background: #ffffff;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  color: #cfcfcf;
  padding: 0 0.1rem;
  box-sizing: border-box;
}
.sherch_content i {
  font-size: 0.24rem;
}
.head_portrait {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.4rem;
  background: red;
  margin-right: 0.1rem;
}
.head_portrait img {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
}
.chat {
  margin-left: 0.15rem;
  width: 0.4rem;
  height: 0.4rem;
}
.chat i {
  font-size: 0.4rem;
  color: #ffffff;
}



</style>