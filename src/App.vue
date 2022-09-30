<template>
  <div class="">
    <MySidebar @changeType="handleChange" />
    <section id="capture" class="myapp max-w-[700px] mx-auto">
      <LayoutHeader :data="selected" />
      <LayoutMain :data="selected" />
      <LayoutFooter :imageUrl="selected.img2 ?? selected.img" />
    </section>
  </div>
  <ImageVue />
</template>

<script>
import LayoutHeader from "./Layouts/LayoutHeader.vue";
import LayoutMain from "./Layouts/LayoutMain.vue";
import LayoutFooter from "./Layouts/LayoutFooter.vue";
import MySidebar from "./Components/Sidebar.vue";
import ImageVue from "./Components/Image.vue";

export default {
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutFooter,
    MySidebar,
    ImageVue,
  },
  data() {
    return {
      selected: {},
    };
  },
  methods: {
    handleChange(item) {
      this.selected = item;
    },
  },
};
</script>

<style lang="scss">
  .capture {
    @apply w-[800px] border mx-auto;
    input {
      @apply text-2xl p-0 relative -bottom-2;
    }
    img.candImg{
      @apply h-48;
    }
    .candDiv, .my-sect, footer{
      @apply relative -top-10;
    }
    .my-sect{
      @apply -top-12;
    }
  }
</style>
