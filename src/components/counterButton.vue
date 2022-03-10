<template>
  <button 
    class="rounded-full w-14 h-14 bg-zinc-300 text-3xl"
    :class="{'opacity-50': disabled, 'cursor-not-allowed': disabled }"
    @click="localClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'counterButton',
  emits: ['click'],
  props: {
    click: Function,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    localClick() {
      if(!this.disabled) this.$emit('click')
    }
  }
}
</script>