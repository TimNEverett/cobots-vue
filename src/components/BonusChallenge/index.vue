<template>
  <div 
    class="flex flex-col items-center text-center px-4 pt-4"
    :style="{height: 'calc(100vh - ' + headerHeight + 'px)'}"
  >
    <div class="font-black  w-full text-4xl sm:text-5xl uppercase mb-4">
      BONUS <br/> CHALLENGE
    </div>
    <text class="w-[326px] sm:w-[560px] text-sm mb-2">
      <text class="font-black ">Unlock 20 more raffle prizes of 2.5 ETH each</text> by coordinating with the community to make 9,500 of the Co-Bots’ screens the same colour before the raffle. Good luck!
    </text>
    <div class="mb-8">
      <button class="uppercase font-black text-sky-400 underline text-xl" @click="$emit('more-details-click')">MORE DETAILS</button>
    </div>

    <div class="space-y-2 sm:w-[640px]">
      <ProgressBar 
        :total="coordinationThreshold" 
        :progress="numBlue" 
        color="blue" 
        bg-color="bg-sky-400"
      />
      <ProgressBar 
        :total="coordinationThreshold" 
        :progress="numRed" 
        color="red" 
        bg-color="bg-cobots-red"
      />
      <div class="text-xs md:text-md uppercase font-black text-cobots-silver-2">
        GET EITHER COLOUR TO 9,500 TO UNLOCK THE BONUS PRIZES.
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/BonusChallenge/ProgressBar.vue"
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BonusChallengePanel',
  emits: ['more-details-click'],
  components: {
    ProgressBar,
  },
  computed: {
    ...mapGetters('bonus', [
      'numRed',
      'numBlue',
      'coordinationThreshold'
    ]),
    ...mapGetters('layout', ['headerHeight'])
  },
  methods: {
    ...mapActions('bonus', ['getNumBlue', 'getBonusRaffleData'])
  },
  mounted() {
    this.getBonusRaffleData()
    this.getNumBlue()
  }
}
</script>