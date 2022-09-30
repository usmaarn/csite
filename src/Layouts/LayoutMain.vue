<template>
  <main class="font-bold space-y-5 px-5">
    <section class="main-wrapper grid grid-cols-[220px_auto] gap-5">
      <div
        class="border border-double relative" :class="{'p-10': !img}"
        @click="this.$refs.input.click()"
      >
        <img v-if="img" :src="showImage" alt="image" class="h-full" />
        <p v-else class="text">click to upload passport</p>
        <input type="file" hidden @change="setImage" ref="input" />
      </div>
      <FormVue :img="data.img" />
    </section>

    <section class="">
      <div class="flex items-end gap-1">
        <label class="whitespace-nowrap label">I'm a resident of:</label>
        <input type="text" />
      </div>
      <div class="text-green-500">
        I will <span class="text-red-500 uppercase">vote</span> for
        <span class="text-red-500 uppercase">
          {{ data.candidate }}{{ data.vice && "/" + data.vice }}
        </span>
      </div>
    </section>
  </main>
</template>

<script>
import FormVue from "../Components/Form.vue";
export default {
  props: ["data"],
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
  components: { FormVue },
};
</script>

<style>
.myapp .main-wrapper {
  @apply flex flex-col-reverse gap-5 md:grid;

}
.text {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    text-center text-zinc-400;
}
</style>
