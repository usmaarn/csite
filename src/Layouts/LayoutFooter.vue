<template>
    <p class="font-bold text-green-500">
        Their commitment to the
        <span class="text-[#A9C851]">People and the Nation</span>
        is how Nigeria works!
    </p>

    <div class="flex flex-wrap items-end justify-between">
        <LogoVue v-for="i in 5" :key="i" />
        <img src="/sani2.png" alt="uba sani" class="w-32" />
        <LogoVue v-for="i in 5" :key="i" />
    </div>
</template>

<script>
    import LogoVue from '../Components/Logo.vue';

    export default {
        components: {
            LogoVue
        }
    }
</script>

<style>

</style>