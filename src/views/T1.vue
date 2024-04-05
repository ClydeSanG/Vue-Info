<template>
  <h3>Simple Counter</h3>

  <div id="app">
    <button @click="increment">Click to Add</button>
    <button @click="decrement">Click to Subtract</button>
    <button @click="reset">Reset</button>

    <h2>{{ count }}</h2>
    <h2>Double Count: {{ doubleCount }}</h2>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// Define reactive data with ref
const count = ref(0);

// Define watcher
watch(count, (newValue) => {
  if (newValue > 10) {
    count.value = 0; // Reset count if it exceeds 10
  }
});

// Define computed property
const doubleCount = computed(() => {
  return count.value * 2;
});

// Define methods
const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

const reset = () => {
  count.value = 0;
};
</script>
