<template>
  <div class="FootMusic" >
    <div class="left" @click="updatedetailShow">
      <img :src="sangList[sangListIndex].al.picUrl" alt="" />
      <div>
        <p v-if="sangList[sangListIndex].name">
          {{ sangList[sangListIndex].name }}
        </p>
        <p v-else>{{ sangList[sangListIndex].al.name }}</p>
        <span>横滑可以切换上下首</span>
      </div>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true" @click="play" v-show="isbtnShow">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="play" v-show="!isbtnShow">
        <use xlink:href="#icon-iconstop"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
    <audio @timeupdate="updateTime"
      ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${sangList[sangListIndex].id}`"
    ></audio>
    <van-popup v-model:show="detailShow" position="right" :style="{ width: '100%', height: '100%' }" >
        <MusicDetail :sang="sangList[sangListIndex]" :play="play" :isbtnShow="isbtnShow" :addDuration="addDuration" />
    </van-popup>
  </div>
</template>

<script>

import { mapMutations, mapState } from "vuex";
import MusicDetail from './MusicDetail.vue';
export default {
  computed: {
    ...mapState(["sangList", "sangListIndex", "isbtnShow","detailShow"]),
    
  },
  data(){
    return{
        interVal:0
    }
  },
  mounted(){
    this.$store.dispatch("getLyric",this.sangList[this.sangListIndex].id)
    
  },
  components:{
    MusicDetail,
  },
  methods: {
    
    play: function () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsbtnShow(false);
      } else {
        this.$refs.audio.pause();
        this.updateIsbtnShow(true);
        clearInterval(this.interVal)
      }
    },
    updateTime:function(){
      this.updateCurrentTime(this.$refs.audio.currentTime)
    },
    addDuration:function(){
      this.updateduration(this.$refs.audio.duration)
    },
    ...mapMutations([
    "updateIsbtnShow",
     "updatedetailShow",
     "updateCurrentTime",
     "updateduration"
     ]),
  },
  watch: {
    sangListIndex: function () {
      this.$refs.audio.autoplay = true;
      this.$store.dispatch("getLyric",this.sangList[this.sangListIndex].id)
      if (this.$refs.audio.paused) {
        this.updateIsbtnShow(false);
      }
    },
    sangList: function () {
      if (this.isbtnShow) {
        this.$refs.audio.autoplay = true;
        this.updateIsbtnShow(false);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.FootMusic {
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  display: flex;
  flex-direction: row;
  padding: 0.2rem;
  justify-content: space-between;
  .left {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
    span {
      color: #999;
    }
    p {
      font-size: 0.32rem;
      font-weight: 700;
    }
  }
  .right {
    display: flex;
    width: 25%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>