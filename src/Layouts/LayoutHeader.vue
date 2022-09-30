<template>
  <header class="flex items-start justify-between p-5">
    <div class="flex items-center logo">
      <img src="/logo.png" alt="logo" />
      <h1
        class="h1 font-[initial] uppercase text-xl leading-6 font-black text-green-500"
      >
        {{ data.username }} <br />
        <span class="text-red-500">{{ data.name }}</span> <br />
        movement
      </h1>
    </div>

    <div class="img">
      <img src="/apc-logo.jpeg" alt="apc thumbprint" class="w-32" />
    </div>
  </header>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss">
.logo {
  @apply w-24;
}
.myapp {
  .img {
    @apply hidden md:inline-flex;
  }
  .logo {
    @apply w-16 md:w-24;
  }
  .h1 {
    @apply text-base leading-5 md:text-xl md:leading-6;
  }
}
</style>
