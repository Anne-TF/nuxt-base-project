<template>
  <div>
    <h1 class="text-md-primary">
      Nuxt Routing set up successfully!
    </h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>

    <h3 class="text-center q-mt-md cursor-pointer" @click="counterStore.Increase()">
      Counter: {{ counterStore.n }}
    </h3>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter';

const route = useRoute();
const counterStore = useCounterStore();
</script>
