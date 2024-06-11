// Função para adicionar a funcionalidade de tradução
function addLanguageChangeFunctionality() {
  const translations = {
    en: {
      title1: "Sensor converter",
      text1: "Automatic sensitivity converter for FPS Games, More adaptation, more professionalism.",
      title2: "Ease and practicality",
      text2: "With Delta Compass, players can save their favorite settings and apply them to different games, eliminating the need to reconfigure each game individually.",
      title3: "Find your favorite Pro-Players here",
      text3: "Delta Compass offers players the opportunity to explore and utilize other professional players' setups.",
      title4: "Adapting to new games",
      text4: "The Delta Compass is an indispensable tool for any professional player who wants to optimize their gaming experience and reach your full potential."
    },
    pt: {
      title1: "Conversor de sensores",
      text1: "Conversor de sensibilidade automática para jogos de FPS, mais adaptação, mais profissionalismo.",
      title2: "Facilidade e praticidade",
      text2: "Com o Delta Compass, os jogadores podem salvar suas configurações favoritas e aplicá-las a diferentes jogos, eliminando a necessidade de reconfigurar cada jogo individualmente.",
      title3: "Encontre seus Pro-Jogadores favoritos aqui",
      text3: "O Delta Compass oferece aos jogadores a oportunidade de explorar e utilizar as configurações de outros jogadores profissionais.",
      title4: "Adaptando-se a novos jogos",
      text4: "O Delta Compass é uma ferramenta indispensável para qualquer jogador profissional que deseja otimizar sua experiência de jogo e alcançar seu pleno potencial."
    },
    es: {
      title1: "Convertidor de sensores",
      text1: "Convertidor de sensibilidad automática para juegos FPS, más adaptación, más profesionalismo.",
      title2: "Facilidad y practicidad",
      text2: "Con Delta Compass, los jugadores pueden guardar sus configuraciones favoritas y aplicarlas a diferentes juegos, eliminando la necesidad de reconfigurar cada juego individualmente.",
      title3: "Encuentra a tus jugadores profesionales favoritos aquí",
      text3: "Delta Compass ofrece a los jugadores la oportunidad de explorar y utilizar las configuraciones de otros jugadores profesionales.",
      title4: "Adaptándose a nuevos juegos",
      text4: "Delta Compass es una herramienta indispensable para cualquier jugador profesional que desee optimizar su experiencia de juego y alcanzar su máximo potencial."
    }
  };

  window.changeLanguage = function (lang) {
    document.getElementById('title-1').innerText = translations[lang].title1;
    document.getElementById('text-1').innerText = translations[lang].text1;
    document.getElementById('title-2').innerText = translations[lang].title2;
    document.getElementById('text-2').innerText = translations[lang].text2;
    document.getElementById('title-3').innerText = translations[lang].title3;
    document.getElementById('text-3').innerText = translations[lang].text3;
    document.getElementById('title-4').innerText = translations[lang].title4;
    document.getElementById('text-4').innerText = translations[lang].text4;
  };
}

addLanguageChangeFunctionality();
