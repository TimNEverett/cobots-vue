<template>
  <div class="w-full h-10 bg-cobots-silver rounded-full relative text-md sm:text-xl">
    <div 
      class="absolute h-10 rounded-full"
      :class="bgColor"
      :style="{'width': width}"
    >
    </div>
    <div class="uppercase font-black text-white absolute h-full left-4">
      <div class="flex items-center text-center h-full">
        {{progress}} {{color}} bots
      </div>
    </div>

    <div class="uppercase font-black text-black absolute h-full right-4">
      <div class="flex items-center text-center h-full">
        {{total}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProgressBar',
  props: {
    total: Number,
    progress: Number,
    bgColor: String,
    color: String,
  },
  computed: {
    width() {
      return `${(this.progress/this.total * 100).toFixed(0)}%`
    },
    bgClass() {
      return `bg-${this.color === 'red' ? 'cobots-red' : 'sky-400'}`
    }
  },
}
</script>