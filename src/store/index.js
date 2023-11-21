import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});
const store = createStore({
  state: {
    perfume: false,
    eyeliner: false,
    customProduct: false,
    chanel: false,
    inglot: false,
  },
  mutations: {
    updatePerfume(state, payload) {
      state.perfume = payload;
    },
    updateEyeliner(state, payload) {
      state.eyeliner = payload;
    },
    updateCustomProduct(state, payload) {
      state.customProduct = payload;
    },
    updateChanel(state, payload) {
      state.chanel = payload;
    },
    updateInglot(state, payload) {
      state.inglot = payload;
    },
  },
  plugins: [vuexLocal.plugin],
});

export default store;
