<template>
  <footer class="overflow-hidden">
    <p class="font-bold text-green-500 px-5 pb-5">
      Their commitment to the
      <span class="text-[#A9C851]">People and the Nation</span>
      is how Nigeria works!
    </p>

    <div class="my-foot flex flex-wrap items-end justify-between px-5">
      <LogoVue v-for="i in 5" :key="i" />
      <img :src="imageUrl" alt="uba sani" class="h-24 w-32" />
      <LogoVue v-for="i in 5" :key="i" />
    </div>
    <div class="grid grid-cols-3 bg-gradient-to-r from-red-400 to-blue-400">
      <div class="p-2 bg-red-400 -skew-x-12"></div>
      <div class="p-2 bg-green-400 -skew-x-12"></div>
      <div class="p-2 bg-blue-400 -skew-x-12"></div>
    </div>
  </footer>
</template>

<script>
import LogoVue from "../Components/Logo.vue";

export default {
  props: ['imageUrl'],
  components: {
    LogoVue,
  },
};
</script>

<style lang="scss">
.myapp{
  .my-foot{
    @apply hidden md:flex;
  }
}
</style>
