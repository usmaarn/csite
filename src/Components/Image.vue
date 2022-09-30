<template>
  <div v-show="src" class="img-wrapper" @click.self="src = null">
    <img :src="src" alt="banner" class="w-full md:w-auto md:h-full" />
    <a :href="src" class="generate" download="Generted_APC_Poster_Card">
      Download
    </a>
  </div>
  <button @click="generate" class="generate">generate</button>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  data() {
    return {
      src: null,
    };
  },
  methods: {
    generate() {
      html2canvas(document.querySelector("#capture")).then((canvas) => {
        this.src = canvas.toDataURL("image/png");
        document.body.style.height = window.innerHeight;
        document.body.style.overflowY = "hidden";
      });
    },
  },
};
</script>

<style scoped>
.generate {
  @apply fixed bottom-5 right-5 p-3 rounded-full bg-green-500 
      text-white capitalize;
}
.img-wrapper {
  @apply fixed z-50 top-0 left-0 w-screen h-screen bg-black/50 p-5 
            md:p-10 flex justify-center;
}
</style>
