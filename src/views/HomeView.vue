<script setup>
import { RouterLink } from "vue-router";
import Navbar from "../components/Navbar.vue";
import useAuthStore from "../stores/auth";
const auth = useAuthStore();
</script>

<template>

  <section class="wrapper">

    <nav class="p-5 h-[80px] md:h-[100px] md:px-24 flex items-center bg-black/30 justify-between">
      <a href="#">
        <img src="/dattijo-logo.png" alt="" class="h-12 sm:h-16">
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-12 h-12">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
    </nav>

    <main class="p-5">
      <div class="flex flex-col justify-end md:w-3/5 ml-auto py-10 space-y-5 md:space-y-10 md:justify-center h-full">
          <h1 class="text-4xl text-center md:text-left md:text-7xl uppercase text-green-500 md:text-black font-black">
            Muhammad Sanni Abdullahi
            <span class="text-red-700">[<span class="text-green-500 md:text-black">Dattijo</span>]</span>
          </h1>
          <h3 class="text-3xl text-center md:text-left md:text-6xl font-bold text-zinc-400">Senatorial Movement</h3>
          <div class="flex flex-col md:flex-row gap-5">
            <button class="px-10 py-5 rounded bg-green-500 font-bold shadow">
              Verify Your PVC Status
            </button>
            <button
              class="px-10 py-5 rounded border border-white/60 text-white/60 hover:bg-white/60 hover:text-black font-bold shadow">
              Generate Flier
            </button>
          </div>
      </div>
    </main>
  </section>
</template>

<style scoped lang="scss">
.wrapper {

  main {
    background: linear-gradient(rgba(0, 0, 0, 0.3), black), url("/dattijo.jpeg");
    background-size: contain;
    background-position: left top;
    background-repeat: no-repeat;
    height: calc(100vh - 80px);
  }
}
</style>
