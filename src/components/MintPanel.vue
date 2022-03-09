<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center space-x-4">
      
      <counter-button
        :disabled="atMin || minting"
        @click="decrement">
        -
      </counter-button>

      <div class="text-9xl font-black flex">
        <div class="w-24 mr-1 text-center">{{firstDigit}}</div>
        <div class="w-24 text-center">{{secondDigit}}</div>
      </div>

      <counter-button 
        :disabled="atMax || minting"
        @click="increment">
        +
      </counter-button>

    </div>
    <cb-button @click="localMint" :disabled="minting || mintedLimit">{{ mintBtnText }}</cb-button>
    <scroll-label v-if="mintComplete" class="text-cobots-green">
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
       numMinted: 0,
       max: 20,
       minting: false,
       mintComplete: true
     }
   },
   computed: {
      ...mapGetters(['mint/numMinted', 'mint/mintLimit']),
      totalMinted: function () { return this['mint/numMinted'] },
      atMax: function() { 
        return this.numToMint + this.numMinted >= this.max || this.numToMint + this.totalMinted >= this["mint/mintLimit"] 
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
        else if(this.minting) return 'Minting...'
        return 'Mint'
      }
   },
   methods:{
     ...mapActions('mint', ['mint']),
     increment() {
       if(!this.atMax) {
         this.numToMint += 1
       }
     },
     decrement() {
       if(!this.atMin) {
         this.numToMint -= 1
       }
     },
     localMint() {
       this.mint(this.numToMint)
       this.numToMint = 1
       this.numMinted += this.numToMint
     }
   }
}
</script>