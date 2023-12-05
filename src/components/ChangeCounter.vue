<template>
  <button @click="addCount()">Add 1</button>
</template>

<script>
export default {
  methods: {
    addCount() {
      this.$store.commit('increment');
    },
  },
};
</script>
