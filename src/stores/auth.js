import { defineStore } from "pinia";
import { ref } from "vue";

const useAuthStore = defineStore("data", () => {
  let data = localStorage.getItem("csite-admin");
  data = data ? JSON.parse(data) : null;
  const user = ref(data);
  return { user };
});

export default useAuthStore;
