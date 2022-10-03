<template>
  <NavbarVue />

  <div v-if="auth.user" class="p-5">
    <h1>All Data</h1>
    <TableVue />
  </div>

  <form v-else @submit.prevent="login">
    <h1>Login</h1>
    <input type="text" v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <button>login</button>
  </form>
</template>

<script>
import axios from "axios";
import NavbarVue from "../components/Navbar.vue";
import TableVue from "../components/Table.vue";
import useAuthStore from "../stores/auth";

export default {
  components: { NavbarVue, TableVue },
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      let data = { username: this.username, password: this.password };
      //  localStorage.setItem("csite-admin", JSON.stringify(res.data.user));
      //       this.auth.user = res.data.user;
    },
  },
  mounted() {
    
  },
};
</script>

<style scoped>
form {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            flex flex-col gap-2 p-5 bg-zinc-100 border rounded-lg;
}
input {
  @apply px-3 py-2 border outline-none rounded;
}
button {
  @apply py-2 bg-zinc-700 text-white text-center rounded font-bold;
}
</style>
