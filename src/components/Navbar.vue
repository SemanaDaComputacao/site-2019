<template>
  <div id="nav" :class="{ 'nav--active': setBar && itemsActive }">
    <button
      id="nav-toggle"
      :class="{ active: itemsActive }"
      class="nav__btn"
      @click="toggleBar"
      v-show="setBar"
    >
      <span></span>
    </button>
    <a href="/" class="nav__logo" v-show="!setBar">
      <img src="../assets/images/logo.png" alt="" srcset="" />
    </a>
    <scrollactive
      v-show="itemsActive"
      class="nav__menu"
      :class="[{ 'nav__menu--active': setBar && itemsActive }]"
      :offset="0"
    >
      <a
        v-for="item in items"
        :key="item.hook"
        class="scrollactive-item nav__menu--item"
        :class="[{ 'item--active': setBar && itemsActive }]"
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
      itemsActive: false,
      setBar: false,
      windowWidth: window.innerWidth,
      items: [
        { hook: '#about', text: 'SOBRE' },
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
}

.nav__logo {
  @apply w-32 mx-8;
}

.nav__btn {
  @apply self-start m-3;
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

.nav__menu--item:focus {
  outline: none;
}

@screen md {
  #nav {
    @apply flex-row justify-between bg-transparent border-transparent;
  }

  .nav__menu {
    @apply mx-6;
  }

  .nav__menu--item {
    @apply font-bold text-black py-4;
    text-shadow: -1px -1px 0 #aa0cb5, 1px -1px 0 #aa0cb5, -1px 1px 0 #aa0cb5,
      1px 1px 0 #aa0cb5;
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
