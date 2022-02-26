<template>
  <div class="h-80 lg:h-[calc(100vh-5rem)] flex flex-col justify-between">
    <div class="flex flex-col justify-center items-center h-full">
      <router-view></router-view>
    </div>
    <img 
      src="assets/Bot-Illustration.svg" 
      class="">
  </div>
  <InfoSection />
</template>
<script>
import InfoSection from "@/components/InfoSection.vue"
export default {
   name: 'Home',
   components: {
     InfoSection
   }
}
</script>
