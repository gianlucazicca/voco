<script setup lang="ts">

const h = useHelloWorld();
const { data } = await useAsyncData('users', () => $fetch('/api/users'));
</script>

<template>
  <h1 class="text-3xl font-bold text-blue-400">Voco</h1>
  <UButton>{{h}}</UButton>
  {{data}}
</template>

<style scoped>

</style>