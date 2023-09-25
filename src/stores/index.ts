import { randInt } from "matija-utils";
import { defineStore } from "pinia";
import { ref } from "vue";
import { Toast } from "../models/toast";

export const useToastStore = defineStore("toast", () => {
  const toasts = ref<Toast[]>([]);

  const add = (
    text: string,
    color: string,
    timeout = 4000,
    permanent = false
  ) => {
    const id = randInt(1, 9999);

    toasts.value.push({
      id,
      text,
      color,
      permanent
    });
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
