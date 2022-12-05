<script setup lang="ts">
import { Session } from '~/types/session'
import { Query } from '~/types/query'

const products = [
  {
    id: 1,
    pickupLocation: '123 Main Street, New York, USA',
    dropoffLocation: '123 Main Street, New York, USA',
    pickupDate: '2021-01-01',
    pickupTime: '9:00 AM',
    serviceType: 'Point To Point',
    vehicleType: 'Premium Sedan',
    subtotal: 99.99,
    image:
      'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/6371d7ad-ac92-4081-2fde-5e243dd2d500/1024',
  },
  {
    id: 2,
    pickupLocation: '123 Main Street, New York, USA',
    dropoffLocation: '123 Main Street, New York, USA',
    pickupDate: '2021-01-01',
    pickupTime: '9:00 AM',
    serviceType: 'Point To Point',
    vehicleType: 'Premium Sedan',
    subtotal: 99.99,
    image:
      'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/8463024a-c98a-4bf2-57a2-5fa3d6454200/1024',
  },
]
const total = computed(() => {
  return products.reduce((acc, product) => acc + product.subtotal, 0)
})
const route = useRoute().query as unknown as Query
const { email, fname, lname, service, amount, quote } = route

const createSession = async () => {
  const { data } = await useFetch(`/api/create-checkout-session`, {
    query: {
      email,
      fname,
      lname,
      service,
      amount,
      quote,
    },
  })

  type ReturnType = {
    statusCode: number
    url: string
    customer: string
  }
  const { statusCode, url, customer } = data.value as ReturnType
  console.log(statusCode, url, customer)
  navigateTo(url, {
    redirectCode: 303,
    external: true,
  })
  return url
}
</script>

<template>
  <div
    class="bg-white max-w-6xl mx-auto bg-white rounded-2xl shadow-lg px-6 pt-6 pb-2"
  >
    <TableRow
      v-for="product in products"
      :key="product.id"
      :image="product.image"
      :alt="product.serviceType"
      :subtotal="product.subtotal"
      :pickupLocation="product.pickupLocation"
      :dropoffLocation="product.dropoffLocation"
      :pickupDate="product.pickupDate"
      :pickupTime="product.pickupTime"
      :serviceType="product.serviceType"
      :vehicleType="product.vehicleType"
    />
    <div class="w-full p-4 border-b flex justify-end">
      <div class="font-bold text-2xl">
        Total: <span>${{ total }}</span>
      </div>
    </div>
    <form
      @submit.prevent="createSession"
      class="grid grid-cols-1 gap-4 place-items-center p-4"
    >
      <div>
        <button
          class="px-12 py-2 bg-red-600 uppercase font-bold tracking-wider font-sans rounded-md text-white"
          type="submit"
          id="checkout-button"
        >
          Book Now
        </button>
      </div>
    </form>
  </div>
</template>
