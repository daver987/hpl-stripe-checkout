<script lang="ts" setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css',
      integrity:
        'sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls',
      crossorigin: 'anonymous',
    },
  ],
  title: 'Cancel',
  meta: [
    {
      name: 'description',
      content: 'Cancel page',
    },
  ],
})
</script>

<template>
  <section class="min-h-screen bg-primary">
    <Navigation />
    <h2>
      Forgot to add something to your cart? Shop around then come back to pay!
    </h2>
  </section>
</template>

<style scoped></style>
