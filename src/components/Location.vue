<template>
  <section id="location">
    <div class="section__title">
      <img
        class="section__title--img"
        src="../assets/images/icons/location.png"
      />
      <p class="section__title--text">Local</p>
    </div>

    <div class="columns is-centered">
      <div class="column is-10">
        <p class="text">
          A Semana da Computação ocorrerá no IME-USP, localizado na Cidade
          Universitária. As palestras serão realizadas no auditório
          <strong>Jacy Monteiro</strong> no <strong>Bloco B</strong>.
        </p>
        <address class="text">
          Rua do Matão, 1010 &mdash; CEP 05508-090 &mdash; São Paulo &mdash; SP
        </address>
      </div>
    </div>

    <div class="map-wrapper">
      <div class="painel">
        <div class="image-wrapper">
          <div class="image"></div>
          <h2 class="text">IME-USP</h2>
        </div>

        <div class="content columns is-multiline">
          <div class="column is-full">
            <p class="has-text-centered">
              O Instituto de Matemática e Estatística da Universidade de São
              Paulo é um centro de ensino e pesquisa que ministra cursos de
              matemática, estatística e ciência da computação.
            </p>
          </div>

          <div class="column is-full">
            <h3>Ônibus</h3>
            <ul>
              <li>
                <a
                  href="https://www.ime.usp.br/images/arquivos/imagens/itinerarios.pdf"
                  >Trajeto dos circulares 8012 e 8022</a
                >
              </li>
              <li>
                <a
                  href="https://www.ime.usp.br/images/arquivos/imagens/cidadeuniversitaria.pdf"
                  >Mapa do Campus</a
                >
              </li>
            </ul>
          </div>

          <div class="columns half">
            <div class="column half">
              <h3>Metrô</h3>
              <p>
                A estação mais próxima é a <strong>Butantã</strong>, da linha 4
                amarela.
              </p>
            </div>

            <div class="column half">
              <h3>Trem</h3>
              <p>
                A estação mais próxima é a
                <strong>Cidade Universitária</strong>, da linha 9 esmeralda da
                CPTM.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="map"></div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/css/utils.scss';

#location {
  margin: auto;

  h3 {
    color: #000;
    font-size: 1.5em;
    margin-bottom: 0.6666em;
    font-weight: bold;
  }

  ul {
    list-style: disc outside;
    margin-left: 2em;
    margin-top: 1em;
  }

  .has-text-centered {
    text-align: center;
  }
}

.map-wrapper {
  font-family: 'Lato', sans-serif;
  margin-top: 15px;
  position: relative;
  text-shadow: none;

  a {
    color: $link-light-bg;
  }

  #map {
    width: 100%;
    height: 630px;

    @include until($tablet) {
      height: 320px;
    }
  }

  .painel {
    width: 350px;
    height: 570px;
    left: 10px;
    position: absolute;
    top: 45px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
    border-radius: 2px;
    color: #565a5c;
    z-index: 2;

    @include until($tablet) {
      position: relative;
      margin-bottom: 10px;
      width: 100%;
      top: unset;
      left: unset;
    }

    .image-wrapper {
      position: relative;
    }

    .image {
      width: 100%;
      height: 180px;
      background-image: url('../assets/images/ime-fachada-700.jpg');
      background-size: cover;
      background-position: center;
    }

    .image::after {
      background: #000;
      opacity: 0.3;
      filter: alpha(opacity=30);
      content: ' ';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    h2 {
      width: 100%;
      position: absolute;
      left: 0;
      top: 43%;
      color: #eee;
      text-align: center;
      font-weight: bold;
      font-size: 30px;
    }

    .content {
      margin: 10px;
      font-size: 14px;
    }
  }

  .columns.half {
    display: flex;
  }
  .column {
    padding: 0.75rem;

    &.half {
      width: 50%;
    }
  }

  strong {
    color: #000;
  }
}
</style>
