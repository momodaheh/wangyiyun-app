<template>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">更多</div>
        </div>
    </div>
</template>
<script>
import {getMusicList} from "@/request/api/home"
export default {
    data(){
        return{
            musicList:[]
        }
    },
    methods:{
        async getGedan(){
            let res=await getMusicList();
            console.log(res);
        }
    },
    mounted(){
        this.getGedan();
    }
}
</script>
<style lang="less" scoped>
.musicList{
    width: 100%;
    height: 5rem;
    padding:.2rem;
    .musicTop{
        width:100%;
        height: .6rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: .2rem;
        .title{
            font-size: 20px;
            font-weight: 900;
        }
        .more{
            border: 1px solid #ccc;
            text-align: center;
            line-height: .6rem;
            padding: 0 .2rem;
            border-radius: .4rem;
        }
    }
}
</style>