<template>
  <div class="topNav">
    <div class="topleft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>

    <div class="topContent">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>

    <div class="topright">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuoxiao"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
    .topNav{
        width: 100%;
        padding:.2rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .topContent{
            width: 65%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            font-size: .36rem;
            // align-items: center;
            .active{
                font-weight: 900;
            }
        }
    }
</style>