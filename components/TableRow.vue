<script setup lang="ts">
interface Props {
  image: string
  alt: string
  pickupLocation: string
  dropoffLocation: string
  pickupDate: string
  pickupTime: string
  serviceType: string
  vehicleType: string
  subtotal: number
}

const {
  alt = 'vehicle image',
  dropoffLocation = 'Oops, something went wrong',
  pickupLocation = 'Oops, something went wrong',
  image = 'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/8cdff651-33c3-419a-7767-3987d0c0a400/1024',
  pickupTime = 'N/A',
  subtotal = 0.0,
  vehicleType = 'Standard Sedan',
  serviceType = 'Point To Point',
} = defineProps<Props>()
</script>

<template>
  <div class="@container border-b border-t py-4">
    <div class="grid grid-cols-1 @2xl:grid-cols-12">
      <div class="place-items-center @2xl:col-span-3 py-2">
        <img :src="image" :alt="alt" class="w-full max-w-sm mx-auto" />
      </div>
      <div class="col-span-6 py-2">
        <span class="font-bold mb-2 text-2xl @2xl:text-xl">Description</span>
        <div class="flex flex-row justify-start place-items-center">
          <span class="text-base text-gray-700 font-semibold mr-1"
            >Pickup Date: </span
          ><span class="text-sm text-gray-500"> {{ pickupDate }}</span>
        </div>
        <div class="flex flex-row justify-start place-items-center">
          <span class="text-base text-gray-700 font-semibold mr-1"
            >Pickup Time: </span
          ><span class="text-sm text-gray-500"> {{ pickupTime }}</span>
        </div>
        <div class="flex flex-row justify-start place-items-center">
          <span class="text-base text-gray-700 font-semibold mr-1"
            >Pickup Location: </span
          ><span class="text-sm text-gray-500"> {{ pickupLocation }}</span>
        </div>
        <div class="flex flex-row justify-start place-items-center">
          <span class="text-base text-gray-700 font-semibold mr-1"
            >Dropoff Location: </span
          ><span class="text-sm text-gray-500"> {{ dropoffLocation }}</span>
        </div>
        <div class="flex flex-row justify-start place-items-center">
          <span class="text-base text-gray-700 font-semibold mr-1"
            >Service: </span
          ><span class="text-sm text-gray-500"> {{ serviceType }}</span>
        </div>
        <div class="flex flex-row justify-start place-items-center">
          <span class="text-base text-gray-700 font-semibold mr-1"
            >Vehicle Type:</span
          ><span class="text-sm text-gray-500"> {{ vehicleType }}</span>
        </div>
      </div>
      <div
        class="py-2 px-4 mt-2 @2xl:col-span-3 @2xl:flex @2xlx:flex-col justify-end items-end"
      >
        <span class="font-bold text-lg">Subtotal: ${{ subtotal }}</span>
      </div>
    </div>
  </div>
</template>
