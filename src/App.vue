<template>
  <main>
    <characters width="300" height="300" :number="9433" />
  </main>
</template>

<script setup lang="ts">
import characters from "./components/characters.vue";
</script>

<style scoped>
.character {
  position: absolute;
}

main {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
