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
    <m-list-card icon="Menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(items, i) in category.newsList" :key="i">
          <span>[{{items.categoryName}}]</span>
          <span>|</span>
          <span>{{items.title}}</span>
          <span>{{items.date}}</span>
        </div>
      </template>
    </m-list-card>

    <m-card icon="Menu" title="英雄列表"></m-card>
    <m-card icon="Menu" title="精彩视频"></m-card>
    <m-card icon="Menu" title="图文攻略"></m-card>
    <m-card icon="Menu" title="新闻资讯"></m-card>
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
      },

      newsCats: [
        {
          name: "热门",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "公告",
            title: "【已重新开启】翻牌达人活动暂时关闭公告",
            date: "11/17"
          }))
        },
        {
          name: "新闻",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "公告",
            title: "【已重新开启】翻牌达人活动暂时关闭公告",
            date: "11/17"
          }))
        },
        {
          name: "公告",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "公告",
            title: "【已重新开启】翻牌达人活动暂时关闭公告",
            date: "11/17"
          }))
        },
        {
          name: "活动",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "公告",
            title: "【已重新开启】翻牌达人活动暂时关闭公告",
            date: "11/17"
          }))
        },
        {
          name: "赛事",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "公告",
            title: "【已重新开启】翻牌达人活动暂时关闭公告",
            date: "11/17"
          }))
        }
      ]
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
