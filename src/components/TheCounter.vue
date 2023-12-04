<template>
  <h3>{{ counter }}</h3>
  <button @click="addCount()">Add 1</button>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addCount() {
      this.$store.state.counter++;
    },
  },
};
</script>
