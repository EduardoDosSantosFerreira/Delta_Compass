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
      },
      zh: {
        title1: "传感器转换器",
        text1: "FPS游戏的自动灵敏度转换器，更好的适应性，更专业。",
        title2: "简便和实用",
        text2: "使用Delta Compass，玩家可以保存自己喜欢的设置并将其应用到不同的游戏中，省去了单独重新配置每个游戏的麻烦。",
        title3: "在这里找到你喜欢的职业玩家",
        text3: "Delta Compass为玩家提供探索和利用其他职业玩家设置的机会。",
        title4: "适应新游戏",
        text4: "Delta Compass是任何想要优化游戏体验并充分发挥潜力的职业玩家的必备工具。"
      },
      ru: {
        title1: "Конвертер сенсоров",
        text1: "Автоматический конвертер чувствительности для игр FPS, больше адаптации, больше профессионализма.",
        title2: "Легкость и удобство",
        text2: "С Delta Compass игроки могут сохранять свои любимые настройки и применять их к разным играм, устраняя необходимость повторной настройки каждой игры отдельно.",
        title3: "Найдите здесь своих любимых профессиональных игроков",
        text3: "Delta Compass предоставляет игрокам возможность изучать и использовать настройки других профессиональных игроков.",
        title4: "Адаптация к новым играм",
        text4: "Delta Compass - незаменимый инструмент для любого профессионального игрока, который хочет оптимизировать свой игровой опыт и раскрыть свой полный потенциал."
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
  