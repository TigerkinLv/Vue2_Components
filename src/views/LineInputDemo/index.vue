<template>
  <div>
    <LineInput title="测试标题" @inputChange="inputChangeHandle" />
  </div>
</template>


<script>
import LineInput from "@/components/LineInput";

export default {
  components: {
    LineInput,
  },
  methods: {
    inputChangeHandle(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scoped>
</style>