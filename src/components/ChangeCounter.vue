<template>
  <button @click="addCount()">Add 2</button>
</template>

<script>
export default {
  methods: {
    addCount() {
      this.$store.dispatch('increment');
    },
  },
};
</script>
