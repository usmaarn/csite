<template>
  <Navbar1 />
  <section className="form py-10">
    <div className="max-w-[500px] mx-auto p-5 rounded-lg border">
      <h1 className="text-xl font-bold  text-green-400 uppercase mb-5">
        Fill your Information
      </h1>
      <form @submit.prevent="submit">
        <InputComponent label="Full Name" name="name" />
        <InputComponent label="Ward" name="ward" />
        <InputComponent label="pvc number" name="pvc" />
        <InputComponent label="phone number" name="tel" />
        <InputComponent label="polling unit" name="unit" />
        <InputComponent label="residential address" name="address" />
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
import InputComponent from "../components/Input.vue";
import axios from "axios";
import useDataStore from "../stores/data";
import useErrorStore from "../stores/error";
import Navbar from "../components/Navbar.vue";
import Navbar1 from "../components/Navbar.vue";

export default {
  data() {
    return {
      loading: false,
    };
  },
  setup() {
    const dataStore = useDataStore();
    const errorStore = useErrorStore();

    return { dataStore, errorStore };
  },
  components: { InputComponent, Navbar, Navbar1 },
  methods: {
    submit() {
      this.loading = true;
      axios
        .post(
          "http://usmaarn-env.eba-mkxhze2r.us-east-1.elasticbeanstalk.com/api/apc/add",
          this.dataStore.data
        )
        .then(() => {
          this.loading = false;
          this.$router.push("/poster");
        })
        .catch((err) => {
          this.errorStore.errors = {};
          for (let error in err.response.data.errors) {
            this.errorStore.errors[error] = err.response.data.errors[error][0];
          }
          this.loading = false;
        });
    },
  },
};
</script>
