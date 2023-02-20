<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>This is {{ count }}</h1>
  </div>
</template>

<script lang="ts">
import store from '../store';

export default {
  computed: {
    count() {
      return store.state.count;
    },
  },
};
</script>
