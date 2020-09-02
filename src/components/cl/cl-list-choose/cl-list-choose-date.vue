<template>
  <div class="dateContainer">
    <van-calendar
      v-model="show"
      type="range"
      color="#07c160"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '500px' }"
    />
    <!-- <van-calendar v-model="show" type="range" :show-confirm="false"  /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      show: false,
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2010, 0, 31),
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },
    formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 5) {
        if (date === 1) {
          day.topInfo = "劳动节";
        } else if (date === 4) {
          day.topInfo = "青年节";
        } else if (date === 11) {
          day.text = "今天";
        }
      }

      if (day.type === "start") {
        day.bottomInfo = "入住";
      } else if (day.type === "end") {
        day.bottomInfo = "离店";
      }

      return day;
    },
  },
};
</script>

<style lang="scss">
</style>