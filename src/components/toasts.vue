<template>
  <div class="toast-ctr">
    <div class="toast" v-for="{ text } in toasts">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const toasts = ref([
  {
    text: "toast 1"
  },
  {
    text: "toast 2"
  }
]);
</script>

<style scoped>
.toast-ctr {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  top: 5px;
  margin: 0 auto;
  left: 0;
  right: 0;
}

.toast {
  background-color: rgb(49, 124, 49);
  padding: 8px;
  border-radius: 4px;
  color: white;
  font-size: 14px;
}
</style>
