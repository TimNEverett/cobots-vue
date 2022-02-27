<template>
  <div class="flex flex-col items-center space-y-4">
    <button class=" w-40 rounded-full border-2 border-zinc-300 px-4 py-2 font-black">
      {{ addressTruncated }}    
    </button>
    <div class="uppercase underline font-black text-sky-400">View my bots</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   name: 'walletButton',
   computed: {
     ...mapGetters('eth', ['walletAddress']),
     addressTruncated() {
       let start = this.walletAddress.substring(0, 4)
       let end = this.walletAddress.substring(this.walletAddress.length - 4, this.walletAddress.length)
       return `${start}...${end}`
     }
   }
}
</script>