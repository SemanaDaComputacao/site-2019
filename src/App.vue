<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: 'RobotoSlab';
  src: url('./assets/fonts/RobotoSlab-Regular.ttf');
}

#app {
  font-family: 'RobotoSlab', 'Avenir', Helvetica, Arial, sans-serif;
  @apply min-h-screen flex flex-col;
}
</style>
