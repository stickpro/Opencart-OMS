<template>
  <aside class="vh-100 bg-white">
    <div class="p-3 card">
      <div class="d-flex justify-content-between">
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
  </aside>
</template>

<script lang="ts" setup>

</script>
