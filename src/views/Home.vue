<template>
  <div class="overflow-hidden overscroll-none">
    <div 
      class="flex flex-col justify-between"
      :class="{'h-[calc(100vh-5rem)]': !readyToRaffle }"
    >
      <div class="flex flex-col justify-center items-center h-full">
        <div v-if="walletConnected" class="absolute sm:right-4 top-20 sm:top-24">
          <wallet-button @viewBots="scrollToMyBots"/>
        </div>
        <connect-wallet-panel  v-if="!walletConnected"/>
        <mint-panel v-else-if="!mintPhaseComplete"/>
        <bonus-challenge-panel 
          v-else-if="!readyToRaffle"
          @moreDetailsClick="scrollToBonusPrizes"
        />
        <raffle v-else/>
      </div>
      <img 
        src="../images/Bot-Illustration.svg" 
        class="">
    </div>
    <div class="bg-black text-white flex flex-col items-center">
      <my-bots-section ref="my-bots" v-if="hasBots" />
      <info-section  ref="info-section"/>
    </div>
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
  computed: {
    ...mapGetters('eth', [
      'walletConnected',
      'readyToRaffle',
    ]),
    ...mapGetters('mint', ['mintPhaseComplete']),
    ...mapGetters('bots', ['hasBots']),
  },
  methods: {
    ...mapActions('eth', ['setWalletAddress']),
    ...mapActions('mint', ['getIsMintedOut']),
    ...mapActions('bots', ['getMyBots']),
    scrollToBonusPrizes() {
      const el = this.$refs['info-section'].$refs['bonus-prizes-info'].$el
      this.$scrollTo(el, 600, { offset: 20 })
    },
    scrollToMyBots() {
      const el = this.$refs['my-bots'].$el
      this.$scrollTo(el, 600, { offset: 20 })
    }
  },
  mounted() {
    this.getIsMintedOut()
    this.getMyBots()
  }
}
</script>
