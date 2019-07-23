<template>
  <div id="page">
    <navbar />
    <div class="page__item front--bg justify-end">
      <picture class="front__img">
        <source
          srcset="../assets/images/rotated.png"
          media="(min-width: 768px)"
        />
        <img src="../assets/images/wrapped-rotated.png" />
      </picture>
      <div class="front__info">
        <p>DÉCIMA PRIMEIRA EDIÇÃO | IME-USP</p>
        <p>26/08/19 À 30/08/19</p>
      </div>
      <button class="front__btn">
        <font-awesome-icon icon="chevron-down" />
      </button>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'home',
  components: {
    Navbar
  }
}
</script>

<style>
#page {
  @apply flex flex-col min-h-screen;
}

.page__item {
  @apply flex flex-col min-h-screen;
  overflow: hidden;
}

.front--bg {
  background-image: url('../assets/images/background.png');
  background-position: center;
  background-size: cover;
}

.front__img {
  @apply self-center my-8;
  height: 250px;
  width: 340px;
}

@screen sm {
  .front__img {
    height: 280px;
    width: 450px;
  }
}

@screen md {
  .front__img {
    height: 250px;
    width: 720px;
  }
}

.front__info {
  @apply flex flex-col items-center;
  @apply text-center text-white text-xl;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}

.front__btn {
  /* @apply self-center border-2 border-black rounded; */
  /* @apply bg-azul-semana text-white text-lg mt-4 mb-12 px-2 py-1; */
  @apply self-center text-black text-4xl mt-4 mb-12;
}

.front__btn:focus {
  outline: none;
}
</style>
