<template>
  <div class="wrapper">
    <Navigation />
  </div>

  <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navigation from "@/components/layout/Navigation.vue";
</script>

<style lang="postcss">
@import "@/assets/base.css";

#app {
  font-weight: normal;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
