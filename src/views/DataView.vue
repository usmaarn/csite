<template>
  <NavbarVue />

  <div v-if="auth.user" class="p-5">
    <h1>All Data</h1>
    <TableVue />
  </div>

  <form v-else @submit.prevent="login">
    <h1>Login</h1>
    <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
    <input type="text" v-model="user.username" placeholder="Username" required />
    <input type="password" v-model="user.password" placeholder="Password" required />
    <button>login</button>
  </form>
</template>

<script>
import NavbarVue from "../components/Navbar.vue";
import TableVue from "../components/Table.vue";
import { getAuth } from "../helper/firebase";
import useAuthStore from "../stores/auth";

export default {
  components: { NavbarVue, TableVue },
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    async login() {
      let {user} = await getAuth(this.user);
      if (user) {
        localStorage.setItem('csite-admin', JSON.stringify(user))
        return this.auth.user = user;
      }
      return this.error = "Invalid Credentials";
    },
  },
  mounted() {},
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
