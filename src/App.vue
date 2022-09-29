<template>
  <div id="capture" class="max-w-[700px] border mx-auto p-5 space-y-10">
    <LayoutHeader />
    <LayoutMain />
    <LayoutFooter />
  </div>
  <button @click="generate" class="generate">gen</button>
</template>

<script>
import LayoutHeader from "./Layouts/LayoutHeader.vue";
import LayoutMain from "./Layouts/LayoutMain.vue";
import LayoutFooter from "./Layouts/LayoutFooter.vue";
import html2canvas from "html2canvas";

export default {
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutFooter,
  },
  methods: {
    generate() {
      html2canvas(document.querySelector("#capture")).then((canvas) => {
        var dataURL = canvas.toDataURL("image/png");
        let a = document.createElement('a');
        a.href = dataURL;
        a.download = 'Generted_APC_Poster_Card';
        a.click();
      });
    },
  },
};
</script>

<style>
  .generate {
    @apply fixed bottom-5 right-5 p-3 rounded-full bg-green-500 text-white;
  }
</style>
