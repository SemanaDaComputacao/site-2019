<template>
  <div id="home">
    <navbar @openAbout="aboutOpen" @closeAbout="aboutClose" />
    <the-header v-show="!aboutState" class="home__item min-h-screen" />
    <info v-show="!aboutState" class="home__item background--crystal" />
    <schedule v-show="!aboutState" class="home__item background--crystal" />
    <comp-day v-show="!aboutState" class="home__item background--crystal" />
    <location v-show="!aboutState" class="home__item background--crystal" />
    <about v-show="aboutState" class="home__item background--crystal" />
    <partners class="home__item" />
    <the-footer class="home__item" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import TheHeader from '@/components/Header'
import Info from '@/components/Info'
import Schedule from '@/components/Schedule'
import CompDay from '@/components/CompDay'
import Location from '@/components/Location'
import About from '@/components/About'
import Partners from '@/components/Partners'
import TheFooter from '@/components/Footer'

export default {
  name: 'home',
  components: {
    Navbar,
    TheHeader,
    Info,
    Schedule,
    CompDay,
    Location,
    About,
    Partners,
    TheFooter
  },
  data() {
    return {
      aboutState: false
    }
  },
  methods: {
    aboutOpen() {
      this.aboutState = true
    },
    aboutClose() {
      this.aboutState = false
    }
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
  @apply mt-12 mb-8 border-8 self-center flex;
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

.text {
  @apply text-lg mx-2 my-3 px-4 text-justify;
}

.text--link {
  @apply text-blue-400 underline;
}

@screen md {
  .section__title--text {
    @apply text-4xl;
  }

  .section__title--img {
    @apply w-16 h-16;
  }

  .text {
    @apply px-16;
  }
}
</style>
