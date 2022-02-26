<template>
  <div class="flex flex-col justify-center items-center">
    <cb-button>
      Connect Wallet
    </cb-button>
    <scroll-label>scroll down for info.</scroll-label>
  </div>
</template>

<script>
import cbButton from "./shared/cbButton.vue"
import scrollLabel from "./shared/scrollLabel.vue"
export default {
   name: 'ConnectWalletPanel',
   components: {
     cbButton,
     scrollLabel
   }
}
</script>