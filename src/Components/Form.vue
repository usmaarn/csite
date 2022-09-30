<template>
  <div class="cand-img space-y-2 -top-12">
    <img :src="img" alt="" class="h-32" />
    <div class="flex gap-2 items-end">
      <label for="name">Name:</label>
      <input type="text" />
    </div>
    <div class="flex gap-2 items-end">
      <label for="name">ward:</label>
      <input type="text" />
    </div>

    <div class="">
      <input type="text" class="w-full border-b-2 border-green-500" />
    </div>

    <div class="flex gap-2 items-end">
      <label for="name">polling unit:</label>
      <input type="text" />
    </div>
    <div class="flex gap-2 items-end">
      <label for="name">p.v.c no:</label>
      <input type="text" />
    </div>
    <div class="flex gap-2 items-end">
      <label for="name">phone no:</label>
      <input type="text" />
    </div>
  </div>
</template>

<script>
    export default {
        props:['img'],
    }
</script>

<style lang="scss">
    // .myapp {
    //     .cand-img{@apply w-full h-auto md:w-auto h-32}
    // }

label {
  @apply text-sm text-green-500 whitespace-nowrap uppercase;
}
.label {
  text-transform: initial;
}
input {
  @apply flex-grow border-b-2 border-green-500 w-full
    outline-0;
}
</style>
