<template>
  <section id="info">
    <div class="info__content">
      <div class="content--item">
        <img class="item--title" src="../assets/images/icons/palestras.png" />
        <p class="item--text">
          Mais de 10 horas de conteúdo sobre diversas áreas da computação
        </p>
      </div>
      <div class="content--item">
        <img class="item--title" src="../assets/images/icons/stands.png" />
        <p class="item--text">
          Não perca a oportunidade de ter acesso ao recrutamento das melhores
          empresas de tecnologia
        </p>
      </div>
      <div class="content--item">
        <img class="item--title" src="../assets/images/icons/coffee.png" />
        <p class="item--text">
          Oferecemos comes e bebes para todos os participantes do evento como
          cortesia
        </p>
      </div>
    </div>
    <p class="text">
      Bem vindos a mais uma edição da <strong>Semana da Computação</strong>! O
      evento, gratuito e aberto, chega em 2019 na sua décima primeira edição com
      muito conteúdo e novidades exclusivas.
    </p>
    <p class="text">
      Serão <strong>16 palestras</strong> sobre os mais diversos temas da
      computação. Essa é uma grande oportunidade de conhecer os caminhos da
      carreira com <strong>especialistas de todo o Brasil</strong>.
    </p>
    <p class="text">
      Nesse ano, também contaremos com um dia especial dedicado a alunos do
      Ensino Médio: o evento <strong>Um Dia Na Computação</strong> irá permitir
      que jovens comparem cursos parecidos da computação e façam um tour pelo
      IME-USP.
    </p>
    <p class="text">
      Durante os dias, haverá
      <strong>stands de recrutamento</strong> das melhores empresas de
      tecnologia com atuação no Brasil. Se você está se formando, procurando
      estágio ou apenas quer conhecer o mercado, não pode ficar de fora dessa.
    </p>
  </section>
</template>

<script>
export default {}
</script>

<style>
.info__content {
  @apply flex flex-col justify-between;
  @apply shadow-lg bg-gray-200 mx-4 mb-8 border-8;
  border-style: inset;
  text-shadow: none;
}

.content--item {
  @apply flex flex-col m-4 text-black;
}

.item--title {
  @apply self-center;
}

.item--text {
  @apply mt-4 text-center self-center text-xl;
}

@screen md {
  .info__content {
    @apply flex-row;
  }
}
</style>
