<template>
  <main class="font-bold space-y-5">
    <section class="grid grid-cols-[220px_auto] gap-10">
      <div class="border" @click="this.$refs.input.click()">
        <img v-if="img" :src="showImage" alt="image" class="h-full" />
        <p v-else>click to upload passport</p>
        <input type="file" hidden @change="setImage" ref="input" />
      </div>

      <div class="space-y-2 relative -top-12">
        <img src="/sani1.png" alt="" class="w-52" />
        <div class="flex gap-2 items-end">
          <label for="name">Name:</label>
          <input type="text" />
        </div>
        <div class="flex gap-2 items-end">
          <label for="name">ward:</label>
          <input type="text" />
        </div>

        <div class="">
          <input
            type="text"
            class="w-full border-b-2 border-green-500"
          />
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
    </section>

    <section class="">
      <div class="flex items-end gap-1">
        <label class="whitespace-nowrap label">I'm a resident of:</label>
        <input type="text" />
      </div>
      <div class="text-green-500">
        I will <span class="text-red-500 uppercase">vote</span> for
        <span class="text-red-500 uppercase">sen. uba sani/hadiza balarabe</span>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      img: null,
    };
  },
  methods: {
    setImage(e) {
      if (e.target.files[0]) {
        this.img = e.target.files[0];
      }
    },
  },
  computed: {
    showImage() {
      return URL.createObjectURL(this.img);
    },
  },
};
</script>

<style>
label {
  @apply text-sm text-green-500 whitespace-nowrap uppercase;
}
.label{text-transform: initial}
input {
  @apply flex-grow border-b-2 border-green-500 w-full
            outline-0;
}
</style>
