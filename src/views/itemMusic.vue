<template>
    
    <itemMusicTop :playlist="state.playlist"/>
    <itemMusicList :playlist="state.playlist"/>
</template>

<script>
import {useRoute}from 'vue-router'
import {onBeforeMount,reactive,}from 'vue'
import {getMusicItemList} from '../request/api/item'
import itemMusicTop from '@/components/item/itemMusicTop.vue'
import itemMusicList from '@/components/item/itemMusicList.vue'
export default {
    setup(){
        const state =reactive({
            playlist:{},
            itemList:[]
        });
        onBeforeMount(async()=>{
            let id=useRoute().query.id;
            let res =await getMusicItemList(id);
            state.playlist=res.data.playlist
            //防止页面刷新，数据丢失，将数据保存到sessionStorage中
            sessionStorage.setItem('itemDetail',JSON.stringify(state))
        });
        return{state}
        
    },
    components:{
        itemMusicTop,
        itemMusicList,
    }

}
</script>

<style lang="less" scoped>

</style>