<template>
  <div id="home">
    <navbar />
    <the-header class="home--item" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import TheHeader from '@/components/Header'

export default {
  name: 'home',
  components: {
    Navbar,
    TheHeader
  }
}
</script>

<style>
#home {
  @apply flex flex-col min-h-screen;
}

.home--item {
  @apply flex flex-col min-h-screen;
}
</style>
