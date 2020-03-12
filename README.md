# vue-digital-transform

一个基于 Vue 的数字切换动效库

## Install

```bash
npm install vue-digital-transform
```

## Example

```html
<template>
  <DigitalTransform :value="num" dislocation :interval="200"></DigitalTransform>
</template>
```

```js
import DigitalTransform from "vue-digital-transform";

export default {
  components: {
    DigitalTransform
  },
  data() {
    return {
      num: 0
    };
  }
};
```

## Config

| prop        | type          | description                        | default   |
| ----------- | ------------- | ---------------------------------- | --------- |
| value       | number,string | 需要切换的数字，只能由 0-9 和.组成 | undefined |
| dislocation | boolean       | 单个数字是否过渡时间是否不一致     | false     |
| interval    | number        | 单个数字过渡时间（ms）             | 500       |
