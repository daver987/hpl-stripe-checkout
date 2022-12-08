<script lang="ts" setup>
import { Query } from '~/types/query'
import { ReturnType } from '~/types/returnType'

// const vehicleImage = {
//   cadillacEscalade:
//     'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/6371d7ad-ac92-4081-2fde-5e243dd2d500/1024',
//   cadillacXts:
//     'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/8cdff651-33c3-419a-7767-3987d0c0a400/1024',
//   suburban:
//     'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/8463024a-c98a-4bf2-57a2-5fa3d6454200/1024',
//   navigator:
//     'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/07179b76-48f0-4854-fcc2-ba5bf8a9fc00/1024',
//   continental:
//     'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/b5639f0e-7c29-427f-4d5b-aa8d3ef01e00/1024',
// }
// //take the vehicle query and compare it against the vehicle image object return the image url that goes with the vehicle the Standard Sedan is the cadillacXts, the StandardSuv is the suburban, the Premium Sedan is the continental, and the premium SUV is the navigator
// const vehicleImageURL = (vehicle: string) => {
//   switch (vehicle) {
//     case 'Standard Sedan':
//       return vehicleImage.cadillacXts
//     case 'Standard SUV':
//       return vehicleImage.suburban
//     case 'Premium Sedan':
//       return vehicleImage.continental
//     case 'Premium SUV':
//       return vehicleImage.navigator
//     default:
//       return vehicleImage.cadillacXts
//   }
// }

const route = useRoute().query
console.log(route)
const props = {
  quoteNumber: route.quote,
  firstname: route.fname,
  lastname: route.lname,
  pickupDate: route.date,
  pickupTime: route.time,
  origin: route.origin,
  destination: route.destination,
  service: route.service,
  vehicle: route.vehicle,
  subtotal: route.amount,
  total: route.amount,
  tax: route.amount,
  isRoundTrip: false,
}

const createSession = async () => {
  const { data } = await useFetch(`/api/create-checkout-session`, {
    query: route,
  })
  console.log(data)
  const { statusCode, url, customer } = (await data.value) as ReturnType
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
        <Navigation
          :quoteNumber="route.quote"
          :firstname="route.fname"
          :lastname="route.lname"
          :pickupDate="route.date"
          :pickupTime="route.time"
          :origin="route.origin"
          :destination="route.destination"
          :service="route.service"
          :vehicle="route.vehicle"
          :subtotal="route.amount"
          :total="route.amount"
          :tax="route.amount"
          :isRoundTrip="false"
          @clicked:booked="createSession"
        />
        <Invoice class="bg-white pt-4" />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
