<template>
  <div id="home">
    <navbar />
    <the-header class="home__item" />
    <about class="home__item background--crystal" />
    <schedule class="home__item background--crystal" />
    <comp-day class="home__item background--crystal" />
    <location class="home__item background--crystal" />
    <the-footer class="home__item background--crystal" />
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
  background-image: url('../assets/images/background.png');
  background-position: center;
  @apply border-b-2 pb-8;
}

.section__title {
  @apply mt-20 mb-12 border-8 self-center flex;
  border-style: inset;
}

.section__title--text {
  @apply text-4xl text-black font-extrabold mr-2 break-all;
}

.section__title--img {
  @apply w-16 h-16 p-2 mr-2 self-center;
}

a:focus {
  @apply outline-none;
}
</style>
