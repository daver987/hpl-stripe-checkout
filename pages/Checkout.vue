<script lang="ts" setup>
import { Query } from '~/types/query'
import { ReturnType } from '~/types/returnType'

const route = useRoute().query as unknown as Query
console.log(route)
const subtotal = parseFloat(route.amount)

const createSession = async () => {
  const { data } = await useFetch(`/api/create-checkout-session`, {
    query: route,
  })
  console.log(data)
  const { statusCode, url, customer } = data.value as ReturnType
  console.log(statusCode, url, customer)
  await navigateTo(url, {
    redirectCode: 303,
    external: true,
  })
  return {
    url,
    customer,
  }
}
</script>

<template>
  <div class="bg-gray-200 min-h-screen">
    <section class="py-8 w-full">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navigation @clicked:booked="createSession" />
        <Summary
          class="bg-white pt-4"
          :quoteNumber="route.quotenumber"
          :firstname="route.fname"
          :lastname="route.lname"
          :pickupDate="route.date"
          :pickupTime="route.time"
          :origin="route.origin"
          :destination="route.destination"
          :service="route.service"
          :vehicle="route.vehicle"
          :subtotal="subtotal"
          :isRoundTrip="route.roundtrip"
        />
      </div>
    </section>
  </div>
</template>
