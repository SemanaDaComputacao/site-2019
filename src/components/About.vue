<template>
  <section id="about">
    <div class="section__title">
      <img class="section__title--img" src="../assets/images/icons/about.png" />
      <p class="section__title--text">Sobre</p>
    </div>
    <p class="text">
      A Semana da Computação é um evento anual que promove um ciclo de palestras
      sobre os mais variados temas da computação. Realizado desde 2009 como
      <strong>Encontro do BCC</strong>, nesta 11ª edição do evento, seguimos com
      o nome adotado na edição passada. Assim, esperamos deixar claro que esse
      evento não é só para as pessoas do BCC do IME, mas sim a todos os
      interessados em computação. Não deixe de curtir a nossa
      <a
        class="text--link"
        href="https://www.facebook.com/semanacomputacaoimeusp/"
        >página no Facebook</a
      >!
    </p>
    <div class="section__title">
      <img class="section__title--img" src="../assets/images/icons/team.png" />
      <p class="section__title--text">Equipe</p>
    </div>
    <p class="text">
      Esse evento é organizado por estudantes do IME. Nós contamos com apoio
      institucional da USP e patrocínio de empresas. Conheça os alunos
      responsáveis pela organização do evento.
    </p>
    <div class="about--container">
      <span
        v-for="(member, index) in team"
        :key="index"
        class="member--container"
      >
        <img
          class="member__photo"
          :src="photoLocation(member.photo)"
          :alt="member.name"
        />
        <span class="member__name"> {{ member.name }} </span>
      </span>
    </div>
  </section>
</template>

<script>
import teamJson from '../data/team.json'

export default {
  data() {
    return {
      team: {}
    }
  },
  mounted() {
    let obj = JSON.stringify(teamJson)
    this.team = JSON.parse(obj)
  },
  methods: {
    photoLocation(photo) {
      return require(`../assets/images/team/${photo}`)
    }
  }
}
</script>

<style>
#about {
  @apply text-justify;
  margin-top: 7vh;
}

.about--container {
  @apply flex flex-wrap justify-center;
}

.member--container {
  @apply flex flex-col m-8;
  flex-basis: 50%;
}

.member__photo {
  @apply w-32 h-32 rounded-full self-center;
}

.member__name {
  @apply self-center mt-1 text-rosa-semana text-xl;
}

@screen sm {
  .member--container {
    @apply self-center m-4;
    flex-basis: 30%;
  }
}
</style>
