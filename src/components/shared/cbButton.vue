<template>
  <button
      class="rounded-xl bg-sky-400 text-white font-extrabold px-12 py-3 uppercase"
      @click="localClick"
    >
      <slot />
    </button>
</template>

<script>
export default {
   name: 'cbButton',
   emits: ['click'],
   props: {
     click: Function
   },
   methods:{
     localClick() {
       this.$emit('click')
     }
   }
}
</script>