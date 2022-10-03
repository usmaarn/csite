import { defineStore } from "pinia";
import { ref } from "vue";

const useErrorStore = defineStore("error", () => {
  let errors = ref({});

  return { errors };
});

export default useErrorStore;
