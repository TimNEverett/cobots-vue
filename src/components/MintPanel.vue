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
    <cb-button @click="mint" :disabled="minting || mintedLimit">{{ mintBtnText }}</cb-button>
    <scroll-label>scroll down for info -<br/> please read before minting.</scroll-label>
  </div>
</template>

<script>
import cbButton from "./shared/cbButton.vue"
import scrollLabel from "./shared/scrollLabel.vue"
import counterButton from "./shared/counterButton.vue"
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
     }
   },
   computed: {
     atMax: function() { return this.numToMint + this.numMinted >= this.max },
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
     mint() {
       console.log('MINT')
     }
   }
}
</script>