<template>
  <div>
    <h2>参数 Props</h2>

    <h3>value</h3>
    <div>
      <p>类型：<code>Number</code>, <code>String</code></p>
      <p>默认值：<code>undefined</code></p>
      <p>
        需要切换的数字，只能由
        <code>0-9</code> <code>.</code> <code>,</code> 组成
      </p>
    </div>
    <h3>dislocation</h3>
    <div>
      <p>类型：<code>Boolean</code></p>
      <p>默认值：<code>false</code></p>
      <p>
        单个数字是否过渡时间是否不一致，设置该属性为<code>true</code>时一般会将<code>interval</code>调小
      </p>
    </div>
    <h3>interval</h3>
    <div>
      <p>类型：<code>Number</code></p>
      <p>默认值：<code>500</code></p>
      <p>单个数字过渡时间（ms）</p>
    </div>
    <h3>useGrouping (v1.1.0+)</h3>
    <div>
      <p>类型：<code>Boolean</code></p>
      <p>默认值：<code>false</code></p>
      <p>是否开启分隔符(对 value 为 <code>Number</code> 类型的有效)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocConfig"
};
</script>

<style lang="scss" scoped>
code {
  background-color: #eee;
  padding: 2px 5px;
  border-radius: 2px;
  font-weight: bold;
}
</style>
