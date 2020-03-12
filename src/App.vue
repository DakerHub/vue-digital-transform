<template>
  <div class="container">
    <div id="app">
      <h1>
        <img src="./assets/vdt.png" alt="vue-digital-transform" />
        vue-digital-transform
      </h1>
      <a
        class="star-me"
        href="https://github.com/DakerHub/vue-digital-transform"
        >GITHUB</a
      >
      <div>
        <a class="shield" href="https://github.com/DakerHub" target="__blank">
          <img
            src="https://img.shields.io/badge/Github-@DakerHub-success.svg?style=flat-square"
            alt=""
          />
        </a>

        <img
          class="shield"
          src="https://img.shields.io/badge/version-@1.0.1-success.svg?style=flat-square"
          alt=""
        />
      </div>
      <div class="desc">
        vue-digital-transform基于vue2.x，致力于数字之间的动画切换动效，让数字的变换不再枯燥，让用户体验数字变化所带来的的乐趣。
      </div>
      <h2>尝试修改值</h2>
      <fieldset>
        <legend>Demo</legend>
        <div class="ctrl">
          <div class="ctrl-item">
            <label for="">错乱切换：</label>
            <input type="checkbox" v-model="dislocation" />
          </div>
          <div class="ctrl-item">
            <label for="">转换间隔：</label>
            <input type="text" v-model.number="interval" />
          </div>
          <div class="ctrl-item">
            <label for="">值：</label>
            <input type="text" v-model.number="num" />
            <button @click="random">随机</button>
          </div>
        </div>
        <div class="demo">
          <DigitalTransform
            :value="num"
            :interval="interval"
            :dislocation="dislocation"
          ></DigitalTransform>

          <span>这是个inline元素</span>
        </div>
      </fieldset>

      <div>
        <h2>快速开始</h2>

        <h3>安装</h3>
        <pre
          class="hljs"
          style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(43, 43, 43); color: rgb(186, 186, 186);"
        >npm <span class="hljs-keyword" style="color: rgb(203, 120, 50);">install</span> vue-digital-transform</pre>

        <h3>使用</h3>
        <pre
          class="hljs"
          style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(43, 43, 43); color: rgb(186, 186, 186);"
        >&lt;DigitalTransform
  <span class="hljs-symbol" style="color: rgb(224, 196, 108);">:value=<span class="hljs-string" style="color: rgb(224, 196, 108);">"number"</span></span>
  <span class="hljs-symbol" style="color: rgb(224, 196, 108);">:interval=<span class="hljs-string" style="color: rgb(224, 196, 108);">"interval"</span></span>
  <span class="hljs-symbol" style="color: rgb(224, 196, 108);">:dislocation=<span class="hljs-string" style="color: rgb(224, 196, 108);">"dislocation"</span></span>
&gt;&lt;<span class="hljs-regexp" style="color: rgb(104, 150, 186);">/DigitalTransform&gt;</span></pre>

        <pre
          class="hljs"
          style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(43, 43, 43); color: rgb(186, 186, 186);"
        ><span class="hljs-keyword" style="color: rgb(203, 120, 50);">import</span> DigitalTransform from <span class="hljs-string" style="color: rgb(224, 196, 108);">"vue-digital-transform"</span>;

export <span class="hljs-keyword" style="color: rgb(203, 120, 50);">default</span> {
  components: {
    DigitalTransform
  },
  data() {
    return {
      number: <span class="hljs-number" style="color: rgb(104, 150, 186);">1000</span>,
      interval: <span class="hljs-number" style="color: rgb(104, 150, 186);">500</span>,
      dislocation: false
    };
  }
}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import DigitalTransform from "./components/DigitalTransform";

export default {
  name: "App",
  components: {
    DigitalTransform
  },
  data() {
    return {
      num: 1000,
      interval: 500,
      dislocation: false
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
}
body {
  margin: 0;
}
#app {
  width: 100vw;
  overflow: hidden;
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
</style>
