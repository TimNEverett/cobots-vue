<template>
  <div class="absolute top-0 left-0 bg-black bg-opacity-50 w-screen h-screen" @click="$emit('close')">
    <div class="flex flex-col w-full h-full justify-center items-center">
      <div class="bg-white rounded-xl p-4 flex flex-col">
        <div class="uppercase font-black text-center mb-2 text-2xl">Connect wallet</div>
        <div class="grid grid-cols-2 gap-2">
          <button 
            class="border-2 border-zinc-300 rounded-md p-4 flex flex-col items-center"
            @click="connectMetaMask"
          >
            <img class="w-40" src="../images/MetamaskLogo.png" />

            <div class=" uppercase text-zinc-400 text-center">metamask</div>
          </button>
          
          <button 
            class="border-2 border-zinc-300 rounded-md p-4 flex flex-col items-center"
            @click.stop="connectWC"
          >
            <img class="w-40" src="../images/WalletConnectLogo.png" />

            <div class=" uppercase text-zinc-400 text-center">wallet connect</div>
          </button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
   name: 'ConnectWalletModal',
   emits: ['close'],
   methods: {
     ...mapActions('eth', ['connectMetaMask', 'connectWC']),
   }
}
</script>