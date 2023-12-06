<template>
  <!-- <h1 class="mt-8 text-center text-6xl">Hi I am Rishav Vatsyayan</h1> -->
  <main-nav />
  <the-hero />
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import TheHero from "@/components/TheHero.vue";

export default {
  name: "App",
  components: {
    MainNav,
    TheHero,
  },
};
</script>
