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
      <div class="compday__info">
        <p>
          No dia 30 de agosto, teremos um dia dedicado à alunos do Ensino Médio
          e vestibulandos: o evento <strong>Um Dia Na Computação</strong> irá
          permitir que jovens comparem cursos parecidos da computação e façam um
          tour pelo IME-USP.
        </p>
        <p>
          Estarão presentes alunos de Sistemas de Informação, Engenharia da
          Computação e Ciência da Computação. Assim, o estudante indeciso poderá
          conhecer mais a fundo os diferentes cursos e, com um panorama, ter
          melhores condições de escolher sua graduação.
        </p>
        <p>
          Serão apresentados também os
          <a
            class="compday--links"
            href="https://bcc.ime.usp.br/principal/miscelanea/gruposExtensao.html"
            >grupos de extensão</a
          >
          do IME-USP, organizados por alunos que estudam diversos temas da
          computação como desenvolvimento web, desenvolvimento de jogos,
          segurança, hardware, ação social e programação competitiva.
        </p>
        <p>
          Finalmente teremos uma roda de bate-papo para sanar as dúvidas dos
          estudantes e apresentá-los ao curso de maneira mais próxima.
        </p>
        <p>
          Saiba mais informações no
          <a
            class="compday--links"
            href="https://www.facebook.com/events/708963852786013/"
            >evento do Facebook</a
          >.
        </p>
      </div>
      <a
        class="compday--btn"
        href="https://docs.google.com/a/usp.br/forms/d/1vLxKflqntxYpfwfzRnVMnMlr8Pel_5YoJVwcN_jPHf8/viewform"
        >INSCREVA-SE</a
      >
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.compday--container {
  @apply flex flex-col;
}

.compday__info > p {
  @apply text-lg my-3 px-4;
}

.compday--btn {
  @apply self-center text-center bg-gray-400 font-bold text-black text-lg border-4 py-1 px-4 mt-4;
  text-shadow: none;
  border-style: inset;
}

.compday--btn:active {
  @apply bg-gray-500;
}

.compday--links {
  @apply text-blue-600 underline;
}

@screen md {
  .compday__info > p {
    @apply m-4 px-16;
  }
}
</style>
