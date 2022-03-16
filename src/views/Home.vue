<template>
  <div class="overflow-hidden overscroll-none">
    <div 
      class="flex flex-col justify-center items-center h-[calc(100vh-72px)] mt-[72px]"
    >
      <div v-if="walletConnected" class="mt-4 absolute sm:right-4 top-20 sm:top-24">
        <wallet-button @viewBots="scrollToMyBots"/>
      </div>
      <connect-wallet-panel  v-if="!walletConnected"/>
      <mint-panel v-else-if="canMint"/>
      <bonus-challenge-panel 
        v-else-if="canFlip"
        @moreDetailsClick="scrollToBonusPrizes"
      />
      <raffle v-else/>
      <img 
        src="../images/Bot-Illustration.svg" 
      >
    </div>
  </div>
  <div class="bg-black text-white flex flex-col items-center">
    <my-bots-section ref="my-bots" v-if="hasBots" />
    <info-section  ref="info-section"/>
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
import Raffle from "@/components/Raffle/index.vue"

export default {
  name: 'Home',
    components: {
      InfoSection,
      WalletButton,
      MyBotsSection,
      ConnectWalletPanel,
      MintPanel,
      BonusChallengePanel,
      Raffle
  },
  data: () => ({
    interval: null
  }),
  computed: {
    ...mapGetters('eth', [
      'walletConnected',
      'walletAddress',
      'readyToRaffle',
    ]),
    ...mapGetters('bots', ['hasBots']),
    ...mapGetters('contractState', [
      'canMint',
      'canFlip'
    ]),
  },
  methods: {
    ...mapActions('contractState', ['setNow', 'getIsPublicSaleOpen', 'getIsMintedOut']),
    ...mapActions('eth', ['setWalletAddress']),
    ...mapActions('mint', ['mintState']),
    ...mapActions('bots', ['getMyBots']),
    ...mapActions('bonus', ['getBonusRaffleData']),
    scrollToBonusPrizes() {
      const el = this.$refs['info-section'].$refs['bonus-prizes-info'].$el
      this.$scrollTo(el, 600, { offset: 20 })
    },
    scrollToMyBots() {
      const el = this.$refs['my-bots'].$el
      this.$scrollTo(el, 600, { offset: 20 })
    }
  },
  watch: {
    walletAddress() {
      this.getMyBots(this.walletAddress)
    },
    canMint() {
      if(this.canMint) this.getBonusRaffleData()
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.setNow(Date.now())  
    }, 1000)

    this.getIsPublicSaleOpen()
    this.getIsMintedOut()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  }
}
</script>
