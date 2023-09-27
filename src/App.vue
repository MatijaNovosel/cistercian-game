<template>
  <toasts />
  <main>
    <h1>
      {{ n }}
    </h1>
    <characters width="300" height="300" :number="n" />
    <div class="inputs">
      <input v-model="guessNumber" />
      <button @click="guess">Guess</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { randInt } from "matija-utils";
import { ref } from "vue";
import characters from "./components/characters.vue";
import toasts from "./components/toasts.vue";

const n = ref(randInt(1, 9999));
const guessNumber = ref<string | null | undefined>("");

const generateNumber = () => {
  n.value = randInt(1, 9999);
};

const guess = () => {
  if (guessNumber.value === "" || !guessNumber.value) {
    return;
  }
  console.log("bruh");
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  gap: 40px;
}

.inputs {
  display: flex;
  gap: 20px;
}
</style>
