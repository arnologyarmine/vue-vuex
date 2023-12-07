import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  getters: {
    getCounterValue(state) {
      return state.counter * 2;
    },
    normalizedCounterValue(_, getters) {
      const getCounterValue = getters.getCounterValue;
      if (getCounterValue < 0) {
        return 0;
      } else if (getCounterValue > 100) {
        return 100;
      } else {
        return getCounterValue;
      }
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
