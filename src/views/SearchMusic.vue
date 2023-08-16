<template>
  <div class="SearchTop">
     <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou" @click="$router.go(-1)"></use> 
      </svg>
      <input type="text" placeholder="陈奕迅" v-model="searchKey" @keyup.enter="enterKey">
  </div>
  <div class="searchHistory">
    <span class="hisSpan">历史</span>
    <span v-for="item in keywordList" :key="item" class="spanKey" @click="clickHistory(item)">
        {{item}}
    </span>
    <svg class="icon" aria-hidden="true" @click="delHistory">
        <use xlink:href="#icon-shanchu"></use> 
      </svg>
  </div>
    <div class="musicList">
    <div class="musicItem" v-for="(item, i) in searchList" :key="i">
      <div class="left" @click="updateIndex(item)">
        <span>{{ i + 1 }}</span>
        <span><h4>{{item.name}}</h4>{{item.artists[0].name}}</span>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true" v-if="item.mvid">
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
import{getSearch} from "@/request/api/item"

export default {
    data(){
        return{
            keywordList:[],
            searchKey:"",
            searchList:[]
        }
    },
    mounted(){
        const wordList=JSON.parse(localStorage.getItem('keywordList'))
        this.keywordList=wordList||[];
    },
    methods:{
        enterKey:async function(){
            if(this.searchKey !==""){
            this.keywordList.unshift(this.searchKey)
            //去重
            this.keywordList=[...new Set(this.keywordList)]
            //固定长度
            if(this.keywordList.length>5){
                this.keywordList.pop()
            }
            localStorage.setItem("keywordList",JSON.stringify(this.keywordList))
            let res = await getSearch(this.searchKey)
            console.log(res);
            this.searchList = res.data.result.songs
            this.searchKey=""
            }
            
        },
        delHistory:function(){
            localStorage.removeItem("keywordList")
            this.keywordList=[]
        },
       clickHistory:async function(item){
            let res = await getSearch(item)
            this.keywordList.unshift(item)
             this.keywordList=[...new Set(this.keywordList)]
            localStorage.setItem("keywordList",JSON.stringify(this.keywordList))
            console.log(res);
            this.searchList = res.data.result.songs
       },
       updateIndex:function(item){
        item.al=item.album
        item.al.picUrl=item.album.artist.img1v1Url
        item.ar=item.artists
        this.$store.commit("pushSangList",item)
        this.$store.commit("updatesangListIndex",this.$store.state.sangList.length-1)
       }
    }
}
</script>

<style lang="less" scoped>
.SearchTop{
    width: 100%;
    height: 1rem;
    display: flex;
    padding: 0 .2rem;
    align-items: center;
    input{
        margin-left:.2rem;
        border: none;
        border-bottom: 1px solid #999;
        width: 90%;
        padding: .1rem;
    }
}
.searchHistory{
    width: 100%;
    padding: .2rem;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .hisSpan{
        font-weight: 800;
    }
    .spanKey{
        padding: 0.1rem 0.2rem;
        background-color: #c19f9f;
        border-radius: .4rem;
        margin: .1rem .2rem;
        display: inline-block;
    }
    .icon{
        width: .45rem;
        height: .45rem;
        position: absolute;
         right: .2rem;
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