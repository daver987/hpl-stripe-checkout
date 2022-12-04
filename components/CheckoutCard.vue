<script setup lang="ts">
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
</script>

<template>
  <div
    class="bg-white max-w-6xl mx-auto bg-white rounded-2xl shadow-lg py-10 px-10"
  >
    <div class="mt-8">
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
    </div>
    <div class="w-full pt-6 flex justify-end">
      <div class="font-bold text-lg">
        Total: <span>${{ total }}</span>
      </div>
    </div>
  </div>
</template>
