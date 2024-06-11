// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
  var div = document.createElement("div");
  div.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img id="logo" src="src/assets/img/logo-dark.png" alt="Delta Compass Logo" title="Delta Logo"
        class="d-inline-block align-text-top" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" style="margin-right: -650px;">
        <li class="nav-item">
          <a class="nav-link" href="#">Patreon</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Github</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Discord</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul class="dropdown-menu" aria-labelledby="languageDropdown">
            <li><a class="dropdown-item" href="#" onclick="changeLanguage('en')">English</a></li>
            <li><a class="dropdown-item" href="#" onclick="changeLanguage('pt')">Português</a></li>
            <li><a class="dropdown-item" href="#" onclick="changeLanguage('es')">Español</a></li>
          </ul>
        </li>
      </ul>
      <div class="form-check form-switch align-self-center mt-12">
        <input class="form-check-input" type="checkbox" id="darkModeSwitch" />
        <label class="form-check-label" for="darkModeSwitch">Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
    `;

  document.body.appendChild(div);
}

adicionarLoginAoDOM();