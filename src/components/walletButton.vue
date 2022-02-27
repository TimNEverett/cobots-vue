<template>
  <div class="flex flex-col items-center space-y-4">
    <button class=" w-40 rounded-full border-2 border-zinc-300 px-4 py-2 font-black">
      {{ addressTruncated }}    
    </button>
    <div class="uppercase underline font-black text-sky-400">View my bots</div>
  </div>
</template>

<script>
export default {
   name: 'walletButton',
   data() {
     return {
       address: '0x25522B4FD92cEa7749227EC2a4e4e3F640b58ae5'
     }
   },
   computed: {
     addressTruncated() {
       let start = this.address.substring(0, 4)
       let end = this.address.substring(this.address.length - 4, this.address.length)
       return `${start}...${end}`
     }
   }
}
</script>