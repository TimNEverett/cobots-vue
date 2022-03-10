<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center space-x-4">
      
      <counter-button
        :disabled="atMin || mintInProgress"
        @click="decrement">
        -
      </counter-button>

      <div class="text-9xl font-black flex">
        <div class="w-24 mr-1 text-center">{{firstDigit}}</div>
        <div class="w-24 text-center">{{secondDigit}}</div>
      </div>

      <counter-button 
        :disabled="atMax || mintInProgress"
        @click="increment">
        +
      </counter-button>

    </div>

    <cb-button 
      @click="localMint" 
      :disabled="mintInProgress || mintedLimit || !publicSaleOpen"
    >
      {{ mintBtnText }}
    </cb-button>

    <scroll-label v-if="mintSuccessful" class="text-cobots-green">
      mint comlete! it may take a <br />minute to show up in your wallet
    </scroll-label>
    <scroll-label v-else class="text-cobots-silver-2" >
      scroll down for info -<br/> please read before minting.
    </scroll-label>
  </div>
</template>

<script>
import cbButton from "./shared/cbButton.vue"
import scrollLabel from "./shared/scrollLabel.vue"
import counterButton from "./counterButton.vue"
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'MintPanel',
   components: {
     cbButton,
     scrollLabel,
     counterButton
   },
   data() {
     return {
       numToMint: 1,
       max: 20,
     }
   },
   computed: {
      ...mapGetters('mint', [
        'mintLimit', 
        'mintInProgress', 
        'mintSuccessful',
        'publicSaleOpen',
      ]),
      ...mapGetters('bots', ['numMinted']),
      atMax: function() { 
        if(this.numToMint + this.numMinted >= this.max) return true
        if(this.numToMint + this.numMinted >= this.mintLimit) return true
        return false
      },
      atMin: function() { return this.numToMint <= 1 },
      mintedLimit: function() { return this.numMinted >= this.max },
      firstDigit() {
        return parseInt(this.numToMint / 10)
      },
      secondDigit() {
        return this.numToMint % 10
      },
      mintBtnText() {
        if(this.mintedLimit) return 'You hit your limit'
        else if(this.mintInProgress) return 'Minting...'
        return 'Mint'
      }
   },
   watch: {
     mintSuccessful() {
       if(this.mintSuccessful) this.numToMint = 1
     }
   },
   methods:{
     ...mapActions('mint', ['mint']),
     increment() {
       if(!this.atMax) this.numToMint += 1
     },
     decrement() {
       if(!this.atMin) this.numToMint -= 1
     },
     async localMint() {
       await this.mint(this.numToMint)
     }
   }
}
</script>