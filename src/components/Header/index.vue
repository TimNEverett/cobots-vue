<template>
<div class="bg-black" @resize="resizeHandler">
  <div class="flex py-2 pl-4 justify-between h-12 sm:hidden ">
    <Logo class=" fill-white"/>
    <social-media-buttons class="w-24"/>
  </div>
  <div class="flex-row flex items-center justify-center sm:justify-between pl-2 md:pl-9 sm:py-4 w-full md:h-20">
    <Logo class="hidden sm:block fill-white"/>

    <div class="flex-row flex items-center justify-between sm:justify-center text-sm sm:text-xl">
      <div 
        class="items-center px-2"
        :class="{'hidden lg:flex': canMint, 'flex': !canMint}"
      >
        <p class="text-cobots-silver-2 mr-1">MINTED:</p>
        <p class="text-white font-extrabold">
          {{ totalString }}/{{ maxString }}
          </p>
      </div>
      <div v-if="canMint" class="flex items-center px-2">
        <p class="text-cobots-silver-2 mr-1">MINT PRICE:</p>
        <p class="text-white font-black">{{ mintPrice }} ETH</p>
      </div>
      <count-down/>
    </div>

    <social-media-buttons class="hidden sm:flex"/>
  </div>
  </div>
</template>

<script>
import Logo from "@/components/logo.vue";
import SocialMediaButtons from "@/components/SocialMediaButtons.vue"
import CountDown from "@/components/Header/CountDown.vue"
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'Header',
  components: {
    Logo,
    SocialMediaButtons,
    CountDown
  },
  computed: {
    ...mapGetters('mint', [
      'totalSupply',
      'mintPrice',
      'mintLimit',
    ]),
    ...mapGetters('contractState', ['canMint', 'maxSupply']),
    totalString() {
      if(this.totalSupply) return this.totalSupply.toLocaleString('en-US')
      return ''
    },
    maxString() {
      console.log('maxSupply', this.maxSupply)
      if(this.maxSupply) return this.maxSupply.toLocaleString('en-US')
      return ''
    }
  },
  methods:{
    ...mapActions('layout', ['setHeaderHeight']),
    ...mapActions('mint', ['getTotalSupply']),
    resizeHandler(){
      this.setHeaderHeight(this.$el.clientHeight)
    }
  },
  mounted() {
    this.getTotalSupply()
    this.setHeaderHeight(this.$el.clientHeight)
  }
}
</script>