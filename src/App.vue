<template>
  <ImageVue :src="img" />
  <div class="grid grid-cols-[200px,auto]">
    <MySidebar />
    <section>
      <div id="capture" class="max-w-[700px] border mx-auto space-y-5">
        <LayoutHeader />
        <LayoutMain />
        <LayoutFooter />
      </div>
    </section>
  </div>
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
  }
};
</script>

<style>

</style>
