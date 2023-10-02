<template>
  <toasts />
  <div class="top-right">
    {{ numberOfAttempts }} / {{ MAX_NUMBER_OF_ATTEMPTS }}
  </div>
  <main>
    <h1>
      {{ n }}
    </h1>
    <div class="characters-ctr">
      <characters class="characters" width="300" height="300" :number="n" />
      <spinner v-show="loading" class="spinner" />
    </div>
    <div class="inputs">
      <div class="numbers">
        <input ref="digit1" class="number" v-model="guessDigit1" />
        <input ref="digit2" class="number" v-model="guessDigit2" />
        <input ref="digit3" class="number" v-model="guessDigit3" />
        <input ref="digit4" class="number" v-model="guessDigit4" />
      </div>
      <btn @click="guess">Guess</btn>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onKeyStroke } from "@vueuse/core/index.cjs";
import { randInt } from "matija-utils";
import { ref } from "vue";
import btn from "./components/btn.vue";
import characters from "./components/characters.vue";
import spinner from "./components/spinner.vue";
import toasts from "./components/toasts.vue";
import { useToastStore } from "./stores";

const MAX_NUMBER_OF_ATTEMPTS = 5;

const toastStore = useToastStore();

const n = ref(randInt(1, 9999));
const numberOfAttempts = ref(0);
const loading = ref(false);

const guessDigit1 = ref<string | null | undefined>("0");
const guessDigit2 = ref<string | null | undefined>("0");
const guessDigit3 = ref<string | null | undefined>("0");
const guessDigit4 = ref<string | null | undefined>("0");

const generateNumber = () => {
  n.value = randInt(1, 9999);
};

const reset = () => {
  guessDigit1.value = "0";
  guessDigit2.value = "0";
  guessDigit3.value = "0";
  guessDigit4.value = "0";
};

const guess = () => {
  if (
    !guessDigit1.value ||
    !guessDigit2.value ||
    !guessDigit3.value ||
    !guessDigit4.value
  ) {
    return;
  }
  const combined = `${guessDigit1.value}${guessDigit2.value}${guessDigit3.value}${guessDigit4.value}`;
  const parsed = parseInt(combined);
  if (combined.length > 4 || Number.isNaN(parsed)) {
    return;
  }
  if (parsed === n.value) {
    numberOfAttempts.value++;
    toastStore.add("Good job!", "#4BB543");
    toastStore.add("Get ready in 3, 2, 1...", "#4BB543");
    loading.value = true;
    setTimeout(() => {
      reset();
      generateNumber();
      loading.value = false;
    }, 3000);
  } else {
    toastStore.add("Nope!", "#f23333");
  }
};

onKeyStroke("Enter", (e) => {
  e.preventDefault();
  guess();
});
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
}

.inputs {
  margin-top: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
}

.numbers {
  display: flex;
  gap: 20px;
}

.number {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: var(--secondary);
  text-align: center;
  font-size: 24px;
  color: white;
}

.characters {
  background-color: var(--accent);
  padding: 30px;
  border-radius: 12px;
}

.top-right {
  position: fixed;
  background-color: var(--primary);
  color: white;
  right: 25px;
  top: 25px;
  padding: 10px;
  border-radius: 10px;
}

.spinner {
  position: absolute;
  margin-right: 32px;
}

.characters-ctr {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
</style>
