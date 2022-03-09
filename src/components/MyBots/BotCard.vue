<template>
  <div class="bg-black border-2 p-2 border-cobots-silver rounded-2xl space-y-2">
    <div class=" bg-white text-black rounded-lg w-52 h-52 flex justify-center items-center">

      <img v-if="tokenURI" :src="tokenURI" />
    </div>

    <button 
      v-if="showMintButton"
      class="w-full py-3 rounded-lg uppercase font-black text-sm"
      :class="{'bg-cobots-red': currentColor === 'blue', 'bg-sky-400': currentColor === 'red', }"
    >
      {{flipButtonText}}
    </button>

    <div class="grid grid-cols-2 gap-2">
      <button class="bg-cobots-silver text-black p-2 rounded-lg uppercase font-black flex">
        <twitter-logo class="fill-black w-5 mr-2"/>
        share
      </button>
      <button class="bg-cobots-silver text-black p-2 rounded-lg uppercase font-black">save</button>
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TwitterLogo from "../TwitterLogo.vue"
export default {
  name: 'BotCard',
  data() {
    return {
      imgUrl: null,
      showMintButton: false,
      currentColor: 'blue'
    }
  },
  components: {
    TwitterLogo
  },
  props: {
    index: Number,
  },
  computed: {
    ...mapGetters('bots', ['imageByIndex']),
    tokenURI() {
      return this.imageByIndex(this.index)
    },
    flipButtonText() {
      if(this.currentColor === 'red') return 'Flip to blue'
      return 'Flip to red'
    },
  },
  methods: {
    ...mapActions('bots', ['getImageForIndex'])
  },
  mounted() {
    this.getImageForIndex(this.index)
  }
}
</script>