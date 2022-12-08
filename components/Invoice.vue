<script setup lang="ts">
interface Props {
  quoteNumber: number
  firstname: string
  lastname: string
  pickupDate: string
  pickupTime: string
  origin: string
  destination: string
  service: string
  vehicle: string
  subtotal: number
  total: number
  tax: number
  isRoundTrip: boolean
}

const {
  quoteNumber = 999,
  origin = 'Pearson Internation Airport',
  destination = '1265 Sixth Line, Oakville ON, L6H 1X2',
  service = 'Point To Point',
  vehicle = 'Standard Sedan',
  subtotal = 99.99,
  isRoundTrip,
  firstname = 'John',
  lastname = 'Doe',
  pickupDate = '2021-01-01',
  pickupTime = '12:00',
} = defineProps<Props>()

const customer = {
  firstname: firstname,
  lastname: lastname,
  pickupDate: pickupDate,
  pickupTime: pickupTime,
  quoteNumber: quoteNumber,
}

const orders = [
  {
    id: quoteNumber,
    origin: origin,
    destination: destination,
    service: service,
    vehicle: vehicle,
    subtotal: subtotal,
  },
  // More orders...
]

const calculateTotal = computed(() => {
  if (isRoundTrip) {
    return subtotal * 2
  }
  return orders[0].subtotal * 1.13
})
const calculateTax = computed(() => {
  return orders[0].subtotal * 0.13
})

const calculateSubtotal = computed(() => {
  return orders[0].subtotal
})

//write a function that converts the calculated total to a string with 2 decimal places
const total = computed(() => {
  return calculateTotal.value.toFixed(2)
})
const tax = computed(() => {
  return calculateTax.value.toFixed(2)
})

const subtotal2 = computed(() => {
  return calculateSubtotal.value.toFixed(2)
})

const show = useShowButton()
const printSummary = () => {
  window.print()
}
const space = ' '
</script>

<template>
  <Container class="px-4 sm:px-6 lg:px-8 mx-auto">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Order Summary</h1>
        <p class="mt-2 text-sm text-gray-700 font-bold">
          <span class="text-gray-900 font-bold text-base leading-relaxed"
            >Quote Number: </span
          ><span class="text-red-600 text-base font-bold leading-relaxed">
            HPL-2{{ customer.quoteNumber }}</span
          ><br />
          For:
          <span class="font-normal">{{ customer.firstname }} {{ space }}</span>
          <span class="font-normal"> {{ customer.lastname }}</span
          ><br />
          Pick up Date:
          <time class="font-normal" :datetime="customer.pickupDate">{{
            customer.pickupDate
          }}</time>
          <br />
          Pick up Time:
          <time class="font-normal" :datetime="customer.pickupTime">{{
            customer.pickupTime
          }}</time>
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          @click="printSummary"
          type="button"
          class="inline-flex items-center justify-center uppercase tracking-wider rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
        >
          Print
        </button>
      </div>
    </div>
    <div class="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
            >
              <span class="sm:hidden">Details</span>
              <span class="invisible sm:visible">Routing</span>
            </th>

            <th
              scope="col"
              class="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Service Type
            </th>
            <th
              scope="col"
              class="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Vehicle Type
            </th>
            <th
              scope="col"
              class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0"
            >
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="order in orders"
            :key="order.id"
            class="border-b border-gray-200"
          >
            <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
              <div class="mt-0.5 text-gray-500 sm:hidden">
                <span class="font-bold text-gray-900">Routing </span>
              </div>
              <div class="font-normal text-gray-500">
                <span class="font-bold text-gray-900">PU: </span
                >{{ order.origin }}
              </div>
              <div class="font-normal text-gray-500">
                <span class="font-bold text-gray-900">DO: </span>
                {{ order.destination }}
              </div>
              <div class="mt-0.5 text-gray-500 sm:hidden">
                <span class="font-bold text-gray-900">Vehicle Type: </span>
                {{ order.service }}<br /><span class="font-bold text-gray-900"
                  >Service Type: </span
                >{{ order.vehicle }}
              </div>
            </td>
            <td
              class="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell"
            >
              {{ order.service }}
            </td>
            <td
              class="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell"
            >
              {{ order.vehicle }}
            </td>
            <td
              class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0"
            >
              {{ order.subtotal }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th
              scope="row"
              colspan="3"
              class="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0"
            >
              Subtotal
            </th>
            <th
              scope="row"
              class="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
            >
              Subtotal
            </th>
            <td
              class="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0"
            >
              {{ subtotal2 }}
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              colspan="3"
              class="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0"
            >
              Tax
            </th>
            <th
              scope="row"
              class="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
            >
              Tax
            </th>
            <td
              class="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0"
            >
              {{ tax }}
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              colspan="3"
              class="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0"
            >
              Total
            </th>
            <th
              scope="row"
              class="pl-4 pr-3 pt-3 text-left text-sm font-semibold text-gray-900 sm:hidden"
            >
              Total
            </th>
            <td
              class="pl-3 pr-4 pt-3 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0"
            >
              {{ total }}
            </td>
          </tr>
        </tfoot>
      </table>
      <table class="mt-4">
        <tr class="border-t border-gray-200 pb-4">
          <td class="py-2">
            <Container>
              <div
                class="mb-6 mt-4 flex md:flex-row gap-4 med:justify-between flex-col items-start"
              >
                <div class="flex flex-col mb-2">
                  <p class="text-black text-base font-bold">
                    We require a credit card to hold your reservation
                  </p>
                  <p class="text-sm text-red-700 max-w-[65ch]">
                    Please note, 24 hours before the scheduled pickup time, an
                    authorization hold will be placed on your credit card for
                    the full amount of your reservation.
                  </p>
                </div>
                <div class="flex flex-col">
                  <p class="text-base font-bold text-black">
                    Card is not charged until the completion of your trip
                  </p>
                  <p class="text-sm text-red-700">
                    All prices include taxes, surcharges and gratuity
                  </p>
                  <p class="text-sm text-red-700">
                    **Does not include hwy tolls, parking fees, or any extra
                    fees incurred during the trip
                  </p>
                </div>
              </div>
            </Container>
          </td>
        </tr>
      </table>
    </div>
  </Container>
</template>
