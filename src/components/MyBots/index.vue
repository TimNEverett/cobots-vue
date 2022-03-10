<template>
  <div class="flex flex-col justify-center items-center py-16">
    <div class="uppercase text-5xl text-white font-black">my bots</div>
    <div class="flex flex-col w-64 space-y-4 py-8" v-if="mintPhaseComplete">
      <button 
        class="w-full py-4 rounded-lg uppercase font-black text-sm bg-sky-400"
        :class="{'opacity-50': allBlue, 'cursor-not-allowed': allBlue }"
        @click="flipBlue"
      >
        Flip All to blue
      </button> 

      <button 
        class="w-full py-4 rounded-lg uppercase font-black text-sm bg-cobots-red"
        :class="{'opacity-50': allRed, 'cursor-not-allowed': allRed }"
        @click="flipRed"
      >
        Flip All to Red
      </button> 

    </div>
    <div class="flex justify-center flex-wrap px-32 gap-4">
      <bot-card 
        v-for="b in myBots" 
        :key="b"
        :index="b"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BotCard from "./BotCard.vue"
export default {
  name: 'MyBotsSection',
  components: {
    BotCard,
  },
  computed: {
    ...mapGetters('bots', ['myBots', 'allRed', 'allBlue']),
    ...mapGetters('mint', ['mintPhaseComplete']),
  },
  methods: {
    ...mapActions('bots', ['flipAllColors']),
    flipRed() {
      if(!this.allRed) {
        this.flipAllColors('red')
      }
    },
    flipBlue() {
      if(!this.allBlue) {
        this.flipAllColors('blue')
      }
    }
  }
}
</script>