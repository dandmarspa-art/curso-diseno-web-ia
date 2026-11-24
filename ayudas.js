/* =========================================================
   AYUDAS DEL CURSO: diccionario, frases listas, herramientas gratis,
   mis trabajos y guía del acompañante.
   Para cambiar un texto, edita este archivo y guarda.
   ========================================================= */
(function () {

/* =========================================================
   DICCIONARIO
   ========================================================= */
window.CURSO.diccionario = [
  ['Accesibilidad', 'Que una página o un diseño lo pueda usar todo el mundo: personas que ven poco, que usan una mano, que usan lectores de pantalla o que son mayores.'],
  ['Alineación', 'Ordenar las cosas sobre líneas invisibles, para que nada quede "tirado". Una de las 4 reglas de oro.'],
  ['Aplicaciones de marca', 'Los lugares donde aparece una marca: tarjetas, letreros, bolsas, redes sociales, página web.'],
  ['Artefacto', 'Algo que Claude construye en una ventana al lado del chat: una página, un logo, una herramienta.'],
  ['Boceto', 'Una primera idea, rápida y sin detalles. Se hacen muchos bocetos antes de elegir uno.'],
  ['Brief', 'Se dice "brif". El encargo de un cliente: qué necesita, para quién, cómo quiere que se sienta.'],
  ['Canva', 'Página y app gratis para diseñar publicaciones, carteles y presentaciones con plantillas.'],
  ['Código de color (hex)', 'Un código como #2F8F5B que dice exactamente qué color es. Sirve para usar el mismo color en cualquier programa.'],
  ['Colores cálidos y fríos', 'Cálidos: rojos, naranjas y amarillos (energía). Fríos: azules, verdes y morados (calma).'],
  ['Complementarios', 'Colores opuestos en la rueda de colores, como azul y naranja. Juntos llaman mucho la atención.'],
  ['Análogos', 'Colores vecinos en la rueda de colores, como verde y azul. Juntos se ven tranquilos y armoniosos.'],
  ['Contraste', 'La diferencia entre dos cosas: grande y chico, oscuro y claro. En los textos, la diferencia entre el color de la letra y el del fondo.'],
  ['CSS', 'El lenguaje que dice cómo se ve una página web: colores, letras, tamaños. En la casa, la pintura y los muebles.'],
  ['Director de arte', 'La persona que decide cómo se ve un diseño. Pide, mira y corrige.'],
  ['Dominio', 'El nombre de una página en internet, como www.tunombre.com. Normalmente se paga cada año.'],
  ['Emblema', 'Un logo donde el nombre va dentro de una forma, como un sello o un escudo.'],
  ['Encabezado', 'La parte de arriba de una página web, con el logo y el menú.'],
  ['Espacio en blanco', 'El espacio vacío alrededor de las cosas en un diseño. Hace que todo se vea ordenado y elegante.'],
  ['Google Fonts', 'Una página con cientos de tipos de letra gratis.'],
  ['HTML', 'El lenguaje con la estructura de una página web: títulos, textos, imágenes, botones. En la casa, las paredes.'],
  ['Ícono', 'Un dibujo pequeño y simple que representa algo, como un teléfono o un carrito.'],
  ['Identidad de marca', 'Todo lo que hace reconocible a una marca: logo, colores, letras, imágenes, tono de voz.'],
  ['Interlineado', 'El espacio entre una línea de texto y la siguiente.'],
  ['JavaScript', 'El lenguaje que hace que las cosas se muevan o reaccionen en una página web. En la casa, la electricidad.'],
  ['Jerarquía', 'El orden en que los ojos leen un diseño: primero lo más importante.'],
  ['Link (enlace)', 'Una dirección de internet que se puede tocar para abrir una página.'],
  ['Logotipo', 'Un logo hecho solo con letras, con el nombre de la marca.'],
  ['Manual de marca', 'Un documento con todas las reglas para usar bien una marca: logo, colores, letras, tono.'],
  ['Moodboard (tablero de inspiración)', 'Se dice "mud-bord". Una colección de imágenes, colores y letras que muestran cómo se va a sentir una marca.'],
  ['Paleta de colores', 'Un grupo de colores que combinan bien y se usan juntos en un diseño.'],
  ['Photopea', 'Un editor de imágenes gratis que funciona en el navegador, parecido a Photoshop.'],
  ['Píxel', 'Cada puntito de color que forma una imagen en la pantalla. Los tamaños de pantalla se miden en píxeles.'],
  ['Pie de página', 'La parte de abajo de todo en una página web, con redes sociales y datos chiquitos.'],
  ['PNG', 'Un tipo de archivo de imagen. Funciona en todas partes y puede tener fondo transparente.'],
  ['Portada (hero)', 'La primera parte grande de una página web, con un título y un botón importante.'],
  ['Portafolio', 'Una página donde muestras tus mejores trabajos.'],
  ['Proximidad', 'Poner cerca lo que va junto, y separar lo que no. Una de las 4 reglas de oro.'],
  ['Publicar', 'Poner una página en internet para que cualquiera la vea con un link.'],
  ['Regla 60-30-10', 'Una forma de repartir los colores: 60 % el principal, 30 % el secundario y 10 % el de acento.'],
  ['Regla de los tercios', 'Dividir un diseño en 9 cuadros y poner lo importante donde se cruzan las líneas.'],
  ['Repetición', 'Repetir los mismos colores, letras y formas para que todo parezca de la misma familia. Una de las 4 reglas de oro.'],
  ['Responsive', 'Se dice "ris-pón-siv". Una página que se acomoda sola al tamaño de la pantalla: computadora, tableta o teléfono.'],
  ['Rueda de colores', 'Los colores ordenados en un círculo, como un arcoíris doblado. Sirve para encontrar combinaciones.'],
  ['Serifa', 'Las "patitas" en las puntas de algunas letras. Las letras con serifa se ven clásicas; las sin serifa, modernas.'],
  ['SVG', 'Un tipo de imagen hecha con formas. Se puede agrandar sin que se vea borrosa. Ideal para logos e íconos.'],
  ['Texto alternativo', 'Una descripción de una imagen, para las personas que no la pueden ver (la lee el lector de pantalla).'],
  ['Tipografía', 'El tipo de letra y cómo se usa en un diseño.'],
  ['Tono de voz', 'La forma en que habla y escribe una marca: seria, divertida, cercana...'],
];

/* =========================================================
   FRASES LISTAS (biblioteca de prompts)
   ========================================================= */
window.CURSO.frases = [
  { grupo: '👋 Para empezar un chat', lista: [
    'Hola Claude. Uso el dictado por voz, así que si ves errores, adivina lo que quise decir. Estoy aprendiendo diseño gráfico y páginas web en un nivel intermedio. Explícame con palabras sencillas y un paso a la vez.',
    'Antes de empezar, hazme las preguntas que necesites para hacerlo bien. Una pregunta a la vez.',
    'Dame solo el primer paso y espera a que yo te diga "listo".',
  ]},
  { grupo: '🧐 Para revisar un diseño', lista: [
    'Revisa este diseño como un profesor amable, usando las 4 reglas: contraste, alineación, repetición y proximidad. Dime 3 cosas que están bien y 3 cosas concretas para mejorar.',
    '¿Qué se lee primero, segundo y tercero en este diseño? ¿Es el orden correcto para el mensaje?',
    'Revisa el contraste de estos dos colores: letra [código] sobre fondo [código]. ¿Se lee bien? Si no, propónme otro color parecido.',
  ]},
  { grupo: '🎨 Para diseñar', lista: [
    'Crea una paleta de 5 colores para [tipo de marca] que transmita [3 palabras]. Muéstrala como artefacto con la regla 60-30-10 y los códigos de cada color.',
    'Recomiéndame 3 combinaciones de 2 letras de Google Fonts para [tipo de diseño]. Muéstralas como artefacto con un ejemplo real.',
    'Hazme una entrevista para preparar el brief de un logo. Una pregunta a la vez.',
    'Crea 6 propuestas de logo en SVG para [nombre], numeradas, en una cuadrícula. Muéstralas también en blanco y negro y en tamaño chiquito.',
    'Hazme 3 variaciones del logo número [número]: una más simple, una más redondeada y una con letras más gruesas.',
    'Crea un set de 8 íconos en SVG del mismo estilo para [tema], con los colores de mi marca.',
  ]},
  { grupo: '🖼️ Para imágenes', lista: [
    'Escríbeme 3 descripciones detalladas para un generador de imágenes de [tu idea]. Usa la receta: qué, dónde, estilo, colores, luz, encuadre y formato.',
    'Esta imagen la hizo una IA. ¿Qué le falta para usarla en [para qué]? Mejora la descripción para la próxima vez.',
    'Guíame paso a paso en Photopea para [lo que quiero hacer]. Un paso a la vez, diciéndome dónde está cada botón.',
  ]},
  { grupo: '📱 Para redes sociales', lista: [
    'Planea conmigo un post de Instagram para [marca]: un título corto, un texto de apoyo, cómo ordenar las cosas y qué imagen usar.',
    'Escríbeme los textos para 3 publicaciones de [marca]: título para la imagen, descripción corta y 5 hashtags.',
    'Dame ideas para 9 publicaciones de [marca] para este mes, que se vean como una serie.',
  ]},
  { grupo: '🌐 Para páginas web', lista: [
    'Crea una página web de una sola página para [marca], con encabezado, portada con botón, 3 tarjetas de servicios, opiniones, contacto y pie de página. Que se vea bien en el teléfono y tenga letras grandes.',
    'En la portada, haz el título más grande y deja más espacio arriba y abajo.',
    'Agrega un botón de WhatsApp que quede siempre abajo a la derecha.',
    'Revisa que la página se vea bien en un teléfono chico y arregla lo que haga falta.',
    'Revisa la accesibilidad de mi página: contraste, tamaño de letras y botones, textos alternativos y orden de los títulos. Después arréglalo.',
    'Eso no funcionó. Vuelve a la versión anterior.',
  ]},
  { grupo: '🎤 Para clientes', lista: [
    'Invéntame un cliente imaginario con un encargo de diseño, y después responde mis preguntas como si fueras ese cliente.',
    'Tú eres mi cliente. Escucha cómo te presento mi diseño, hazme 2 preguntas difíciles pero amables, y al final dame consejos.',
    'Ayúdame a escribir un mensaje amable para mandarle a mi cliente el diseño terminado por WhatsApp.',
  ]},
];

/* =========================================================
   HERRAMIENTAS GRATIS
   ========================================================= */
window.CURSO.herramientas = [
  { grupo: '🧡 Inteligencia artificial', lista: [
    ['https://claude.ai', 'Claude', 'Tu compañero de diseño: ideas, logos, paletas, páginas web.'],
    ['https://chatgpt.com', 'ChatGPT', 'Otra IA. Su "Canvas" es parecido a los artefactos.'],
    ['https://gemini.google.com', 'Gemini', 'La IA de Google. También crea y edita imágenes.'],
  ]},
  { grupo: '🌈 Colores y letras', lista: [
    ['https://coolors.co', 'Coolors', 'Crear paletas con la barra espaciadora.'],
    ['https://color.adobe.com/es/create/color-wheel', 'Adobe Color', 'La rueda de colores y sus combinaciones.'],
    ['https://webaim.org/resources/contrastchecker/', 'WebAIM Contrast Checker', 'Revisar si un texto se puede leer bien.'],
    ['https://fonts.google.com', 'Google Fonts', 'Cientos de letras gratis.'],
  ]},
  { grupo: '🖼️ Imágenes', lista: [
    ['https://designer.microsoft.com', 'Microsoft Designer', 'Crear imágenes con IA.'],
    ['https://ideogram.ai', 'Ideogram', 'Imágenes con texto escrito adentro.'],
    ['https://new.express.adobe.com', 'Adobe Express', 'Diseños, imágenes con IA y quitar fondos.'],
    ['https://www.remove.bg/es', 'remove.bg', 'Quitar el fondo de una foto en un segundo.'],
    ['https://www.photopea.com', 'Photopea', 'Editor de imágenes gratis, como Photoshop.'],
    ['https://inkscape.org/es/', 'Inkscape', 'Programa gratis para editar logos en SVG (computadora).'],
  ]},
  { grupo: '📱 Diseño e inspiración', lista: [
    ['https://www.canva.com', 'Canva', 'Publicaciones, carteles, presentaciones y códigos QR.'],
    ['https://es.pinterest.com', 'Pinterest', 'Tableros de inspiración.'],
  ]},
  { grupo: '🌐 Publicar páginas web', lista: [
    ['https://app.netlify.com/drop', 'Netlify Drop', 'Publicar una carpeta arrastrándola.'],
    ['https://pages.github.com', 'GitHub Pages', 'Publicar gratis (con ayuda). Así está publicado este curso.'],
  ]},
];

/* =========================================================
   MIS TRABAJOS (lo que se va creando en el curso)
   ========================================================= */
window.CURSO.trabajos = [
  { leccion: 1, ico: '🕵️', nombre: 'Revisión de un diseño con las 4 reglas' },
  { leccion: 2, ico: '🌈', nombre: 'Mi paleta de colores' },
  { leccion: 2, ico: '🧪', nombre: 'Mi herramienta de paletas' },
  { leccion: 3, ico: '🔤', nombre: 'Mi combinación de 2 letras' },
  { leccion: 4, ico: '⭐', nombre: 'Mi logo, con sus versiones' },
  { leccion: 4, ico: '✨', nombre: 'Mi set de íconos' },
  { leccion: 5, ico: '🖼️', nombre: 'Una imagen creada con IA' },
  { leccion: 5, ico: '✂️', nombre: 'Una imagen editada (sin fondo o recortada)' },
  { leccion: 6, ico: '📱', nombre: 'Una serie de 3 publicaciones en Canva' },
  { leccion: 7, ico: '🖼️', nombre: 'Un tablero de inspiración' },
  { leccion: 7, ico: '📘', nombre: 'Un manual de marca completo' },
  { leccion: 8, ico: '🌐', nombre: 'La página web de una marca' },
  { leccion: 9, ico: '💼', nombre: 'Mi portafolio publicado' },
  { leccion: 10, ico: '🏆', nombre: 'Mi proyecto final para un cliente real' },
];

/* =========================================================
   GUÍA PARA EL ACOMPAÑANTE
   ========================================================= */
window.CURSO.guia = `
  <section class="bloque">
    <h2>🤝 Hola otra vez, acompañante</h2>
    <p>Este es el <strong>segundo curso</strong>, de nivel intermedio. Sigue al curso 1 ("Aprende IA con Claude") y supone que el estudiante ya sabe dictar con la voz, conversar con Claude, usar artefactos y crear proyectos.</p>
    <p>Aquí el foco está en <strong>diseño gráfico</strong> y <strong>páginas web</strong>. Todo se puede hacer con <strong>planes gratis</strong>.</p>
  </section>

  <section class="bloque">
    <h2>🔧 Antes de empezar (checklist)</h2>
    <ul class="checklist" data-clave="guia-preparacion">
      <li><label><input type="checkbox"><span>Repasar que el <strong>dictado por voz</strong> (<kbd>⊞ Windows</kbd> + <kbd>H</kbd> o el micrófono del teclado) siga funcionando bien.</span></label></li>
      <li><label><input type="checkbox"><span>Entrar a <strong>Canva</strong> con la cuenta de Google, en la computadora y en la app del teléfono.</span></label></li>
      <li><label><input type="checkbox"><span>Tener una <strong>cuenta Microsoft</strong> (para Microsoft Designer) y probar crear una imagen.</span></label></li>
      <li><label><input type="checkbox"><span>Practicar juntos la <strong>captura de pantalla</strong> y pegarla en Claude. Se usa todo el curso.</span></label></li>
      <li><label><input type="checkbox"><span>Activar <strong>Teclas especiales</strong> (Shift 5 veces) si las combinaciones le cuestan. En la lección 160 hay atajos de Canva.</span></label></li>
      <li><label><input type="checkbox"><span>Crear en el escritorio una carpeta <strong>"Mis diseños"</strong> para guardar todo lo que descargue.</span></label></li>
      <li><label><input type="checkbox"><span>Opcional: cuenta en <strong>Pinterest</strong> (lección 170) y en <strong>Netlify</strong> (lección 190), ambas con Google.</span></label></li>
      <li><label><input type="checkbox"><span>Pensar juntos en un <strong>cliente real</strong> para el proyecto final (un familiar, un amigo, un negocio cercano).</span></label></li>
    </ul>
  </section>

  <section class="bloque">
    <h2>🧭 Cómo acompañar este curso</h2>
    <ul>
      <li>🎨 <strong>Ahora él crea cosas de verdad.</strong> Mira sus trabajos con interés y pregúntale <em>por qué</em> eligió cada cosa: así entrena su ojo.</li>
      <li>🖐️ <strong>Deja que lo haga él</strong>, aunque tarde más. Si se traba, que le mande una captura a Claude antes de que intervengas.</li>
      <li>🧐 <strong>Critica con cariño.</strong> Usen el lenguaje del curso: "¿hay contraste?", "¿está alineado?". Es más fácil aceptar una crítica cuando es sobre una regla y no sobre gustos.</li>
      <li>⏱️ <strong>Sesiones de 30 a 45 minutos.</strong> Las lecciones 140, 170 y 190 son largas: divídanlas en 2 o 3 días.</li>
      <li>📁 <strong>Ayuda con los archivos.</strong> Descargar, guardar en carpetas y renombrar es lo más difícil con una mano. La lección 190 (imágenes en el portafolio y publicar) es mejor hacerla juntos.</li>
      <li>🎉 <strong>Celebra cada trabajo.</strong> Pídele que te lo muestre, compártelo con la familia. La página "🗂️ Mis trabajos" ayuda a ver todo lo que logró.</li>
      <li>🧡 <strong>El cliente real es clave.</strong> Un encargo de verdad (aunque sea de la familia) motiva muchísimo.</li>
    </ul>
  </section>

  <section class="bloque">
    <h2>🗓️ Plan sugerido</h2>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Semana</th><th>Lecciones</th><th>Meta</th></tr>
      <tr><td>1</td><td>100, 110</td><td>Estudio armado y las 4 reglas de oro.</td></tr>
      <tr><td>2</td><td>120, 130</td><td>Colores y letras.</td></tr>
      <tr><td>3</td><td>140</td><td>Su primer logo con versiones.</td></tr>
      <tr><td>4</td><td>150, 160</td><td>Imágenes con IA y publicaciones en Canva.</td></tr>
      <tr><td>5–6</td><td>170</td><td>Identidad de marca completa.</td></tr>
      <tr><td>7</td><td>180</td><td>Primera página web.</td></tr>
      <tr><td>8</td><td>190</td><td>Portafolio publicado.</td></tr>
      <tr><td>9–11</td><td>200</td><td>Proyecto final y diploma.</td></tr>
    </table></div>
    <p>Es solo una guía. <strong>El ritmo lo pone él.</strong></p>
  </section>

  <section class="bloque">
    <h2>🆘 Problemas comunes</h2>
    <ul>
      <li><strong>Se acabaron los mensajes de Claude:</strong> es el límite del plan gratis. Esperar unas horas, o copiar la frase (📋) en ChatGPT o Gemini.</li>
      <li><strong>Un generador de imágenes pide pagar:</strong> cambiar a otro de la lista de 🧰 Herramientas. Los límites gratis se renuevan cada día o cada mes.</li>
      <li><strong>Claude dice que no puede crear imágenes tipo foto:</strong> es normal. Claude hace logos e íconos con formas; las fotos e ilustraciones se hacen en Designer, Ideogram, etc. (lección 150).</li>
      <li><strong>El botón de descargar del artefacto no funciona:</strong> usar el botón de descarga de arriba del artefacto, o copiar el código, o pedirle ayuda a Claude.</li>
      <li><strong>El artefacto se "rompió" tras un cambio:</strong> volver a la versión anterior con las flechas de versiones del artefacto, o decir "vuelve a la versión anterior".</li>
      <li><strong>Claude no recuerda la marca en un chat nuevo:</strong> trabajar dentro del proyecto "Mi estudio de diseño", o pegar el manual de marca al comienzo del chat.</li>
      <li><strong>Las fotos no aparecen en el portafolio:</strong> revisar que las imágenes estén en la misma carpeta que index.html y que los nombres sean exactos (sin espacios ni tildes).</li>
      <li><strong>El botón 🔊 no habla o suena raro:</strong> elegir otra voz en ⚙️ (o arriba en la computadora). En la computadora, Microsoft Edge tiene muy buenas voces en español.</li>
      <li><strong>Algo de Claude o Canva se ve distinto al curso:</strong> estas herramientas cambian seguido. Mandarle una captura a Claude y preguntar dónde está esa opción.</li>
    </ul>
  </section>

  <section class="bloque">
    <h2>🪪 Tarjeta de ayuda (para imprimir)</h2>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Quiero...</th><th>Hago...</th></tr>
      <tr><td>🎙️ Escribir hablando</td><td><kbd>⊞ Windows</kbd> + <kbd>H</kbd></td></tr>
      <tr><td>✂️ Captura para Claude</td><td><kbd>⊞ Windows</kbd> + <kbd>Shift ⇧</kbd> + <kbd>S</kbd>, y en Claude <kbd>Ctrl</kbd> + <kbd>V</kbd></td></tr>
      <tr><td>↩️ Deshacer (Canva y casi todo)</td><td><kbd>Ctrl</kbd> + <kbd>Z</kbd></td></tr>
      <tr><td>📄 Duplicar en Canva</td><td><kbd>Ctrl</kbd> + <kbd>D</kbd></td></tr>
      <tr><td>🌈 Paleta nueva en Coolors</td><td><kbd>Barra espaciadora</kbd></td></tr>
      <tr><td>📱 Ver la página tamaño teléfono</td><td><kbd>⊞ Windows</kbd> + <kbd>←</kbd></td></tr>
      <tr><td>🏅 Revisar un diseño</td><td>Contraste · Alineación · Repetición · Proximidad</td></tr>
      <tr><td>🤔 Algo se rompió</td><td>Decirle a Claude: <em>"Vuelve a la versión anterior"</em></td></tr>
    </table></div>
    <h3>📱 En el teléfono</h3>
    <div class="tabla-scroll"><table class="tabla">
      <tr><th>Quiero...</th><th>Hago...</th></tr>
      <tr><td>🎙️ Escribir hablando</td><td>Tocar el micrófono 🎤 del teclado</td></tr>
      <tr><td>📸 Mostrarle algo a Claude</td><td>Captura de pantalla → en Claude ➕ → Fotos</td></tr>
      <tr><td>↩️ Deshacer en Canva</td><td>Tocar la flecha curva de arriba</td></tr>
      <tr><td>🗣️ Practicar hablando</td><td>Modo voz de Claude (las ondas 〰️)</td></tr>
    </table></div>
    <button class="boton secundario no-imprimir" onclick="window.print()">🖨️ Imprimir esta página</button>
  </section>
`;
})();
