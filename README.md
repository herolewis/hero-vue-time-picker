# vue-time-picker

> 关于时间选择的vue插件

## 安装

```JS
npm install vue-time-lewis -S
```

## 使用

```bash
// ES6
import vueTimeLewis from 'vue-time-lewis.js'
// require
var vueTimeLewis = require('TimeLewis')

Vue.use(vueTimeLewis)

// 或者直接使用script导入
<script src="./node_modules/vue/dist/vue-time-lewis.js"></script>

// 作为组件的方式使用
<vue-time-lewis></vue-time-lewis>
```

### example

```
<template>
  <div id="app">
      <button @click="vis=true">显示时间控件</button>
      <vue-time-lewis
          v-if="vis"
          @ok="getTime"
          @cancel="vis=false"
          :suggest-time="suggestTime"
          :selected-time="selectedTime"
          >
          </vue-time-lewis>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      vis: false,
      suggestTime: 42000000,
      selectedTime: 42000000
    };
  },
  methods: {
    getTime(time) {
      console.log(time);
    }
  }
};
</script>
```
