<template>
  <div class="page-article" v-if="model">
    <div>
      <div class="d-flex py-3 px-2 border-bottom">
        <div class="iconfont icon-back text-blue"></div>
        <strong class="flex-1 text-ellipsis text-blue pl-1">{{model.title}}</strong>
        <div class="text-grey fs-xs">2019-11-17</div>
      </div>
    </div>

    <div v-html="model.body" class="px-3 body fs-xxl"></div>

    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-Menu">
          <strong class="text-blue fs-xl ml-2">相关咨询</strong>
        </i>
      </div>
      <div class="pt-2">
        <router-link 
        class="py-1"
        tag="div" 
        :to="`/articles/${item._id}`"
        v-for="item in model.related" 
        :key="item.id">
          {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    };
  },
  watch: {
    id: 'fetch',
    // id() {
    //   this.fetch()
    // }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss">
.page-article {
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      height: auto;
      width: 100%;
    }
  }
}
</style>