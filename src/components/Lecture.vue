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
      <p class="lecture__title">
        {{ info.title }}
      </p>
      <div class="lecture--container">
        <p class="title--text">Sinopse</p>
        <p class="lecture__description">
          {{ info.description }}
        </p>
      </div>
      <div class="lecture--container">
        <p class="title--text">Palestrante</p>
        <div class="speaker">
          <div class="speaker__info">
            <img :src="imageLocation(info.speakerPhoto)" class="speaker__img" />
            <div class="speaker--container">
              <p class="speaker__name">
                {{ info.speaker }}
              </p>
              <p class="speaker__title">
                {{ info.speakerTitle }}
              </p>
            </div>
          </div>
          <p class="speaker__bio">
            {{ info.bio }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    info: {}
  },
  methods: {
    imageLocation(photo) {
      return require(`../assets/images/speakers/${photo}`)
    }
  }
}
</script>

<style>
#lecture {
  background-image: url('../assets/images/background-lecture.png');
  background-position: center;
  text-shadow: none;
  @apply flex flex-col;
  @apply shadow-lg bg-white m-4 p-8;
  @apply text-black text-lg border-8;
  border-style: inset;
}

.lecture__content {
  @apply flex flex-col mt-4 text-left;
}

.lecture__title {
  @apply text-4xl font-bold text-left;
}

.lecture--container {
  @apply flex flex-col flex-wrap mt-4;
}

.lecture__description {
  @apply text-left mt-4;
  flex: 4;
}

.lecture__btn {
  @apply self-end;
}

.speaker {
  @apply flex flex-col flex-wrap text-left;
  flex: 4;
}

.speaker__info {
  @apply flex flex-col self-center;
}

.speaker__img {
  @apply rounded-full self-center m-4;
  height: 20vh;
  width: 20vh;
}

.speaker--container {
  @apply flex flex-col justify-center text-center;
}

.speaker__name {
  @apply font-bold;
}

.speaker__bio {
  @apply mt-4;
}

.title--text {
  @apply w-auto mr-4 text-3xl flex-1 text-left;
}

@screen sm {
  #lecture {
    @apply mx-16;
  }
}

@screen md {
  #lecture {
    @apply mx-24;
  }

  .lecture__content {
    @apply text-center;
  }

  .lecture--container {
    @apply flex-row mt-8;
  }

  .speaker__info {
    @apply flex-row self-start;
  }

  .speaker--container {
    @apply text-left ml-4;
  }

  .title--text {
    @apply h-16;
  }
}
</style>
