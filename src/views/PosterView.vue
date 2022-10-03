<template>
  <div className="poster-page-select">
    <label htmlFor="cand">Candidate</label>
    <select class="capitalize text-center" @change="handleChange">
      <option v-for="item in dataStore.cand" :key="item.id" :value="item.id">
        {{ item.candidate }}
      </option>
    </select>
  </div>
  <div className="poster-wrapper" ref="flier">
    <div className="sub-wrapper">
      <div className="p-5">
        <div className="absolute w-full h-full overflow-hidden opacity-10">
          <img :src="data.img" className="object-cover w-full h-full" />
        </div>
        <div className="flex items-start justify-between z-50">
          <div className="flex items-center">
            <img :src="data.img" class="h-16" />
            <h1 className="logo-text">
              <p className="text-green-500">{{ data.candidate }}</p>
              <p className="text-red-500">{{ data.name }}</p>
              <p className="text-blue-500">movement</p>
            </h1>
          </div>
          <img src="/apc-logo.jpeg" class="w-32" />
        </div>

        <div className="grid grid-cols-5 z-10 pt-5 gap-5">
          <div class="col-span-2">
            <div className="avatar-wrapper" @click="this.$refs.input.click()">
              <input type="file" hidden @change="handleClick" ref="input" />
              <img v-if="image" :src="imageUrl" />
              <span v-else>click here to upload image</span>
            </div>
          </div>
          <div className="col-span-3 flex flex-col items-center">
            <p className="my-name-is">My name is</p>
            <h1 className="name">{{ dataStore.data.name }}</h1>
            <h3 className="i-will-vote">and i will vote</h3>
            <h3 className="candidate space-x-2">
              <span>{{ data.candidate }}</span>
              <span v-if="data.vice">&</span>
              <span>{{ data.vice }}</span>
            </h3>

            <h1 className="post">
              <span className="as">as</span>
              <div>
                <p class="tracking-widest">{{ data.post }}</p>
                <p v-if="data.vicePost">{{ data.vicePost }}</p>
              </div>
              <span v-if="data.vicePost">&</span>
            </h1>

            <div class="">
              <p className="text-lg text-zinc-700">
                Their commitment to the People and the Nation is how Nigeria
                works!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-center pb-10">
    <button @click="download" class="download-btn">Download Flier</button>
  </div>
</template>

<script>
import useDataStore from "../stores/data";
import html2canvas from "html2canvas";

export default {
  mounted() {
    if (!this.dataStore.data.name) {
      return this.$router.push("/form");
    }
  },
  setup() {
    const dataStore = useDataStore();
    return { dataStore };
  },
  data() {
    return {
      data: this.dataStore.cand[0],
      image: null,
    };
  },
  methods: {
    handleChange(e) {
      let selected = this.dataStore.cand.find((c) => c.id == e.target.value);
      this.data = selected;
    },
    handleClick(e) {
      let file = e.target.files[0];
      if (file.type.startsWith("image/")) this.image = file;
    },
    download() {
      const flier = this.$refs.flier;
      flier.classList.add("flier");
      html2canvas(flier).then((canvas) => {
        // return document.body.append(canvas);
        let a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.download = this.dataStore.data.name + Date.now();
        a.click();
        flier.classList.remove("flier");
      });
    },
  },
  computed: {
    imageUrl() {
      return this.image && URL.createObjectURL(this.image);
    },
  },
};
</script>
