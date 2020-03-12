# vue-digital-transform

一个基于 Vue 的数字切换动效库

## Install

```bash
npm install vue-digital-transform
```

## Example

```html
<template>
  <DigitalTransform :value="num" :interval="500"></DigitalTransform>
</template>
```

```js
import DigitalTransform from "./components/DigitalTransform";

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

| prop        | type          | description                    | default   |
| ----------- | ------------- | ------------------------------ | --------- |
| value       | number,string | -                              | undefined |
| dislocation | boolean       | 单个数字是否过渡时间是否不一致 | false     |
| interval    | number        | 单个数字过渡时间（ms）         | 500       |
