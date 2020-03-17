<template>
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
    ><span class="hljs-keyword" style="color: rgb(203, 120, 50);">import</span> DigitalTransform from <span
  class="hljs-string"
  style="color: rgb(224, 196, 108);"
>"vue-digital-transform"</span>;

export <span class="hljs-keyword" style="color: rgb(203, 120, 50);">default</span> {
  components: {
    DigitalTransform
  },
  data() {
    return {
      number: <span
  class="hljs-number"
  style="color: rgb(104, 150, 186);"
>1000</span>,
      interval: <span class="hljs-number" style="color: rgb(104, 150, 186);">500</span>,
      dislocation: false
    };
  }
}</pre>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
