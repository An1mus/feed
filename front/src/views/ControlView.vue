<template>
  <div class="about">
    <button
      @click="increment(count + 1)"
    >
      Increment
    </button>
  </div>
</template>

<script lang="ts">
import store, { SET_COUNT_TYPE } from '../store';

export default {
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    increment: (value: number) => {
      store.commit(SET_COUNT_TYPE, value);
    },
  },
};
</script>
