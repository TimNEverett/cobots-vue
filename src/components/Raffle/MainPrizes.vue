<template>
  <div class="flex flex-col items-center">
    <div class="flex justify-between text-sm sm:text-xl w-full mb-4">
      <div class="font-black">MAIN PRIZES (25 ETH)</div>
      <div class="font-black text-cobots-silver-2">
        {{ mainDrawCount }}/{{ mainWinnersCount }} DRAWN
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
      <winner-card
        v-for="w in mainWinners"
        :key="w.idx"
        :address="w.address"
        :tokenId="w.tokenId"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WinnerCard from "./WinnerCard.vue";
export default {
  components: { WinnerCard },
  name: "MainPrizes",
  computed: {
    ...mapGetters("prizes", [
      "mainWinners",
      "mainDrawCount",
      "mainWinnersCount",
    ]),
  },
};
</script>
