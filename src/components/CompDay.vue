<template>
  <section id="compday">
    <div class="section__title">
      <img
        class="section__title--img"
        src="../assets/images/icons/compday.png"
      />
      <p class="section__title--text">Um dia na Computação!</p>
    </div>
    <div class="compday--container">
      <p class="text">
        No dia 30 de agosto, teremos um dia dedicado à alunos do Ensino Médio e
        vestibulandos: o evento <strong>Um Dia Na Computação</strong> irá
        permitir que jovens comparem cursos parecidos da computação e façam um
        tour pelo IME-USP.
      </p>
      <p class="text">
        Estarão presentes alunos de Sistemas de Informação, Engenharia da
        Computação e Ciência da Computação. Assim, o estudante indeciso poderá
        conhecer mais a fundo os diferentes cursos e, com um panorama, ter
        melhores condições de escolher sua graduação.
      </p>
      <p class="text">
        Serão apresentados também os
        <a
          class="text--link"
          href="https://bcc.ime.usp.br/principal/miscelanea/gruposExtensao.html"
          >grupos de extensão</a
        >
        do IME-USP, organizados por alunos que estudam diversos temas da
        computação como desenvolvimento web, desenvolvimento de jogos,
        segurança, hardware, ação social e programação competitiva.
      </p>
      <p class="text">
        Finalmente teremos uma roda de bate-papo para sanar as dúvidas dos
        estudantes e apresentá-los ao curso de maneira mais próxima.
      </p>
      <p class="text">
        Saiba mais informações no
        <a
          class="text--link"
          href="https://www.facebook.com/events/866968350356744/"
          >evento do Facebook</a
        >.
      </p>
    </div>
    <a
      class="compday--btn"
      href="https://forms.gle/VYfuEHQ9NpMTQ8hx7"
      target="_blank"
      >INSCREVA-SE</a
    >
  </section>
</template>

<script>
export default {}
</script>

<style>
.compday--container {
  @apply flex flex-col;
}

.compday--btn {
  background: linear-gradient(45deg, orange, yellow, green, cyan, blue, violet);
  @apply self-center text-center font-bold text-black text-xl border-4 py-1 px-4 my-6;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
  border-style: outset;
}

.compday--btn:hover {
  @apply text-white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>
