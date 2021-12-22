<template>
  <div>
    <LinePicker
      title="测试标题"
      :columns="columns"
      @hadPicked="pickedHandle"
      customTxt="label"
    />
  </div>
</template>


<script>
import LinePicker from "@/components/LinePicker";

export default {
  components: {
    LinePicker,
  },
  data() {
    return {
      columns: [
        { id: 1, label: "测似1" },
        { id: 2, label: "测似2" },
        { id: 3, label: "测似3" },
        { id: 4, label: "测似4" },
      ],
    };
  },
  methods: {
    pickedHandle(value) {
      console.log("选择的值", value);
    },
  },
};
</script>