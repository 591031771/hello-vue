<template>
  <div class="home">
    <el-input  placeholder="请输入内容" v-model="form.username" clearable class="userName" style="width: 200px"></el-input>
    <br>
    <el-input placeholder="请输入密码" v-model="form.password" show-password class="password" style="width: 200px"></el-input>
    <br>
    <el-button type="primary" icon="el-icon-edit" @click="HandleClick">登录</el-button>
    <p>注：账号=密码</p>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {},
  data() {
    return {
      form: {
        username: '',
        password: '',
      }
    };
  },
  // created() {
  //   this.init();
  // },
  methods: {
    HandleClick() {
      if (this.form.username === '' || this.form.password === '') {
        this.$message.warning('用户名或密码不能为空');
      } else if (this.form.username !== this.form.password) {
        this.$message.warning('用户密码错误');
      } else {
        this.$router.push({
          path: '/about',
        });
      }
    }
  }
};
</script>

<style>
  .home{
    margin-left: 40%;
  }
</style>
