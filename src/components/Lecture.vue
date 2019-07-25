<template>
  <section id="lecture">
    <scrollactive
      :offset="60"
      :duration="600"
      :modifyUrl="false"
      class="lecture__btn"
    >
      <a href="#schedule" class="scrollactive-item" @click="$emit('close')">
        <img class="h-5 w-5" src="../assets/images/icons/cancel.png" />
      </a>
    </scrollactive>
    <div class="lecture__content">
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
#lecture {
  @apply flex flex-col;
  @apply rounded-lg shadow-lg bg-white m-4 ml-0 p-6;
  @apply text-black;
}

.lecture__content {
  @apply mt-8;
}

.lecture__btn {
  @apply self-end;
}
</style>
