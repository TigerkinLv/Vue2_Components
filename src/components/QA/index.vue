<template>
  <div class="qaBox">
    <div class="tit">
      <img src="./images/q.png" alt="" class="questionImg" />
      <span>{{ questionTit }}</span>
    </div>
    <div class="cont">
      <div>
        <img src="./images/a.png" alt="" class="answerImg" />
      </div>
      <div>{{ answerCont }}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "QAComponent",
  props: {
    questionTit: {
      type: String,
      required: true,
    },
    answerCont: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="less" scoped src="./index.less">
</style>