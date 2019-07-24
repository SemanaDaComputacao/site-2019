<template>
  <section id="lecture">
    <scrollactive :offset="60" :duration="600" :modifyUrl="false">
      <a href="#schedule" class="scrollactive-item" @click="$emit('close')">
        OK
      </a>
    </scrollactive>
    <div>
      {{ info }}
    </div>
  </section>
</template>

<script>
export default {
  props: {
    info: {}
  }
}
</script>

<style>
#home {
  @apply overflow-hidden;
}
</style>
