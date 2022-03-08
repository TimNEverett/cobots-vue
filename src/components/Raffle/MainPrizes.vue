<template>
  <div>
    <div class="flex justify-between">
      <div class="font-black text-xl">MAIN PRIZES (25 ETH)</div>
      <div class="font-black text-xl text-cobots-silver-2">
        {{numPrizesDrawn}}/10 DRAWN
      </div>
    </div>

    <div class="grid grid-cols-5 gap-2">
      <winner-card v-for="i in 10" :key="i"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WinnerCard from './WinnerCard.vue'
export default {
  components: { WinnerCard },
   name: 'MainPrizes',
   computed: {
     ...mapGetters('prizes', ['numPrizesDrawn'])
   }
}
</script>