
<template>
    <div class="todo-list">
      Todo-List
      <TodoLists :data-source="list"><h3>TodoLists</h3></TodoLists>
<!--      <TodoLists></TodoLists>-->
    </div>

</template>

<script>

  // 导入组件
  // eslint-disable-next-line import/no-self-import
  import TodoLists from '@/components/Todo';

  export default {
      name: 'TodoList',
      components: {
        TodoLists
      },
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
  methods: {

  }
  };
</script>

<style scoped>

</style>
