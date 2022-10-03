import { defineStore } from "pinia";
import { ref } from "vue";

export const cands = [
  {
    id: 1,
    name: "presidency",
    candidate: "bola tinubu",
    vice: "Shettima",
    username: "bola tinubu",
    post: "President",
    vicePost: 'vice president',
    img: "/bat.jpeg",
    img2: "/bat2.jpeg",
  },
  {
    id: 2,
    name: "governorship",
    candidate: "Uba Sanni",
    post: "Governor",
    vicePost: 'Deputy Governor',
    username: "Uba Sanni",
    vice: "hadiza balarabe",
    img: "/sani2.jpeg",
    img2: "/sani2.png",
  },
  {
    id: 3,
    name: "senatorial",
    candidate: "muhammad sani datijjo",
    username: "sani datijjo",
    post: "Senator (Kaduna Central)",
    img: "/dattijo.jpeg",
  },
  {
    id: 4,
    name: "house of rep",
    username: "bello elrufai",
    candidate: "bello Elrufai",
    post: "Member of House of Representative",
    img: "/bash.jpeg",
  },
];

const useDataStore = defineStore("data", () => {
  const cand = ref(cands);
  const data = ref({
    name: "",
    ward: "",
    pvc: "",
    tel: "",
    unit: "",
    address: "",
  });
  return { data, cand };
});

export default useDataStore;
