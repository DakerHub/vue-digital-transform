<template>
  <div class="container">
    <div id="app">
      <h1>
        <img src="./assets/vdt.png" alt="vue-digital-transform" />
        vue-digital-transform
      </h1>
      <a class="star-me" href="https://github.com/DakerHub/vue-digital-transform">GITHUB</a>
      <div>
        <a class="shield" href="https://github.com/DakerHub" target="__blank">
          <img
            src="https://img.shields.io/badge/Github-@DakerHub-success.svg?style=flat-square"
            alt
          />
        </a>

        <img
          class="shield"
          :src="
            `https://img.shields.io/badge/version-@${version}-success.svg?style=flat-square`
          "
          alt
        />
      </div>
      <div class="desc">vue-digital-transform基于vue2.x，致力于数字之间的动画切换动效，让数字的变换不再枯燥，让用户体验数字变化所带来的的乐趣。</div>
      <h2>尝试修改值</h2>
      <div class="demo-box">
        <div class="ctrl">
          <div class="ctrl-item">
            <label for>错乱切换：</label>
            <input type="checkbox" v-model="dislocation" />
          </div>
          <div class="ctrl-item">
            <label for>分隔符：</label>
            <input type="checkbox" v-model="useGrouping" />
          </div>
          <div class="ctrl-item">
            <label for>转换间隔：</label>
            <input type="number" v-model.number="interval" />
          </div>
          <div class="ctrl-item">
            <label for>值：</label>
            <input type="number" v-model.number="num" />
            <button @click="random">随机</button>
          </div>
        </div>
        <div class="demo">
          <DigitalTransform
            :value="num"
            :interval="interval"
            :dislocation="dislocation"
            :use-grouping="useGrouping"
          ></DigitalTransform>

          <span>这是个inline元素</span>
        </div>
      </div>

      <DocExample></DocExample>

      <DocConfig></DocConfig>
    </div>
  </div>
</template>

<script>
import DigitalTransform from "./components/DigitalTransform";
import DocExample from "./docs/Example";
import DocConfig from "./docs/Config";
import config from "./../package.json";

export default {
  name: "App",
  components: {
    DigitalTransform,
    DocExample,
    DocConfig
  },
  data() {
    return {
      version: config.version,
      num: 1000,
      interval: 500,
      dislocation: false,
      useGrouping: false
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
.container {
  position: relative;
  overflow-x: hidden;
  width: 100vw;
  margin-bottom: 50px;
}
body {
  margin: 0;
}
#app {
  width: 100%;
  font-family: "PingFang SC Regular", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;
}
h1 {
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  padding-bottom: 20px;
  border-bottom: thin solid #eee;
  img {
    height: 60px;
    margin-right: 20px;
  }
}
.star-me {
  position: absolute;
  right: -50px;
  top: 25px;
  height: 40px;
  width: 200px;
  text-align: center;
  line-height: 40px;
  font-size: 12px;
  transform: rotate(45deg);
  background-color: #4caf50;
  color: #ffffff;
  font-weight: bold;
  transition: all 0.3s;
  text-decoration: none;
  &:hover {
    box-shadow: -1px 3px 4px #1d581f;
    text-decoration: underline;
    right: -54px;
    top: 23px;
  }
}
.shield {
  margin-right: 5px;
}
.desc {
  margin: 20px 0;
}
fieldset {
  text-align: left;
}
.ctrl {
  .ctrl-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    label {
      width: 120px;
      text-align: right;
    }
  }
  input:not([type="checkbox"]),
  button {
    height: 32px;
    border-radius: 4px;
    padding: 0 10px;
    border: thin solid #ccc;
    outline: none;
    margin-right: 15px;
    transition: all 0.3s;
  }
  input:not([type="checkbox"]) {
    &:hover {
      border-color: #4caf50;
    }
    &:focus {
      box-shadow: 0 0 0px 2px #9cdc9f;
      border-color: #4caf50;
    }
  }
  button {
    cursor: pointer;
    &:hover {
      background-color: #fafafa;
    }
    &:active {
      background-color: #eee;
    }
  }
}
.demo-box {
  box-shadow: 0 0 11px 0px rgba(0, 0, 0, 0.12);
  padding: 20px;
  border-radius: 4px;
}
.demo {
  border: thin solid #ccc;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 0 auto;
}
.digital-transform {
  font-size: 30px;
  font-weight: bold;
  color: #4caf50;
}

@media screen and (max-width: 600px) {
  .container {
    padding: 10px;
    box-sizing: border-box;
  }
  h1 {
    word-break: break-all;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: unset;
  }
  .ctrl .ctrl-item {
    flex-wrap: wrap;
    label {
      width: 100%;
      text-align: left;
    }
    input:not([type="checkbox"]) {
      width: 100%;
      margin: 0;
    }

    button {
      width: 100%;
      margin: 10px 0;
    }
  }
  .demo {
    padding: 5px 0;
    border: none;
  }
}
</style>
