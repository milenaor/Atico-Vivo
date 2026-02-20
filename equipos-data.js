// Base de datos de equipos de Ático Vivo
export const equiposData = [
  {
    "nombre": "Microfonos AKG C414",
    "descripcion": "2 micrófonos de condensador duales y 1 multipatrón versátil, ideal para grabar voces, instrumentos acústicos y amplificadores, con opciones de patrones polares ajustables para adaptarse a diferentes situaciones de grabación",
    "categoria": "equipos",
    "subcategoria": "audio"
  },
  {
    "nombre": "Microfono AKG C4500 B-BC",
    "descripcion": "2 micrófonos duales de condensador de gran diafragma con patrón polar cardioide. Es ideal para grabar voces, instrumentos acústicos y amplificadores, ofreciendo un sonido claro, detallado y con un leve realce en los agudos para mayor presencia. Su diseño robusto y su atenuación de graves lo hacen versátil en estudios de grabación y transmisiones",
    "categoria": "equipos",
    "subcategoria": "audio"
  },
  {
    "nombre": "Microfono AKG C451 B dual",
    "descripcion": "4 micrófonos duales de condensador de pequeño diafragma, ideal para grabar instrumentos brillantes como platillos, guitarras acústicas o violines",
    "categoria": "equipos",
    "subcategoria": "audio"
  },
  {
    "nombre": "Camara Sony F3",
    "descripcion": "3 cámaras de cine digital con sensor Super 35mm, gran rendimiento en low light. Viene con lentes intercambiables de 35-50-85mm de distancia focal fija, y accesorios como memorias de grabación, baterías intercambiables, mattebox de 4x5, rain cover y maletín de transporte",
    "categoria": "equipos",
    "subcategoria": "video"
  },
  {
    "nombre": "Camara Canon Eos I T7 rebel",
    "descripcion": "5 cámaras DSLR básicas con sensor APS-C, para usar en fotografía y video",
    "categoria": "equipos",
    "subcategoria": "video"
  },
  {
    "nombre": "Camara Sony F55",
    "descripcion": "2 cámaras 4K con sensor global shutter, profesional para cine y broadcast. Cuenta con follow focus, mattebox para usar filtros 4x5, ópticas intercambiables de 20, 25, 35, 50, 85 y 135mm de distancia focal fija, y accesorios como memorias de grabación, baterías intercambiables, rain cover y maletín de transporte",
    "categoria": "equipos",
    "subcategoria": "video"
  },
  {
    "nombre": "Luces Arrisun 12 Plus Head",
    "descripcion": "4 focos LED de 12W, luz intensa y compacta para estudios o exteriores",
    "categoria": "equipos",
    "subcategoria": "iluminacion"
  },
  {
    "nombre": "Luces Kino Celeb 200",
    "descripcion": "3 paneles LED bicolores (3200K-5600K) con difusión cinematográfica para sets profesionales",
    "categoria": "equipos",
    "subcategoria": "iluminacion"
  },
  {
    "nombre": "Luces ARRI kit 150w-300w-650w",
    "descripcion": "4 kits de 4 luces fresnels para cubrir todas las necesidades de iluminación básica",
    "categoria": "equipos",
    "subcategoria": "iluminacion"
  },
  {
    "nombre": "Teclado Kronos de 88 teclas",
    "descripcion": "1 teclado musical profesional con acción martillada, sonidos de alta calidad y motor de síntesis múltiple",
    "categoria": "equipos",
    "subcategoria": "instrumentos"
  },
  {
    "nombre": "Bateria acustica Gretsch Energy",
    "descripcion": "1 batería acústica con hardware completo para creaciones musicales",
    "categoria": "equipos",
    "subcategoria": "instrumentos"
  },
  {
    "nombre": "Grabadora de audio Zoom H6",
    "descripcion": "3 grabadoras portátiles de 6 entradas XLR con preamps de bajo ruido y pantalla táctil, solución todo-en-uno para field recording",
    "categoria": "equipos",
    "subcategoria": "audio"
  },
  {
    "nombre": "Tripode Sachtler FSB 8",
    "descripcion": "21 trípodes con cabeza fluida profesional para cámaras medianas, con arrastre ajustable",
    "categoria": "equipos",
    "subcategoria": "soporte"
  },
  {
    "nombre": "SteadiCam ultra",
    "descripcion": "1 estabilizador profesional para tomas fluidas con cámaras medianas o grandes",
    "categoria": "equipos",
    "subcategoria": "soporte"
  },
  {
    "nombre": "Gafas Oculus Quest 2",
    "descripcion": "4 visores VR standalone con pantalla 4K y controles intuitivos para gaming y experiencias inmersivas",
    "categoria": "equipos",
    "subcategoria": "vr"
  },
  {
    "nombre": "Camara 360 Insta One",
    "descripcion": "2 cámaras para grabar contenido 360° compactas con estabilización FlowState, ideal para contenido VR",
    "categoria": "equipos",
    "subcategoria": "vr"
  },
  {
    "nombre": "Camara Sony FX9",
    "descripcion": "3 cámaras de cine alta 6K Full-Frame con autofocus y modularidad para cine y documentales",
    "categoria": "equipos",
    "subcategoria": "video"
  },
  {
    "nombre": "Camara Canon EOS R6",
    "descripcion": "10 cámaras Mirrorless Full-Frame con 4K, IBIS y AF Dual Pixel CMOS II para video y fotografía",
    "categoria": "equipos",
    "subcategoria": "video"
  },
  {
    "nombre": "Luces GVM 800D RGB",
    "descripcion": "4 kits de 3 luces tipo panel LED RGB bicolor con control remoto para efectos creativos",
    "categoria": "equipos",
    "subcategoria": "iluminacion"
  },
  {
    "nombre": "Mesa de mezclas Sound devices MixPre 10",
    "descripcion": "5 grabadores/mezcladores de 10 canales con preamps de bajo ruido",
    "categoria": "equipos",
    "subcategoria": "audio"
  }
];

// Función para obtener equipos por categoría
export function getEquiposByCategoria(categoria) {
  return equiposData.filter(equipo => equipo.categoria === categoria);
}

// Función para buscar equipos
export function searchEquipos(query) {
  const lowerQuery = query.toLowerCase();
  return equiposData.filter(equipo => 
    equipo.nombre.toLowerCase().includes(lowerQuery) ||
    equipo.descripcion.toLowerCase().includes(lowerQuery)
  );
}

// Función para obtener equipo aleatorio
export function getRandomEquipo() {
  return equiposData[Math.floor(Math.random() * equiposData.length)];
}
