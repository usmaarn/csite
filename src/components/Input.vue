<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-2">
    <label for="name" class="capitalize" :class="{ 'text-red-500': false }">
      {{ label }}
    </label>
    <input
      :type="type ?? 'text'"
      v-model="dataStore.data[name]"
      :class="{ input: true, 'border-red-500': false }"
    />
    <p v-if="false" class="text-red-500 text-sm">
      <!-- {{ errorStore.errors[name] }} -->
    </p>
  </div>
</template>

<script>
import useDataStore from "../stores/data";
import useErrorStore from "../stores/error";

export default {
  props: ["name", "type", "label"],
  setup() {
    const dataStore = useDataStore();
    const errorStore = useErrorStore();
    return { dataStore, errorStore };
  },
};
</script>

<style scoped>
.error {
  @apply text-red-500 text-sm font-semibold;
}
.input {
  @apply block px-3 py-1.5 border w-full outline-none;
}
</style>
