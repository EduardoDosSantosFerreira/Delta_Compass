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
        <h1 id="title-1">Sensor converter</h1>
        <p id="text-1">
          Automatic sensitivity converter for FPS Games, More adaptation, more professionalism.
        </p>
        <button id="download-btn" class="btn btn-lg btn-block custom-btn">Download</button>
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
        <h1 id="title-2">Ease and practicality</h1>
        <p id="text-2">
          With Delta Compass, players can save their favorite settings and apply them to different games, eliminating the need to reconfigure each game individually.
        </p>
      </div>
    </div>
    <div id="row03" class="row">
      <div class="col-md-6">
        <img id="home-img-3" src="src/assets/img/cybersport_06-removebg-preview.png" alt="Placeholder Image" class="img-fluid" data-aos="fade-top" />
      </div>
      <div class="col-md-6 align-self-center" data-aos="fade-top">
        <h1 id="title-3">Find your favorite Pro-Players here</h1>
        <p id="text-3">
          Delta Compass offers players the opportunity to explore and utilize other professional players' setups.
        </p>
      </div>
    </div>
    <div id="row04" class="row">
      <div class="col-md-6 order-md-2">
        <img id="home-img-4" src="src/assets/img/Kerfin7_NEA_2332-removebg-preview.png" alt="Placeholder Image" class="img-fluid" data-aos="fade-top" />
      </div>
      <div class="col-md-6 order-md-1 align-self-center" data-aos="fade-top">
        <h1 id="title-4">Adapting to new games</h1>
        <p id="text-4">
          The Delta Compass is an indispensable tool for any professional player who wants to optimize their gaming experience and reach your full potential.
        </p>
      </div>
    </div>
  </main>
  `;
  document.body.appendChild(div);
}

adicionarMainAoDOM();
