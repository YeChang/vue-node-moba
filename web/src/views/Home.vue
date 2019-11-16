<template>
  <div class="home">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img class="w-100" src="../assets/images/8e2de58f50ae9aefbde3032980448ba0.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/a45e9cb00e9e73fe4cf09c4d2fa2cd18.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/8e2de58f50ae9aefbde3032980448ba0.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-2" v-for="n in 12" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->

    <div class="card bg-white p-3 mt-3 ai-center">
      <div class="card-header d-flex">
        <i class="iconfont icon-Menu fs-xl"></i>
        <div class="fs-xl flex-1 px-2">新闻资讯</div>

        <i class="iconfont icon-icontabmenu"></i>
      </div>
      <div class="card-body">
        <div class="nav">
          <div class="nav-item active">
            <div class="nav-link">热门</div>
          </div>
          <div class="nav-item ">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item ">
            <div class="nav-link">公告</div>
          </div>
          <div class="nav-item ">
            <div class="nav-link">公告</div>
          </div>
          <div class="nav-item ">
            <div class="nav-link">公告</div>
          </div>
        </div>
      </div>
    </div>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 1500
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;

  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
