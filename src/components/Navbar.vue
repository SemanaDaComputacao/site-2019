<template>
  <div id="nav" :class="{ 'nav--active': setBar && itemsActive }">
    <div class="nav--container">
      <button
        id="nav-toggle"
        :class="{ active: itemsActive }"
        class="nav__btn"
        @click="toggleBar"
        v-show="setBar"
      >
        <span></span>
      </button>
      <scrollactive
        class="nav__logo"
        :offset="60"
        :duration="1200"
        :modifyUrl="false"
      >
        <a
          href="#home"
          class="scrollactive-item"
          @click="$emit('closeAbout')"
          v-show="!setBar"
        >
          <img src="../assets/images/logo-branco.svg" alt="" srcset="" />
        </a>
        <a
          href="#home"
          class="scrollactive-item"
          @click="$emit('closeAbout')"
          v-show="setBar"
        >
          <img src="../assets/images/logo-preto.svg" alt="" srcset="" />
        </a>
      </scrollactive>
    </div>
    <scrollactive
      v-show="itemsActive"
      class="nav__menu"
      :class="{ 'nav__menu--active': setBar && itemsActive }"
      :offset="60"
      :duration="1200"
      :modifyUrl="false"
    >
      <a
        v-for="(item, index) in items"
        :key="index"
        class="scrollactive-item nav__menu--item"
        :class="{ 'item--active': setBar && itemsActive }"
        :href="item.hook"
        @click="$emit('closeAbout') && setBar ? toggleBar() : null"
        >{{ item.text }}
      </a>
      <a
        href="#about"
        class="scrollactive-item nav__menu--item"
        :class="{ 'item--active': setBar && itemsActive }"
        @click="$emit('openAbout') && setBar ? toggleBar() : null"
        >SOBRE</a
      >
    </scrollactive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsActive: false,
      setBar: false,
      windowWidth: window.innerWidth,
      items: [
        { hook: '#schedule', text: 'AGENDA' },
        { hook: '#compday', text: 'UM DIA NA COMPUTAÇÃO' },
        { hook: '#location', text: 'LOCAL' }
      ]
    }
  },
  watch: {
    windowWidth() {
      if (this.windowWidth <= 768) {
        this.setBar = true
        this.itemsActive = false
      } else {
        this.setBar = false
        this.itemsActive = true
      }
    }
  },
  created() {
    if (this.windowWidth <= 768) {
      this.setBar = true
      this.itemsActive = false
    } else {
      this.setBar = false
      this.itemsActive = true
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  methods: {
    toggleBar() {
      this.itemsActive = !this.itemsActive
    }
  }
}
</script>

<style>
#nav {
  @apply fixed inset-x-0 top-0;
  @apply flex flex-col justify-center;
  @apply bg-white;
  z-index: 10;
}

.nav--container {
  @apply flex justify-between;
}
.nav__logo {
  @apply w-32 ml-4 my-1;
}

.nav__btn {
  @apply self-center m-3;
}

.nav__menu {
  @apply flex;
}

.nav__menu--active {
  @apply flex-col items-center bg-white;
}

.item--active {
  @apply min-w-full text-center;
}

.nav__menu--item {
  @apply p-2;
}

.nav__menu--item:hover {
  @apply text-white font-bold bg-laranja-semana;
}

@screen md {
  #nav {
    @apply flex-row justify-between bg-azul-semana border-transparent;
    background-image: url('../assets/images/background.png');
    background-position: center;
  }

  .nav__menu {
    @apply mx-6;
  }

  .nav__menu--item {
    @apply font-bold text-white py-4;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  .nav__menu--item:hover {
    text-shadow: none;
  }
}

#nav-toggle {
  cursor: pointer;
  padding: 10px 30px 16px 0px;
  outline: none;
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
