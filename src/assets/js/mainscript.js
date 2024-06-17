// Função para adicionar o main ao DOM
function adicionarMainAoDOM() {
  var div = document.createElement("div");
  div.innerHTML = `
<main class="container mt-5">
  <div id="row01" class="row">
    <div class="col-md-6 order-md-2">
      <img id="home-img-1" src="src/assets/img/3730447-removebg-preview.png" alt="Placeholder Image" class="img-fluid"
        data-aos="fade-top" />
    </div>
    <div class="col-md-6 order-md-1 align-self-center" data-aos="fade-top">
      <h1 id="title-1">Conversor de sensores</h1>
      <p id="text-1">
      Conversor de sensibilidade automática para jogos de FPS, mais adaptação, mais profissionalismo.
      </p>
      <a href="./src/docs/DeltaCompass.msi"><button id="download-btn" class="btn btn-lg btn-block custom-btn">Download</button></a>
      <button id="version-btn" class="btn btn-lg btn-block custom-btn">Other version</button>
    </div>
  </div>
  <br>
  <br>
  <div id="row02" class="row">
    <div class="col-md-6 order-md-2">
      <img id="home-img-2" src="src/assets/img/5241291-removebg-preview.png" alt="Placeholder Image" class="img-fluid"
        data-aos="fade-top" />
    </div>
    <div class="col-md-6 order-md-1 align-self-center" data-aos="fade-top">
      <h1 id="title-2">Facilidade e praticidade</h1>
      <p id="text-2">
Com o Delta Compass, os jogadores podem salvar suas configurações favoritas e aplicá-las a diferentes jogos, eliminando a necessidade de reconfigurar cada jogo individualmente.
      </p>
    </div>
  </div>
  <div id="row03" class="row">
    <div class="col-md-6">
      <img id="home-img-3" src="src/assets/img/cybersport_06-removebg-preview.png" alt="Placeholder Image" class="img-fluid" data-aos="fade-top" />
    </div>
    <div class="col-md-6 align-self-center" data-aos="fade-top">
      <h1 id="title-3">Encontre seus Pro-Jogadores favoritos aqui</h1>
      <p id="text-3">
O Delta Compass oferece aos jogadores a oportunidade de explorar e utilizar as configurações de outros jogadores profissionais.
      </p>
    </div>
  </div>
  <div id="row04" class="row">
    <div class="col-md-6 order-md-2">
      <img id="home-img-4" src="src/assets/img/Kerfin7_NEA_2332-removebg-preview.png" alt="Placeholder Image" class="img-fluid" data-aos="fade-top" />
    </div>
    <div class="col-md-6 order-md-1 align-self-center" data-aos="fade-top">
      <h1 id="title-4">Adaptando-se a novos jogos</h1>
      <p id="text-4">
O Delta Compass é uma ferramenta indispensável para qualquer jogador profissional que deseja otimizar sua experiência de jogo e alcançar seu pleno potencial.
      </p>
    </div>
  </div>
</main>
  `;
  document.body.appendChild(div);
}

adicionarMainAoDOM();
