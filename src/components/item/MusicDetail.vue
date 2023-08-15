<template>
    <!-- 歌曲详情 -->
  <img :src="sang.al.picUrl" alt="" class="bgImg" />
  <div class="detailTop" >
    <div class="left">
      <svg class="icon" aria-hidden="true" @click="updatedetailShow">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <div class="leftText">
        <Vue3Marquee style="color: #fff">{{ sang.name }}</Vue3Marquee>
        <span>
          {{ sang.ar[0].name }}
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </span>
      </div>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang_o"></use>
      </svg>
    </div>
  </div>
  <div class="detailContent" v-show="!isLyricShow">
    <img src="../../assets/needle-ab.png" alt="" class="img_needle" :class="{img_needle_active:!isbtnShow}" />
    <img src="../../assets/cd.png" alt="" class="img_cd" />
    <img :src="sang.al.picUrl" alt="" class="img_ar" :class="{img_ar_active:!isbtnShow,img_ar_pauesd:isbtnShow}" />
  </div>
  <div class="musicLyric" ref="musicLyric" v-show="isLyricShow">
    <p v-for="item in lyric" :key="item" :class="{active:(currentTime * 1000>=item.time && currentTime * 1000<item.pre )}">
        {{item.lrc}}
    </p>
  </div>
  <div class="detailFooter">
    <div class="top">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-aixin"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-download"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="isLyricShow=!isLyricShow">
        <use xlink:href="#icon-CD"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jianyi"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shuaxin"></use>
      </svg>
    </div>
    <div class="content">
      <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.01">
    </div>
    <div class="footer">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-repeat2"></use> 
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
        <use xlink:href="#icon-shangyishoushangyige"  ></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="play" v-show="isbtnShow">
        <use xlink:href="#icon-arrow-"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="play" v-show="!isbtnShow">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(1)">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import { mapMutations,mapState } from 'vuex';
export default {
  props: ["sang","play","isbtnShow","addDuration"],
  data(){
    return{
        isLyricShow:false
    }
  },
  mounted(){
    this.addDuration();
  },
  methods:{
    goPlay:function(num){

      let index=this.sangListIndex+num;
      if(index<0){
        index=this.sangList.length-1;
      }else if(index===this.sangList.length){
        index=0;
      }
      this.updatesangListIndex(index)
    },
    ...mapMutations([
    'updatedetailShow',
    'updatesangListIndex',
    
    ])
  },
  computed:{
    ...mapState(["lyricKist","currentTime","sangListIndex","sangList","duration"]),
    lyric:function(){
        let arr;
        if(this.lyricKist.lyric){
           arr=this.lyricKist.lyric.split(/[(\r\n)\r\n]+/).map((item)=>{
            let min =item.slice(1,3);
            let sec =item.slice(4,6);
            let mill =item.slice(7,10);
            let lrc =item.slice(11,item.length);
            let time=parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill)
            if(isNaN(Number(mill))){
                 mill =item.slice(7,9);
                 lrc =item.slice(10,item.length);
                 time=parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill)
            }
            return{min,sec,mill,lrc,time}
        }) 
        arr.forEach((item,i) => {
          if(i===arr.length-1|| isNaN(arr[i+1].time)){
            item.pre=0
          }else{
            item.pre=arr[i+1].time
          }
        });
        }
        console.log(arr);
        return arr;
    }
  } , 
  watch:{
    currentTime:function(newValue){
      let p=document.querySelector("p.active")
      if(p&&p.offsetTop>270){
        this.$refs.musicLyric.scrollTop=p.offsetTop-270
      }
      if(newValue===this.duration){
        this.goPlay(1);
      }
    }

  },
  components: {
    Vue3Marquee,
  },
};
</script>

<style lang="less" scoped>
.bgImg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(0.7rem);
}
.detailTop {
  width: 100%;
  height: 1rem;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  align-items: center;
  fill: #fff;
  .left {
    display: flex;
    align-items: center;
    .leftText {
      width: 2rem;
      height: 100%;
      margin-left: 0.4rem;
      .icon {
        width: 0.3rem;
        height: 0.3rem;
        fill: #fff;
      }
      span {
        display: flex;
        align-items: center;
        color: #999;
      }
    }
  }
  .right {
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
.detailContent {
  width: 100%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .img_needle {
    width: 2rem;
    height: 3rem;
    position: absolute;
    top: .2rem;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(-13deg);
    transition: all 2s;
  }
  .img_needle_active {
    width: 2rem;
    height: 3rem;
    position: absolute;
    top: .2rem;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(0deg);
    transition: all 2s;
  }
  .img_cd{
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 2.1rem;
    z-index: -1;
  }
  .img_ar{
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    position: absolute;
    bottom: 3rem;
    animation: rotate_ar 10s linear infinite;//匀速 无限循环
  }
   .img_ar_active{
    animation-play-state: running;
   } 
   .img_ar_pauesd{
    animation-play-state: paused;
   }
   @keyframes rotate_ar {
    0%{
        transform: rotateZ(0deg);
    }
    100%{
        transform: rotateZ(360deg);
    }
   }
}
.detailFooter{
    width: 100%;
    height: 3rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: .2rem;
    .top{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .icon{
            width: .55rem;
            height: .55rem;
            fill:rgb(245,234,234)
        }
    }
    .content{

      .range{
        width: 100%;
        height: .06rem;
      }
    }
    .footer{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .icon{
            width: .6rem;
            height: .6rem;
            fill:rgb(245,234,234)
        }
        
    }
}
.musicLyric{
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    p{
        color: #5d5b5b;
        margin-bottom: .4rem;
        text-align: center;
    }
    .active{
      color: #fff;
      font-size: 24px;
      text-align: center;
    }
}
</style>