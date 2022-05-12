<template>
  <main>
    <div class="container-xl ps-0">
      <div class="row">
        <div class="col col-lg-2"><Orders /></div>
        <div class="col col-lg-10">
          <div class="row">
            <div class="col-lg-8">
              <OrderItems />
            </div>
            <div class="col-lg-4">
              <OrderOwerview />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Orders from "@/components/order/Orders.vue";
import OrderItems from "@/components/order/OrderItems.vue";
import OrderOwerview from "@/components/order/OrderOwerview.vue";
</script>
<style lang="postcss">
main {
  margin-left: 5rem;
}
</style>
