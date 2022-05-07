<template>
  <nav class="navigation">
    <ul>
      <li>
        <a href="">
          <v-svg name="home" width="32" height="32" />
          Home</a
        >
      </li>
      <li>
        <a href=""> <v-svg name="order" width="32" height="32" />Orders</a>
      </li>
      <li>
        <a href=""> <v-svg name="delivery" width="32" height="32" />Delivery</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>
<style lang="postcss">
.navigation {
  width: 5rem;
  position: fixed;
  height: 100vh;
  background: linear-gradient(
    316.16deg,
    #e73959 34.86%,
    #e73d58 48.43%,
    #e74955 62.6%,
    #e95e51 76.93%,
    #ea7b4b 91.41%,
    #eda044 105.89%,
    #efce3b 120.53%,
    #f0d43a 122.21%
  );
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 0;
    li {
      margin: 1rem 0;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        font-weight: 700;
        color: var(--cl-white);
      }
    }
  }
}
.navigation ul {
}
</style>
