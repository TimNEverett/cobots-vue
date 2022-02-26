<template>
  <div>
    <header-vue />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderVue from "@/components/Header.vue"
export default {
   name: 'App',
   components: {
     HeaderVue
   }
}
</script>