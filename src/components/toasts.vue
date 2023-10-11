<template>
  <transition-group name="list" tag="div" class="toast-ctr">
    <div
      class="toast"
      v-for="{ text, id, color } in toasts"
      :key="id"
      :style="{
        backgroundColor: color
      }"
    >
      {{ text }}
    </div>
  </transition-group>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useToastStore } from "../stores";

const toastStore = useToastStore();
const { toasts } = storeToRefs(toastStore);
</script>

<style scoped>
.toast-ctr {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  top: 5px;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 999;
}

.toast {
  padding: 5px 12px;
  border-radius: 4px;
  color: white;
  font-size: 18px;
}
</style>
