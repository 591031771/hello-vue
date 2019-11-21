<template>
    <div class="todo-list">
      <ol>
        <li v-for="(item,index) in dataSource":key="index">
          <del v-if="item.done" class="">{{item.text}}</del>
          <span v-else>{{item.text}}</span>
        </li>
      </ol>
    </div>
</template>

<script>
  export default {
    name: 'Todo',
    props: {
      dataSource: Array,
    }
  };
</script>
<!--作用域scoped-->
<style scoped lang = "less">

</style>
