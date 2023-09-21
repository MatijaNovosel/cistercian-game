<template>
  <main>
    <h1>
      {{ n }}
    </h1>
    <characters width="300" height="300" :number="n" />
    <button @click="change">Change</button>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import characters from "./components/characters.vue";

const n = ref(9433);

const change = () => {
  n.value++;
};
</script>

<style scoped>
main {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  gap: 40px;
}
</style>
