<script lang="ts" setup>
//scripts
</script>

<template>
  <section class="px-6 bg-gray-200 min-h-screen py-8">
    <Navigation />
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold mb-3">Checkout</h1>
      <p class="text-gray-500 mb-1">
        Please review your order before proceeding to checkout
      </p>
      <p class="text-base text-red-700">
        All prices include taxes, surcharges and gratuity **extra charges may
        apply
      </p>
      <p class="text-sm text-red-700">
        **Does not include hwy tolls, parking fees, or any extra fees incurred
        during the trip
      </p>
    </div>
    <CheckoutCard />
  </section>
</template>

<style scoped></style>
