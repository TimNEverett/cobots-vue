<template>
  <div class="flex flex-col justify-center items-center py-16">
    <div class="uppercase text-5xl text-white font-black mb-8">my bots</div>
    <div class="flex justify-center flex-wrap px-32 gap-4">
      <bot-card v-for="b in bots" :key="b.id" :imgUrl="b.svgUrl"></bot-card>
    </div>
  </div>
</template>

<script>
import BotCard from "./BotCard.vue"
export default {
  name: 'MyBotsSection',
  components: {
    BotCard,
  },
  data() {
    return {
      bots: [
        {
          id: 1,
          svgUrl: "url1"
        },
        {
          id: 2,
          svgUrl: "url2"
        },
        {
          id: 3,
          svgUrl: "url3"
        },
        {
          id: 4,
          svgUrl: "url4"
        },
        {
          id: 5,
          svgUrl: "url5"
        },
        {
          id: 6,
          svgUrl: "url6"
        },
        {
          id: 7,
          svgUrl: "url7"
        },
      ]
    }
  }
}
</script>