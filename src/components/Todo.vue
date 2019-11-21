<template>
    <div class="todo-list">
      <input type="text" v-model="todo" placeholder="请输入待完成事项" id="inputtext"></input>
      <el-button type="success" icon="el-icon-check" @click="doAdd" circle>添加</el-button>
      <br>
      <hr>
      <h3>待完成</h3>
      <ul id="ul1">
        <li v-for="(item,index) in dataSource" :key="index" v-if="!item.done">
          <el-checkbox-group v-model="item.done">
            <el-checkbox-button>{{item.data}}</el-checkbox-button>
          </el-checkbox-group>
          <br>
<!--          <el-checkbox v-model="item.done">{{item.data}}</el-checkbox>-->
        </li>
        <li v-for="(item,index) in listinput" :key="index" v-if="!item.done">
          <el-checkbox-group v-model="item.done">
            <el-checkbox-button>{{item.text}}</el-checkbox-button>
          </el-checkbox-group>
          <br>
        </li>
      </ul>
      <br>
      <hr>
      <br>
      <h3>已完成</h3>
      <ul id="ul2">
        <li v-for="(item,index) in dataSource" :key="index" v-if="item.done">
          <el-checkbox-group v-model="item.done">
            <el-checkbox-button>{{item.data}}</el-checkbox-button>
          </el-checkbox-group>
          <br>
<!--          <input type="checkbox" v-model="item.done"><del>{{item.data}}</del>-->
        </li>
        <li v-for="(item,index) in listinput" :key="index" v-if="item.done">
          <el-checkbox-group v-model="item.done">
            <el-checkbox-button>{{item.text}}</el-checkbox-button>
          </el-checkbox-group>
          <br>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'Todo',
    data() {
      return {
        todo: '',
        url: 'https://api.myjson.com/bins/1e7qym',
        listinput: []
      };
    },
    props: {
      dataSource: Array,
    },
    // async created() {
    //   // this.fetch();
    //   await this.$store.dispatch('CHECKTODOLIST', {
    //     url: this.url
    //   });
    //   this.list = this.$store.state.list;
    // },
    methods: {
      doAdd() {
        this.listinput.push({
          text: this.todo,
          done: false
        });
        this.todo = '';
      },
      // async fetch() {
      //   const { data } = await this.$http.get(this.url);
      //   this.list = data.list;
      // }
    }
  };
</script>
<!--作用域scoped-->
<style scoped lang = "less">
  #inputtext {
    padding: 10px;
    margin-left: 40%;
  }
  #ul1 {
    margin-left: 38%;
  }
  #ul2 {
    margin-left: 38%;
  }
</style>
