<template>
  <div class="w-full bg-black">
    <nav class="grid grid-cols-6 p-5 bg-black mx-auto max-w-6xl">
      <NuxtLink
        to="https://highparklivery.com"
        class="max-w-[120px] col-span-2"
      >
        <img
          src="/hpl-logo-3.png"
          height="568"
          width="960"
          alt="High Park Livery logo"
          class="w-full"
        />
      </NuxtLink>
      <div
        v-show="true"
        class="col-span-2 flex flex-row justify-center items-center text-white text-3xl uppercase tracking-widest"
      >
        {{ title }}
      </div>
      <div
        v-show="false"
        class="col-span-2 flex flex-row justify-end items-center"
      >
        Page Title
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>
<style scoped>
body {
  text-align: center;
  padding: 40px 0;
  background: #ebf0f5;
}

p {
  color: #a57c52;
  font-family: 'Nunito Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  margin: 0;
}

i {
  color: #a57c52;
  font-size: 100px;
  line-height: 200px;
  margin-left: -15px;
}
</style>
