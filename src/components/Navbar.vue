<template>
  <div id="nav">
    <button
      id="nav-toggle"
      :class="{ active: barActive }"
      class="nav__btn"
      @click="tooggleBar"
      v-show="setBar"
    >
      <span></span>
    </button>
    <div class="nav__logo"></div>
    <div class="nav__items" v-show="!setBar">
      <div class="--item">SOBRE</div>
      <div class="--item">AGENDA</div>
      <div class="--item">UM DIA NA COMPUTAÇÃO</div>
      <div class="--item">LOCAL</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barActive: false,
      setBar: false,
      windowWidth: window.innerWidth
    }
  },
  watch: {
    windowWidth() {
      if (this.windowWidth <= 768) this.setBar = true
      else this.setBar = false
    }
  },
  created() {
    if (this.windowWidth <= 768) this.setBar = true
    else this.setBar = false
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  methods: {
    tooggleBar() {
      this.barActive = !this.barActive
    }
  }
}
</script>

<style>
#nav {
  @apply fixed inset-x-0 top-0;
  @apply flex justify-between;
  @apply bg-purple-700 border-b-2 border-black;
  height: 9vh;
}

.nav__btn {
  @apply self-center mx-5;
}

.nav__items {
  @apply min-h-full flex;
}

.--item {
  @apply items-center p-4;
}

.--item:hover {
  @apply text-white font-bold bg-azul-semana;
}

#nav-toggle {
  cursor: pointer;
}
#nav-toggle span,
#nav-toggle span:before,
#nav-toggle span:after {
  cursor: pointer;
  border-radius: 1px;
  height: 3px;
  width: 30px;
  background: black;
  position: absolute;
  display: block;
  content: '';
}
#nav-toggle span:before {
  top: -10px;
}
#nav-toggle span:after {
  bottom: -10px;
}

#nav-toggle span,
#nav-toggle span:before,
#nav-toggle span:after {
  transition: all 500ms ease-in-out;
}
#nav-toggle.active span {
  background-color: transparent;
}
#nav-toggle.active span:before,
#nav-toggle.active span:after {
  top: 0;
}
#nav-toggle.active span:before {
  transform: rotate(45deg);
}
#nav-toggle.active span:after {
  transform: rotate(-45deg);
}
</style>
