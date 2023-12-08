<template>
  <div class="listTop">
    <span class="t1">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang_o"></use>
      </svg>
      <h4>播放全部</h4>
      (共{{ playlist1.tracks.length }}首)</span
    >

    <van-button round type="danger" size="small"
      >+收藏({{ playlist1.subscribedCount }})</van-button
    >
  </div>
  <div class="musicList">
    <div class="musicItem" v-for="(item, i) in playlist1.tracks" :key="i">
      <div class="left" @click="playMusic(i)">
        <span>{{ i + 1 }}</span>
        <span><h4>{{item.name}}</h4>{{item.ar[0].name}}</span>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true" v-if="item.mv">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    playlist: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    let playlist1;
    playlist1=props.playlist||JSON.parse(sessionStorage.getItem("itemDetail")).playlist
    return { playlist1 };

  },
  methods:{
    playMusic:function(i){
      this.updateSangList(this.playlist1.tracks)
      this.updatesangListIndex(i);
    },
    ...mapMutations(['updateSangList','updatesangListIndex'])
  }
};
</script>

<style lang="less" scoped>
.listTop {
  width: 100%;
  height: 1rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.1rem;
  .t1 {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
.musicList{
    background-color: #fff;
    margin-bottom: 1.4rem;
    .musicItem{
        width: 100%;
        height: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 .2rem    ;
        .left{
            display: flex;
            flex-direction: row;
            align-items: center;
            span{
                margin: .2rem;
                color: #908d8d;
                h4{
                    color: #000;
                    margin-bottom: .06rem;
                }
            }
        }
        .right{
            .icon{
                margin: 0 .1rem;
            }
        }
    }
}
</style>