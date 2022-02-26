<template>
  <div class="py-16">
    <div class="font-extrabold mb-4 text-2xl text-white">{{ question }}</div>
    <div class="space-y-4 text-zinc-300">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
   name: 'InfoSubSection',
   props: {
     question: String
   }
}
</script>