<template>
  <div
    class="w-40 h-40 rounded-lg border-dashed border-2 border-cobots-silver flex flex-col justify-center items-center"
  >
    <img v-if="botImage" :src="botImage" class="rounded-lg" />
    <div
      v-else
      class="text-cobots-silver-2 font-black text-[14px] leading-[16px]"
    >
      NOT YET <br />
      DRAWN
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "WinnerCard",
  props: {
    address: String,
    tokenId: Number,
  },
  computed: {
    ...mapGetters("prizes", ["botByTokenIndex"]),
    botImage() {
      return this.botByTokenIndex(this.tokenId);
    },
  },
  methods: {
    ...mapActions("prizes", ["getBotForTokenIndex"]),
  },
  mounted() {
    this.getBotForTokenIndex(this.tokenId);
  },
};
</script>
