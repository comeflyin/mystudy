<template>

  <div class="header" @click="showDetail" >
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
    <div class="description">{{ seller.description }} / {{ seller.deliveryTime }}分钟送达</div>
        <div class="support" v-if="seller.supports">
          <!--  -->
          <support-icon size="1" :type="seller.supports[0].type" />
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="iconfont icon-you"></i>
      </div>
    </div>

    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">asfafaf回到衣服后爱上覅佛爱佛哦几分几分钱交给哦公积金公积金哦哦给几个几个骄傲地方管家婆加个屁骄傲估计得皮狗屁的机票刚到家撒发货复合体以后打火锅炮灰噶破电话费哦哦哦哦高低韩国v哦哦豁公婆如何屁股沟后悔过</span>
      <i class="iconfont icon-you"></i>
    </div>
 
    <div class="bg"
    v-if="seller.avatar"
      :style="{backgroundImage: `url(${seller.avatar})`}">
    </div>
    <HeaderDetail v-show="detailShow" @hide="handle"/>
  </div>
  <!-- <HeaderDetail v-show="detailShow" @hide="handle"/> v2不行，template不能有两个标签，v3修好了 -->
</template>

<script>
import SupportIcon from '@/components/support-icon/Support-icon.vue'
import HeaderDetail from '@/components/header-detail/Header-detail.vue'
export default {
  components: {
    SupportIcon,
    HeaderDetail
  },
  props:{
    seller:{
      type: Object,
      default: () => {}
    }
  },
  data(){
    return {
      detailShow: false
    }
  },
  methods: {
    showDetail(){
      this.detailShow = true
    },
    handle(val){
      this.detailShow = val
      // console.log('这里有一个val',val);

    }
  }
}
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';
@import '@/common/style/mixin.less';

.header {
  background: @color-background-ss;
  position: relative;

  .content-wrapper {
    display: flex;
    padding: 24px 12px 18px 24px;
    position: relative;

    .avatar {
      width: 64px;
      height: 64px;

      img {
        width: 100%;
        border-radius: 2px;
      }
    }

    .content {
      flex: 1;
      margin-left: 16px;
      color: @color-white;

      .title {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .brand {
          width: 30px;
          height: 18px;
          // background-image: url('./brand@2x.png');
          .bg-image('brand');
          background-size: cover;
        }

        .name {
          margin-left: 6px;
          font-size: @fontsize-large;
          font-weight: bold;
        }
      }

      .description {
        font-size: @fontsize-small;
        margin-bottom: 8px;
      }

      .support {
        display: flex;
        align-items: center;

        .text {
          font-size: @fontsize-small-s;
          margin-left: 4px;
        }
      }
    }

    .support-count {
      position: absolute;
      right: 12px;
      bottom: 14px;
      padding: 0 8px;
      height: 24px;
      // line-height: 24px;
      text-align: center;
      background: @color-background-sss;
      border-radius: 14px;
      display: flex;
      align-items: center;
      color: @color-white;

      .count {
        font-size: @fontsize-small-s;
      }

      .iconfont {
        font-size: @fontsize-small-s;
        margin-left: 2px;
      }
    }
  }

  .bulletin-wrapper{
    display: flex;
    height: 28px;
    padding:  0 8px;
    background: @color-background-sss;
    align-items: center;
    color: @color-white
  }
  .bulletin-text{
    flex:1;
    margin-left: 4px;
    font-size: @fontsize-small-s;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }
  .bulletin-title{
    // width: 22px;
    flex: 0 0 22px; // 放大比例 缩小比例 不放大不缩小具体宽度
    height: 12px;
    .bg-image('bulletin');
    background-size: 100% 100%;
  }
  .iconfont{
    flex: 0 0 10px;
    font-size: @fontsize-small-s;
  }

  .bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-size: 100% 100%;
    z-index: -1;
    filter: blur(10px);
  }
}</style>