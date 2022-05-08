<template>
  <main>
    <div class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col col-lg-2"><Orders /></div>
        <div class="col-lg-auto">
          <div class="w-100">content</div>
        </div>
        <div class="col col-lg-2">Column</div>
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
