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
  <div>
    <NuxtPage />
  </div>
</template>
