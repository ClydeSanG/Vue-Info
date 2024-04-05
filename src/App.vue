<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
  

    <div class="">
      <nav>
        <RouterLink to="/t1">t1</RouterLink>
        <RouterLink to="/t2">t2</RouterLink>
        <RouterLink to="/t3">t3</RouterLink>
        <RouterLink to="/t4">t4</RouterLink>
        <RouterLink to="/t5">t5</RouterLink>
        <RouterLink to="/t6">t6</RouterLink>
        <RouterLink to="/t7">t7</RouterLink>
        <RouterLink to="/t8">t8</RouterLink>
        <RouterLink to="/t9">t9</RouterLink>
        <hr>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}


</style>
