import Vue from 'vue';
import Vuex from 'vuex';
import {CHECKTODOLIST} from './mutations-type';
import {queryTodoListData} from '../service/todoService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
  },
  mutations: {
    [CHECKTODOLIST](state, data) {
      //  赋值
      state.list = data.list;
    },
  },
  actions: {
    async [CHECKTODOLIST]({commit}, info) {
      // 数据提交
      // 数据从dispatch来
      const { data } = await queryTodoListData(info.url);
      commit(CHECKTODOLIST, data);
    },
  },
  modules: {
  },
});
