<template>
  <div class="h-80 lg:h-[calc(100vh-5rem)] flex flex-col justify-between">
    <div class="flex flex-col justify-center items-center h-full">
      <div v-if="walletConnected" class="absolute right-4 top-24">
        <wallet-button />
      </div>
      <connect-wallet-panel  v-if="!walletConnected"/>
      <mint-panel v-else-if="!mintPhaseComplete"/>
      <bonus-challenge-panel v-else-if="!rafflePhaseComplete"/>
    </div>
    <img 
      src="../images/Bot-Illustration.svg" 
      class="">
  </div>
  <div class="bg-black text-white flex flex-col items-center">
    <my-bots-section v-if="hasBots" />
    <info-section />
  </div>
</template>

<script>
import InfoSection from "@/components/InfoSection.vue"
import WalletButton from "@/components/walletButton.vue"
import MyBotsSection from "@/components/MyBots/index.vue"
import ConnectWalletPanel from "@/components/ConnectWalletPanel.vue"
import MintPanel from "@/components/MintPanel.vue"
import BonusChallengePanel from "@/components/BonusChallenge/index.vue"
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Home',
  components: {
    InfoSection,
    WalletButton,
    MyBotsSection,
    ConnectWalletPanel,
    MintPanel,
    BonusChallengePanel
  },
  computed: {
    ...mapGetters('eth', [
      'walletConnected', 
      'mintPhaseComplete',
      'rafflePhaseComplete',
    ]),
    ...mapGetters('bots', ['hasBots'])
  },
  methods: {
    ...mapActions('eth', ['setWalletAddress']),
    accountsChanged(accounts) {
      console.log('changed', accounts)
      let address = accounts.length > 0 ? accounts[0] : ""
      this.setWalletAddress(address)
    },
    async connected() {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.setWalletAddress(accounts[0])
    },
    disconnected() {
      console.log('disconnected')
      this.setWalletAddress('')
    }
  },
  mounted() {
    if(window.ethereum != 'undefined'){
      window.ethereum.on('accountsChanged', this.accountsChanged);
      window.ethereum.on('connect', this.connected);
      window.ethereum.on('disconnect', this.disconnected);
    }
  },
  beforeUnmount() {
    if(window.ethereum != 'undefined'){
      window.ethereum.on('accountsChanged', this.accountsChanged );
      window.ethereum.on('connect', this.connected);
      window.ethereum.on('disconnect', this.disconnected);
    }
  }
}
</script>
