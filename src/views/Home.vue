<template>
  <div id="home">
    <navbar />
    <the-header class="home__item" />
    <about class="home__item background--crystal" />
    <schedule class="home__item background--crystal" />
    <comp-day class="home__item" />
    <location class="home__item" />
    <the-footer class="home__item" />
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

.home__item {
  @apply flex flex-col min-h-screen;
}

.background--crystal {
  background-image: url('../assets/images/background2.png');
  background-position: center;
}

.text {
  @apply text-laranja-semana;
}
</style>
