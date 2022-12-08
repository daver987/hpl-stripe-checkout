<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://js.stripe.com/v3/',
      async: true,
    },
  ],
})
</script>

<template>
  <section class="bg-gray-200">
    <NuxtPage />
  </section>
</template>
