<template>
  <div>
    <div class="flex justify-between">
      <div class="font-black text-xl">BONUS PRIZES (2.5 ETH)</div>
      <div class="font-black text-xl text-cobots-silver-2">
        {{numBonusPrizesDrawn}}/20 DRAWN
      </div>
    </div>

    <div class="grid grid-cols-5 gap-2">
      <winner-card v-for="i in 20" :key="i"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WinnerCard from './WinnerCard.vue'
export default {
  components: { WinnerCard },
   name: 'BonusPrizes',
   computed: {
     ...mapGetters('prizes', ['numBonusPrizesDrawn'])
   }
}
</script>