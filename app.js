(function () {
  "use strict";

  var IMG_SNAKE = "imgs/snake.png";
  var IMG_WIP = "imgs/WIP_allmode.png";

  var PROJECTS = [
    { name: "Snake Game", level: "Nivel 1", modules: "6 módulos", tasks: "1/6 tareas completadas", img: IMG_SNAKE, wip: false },
    { name: "Snake", level: "Nivel 1", modules: "3 módulos", tasks: "", img: IMG_WIP, wip: true },
    { name: "Plataformas 2D", level: "Nivel 2", modules: "5 módulos", tasks: "", img: IMG_WIP, wip: true },
    { name: "Tetris", level: "Nivel 3", modules: "7 módulos", tasks: "", img: IMG_WIP, wip: true },
    { name: "Arcade de peleas", level: "Nivel 4", modules: "8 módulos", tasks: "", img: IMG_WIP, wip: true }
  ];

  var MODULES = [
    {
      name: "Módulo Diseño:",
      title: "Snake Game",
      img: "imgs/image_8.png",
      blocks: [
        { h: "1. Diseño del juego:" },
        { p: "El diseño del juego consiste en definir cómo funcionará Snake Game, cuáles serán sus reglas y qué experiencia tendrá el jugador. El objetivo principal es controlar una serpiente que debe recolectar alimentos para crecer y conseguir la mayor puntuación posible." },
        { s: "Paso 1: Definir el objetivo" },
        { p: "El jugador debe controlar a la serpiente para que recolecte los alimentos que aparecen en el escenario. Cada alimento consumido aumenta la longitud de la serpiente y la puntuación." },
        { s: "Paso 2: Establecer las reglas" },
        { ul: [
          "La serpiente se desplaza constantemente por el escenario.",
          "El jugador puede cambiar su dirección utilizando las teclas de movimiento.",
          "Cada alimento recolectado aumenta el tamaño de la serpiente.",
          "Si la serpiente choca contra una pared o contra su propio cuerpo, la partida termina."
        ] },
        { s: "Paso 3: Diseñar la experiencia del jugador" },
        { p: "Se debe establecer cómo será el desarrollo de la partida, desde el inicio hasta el final. También se pueden incorporar elementos como un contador de puntos, un menú de inicio y una pantalla de derrota." },
        { h: "Resultado:" },
        { p: "Un concepto de juego definido, con objetivos, reglas y mecánicas que servirán como base para su desarrollo." }
      ]
    },
    {
      name: "Módulo Programación:",
      title: "Snake Game",
      img: "imgs/image_7.png",
      blocks: [
        { h: "2. Programación del juego" },
        { p: "La programación se encarga de convertir las reglas y los diseños establecidos en elementos funcionales. Mediante el código, se implementan los movimientos de la serpiente, la recolección de alimentos y las condiciones para ganar o perder." },
        { s: "Paso 1: Programar el movimiento" },
        { p: "Se debe establecer un sistema que permita que la serpiente avance constantemente en una dirección. El jugador podrá cambiar su dirección utilizando las teclas de movimiento, evitando giros que provoquen que choque consigo misma." },
        { s: "Paso 2: Implementar la recolección de alimentos" },
        { p: "Cuando la cabeza de la serpiente entre en contacto con un alimento, este deberá desaparecer y aparecer en una nueva posición. Al mismo tiempo, se añadirá un segmento al cuerpo de la serpiente y aumentará la puntuación." },
        { s: "Paso 3: Crear las colisiones" },
        { p: "Se deben programar las condiciones que determinan cuándo termina la partida. Esto sucede cuando la serpiente choca contra los límites del escenario o contra alguno de los segmentos de su propio cuerpo." },
        { s: "Paso 4: Implementar el sistema de puntuación" },
        { p: "Cada alimento recolectado deberá aumentar el puntaje del jugador. Este valor se actualizará en pantalla para mostrar su progreso durante la partida." },
        { h: "Resultado:" },
        { p: "Un videojuego funcional en el que el jugador puede controlar la serpiente, recolectar alimentos, acumular puntos y experimentar las condiciones de derrota." }
      ]
    },
    {
      name: "Módulo Arte:",
      title: "Snake Game",
      img: "imgs/image_6.png",
      blocks: [
        { h: "3. Diseño artístico:" },
        { p: "El apartado artístico se encarga de definir la apariencia visual de Snake Game. Esto incluye el diseño de la serpiente, los alimentos, el escenario y los elementos de la interfaz." },
        { s: "Paso 1: Definir el estilo visual" },
        { p: "Primero, se debe elegir una dirección artística para el videojuego. Por ejemplo, se puede utilizar un estilo retro inspirado en los juegos clásicos, con gráficos pixel art y colores sencillos." },
        { s: "Paso 2: Crear los elementos del juego" },
        { p: "Se deben diseñar los recursos visuales que aparecerán durante la partida:" },
        { ul: [
          "Serpiente: estará formada por una cabeza y varios segmentos que representan su cuerpo.",
          "Alimento: será el objeto que la serpiente deberá recolectar para crecer.",
          "Escenario: representará el área delimitada donde se desarrollará la partida.",
          "Interfaz: mostrará información como la puntuación y el estado del juego."
        ] },
        { s: "Paso 3: Aplicar colores y detalles" },
        { p: "Es importante utilizar colores que permitan diferenciar fácilmente cada elemento. La serpiente, los alimentos y el escenario deben tener suficiente contraste para que el jugador pueda identificarlos rápidamente." },
        { h: "Resultado:" },
        { p: "Una identidad visual coherente que permite reconocer los elementos del juego y facilita la comprensión de la partida." }
      ]
    },
    {
      name: "Módulo Sonido:",
      title: "Snake Game",
      img: "imgs/image_5.png",
      blocks: [
        { h: "4. Diseño sonoro" },
        { p: "El diseño sonoro busca complementar la experiencia del jugador mediante efectos de sonido y música que acompañen las diferentes acciones que ocurren durante la partida." },
        { s: "Paso 1: Identificar los momentos importantes" },
        { p: "Primero, se deben reconocer las situaciones en las que el juego necesita un efecto sonoro. Por ejemplo, cuando la serpiente recolecta un alimento, cuando ocurre una colisión o cuando termina la partida." },
        { s: "Paso 2: Incorporar efectos de sonido" },
        { p: "Se pueden implementar diferentes efectos para reforzar las acciones del jugador:" },
        { ul: [
          "Recolección: un sonido breve cada vez que la serpiente consume un alimento.",
          "Movimiento: un efecto sutil que acompañe el desplazamiento, si el estilo del juego lo requiere.",
          "Colisión: un sonido que indique que la serpiente chocó contra un obstáculo o contra su propio cuerpo.",
          "Fin de partida: un efecto que comunique que el juego ha terminado."
        ] },
        { s: "Paso 3: Agregar música de fondo" },
        { p: "Se puede incorporar una melodía sencilla que acompañe la partida. Esta debe mantenerse a un volumen adecuado para no interferir con los efectos de sonido." },
        { s: "Paso 4: Ajustar el sonido" },
        { p: "Finalmente, se debe comprobar que los efectos se reproduzcan en el momento correcto y que sus volúmenes estén equilibrados para evitar que resulten molestos o distraigan al jugador." },
        { h: "Resultado:" },
        { p: "Una experiencia de juego más completa, en la que los sonidos refuerzan las acciones y ayudan a comunicar lo que sucede durante la partida." }
      ]
    },
    {
      name: "Módulo Unity:",
      title: "Snake Game",
      img: "imgs/image_4.png",
      blocks: [
        { h: "5. Implementación del videojuego en Unity" },
        { p: "En esta etapa se integran los elementos de diseño, arte, programación y sonido dentro de Unity. El objetivo es construir el videojuego utilizando las herramientas del motor, organizar sus componentes y comprobar que todos funcionen correctamente." },
        { s: "Paso 1: Crear el proyecto" },
        { p: "Primero, se debe abrir Unity Hub y crear un nuevo proyecto utilizando la plantilla 2D. Se recomienda asignarle un nombre al proyecto, seleccionar una ubicación para guardarlo y configurar los ajustes iniciales." },
        { s: "Paso 2: Organizar los archivos" },
        { p: "Una vez creado el proyecto, se deben importar y organizar los recursos desarrollados anteriormente. Para mantener un espacio de trabajo ordenado, se pueden crear las siguientes carpetas:" },
        { ul: [
          "Sprites: imágenes de la serpiente, los alimentos y el escenario.",
          "Scripts: códigos que controlan las mecánicas del juego.",
          "Audio: música de fondo y efectos de sonido.",
          "Prefabs: objetos reutilizables, como los segmentos del cuerpo de la serpiente y los alimentos.",
          "Scenes: escenas que contienen los diferentes apartados del videojuego."
        ] },
        { s: "Paso 3: Construir el escenario" },
        { p: "Se debe crear la escena principal donde se desarrollará la partida. Para ello, se incorporan los elementos visuales del escenario y se configura la cámara en modo 2D, ajustando su posición y tamaño para mostrar correctamente el área de juego. También se deben colocar los límites del escenario para establecer el área en el que podrá desplazarse la serpiente." },
        { s: "Paso 4: Integrar los elementos visuales" },
        { p: "Se deben incorporar los diseños creados anteriormente utilizando los componentes de Unity, como Sprite Renderer, para mostrar las imágenes dentro de la escena. Posteriormente, se deben configurar los objetos que representarán la cabeza y el cuerpo de la serpiente, los alimentos y los demás elementos visuales del videojuego." },
        { s: "Paso 5: Incorporar la programación" },
        { p: "Se deben asignar los scripts correspondientes a los objetos del juego para implementar sus funcionalidades." },
        { ul: [
          "Movimiento: permite controlar la dirección y el desplazamiento constante de la serpiente.",
          "Crecimiento: genera nuevos segmentos del cuerpo cuando se recolecta un alimento.",
          "Alimentos: permite generar y reposicionar los alimentos dentro del escenario.",
          "Colisiones: detecta los choques contra los límites del escenario y el cuerpo de la serpiente.",
          "Puntuación: actualiza el contador de puntos cada vez que se recoge un alimento.",
          "Control de partida: administra el inicio, el desarrollo y el final del juego."
        ] },
        { p: "También se deben configurar los componentes necesarios para detectar las colisiones, como Collider 2D y, cuando corresponda, Rigidbody 2D." },
        { s: "Paso 6: Integrar los elementos sonoros" },
        { p: "Se deben incorporar los archivos de audio al proyecto y configurar los componentes Audio Source para reproducirlos durante la partida. Cada efecto de sonido deberá vincularse con su respectiva acción, como recoger un alimento o perder la partida. Asimismo, se debe configurar la música de fondo para que acompañe el desarrollo del juego." },
        { s: "Paso 7: Crear la interfaz de usuario" },
        { p: "Se debe construir la interfaz utilizando un Canvas, incorporando los elementos necesarios para mostrar la información de la partida. Entre los elementos principales se encuentran:" },
        { ul: [
          "Contador de puntuación.",
          "Botón para iniciar la partida.",
          "Mensaje de fin de juego.",
          "Botón para reiniciar la partida."
        ] },
        { p: "Se debe comprobar que los elementos de la interfaz se actualicen correctamente durante el juego y que los botones ejecuten las acciones correspondientes." },
        { s: "Paso 8: Realizar pruebas dentro de Unity" },
        { p: "Finalmente, se debe ejecutar el videojuego desde el botón Play para comprobar que todos los sistemas funcionen correctamente. Es importante verificar que la serpiente responda a los controles, que los alimentos se recolecten correctamente, que las colisiones funcionen, que el puntaje se actualice y que los efectos de sonido se reproduzcan en los momentos adecuados." },
        { h: "Resultado:" },
        { p: "Un videojuego completamente integrado dentro de Unity, con sus elementos visuales, mecánicas, programación, interfaz y sonido funcionando de manera conjunta." }
      ]
    },
    {
      name: "Módulo Build:",
      title: "Snake Game",
      img: "imgs/image_3.png",
      blocks: [
        { h: "6. Generación de la Build" },
        { p: "La generación de la Build consiste en preparar y exportar el videojuego desde Unity para crear una versión ejecutable que pueda utilizarse fuera del motor de desarrollo." },
        { s: "Paso 1: Revisar el proyecto" },
        { p: "Antes de generar la Build, se debe comprobar que el videojuego funcione correctamente y que no presente errores importantes. Se recomienda revisar:" },
        { ul: [
          "Funcionamiento de las mecánicas.",
          "Correcta visualización de los elementos gráficos.",
          "Reproducción de los sonidos.",
          "Funcionamiento de los botones y la interfaz.",
          "Ausencia de errores importantes en la consola de Unity."
        ] },
        { s: "Paso 2: Configurar las escenas" },
        { p: "Se deben seleccionar las escenas que formarán parte del videojuego y agregarlas a la lista de escenas de compilación. Es importante colocar la escena principal al inicio para que sea la primera que se ejecute cuando el jugador abra el videojuego." },
        { s: "Paso 3: Seleccionar la plataforma" },
        { p: "Se debe ingresar a la configuración de compilación de Unity y seleccionar la plataforma para la cual se desea exportar el videojuego. Por ejemplo:" },
        { ul: [
          "Windows: permite generar un videojuego ejecutable para computadoras con Windows.",
          "MacOS: permite generar una versión compatible con computadoras Apple.",
          "Linux: permite generar una versión para sistemas operativos Linux."
        ] },
        { p: "La plataforma seleccionada debe coincidir con el dispositivo en el que se desea ejecutar el videojuego." },
        { s: "Paso 4: Configurar los ajustes de exportación" },
        { p: "Antes de generar la Build, se deben revisar los ajustes principales del proyecto, como el nombre del videojuego, la resolución de pantalla, el modo de visualización y el icono de la aplicación. También se debe comprobar que los ajustes de calidad y rendimiento sean adecuados para el videojuego." },
        { s: "Paso 5: Generar la Build" },
        { p: "Una vez configurados los ajustes, se debe seleccionar la opción Build para iniciar el proceso de compilación. Unity procesará las escenas, los archivos de programación, los recursos visuales y los sonidos para generar una versión independiente del videojuego. Se debe seleccionar una carpeta de destino donde se almacenarán todos los archivos generados." },
        { s: "Paso 6: Probar la versión generada" },
        { p: "Cuando termine el proceso, se debe abrir la carpeta donde se generó la Build y ejecutar el archivo correspondiente. Es importante comprobar que el videojuego funcione correctamente fuera del editor de Unity, verificando nuevamente los controles, las mecánicas, los sonidos y la interfaz." },
        { s: "Paso 7: Organizar y entregar el videojuego" },
        { p: "Finalmente, se deben organizar los archivos generados para facilitar su distribución. Se recomienda mantener juntos el ejecutable y las carpetas adicionales que Unity haya generado, evitando eliminar archivos necesarios para su funcionamiento. Si se desea compartir el videojuego, se puede comprimir toda la carpeta de la Build en un archivo ZIP para facilitar su entrega." },
        { h: "Resultado:" },
        { p: "Una versión ejecutable de Snake Game, preparada para distribuirse y jugarse en la plataforma seleccionada sin necesidad de abrir el proyecto desde el editor de Unity." },
        { link: {
          text: "El enlace del Snake Game:",
          label: "Jugar Snake Game ▶",
          url: "https://www.google.com/search?q=snake+game&ie=UTF-8"
        } }
      ]
    }
  ];

  var FORO = [
    {
      name: "Arte",
      nuevas: "2 publicaciones nuevas",
      posts: [
        { autor: "Calamarito43", titulo: "Esto es un grito de auxilio", cuerpo: "Llevo 2 meses con placeholders y me da tanta risa que estoy considerando dejarlo así.", respuesta: "Mr.Carambas dice… Vale la pena conservar una copia. Me gustaría jugarlo." },
        { autor: "Pixelera", titulo: "¿Cómo evito que el pixel art se vea borroso?", cuerpo: "Importo a 32x32 y en la escena sale suavizado. ¿Qué configuración me falta?", respuesta: "Nuvi dice… Filter Mode en Point (no filter) y Compression en None." },
        { autor: "Usuario276", titulo: "¿Qué colores uso para la serpiente?", cuerpo: "Quiero que el cuerpo y el escenario se diferencien bien sin que canse la vista.", respuesta: "Tunche dice… Fondo apagado y serpiente saturada. El contraste hace todo el trabajo." }
      ]
    },
    {
      name: "Programación",
      nuevas: "12 publicaciones nuevas",
      posts: [
        { autor: "Usuario276", titulo: "La serpiente se mueve demasiado rápido", cuerpo: "Avanza un paso por frame y no alcanzo a reaccionar. ¿Cómo controlo la velocidad?", respuesta: "DevGato dice… Mueve por tiempo, no por frame: un paso cada X segundos con un temporizador." },
        { autor: "Seba_QA", titulo: "¿Update o FixedUpdate para el movimiento?", cuerpo: "Mi juego tiembla un poco en pantallas de 144 Hz.", respuesta: "Mr.Carambas dice… Si usas Rigidbody2D va en FixedUpdate. Si es transform, Update con Time.deltaTime." },
        { autor: "Nuvi", titulo: "La serpiente se choca sola al girar", cuerpo: "Si aprieto rápido dos teclas, gira 180° y muere contra su propio cuerpo.", respuesta: "DevGato dice… Ignora la dirección opuesta a la actual y guarda el giro en una cola." }
      ]
    },
    {
      name: "Diseño",
      nuevas: "5 publicaciones nuevas",
      posts: [
        { autor: "Nuvi", titulo: "La dificultad sube demasiado rápido", cuerpo: "Probé con 5 personas y todas abandonan al minuto. ¿Bajo la velocidad o agrego algo más?", respuesta: "Calamarito43 dice… Sube la velocidad cada 5 alimentos, no cada uno." },
        { autor: "Tunche", titulo: "Referencias de HUD para juegos arcade", cuerpo: "Junté capturas de contadores de puntaje por si a alguien le sirven.", respuesta: "Pixelera dice… Súbelas al canal del curso, justo estaba buscando eso." }
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
    el("cards").innerHTML = PROJECTS.map(function (p) {
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

  function blocksHtml(blocks) {
    return blocks.map(function (b) {
      if (b.h) return "<h3>" + b.h + "</h3>";
      if (b.s) return "<h4>" + b.s + "</h4>";
      if (b.ul) return "<ul>" + b.ul.map(function (li) { return "<li>" + li + "</li>"; }).join("") + "</ul>";
      if (b.link) {
        return '<p class="mod-link-text">' + b.link.text + "</p>" +
          '<a class="mod-link" href="' + b.link.url + '" target="_blank" rel="noopener">' +
          b.link.label + "</a>";
      }
      return "<p>" + b.p + "</p>";
    }).join("");
  }

  function renderModuleBody() {
    var m = MODULES[state.module];
    el("mod-kicker").textContent = m.name;
    el("mod-title").textContent = m.title;
    el("mod-content").innerHTML = blocksHtml(m.blocks);
    el("mod-shot-img").src = m.img;
    el("mod-shot-img").alt = m.name + " " + m.title;
    renderModules();
  }

  function renderProject() {
    var p = PROJECTS[0];
    el("proj-title").textContent = p.name;
    el("proj-tasks").textContent = p.tasks;
    el("proj-sub").textContent = p.level + " - " + p.modules;
    el("proj-cover").src = p.img;
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
