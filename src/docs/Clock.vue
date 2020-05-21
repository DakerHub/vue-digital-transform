<template>
  <div>
    <h2>时钟</h2>
    <div class="time">
      <DigitalTransform :value="hours"></DigitalTransform>
      <span>:</span>
      <div>
        <DigitalTransform :value="minutes"></DigitalTransform>
      </div>
      <span>:</span>
      <div>
        <DigitalTransform :value="seconds"></DigitalTransform>
      </div>
    </div>
  </div>
</template>

<script>
import DigitalTransform from "./../components/DigitalTransform";

export default {
  name: "ClockDemo",
  components: {
    DigitalTransform
  },
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  created() {
    const t = setInterval(() => {
      const d = new Date();
      this.hours = d
        .getHours()
        .toString()
        .padStart(2, "0");
      this.minutes = d
        .getMinutes()
        .toString()
        .padStart(2, "0");
      this.seconds = d
        .getSeconds()
        .toString()
        .padStart(2, "0");
    }, 1000);

    this.$once("hook:beforeDestory", () => {
      clearInterval(t);
    });
  }
};
</script>

<style lang="scss" scoped>
.time {
  display: flex;
  font-size: 30px;
  font-weight: bold;
  color: #4caf50;
}
</style>
