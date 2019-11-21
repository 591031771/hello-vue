<template>
  <el-tabs type="border-card">
    <el-tab-pane label="v-text">
      <p v-text="hello"></p>
    </el-tab-pane>
    <el-tab-pane label="v-html">
      <div id="app">
        <p v-html = "html"></p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="v-if&v-else&v-on">
      <button v-on:click="bol=!bol">change</button>
      <p v-if="bol">我是v-if</p>
      <p v-else>我是v-else</p>
    </el-tab-pane>
    <el-tab-pane label="v-model">
      <input type="text" v-model="model" placeholder="请输入" ></input>
      <p>{{model}}</p>
    </el-tab-pane>
    <el-tab-pane label="v-for&v-bind">
      <ul>
        <li v-for="(item,index) in list" :key="index">{{item}}</li>
      </ul>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    name: 'AboutList',
    data() {
      return {
        hello: 'Hello V-text',
        html: '<p class = "span-color" style="color: red;">hello V-HTML</p>',
        bol: true,
        radio: 1,
        model: '',
        list: ['hello', 'I am', 'v-for', '!']
      };
    },
    // methods: {
    //
    //   changeBol(bol) {
    //     bol = !bol;
    //   }
    // },
  };
</script>

<style scoped>

</style>
<ul>
  <li v-for=""></li>
</ul>
