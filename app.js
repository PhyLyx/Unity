(function () {
  "use strict";

  var IMG_CHAVIN = "imgs/scapefronchavin.png";
  var IMG_WIP = "imgs/WIP_allmode.png";
  var ITCH_URL = "https://raphap9.itch.io/escape-from-chavin";

  var PROJECTS = [
    { name: "Escape from Chavin", level: "Nivel 2", modules: "6 módulos", tasks: "10/54 tareas completadas", img: IMG_CHAVIN, wip: false },
    { name: "Snake", level: "Nivel 1", modules: "3 módulos", tasks: "", img: IMG_WIP, wip: true },
    { name: "Plataformas 2D", level: "Nivel 2", modules: "5 módulos", tasks: "", img: IMG_WIP, wip: true },
    { name: "Tetris", level: "Nivel 3", modules: "7 módulos", tasks: "", img: IMG_WIP, wip: true },
    { name: "Arcade de peleas", level: "Nivel 4", modules: "8 módulos", tasks: "", img: IMG_WIP, wip: true }
  ];

  var MODULES = [
    {
      name: "Primer módulo",
      title: "Escape from Chavin",
      fields: [{ label: "Género", value: "Plataformer 2D" }],
      list: [],
      foot1: "Bienvenido al proyecto de videojuego de Escape from Chavin",
      foot2: "Haz click en el primer módulo para comenzar"
    },
    {
      name: "Segundo módulo",
      title: "Escena y personaje",
      fields: [],
      list: ["Crear la escena 2D", "Importar el sprite del personaje", "Mover con el Input System", "Salto con Rigidbody2D", "Probar en Play Mode"],
      foot1: "Vas a dejar al personaje caminando y saltando",
      foot2: "8 tareas · tiempo estimado 45 min"
    },
    {
      name: "Tercer módulo",
      title: "Colisiones y tilemap",
      fields: [],
      list: ["Pintar el nivel con Tilemap", "Tilemap Collider 2D", "Composite Collider para el suelo", "Detectar suelo antes de saltar", "Corregir el agarre en esquinas"],
      foot1: "Al terminar, el nivel se puede recorrer completo",
      foot2: "11 tareas · tiempo estimado 1 h 10 min"
    },
    {
      name: "Cuarto módulo",
      title: "Cámara y trampas",
      fields: [],
      list: ["Cinemachine siguiendo al jugador", "Límites de cámara por nivel", "Plataformas que caen", "Zonas de daño y respawn", "Puntos de control"],
      foot1: "Acá el nivel empieza a sentirse un juego",
      foot2: "13 tareas · tiempo estimado 1 h 30 min"
    },
    {
      name: "Quinto módulo",
      title: "Puzzles, diálogos y UI",
      fields: [],
      list: ["Objetos que se empujan", "Llaves y puertas", "Sistema de diálogos", "UI con TextMeshPro", "Pantalla de pausa y reinicio"],
      foot1: "El juego ya se puede perder y volver a empezar",
      foot2: "12 tareas · tiempo estimado 1 h 20 min"
    },
    {
      name: "Sexto módulo",
      title: "Audio, pulido y build",
      fields: [],
      list: ["Sonidos de salto e impacto", "Música de fondo por nivel", "Transiciones entre escenas", "Ajustes de dificultad", "Exportar build de PC y WebGL"],
      foot1: "Terminas con un ejecutable que puedes compartir",
      foot2: "10 tareas · tiempo estimado 1 h",
      itch: true
    }
  ];

  var FORO = [
    {
      name: "Arte",
      nuevas: "2 publicaciones nuevas",
      posts: [
        { autor: "Calamarito43", titulo: "Esto es un grito de auxilio", cuerpo: "Llevo 2 meses con placeholders y me da tanta risa que estoy considerando dejarlo así.", respuesta: "Mr.Carambas dice… Vale la pena conservar una copia. Me gustaría jugarlo." },
        { autor: "Pixelera", titulo: "¿Cómo evito que el pixel art se vea borroso?", cuerpo: "Importo a 32x32 y en la escena sale suavizado. ¿Qué configuración me falta?", respuesta: "Nuvi dice… Filter Mode en Point (no filter) y Compression en None." },
        { autor: "Usuario276", titulo: "¿Alguien tiene referencias de arte precolombino?", cuerpo: "Busco fotos de relieves de Chavín para las texturas del proyecto.", respuesta: "Tunche dice… Junté una carpeta, te la paso por interno." }
      ]
    },
    {
      name: "Programación",
      nuevas: "12 publicaciones nuevas",
      posts: [
        { autor: "Usuario276", titulo: "El salto se siente flotante", cuerpo: "Subo la gravedad y el personaje cae como piedra. No encuentro el punto medio.", respuesta: "DevGato dice… Usa dos gravedades: una al subir y otra mayor al caer." },
        { autor: "Seba_QA", titulo: "¿Update o FixedUpdate para el movimiento?", cuerpo: "Mi personaje tiembla un poco al moverse en pantallas de 144 Hz.", respuesta: "Mr.Carambas dice… Si usas Rigidbody2D va en FixedUpdate. Si es transform, Update con Time.deltaTime." },
        { autor: "Nuvi", titulo: "El personaje se traba en las esquinas del tilemap", cuerpo: "Al correr sobre tiles contiguos se engancha con bordes invisibles.", respuesta: "DevGato dice… Composite Collider 2D en el tilemap y material sin fricción." }
      ]
    },
    {
      name: "Diseño",
      nuevas: "5 publicaciones nuevas",
      posts: [
        { autor: "Nuvi", titulo: "La dificultad sube demasiado rápido", cuerpo: "Probé con 5 personas y todas abandonan en el nivel 2. ¿Bajo la velocidad o agrego puntos de control?", respuesta: "Calamarito43 dice… Agrega checkpoints antes de tocar la dificultad." },
        { autor: "Tunche", titulo: "Referencias de HUD para plataformeros", cuerpo: "Junté capturas de vidas y coleccionables por si a alguien le sirven.", respuesta: "Pixelera dice… Súbelas al canal del curso, justo estaba buscando eso." }
      ]
    },
    {
      name: "Equipo",
      nuevas: "1 publicación nueva",
      posts: [
        { autor: "Mr.Carambas", titulo: "Busco alguien que haga música para el proyecto 4", cuerpo: "Tengo todo el gameplay listo y cero audio. Aporto el crédito y la mitad de lo que salga en itch.", respuesta: "Seba_QA dice… Yo compongo chiptune, te escribo por interno." }
      ]
    }
  ];

  var state = { logged: false, user: "Usuario276", module: 0, cat: 0 };

  var SCREENS = ["landing", "home", "progreso", "proyecto", "login", "registro", "perfil"];
  var NAV_HIDDEN = ["login", "registro", "perfil", "proyecto"];
  var LOCKED = ["home", "progreso", "proyecto", "perfil"];
  var NAV_FOR = { home: "nav-proyectos", progreso: "nav-progreso" };

  function el(id) { return document.getElementById(id); }

  function go(id) {
    if (SCREENS.indexOf(id) === -1) return;
    if (!state.logged && LOCKED.indexOf(id) !== -1) id = "login";
    SCREENS.forEach(function (s) {
      var node = el("s-" + s);
      if (node) node.hidden = s !== id;
    });
    el("topnav").hidden = NAV_HIDDEN.indexOf(id) !== -1;
    Object.keys(NAV_FOR).forEach(function (k) {
      var b = el(NAV_FOR[k]);
      if (!b) return;
      if (k === id) b.setAttribute("aria-current", "page");
      else b.removeAttribute("aria-current");
    });
    window.scrollTo(0, 0);
  }

  function setSession(on, name) {
    state.logged = on;
    if (name) state.user = name;
    el("btn-login-top").hidden = on;
    el("chip-user").hidden = !on;
    el("chip-name").textContent = state.user;
    el("perfil-name").textContent = state.user;
  }

  function renderCards() {
    el("cards").innerHTML = PROJECTS.map(function (p, i) {
      var cls = p.wip ? "card wip" : "card live";
      var attr = p.wip ? "" : ' data-go="proyecto"';
      var tag = p.wip ? "div" : "button";
      var lvl = p.wip ? "En desarrollo" : p.level;
      return "<" + tag + ' class="' + cls + '"' + attr + ">" +
        '<img src="' + p.img + '" alt="' + p.name + '">' +
        '<span class="cap"><span>' + p.name + "</span>" +
        '<span class="lvl">' + lvl + "</span></span>" +
        "</" + tag + ">";
    }).join("");
  }

  function renderModules() {
    var host = el("modules");
    host.innerHTML = '<button class="mod back" data-go="home">◀ Volver a proyectos</button>';
    MODULES.forEach(function (m, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "mod m" + (i + 1);
      b.textContent = m.name;
      b.setAttribute("data-mod", i);
      if (i === state.module) b.setAttribute("aria-current", "true");
      host.appendChild(b);
    });
  }

  function renderModuleBody() {
    var m = MODULES[state.module];
    el("mod-kicker").textContent = m.name;
    el("mod-title").textContent = m.title;

    var body = m.fields.map(function (f) {
      return '<p class="mod-line">' + f.label + '<span class="val">' + f.value + "</span></p>";
    }).join("");
    body += m.list.map(function (t) {
      return '<p class="mod-line">' + t + "</p>";
    }).join("");
    el("mod-content").innerHTML = body;

    el("mod-foot-1").textContent = m.foot1;
    el("mod-foot-2").textContent = m.foot2;
    el("mod-cta").innerHTML = m.itch
      ? '<a class="itch" href="' + ITCH_URL + '" target="_blank" rel="noopener">Jugar Escape from Chavin en itch.io ▶</a>'
      : "";
    renderModules();
  }

  function renderProject() {
    var p = PROJECTS[0];
    el("proj-title").textContent = p.name;
    el("proj-tasks").textContent = p.tasks;
    el("proj-sub").textContent = p.level + " - " + p.modules;
    el("proj-cover").src = p.img;
    el("mod-shot-img").src = p.img;
    renderModuleBody();
  }

  function catsHtml(active, attr) {
    return FORO.map(function (c, i) {
      return '<button class="cat" type="button" ' + attr + '="' + i + '"' +
        (i === active ? ' aria-current="true"' : "") + ">" +
        "<b>" + c.name + "</b><span>" + c.nuevas + "<br>desde la última vez</span></button>";
    }).join("");
  }

  function threadsHtml(index) {
    return FORO[index].posts.map(function (p) {
      return '<article class="post">' +
        '<div class="post-author"><i>' + p.autor + "</i> dice</div>" +
        '<div class="post-body"><h4>' + p.titulo + "</h4>" +
        "<p>" + p.cuerpo + "</p>" +
        '<p class="post-reply">' + p.respuesta + "</p></div></article>";
    }).join("");
  }

  function renderForo() {
    el("cats").innerHTML = catsHtml(state.cat, "data-cat");
    el("thread-head").textContent = FORO[state.cat].name;
    el("threads").innerHTML = threadsHtml(state.cat);
  }

  function irAlForo() {
    go("landing");
    window.requestAnimationFrame(function () {
      el("foro").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-go],[data-mod],[data-cat],[data-foro]");
    if (!t) return;

    if (t.hasAttribute("data-foro")) {
      irAlForo();
      return;
    }
    if (t.hasAttribute("data-mod")) {
      state.module = parseInt(t.getAttribute("data-mod"), 10) || 0;
      renderModuleBody();
      return;
    }
    if (t.hasAttribute("data-cat")) {
      state.cat = parseInt(t.getAttribute("data-cat"), 10) || 0;
      renderForo();
      return;
    }
    if (t.getAttribute("data-go") === "proyecto") {
      state.module = 0;
      renderProject();
    }
    go(t.getAttribute("data-go"));
  });

  el("form-login").addEventListener("submit", function (e) {
    e.preventDefault();
    setSession(true, el("login-user").value.trim() || "Usuario276");
    go("home");
  });

  el("form-registro").addEventListener("submit", function (e) {
    e.preventDefault();
    setSession(true, el("reg-user").value.trim() || "Usuario276");
    go("home");
  });

  el("btn-salir").addEventListener("click", function () {
    setSession(false, "Usuario276");
    go("landing");
  });

  el("btn-editar").addEventListener("click", function () {
    var b = el("btn-editar");
    b.textContent = "Editar (sin función en el prototipo)";
    b.disabled = true;
  });

  el("scrolldown").addEventListener("click", function () {
    el("foro").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  renderCards();
  renderForo();
  renderProject();
  setSession(false);
  go("landing");
})();
