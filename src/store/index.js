import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    defaultActive: "/dashboard",
    count: 0,
    vuexMapState: "vuexMapState",
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state, payload) {
      state.count -= payload.num;
    },
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: (state) => (id) => {
      let arr = [];
      arr.push(state.todos.find((todo) => todo.id === id));
      return arr;
    },
  },
  actions: {
    actionsIncrement(context) {
      console.log(context.state.count);
      console.log(context.getters.doneTodosCount);
      context.commit("increment");
    },
    actionsDecrement({ commit, state }, payload) {
      console.log(state.count);
      commit("decrement", payload);
    },
  },
  modules: {
    a: {
      state: () => ({
        aaa: 0,
      }),
      mutations: {},
      actions: {},
      getters: {},
    },
    b: {
      state: () => ({
        bbb: "bbb",
      }),
    },
  },
});
