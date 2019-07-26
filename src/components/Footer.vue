<template>
  <section id="footer">
    <div>
      <p class="footer--text">
        <strong>Edições anteriores</strong><br />
        <a class="footer--link" href="http://www.ime.usp.br/~encontrobcc/2010/"
          >II 2010</a
        >
        &middot;
        <a class="footer--link" href="http://www.ime.usp.br/~encontrobcc/2011/"
          >III 2011</a
        >
        &middot;
        <a class="footer--link" href="http://www.ime.usp.br/~encontrobcc/2012/"
          >IV 2012</a
        >
        &middot;
        <a class="footer--link" href="http://www.ime.usp.br/~encontrobcc/2013/"
          >V 2013</a
        >
        &middot;
        <a class="footer--link" href="http://bcc.ime.usp.br/40anos/">VI 2014</a>
        &middot;
        <a class="footer--link" href="http://bcc.ime.usp.br/encontro/2015"
          >VII 2015</a
        >
        &middot;
        <a class="footer--link" href="http://bcc.ime.usp.br/encontro/2016/#/"
          >VIII 2016</a
        >
        &middot;
        <a class="footer--link" href="https://bcc.ime.usp.br/encontro/2017"
          >IV 2017</a
        >
      </p>
      <p class="footer--text">
        <a
          class="footer--link"
          href="https://www.facebook.com/semanacomputacaoimeusp/"
          >Página no Facebook</a
        >
      </p>
      <p class="footer--text">
        <strong>Semana da Computação &copy; 2019</strong><br />
      </p>
      <p class="footer--text">
        Ícones desenvolvidos pela
        <a class="footer--link" href="http://www.freepik.com/">Freepik</a> de
        <a class="footer--link" href="https://www.flaticon.com"
          >www.flaticon.com</a
        >.
      </p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
#footer {
  @apply bg-gray-200 text-black text-base pt-8 text-center border-t-4;
  text-shadow: none;
}

.footer--link {
  @apply text-blue-600 underline px-2;
}

.footer--text {
  @apply mb-6;
}
</style>
