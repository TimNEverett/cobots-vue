<template>
  <div class="bg-black border-2 p-2 border-zinc-400 rounded-2xl space-y-2">
    <div class=" bg-white text-black rounded-lg w-52 h-52 flex justify-center items-center">
      <div>{{imgUrl}}</div>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <button class="bg-zinc-200 text-black p-2 rounded-lg uppercase font-black flex">
        <twitter-logo class="fill-black w-5 mr-2"/>
        share
      </button>
      <button class="bg-zinc-200 text-black p-2 rounded-lg uppercase font-black">save</button>
    </div>
  </div>
</template>

<script>
import TwitterLogo from "../TwitterLogo.vue"
export default {
   name: 'BotCard',
   components: {
     TwitterLogo
   },
   props: {
     imgUrl: String
   }
}
</script>