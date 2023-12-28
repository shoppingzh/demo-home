

<template>
  <div class="p-5 flex flex-wrap">
    <div
      v-for="(item, index) in demos"
      :key="index"
      class="mb-4 mx-2 card w-[300px] bg-white cursor-pointer hover:translate-y-[-2px] transition-all duration-500"
      @click="go(item)">
      <div class="h-[120px] bg-gray-800">
        <img v-if="item.snapshot" :src="item.snapshot" class="w-full h-full object-cover">
      </div>
      <div class="p-2">
        <div class="text-md text-gray-800 font-semibold">{{ item.name }}</div>
        <div class="mt-2 text-xs text-gray-400">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import demos, {Demo} from '@/config/demos'

function go(item: Demo) {
  if (!item.url) return
  window.open(item.url)
}

</script>

<style scoped>
.card {
  box-shadow: 8px 8px 20px 0 rgba(55,99,170,.1), -8px -8px 20px 0 #fff, inset 0 4px 20px 0 hsla(0,0%,100%,.5);
}
</style>
