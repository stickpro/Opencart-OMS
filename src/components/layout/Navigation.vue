<template>
  <nav class="navigation navbar-dark">
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
