<template>
  <div id="header">
    <picture class="header__img">
      <source
        srcset="../assets/images/rotated.png"
        media="(min-width: 768px)"
      />
      <img src="../assets/images/wrapped-rotated.png" />
    </picture>
    <div class="header__info">
      <p>DÉCIMA PRIMEIRA EDIÇÃO | IME-USP</p>
      <p>26/08/19 À 30/08/19</p>
    </div>
    <scrollactive
      class="header__btn"
      :offset="60"
      :duration="1200"
      :modifyUrl="false"
    >
      <a href="#info" class="scrollactive-item">
        <img class="h-6 w-10" src="../assets/images/icons/down-chevron.png" />
      </a>
    </scrollactive>
  </div>
</template>

<script>
export default {}
</script>

<style>
#header {
  @apply justify-end;
  background-image: url('../assets/images/background-header.png');
  background-position: center;
  background-size: cover;
}

.header__img {
  @apply self-center my-16;
  width: 340px;
}

@screen sm {
  .header__img {
    width: 450px;
  }
}

@screen md {
  .header__img {
    width: 720px;
  }
}

.header__info {
  @apply flex flex-col items-center;
  @apply text-center text-white text-xl;
}

.header__btn {
  @apply self-center mt-4 mb-12;
}

.header__btn:focus {
  outline: none;
}
</style>
