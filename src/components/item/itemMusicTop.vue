<template>
  <div class="itemMusicTop">
    <img :src="playlist1.coverImgUrl" alt=""  class="bgImg" />
    <div class="left">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou" ></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuoxiao-copy"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao" ></use>
      </svg>
    </div>
  </div>
  <div class="itemMusicMiddle">
    <div class="left">
        <img :src="playlist1.coverImgUrl" alt=""  class="img"/>
    </div>
    <div class="right">
        <div class="text">
            <span>{{playlist1.name}}</span>
            <div class="writer">
                <img :src="playlist1.creator.backgroundUrl" alt="" />
                <span>{{playlist1.creator.nickname}}</span>
            </div>
        </div>
    </div>
  </div>
  <div class="itemMusicBottom">
    <div class="item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiaoxi"></use>
      </svg>
      <span>{{playlist1.commentCount}}</span>
    </div>
    <div class="item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang_o"></use>
      </svg>
      <span>{{playlist1.shareCount}}</span>
    </div>
    <div class="item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yunduanxiazai"></use>
      </svg>
      <span>下载</span>
    </div>
    <div class="item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xuanze-duoxuan-tianchong"></use>
      </svg>
      <span>多选</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playlist: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    
    //通过props进行传值，判断如果数据拿不到，就获取sessionStorage中的
        // console.log(props);
        
            let playlist1;
            playlist1=props.playlist||JSON.parse(sessionStorage.getItem("itemDetail")).playlist
            // if(!playlist1.creator){
            //   playlist1=JSON.parse(sessionStorage.getItem("itemDetail")).playlist
            // }
            return{playlist1}
   
  },
  // props: ["playlist"],
};
</script>

<style lang="less" scoped>
.itemMusicTop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .bgImg{
        width: 100%;
        height: 11rem;
        position: fixed;
        z-index: -1;
        filter:blur(.2rem);
    }
    .left,.right{
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 .2rem;
        span{
            color:#fff;
            font-size: .4rem;
        }
        .icon{
            fill:#fff;
        }  
    }
    
}
.itemMusicMiddle{
    width: 100%;
    height: 3rem;
    margin: .2rem 0;
    display: flex;
    flex-direction: row;
    .left{
        height: 100%;
        width: 35%;
        margin: .2rem;
        .img{
            width: 100%;
            height: 100%;
            border-radius: .3rem;
        }
    }
    .right{
        height: 100%;
        width: calc(75%-0.4rem);
        display: flex;
        margin: .2rem;
        .text{
            display: flex;
            color: #fff;
            display: flex;
            flex-direction: column;
            .writer{
              margin: .2rem;
              display: flex;
              align-items: center;
              
                img{
                    width: .6rem;
                    height: .6rem;
                    border-radius: 50%;
                    margin: .04rem;
                }
            }
        }
    }
}

.itemMusicBottom{
  width: 100%;
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .item{
    height: 100%;
    width: 17%;
    display: flex;
    flex-direction: column;
    color: #fff;
    align-items: center;
    justify-content: center;
    .icon{
      width: 40%;
      height: 40%;
      fill: #fff;
    }
    span{
      margin: .06rem 0;
    }
  }
}
</style>