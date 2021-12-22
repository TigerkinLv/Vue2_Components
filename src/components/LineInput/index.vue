<template>
  <div class="lineItem">
    <div class="title">
      <span class="tit"> {{ title }}</span>
      <span class="redSign" v-show="necessary">*</span>
    </div>
    <input
      :type="inputType"
      :placeholder="placeholder"
      :class="['input', inputGrow ? 'input1' : '']"
      @input="inputHandle($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "LineInput",
  props: {
    title: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    necessary: {
      type: Boolean,
      default: true,
    },
    inputType: {
      type: String,
      default: "text",
    },
    inputGrow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    inputHandle(e) {
      this.$emit("inputChange", e);
    },
  },
};
</script>

<style lang="less" scoped src="./index.less">
</style>