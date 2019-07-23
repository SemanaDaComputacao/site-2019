<template>
  <div id="nav">
    <button
      id="nav-toggle"
      :class="{ active: barActive }"
      class="nav__btn"
      @click="toggleBar"
      v-show="setBar"
    >
      <span></span>
    </button>
    <div class="nav__logo"></div>
    <scrollactive
      v-show="!setBar && !barActive"
      class="nav__menu"
      :offset="100"
    >
      <a
        v-for="item in items"
        :key="item.hook"
        class="scrollactive-item nav__menu--item"
        :href="item.hook"
        >{{ item.text }}
      </a>
    </scrollactive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barActive: false,
      setBar: false,
      windowWidth: window.innerWidth,
      items: [
        { hook: '#sobre', text: 'SOBRE' },
        { hook: '#agenda', text: 'AGENDA' },
        { hook: '#dia', text: 'UM DIA NA COMPUTAÇÃO' },
        { hook: '#local', text: 'LOCAL' }
      ]
    }
  },
  watch: {
    windowWidth() {
      if (this.windowWidth <= 768) this.setBar = true
      else {
        this.setBar = false
        this.barActive = false
      }
    }
  },
  created() {
    if (this.windowWidth <= 768) this.setBar = true
    else {
      this.setBar = false
      this.barActive = false
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  methods: {
    toggleBar() {
      this.barActive = !this.barActive
    }
  }
}
</script>

<style>
#nav {
  @apply fixed inset-x-0 top-0;
  @apply flex justify-between;
  @apply bg-white border-b-2 border-black;
  height: 9vh;
}

.nav__btn {
  @apply self-center mx-5;
}

.nav__menu {
  @apply flex flex-col;
}

.nav__menu--item {
  @apply px-2 pt-4;
}

.nav__menu--item:hover {
  @apply text-white font-bold bg-azul-semana;
}

.nav__menu--item:focus {
  outline: none;
}

@screen md {
  #nav {
    @apply bg-transparent border-transparent;
  }

  .nav__menu {
    @apply flex flex-row mx-6;
  }

  .nav__menu--item {
    @apply font-bold text-black;
    text-shadow: -1px -1px 0 #aa0cb5, 1px -1px 0 #aa0cb5, -1px 1px 0 #aa0cb5,
      1px 1px 0 #aa0cb5;
  }

  .nav__menu--item:hover {
    @apply bg-laranja-semana;
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
