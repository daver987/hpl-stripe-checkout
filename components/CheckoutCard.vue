<script setup lang="ts">
import { Query } from '~/types/query'
import { ReturnType } from '~/types/returnType'

const vehicleImage = {
  cadillacEscalade:
    'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/6371d7ad-ac92-4081-2fde-5e243dd2d500/1024',
  cadillacXts:
    'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/8cdff651-33c3-419a-7767-3987d0c0a400/1024',
  suburban:
    'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/8463024a-c98a-4bf2-57a2-5fa3d6454200/1024',
  navigator:
    'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/07179b76-48f0-4854-fcc2-ba5bf8a9fc00/1024',
  continental:
    'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/b5639f0e-7c29-427f-4d5b-aa8d3ef01e00/1024',
}
//take the vehicle query and compare it against the vehicle image object return the image url that goes with the vehicle the Standard Sedan is the cadillacXts, the StandardSuv is the suburban, the Premium Sedan is the continental, and the premium SUV is the navigator
const vehicleImageURL = (vehicle: string) => {
  switch (vehicle) {
    case 'Standard Sedan':
      return vehicleImage.cadillacXts
    case 'Standard SUV':
      return vehicleImage.suburban
    case 'Premium Sedan':
      return vehicleImage.continental
    case 'Premium SUV':
      return vehicleImage.navigator
    default:
      return vehicleImage.cadillacXts
  }
}
const route = useRoute().query as unknown as Query
console.log(route)

const {
  email,
  fname,
  lname,
  service,
  amount,
  origin,
  destination,
  vehicle,
  quote,
  date,
  time,
  phone,
} = route

//take the amount query and remove the commas and dollar signs and return a number with 2 decimal places
const amountNumber = Number(amount.replace(/[^0-9.-]+/g, ''))
const amountFormatted = amountNumber.toFixed(2) as unknown as number

const selectedVehicle = vehicleImageURL(vehicle)

const products = [
  {
    id: quote,
    pickupLocation: origin,
    dropoffLocation: destination,
    pickupDate: date,
    pickupTime: time,
    serviceType: service,
    vehicleType: vehicle,
    subtotal: amountFormatted,
    image: selectedVehicle,
  },
]

const createSession = async () => {
  const { data } = await useFetch(`/api/create-checkout-session`, {
    query: {
      email,
      fname,
      lname,
      service,
      vehicle,
      date,
      time,
      origin,
      destination,
      amount,
      quote,
      phone,
    },
  })
  console.log(data)

  const { statusCode, url, customer } = (await data.value) as ReturnType
  console.log(statusCode, url, customer)
  await navigateTo(url, {
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
        Total: <span>${{ amountFormatted }}</span>
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
    <!--    <a-->
    <!--      class="px-5 py-1.5 bg-green-700"-->
    <!--      href="http://localhost:3000?amount=34.78"-->
    <!--      >Change Url</a-->
    <!--    >-->
  </div>
</template>
