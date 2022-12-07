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
    <template>
      <div class="bg-orange-200 p-6 text-center">
        <p class="text-2xl font-bold mb-2">
          Forgot to add something to your cart? Shop around then come back to
          pay!
        </p>
        <p>Don't forget to check out our current promotions:</p>
        <div class="grid grid-cols-2 gap-4">
          <div>20% off all clothing</div>
          <div>Buy one, get one free on select items</div>
        </div>
      </div>
    </template>
  </section>
</template>

<style scoped></style>
