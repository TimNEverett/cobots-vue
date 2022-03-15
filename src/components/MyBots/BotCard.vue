<template>
  <div class="bg-black border-2 p-2 border-cobots-silver rounded-2xl space-y-2">
    <div class=" bg-white text-black rounded-lg w-52 h-52 flex justify-center items-center">
      <img v-if="tokenURI" :src="tokenURI" class="rounded-lg"/>
    </div>

    <button 
      v-if="canFlip && botColor"
      class="w-full py-3 rounded-lg uppercase font-black text-sm"
      :class="{'bg-cobots-red': botColor === 'blue', 'bg-sky-400': botColor === 'red', }"
      @click="toggleBotColor(index)"
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
    }
  },
  components: {
    TwitterLogo
  },
  props: {
    index: Number,
  },
  computed: {
    ...mapGetters('bots', ['imageByIndex', 'colorByIndex']),
    ...mapGetters('contractState', ['canFlip']),
    tokenURI() {
      return this.imageByIndex(this.index)
    },
    botColor() {
      return this.colorByIndex(this.index)
    },
    flipButtonText() {
      if(this.botColor === 'red') return 'Flip to blue'
      return 'Flip to red'
    },
  },
  methods: {
    ...mapActions('bots', [
      'getImageForIndex', 
      'getBotColor', 
      'toggleBotColor'
    ])
  },
  mounted() {
    this.getImageForIndex(this.index)
    this.getBotColor(this.index)
  }
}
</script>