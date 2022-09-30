<template>
  <div class="">
    <MySidebar @changeType="handleChange" />
    <section id="capture" class="myapp">
      <LayoutHeader :data="selected" />
      <LayoutMain :data="selected" />
      <LayoutFooter />
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
    @apply w-[700px] border mx-auto space-y-5;
  }
</style>
