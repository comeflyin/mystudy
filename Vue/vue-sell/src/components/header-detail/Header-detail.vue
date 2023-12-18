<template>
  <transition name="fade">
    <div class="header-detail">
      <div class="detail-wrapper">

      </div>
      <div class="detail-close" @click.stop="hideDetail">
        X
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      hideDetail() { // 子父属性通信
        this.$emit('hide',false) // 创建一个hide事件
      }
    }
  }

</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';

.header-detail {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: @color-background-s;
  color: @color-white;
  backdrop-filter: blur(10px); /*滤镜函数，它会对元素背后的部分应用模糊效果。10px 是模糊的半径，值越大，模糊效果越明显。*/
  z-index: 999;
  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
    background: @color-background;
  }

  &.fade-enter-active,
  &.fade-leave-active {
    transition: all 0.5s ease;
  }

  .detail-wrapper {}

  .detail-close {
    position: fixed;
    width: 30px;
    height: 30px;
    bottom: 30px;
    left: 50%;
    margin-left: -15px;
    text-align: center;
    line-height: 30px;
  }
}</style>