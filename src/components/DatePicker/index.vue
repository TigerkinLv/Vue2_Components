<template>
  <div>
    <div class="dateLine">
      <div class="dateItem" @click="toPickDate(1)">
        <div :class="['pickDate', choosedBeginDate ? 'picked' : '']">
          {{ choosedBeginDate ? choosedBeginDate : "起始日期" }}
        </div>
        <div><img src="./images/date.png" alt="" /></div>
      </div>
      <div>-</div>
      <div class="dateItem" @click="toPickDate(2)">
        <div :class="['pickDate', choosedEndDate ? 'picked' : '']">
          {{ choosedEndDate ? choosedEndDate : "结束日期" }}
        </div>
        <div><img src="./images/date.png" alt="" /></div>
      </div>
    </div>
    <van-popup v-model="show" round position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirm"
        @cancel="cancel"
      />
    </van-popup>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "DatePicker",
  data() {
    return {
      show: false,
      currentDate: new Date(),
      choosedBeginDate: "",
      choosedEndDate: "",
      pickDateType: 0,
    };
  },
  props: {
    minDate: {
      type: Date,
    },
    maxDate: {
      type: Date,
    },
  },
  methods: {
    toPickDate(code) {
      this.show = true;
      this.pickDateType = code;
    },
    cancel() {
      this.show = false;
    },
    confirm(value) {
      this.show = false;
      let formatDate = moment(value).format("YYYY-MM-DD");
      if (this.pickDateType == 1) {
        this.choosedBeginDate = formatDate;
        this.$emit("dateBeginConfirm", value);
      } else if (this.pickDateType == 2) {
        this.choosedEndDate = formatDate;
        this.$emit("dateEndConfirm", value);
      }
    },
  },
};
</script>

<style lang="less" scoped src="./index.less">
</style>