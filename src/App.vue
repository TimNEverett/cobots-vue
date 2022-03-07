<template>
  <div class="w-screen h-screen">
    <header-vue />
    <main>
      <home />
    </main>
  </div>
</template>

<script>
import HeaderVue from "@/components/Header.vue"
import Home from "./views/Home.vue"
export default {
   name: 'App',
   components: {
     HeaderVue,
     Home
   }
}
</script>