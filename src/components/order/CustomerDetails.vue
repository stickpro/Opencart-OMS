<template>
  <div class="card border-0 mt-3 bg-orange">
    <div class="card-stamp">
      <div class="card-stamp-icon bg-white text-primary">
        <v-svg name="user-circle" class="text-orange" width="24" height="24" />
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between mb-2">
        <h2>Customer Details</h2>
      </div>
      <div class="d-flex mb-2 gap-2">
        <v-svg name="at" width="16" height="16" />
        <h4>JohnDoe@customer.com</h4>
      </div>
      <div class="d-flex mb-2 gap-2">
        <v-svg name="phone" width="16" height="16" />
        <h4>7 (918) 750-9500</h4>
      </div>
      <div class="d-flex mb-2 gap-2 w-75">
        <v-svg name="map-pin" width="16" height="16" />
        <h4>14b Herbert Macaulay Way, Yaba, Lagos, Nigeria.</h4>
      </div>
    </div>
  </div>
</template>
