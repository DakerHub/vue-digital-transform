<template>
  <div class="dt-scroll">
    <div ref="$list" class="dt-scroll-list" :style="listStyle">
      <span class="dt-scroll-digital" v-for="item in digitals" :key="item">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
const digitalValidator = value => {
  return /^\w{1}|\.$/.test(value);
};

export default {
  name: "DigitalTransformScroll",
  props: {
    to: {
      validator: digitalValidator,
      default: "0"
    },
    from: {
      validator: digitalValidator,
      default: "0"
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
      digitals: [".", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
      listHeight: 0,
      spacing: 1
    };
  },
  computed: {
    listStyle() {
      return {
        transitionDuration: `${(this.interval / 1000) * this.spacing}s`
      };
    },
    elHeight() {
      return this.listHeight / this.digitals.length;
    }
  },
  watch: {
    to: {
      immediate: true,
      handler(newVal, oldVal) {
        if (!this.$refs.$list) return;

        if (this.dislocation) {
          const oldIndex = this.digitals.findIndex(d => oldVal === d);
          const newIndex = this.digitals.findIndex(d => newVal === d);
          this.spacing = Math.abs(newIndex - oldIndex);
        } else {
          this.spacing = 1;
        }

        this.setPosition(newVal);
      }
    }
  },
  mounted() {
    this.calcHeight();
    this.$el.style.height = this.elHeight + "px";

    this.setPosition(this.from);

    setTimeout(() => {
      this.setPosition(this.to);
    }, 300);
  },
  methods: {
    calcHeight() {
      this.listHeight = this.$refs.$list.clientHeight;
    },
    setPosition(target) {
      const idx = this.digitals.findIndex(d => target === d);
      const offset = idx * this.elHeight;

      this.$refs.$list.style.transform = `translateY(-${offset}px)`;
    }
  }
};
</script>

<style lang="scss" scoped>
.dt-scroll {
  overflow: hidden;
  display: inline-block;
  height: 1.5em;
}
.dt-scroll-list {
  display: inline-flex;
  flex-direction: column;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.42, 0, 0.62, 1.2);
}
.dt-scroll-digital {
}
</style>
