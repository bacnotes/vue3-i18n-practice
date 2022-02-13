import { createStore } from "vuex";

export default createStore({
  state: { windowWidth: window.innerWidth },
  mutations: {
    setWindowWidth(state, value) {
      state.windowWidth = value;
    },
  },
  actions: {},
  modules: {},
});
