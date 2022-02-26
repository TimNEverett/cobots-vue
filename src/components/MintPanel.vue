<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center space-x-4">
      
      <button 
        class="rounded-full w-14 h-14 bg-zinc-300 text-3xl"
        @click="decrement"
      >
        -
      </button>

      <div class="text-9xl font-black flex">
        <div class="w-24 mr-1 text-center">{{firstDigit}}</div>
        <div class="w-24 text-center">{{secondDigit}}</div>
      </div>

      <button 
        class="rounded-full w-14 h-14 bg-zinc-300 text-3xl"
        @click="increment"
      >
        +
      </button>
    </div>
    <cb-button @click="mint">Mint</cb-button>
    <scroll-label>scroll down for info - please read before minting.</scroll-label>
  </div>
</template>

<script>
import cbButton from "./shared/cbButton.vue"
import scrollLabel from "./shared/scrollLabel.vue"
export default {
   name: 'MintPanel',
   components: {
     cbButton,
     scrollLabel
   },
   data() {
     return {
       numToMint: 1,
       max: 20,
     }
   },
   computed: {
     atMax: function() { return this.numToMint >= 20 },
     atMin: function() { return this.numToMint <= 1 },
     firstDigit() {
       return parseInt(this.numToMint / 10)
     },
     secondDigit() {
       return this.numToMint % 10
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