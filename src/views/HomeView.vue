<template>
  <TopNav />
  <SwpierTop />
  <IconList />
  <MusicList />
</template>


<script>
import TopNav from '@/components/home/TopNav.vue'
import SwpierTop from '@/components/home/SwpierTop.vue';
import IconList from '@/components/home/IconList.vue';
import MusicList from '@/components/home/MusicList.vue'
export default {
  components:{
    TopNav,
    SwpierTop,
    IconList,
    MusicList

  }
};
</script>
