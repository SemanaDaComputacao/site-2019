<template>
  <section id="partners">
    <p class="partners--title">Patrocínio</p>
    <div class="partners--container">
      <a
        v-for="partner in sponsor"
        :key="partner.name"
        :href="partner.link"
        target="_blank"
        class="logo--container"
      >
        <img
          class="partner--logo"
          :src="logoLocation(partner.logo)"
          :alt="partner.name"
        />
      </a>
    </div>
    <p class="partners--title">Apoio</p>
    <div class="partners--container">
      <a
        v-for="partner in support"
        :key="partner.name"
        :href="partner.link"
        target="_blank"
        class="logo--container"
      >
        <img
          class="partner--logo"
          :src="logoLocation(partner.logo)"
          :alt="partner.name"
        />
      </a>
    </div>
  </section>
</template>

<script>
import partners from '../assets/data/partners.json'

export default {
  data() {
    return {
      sponsor: [],
      support: []
    }
  },
  mounted() {
    let obj = JSON.stringify(partners)
    let partnerArr = JSON.parse(obj)

    this.sponsor = partnerArr.filter(item => {
      return item.type !== 'apoio'
    })

    this.support = partnerArr.filter(item => {
      return item.type === 'apoio'
    })
  },
  methods: {
    logoLocation(logo) {
      return require(`../assets/images/partners/${logo}`)
    }
  }
}
</script>

<style>
#partners {
  @apply bg-gray-200;
}

.partners--title {
  @apply text-4xl m-4 text-center text-rosa-semana;
}

.partners--container {
  @apply flex flex-wrap justify-center items-center;
}

.logo--container {
  @apply flex justify-center m-4;
  flex-basis: 50%;
}

.partner--logo {
  @apply h-16;
}

@screen sm {
  .logo--container {
    @apply self-center m-4;
    flex-basis: 30%;
  }
}
</style>
