<template>
  <div class="sidenav">
   <select name="myitem" @change="handleChange" id="">
    <option v-for="item in list" :value="item.id" :key="item.id">
      {{ item.name }}
    </option>
   </select>
  </div>
</template>

<script>
export default {
  name: "MySidebar",
  data() {
    return {
      list: [
        {
          id: 1,
          name: "presidential",
          candidate: "tinubu",
          vice: "Shetima",
          username: "tinubu",
          img: "/bat.jpeg",
          img2: "/bat2.jpeg",
        },
        {
          id: 2,
          name: "governorship",
          candidate: "Uba Sanni",
          username: "Uba Sanni",
          vice: "hadiza balarabe",
          img: "/sani2.jpeg",
          img2: "/sani2.png",
        },
        {
          id: 3,
          name: "senatorial",
          candidate: "muhammad sani datijjo",
          username: "datijjo",
          img: "/dattijo.jpeg",
        },
        {
          id: 4,
          name: "house of rep",
          username: 'bashir',
          candidate: "Bashir Elrufai",
          img: "/bash.jpeg",
        },
      ],
    };
  },
  methods: {
    handleChange(e){
      let item = this.list.find(i => i.id == (e?.target?.value ?? 1));
      this.$emit('changeType', item)
    }
  },
  mounted(){
    this.handleChange();
  }
};
</script>

<style scoped>
.sidenav {
  @apply border-r flex justify-center gap-2 p-3;
}
button {
  @apply px-3 py-2 bg-red-200 capitalize font-bold;
}
</style>
