<template>
  <toasts />
  <main>
    <h1>
      {{ n }}
    </h1>
    <characters class="characters" width="300" height="300" :number="n" />
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
import toasts from "./components/toasts.vue";
import { useToastStore } from "./stores";

const toastStore = useToastStore();

const n = ref(randInt(1, 9999));

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
    toastStore.add("Good job!", "#4BB543");
    reset();
    generateNumber();
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
  gap: 20px;
}

.inputs {
  display: flex;
  gap: 20px;
  flex-direction: column;
}

.numbers {
  display: flex;
  gap: 20px;
}

.number {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: #f5ebeb;
  text-align: center;
  font-size: 16px;
}

.characters {
  background-color: #f5ebeb6b;
  padding: 30px;
  border-radius: 12px;
}
</style>
