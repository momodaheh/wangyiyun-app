<template>
  <router-view/>
  <FootMusic v-show="isfootMusic" />
</template>

<script>
import { mapState } from 'vuex'
import FootMusic from './components/item/footMusic.vue'

export default {
  computed:{
    ...mapState(["isfootMusic"])
  },
  components:{
    FootMusic,
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
