<template>
  <toasts />
  <div class="top-right">
    <div class="attempts" :style="attemptsCtrStyle">
      {{ state.numberOfAttempts }} / {{ MAX_NUMBER_OF_ATTEMPTS }}
    </div>
    <div @click="showHelp" class="help">?</div>
  </div>
  <main>
    <div class="finish-ctr" v-if="state.finished">
      <img src="/cat.gif" />
      <h1>You did it! 🎉🎉🎉</h1>
    </div>
    <div v-else>
      <div class="characters-ctr">
        <characters
          class="characters"
          width="70%"
          height="70%"
          :number="state.n"
        />
        <spinner v-show="state.loading" class="spinner" />
      </div>
      <div class="inputs">
        <div class="numbers">
          <input type="number" class="number" v-model="state.guessDigit1" />
          <input type="number" class="number" v-model="state.guessDigit2" />
          <input type="number" class="number" v-model="state.guessDigit3" />
          <input type="number" class="number" v-model="state.guessDigit4" />
        </div>
        <btn @click="guess">Guess</btn>
      </div>
    </div>
  </main>
  <teleport to="body">
    <modal :show="state.showModal" @close="state.showModal = false">
      <template #header>
        <h3>Explanation</h3>
      </template>
      <template #body>
        <img id="help-img" src="/help.png" />
      </template>
    </modal>
  </teleport>
</template>

<script setup lang="ts">
import { onKeyStroke } from "@vueuse/core";
import confetti from "canvas-confetti";
import { randInt } from "matija-utils";
import { computed, reactive } from "vue";
import btn from "./components/btn.vue";
import characters from "./components/characters.vue";
import modal from "./components/modal.vue";
import spinner from "./components/spinner.vue";
import toasts from "./components/toasts.vue";
import { useToastStore } from "./stores";

const MAX_NUMBER_OF_ATTEMPTS = 5;
const toastStore = useToastStore();

const state = reactive({
  n: randInt(1, 9999),
  numberOfAttempts: 0,
  loading: false,
  showModal: false,
  finished: false,
  guessDigit1: "0",
  guessDigit2: "0",
  guessDigit3: "0",
  guessDigit4: "0"
});

const attemptsCtrStyle = computed(() => ({
  backgroundColor: state.finished ? "#4BB543" : "#FA7966"
}));

const generateNumber = () => {
  state.n = randInt(1, 9999);
};

const reset = () => {
  state.guessDigit1 = "0";
  state.guessDigit2 = "0";
  state.guessDigit3 = "0";
  state.guessDigit4 = "0";
};

const showHelp = () => {
  state.showModal = true;
};

const guess = () => {
  if (
    !state.guessDigit1 ||
    !state.guessDigit2 ||
    !state.guessDigit3 ||
    !state.guessDigit4
  ) {
    return;
  }
  const combined = `${state.guessDigit1}${state.guessDigit2}${state.guessDigit3}${state.guessDigit4}`;
  const parsed = parseInt(combined);
  if (combined.length > 4 || Number.isNaN(parsed)) {
    return;
  }
  if (parsed === state.n) {
    state.numberOfAttempts++;
    toastStore.add("Good job!", "#4BB543");
    if (state.numberOfAttempts === MAX_NUMBER_OF_ATTEMPTS) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      toastStore.add("You did it!", "#4BB543");
      state.finished = true;
      return;
    }
    toastStore.add("Get ready in 3, 2, 1...", "#4BB543");
    state.loading = true;
    setTimeout(() => {
      reset();
      generateNumber();
      state.loading = false;
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

.finish-ctr {
  display: flex;
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
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.number {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: var(--secondary);
  text-align: center;
  font-size: 20px;
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

#help-img {
  width: 350px;
  height: 350px;
  margin: 0 auto;
}

@media (max-width: 767px) {
  #help-img {
    width: 90%;
    height: 90%;
  }
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
