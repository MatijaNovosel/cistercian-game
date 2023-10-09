import { randInt } from "matija-utils";
import { defineStore } from "pinia";
import { ref } from "vue";
import { Toast } from "../models/toast";

const LIMIT = 5;

export const useToastStore = defineStore("toast", () => {
  const toasts = ref<Toast[]>([]);

  const add = (
    text: string,
    color: string,
    timeout = 4000,
    permanent = false
  ) => {
    if (toasts.value.length + 1 > LIMIT) {
      return;
    }

    const id = randInt(1, 9999);

    toasts.value.push({
      id,
      text,
      color,
      permanent
    });

    if (!permanent) {
      setTimeout(() => {
        const toastIdx = toasts.value.findIndex((t) => t.id === id);
        if (toastIdx !== -1) {
          toasts.value.splice(toastIdx, 1);
        }
      }, timeout);
    }
  };

  const remove = () => {
    //
  };

  return {
    toasts,
    add,
    remove
  };
});
