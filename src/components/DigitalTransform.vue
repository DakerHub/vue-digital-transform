<template>
  <div class="digital-transform">
    <transition-group name="slide-y">
      <DigitalTransfromScroll
        class="digital-transform-item"
        v-for="(item, i) in digitals"
        :key="i"
        :to="item"
        :interval="interval"
        :dislocation="dislocation"
        from="0"
        >{{ item }}</DigitalTransfromScroll
      >
    </transition-group>
  </div>
</template>

<script>
import DigitalTransfromScroll from "./DigitalTransfromScroll";

export default {
  name: "DigitalTransfrom",
  components: {
    DigitalTransfromScroll
  },
  props: {
    value: {
      type: Number,
      default: undefined,
      required: true
    },
    dislocation: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      digitals: [],
      oldDigtals: []
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.parseDigital(value);
      }
    }
  },
  methods: {
    parseDigital(digital) {
      if (typeof digital !== "number") {
        throw new TypeError('"value" should be number');
      }

      let digitalArr;
      if (isNaN(digital)) {
        digitalArr = [];
      } else {
        digitalArr = digital.toString().split("");
      }

      this.oldDigtals = this.digitals.concat();
      this.digitals = digitalArr;
    }
  }
};
</script>

<style lang="scss" scoped>
.digital-transform {
  overflow: hidden;
}
.digital-transform-item {
  display: inline-block;
  transition: opacity 0.3s, transform 0.3s;
}

.slide-y-enter, .slide-y-leave-to
/* .slide-y-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
.slide-y-leave-active {
  // position: absolute;
}
</style>
