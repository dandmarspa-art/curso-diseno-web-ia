/* =========================================================
   CONTENIDO DEL CURSO — Diseño y Web con IA (curso intermedio)
   Para cambiar un texto, edita este archivo y guarda.
   El diccionario, las frases, las herramientas y la guía están en "ayudas.js".
   ========================================================= */

// --- Ayudantes para escribir menos HTML ---
const pr = (texto) => `<div class="prompt">${texto}</div>`;
const yt = (busqueda, titulo) =>
  `<a class="video" href="https://www.youtube.com/results?search_query=${encodeURIComponent(busqueda)}" target="_blank" rel="noopener"><span class="video-icono" aria-hidden="true">▶</span><span>${titulo || busqueda}</span></a>`;
const web = (url, titulo) =>
  `<a class="video" href="${url}" target="_blank" rel="noopener"><span class="video-icono web" aria-hidden="true">🌐</span><span>${titulo}</span></a>`;
const videos = (...enlaces) => `
  <section class="bloque">
    <h2>🎬 Videos y enlaces</h2>
    <p>Cada botón rojo abre YouTube con videos sobre este tema. Elige uno que te guste. Los botones azules abren páginas web. Si un video es muy difícil, no pasa nada: prueba otro o pídele a Claude que te lo explique.</p>
    <div class="videos">${enlaces.join('')}</div>
  </section>`;

// --- Ejemplos visuales (dibujos de muestra). No se leen en voz alta: el texto de al lado los explica. ---
const muestras = (...figuras) => `<div class="muestras no-leer">${figuras.join('')}</div>`;
const muestra = (titulo, dibujo, tipo) =>
  `<figure class="muestra ${tipo || ''}" role="img" aria-label="${titulo}"><div class="lienzo">${dibujo}</div><figcaption>${titulo}</figcaption></figure>`;
const franja = (...colores) => `<div class="franja">${colores.map(c => `<span style="background:${c}"></span>`).join('')}</div>`;

// --- Texto distinto para computadora y teléfono ---
// En el teléfono se muestra lo de "movil"; en la computadora, lo de "pc".
const dos = (pc, movil) => `<span class="solo-pc">${pc}</span><span class="solo-movil">${movil}</span>`;
const DICTA = dos('aprieta <kbd>⊞ Windows</kbd> + <kbd>H</kbd>', 'toca el <strong>micrófono 🎤</strong> del teclado');
const PEGA = dos('pega con <kbd>Ctrl</kbd> + <kbd>V</kbd>', 'deja el dedo apretado en la caja y toca <strong>Pegar</strong>');
const CAPTURA = dos('aprieta <kbd>⊞ Windows</kbd> + <kbd>Shift ⇧</kbd> + <kbd>S</kbd> y marca con el mouse la parte de la pantalla', 'saca una <strong>captura de pantalla</strong> (como aprendiste en el curso 1)');
const SUBE = dos('pégala en la caja de Claude con <kbd>Ctrl</kbd> + <kbd>V</kbd>', 'en Claude toca <strong>➕</strong> → <strong>Fotos</strong> y elige la captura');

window.CURSO = {};
window.CURSO.ayudas = { dos, DICTA, PEGA, CAPTURA, SUBE };
window.CURSO.curso1 = 'https://dandmarspa-art.github.io/curso-ia-claude/';

window.CURSO.lecciones = [

/* ---------------------------------------------------------- 0 */
{
  emoji: '👋', nivel: 100, etapa: '🧭 Bienvenida', minutos: 25,
  titulo: '¡Bienvenido al nivel intermedio!',
  aprenderas: [
    'Qué vas a crear en este curso',
    'Un repaso rápido de lo más importante del curso 1',
    'Armar tu "estudio de diseño" dentro de Claude',
  ],
  html: `
  <section class="bloque">
    <h2>👋 ¡Hola otra vez!</h2>
    <p>Terminaste el primer curso. <strong>¡Ya eres nivel 100!</strong> 🎉</p>
    <p>Ahora vamos del <strong>nivel 100 al nivel 200</strong>. Este curso tiene dos grandes temas:</p>
    <ul>
      <li>🎨 <strong>Diseño gráfico</strong>, más a fondo: orden, colores, letras, logos, imágenes y marcas.</li>
      <li>🌐 <strong>Páginas web</strong>: entender cómo funcionan, crearlas con Claude y publicarlas en internet.</li>
    </ul>
    <p>Todo funciona igual que antes: el botón <strong>🔊</strong> te lee cada cuadro, y los botones <strong>🚀 Abrir en Claude</strong> escriben las frases por ti.</p>
    <div class="caja truco"><span class="titulo-caja">💡 ¿Se te olvidó algo?</span>
    <p>El primer curso sigue ahí. Puedes volver cuando quieras: está en el botón <strong>"📗 Curso 1"</strong> de la portada.</p></div>
  </section>

  <section class="bloque">
    <h2>🎁 Lo que vas a tener al final</h2>
    <p>En este curso no solo vas a aprender: <strong>vas a crear trabajos de verdad</strong>. Al final vas a tener:</p>
    <ul>
      <li>⭐ Un <strong>logo</strong> hecho por ti (con ayuda de Claude).</li>
      <li>🌈 Una <strong>paleta de colores</strong> y tus <strong>letras</strong> elegidas.</li>
      <li>🖼️ <strong>Imágenes</strong> creadas con IA y editadas.</li>
      <li>📱 <strong>Publicaciones para redes sociales</strong> hechas en Canva.</li>
      <li>📘 Un <strong>manual de marca</strong> completo.</li>
      <li>🌐 Una <strong>página web</strong> y tu <strong>portafolio</strong> publicado en internet, con un link para compartir.</li>
    </ul>
    <p>Todos tus trabajos se anotan en <a href="#/trabajos">🗂️ Mis trabajos</a>, para que veas cómo crece tu colección.</p>
  </section>

  <section class="bloque">
    <h2>🔁 Repaso rápido</h2>
    <p>Lo más importante del curso 1, en 5 puntos:</p>
    <ol>
      <li>🎙️ <strong>Escribir con la voz:</strong> ${DICTA}.</li>
      <li>🍰 <strong>La receta para pedir:</strong> QUIÉN soy + QUÉ quiero + CÓMO lo quiero.</li>
      <li>🛠️ <strong>Artefactos:</strong> Claude construye cosas (páginas, juegos, logos) en una ventana al lado del chat.</li>
      <li>🔁 <strong>Un cambio a la vez:</strong> pide, mira, y pide otro cambio.</li>
      <li>👑 <strong>Tú eres el jefe:</strong> Claude ayuda, pero tú decides.</li>
    </ol>
    <p>Si algo de esto no te suena, repasa esa lección del curso 1 antes de seguir. ¡No hay apuro!</p>
  </section>

  <section class="bloque">
    <h2>🏠 Tu estudio de diseño en Claude</h2>
    <p>En el curso 1 aprendiste a crear <strong>proyectos</strong>. Ahora vas a crear uno especial para este curso: tu <strong>estudio de diseño</strong>. Ahí van a quedar todos tus trabajos juntos.</p>
    <div class="pasos"><ol>
      <li>${dos('En Claude, en la barra de la izquierda', 'En la app de Claude, en el menú ☰')}, busca <strong>"Proyectos"</strong>.</li>
      <li>Toca <strong>"Nuevo proyecto"</strong> y ponle de nombre: <strong>Mi estudio de diseño</strong>.</li>
      <li>Busca <strong>"Instrucciones"</strong> y pega el texto de abajo 👇 (con el botón 📋 Copiar).</li>
      <li>Guarda. Desde ahora, haz los ejercicios del curso <strong>dentro de ese proyecto</strong>.</li>
    </ol></div>
    ${pr('En este proyecto eres mi profesor de diseño gráfico y de páginas web. Estoy en un nivel intermedio: ya sé usar Claude y los artefactos. Uso el dictado por voz y a veces una sola mano, así que mis mensajes pueden tener errores: adivina lo que quise decir. Explica con palabras sencillas, frases cortas y un paso a la vez. Cuando hagas un diseño, explícame en pocas palabras por qué tomaste cada decisión, para que yo aprenda. Al final, propónme un pequeño ejercicio para practicar.')}
    <div class="caja info"><span class="titulo-caja">ℹ️ Si no puedes crear el proyecto</span>
    <p>En el plan gratis puede haber un límite de proyectos. Si no puedes crear otro, no pasa nada: <strong>pega ese texto al comienzo</strong> de cada chat nuevo del curso.</p></div>
  </section>

  <section class="bloque">
    <h2>🎬 Tú eres el director de arte</h2>
    <p>En las agencias de diseño, el <strong>director de arte</strong> es quien decide cómo se ve todo. No dibuja cada cosa: <strong>pide, mira y corrige</strong>. ¡Eso vas a hacer tú con Claude!</p>
    <div class="pasos"><ol>
      <li><strong>🗣️ Pedir:</strong> le dices a Claude qué quieres (con la receta).</li>
      <li><strong>👀 Mirar:</strong> miras con calma lo que hizo.</li>
      <li><strong>🧐 Opinar:</strong> piensas qué te gusta y qué no. ¿Por qué?</li>
      <li><strong>✨ Mejorar:</strong> pides <strong>un</strong> cambio. Y vuelves al paso 2.</li>
    </ol></div>
    <div class="caja bien"><span class="titulo-caja">✅ Tu ojo es lo más valioso</span>
    <p>En este curso vas a entrenar tu ojo: aprender a ver <strong>por qué</strong> un diseño funciona. Eso no lo reemplaza ninguna IA.</p></div>
  </section>

  <section class="bloque">
    <h2>📸 Truco nuevo: muéstrale la pantalla a Claude</h2>
    <p>Muchas veces es más fácil <strong>mostrar</strong> que explicar. Puedes sacar una foto de tu pantalla y mandársela a Claude:</p>
    <div class="pasos"><ol>
      <li>Cuando veas algo que quieras cambiar o que no entiendas, ${CAPTURA}.</li>
      <li>Ve a Claude y ${SUBE}.</li>
      <li>Dicta tu pregunta. Por ejemplo: <em>"¿Cómo hago más grande el título de esta imagen?"</em> o <em>"¿Qué le cambiarías a este diseño?"</em></li>
    </ol></div>
    <p>Vamos a usar este truco <strong>todo el curso</strong>: para pedir opiniones de tus diseños y para arreglar tus páginas web.</p>
  </section>

  <section class="bloque">
    <h2>🤖 ¿Y si un día uso otra IA?</h2>
    <p>Este curso está hecho para <strong>Claude</strong>, pero todo se puede hacer con el <strong>plan gratis</strong> de otras IA también. Funcionan parecido:</p>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>IA</th><th>Lo que en Claude se llama "artefacto", ahí se llama...</th></tr>
      <tr><td>🧡 <strong>Claude</strong></td><td>Artefacto</td></tr>
      <tr><td>💬 <strong>ChatGPT</strong></td><td>Canvas</td></tr>
      <tr><td>✨ <strong>Gemini</strong> (de Google)</td><td>Canvas</td></tr>
    </table></div>
    <p>Si se te acaban los mensajes gratis de Claude, puedes usar el botón <strong>📋 Copiar</strong> y pegar la frase en otra IA. O esperar unas horas y seguir con Claude.</p>
  </section>

  ${videos(
    yt('qué hace un director de arte diseño gráfico', '¿Qué hace un director de arte?'),
    yt('Claude proyectos tutorial español', 'Proyectos en Claude (repaso)'),
    yt('captura de pantalla Windows recortes tutorial', 'Captura de pantalla en Windows'),
    web(window.CURSO.curso1, '📗 Curso 1: Aprende IA con Claude (para repasar)')
  )}
  `,
  mision: [
    'Creé mi proyecto "Mi estudio de diseño" (o guardé las instrucciones)',
    'Le mandé una captura de pantalla a Claude y le hice una pregunta',
    'Le conté a Claude qué quiero lograr en este curso',
  ],
},

/* ---------------------------------------------------------- 1 */
{
  emoji: '👁️', nivel: 110, etapa: '🎨 Fundamentos del diseño', minutos: 35,
  titulo: 'Mira como diseñador: orden y composición',
  aprenderas: [
    'Las 4 reglas de oro del diseño',
    'Qué es la jerarquía y para qué sirve el espacio en blanco',
    'Pedirle a Claude que revise un diseño como un profesor',
  ],
  html: `
  <section class="bloque">
    <h2>👀 Un buen diseño se entiende en 3 segundos</h2>
    <p>Cuando alguien mira un cartel en la calle, lo mira <strong>muy poquito tiempo</strong>. Un buen diseño hace que entienda el mensaje <strong>rapidísimo</strong>.</p>
    ${muestras(
      muestra('❌ Desordenado', `<div class="m-caos"><span class="a">gran venta</span><b class="b">¡OFERTA DE VERANO!</b><span class="c">50% descuento</span><span class="d">Calle Sol 123</span><i class="e">ven ya</i></div>`, 'mala'),
      muestra('✅ Ordenado', `<div class="m-orden"><small>GRAN VENTA</small><strong>Oferta de verano</strong><span class="grande">50%</span><span class="pie">Calle Sol 123 · Ven hoy</span></div>`, 'buena')
    )}
    <p>Los dos carteles dicen <strong>lo mismo</strong>. Pero en el desordenado, los textos están tirados por todas partes, con letras y colores distintos. En el ordenado, todo está <strong>alineado</strong>, y lo más importante (el 50%) es <strong>lo más grande</strong>.</p>
    <p>La diferencia no es el talento: son <strong>4 reglas</strong> que vas a aprender ahora.</p>
  </section>

  <section class="bloque">
    <h2>🏅 Las 4 reglas de oro</h2>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Regla</th><th>Qué significa</th><th>Ejemplo de la vida</th></tr>
      <tr><td>⚡ <strong>Contraste</strong></td><td>Lo distinto se tiene que ver <strong>muy</strong> distinto: grande y chico, oscuro y claro.</td><td>Un semáforo en rojo sobre el cielo gris.</td></tr>
      <tr><td>📏 <strong>Alineación</strong></td><td>Todo está ordenado sobre <strong>líneas invisibles</strong>. Nada está puesto "por ahí".</td><td>Los libros bien puestos en una repisa.</td></tr>
      <tr><td>🔁 <strong>Repetición</strong></td><td>Repetir los mismos colores, letras y formas. Así todo parece de la misma familia.</td><td>El uniforme de un equipo de fútbol.</td></tr>
      <tr><td>🤝 <strong>Proximidad</strong></td><td>Lo que va junto, se pone <strong>cerca</strong>. Lo que no, se separa.</td><td>En una mesa, los cubiertos van al lado del plato.</td></tr>
    </table></div>
    <div class="caja truco"><span class="titulo-caja">💡 Para acordarte</span>
    <p>Piensa en <strong>"CARP"</strong>: <strong>C</strong>ontraste, <strong>A</strong>lineación, <strong>R</strong>epetición, <strong>P</strong>roximidad. Cada vez que mires un diseño, revisa esas 4 cosas.</p></div>
  </section>

  <section class="bloque">
    <h2>🥇 Jerarquía: ¿qué se lee primero?</h2>
    <p><strong>Jerarquía</strong> es el orden en que los ojos leen un diseño. Tú decides ese orden con:</p>
    <ul>
      <li>📐 <strong>Tamaño:</strong> lo más grande se ve primero.</li>
      <li>🎨 <strong>Color:</strong> un color fuerte llama la atención.</li>
      <li>🅱️ <strong>Grosor:</strong> la letra gruesa (negrita) pesa más.</li>
      <li>📍 <strong>Lugar:</strong> leemos de arriba hacia abajo y de izquierda a derecha.</li>
    </ul>
    <div class="caja bien"><span class="titulo-caja">✅ La regla de los 3 niveles</span>
    <p>Usa máximo <strong>3 niveles</strong>: <strong>1.</strong> lo más importante (muy grande), <strong>2.</strong> lo que explica (mediano), <strong>3.</strong> los detalles (chico). Si todo es grande, nada se destaca.</p></div>
  </section>

  <section class="bloque">
    <h2>⚪ El espacio en blanco es tu amigo</h2>
    <p>El <strong>espacio en blanco</strong> (o espacio vacío) es la parte del diseño donde <strong>no hay nada</strong>. No tiene que ser blanco: es el "aire" alrededor de las cosas.</p>
    <p>Los principiantes quieren <strong>llenar todo</strong>. Los profesionales <strong>dejan aire</strong>. El espacio vacío hace que el diseño se vea elegante y fácil de leer.</p>
    <div class="caja truco"><span class="titulo-caja">💡 Ejercicio de ojo</span>
    <p>Mira la página de una tienda cara y la de una tienda barata. ¿Cuál tiene más espacio vacío? 😉</p></div>
  </section>

  <section class="bloque">
    <h2>#️⃣ La regla de los tercios</h2>
    ${muestras(
      muestra('La cuadrícula de 3 × 3', `<div class="m-tercios"><span class="punto"></span></div>`)
    )}
    <p>Imagina que tu diseño está dividido en <strong>9 cuadros iguales</strong>, con 2 líneas de arriba a abajo y 2 de lado a lado (como un gato, el juego #).</p>
    <p>Si pones lo importante <strong>donde se cruzan las líneas</strong>, en vez de justo al medio, el diseño se ve más interesante.</p>
    <p>${dos('La cámara del teléfono', 'La cámara de tu teléfono')} tiene esta cuadrícula: búscala en los ajustes de la cámara como <strong>"Cuadrícula"</strong>. ¡Sirve también para sacar mejores fotos!</p>
  </section>

  <section class="bloque">
    <h2>🕵️ Ejercicio: detective de diseño</h2>
    <p>Vas a pedirle a Claude que revise un diseño <strong>con las 4 reglas</strong>.</p>
    <div class="pasos"><ol>
      <li>Busca un diseño: un cartel en la calle (sácale una foto 📷), un anuncio en internet, o la portada de una revista.</li>
      <li>Súbelo a Claude (${dos('arrastra la foto o pégala con <kbd>Ctrl</kbd> + <kbd>V</kbd>', 'toca ➕ → Fotos')}).</li>
      <li>Usa esta frase 👇</li>
    </ol></div>
    ${pr('Te mando un diseño. Revísalo como un profesor de diseño amable, usando las 4 reglas: contraste, alineación, repetición y proximidad. Para cada regla, dime si está bien o mal, en una frase. Después dime qué se lee primero, segundo y tercero. Por último, dame 2 ideas para mejorarlo.')}
  </section>

  <section class="bloque">
    <h2>🛠️ Ejercicio: el antes y el después</h2>
    <p>Ahora Claude va a hacer un ejemplo para que veas las reglas en acción:</p>
    ${pr('Crea un artefacto que muestre el mismo cartel dos veces, uno al lado del otro. El cartel es de una panadería que vende pan amasado. A la izquierda, una versión mal diseñada: desordenada, con muchas letras y colores distintos. A la derecha, la versión bien diseñada usando contraste, alineación, repetición y proximidad. Debajo de cada uno, explica en frases cortas qué está mal y qué está bien.')}
    <p>Después pídele: <em>"Ahora muéstrame la versión buena con la regla de los tercios."</em></p>
  </section>

  ${videos(
    yt('principios básicos del diseño gráfico contraste alineación repetición proximidad', 'Las 4 reglas: contraste, alineación, repetición y proximidad'),
    yt('jerarquía visual diseño gráfico explicado fácil', 'Jerarquía visual explicada fácil'),
    yt('espacio en blanco diseño gráfico principiantes', 'El espacio en blanco en el diseño'),
    yt('regla de los tercios diseño y fotografía', 'La regla de los tercios')
  )}
  `,
  mision: [
    'Puedo decir las 4 reglas de oro (CARP) en voz alta',
    'Le mandé un diseño de la calle o de internet a Claude para que lo revise',
    'Claude me hizo el ejemplo del antes y el después',
    'Activé la cuadrícula en la cámara del teléfono',
  ],
},

/* ---------------------------------------------------------- 2 */
{
  emoji: '🌈', nivel: 120, etapa: '🎨 Fundamentos del diseño', minutos: 40,
  titulo: 'El color, a fondo',
  aprenderas: [
    'La rueda de colores y las combinaciones que siempre funcionan',
    'La regla 60-30-10 para repartir los colores',
    'Revisar que un diseño se pueda leer bien (contraste)',
  ],
  html: `
  <section class="bloque">
    <h2>🎡 La rueda de colores</h2>
    ${muestras(
      muestra('La rueda de colores', `<div class="m-rueda"></div>`),
      muestra('Cálidos y fríos', `${franja('#d93a2b', '#ef7d22', '#f4c430')}${franja('#2a6fdb', '#3aa6a0', '#7b4bc4')}<p class="m-nota">Arriba: cálidos 🔥 · Abajo: fríos ❄️</p>`)
    )}
    <p>Los colores se ordenan en un círculo, como un arcoíris doblado. Se llama <strong>rueda de colores</strong>.</p>
    <ul>
      <li>🔴🟡🔵 <strong>Primarios:</strong> rojo, amarillo y azul. Con ellos se hacen los demás.</li>
      <li>🟠🟢🟣 <strong>Secundarios:</strong> naranja, verde y morado (mezclando dos primarios).</li>
      <li>🔥 <strong>Cálidos:</strong> rojos, naranjas y amarillos. Dan energía, alegría, apetito.</li>
      <li>❄️ <strong>Fríos:</strong> azules, verdes y morados. Dan calma, confianza, frescura.</li>
    </ul>
  </section>

  <section class="bloque">
    <h2>🤝 4 combinaciones que siempre funcionan</h2>
    ${muestras(
      muestra('Monocromática', franja('#0d3b66', '#1f5f99', '#3f88c5', '#8fbce6', '#d6e8f7')),
      muestra('Análoga', franja('#2a9d8f', '#3fb27f', '#8ac926', '#c7d43f')),
      muestra('Complementaria', franja('#1d4ed8', '#93b4f5', '#fbd2a6', '#f97316')),
      muestra('Triádica', franja('#e63946', '#f1c40f', '#1d6fb8'))
    )}
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Combinación</th><th>Cómo es</th><th>Se siente...</th></tr>
      <tr><td><strong>Monocromática</strong></td><td>Un solo color, en tonos claros y oscuros.</td><td>Elegante y tranquila.</td></tr>
      <tr><td><strong>Análoga</strong></td><td>Colores <strong>vecinos</strong> en la rueda (verde, verde-azul, azul).</td><td>Armoniosa, natural.</td></tr>
      <tr><td><strong>Complementaria</strong></td><td>Colores <strong>opuestos</strong> en la rueda (azul y naranja).</td><td>Llamativa, con energía.</td></tr>
      <tr><td><strong>Triádica</strong></td><td>3 colores a la misma distancia en la rueda.</td><td>Alegre, divertida.</td></tr>
    </table></div>
  </section>

  <section class="bloque">
    <h2>🍽️ La regla 60-30-10</h2>
    ${muestras(
      muestra('60 % · 30 % · 10 %', `<div class="m-603010"><span style="flex:60;background:#f4efe6">60</span><span style="flex:30;background:#264653;color:#fff">30</span><span style="flex:10;background:#e76f51;color:#fff">10</span></div>`)
    )}
    <p>Para que los colores no peleen, repártelos así:</p>
    <ul>
      <li><strong>60 %</strong> → el color <strong>principal</strong>, casi siempre suave (el fondo).</li>
      <li><strong>30 %</strong> → el color <strong>secundario</strong> (títulos, bloques).</li>
      <li><strong>10 %</strong> → el color de <strong>acento</strong>, el más llamativo (botones, lo que quieres que vean).</li>
    </ul>
    <p>Es como un plato de comida: mucho arroz, una porción de carne y un poquito de salsa. 🍛</p>
  </section>

  <section class="bloque">
    <h2>💭 Lo que dicen los colores</h2>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Color</th><th>Hace sentir...</th><th>Se usa mucho en...</th></tr>
      <tr><td>🔴 Rojo</td><td>Pasión, urgencia, hambre</td><td>Comida rápida, ofertas</td></tr>
      <tr><td>🟠 Naranja</td><td>Alegría, cercanía</td><td>Marcas juveniles, deporte</td></tr>
      <tr><td>🟡 Amarillo</td><td>Optimismo, atención</td><td>Niños, avisos</td></tr>
      <tr><td>🟢 Verde</td><td>Naturaleza, salud, dinero</td><td>Plantas, farmacias, bancos</td></tr>
      <tr><td>🔵 Azul</td><td>Confianza, calma, seriedad</td><td>Bancos, tecnología, salud</td></tr>
      <tr><td>🟣 Morado</td><td>Creatividad, lujo, misterio</td><td>Belleza, arte</td></tr>
      <tr><td>⚫ Negro</td><td>Elegancia, fuerza</td><td>Moda, lujo</td></tr>
    </table></div>
    <div class="caja info"><p>No es una ley: depende del país y de la persona. Pero es un buen punto de partida.</p></div>
  </section>

  <section class="bloque">
    <h2>👓 Contraste: que se pueda leer</h2>
    ${muestras(
      muestra('❌ Cuesta leer', `<div class="m-contraste" style="background:#f2f2f2;color:#c4c4c4">Hola, ¿me lees?</div>`, 'mala'),
      muestra('✅ Se lee fácil', `<div class="m-contraste" style="background:#f2f2f2;color:#1f2a44">Hola, ¿me lees?</div>`, 'buena')
    )}
    <p>Un texto gris claro sobre un fondo blanco <strong>se ve elegante pero cuesta leerlo</strong>. Mucha gente ve con dificultad, sobre todo con el sol o en el teléfono.</p>
    <p>El <strong>contraste</strong> es la diferencia entre el color de la letra y el del fondo. Se mide con un número: tiene que ser <strong>4.5 o más</strong> para textos normales.</p>
    ${pr('Revisa el contraste de estos dos colores: letra [código de color] sobre fondo [código de color]. Dime el número de contraste, si se puede leer bien, y si no, propónme un color parecido que sí funcione.')}
    <p>También puedes revisarlo tú en la página <strong>WebAIM Contrast Checker</strong> (está en los enlaces de abajo).</p>
  </section>

  <section class="bloque">
    <h2>🧪 Tu herramienta de paletas</h2>
    <p>Pídele a Claude que te construya una herramienta para practicar:</p>
    ${pr('Crea un artefacto para crear paletas de colores. Que tenga: un botón grande para generar una paleta de 5 colores armónicos, un menú para elegir el tipo de combinación (monocromática, análoga, complementaria o triádica), el código de cada color, y una tarjeta de ejemplo que use la paleta con la regla 60-30-10. Además, que muestre si el texto se puede leer bien sobre cada color. Botones grandes, fáciles de tocar.')}
    <div class="caja truco"><span class="titulo-caja">💡 Coolors: la barra espaciadora mágica</span>
    <p>En la página <strong>Coolors</strong>, ${dos('cada vez que aprietas la <kbd>barra espaciadora</kbd>', 'cada vez que tocas <strong>"Generate"</strong>')}, aparece una paleta nueva. Si te gusta un color, toca el <strong>candado 🔒</strong> y ese color se queda fijo. ¡Una sola tecla, perfecto para una mano!</p></div>
  </section>

  <section class="bloque">
    <h2>📷 Una paleta sacada de una foto</h2>
    <p>Los diseñadores sacan colores de la naturaleza, de la comida, de la ropa... ¡Prueba tú!</p>
    <div class="pasos"><ol>
      <li>Saca una foto a algo con colores bonitos: un atardecer, una fruta, una flor.</li>
      <li>Súbela a Claude.</li>
      <li>Usa esta frase 👇</li>
    </ol></div>
    ${pr('Sácale una paleta de 5 colores a esta foto. Dame el código de cada color, ponle un nombre bonito a cada uno, y muéstrala como un artefacto con cuadros grandes. Dime para qué tipo de marca o diseño serviría esta paleta.')}
  </section>

  ${videos(
    yt('teoría del color rueda cromática combinaciones diseño', 'La rueda de colores y sus combinaciones'),
    yt('regla 60 30 10 colores diseño', 'La regla 60-30-10'),
    yt('psicología del color en marcas y diseño', 'Psicología del color'),
    yt('Coolors tutorial español paletas', 'Cómo usar Coolors'),
    web('https://coolors.co', 'Coolors (paletas de colores)'),
    web('https://color.adobe.com/es/create/color-wheel', 'Adobe Color (rueda de colores)'),
    web('https://webaim.org/resources/contrastchecker/', 'WebAIM: revisar el contraste (en inglés, es fácil)')
  )}
  `,
  mision: [
    'Sé qué es una combinación complementaria y una análoga',
    'Claude me construyó la herramienta de paletas',
    'Saqué una paleta de colores de una foto mía',
    'Revisé el contraste de dos colores',
    'Guardé mi paleta favorita (en Coolors o en una nota)',
  ],
},

/* ---------------------------------------------------------- 3 */
{
  emoji: '🔤', nivel: 130, etapa: '🎨 Fundamentos del diseño', minutos: 35,
  titulo: 'Tipografía: las letras también hablan',
  aprenderas: [
    'Las familias de letras y qué transmite cada una',
    'Combinar 2 letras que se vean bien juntas',
    'Tamaños y espacios para que todo se lea fácil',
  ],
  html: `
  <section class="bloque">
    <h2>🎭 Las letras tienen personalidad</h2>
    ${muestras(
      muestra('Con serifa', `<div class="m-letra" style="font-family:Georgia,'Times New Roman',serif">Café Luna</div>`),
      muestra('Sin serifa', `<div class="m-letra" style="font-family:'Segoe UI',Arial,sans-serif">Café Luna</div>`),
      muestra('Manuscrita', `<div class="m-letra" style="font-family:'Segoe Script','Brush Script MT',cursive;font-style:italic">Café Luna</div>`),
      muestra('Decorativa', `<div class="m-letra" style="font-family:Impact,'Arial Black',sans-serif;letter-spacing:.06em">CAFÉ LUNA</div>`)
    )}
    <p>La misma palabra se siente distinta según la letra:</p>
    <ul>
      <li>📜 <strong>Con serifa</strong> (tiene "patitas" en las puntas): seria, clásica, confiable. Como un diario o un libro.</li>
      <li>📱 <strong>Sin serifa</strong> (sin patitas): moderna, limpia, fácil de leer en pantallas.</li>
      <li>✍️ <strong>Manuscrita</strong>: parece escrita a mano. Cercana, romántica. Solo para palabras cortas.</li>
      <li>🎪 <strong>Decorativa</strong>: llamativa, con mucha personalidad. Solo para títulos.</li>
    </ul>
  </section>

  <section class="bloque">
    <h2>✌️ Máximo 2 letras</h2>
    <p>La regla más importante: en un diseño usa <strong>máximo 2 tipos de letra</strong>:</p>
    <ul>
      <li>🅰️ Una para los <strong>títulos</strong> (puede tener más personalidad).</li>
      <li>🔡 Una para el <strong>texto</strong> (tiene que ser muy fácil de leer).</li>
    </ul>
    <p>Combinaciones gratis de <strong>Google Fonts</strong> que funcionan muy bien:</p>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Títulos</th><th>Texto</th><th>Sirve para...</th></tr>
      <tr><td>Playfair Display</td><td>Source Sans 3</td><td>Elegante: restaurantes, bodas</td></tr>
      <tr><td>Montserrat</td><td>Lora</td><td>Moderno con calidez</td></tr>
      <tr><td>Poppins</td><td>Inter</td><td>Tecnología, juvenil</td></tr>
      <tr><td>Bebas Neue</td><td>Open Sans</td><td>Deporte, eventos, carteles</td></tr>
    </table></div>
  </section>

  <section class="bloque">
    <h2>📏 Tamaños y espacios</h2>
    ${muestras(
      muestra('Jerarquía con tamaños', `<div class="m-jerarquia"><strong>Título grande</strong><span class="sub">Subtítulo mediano</span><span class="txt">Este es el texto normal. Es más chico, pero se lee cómodo porque tiene espacio entre las líneas.</span></div>`)
    )}
    <ul>
      <li>🔠 El <strong>título</strong> tiene que ser mucho más grande que el texto (el doble o más).</li>
      <li>🔡 En una página web, el texto normal <strong>no debe ser más chico que 16 puntos</strong> (este curso usa 20).</li>
      <li>↕️ Deja <strong>espacio entre las líneas</strong> (se llama <strong>interlineado</strong>). Las líneas pegadas cansan la vista.</li>
      <li>↔️ Las líneas no deben ser <strong>muy largas</strong>: de 8 a 12 palabras por línea es lo ideal.</li>
    </ul>
  </section>

  <section class="bloque">
    <h2>🚫 Errores que hay que evitar</h2>
    <div class="compara">
      <div class="mal"><span class="etq">😕 Evita</span>ESCRIBIR TODO EN MAYÚSCULAS. PARECE QUE ESTÁS GRITANDO Y CUESTA MÁS LEER.</div>
      <div class="bien"><span class="etq">😃 Mejor</span>Usa mayúsculas solo para palabras cortas o títulos breves.</div>
    </div>
    <ul>
      <li>❌ Usar letra manuscrita o decorativa en <strong>textos largos</strong>.</li>
      <li>❌ Usar <strong>4 o 5 letras distintas</strong> en un mismo diseño.</li>
      <li>❌ Poner texto sobre una foto <strong>sin contraste</strong> (no se lee).</li>
      <li>❌ <strong>Estirar o aplastar</strong> las letras para que quepan.</li>
    </ul>
  </section>

  <section class="bloque">
    <h2>🧪 Tu probador de letras</h2>
    <p>Pídele a Claude un probador para ver tu nombre (o el de una marca) con distintas letras:</p>
    ${pr('Crea un artefacto para probar tipografías de Google Fonts. Arriba, una caja donde escribo una palabra (por ejemplo [nombre de la marca]). Abajo, que muestre esa palabra con 8 combinaciones de letras distintas para título y texto, cada una con su nombre y una frase de qué transmite (elegante, moderna, divertida, etc.). Botones grandes y letras grandes.')}
    <p>Después pregúntale: <em>"¿Cuál de estas combinaciones recomiendas para una tienda de juguetes de madera? ¿Por qué?"</em></p>
  </section>

  <section class="bloque">
    <h2>📥 Usar letras de Google Fonts</h2>
    <div class="solo-pc">
    <div class="pasos"><ol>
      <li>Entra a <strong>fonts.google.com</strong> (está en los enlaces de abajo).</li>
      <li>Haz clic en la lupa 🔎 y dicta el nombre de la letra (por ejemplo, <em>Montserrat</em>).</li>
      <li>Ábrela y haz clic en <strong>"Get font"</strong> y después en <strong>"Download all"</strong> (descargar).</li>
      <li>Abre el archivo que bajó (es un ZIP): clic derecho → <strong>Extraer todo</strong>.</li>
      <li>Haz doble clic en un archivo de la letra y toca <strong>"Instalar"</strong>. ¡Ya la puedes usar en tu computadora!</li>
    </ol></div>
    </div>
    <div class="solo-movil">
    <p>En el teléfono no hace falta instalar nada: <strong>Canva</strong> ya tiene casi todas las letras de Google Fonts. Busca el nombre de la letra en el menú de letras de Canva.</p>
    </div>
    <div class="caja bien"><span class="titulo-caja">✅ Todas son gratis</span>
    <p>Las letras de Google Fonts se pueden usar gratis, también en trabajos para clientes.</p></div>
  </section>

  ${videos(
    yt('tipografía para principiantes serif sans serif diseño', 'Tipografía para principiantes'),
    yt('cómo combinar tipografías diseño gráfico', 'Cómo combinar letras'),
    yt('jerarquía tipográfica tamaños diseño', 'Tamaños y jerarquía de las letras'),
    web('https://fonts.google.com', 'Google Fonts (letras gratis)')
  )}
  `,
  mision: [
    'Sé la diferencia entre una letra con serifa y una sin serifa',
    'Claude me construyó el probador de letras',
    'Elegí mi combinación favorita de 2 letras',
    'Encontré una letra en Google Fonts (o en Canva)',
  ],
},

/* ---------------------------------------------------------- 4 */
{
  emoji: '⭐', nivel: 140, etapa: '✏️ Creando piezas', minutos: 45,
  titulo: 'Logos e íconos con Claude',
  aprenderas: [
    'Los 4 tipos de logo y qué hace bueno a un logo',
    'El camino para crear un logo, del encargo al final',
    'Guardar tu logo en distintas versiones',
  ],
  html: `
  <section class="bloque">
    <h2>🏷️ ¿Qué hace bueno a un logo?</h2>
    <p>Un buen logo cumple <strong>5 cosas</strong>:</p>
    <ol>
      <li>🧼 <strong>Simple:</strong> se puede dibujar de memoria.</li>
      <li>🧠 <strong>Se recuerda</strong> después de verlo una vez.</li>
      <li>🔍 <strong>Funciona chiquitito</strong>, por ejemplo en el ícono de una app.</li>
      <li>⚫ <strong>Funciona en blanco y negro</strong>, sin colores.</li>
      <li>⏳ <strong>Dura años</strong>: no depende de una moda.</li>
    </ol>
  </section>

  <section class="bloque">
    <h2>🔷 Los 4 tipos de logo</h2>
    ${muestras(
      muestra('Símbolo', `<svg viewBox="0 0 100 70" class="m-logo"><path d="M50 8 C75 20 78 50 50 62 C22 50 25 20 50 8Z" fill="#2f8f5b"/><path d="M50 14 L50 58" stroke="#fff" stroke-width="3"/></svg>`),
      muestra('Logotipo (solo letras)', `<svg viewBox="0 0 100 70" class="m-logo"><text x="50" y="43" text-anchor="middle" font-size="17" font-weight="800" font-family="Arial,sans-serif" fill="#2f8f5b">hoja verde</text></svg>`),
      muestra('Combinado', `<svg viewBox="0 0 100 70" class="m-logo"><path d="M18 20 C30 25 31 41 18 48 C5 41 6 25 18 20Z" fill="#2f8f5b"/><text x="32" y="39" font-size="11" font-weight="800" font-family="Arial,sans-serif" fill="#1d4d34">hoja verde</text></svg>`),
      muestra('Emblema', `<svg viewBox="0 0 100 70" class="m-logo"><circle cx="50" cy="35" r="30" fill="#1d4d34"/><circle cx="50" cy="35" r="25" fill="none" stroke="#fff" stroke-width="1.5"/><text x="50" y="33" text-anchor="middle" font-size="8.5" font-weight="800" font-family="Arial,sans-serif" fill="#fff">HOJA</text><text x="50" y="44" text-anchor="middle" font-size="8.5" font-weight="800" font-family="Arial,sans-serif" fill="#fff">VERDE</text></svg>`)
    )}
    <ul>
      <li><strong>Símbolo:</strong> solo un dibujo (como la manzana de Apple).</li>
      <li><strong>Logotipo:</strong> solo el nombre con letras especiales (como Coca-Cola).</li>
      <li><strong>Combinado:</strong> dibujo + nombre juntos. <strong>Es el más usado</strong> por negocios nuevos.</li>
      <li><strong>Emblema:</strong> el nombre dentro de una forma, como un sello o un escudo.</li>
    </ul>
  </section>

  <section class="bloque">
    <h2>📝 Paso 1: el encargo (brief)</h2>
    <p>Antes de dibujar, un diseñador <strong>pregunta</strong>. El documento con las respuestas se llama <strong>brief</strong> (se dice "brif"). Las preguntas clave:</p>
    <ul>
      <li>¿Cómo se llama el negocio y qué hace?</li>
      <li>¿Quiénes son sus clientes?</li>
      <li>¿Qué <strong>3 palabras</strong> describen su personalidad? (por ejemplo: alegre, natural, confiable)</li>
      <li>¿Hay colores que le gustan o que no quiere?</li>
      <li>¿Dónde se va a usar el logo? (letrero, redes, camisetas...)</li>
    </ul>
    ${pr('Quiero diseñar un logo. Hazme una entrevista como si fueras un diseñador profesional preparando el brief. Hazme una pregunta a la vez y espera mi respuesta. Al final, resume el brief en una lista corta.')}
  </section>

  <section class="bloque">
    <h2>✏️ Paso 2: muchas ideas (bocetos)</h2>
    <p>Con el brief listo, pídele a Claude <strong>muchas ideas distintas</strong>. Al principio, cantidad. Después, calidad.</p>
    ${pr('Con el brief que hicimos, crea 6 propuestas de logo diferentes en SVG, en un artefacto. Ponlas en una cuadrícula, cada una con un número grande. Que sean de distintos tipos: símbolo, logotipo, combinado y emblema. Debajo de cada una, explica la idea en una frase. Muestra también cada logo en blanco y negro y en tamaño chiquitito, para ver si sigue funcionando.')}
    <div class="caja truco"><span class="titulo-caja">💡 Mira con ojos de diseñador</span>
    <p>Antes de elegir, revisa las 5 cosas de un buen logo: ¿es simple? ¿se recuerda? ¿funciona chiquitito? ¿y en blanco y negro?</p></div>
  </section>

  <section class="bloque">
    <h2>🔁 Paso 3: mejorar el elegido</h2>
    <p>Elige uno y pide cambios. Estas frases te ayudan a decir exactamente lo que quieres:</p>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Quiero que...</th><th>Dile a Claude</th></tr>
      <tr><td>Se vea más fuerte</td><td>"Haz las líneas más gruesas"</td></tr>
      <tr><td>Se vea más amable</td><td>"Redondea las puntas y las esquinas"</td></tr>
      <tr><td>Se vea más elegante</td><td>"Simplifícalo: quita detalles y deja más espacio"</td></tr>
      <tr><td>Las letras respiren</td><td>"Separa un poco más las letras"</td></tr>
      <tr><td>Combine mejor</td><td>"Usa los colores de mi paleta: [códigos]"</td></tr>
      <tr><td>Ver alternativas</td><td>"Hazme 3 variaciones de la número [número]"</td></tr>
    </table></div>
    <p>Recuerda: <strong>un cambio a la vez</strong>. Y si algo empeora: <em>"Vuelve a la versión anterior."</em></p>
  </section>

  <section class="bloque">
    <h2>📦 Paso 4: las versiones del logo</h2>
    <p>Un logo profesional tiene <strong>varias versiones</strong> para distintos usos:</p>
    ${pr('Ahora crea una hoja con todas las versiones de mi logo final: a color, en negro, en blanco sobre fondo oscuro, la versión horizontal, la versión cuadrada y el ícono solo (para redes sociales). Agrega botones grandes para descargar cada versión como SVG y como PNG.')}
    <div class="caja info"><span class="titulo-caja">ℹ️ Si un botón no descarga</span>
    <p>A veces la ventana del artefacto no deja descargar. Entonces usa el botón de <strong>descargar</strong> del propio artefacto (arriba), o pídele a Claude: <em>"¿Cómo guardo este logo como imagen?"</em> Y recuerda: el <strong>SVG</strong> se puede agrandar sin que se vea borroso; el <strong>PNG</strong> es una imagen normal que funciona en todas partes.</p></div>
  </section>

  <section class="bloque">
    <h2>✨ Íconos: la familia del logo</h2>
    <p>Los <strong>íconos</strong> son dibujitos simples: 📞 teléfono, 📍 ubicación, 🛒 carrito. En una página web o un menú, todos tienen que verse <strong>de la misma familia</strong> (¡regla de la repetición!).</p>
    ${pr('Crea un set de 8 íconos en SVG para la página web de [nombre del negocio]: inicio, productos, ubicación, teléfono, correo, horario, Instagram y carrito. Todos con el mismo estilo: líneas del mismo grosor, puntas redondeadas y los colores de mi marca. Muéstralos grandes, con su nombre debajo.')}
  </section>

  <section class="bloque">
    <h2>🛑 Cuidado con copiar</h2>
    <ul>
      <li>🙅 No le pidas a Claude un logo "igual al de" una marca famosa. Inspírate, pero crea algo tuyo.</li>
      <li>🔎 Busca en internet el nombre del negocio, para ver que no exista otro igual.</li>
      <li>⚖️ Claude <strong>no puede revisar</strong> si un logo está registrado. Para un negocio real que va a crecer, conviene revisarlo en la oficina de marcas del país.</li>
    </ul>
  </section>

  ${videos(
    yt('cómo diseñar un logo paso a paso principiantes', 'Cómo diseñar un logo paso a paso'),
    yt('tipos de logotipo isotipo imagotipo isologo', 'Los tipos de logo'),
    yt('qué es un brief de diseño gráfico', '¿Qué es un brief?'),
    yt('Claude crear logo SVG', 'Crear logos en SVG con Claude'),
    web('https://inkscape.org/es/', 'Inkscape (editar SVG, gratis)')
  )}
  `,
  mision: [
    'Claude me hizo la entrevista del brief',
    'Claude me hizo 6 propuestas de logo y elegí una',
    'Le pedí al menos 3 cambios al logo elegido',
    'Guardé mi logo en SVG o PNG',
    'Hice un set de íconos de la misma familia',
  ],
},

/* ---------------------------------------------------------- 5 */
{
  emoji: '🖼️', nivel: 150, etapa: '✏️ Creando piezas', minutos: 45,
  titulo: 'Imágenes con IA: crear y editar',
  aprenderas: [
    'Describir una imagen como un profesional (la receta de la imagen)',
    'Herramientas gratis para crear imágenes',
    'Editar imágenes: quitar el fondo, recortar y mejorar',
  ],
  html: `
  <section class="bloque">
    <h2>🤝 Claude describe, otra IA pinta</h2>
    <p>Recuerda: Claude es excelente para <strong>logos, íconos y carteles hechos con formas</strong>. Para <strong>fotos e ilustraciones</strong> usamos otras herramientas gratis.</p>
    <p>El trabajo en equipo es así: <strong>Claude escribe la descripción perfecta</strong>, y la otra herramienta <strong>pinta la imagen</strong>.</p>
    <div class="caja info"><p>Las IA cambian rápido. Si un día Claude puede crear imágenes en tu plan, ¡pruébalo! Pregúntale: <em>"¿Puedes crear imágenes tipo foto?"</em></p></div>
  </section>

  <section class="bloque">
    <h2>🧾 La receta de la imagen</h2>
    <p>Una buena descripción de imagen tiene estos ingredientes:</p>
    <div class="pasos"><ol>
      <li><strong>🧸 Qué:</strong> lo principal. <em>"Un gato naranja durmiendo"</em></li>
      <li><strong>🏞️ Dónde:</strong> el fondo. <em>"sobre una ventana con plantas"</em></li>
      <li><strong>🎨 Estilo:</strong> <em>"ilustración en acuarela"</em> o <em>"foto realista"</em></li>
      <li><strong>🌈 Colores:</strong> <em>"tonos cálidos, naranja y verde suave"</em></li>
      <li><strong>💡 Luz:</strong> <em>"luz suave de la mañana"</em></li>
      <li><strong>📷 Encuadre y formato:</strong> <em>"vista de cerca, imagen cuadrada"</em></li>
    </ol></div>
    <div class="compara">
      <div class="mal"><span class="etq">😕 Así no tanto</span>"Un gato."</div>
      <div class="bien"><span class="etq">😃 ¡Así sí!</span>"Un gato naranja durmiendo sobre una ventana con plantas, ilustración en acuarela, tonos cálidos naranja y verde suave, luz suave de la mañana, vista de cerca, imagen cuadrada."</div>
    </div>
  </section>

  <section class="bloque">
    <h2>✍️ Claude escribe la receta por ti</h2>
    ${pr('Quiero crear una imagen con IA para [para qué es: un post, un cartel, mi página web]. La idea es: [describe tu idea con tus palabras]. Escríbeme 3 descripciones detalladas para un generador de imágenes, usando la receta: qué, dónde, estilo, colores, luz, encuadre y formato. Cada una en un estilo distinto. Escríbelas cortas y claras.')}
    <p>Después copias la que más te guste y la pegas en el generador. Si la imagen no sale bien, pídele a Claude: <em>"Escríbela en inglés"</em>. Algunas herramientas entienden mejor el inglés.</p>
  </section>

  <section class="bloque">
    <h2>🛠️ Herramientas gratis para crear imágenes</h2>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Herramienta</th><th>Buena para...</th></tr>
      <tr><td><strong>Microsoft Designer</strong> (o Bing Image Creator)</td><td>Imágenes variadas, con tu cuenta Microsoft.</td></tr>
      <tr><td><strong>Ideogram</strong></td><td>Imágenes con <strong>texto escrito</strong> adentro (carteles).</td></tr>
      <tr><td><strong>Adobe Firefly / Express</strong></td><td>Imágenes de buena calidad, pensadas para uso comercial.</td></tr>
      <tr><td><strong>Gemini</strong> y <strong>ChatGPT</strong></td><td>Crear y <strong>cambiar</strong> imágenes conversando.</td></tr>
      <tr><td><strong>Canva</strong></td><td>Tiene una opción de "texto a imagen" dentro de tus diseños.</td></tr>
    </table></div>
    <div class="caja info"><p>Todas tienen un <strong>límite gratis por día o por mes</strong>. Si se te acaba en una, usa otra. Puedes preguntarle a Claude: <em>"¿Qué herramientas gratis hay hoy para crear imágenes con IA?"</em></p></div>
  </section>

  <section class="bloque">
    <h2>🎨 Estilos para probar</h2>
    <p>Cambiar <strong>una sola palabra</strong> del estilo cambia toda la imagen. Prueba estos:</p>
    <ul>
      <li>🖌️ <strong>Acuarela</strong>: suave, artística.</li>
      <li>🟦 <strong>Ilustración plana</strong> (en inglés, "flat"): colores lisos, moderna. Ideal para páginas web.</li>
      <li>🧸 <strong>3D</strong>: como un muñeco de plastilina o de juguete.</li>
      <li>📸 <strong>Foto de estudio</strong>: realista, con fondo limpio. Ideal para productos.</li>
      <li>✏️ <strong>Dibujo de líneas</strong>: minimalista, elegante.</li>
      <li>📼 <strong>Retro</strong>: como de los años 80 o 90.</li>
      <li>✂️ <strong>Papel recortado</strong>: como manualidad, con sombritas.</li>
    </ul>
  </section>

  <section class="bloque">
    <h2>🔁 Elegir y mejorar</h2>
    <div class="pasos"><ol>
      <li>El generador te da varias imágenes. <strong>Elige la mejor</strong> (o la menos mala 😄).</li>
      <li>Guárdala y <strong>muéstrasela a Claude</strong>.</li>
      <li>Pregúntale: <em>"¿Qué le falta a esta imagen para usarla en [lo que quieres]? Mejora la descripción."</em></li>
      <li>Usa la nueva descripción y vuelve a crearla.</li>
    </ol></div>
    <div class="caja ojo"><span class="titulo-caja">👀 Revisa los detalles</span>
    <p>Las IA de imágenes a veces se equivocan con las <strong>manos, los dedos, los textos y las caras</strong>. Mira la imagen de cerca antes de usarla.</p></div>
  </section>

  <section class="bloque">
    <h2>✂️ Editar imágenes gratis</h2>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Quiero...</th><th>Uso...</th></tr>
      <tr><td>Quitar el fondo</td><td><strong>Adobe Express</strong> (gratis) o <strong>remove.bg</strong></td></tr>
      <tr><td>Recortar o enderezar</td><td>${dos('La app <strong>Fotos</strong> de Windows → Editar', 'La <strong>galería</strong> del teléfono → Editar')}</td></tr>
      <tr><td>Más luz o más color</td><td>${dos('La app <strong>Fotos</strong> de Windows → Editar → Ajustar', 'La <strong>galería</strong> del teléfono → Editar → Ajustes')}</td></tr>
      <tr><td>Editar como profesional</td><td><strong>Photopea</strong>: como Photoshop, gratis en el navegador</td></tr>
    </table></div>
    <p>Photopea tiene muchos botones. ¡No te asustes! Claude te guía paso a paso:</p>
    ${pr('Estoy usando Photopea por primera vez, en el navegador. Quiero [lo que quieres hacer: por ejemplo, poner un texto sobre una foto]. Guíame paso a paso, un paso a la vez, diciéndome dónde está cada botón. Espera a que yo te diga "listo" antes del siguiente paso. Si me pierdo, te mando una captura de pantalla.')}
  </section>

  <section class="bloque">
    <h2>⚖️ Usar imágenes de IA con respeto</h2>
    <ul>
      <li>🎨 No pidas imágenes "al estilo de" un <strong>artista vivo</strong> con nombre y apellido. Describe el estilo con tus palabras.</li>
      <li>👤 No crees imágenes de <strong>personas reales</strong> sin su permiso.</li>
      <li>🗣️ Si una imagen la hizo una IA, es bueno <strong>decirlo</strong>, sobre todo con clientes.</li>
      <li>📜 Si es para un <strong>negocio</strong>, revisa que la herramienta permita el uso comercial (pregúntale a Claude).</li>
    </ul>
  </section>

  ${videos(
    yt('cómo escribir prompts para imágenes con IA', 'Cómo describir imágenes para la IA'),
    yt('Microsoft Designer tutorial español', 'Microsoft Designer'),
    yt('Ideogram tutorial español', 'Ideogram: imágenes con texto'),
    yt('quitar fondo de imagen gratis Adobe Express', 'Quitar el fondo de una imagen gratis'),
    yt('Photopea tutorial para principiantes español', 'Photopea para principiantes'),
    web('https://designer.microsoft.com', 'Microsoft Designer'),
    web('https://ideogram.ai', 'Ideogram'),
    web('https://new.express.adobe.com', 'Adobe Express'),
    web('https://www.photopea.com', 'Photopea (editor gratis)')
  )}
  `,
  mision: [
    'Claude me escribió 3 descripciones de imagen con la receta',
    'Creé una imagen en una herramienta gratis',
    'Probé la misma idea en 2 estilos distintos',
    'Le quité el fondo a una imagen o la recorté',
    'Le pedí a Claude que mejorara una descripción después de ver la imagen',
  ],
},

/* ---------------------------------------------------------- 6 */
{
  emoji: '📱', nivel: 160, etapa: '✏️ Creando piezas', minutos: 40,
  titulo: 'Redes sociales y carteles con Canva',
  aprenderas: [
    'Los tamaños correctos para cada red social',
    'Armar una publicación en Canva con tu logo y tus colores',
    'Usar a Claude como director de arte: antes y después',
  ],
  html: `
  <section class="bloque">
    <h2>📐 Cada lugar tiene su tamaño</h2>
    <p>Un diseño para Instagram no tiene la misma forma que uno para WhatsApp o para imprimir. Los tamaños se miden en <strong>píxeles</strong> (los puntitos de la pantalla):</p>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Para...</th><th>Forma</th><th>Tamaño</th></tr>
      <tr><td>Publicación de Instagram o Facebook</td><td>Cuadrado ⬛</td><td>1080 × 1080</td></tr>
      <tr><td>Publicación vertical de Instagram</td><td>Rectángulo parado</td><td>1080 × 1350</td></tr>
      <tr><td>Historias, Reels y estados de WhatsApp</td><td>Alto 📱</td><td>1080 × 1920</td></tr>
      <tr><td>Miniatura de YouTube</td><td>Ancho 🖥️</td><td>1280 × 720</td></tr>
      <tr><td>Cartel para imprimir</td><td>Hoja carta o A4</td><td>Elige "Póster" o "Carta" en Canva</td></tr>
    </table></div>
    <div class="caja bien"><span class="titulo-caja">✅ No tienes que memorizarlo</span>
    <p>En Canva solo escribes "post de Instagram" o "historia" y ya viene con el tamaño correcto.</p></div>
  </section>

  <section class="bloque">
    <h2>🧰 Tu primer diseño en Canva</h2>
    <div class="pasos"><ol>
      <li>${dos('Entra a <strong>canva.com</strong> y entra con tu cuenta de Google.', 'Abre la app de <strong>Canva</strong> y entra con tu cuenta de Google.')}</li>
      <li>Toca <strong>"Crear un diseño"</strong> (o el botón <strong>➕</strong>) y elige <strong>"Post de Instagram"</strong>.</li>
      <li>A la izquierda (o abajo en el teléfono) están las <strong>plantillas</strong>. Elige una que te guste <strong>por el orden</strong>, no por los colores: los colores los cambias tú.</li>
      <li>En <strong>"Subidos"</strong> (o "Archivos"), sube tu <strong>logo</strong>.</li>
      <li>Cambia los textos, los colores y las letras por <strong>los de tu marca</strong>.</li>
      <li>Toca <strong>"Compartir" → "Descargar"</strong> y elige <strong>PNG</strong>.</li>
    </ol></div>
    <div class="caja truco"><span class="titulo-caja">💡 Tus colores siempre a mano</span>
    <p>Guardar los colores de tu marca en Canva se llama "Kit de marca" y es de pago. Truco gratis: guarda los <strong>códigos de tus colores</strong> (como #2F8F5B) en una nota del teléfono. Cuando cambies un color en Canva, toca el <strong>➕ de colores</strong> y ${PEGA} el código.</p></div>
  </section>

  <section class="bloque solo-pc">
    <h2>🖐️ Canva con una mano: atajos útiles</h2>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Quiero...</th><th>Aprieto...</th></tr>
      <tr><td>Deshacer el último cambio</td><td><kbd>Ctrl</kbd> + <kbd>Z</kbd></td></tr>
      <tr><td>Duplicar algo (copiar y pegar al tiro)</td><td><kbd>Ctrl</kbd> + <kbd>D</kbd></td></tr>
      <tr><td>Agregar un texto</td><td><kbd>T</kbd></td></tr>
      <tr><td>Borrar lo seleccionado</td><td><kbd>Supr</kbd> o <kbd>⌫</kbd></td></tr>
      <tr><td>Acercar / alejar</td><td><kbd>Ctrl</kbd> + <kbd>+</kbd> / <kbd>Ctrl</kbd> + <kbd>−</kbd></td></tr>
    </table></div>
    <p>Recuerda: con <strong>Teclas especiales</strong> (aprieta <kbd>Shift ⇧</kbd> 5 veces) puedes apretar las combinaciones una tecla a la vez.</p>
  </section>

  <section class="bloque solo-movil">
    <h2>🖐️ Canva con una mano en el teléfono</h2>
    <ul>
      <li>↩️ Para deshacer, toca la <strong>flecha curva</strong> de arriba.</li>
      <li>📋 Para duplicar algo, tócalo y busca <strong>"Duplicar"</strong> en el menú de abajo.</li>
      <li>🔍 Para ver más grande, gira el teléfono o usa el <strong>zoom de accesibilidad</strong> del teléfono.</li>
      <li>💻 Para diseños grandes o con mucho detalle, la <strong>computadora</strong> es más cómoda.</li>
    </ul>
  </section>

  <section class="bloque">
    <h2>🎬 Claude, director de arte: ANTES</h2>
    <p>Antes de abrir Canva, planea el diseño con Claude:</p>
    ${pr('Voy a diseñar un post de Instagram para [nombre de la marca], que vende [qué vende]. El mensaje es: [qué quieres decir, por ejemplo: llegaron productos nuevos]. Mis colores son [códigos] y mis letras son [nombres]. Dime: 1) un título corto y llamativo, 2) un texto de apoyo de una línea, 3) cómo ordenar las cosas (qué va arriba, al medio y abajo), y 4) qué imagen usar. Usa las reglas de jerarquía y espacio en blanco.')}
  </section>

  <section class="bloque">
    <h2>🎬 Claude, director de arte: DESPUÉS</h2>
    <p>Cuando termines tu diseño, descárgalo o saca una captura, y muéstraselo a Claude:</p>
    ${pr('Este es el post que diseñé. Revísalo como un director de arte amable: dime 3 cosas que están bien y 3 cosas concretas para mejorar, usando contraste, alineación, repetición, proximidad y jerarquía. Dime exactamente qué mover, agrandar o cambiar.')}
    <p>Haz los cambios en Canva y vuelve a mostrárselo. <strong>Dos o tres vueltas</strong> bastan para que quede muy bien.</p>
  </section>

  <section class="bloque">
    <h2>🗂️ Una serie que se vea de la misma familia</h2>
    <p>Las marcas no hacen un post suelto: hacen <strong>series</strong> donde todo se parece (¡regla de la repetición!).</p>
    <ul>
      <li>📄 Cuando un diseño te quede bien, <strong>duplica la página</strong> y cambia solo el texto y la imagen.</li>
      <li>🎨 Usa siempre los <strong>mismos colores, letras y ubicación del logo</strong>.</li>
      <li>📅 Pídele ideas a Claude: <em>"Dame ideas para 9 publicaciones de [marca] para este mes."</em></li>
    </ul>
    ${pr('Escríbeme los textos para 3 publicaciones de Instagram de [nombre de la marca]. Para cada una: un título de máximo 6 palabras para poner en la imagen, una descripción corta y amable para poner debajo de la foto, y 5 hashtags.')}
  </section>

  <section class="bloque">
    <h2>🔌 Claude y Canva conectados</h2>
    <p>Claude tiene un <strong>conector de Canva</strong>: con él, Claude puede buscar y crear diseños en tu cuenta de Canva. Búscalo en <strong>Configuración → Conectores</strong>.</p>
    <div class="caja info"><p>Los conectores pueden cambiar según tu plan. Si no te aparece, no pasa nada: <strong>todo lo de esta lección funciona sin conector</strong>.</p></div>
  </section>

  ${videos(
    yt('Canva tutorial principiantes post de Instagram', 'Canva: tu primer post de Instagram'),
    yt('Canva celular tutorial principiantes', 'Canva en el teléfono'),
    yt('cómo hacer una serie de posts coherentes Instagram diseño', 'Diseñar una serie de posts'),
    yt('diseñar un cartel en Canva para imprimir', 'Un cartel para imprimir con Canva'),
    web('https://www.canva.com', 'Canva')
  )}
  `,
  mision: [
    'Hice un post de Instagram en Canva con mi logo y mis colores',
    'Planeé el diseño con Claude antes de empezar',
    'Le mostré mi diseño a Claude y le hice al menos 2 mejoras',
    'Hice una serie de 3 posts de la misma familia',
  ],
},

/* ---------------------------------------------------------- 7 */
{
  emoji: '📘', nivel: 170, etapa: '✏️ Creando piezas', minutos: 50,
  titulo: 'Identidad de marca completa',
  aprenderas: [
    'Qué es una identidad de marca (es más que un logo)',
    'El camino completo, desde el encargo hasta la entrega',
    'Crear un manual de marca y presentárselo a un cliente',
  ],
  html: `
  <section class="bloque">
    <h2>🧬 Una marca es más que un logo</h2>
    <p>Piensa en una persona: la reconoces por su cara, pero también por <strong>su ropa, su forma de hablar y su estilo</strong>. Con las marcas pasa lo mismo.</p>
    <p>La <strong>identidad de marca</strong> es todo junto:</p>
    <ul>
      <li>⭐ El <strong>logo</strong> (la cara).</li>
      <li>🌈 Los <strong>colores</strong> y 🔤 las <strong>letras</strong> (la ropa).</li>
      <li>🖼️ El <strong>estilo de las imágenes</strong> (cómo se ven sus fotos).</li>
      <li>🗣️ El <strong>tono de voz</strong> (cómo habla: serio, divertido, cercano).</li>
      <li>📦 Las <strong>aplicaciones</strong>: dónde aparece (tarjetas, letreros, bolsas, redes).</li>
    </ul>
    <p>¡Ya aprendiste casi todas las piezas! En esta lección <strong>las juntas todas</strong>.</p>
  </section>

  <section class="bloque">
    <h2>👤 Elige tu cliente</h2>
    <p>Lo mejor es un <strong>cliente real</strong>: un familiar, un amigo o un negocio del barrio que necesite una marca. ¡Es tu primer trabajo de verdad!</p>
    <p>Si prefieres practicar primero, Claude te inventa uno:</p>
    ${pr('Invéntame un cliente imaginario para practicar identidad de marca. Que sea un negocio pequeño y simpático. Preséntamelo como si fuera el dueño hablando: cómo se llama el negocio, qué vende, quiénes son sus clientes, qué le gusta y qué no. Después, espera mis preguntas como si fueras ese cliente.')}
  </section>

  <section class="bloque">
    <h2>🗺️ El camino completo</h2>
    <div class="pasos"><ol>
      <li><strong>📝 Brief:</strong> la entrevista con el cliente (lección 140).</li>
      <li><strong>🖼️ Tablero de inspiración:</strong> imágenes, colores y palabras que muestran el estilo (abajo 👇).</li>
      <li><strong>⭐ Logo:</strong> ideas, elegir, mejorar y versiones (lección 140).</li>
      <li><strong>🌈 Paleta:</strong> con la regla 60-30-10 y buen contraste (lección 120).</li>
      <li><strong>🔤 Letras:</strong> una para títulos, una para texto (lección 130).</li>
      <li><strong>🗣️ Tono de voz:</strong> cómo habla la marca (abajo 👇).</li>
      <li><strong>📦 Aplicaciones:</strong> tarjeta de presentación, post, letrero (lección 160).</li>
      <li><strong>📘 Manual de marca:</strong> todo en un solo documento (abajo 👇).</li>
      <li><strong>🎤 Presentación</strong> al cliente.</li>
    </ol></div>
    <div class="caja truco"><span class="titulo-caja">💡 Con calma</span>
    <p>Esta lección es larga. Haz <strong>uno o dos pasos por día</strong>. Usa siempre el mismo chat (o tu proyecto), así Claude recuerda todo lo que van decidiendo.</p></div>
  </section>

  <section class="bloque">
    <h2>🖼️ El tablero de inspiración</h2>
    <p>En inglés se llama <strong>"moodboard"</strong> (se dice "mud-bord"). Es una colección de imágenes, colores y letras que muestran <strong>cómo se va a sentir la marca</strong>, antes de diseñar nada.</p>
    <ul>
      <li>📌 En <strong>Pinterest</strong> (gratis) puedes crear un tablero y guardar imágenes que te inspiren.</li>
      <li>🧡 O Claude puede armarte uno:</li>
    </ul>
    ${pr('Con el brief de mi cliente, crea un tablero de inspiración como artefacto: 3 palabras clave grandes, una paleta de 5 colores con sus códigos, 2 ejemplos de letras de Google Fonts, formas y texturas dibujadas con código, y 3 descripciones de fotos que irían con la marca. Que se vea como un collage bonito.')}
  </section>

  <section class="bloque">
    <h2>🗣️ El tono de voz</h2>
    <p>Es <strong>cómo escribe y habla</strong> la marca. Un banco habla serio; una heladería habla alegre. Si la marca siempre habla igual, la gente la reconoce.</p>
    ${pr('Define el tono de voz de mi marca. Dame: 3 palabras que lo describen, 3 cosas que la marca SÍ dice y 3 que NUNCA diría, y un ejemplo de cómo saludaría a un cliente en Instagram.')}
  </section>

  <section class="bloque">
    <h2>📘 El manual de marca</h2>
    <p>El <strong>manual de marca</strong> es un documento con todas las reglas de la marca, para que cualquier persona la use bien. Claude lo arma contigo:</p>
    ${pr('Crea el manual de marca de mi cliente como un artefacto, en una sola página web bonita, con secciones: 1) la historia y personalidad de la marca, 2) el logo y sus versiones, con el espacio que debe quedar libre alrededor, 3) usos incorrectos del logo (estirarlo, cambiarle colores), 4) la paleta con códigos y la regla 60-30-10, 5) las letras para títulos y textos, con ejemplos de tamaños, 6) el estilo de las imágenes, 7) el tono de voz, y 8) ejemplos de aplicaciones: tarjeta de presentación, post de Instagram y letrero. Usa la paleta y las letras de la marca en el propio manual.')}
    <div class="caja info"><p>Si Claude no tiene tu logo en ese chat, súbelo primero (o pega el código SVG). Así lo puede poner en el manual.</p></div>
  </section>

  <section class="bloque">
    <h2>🎤 Presentar al cliente</h2>
    <p>Presentar bien es <strong>parte del trabajo</strong>. Consejos:</p>
    <ul>
      <li>📖 <strong>Cuenta una historia:</strong> empieza por el brief ("me dijiste que querías..."), después muestra el diseño.</li>
      <li>🤔 <strong>Explica tus decisiones:</strong> "Elegí el verde porque transmite naturaleza".</li>
      <li>✌️ Muestra <strong>2 o 3 opciones</strong>, no 10. Muchas opciones confunden.</li>
      <li>👂 <strong>Escucha</strong> los comentarios sin enojarte. Anótalos y después mejora.</li>
    </ul>
    <p>Practica con Claude. En el teléfono, ¡hazlo con el <strong>modo voz</strong>!</p>
    ${pr('Vamos a practicar. Tú eres mi cliente y yo te presento la identidad de marca que diseñé. Escucha mi presentación, hazme 2 preguntas difíciles pero amables, como un cliente real, y al final dame consejos para presentar mejor.')}
  </section>

  ${videos(
    yt('qué es la identidad de marca explicado fácil', '¿Qué es la identidad de marca?'),
    yt('cómo hacer un moodboard para diseño de marca', 'Cómo hacer un tablero de inspiración'),
    yt('qué es un manual de marca y qué contiene', '¿Qué es un manual de marca?'),
    yt('cómo presentar un logo a un cliente consejos', 'Cómo presentar un diseño a un cliente'),
    web('https://es.pinterest.com', 'Pinterest (tableros de inspiración)')
  )}
  `,
  mision: [
    'Elegí a mi cliente (real o imaginario) e hice su brief',
    'Hice un tablero de inspiración',
    'Definí el tono de voz de la marca',
    'Claude armó el manual de marca completo',
    'Practiqué la presentación con Claude',
  ],
},

/* ---------------------------------------------------------- 8 */
{
  emoji: '🧱', nivel: 180, etapa: '🌐 Páginas web', minutos: 45,
  titulo: 'Cómo funciona una página web (y tu primera página)',
  aprenderas: [
    'Qué son HTML, CSS y JavaScript, con el ejemplo de una casa',
    'Las partes que tiene casi toda página web',
    'Crear la página web de tu marca con Claude',
  ],
  html: `
  <section class="bloque">
    <h2>🏠 Una página web es como una casa</h2>
    <p>Toda página web está hecha con <strong>3 lenguajes</strong> (instrucciones para la computadora). No tienes que aprenderlos: Claude los escribe. Pero entenderlos te ayuda a <strong>pedir mejor</strong>.</p>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Lenguaje</th><th>En la casa es...</th><th>Sirve para...</th></tr>
      <tr><td>🧱 <strong>HTML</strong></td><td>Las <strong>paredes y las piezas</strong></td><td>La estructura: títulos, textos, imágenes, botones.</td></tr>
      <tr><td>🎨 <strong>CSS</strong></td><td>La <strong>pintura y los muebles</strong></td><td>Cómo se ve: colores, letras, tamaños, ordenar en columnas.</td></tr>
      <tr><td>⚡ <strong>JavaScript</strong></td><td>La <strong>electricidad</strong></td><td>Lo que se mueve o reacciona: menús que se abren, galerías, formularios.</td></tr>
    </table></div>
    <div class="caja bien"><span class="titulo-caja">✅ Ya los usaste</span>
    <p>¡Tus logos en SVG, tu herramienta de paletas y tu manual de marca estaban hechos con estos lenguajes! Este curso también.</p></div>
  </section>

  <section class="bloque">
    <h2>🧩 Las partes de una página</h2>
    ${muestras(
      muestra('Las partes de una página web', `<div class="m-web"><div class="w-enc"><span class="w-logo"></span><span class="w-menu"><i></i><i></i><i></i></span></div><div class="w-heroe"><b></b><s></s><u></u></div><div class="w-secciones"><span></span><span></span><span></span></div><div class="w-pie"></div></div>`)
    )}
    <p>Casi todas las páginas tienen estas partes, de arriba hacia abajo:</p>
    <ol>
      <li>🔝 <strong>Encabezado:</strong> el logo a la izquierda y el <strong>menú</strong> a la derecha.</li>
      <li>🦸 <strong>Portada</strong> (en inglés, "hero"): un título grande, una frase y un <strong>botón</strong> importante ("Comprar", "Escríbenos").</li>
      <li>🧱 <strong>Secciones:</strong> servicios o productos, galería de fotos, opiniones de clientes...</li>
      <li>📞 <strong>Contacto:</strong> cómo comunicarse (WhatsApp, correo, dirección, mapa).</li>
      <li>🔚 <strong>Pie de página:</strong> abajo de todo, con redes sociales y datos chiquitos.</li>
    </ol>
    <p>Saber estos nombres te sirve para pedir cambios: <em>"Agranda el título de la portada"</em> o <em>"Cambia el color del pie de página"</em>.</p>
  </section>

  <section class="bloque">
    <h2>🏗️ Tu primera página web</h2>
    <p>Vas a crear la página de la marca que hiciste en la lección 170 (o de un negocio inventado). Usa el mismo chat del manual de marca, así Claude ya sabe tus colores y letras.</p>
    ${pr('Crea una página web de una sola página para la marca [nombre], usando su manual de marca: sus colores, sus letras de Google Fonts y su tono de voz. Que tenga: encabezado con logo y menú, portada con un título grande y un botón para escribir por WhatsApp, una sección de productos o servicios con 3 tarjetas, una sección de opiniones de clientes, una sección de contacto y un pie de página. Que se vea bien en computadora y en teléfono, con letras grandes y botones fáciles de tocar. Antes de empezar, hazme las preguntas que necesites.')}
    <div class="caja info"><span class="titulo-caja">ℹ️ Las imágenes</span>
    <p>Por ahora, Claude va a poner <strong>espacios para imágenes</strong> o dibujos hechos con código. En la próxima lección vemos cómo poner tus fotos reales.</p></div>
  </section>

  <section class="bloque">
    <h2>🔁 Cambiar la página por partes</h2>
    <p>Como un director de arte: <strong>una parte a la vez</strong>. Ejemplos:</p>
    <ul>
      <li>🗣️ <em>"En la portada, haz el título más grande y deja más espacio arriba y abajo."</em></li>
      <li>🗣️ <em>"Las tarjetas de productos ponlas con las esquinas más redondeadas y una sombra suave."</em></li>
      <li>🗣️ <em>"Cambia el texto de la sección de opiniones por estos: [tus textos]."</em></li>
      <li>🗣️ <em>"Agrega un botón de WhatsApp que quede siempre abajo a la derecha."</em></li>
    </ul>
    <div class="caja truco"><span class="titulo-caja">💡 Muestra en vez de explicar</span>
    <p>¿No sabes cómo se llama esa parte? ${CAPTURA}, ${SUBE} y di: <em>"Esta parte de aquí, cámbiala así..."</em></p></div>
    <div class="caja info"><span class="titulo-caja">⏪ Las versiones</span>
    <p>Cada cambio crea una <strong>versión nueva</strong> del artefacto. Si algo se rompe, busca las <strong>flechitas o el menú de versiones</strong> del artefacto para volver a la anterior. O dile a Claude: <em>"Vuelve a la versión anterior."</em></p></div>
  </section>

  <section class="bloque">
    <h2>📱 Que se vea bien en el teléfono</h2>
    <p>La mayoría de la gente mira páginas web <strong>en el teléfono</strong>. Una página que se acomoda sola a la pantalla se llama <strong>"responsive"</strong> (se dice "ris-pón-siv").</p>
    <div class="solo-pc">
    <p>Para probarla en la computadora:</p>
    <div class="pasos"><ol>
      <li>Abre el artefacto en <strong>pantalla completa</strong> (busca el botón de agrandar).</li>
      <li>Aprieta <kbd>⊞ Windows</kbd> + <kbd>←</kbd>: la ventana se achica a la mitad de la pantalla.</li>
      <li>Mira si todo se ve bien y se acomoda. Si algo se ve mal, sácale una captura y muéstrasela a Claude.</li>
    </ol></div>
    </div>
    <p class="solo-movil">¡Estás en el teléfono! Abre tu artefacto aquí mismo y revisa si todo se lee bien y si los botones se tocan fácil.</p>
    <p>Y puedes pedírselo directo: <em>"Revisa que la página se vea bien en un teléfono chico y arregla lo que haga falta."</em></p>
  </section>

  <section class="bloque">
    <h2>♿ Una página para todos</h2>
    <p>Una buena página la puede usar <strong>todo el mundo</strong>: personas que ven poco, que usan una sola mano, que usan lectores de pantalla o que son mayores. Esto se llama <strong>accesibilidad</strong>. Tú sabes mejor que nadie lo importante que es. 💪</p>
    <ul>
      <li>👓 Buen <strong>contraste</strong> y <strong>letras grandes</strong>.</li>
      <li>👆 <strong>Botones grandes</strong> y separados.</li>
      <li>🖼️ Cada imagen con un <strong>texto alternativo</strong>: una descripción para quien no la puede ver.</li>
      <li>📑 Títulos ordenados y textos claros.</li>
    </ul>
    ${pr('Revisa la accesibilidad de mi página web: contraste de colores, tamaño de letras, tamaño de los botones, textos alternativos de las imágenes y orden de los títulos. Hazme una lista corta de lo que está mal y después arréglalo todo.')}
  </section>

  <section class="bloque">
    <h2>👀 Mirar el código, sin miedo</h2>
    <p>En el artefacto hay una pestaña o botón que dice <strong>"Código"</strong>. Ábrelo para mirar. ¡No vas a romper nada por mirar!</p>
    <p>Si te da curiosidad, pregúntale a Claude:</p>
    ${pr('Explícame en palabras muy sencillas cómo está hecha mi página web. Muéstrame un pedacito chico del HTML y un pedacito chico del CSS, y dime qué hace cada línea, como si yo tuviera 12 años.')}
  </section>

  ${videos(
    yt('qué es HTML CSS y JavaScript explicado fácil', 'HTML, CSS y JavaScript explicados fácil'),
    yt('partes de una página web header hero footer', 'Las partes de una página web'),
    yt('qué es diseño web responsive explicado', '¿Qué es una página responsive?'),
    yt('accesibilidad web explicada fácil', 'Accesibilidad web'),
    yt('crear página web con Claude artifacts', 'Crear una página web con Claude')
  )}
  `,
  mision: [
    'Puedo explicar HTML, CSS y JavaScript con el ejemplo de la casa',
    'Claude creó la página web de mi marca',
    'Le pedí cambios a 3 partes distintas de la página',
    'Revisé cómo se ve la página en tamaño de teléfono',
    'Le pedí a Claude que revisara y arreglara la accesibilidad',
  ],
},

/* ---------------------------------------------------------- 9 */
{
  emoji: '🚀', nivel: 190, etapa: '🌐 Páginas web', minutos: 50,
  titulo: 'Tu portafolio web, publicado en internet',
  aprenderas: [
    'Qué lleva un buen portafolio de diseñador',
    'Crear tu portafolio con Claude, con tus trabajos',
    'Publicarlo gratis y compartir el link',
  ],
  html: `
  <section class="bloque">
    <h2>💼 ¿Qué es un portafolio?</h2>
    <p>Un <strong>portafolio</strong> es una página donde muestras <strong>tus mejores trabajos</strong>. Es lo primero que mira un cliente o una empresa antes de darte trabajo.</p>
    <div class="caja bien"><span class="titulo-caja">✅ Calidad, no cantidad</span>
    <p>Es mejor mostrar <strong>6 trabajos muy buenos</strong> que 30 regulares. Elige los que más te enorgullecen. Revisa <a href="#/trabajos">🗂️ Mis trabajos</a> para recordar todo lo que hiciste.</p></div>
  </section>

  <section class="bloque">
    <h2>📋 Qué lleva tu portafolio</h2>
    <ul>
      <li>👋 <strong>Presentación:</strong> tu nombre, qué haces, en una frase. Puede ir una foto tuya o un dibujo que te represente.</li>
      <li>🖼️ <strong>Trabajos:</strong> cada uno con una imagen, un título y 2 o 3 frases: qué te pidieron, qué hiciste y qué herramientas usaste.</li>
      <li>🙋 <strong>Sobre mí:</strong> un poquito de tu historia y lo que te gusta.</li>
      <li>📬 <strong>Contacto:</strong> un correo o tu Instagram de diseño.</li>
    </ul>
    <div class="caja ojo"><span class="titulo-caja">🔒 Cuida tus datos</span>
    <p>Tu portafolio lo puede ver <strong>cualquier persona</strong> en internet. No pongas tu dirección, tu número de documento ni datos privados. Para el contacto, mejor un <strong>correo</strong> que tu teléfono personal.</p></div>
  </section>

  <section class="bloque">
    <h2>✍️ Los textos: Claude te entrevista</h2>
    ${pr('Quiero escribir los textos de mi portafolio de diseño gráfico. Hazme una entrevista, una pregunta a la vez: quién soy, qué me gusta diseñar, cómo aprendí y qué trabajos hice. Al final, escribe: una frase de presentación, un texto corto "sobre mí" (máximo 5 frases, cercano y positivo) y una descripción de 3 frases para cada trabajo.')}
  </section>

  <section class="bloque">
    <h2>🏗️ Construir el portafolio</h2>
    ${pr('Crea mi portafolio web de diseñador gráfico en una sola página, con los textos que escribimos. Que tenga: encabezado con mi nombre, presentación grande, una galería con mis trabajos en tarjetas (cada tarjeta con imagen, título y descripción, y que al tocarla se vea más grande), sección sobre mí y contacto. Diseño moderno, con mucho espacio en blanco, buen contraste, letras grandes, y que se vea bien en el teléfono. Para las imágenes, deja espacios con el nombre de cada trabajo; los logos que hicimos en SVG ponlos directamente.')}
    <p>Después personalízalo con tu estilo: <em>"Usa mis colores favoritos"</em>, <em>"Haz la galería en 2 columnas"</em>, <em>"Agrega una animación suave al bajar"</em>.</p>
  </section>

  <section class="bloque">
    <h2>🖼️ Poner tus imágenes reales</h2>
    <p>Las imágenes que subes al chat de Claude <strong>no se quedan</strong> dentro del artefacto. Para poner tus fotos reales hay que hacer una <strong>carpeta</strong>. Este paso es bueno hacerlo <strong>con tu acompañante</strong>:</p>
    <div class="pasos"><ol>
      <li>Crea una carpeta llamada <strong>mi-portafolio</strong>.</li>
      <li>Guarda ahí tus imágenes con nombres simples, sin espacios ni tildes: <strong>trabajo1.png</strong>, <strong>trabajo2.png</strong>...</li>
      <li>Pídele a Claude: <em>"Cambia los espacios de las imágenes por estos archivos: trabajo1.png es [nombre del trabajo], trabajo2.png es..."</em></li>
      <li><strong>Descarga</strong> el código del artefacto y guárdalo en la misma carpeta con el nombre <strong>index.html</strong>.</li>
      <li>Haz doble clic en <strong>index.html</strong>: ¡tu portafolio se abre en el navegador con tus imágenes!</li>
    </ol></div>
  </section>

  <section class="bloque">
    <h2>🌍 Publicarlo en internet (gratis)</h2>
    <p>Hay varias formas. Elige la que te acomode:</p>
    <h3>🥇 Opción 1: Publicar desde Claude (la más fácil)</h3>
    <p>Arriba del artefacto busca el botón <strong>"Publicar"</strong> (o "Compartir"). Claude te da un <strong>link</strong> que cualquiera puede abrir. Puedes despublicarlo cuando quieras. Esta opción no lleva tus fotos reales, pero sí todo lo que hizo Claude.</p>
    <h3>🥈 Opción 2: Netlify Drop (con tus imágenes)</h3>
    <div class="pasos"><ol>
      <li>Entra a <strong>app.netlify.com/drop</strong> (está en los enlaces de abajo) ${dos('', '<strong>desde la computadora</strong>')}.</li>
      <li><strong>Arrastra la carpeta</strong> mi-portafolio a la página.</li>
      <li>¡Listo! Te da un link. <strong>Crea una cuenta gratis</strong> (con Google) para que tu página no se borre.</li>
    </ol></div>
    <h3>🥉 Opción 3: GitHub Pages (con ayuda)</h3>
    <p>Es la forma en que está publicado <strong>este mismo curso</strong>. Es gratis y muy estable, pero tiene más pasos. Hazlo con tu acompañante, o pídele a Claude que los guíe paso a paso.</p>
    <div class="caja info"><p>Los botones y los nombres pueden cambiar. Si te pierdes: <em>"¿Cómo publico gratis una página web que tengo en una carpeta? Explícame paso a paso para principiantes."</em></p></div>
  </section>

  <section class="bloque">
    <h2>📤 Compartir tu link</h2>
    <ul>
      <li>💬 Mándalo por <strong>WhatsApp</strong> a tu familia y amigos. ¡Que vean lo que hiciste!</li>
      <li>📸 Ponlo en la <strong>biografía de tu Instagram</strong>.</li>
      <li>🔳 Crea un <strong>código QR</strong> (Canva tiene una herramienta gratis llamada "Código QR") para ponerlo en tu tarjeta de presentación.</li>
    </ul>
    <div class="caja truco"><span class="titulo-caja">💡 Ábrelo en el teléfono</span>
    <p>Siempre revisa tu página publicada <strong>en un teléfono</strong>. Si algo se ve raro, captura y a Claude. 😉</p></div>
  </section>

  <section class="bloque">
    <h2>🔄 Un portafolio vivo</h2>
    <p>Tu portafolio <strong>crece contigo</strong>. Cada vez que hagas un trabajo nuevo que te guste, agrégalo. Cada tanto, saca los más viejos o los que ya no te representan.</p>
  </section>

  ${videos(
    yt('cómo hacer un portafolio de diseño gráfico principiante', 'Cómo hacer un portafolio de diseño'),
    yt('qué poner en un portafolio de diseñador gráfico', 'Qué poner en tu portafolio'),
    yt('Netlify Drop publicar página web gratis arrastrar carpeta', 'Publicar gratis con Netlify Drop'),
    yt('publicar artefacto de Claude link compartir', 'Publicar un artefacto de Claude'),
    web('https://app.netlify.com/drop', 'Netlify Drop (publicar arrastrando una carpeta)')
  )}
  `,
  mision: [
    'Elegí mis mejores trabajos para el portafolio',
    'Claude me entrevistó y escribió mis textos',
    'Claude construyó mi portafolio',
    'Publiqué mi portafolio y tengo un link',
    '¡Compartí el link con alguien!',
  ],
},

/* ---------------------------------------------------------- 10 */
{
  emoji: '🎓', nivel: 200, etapa: '🏆 Proyecto final', minutos: 60,
  titulo: 'Proyecto final y diploma',
  aprenderas: [
    'Hacer un proyecto real de principio a fin',
    'Revisar tu propio trabajo como un profesional',
    'Qué viene en el curso avanzado',
  ],
  html: `
  <section class="bloque">
    <h2>🏆 Tu proyecto final</h2>
    <p>¡Llegaste al final! Ahora vas a juntar <strong>todo lo que aprendiste</strong> en un solo proyecto, para un <strong>cliente real</strong>: alguien de tu familia, un amigo o un negocio cercano.</p>
    <p>Vas a entregar:</p>
    <ul>
      <li>📘 La <strong>identidad de marca</strong>: logo, colores, letras y tono, en un manual.</li>
      <li>📱 <strong>3 publicaciones</strong> para redes sociales, de la misma familia.</li>
      <li>🌐 Una <strong>página web publicada</strong>, con su link.</li>
    </ul>
    <div class="caja truco"><span class="titulo-caja">💡 Sin apuro</span>
    <p>Este proyecto puede tomar <strong>2 a 4 semanas</strong>. Haz un pasito por día. Lo importante es terminarlo.</p></div>
  </section>

  <section class="bloque">
    <h2>✅ Tu plan, paso a paso</h2>
    <p>Marca cada paso cuando lo termines. Se guarda solo.</p>
    <ul class="checklist" data-clave="proyecto-final">
      <li><label><input type="checkbox"><span>Elegí a mi cliente y le conté que voy a hacer su marca.</span></label></li>
      <li><label><input type="checkbox"><span>Hice el brief (con Claude haciendo de entrevistador).</span></label></li>
      <li><label><input type="checkbox"><span>Hice el tablero de inspiración.</span></label></li>
      <li><label><input type="checkbox"><span>Hice el logo y sus versiones.</span></label></li>
      <li><label><input type="checkbox"><span>Elegí la paleta y revisé el contraste.</span></label></li>
      <li><label><input type="checkbox"><span>Elegí las 2 letras.</span></label></li>
      <li><label><input type="checkbox"><span>Claude armó el manual de marca.</span></label></li>
      <li><label><input type="checkbox"><span>Hice 3 publicaciones en Canva.</span></label></li>
      <li><label><input type="checkbox"><span>Creé la página web y revisé la accesibilidad.</span></label></li>
      <li><label><input type="checkbox"><span>Publiqué la página y la revisé en el teléfono.</span></label></li>
      <li><label><input type="checkbox"><span>Le presenté todo a mi cliente.</span></label></li>
      <li><label><input type="checkbox"><span>Agregué el proyecto a mi portafolio.</span></label></li>
    </ul>
    ${pr('Vas a ser mi jefe de proyecto. Voy a hacer la identidad de marca, 3 publicaciones y la página web para un cliente real: [cuéntale de tu cliente]. Arma un plan de 3 semanas, con una tarea pequeña por día (de máximo 30 minutos). Dame solo la tarea de hoy, y cuando te diga "listo", me das la siguiente.')}
  </section>

  <section class="bloque">
    <h2>🧐 Revisa tu trabajo como profesional</h2>
    <p>Antes de entregar, revisa esta lista. Si algo falta, ¡todavía estás a tiempo!</p>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Pregunta</th><th>Lección</th></tr>
      <tr><td>¿Se cumplen las 4 reglas: contraste, alineación, repetición y proximidad?</td><td>110</td></tr>
      <tr><td>¿Se entiende qué es lo más importante (jerarquía)? ¿Hay espacio en blanco?</td><td>110</td></tr>
      <tr><td>¿Los colores siguen la regla 60-30-10? ¿Los textos se leen bien?</td><td>120</td></tr>
      <tr><td>¿Usé máximo 2 letras?</td><td>130</td></tr>
      <tr><td>¿El logo funciona chiquitito y en blanco y negro?</td><td>140</td></tr>
      <tr><td>¿Las publicaciones parecen de la misma familia?</td><td>160</td></tr>
      <tr><td>¿La página se ve bien en el teléfono y es accesible?</td><td>180</td></tr>
    </table></div>
    ${pr('Te muestro mi proyecto final. Revísalo como si fueras el profesor que me pone la nota, usando esta lista: las 4 reglas de oro, jerarquía, espacio en blanco, colores y contraste, máximo 2 letras, el logo en tamaño chico y en blanco y negro, coherencia entre las piezas, y si la página web se ve bien en el teléfono y es accesible. Sé honesto pero amable, y dime las 3 mejoras más importantes.')}
  </section>

  <section class="bloque">
    <h2>🔭 Lo que viene: el curso avanzado</h2>
    <p>Cuando termines, estarás listo para el <strong>nivel avanzado</strong> (del 200 al 300). Ahí veremos cosas como:</p>
    <ul>
      <li>🎨 <strong>Claude Design</strong>: diseñar prototipos y presentaciones conversando.</li>
      <li>👨‍💻 <strong>Claude Code</strong>: crear páginas web completas, con varias páginas y archivos de verdad.</li>
      <li>🖌️ <strong>Figma</strong>: la herramienta que usan los diseñadores profesionales de páginas y apps.</li>
      <li>🌐 Tener tu <strong>propio dominio</strong> (como www.tunombre.com).</li>
      <li>🎞️ <strong>Animaciones</strong> y videos cortos.</li>
      <li>💰 Cómo <strong>cobrar</strong> por tus trabajos y conseguir clientes.</li>
    </ul>
    <div class="caja info"><p>Algunas de estas herramientas necesitan un <strong>plan de pago</strong>. El curso avanzado te va a decir cuáles y cómo probarlas.</p></div>
  </section>

  <section class="bloque">
    <h2>📅 Desafío de 30 días: diseño y web</h2>
    <p>Un mini-reto por día para seguir practicando. ¡Elige los que quieras!</p>
    <ol>
      <li>Busca un cartel en la calle y revísalo con las 4 reglas.</li>
      <li>Saca una paleta de colores de tu desayuno.</li>
      <li>Rediseña el cartel de la lección 110 con otros colores.</li>
      <li>Escribe tu nombre con 5 letras distintas y elige la que más te representa.</li>
      <li>Haz un logo para un negocio inventado en 15 minutos.</li>
      <li>Haz ese logo en blanco y negro. ¿Sigue funcionando?</li>
      <li>Crea una imagen en estilo acuarela.</li>
      <li>Crea la misma imagen en estilo 3D.</li>
      <li>Quítale el fondo a una foto.</li>
      <li>Haz una historia de Instagram para un cumpleaños.</li>
      <li>Haz un cartel para una fiesta del barrio.</li>
      <li>Pídele a Claude un cliente imaginario nuevo.</li>
      <li>Haz el tablero de inspiración de ese cliente.</li>
      <li>Haz su paleta y elige sus letras.</li>
      <li>Haz su logo.</li>
      <li>Haz su tarjeta de presentación.</li>
      <li>Escribe el tono de voz de tu marca favorita.</li>
      <li>Analiza con Claude la página web de una marca que te guste.</li>
      <li>Haz una página web de una receta de cocina.</li>
      <li>Agrégale una galería de fotos.</li>
      <li>Revisa su accesibilidad con Claude.</li>
      <li>Haz un set de 6 íconos de la misma familia.</li>
      <li>Haz una tarjeta de invitación como página web.</li>
      <li>Pídele a Claude que te explique un término de diseño nuevo.</li>
      <li>Mira un video de diseño de los enlaces del curso.</li>
      <li>Agrega un trabajo nuevo a tu portafolio.</li>
      <li>Rediseña algo que hiciste el día 5.</li>
      <li>Hazte un quiz con Claude (en el modo voz si estás en el teléfono).</li>
      <li>Enséñale a alguien las 4 reglas de oro.</li>
      <li>¡Comparte tu portafolio y celebra! 🎉</li>
    </ol>
    ${pr('Hazme un quiz de 10 preguntas sobre diseño gráfico y páginas web: las 4 reglas de oro, jerarquía, colores, contraste, letras, logos, imágenes con IA, tamaños para redes sociales, partes de una página web y accesibilidad. Una pregunta a la vez, con opciones A, B y C. Espera mi respuesta antes de seguir, y explícame si me equivoco.')}
  </section>

  ${videos(
    yt('cómo conseguir tu primer cliente de diseño gráfico', 'Tu primer cliente de diseño'),
    yt('portafolio de diseño gráfico ejemplos inspiración', 'Ejemplos de portafolios para inspirarte'),
    yt('Claude Design tutorial español', 'Claude Design (para el curso avanzado)'),
    yt('Figma para principiantes español', 'Figma para principiantes (para el curso avanzado)')
  )}

  <section class="bloque zona-diploma">
    <h2>🎓 ¡Tu diploma!</h2>
    <p>${dos('Haz clic', 'Toca')} el cuadro, ${DICTA} y <strong>dicta tu nombre</strong>.</p>
    <input class="buscador no-imprimir" id="nombre-diploma" type="text" placeholder="Tu nombre aquí 🎙️" aria-label="Tu nombre para el diploma">
    <div class="diploma" id="diploma">
      <div class="sello">🏅</div>
      <p><strong>DIPLOMA · NIVEL INTERMEDIO</strong></p>
      <p>Este diploma se entrega con orgullo a</p>
      <div class="nombre" id="diploma-nombre">&nbsp;</div>
      <p>por completar el curso<br><strong>"Diseño y Web con IA: de nivel 100 a nivel 200"</strong></p>
      <p>creando logos, marcas, imágenes y páginas web con su voz, su ojo de diseñador y su creatividad. 🎨🌐</p>
      <p class="fecha" id="diploma-fecha"></p>
    </div>
    <button class="boton no-imprimir" id="imprimir-diploma">🖨️ Imprimir o guardar diploma</button>
    <p class="solo-movil no-imprimir" style="margin-top:.8rem">📱 En el teléfono, elige <strong>"Guardar como PDF"</strong> para guardarlo, o <strong>"Compartir"</strong> para mandarlo por WhatsApp.</p>
  </section>
  `,
  mision: [
    'Elegí a mi cliente real para el proyecto final',
    'Terminé el plan del proyecto final',
    'Revisé mi trabajo con la lista del profesional',
    'Hice el quiz final con Claude',
    '¡Dicté mi nombre en el diploma!',
  ],
},
];
