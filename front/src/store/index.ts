import { createStore } from 'vuex';

export const SET_COUNT_TYPE = 'setCount';

export default createStore({
  state: {
    count: 0,
  },
  getters: {
    getCount: (state) => state.count,
  },
  mutations: {
    [SET_COUNT_TYPE]: (state, newValue) => {
      state.count = newValue;
    },
  },
  actions: {
    [SET_COUNT_TYPE]: ({ commit }, newValue) => {
      commit(SET_COUNT_TYPE, newValue);
    },
  },
  modules: {},
});
