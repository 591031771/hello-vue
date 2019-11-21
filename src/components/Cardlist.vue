<template>
  <div>
    <el-col :span="8">
      <el-card shadow="hover" v-for="(item,index) in list" :key="index" class="elcard">
        <h2>{{item.title}}</h2>
        <br>
        <p>{{item.text}}</p>
      </el-card>
      <br>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: 'Cardlist',
    data() {
      return {
        url: 'https://api.myjson.com/bins/rh172',
        list: []
      };
    },
    created() {
      this.fetch();
    },
    methods: {
      async fetch() {
        const { data } = await this.$http.get(this.url);
        this.list = data.cardlist;
      }
    }
  };
</script>

<style scoped>
  .elcard{
    width: 150%;
    text-align: center;
    margin-left: 70%;
  }
</style>
