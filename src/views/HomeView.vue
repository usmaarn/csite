<script setup>
import { RouterLink } from "vue-router";
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <section class="wrapper">
    <Navbar />
    <main>
      <h1>We Welcome you to APC Progressive Movement</h1>
      <RouterLink to="/form">
        <a className="px-10 py-5 rounded bg-green-400 font-bold">
          Generate your Poster
        </a>
      </RouterLink>
    </main>
  </section>
</template>

<style scoped lang="scss">
main {
  @apply flex-grow mt-16 max-w-[800px] mx-auto flex flex-col items-center gap-10;

  h1 {
    @apply text-center text-5xl md:text-7xl font-black text-white leading-[1.2];
  }
}
</style>
