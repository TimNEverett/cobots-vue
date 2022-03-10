<template>
<div class="bg-black">
  <div class="flex py-2 pl-4 justify-between h-12 sm:hidden ">
    <Logo class=" fill-white"/>
    <social-media-buttons class="w-24"/>
  </div>
  <div class="flex-row flex items-center justify-center sm:justify-between pl-2 md:pl-9 sm:py-4 w-full md:h-20">
    <Logo class="hidden sm:block fill-white"/>

    <div class="flex-row flex items-center justify-between sm:justify-center text-sm sm:text-xl">
      <div class="hidden lg:flex items-center px-2 ">
        <p class="text-cobots-silver-2 mr-1">MINTED:</p>
        <p class="text-white font-extrabold">
          {{ totalSupply.toLocaleString('en-US') }}/{{mintLimit.toLocaleString('en-US')}}
          </p>
      </div>
      <div v-if="!mintPhaseComplete" class="flex items-center px-2">
        <p class="text-cobots-silver-2 mr-1">MINT PRICE:</p>
        <p class="text-white font-black">{{ mintPrice }} ETH</p>
      </div>
      <div class="flex items-center px-2">
        <p class="text-cobots-silver-2 font mr-1">TIME LEFT:</p>
        <p 
          class="font-black text-white" 
          :class="{'text-cobots-red': timeLeft < 86400000 && timeLeft !== null}"
        >
          {{ timeLeftString }}
        </p>
      </div>
    </div>

    <social-media-buttons class="hidden sm:flex"/>
  </div>
  </div>
</template>

<script>
import Logo from "./logo.vue";
import SocialMediaButtons from "@/components/SocialMediaButtons.vue"
import { mapGetters } from "vuex";
export default {
   name: 'Header',
   components: {
     Logo,
     SocialMediaButtons
   },
   data() {
      return {
       timeLeft: null,
       interval: null,
     }
   },
   computed: {
      ...mapGetters('mint', [
        'totalSupply',
        'mintPrice',
        'mintLimit',
        'mintPhaseComplete',
        'mintEndDate',
      ]),
      timeLeftString() {
      if(this.timeLeft === null) return '--:--:--'
      var msec = this.timeLeft
      var hh = Math.floor(msec / 1000 / 60 / 60);
      msec -= hh * 1000 * 60 * 60;
      var mm = Math.floor(msec / 1000 / 60);
      msec -= mm * 1000 * 60;
      var ss = Math.floor(msec / 1000);
      if(hh < 10) hh = `0${hh}`
      if(mm < 10) mm = `0${mm}`
      if(ss < 10) ss = `0${ss}`
      return `${hh}:${mm}:${ss}`
      },
   },
   mounted() {
     this.interval = setInterval(() => {
       let newVal = this.mintEndDate - Date.now()
       this.timeLeft = newVal > 0 ? newVal : 0
       if(newVal < 0) this.interval = null
     }, 1000)
   },
   beforeUnmount() {
     clearInterval(this.interval)
   }
   
}
</script>