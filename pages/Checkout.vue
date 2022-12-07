<script lang="ts" setup>
//scripts
</script>

<template>
  <section class="bg-gray-200 min-h-screen">
    <Navigation title="Checkout" />
    <div class="text-center mb-6 flex flex-col items-center px-6">
      <p class="text-black text-base font-bold mb-1 mt-4">
        We require a credit card to hold your reservation
      </p>
      <p class="text-sm text-red-700 text-center max-w-[65ch]">
        Please note, 24 hours before the scheduled pickup time, an authorization
        hold will be placed on your credit card for the full amount of your
        reservation.
      </p>
      <p class="text-base font-bold text-black">
        *Your card will not be charged until the completion of your booking
      </p>
      <p class="text-sm text-red-700">
        All prices include taxes, surcharges and gratuity
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
