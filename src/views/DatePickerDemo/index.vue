<template>
  <div>
    <DatePicker
      @dateBeginConfirm="choosedBeginDate"
      @dateEndConfirm="choosedEndDate"
    />
  </div>
</template>

<script>
import DatePicker from "@/components/DatePicker";
export default {
  components: {
    DatePicker,
  },
  methods: {
    choosedBeginDate(date) {
      console.log("选择的开始时间", date);
    },
    choosedEndDate(date) {
      console.log("选择的结束时间", date);
    },
  },
};
</script>