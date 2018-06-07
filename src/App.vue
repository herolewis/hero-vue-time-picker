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

<style>
#app {
}
</style>
