<template>
  <div id="app">
    <fieldset>
      <legend>DigitalTransform</legend>
      <input type="text" v-model.number="num" />
      <button @click="random">随机</button>
      <div>
        <DigitalTransform :value="num" :interval="500"></DigitalTransform>
      </div>
    </fieldset>

    <fieldset>
      <legend>DigitalTransfromScroll</legend>
      <input type="text" v-model="numSingle" />
      <div>
        <DigitalTransfromScroll :to="numSingle"></DigitalTransfromScroll>
      </div>
    </fieldset>
  </div>
</template>

<script>
import DigitalTransform from "./components/DigitalTransform";
import DigitalTransfromScroll from "./components/DigitalTransfromScroll";

export default {
  name: "App",
  components: {
    DigitalTransform,
    DigitalTransfromScroll
  },
  data() {
    return {
      num: 1000,
      numSingle: "1"
    };
  },
  methods: {
    random() {
      const x = Math.ceil(Math.random() * 10);
      const base = Math.random()
        .toString()
        .substring(0, x + 5);
      this.num = base * x ** 10;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
fieldset {
  text-align: left;
}
input {
  margin-bottom: 20px;
}

.digital-transform {
  font-size: 30px;
}
</style>
