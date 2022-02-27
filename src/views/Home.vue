<template>
  <div class="h-80 lg:h-[calc(100vh-5rem)] flex flex-col justify-between">
    <div class="flex flex-col justify-center items-center h-full">
      <div class="absolute right-4 top-24">
        <wallet-button />
      </div>
      <mint-panel v-if="walletConnected"/>
      <connect-wallet-panel  v-else/>
      
    </div>
    <img 
      src="../images/Bot-Illustration.svg" 
      class="">
  </div>
  <div class="bg-black text-white">
    <my-bots-section />
    <info-section />
  </div>
</template>
<script>
import InfoSection from "@/components/InfoSection.vue"
import WalletButton from "@/components/walletButton.vue"
import MyBotsSection from "@/components/MyBots/index.vue"
import ConnectWalletPanel from "@/components/ConnectWalletPanel.vue"
import MintPanel from "@/components/MintPanel.vue"
export default {
   name: 'Home',
   components: {
     InfoSection,
     WalletButton,
     MyBotsSection,
     ConnectWalletPanel,
     MintPanel
   },
   data() {
     return {
       walletConnected: false,
     }
   }
}
</script>
