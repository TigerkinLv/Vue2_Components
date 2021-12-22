<template>
  <div class="hornBox" v-show="showTips">
    <div class="cont">
      <div>
        <img src="./images/horn.png" alt="" class="horn" />
      </div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="close" @click="closeMe">X</div>
  </div>
</template>

<script>
export default {
  name: "Notice",
  data() {
    return {
      showTips: true,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeMe() {
      this.showTips = false;
    },
  },
};
</script>

<style lang="less" scoped src="./index.less">
</style>