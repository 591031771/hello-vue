<template>
  <div>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item>
      <img src="../assets/1.jpg" class="carousel_image_type">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/2.jpg" class="carousel_image_type">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/3.jpg" class="carousel_image_type">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/4.jpg" class="carousel_image_type">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/5.jpg" class="carousel_image_type">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/6.jpg" class="carousel_image_type">
    </el-carousel-item>
  </el-carousel>
  <br>
  <hr>
  <h2>你已经完成的事项</h2>
  <el-col :span="8">
    <el-card shadow="hover" v-for="(item,index) in list" :key="index" v-if="item.done" class="elcard">
      {{item.data}}
    </el-card>
  </el-col>
  </div>
</template>

<script>
  export default {
    name: 'Create',
    data() {
      return {
        url: 'https://api.myjson.com/bins/1e7qym',
        list: []
      };
    },
    async created() {
      // this.fetch();
      await this.$store.dispatch('CHECKTODOLIST', {
        url: this.url
      });
      this.list = this.$store.state.list;
    },
  };
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .carousel_image_type{
    width: 100%;
    height: 100%;
  }

  .elcard{
    width: 50%;
  }
</style>
