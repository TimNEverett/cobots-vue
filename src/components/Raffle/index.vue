<template>
  <div class="py-20 text-center flex flex-col items-center">
    <div class="uppercase font-black text-6xl text-cobots-green mb-10">
      winners
    </div>
    <div class="font-black text-sm md:w-[560px] mb-10">
      1 winner will be drawn every minute until all are drawn. Prizes will be sent to the winners by the smart contract as soon as they are drawn. Thanks for playing!
    </div>
    <main-prizes class="mb-20"/>
    <div v-if="cooperativeRaffleEnabled" class="w-full border-b-2 border-cobots-silver"></div>
    <bonus-prizes v-if="cooperativeRaffleEnabled" class="mt-20"/>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BonusPrizes from './BonusPrizes.vue'
import MainPrizes from './MainPrizes.vue'
export default {
  name: 'Raffle',
  components: { 
    MainPrizes,
    BonusPrizes 
  },
  computed: {
    ...mapGetters('contractState', ['cooperativeRaffleEnabled'])
  }
  
}
</script>