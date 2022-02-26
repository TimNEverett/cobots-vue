<template>
  <div class="flex-col lg:flex-row flex items-center justify-between pl-9 py-4 w-full bg-black space-y-4">
    <Logo />

    <div class="flex-col lg:flex-row flex items-center space-y-4 lg:space-y-0 lg:divide-x-2 divide-gray-500 text-xl">
      <div class="flex items-center px-2">
        <p class="text-gray-500 font-bold mr-1">MINTED:</p>
        <p class="text-white font-extrabold">{{ mintedCount }}/10,000</p>
      </div>
      <div class="flex items-center px-2">
        <p class="text-gray-500 font-bold mr-1">MINT PRICE:</p>
        <p class="text-white font-extrabold">{{ mintPrice }} ETH</p>
      </div>
      <div class="flex items-center px-2">
        <p class="text-gray-500 font-bold mr-1">TIME LEFT:</p>
        <p class="text-white font-extrabold">{{ timeLeftString }}</p>
      </div>
    </div>

    <div class="text-white flex space-x-4 pr-6">
      <a class="py-1">
        <img alt='twitter-logo' src="assets/twitter-logo.svg"/>
      </a>
      <a>
        <img alt='opensea-logo' src="assets/opensea-logo.svg"/>
      </a>
      <a>
        <img alt='etherscan-lgo' src="assets/etherscan-logo-.svg"/>
      </a>
    </div>
  </div>

</template>

<script>
import Logo from "./logo.vue";
export default {
   name: 'Header',
   components: {
     Logo,
   },
   data() {
     return {
       mintedCount: 10,
       mintPrice: 0.05,
       mintEndDate: Date.now() + (1000 * 60 * 60 * 130),
       now: Date.now(),
       interval: null,
     }
   },
   computed: {
     timeLeftString() {
      var msec = this.mintEndDate - this.now
      var hh = Math.floor(msec / 1000 / 60 / 60);
      msec -= hh * 1000 * 60 * 60;
      var mm = Math.floor(msec / 1000 / 60);
      msec -= mm * 1000 * 60;
      var ss = Math.floor(msec / 1000);
      if(hh < 10) hh = `0${hh}`
      if(mm < 10) mm = `0${mm}`
      if(ss < 10) ss = `0${ss}`
      return `${hh}:${mm}:${ss}`
     }
   },
   mounted() {
     this.interval = setInterval(() => {
       this.now = Date.now()
     }, 1000)
   },
   beforeUnmount() {
     clearInterval(this.interval)
   }
   
}
</script>