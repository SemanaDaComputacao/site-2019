<template>
  <div id="home">
    <navbar />
    <the-header class="home__item min-h-screen" />
    <about class="home__item background--crystal" />
    <schedule class="home__item background--crystal" />
    <comp-day class="home__item background--crystal" />
    <location class="home__item background--crystal" />
    <partners class="home__item" />
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
import Partners from '@/components/Partners'
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
    Partners,
    TheFooter
  }
}
</script>

<style>
#home {
  @apply flex flex-col min-h-screen;
}

.home__item {
  @apply flex flex-col text-laranja-semana;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
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
  @apply text-3xl text-rosa-semana font-extrabold mr-2 break-words;
}

.section__title--img {
  @apply w-12 h-12 p-2 mr-2 self-center;
}

a:focus {
  @apply outline-none;
}

@screen md {
  .section__title--text {
    @apply text-4xl;
  }

  .section__title--img {
    @apply w-16 h-16;
  }
}
</style>
