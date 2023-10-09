<template>
  <toasts />
  <div class="top-right">
    <div class="attempts" :style="attemptsCtrStyle">
      {{ numberOfAttempts }} / {{ MAX_NUMBER_OF_ATTEMPTS }}
    </div>
    <div @click="showHelp" class="help">?</div>
  </div>
  <main>
    <div v-if="finished">
      <h1>You did it! 🎉🎉🎉</h1>
    </div>
    <div v-else>
      <div class="characters-ctr">
        <characters class="characters" width="300" height="300" :number="n" />
        <spinner v-show="loading" class="spinner" />
      </div>
      <div class="inputs">
        <div class="numbers">
          <input class="number" v-model="guessDigit1" />
          <input class="number" v-model="guessDigit2" />
          <input class="number" v-model="guessDigit3" />
          <input class="number" v-model="guessDigit4" />
        </div>
        <btn @click="guess">Guess</btn>
      </div>
    </div>
  </main>
  <teleport to="body">
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Explanation</h3>
      </template>
      <template #body>
        <img width="350" height="350" src="/help.jpg" />
      </template>
    </modal>
  </teleport>
</template>

<script setup lang="ts">
import { onKeyStroke } from "@vueuse/core";
import confetti from "canvas-confetti";
import { randInt } from "matija-utils";
import { computed, ref } from "vue";
import btn from "./components/btn.vue";
import characters from "./components/characters.vue";
import modal from "./components/modal.vue";
import spinner from "./components/spinner.vue";
import toasts from "./components/toasts.vue";
import { useToastStore } from "./stores";

const MAX_NUMBER_OF_ATTEMPTS = 5;

const toastStore = useToastStore();

const n = ref(randInt(1, 9999));
const numberOfAttempts = ref(0);
const loading = ref(false);
const showModal = ref(false);
const finished = ref(false);

const guessDigit1 = ref<string | null | undefined>("0");
const guessDigit2 = ref<string | null | undefined>("0");
const guessDigit3 = ref<string | null | undefined>("0");
const guessDigit4 = ref<string | null | undefined>("0");

const attemptsCtrStyle = computed(() => ({
  backgroundColor: finished.value ? "#4BB543" : "#FA7966"
}));

const generateNumber = () => {
  n.value = randInt(1, 9999);
};

const reset = () => {
  guessDigit1.value = "0";
  guessDigit2.value = "0";
  guessDigit3.value = "0";
  guessDigit4.value = "0";
};

const showHelp = () => {
  showModal.value = true;
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
    if (numberOfAttempts.value === MAX_NUMBER_OF_ATTEMPTS) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      toastStore.add("You did it!", "#4BB543");
      finished.value = true;
      return;
    }
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
  right: 25px;
  top: 25px;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.attempts {
  background-color: var(--primary);
  padding: 10px;
  border-radius: 10px;
  color: white;
  user-select: none;
}

.help {
  color: white;
  background-color: var(--secondary);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;
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
