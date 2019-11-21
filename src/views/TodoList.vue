
<template>
    <div class="todo-list">
      Todo-List
      <TodoLists :data-source="list">TodoLists</TodoLists>
    </div>

</template>

<script>

  // 导入组件
  // eslint-disable-next-line import/no-self-import
  import TodoLists from '@/components/TodoList';

  export default {
    name: 'TodoList',
    components: {
      TodoLists
    },
    data() {
      return {
        url: 'https://api.myjson.com/bins/1fe19e',
        list: []
      };
    },
    created() {
      this.fetch();
    },
    methods: {
      async fetch() {
        const { data } = await this.$http.get(this.url);
        this.data = data.list;
      }
    }
  };
</script>

<style scoped>

</style>
