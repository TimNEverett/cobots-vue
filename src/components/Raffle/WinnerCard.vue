<template>
  <div class="w-40 h-40 rounded-lg border-dashed border-2 border-cobots-silver flex flex-col justify-center items-center">
    <div v-if="!winner" class="text-cobots-silver-2 font-black"> NOT YET <br/> DRAWN</div>
  </div>
</template>

<script>
export default {
    name: 'WinnerCard',
    props: {
      winner: Object
    }
}
</script>