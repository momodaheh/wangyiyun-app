<template>
  <router-view/>
  <footMusic/>
</template>

<script>
import footMusic from './components/item/footMusic.vue'

export default {
  components:{
    footMusic,
  }
}
</script>
<style lang="less">
  *{
    margin: 0%;
    padding:0%;
    box-sizing: border-box;
  }

  .icon{
    width: .5rem;
    height: .5rem;
  }

  a{
    color: #000;
  }
</style>
