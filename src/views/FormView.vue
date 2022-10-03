<template>
  <Navbar1 />
  <section className="form py-10">
    <div className="max-w-[500px] mx-auto p-5 rounded-lg border">
      <h1 className="text-xl font-bold  text-green-400 uppercase mb-5">
        Fill your Information
      </h1>
      <form @submit.prevent="submit">
        <p v-if="error" class="text-red-500">{{ error }}</p>
        <input
          required
          :disabled="loading"
          placeholder="Full Name"
          v-model="info.name"
          minlength="7"
        />
        <input
          required
          :disabled="loading"
          placeholder="Ward"
          v-model="info.ward"
        />
        <input
          required
          :disabled="loading"
          placeholder="pvc number"
          v-model="info.pvc"
        />
        <input
          required
          :disabled="loading"
          placeholder="phone number"
          v-model="info.tel"
          pattern="^0[789][01][0-9]{8}"
        />
        <input
          required
          :disabled="loading"
          placeholder="polling unit"
          v-model="info.unit"
        />
        <input
          required
          :disabled="loading"
          placeholder="residential address"
          v-model="info.address"
          minlength="5"
        />
        <button
          :disabled="loading"
          :class="{ btn: true, 'cursor-not-allowed opacity-40': loading }"
        >
          submit
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import Navbar1 from "../components/Navbar.vue";
import { addUser } from "../helper/firebase";
import useDataStore from "../stores/data";

export default {
  setup() {
    const store = useDataStore();
    return { store };
  },
  data() {
    return {
      loading: false,
      error: null,
      info: {
        name: "",
        ward: "",
        pvc: "",
        tel: "",
        unit: "",
        address: "",
      },
    };
  },
  components: { Navbar1 },
  methods: {
    submit() {
      // this.loading = true;
      addUser(this.info)
        .then(() => {
          this.store.data = this.info;
          this.$router.push("/poster");
        })
        .catch((err) => (this.error = err.message));
    },
  },
};
</script>

<style scoped>
form {
  @apply flex flex-col gap-5;
}
input {
  @apply px-3 py-2 rounded border;
}
</style>
