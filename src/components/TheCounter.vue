<template>
  <h3>{{ normalizedCounterValue }}</h3>
  <button @click="addCount()">Add 10</button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   // return this.$store.state.counter;
    //   // return this.$store.getters.getCounterValue;
    //   return this.$store.getters.normalizedCounterValue;
    // },
    ...mapGetters(['normalizedCounterValue']),
  },
  methods: {
    addCount() {
      // this.$store.commit('increase', {value: 10});
      this.$store.commit({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>
