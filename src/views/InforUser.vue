<template>
  <div></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState(["user"])
  }
}
</script>

<style lang="less" scoped>

</style>