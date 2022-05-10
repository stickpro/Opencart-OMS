<template>
  <main>
    <div class="container-xl ps-0">
      <div class="row">
        <div class="col col-lg-2"><Orders /></div>
        <div class="col col-lg-10">
          <div class="w-100">content</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Orders from "@/components/order/Orders.vue";
</script>
<style lang="postcss">
main {
  margin-left: 5rem;
}
</style>
