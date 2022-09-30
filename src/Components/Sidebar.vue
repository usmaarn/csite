<template>
  <div class="sidenav">
    <button>presidential</button>
    <button>governorship</button>
    <button>senatorial</button>
    <button>house of assembly</button>
  </div>
</template>

<script>
export default {
  name: "MySidebar",
  data() {
    return {
        list: [
            {id: 1, name: 'presidential', candidate: 'Tinubu', vice: 'Shetima', img: '/sani1.png'},
            {id: 2, name: 'governorship', candidate: 'Tinubu', vice: 'Shetima', img: '/sani1.png'},
            {id: 3, name: 'senatorial', candidate: 'Tinubu', vice: 'Shetima', img: '/sani1.png'},
            {id: 4, name: 'presidential', candidate: 'Tinubu', vice: 'Shetima', img: '/sani1.png'},
        ]
    }
  }
};
</script>

<style scoped>
.sidenav {
  @apply max-w-[200px] h-screen sticky top-0 border-r flex flex-col 
        justify-center gap-2 p-3;
}
button {
  @apply px-3 py-2 bg-red-200 capitalize font-bold;
}
</style>
