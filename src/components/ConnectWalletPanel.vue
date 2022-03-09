<template>
  <div class="flex flex-col justify-center items-center">
    <cb-button :disabled="connecting" @click="openModal"> {{buttonText}} </cb-button>
    <scroll-label>scroll down for info.</scroll-label>
  </div>
  <ConnectWalletModal v-if="modalOpen" @close="closeModal"/>
</template>

<script>
import cbButton from "./shared/cbButton.vue"
import scrollLabel from "./shared/scrollLabel.vue"
import ConnectWalletModal from "./ConnectWalletModal.vue"

export default {
   name: 'ConnectWalletPanel',
   components: {
     cbButton,
     scrollLabel,
     ConnectWalletModal
   },
   data() {
     return {
       connecting: false,
       modalOpen: false
     }
   },
   computed: {
     buttonText() {
       if(this.connecting) return 'connecting...'
       return 'Connect'
     }
   },
   methods: {
     openModal() {
       this.modalOpen = true
     },
     closeModal() {
       this.modalOpen = false
     }
   }
}
</script>