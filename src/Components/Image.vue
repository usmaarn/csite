<template>
  <div v-show="src" class="img-wrapper" @click.self="src = null">
    <img :src="src" alt="banner" class="" />
    <a
      :href="src"
      class="generate absolute bottom-5 right-5 max-w-[100px]"
      download="Generted_APC_Poster_Card"
    >
      Download
    </a>
  </div>
  <div class="p-5 md:fixed bottom-0 right-0">
    <button @click="generate" class="generate btn">generate</button>
  </div>
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
      let capture = document.querySelector("#capture");
      capture.classList.remove('hidden');
      html2canvas(capture).then((canvas) => {
        this.src = canvas.toDataURL("image/png");
        capture.classList.add('hidden')
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.generate {
  @apply p-3 rounded-lg w-full md:w-auto bg-green-500 
    text-white capitalize;
}
.img-wrapper {
  @apply fixed z-50 top-0 left-0 w-screen h-screen bg-black/50 p-5 
    md:p-10 flex justify-center;
}
</style>
