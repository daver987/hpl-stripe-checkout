<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://js.stripe.com/v3/',
      async: true,
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/open-props',
    },
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/open-props/normalize.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/open-props/buttons.min.css',
    },
  ],
})
</script>

<template>
  <section>
    <NuxtPage />
  </section>
</template>
<style></style>
