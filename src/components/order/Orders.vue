<template>
  <aside class="vh-100 bg-white">
    <div class="p-3">
      <div class="d-flex justify-content-between mb-2">
        <h2>Заказы</h2>
        <button class="btn btn-ghost-dark">
          <v-svg name="adjustments-horizontal" width="24px" />Фильтры
        </button>
      </div>
      <div
        class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last"
      >
        <div class="input-icon">
          <span class="input-icon-addon">
            <!-- Download SVG icon from http://tabler-icons.io/i/search -->
            <v-svg name="search" width="24px" />
          </span>
          <input
            type="text"
            value=""
            class="form-control"
            placeholder="Поиск заказа по ID"
            aria-label="Search in website"
          />
        </div>
      </div>
    </div>
    <div class="card border-0" style="height: calc(100vh - 112px)">
      <div class="card-body-scrollable card-body-scrollable-shadow">
        <div class="list-group-item" v-for="order in orders" :key="order.id">
          <div class="d-flex align-items-center">
            <div class="h3">id: {{ order.id }}</div>
            <div class="ms-auto lh-1">
              {{ order.date.toLocaleDateString("en-US") }}
            </div>
          </div>
          <div class="d-flex align-items-center mb-3">
            <div class="subheader">{{ order.itmesCount }} items</div>
            <div class="ms-auto lh-1">
              {{ order.date.getTime() }}
            </div>
          </div>
          <div class="h2">
            {{ order.customesName }}
          </div>
          <div class="d-flex">
            <span class="text-green me-1 fw-bold d-inline-flex align-items-center">
              {{ order.price }}
            </span>
            <div class="vr"></div>
            <span class="font-weight-medium ms-1">
              {{ order.paymetsType }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
<script labg="ts" setup>
import { ref } from "vue";

const orders = ref([
  {
    id: 1,
    date: new Date(),
    itmesCount: 10,
    customesName: "Damilola Jones",
    price: 4573900,
    paymetsType: "Card Payment",
  },
  {
    id: 1,
    date: new Date(),
    itmesCount: 10,
    customesName: "Damilola Jones",
    price: 4573900,
    paymetsType: "Card Payment",
  },
  {
    id: 1,
    date: new Date(),
    itmesCount: 10,
    customesName: "Damilola Jones",
    price: 4573900,
    paymetsType: "Card Payment",
  },
  {
    id: 1,
    date: new Date(),
    itmesCount: 10,
    customesName: "Damilola Jones",
    price: 4573900,
    paymetsType: "Card Payment",
  },
  {
    id: 1,
    date: new Date(),
    itmesCount: 10,
    customesName: "Damilola Jones",
    price: 4573900,
    paymetsType: "Card Payment",
  },
  {
    id: 1,
    date: new Date(),
    itmesCount: 10,
    customesName: "Damilola Jones",
    price: 4573900,
    paymetsType: "Card Payment",
  },
  {
    id: 1,
    date: new Date(),
    itmesCount: 10,
    customesName: "Damilola Jones",
    price: 4573900,
    paymetsType: "Card Payment",
  },
  {
    id: 1,
    date: new Date(),
    itmesCount: 10,
    customesName: "Damilola Jones",
    price: 4573900,
    paymetsType: "Card Payment",
  },
  {
    id: 1,
    date: new Date(),
    itmesCount: 10,
    customesName: "Damilola Jones",
    price: 4573900,
    paymetsType: "Card Payment",
  },
  {
    id: 1,
    date: new Date(),
    itmesCount: 10,
    customesName: "Damilola Jones",
    price: 4573900,
    paymetsType: "Card Payment",
  },
]);
</script>
