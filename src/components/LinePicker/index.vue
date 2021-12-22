<template>
  <div>
    <div class="linePicker">
      <div class="title">
        <span class="tit"> {{ title }}</span>
        <span class="redSign" v-show="necessary">*</span>
      </div>
      <div class="cont" @click="pickData">
        <div :class="{ noPicked: noPicked }">{{ pickedData }}</div>
        <img src="./images/arrow.png" alt="" />
      </div>
    </div>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
        :value-key="customTxt"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "LinePicker",
  data() {
    return {
      showPicker: false,
      noPicked: true,
      pickedData: "请选择",
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    necessary: {
      type: Boolean,
      default: false,
    },
    customTxt: {
      type: String,
      default: "text",
    },
  },
  methods: {
    onConfirm(value) {
      this.showPicker = false;
      this.noPicked = false;
      this.pickedData = value[this.customTxt];
      this.$emit("hadPicked", value);
    },
    pickData() {
      this.showPicker = true;
    },
  },
};
</script>

<style lang="less" scoped src="./index.less">
</style>