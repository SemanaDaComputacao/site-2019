<template>
  <div id="home">
    <navbar />
    <the-header class="home--item" />
    <about class="flex flex-col" />
    <schedule class="home--item" />
    <comp-day class="home--item" />
    <location class="home--item" />
    <the-footer class="home--item" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import TheHeader from '@/components/Header'
import About from '@/components/About'
import Schedule from '@/components/Schedule'
import CompDay from '@/components/CompDay'
import Location from '@/components/Location'
import TheFooter from '@/components/Footer'

export default {
  name: 'home',
  components: {
    Navbar,
    TheHeader,
    About,
    Schedule,
    CompDay,
    Location,
    TheFooter
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
