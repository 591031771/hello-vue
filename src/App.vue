<template>
  <div id="app">
    <div id="nav">
      <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" >
      <el-menu-item index="1">
        <router-link to="/">登录</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/about">指令集</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/todo">todo</router-link>
      </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/create">create</router-link>
        </el-menu-item>
    </el-menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 1
      };
    }
    // methods: {
    //   goToNewPage() {
    //     this.$router.push({
    //       path: '/todo',
    //     });
    //   }
    // },
  };

</script>

<style>
    a {
      text-decoration: none;
    }

    .router-link-active {
      text-decoration: none;
    }

  .el-menu{
    font-weight: bolder;
    margin-left: 40%;
  }
  #nav{
    margin-left: 40%;
  }
</style>
