<template>
  <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-6">Product name</th>
          <th scope="col" class="py-3 px-6">Color</th>
          <th scope="col" class="py-3 px-6">Category</th>
          <th scope="col" class="py-3 px-6">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.name }}
          </th>
          <td class="py-4 px-6">{{ item.pvc }}</td>
          <td class="py-4 px-6">{{ item.tel }}</td>
          <td class="py-4 px-6">{{ item.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async mounted() {
    let response = await axios.get(
      "http://usmaarn-env.eba-mkxhze2r.us-east-1.elasticbeanstalk.com/api/apc/data"
    );
    let data = await response.data;
    this.items = data;
  },
  data(){
    return {items: []}
  }
};
</script>
