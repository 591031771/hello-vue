<template>
  <div class="about">
    <AboutList><h3>指令集</h3></AboutList>
    <hr>
    <Cardlist></Cardlist>

  </div>
</template>

<script>
  import AboutList from '@/components/AboutList';
  import Cardlist from '@/components/Cardlist';

  export default {
    name: 'TodoList',
    components: {
      AboutList,
      Cardlist
    },
  };
</script>
