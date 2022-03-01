<template>
  <div class="flex flex-col justify-center items-center py-16">
    <div class="uppercase text-5xl text-white font-black mb-8">my bots</div>
    <div class="flex justify-center flex-wrap px-32 gap-4">
      <bot-card v-for="b in bots" :key="b.id" :imgUrl="b.svgUrl"></bot-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BotCard from "./BotCard.vue"
export default {
  name: 'MyBotsSection',
  components: {
    BotCard,
  },
  computed: {
    ...mapGetters('bots', ['allBots'])
  }
}
</script>