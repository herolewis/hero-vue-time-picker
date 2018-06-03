<template>
  <div id="app">
           <button @click="vis=true">显示时间控件</button>
      <vue-time-lewis
          v-if="vis"
          @getTime="getTime"
          @hideTP="vis=false"
          :suggestTime="suggestTime"
          :selectedTime="selectedTime"
          :linkSrc="linkSrc"
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
      selectedTime: 42000000,
      linkSrc: "http://www.google.com"
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
