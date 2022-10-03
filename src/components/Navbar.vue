<template>
  <header>
    <nav class="p-2 md:p-5 flex items-center justify-between">
      <RouterLink to="/">
        <a className="flex items-center gap-2 scale-75 md:scale-100 ">
          <div className="bg-white rounded p-1">
            <img src="/logo.png" alt="" class="w-16" />
          </div>
          <h1 className="uppercase font-black text-lg leading-5 hidden sm:block">
            <span className="tracking-normal text-green-400"
              >tinubu/shetima</span
            ><br />
            <span className="tracking-[0.21rem] text-blue-400">presidency</span
            ><br />
            <span className="tracking-[0.5rem] text-red-100 movement"
              >movement</span
            >
          </h1>
        </a>
      </RouterLink>

      <div class="">
        <button class="btn" v-if="auth.user" @click="logout">logout</button>
        <RouterLink to="/data" class="btn" v-else>login</RouterLink>
      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
import useAuthStore from "../stores/auth";
export default {
  components: { RouterLink },
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  methods: {
    logout() {
      localStorage.removeItem("csite-admin");
      this.auth.user = null;
    },
  },
};
</script>

<style scoped>
.btn {
  @apply px-5 text-base py-2;
}
</style>
