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

const props = defineProps<Props>()
</script>

<template>
  <div class="flex justify-between items-center border-b border-t py-2">
    <div class="flex items-center">
      <img
        :src="image"
        :alt="alt"
        class="w-32 h-32 object-center object-scale-down rounded-lg"
      />
      <div class="flex flex-col ml-4">
        <span class="font-bold">Description</span>
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
    </div>
    <span>Subtotal: ${{ subtotal }}</span>
  </div>
</template>
