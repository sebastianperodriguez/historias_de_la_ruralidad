export type CapituloBloque =
  | { tipo: 'parrafo'; texto: string }
  | { tipo: 'cita'; texto: string; autor?: string }
  | { tipo: 'formula'; texto: string }
  | { tipo: 'figura'; pagina: number; pie?: string };

export type Capitulo = {
  slug: string;
  titulo: string;
  /** Página inicial y final según la numeración impresa de la revista. */
  inicio: number;
  fin: number;
  /** Página física (PNG/WebP) donde inicia el capítulo. */
  paginaArchivo: number;
  bloques: CapituloBloque[];
};

export type RevistaCredito = {
  rol: string;
  personas: string[];
};

export const revista = {
  titulo: 'La Aurora',
  subtitulo: 'Memorias de una vereda construida en comunidad',
  serie: 'Historias de la Ruralidad Carmelitana',
  lugar: 'El Carmen de Viboral – Antioquia – Colombia',
  fecha: 'Noviembre de 2026',
  apoyo:
    'Proyecto apoyado por el Programa Municipal de Estímulos del Instituto de Cultura El Carmen de Viboral, 2026.',
  administracion: {
    entidad: 'Administración Municipal El Carmen de Viboral',
    programa: '“Viveros de Cultura”',
    alcalde: 'Hugo Jiménez Cuervo, Alcalde',
    instituto: 'Instituto de Cultura de El Carmen de Viboral',
    director: 'Julián David Trujillo Moreno, Director',
  },
  creditos: [
    {
      rol: 'Fotografía',
      personas: ['Fabián Rendón Morales', 'Isabel Cristina López Giraldo', 'Daniela Zuluaga Toro'],
    },
    { rol: 'Ilustración', personas: ['Viviana Serna Arbeláez'] },
    { rol: 'Investigación, edición', personas: ['Daniela Zuluaga Toro'] },
  ] satisfies RevistaCredito[],
  contraportada: {
    titulo: 'Arropados por el paisaje',
    detalle:
      'Técnica: Ilustración, tinta sobre papel • Dimensiones: 15 × 20 cm • Año: 2026 • Autora: Viviana Serna',
  },
  totalPaginas: 38,
  pdfMessage: 'La descarga del PDF estará disponible próximamente',
  capitulos: [
    {
      slug: 'aportes-conceptuales',
      titulo:
        'Aportes conceptuales y metodológicos para el fortalecimiento de las memorias colectivas en la ruralidad desde la perspectiva de memoria',
      inicio: 1,
      fin: 4,
      paginaArchivo: 4,
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'Desde este abordaje micro histórico de la Vereda La Aurora de El Carmen de Viboral, se pretende sugerir algunos aportes metodológicos que visualicen nuevas rutas para el fortalecimiento de las memorias y los saberes colectivos en las comunidades rurales del municipio desde una perspectiva de memoria. Si bien pueden existir diferencias entre la historia oficial y la memoria histórica, es menester de esta investigación unirlas, entendiendo la importancia de enlazar los relatos de la población rural, en una dimensión más amplia del problema en sí: la pérdida de identidad rural. En ese orden, el diálogo de memorias permite narrar distintas voces y hallar una suerte de consenso general entre ellas, sin dejar de preservar cierta rigurosidad en los relatos, pero rescatando en ellos la subjetividad tan exquisita que sugiere a veces, la ficción de sus portadores.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Desde la ley 1448 de 2011, en el artículo 152 se precisa el término “Sujeto Colectivo” como aquellos: «grupos y organizaciones sociales y políticos, o comunidades determinadas a partir de un reconocimiento jurídico, político o social que se haga del colectivo, o en razón de la cultura, la zona o el territorio en el que habitan, o un propósito común» [Ley 1448 de 2011, citado en Centro Nacional de Memoria Histórica, 2015, p. 12).',
        },
        {
          tipo: 'parrafo',
          texto:
            'Así, el sujeto colectivo busca establecer las semejanzas compartidas entre una comunidad, en este caso, rural y campesina, y en sí mismo, ese sujeto no sólo se identifica desde lo espacial, como aquel territorio compartido por una comunidad, sino como la suma de una construcción histórica con un pasado común. Podría pensarse que las historias erigidas de los territorios rurales deben gran parte de su construcción, a la organización comunitaria que, si bien en sus principios suele ser muy rústica, la más pequeña de las manifestaciones, viene siendo un antecedente de ese sujeto colectivo y como tal, lo dota de características genuinas. En ese sentido, podría pensarse ese sujeto colectivo de La Aurora, como una suma sencilla pero concreta:',
        },
        {
          tipo: 'formula',
          texto:
            'Comunidad Vereda La Aurora = Territorio + Historia Colectiva + Organización Comunitaria + Luchas Colectivas = Sujeto Colectivo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Conviene así, para este espacio rural y tal vez, para diversos contextos de la ruralidad en el país, preguntarse: ¿Qué configuraciones históricas fueron posibles para que dicha comunidad rural pueda reconocer su sujeto colectivo?',
        },
        {
          tipo: 'parrafo',
          texto:
            'Todas las metodologías aplicadas a este proyecto fueron construídas sobre la base de la fuente oral, como la excusa principal para definir relaciones entre comunidad, espacio, sujeto y así: «abordar la relación sociedad-espacio y sus formas de apropiación concreta a través de los recuerdos de la población campesina.» (Centro Nacional de Memoria Histórica, 2015, p.12). Se usaron herramientas como: Cartografía social, entrevistas, grupos de discusión, consulta documental, talleres en ambientes de confianza con técnicas como fotobordado, collage y juegos lúdicos.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Saber valorar la historia que aún tenemos viva, debería ser consigna de una sociedad presente, con conciencia histórica y patrimonial como la nuestra, en suma, nosotros seremos, en la medida que conservemos aquellos gestos que nos pertenecen, por tal motivo la fuente oral viene siendo una herramienta del presente que devuelve la voz a las minorías, valida los saberes cotidianos y descentraliza la veredad o la historia «oficial».',
        },
        {
          tipo: 'parrafo',
          texto:
            'La fuente oral conserva los gestos, los guiños burlescos, los volumenes, los ritmos del habla popular, cargados de connotaciones difícilmente reproducidas por la escritura. Alessandro Portelli concluye al respecto que: «La misma afirmación puede tener muchos significados contradictorios, de acuerdo a la entonación del hablante, que no pueden ser detectados en la transcripción, sino que solo pueden ser descritos aproximadamente.» (1991, p.39). Existen ciertas matices en el habla que solo pueden ser percibidas escuchando y no leyendo, atendiendo al ritmo que el narrador sugiera para expresar diversas emociones, así, un cambio en la velocidad puede sugerir un énfasis mayor, o todo lo contrario, puede mostrar deseos de evitar ciertos puntos, incluso es difícil que el investigador al leer la fuente, no ejerza una posición interpretativa en su participación activa como narrador, dándole al texto, todas esas cualidades ya mencionadas, por tal motivo, afirma Portelli: «La traducción más literal difícilmente es la mejor; una verdadera traducción simple implica una cierta cantidad de invención» (p.22).',
        },
      ],
    },
    {
      slug: 'primeros-gestos',
      titulo: 'Primeros gestos al habitar lo rural',
      inicio: 5,
      fin: 11,
      paginaArchivo: 8,
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'La vereda La Aurora desde su génesis, comenzó siendo un espacio rural fragmentado, dado que los “colonos” —término que suele usarse entre los campesinos de hoy— no tenían más nexos que el suelo que pisaban; ellos se dedicaron a labrar la tierra para su auto sustento y una suerte de sistema de trueque o venta limitado, pues en ese entonces, pocas razones los unían, salvo el trabajo y la supervivencia cotidiana. El nombre “La Aurora” que fue dado por sus colonos, tiene una historia sencilla pero con cierta belleza que precisa ser aludida: Parece ser que en el sector Los Alticos, hoy llamado Las Brisas, existió una casa antigua color azul, justo al borde del camino, que sus propietarios adornaron con un llamativo letrero que colgaba de las alfardas del techo: La Aurora, así fue nombrada esta morada que, poco a poco fue haciéndose dueña de la referencia de sus transeúntes y fue nombrando este territorio con un gesto cotidiano.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La vereda comprendía una amplia extensión para la década de los años 60, iniciando desde la zona de los alticos conocida posteriormente como Las Brisas, como ya se ha mencionado; luego atravesando la quebrada Viboral, contiguamente la zona central que rodea todo lo que hoy comprende el colegio, seguida de la zona boscosa conocida como El Quemado que limita con el acueducto, hasta llegar a los límites por el norte, con la vereda Rivera, por el oriente con la vereda Viboral, por el occidente con la zona urbana de El Carmen de Viboral y por el sur con la vereda Betania.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La importancia de un espacio habitado es que alberga la memoria, esos recuerdos que no se incrustan tan fácilmente en una línea temporal si no se recurre a pensar en una imagen cotidiana. Así, la tierra sin pisadas, sin ser labrada, sin ser cobijada, carece de un lenguaje, de una historia que se perpetúe; solo es tiempo sin más. En un principio, cuando se comenzó a habitar la vereda por apenas diez casas, emprendieron allí imágenes que serían fuente de inspiración para ser recordadas, y genuinamente podemos pensar este gesto como un ejemplo de todos los comienzos comunitarios que inician concibiéndose desde una relación recíproca entre la tierra, el individuo y el colectivo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Gastón Bachelard (1957/2000) nos dice al respecto que: «El espacio lo es todo, porque el tiempo no anima la memoria [...] la memoria no registra la duración concreta [...] no se pueden revivir las duraciones abolidas [...] es en el espacio donde encontramos esos bellos fósiles de duración» (p. 39).',
        },
        {
          tipo: 'parrafo',
          texto:
            'Así poco a poco, se fue poblanda la vereda: «La tierra se veía desde lejos, como si fuera una colcha de retazos» recuerda Gustavo Franco al referirse al paisaje agrícola construido en lo sucesivo, por la comunidad que lo fue poblando; también nos lleva a recordar esos primeros habitantes:',
        },
        {
          tipo: 'cita',
          texto:
            '«Cuando yo estaba medianito, apenas habían 8 casas, que eran la de Efrén allí, era 1, la de don Alpidio, que ya se cayó, 2, allí en el Filito que era de los Matías, que esa la ayudaron a hacer fue la comunidad, 3, estaba la de José Dolores, 4, estaba la del difunto Amador, que tumbaron, 5, la de Felipe 6, la de doña Mariela que quedaba allá en el Filo, 7, y ya de ahí pa allá otras casas que eran de Pacho Jaramillo... es que los mandados mejor dicho, tenía que, uno, correlos.»',
          autor: 'Gustavo Franco, comunicación personal, 2026',
        },
        {
          tipo: 'parrafo',
          texto:
            'Así, no es posible concebir la memoria sin aquellas imágenes de la casa habitada, que se adhieren como hojas a ese árbol que arraiga y sostiene los recuerdos, como metáfora de una línea del tiempo que se teje, no con los datos, ni las fechas, sino con las imágenes que se quedan incrustadas en el individuo y el colectivo.',
        },
        {
          tipo: 'figura',
          pagina: 12,
          pie: 'La Aurora, entre los años 80 y 90, cortesía de Gustavo Franco',
        },
        {
          tipo: 'cita',
          texto:
            '«Mucho monte, pero la leña era escasísima, porque todo el mundo cargaba leña, se metía uno al monte y no encontraba casi nada […] era hasta divertido porque uno se iba en gallada disque por leña, había veces que se iban 6 o 8 por viajes de leña y cuando llegaban se repartía cada cual con el viajecitos para las casas.»',
          autor: 'Gustavo Franco, comunicación personal, 2026',
        },
        {
          tipo: 'parrafo',
          texto:
            'Se recuerda así, un primer paisaje lejano de un territorio que sus naturales habitaron rústicamente, donde se cocinaba con la leña que los niños recolectaban y llevaban hasta sus casas, como una de las labores domésticas asignadas, en ese mismo orden, casi todas las labores pasaban primero por las manos de los campesinos, desde el material primario para hacer el fuego, hasta la actividad de la siembra para obtener los alimentos y la preparación casera de los mismos, así transcurría la vida en este territorio.',
        },
        {
          tipo: 'cita',
          texto:
            '«Para 1985 en la Junta de Acción Comunal, a mí me nombraron como promotora de salud, fuí nombrada por el hospital y seguí trabajando por la vereda de casa en casa haciendo charlas, aplicando inyecciones, haciendo curaciones, atendiendo partos»',
          autor:
            'Mariela de Jesús Espinoza — Presidenta de la Junta de Acción Comunal de la Vereda La Aurora, comunicación personal, 2026',
        },
      ],
    },
    {
      slug: 'junta-accion-comunal',
      titulo: 'Vínculos y creación de espacios participativos vitales: La Junta de Acción Comunal',
      inicio: 12,
      fin: 13,
      paginaArchivo: 15,
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'Hablar de Las Juntas de Acción Comunal en Colombia es remitirse a un terreno labrado con arduo sacrificio sin vanaglorias, ya que dichas agremiaciones han sido sostenidas durante años por líderes comunitarios que han dedicado gran parte de su vida al servicio de las comunidades: ellos han sido mujeres y hombres de esa antigua filosofía: «dar de sí, sin pensar de sí», porque este trabajo comunitario ha sido también históricamente desfavorecido, sin ningún tipo de retribución económica por parte del Estado, pese a los múltiples sacrificios, desgastes y exposición que conlleva el cargo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Como se documenta en Camino a la Vereda de 2020, es mediante la ley 19 de 1959 (articulo 22, 23 y 24) que se da el marco legal para la conformación de Las Juntas de Acción Comunal a lo largo de todo el país: «como una forma de contribuir a la reducción de la inequidad en el país a partir de la conformación de colectivos vecinales. Posteriormente el Decreto 1761 de ese mismo año, definiría en su Artículo número 4, las funciones que desempeñarían las JAC en los territorios, entre las cuales destacan: el mejoramiento y construcción de centros educativos y restaurantes escolares, la promoción de prácticas de higiene y prevención contra enfermedades. El desarrollo de condiciones de acceso al agua, mediante adecuados sistemas de riego y drenaje, el mejoramiento de los sistemas agrícolas. La construcción de carreteras, puentes y caminos vecinales, el fomento de actividades deportivas, recreación y cultura» (Ossa Zuluaga, 2020, p.17).',
        },
        {
          tipo: 'parrafo',
          texto:
            'José Albino Soto y sus hermanos, Valerio Soto y Manuel Soto, naturales del territorio, fueron líderes de ese primer gesto colectivo en La Aurora, donde nacieron las conversaciones conjuntas de los habitantes de la vereda: Las primeras reuniones de la Junta de Acción Comunal de La Aurora se dieron en la casa de José Albino Soto, quien vivía en la zona conocida como Los Alticos, luego sucedió que por recomendación de Heriberto Giraldo, un líder reconocido del pueblo de la década de los 70, se originó la idea de hacer las reuniones en dicha casa al ser la única cercana a la vereda con electricidad y tener el mencionado líder, muy buena relación con el propietario, José Albino, en cuya casa se empezaron a gestar las reuniones asistidas en un principio por 15 personas, en 1972. Las reuniones continuaron dándose en un ambiente caluroso de conversa, liderándolas un poco en su curso José Albino Soto, Mariela Espinoza, José Domingo Arango, como también los demás vecinos que asistían con frecuencia a la casa de José Albino y participaban de los temas de interés comunitario, también fue muy importante la ayuda de Heriberto Giraldo, quién enseñó a dichos líderes nacientes, todos los procesos necesarios y la ruta legal para constituirse, obteniendo al siguiente año la resolución de La Junta de Acción Comunal, que se logró en 1973 con su respectivo número o código.',
        },
      ],
    },
    {
      slug: 'la-escuela',
      titulo: 'La Escuela',
      inicio: 14,
      fin: 21,
      paginaArchivo: 17,
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'El primer proyecto que emprendió la Junta fue la construcción de la escuela rural, un proceso de varios años que requirió la articulación de muchas voluntades para consolidarse. En principio, se comenzó con la búsqueda de un terreno o lote, siendo el primer espacio adquirido gracias a la compra de un pequeño predio que perteneció a Félix Antonio Arango Ocampo, quien lo vendió a la Junta por quinientos pesos. Tras ahondar esfuerzos comunitarios, entre todas las familias se reunió dicha cantidad y en ese espacio se empezó a levantar el primer salón. Así lo confirman los documentos catastrales: «La propietaria JUNTA DE ACCIÓN COMUNAL VEREDA LA AURORA [...] adquirió el 100% del derecho real de dominio y la posesión material del inmueble por compraventa celebrada con FELIX ARANGO OCAMPO [...] 09 de Julio de 1974» (Gobernación de Antioquia, 2025).',
        },
        {
          tipo: 'parrafo',
          texto:
            'Los límites del colegio, según sus linderos generales expresados en la escritura pública del 9 de julio de 1974, quedaron registrados de la siguiente manera: «Por el oriente, con propiedad de don Emilio Espinosa, al accidente con José Domingo Arango, [...] por el sur, con la carretera que gira para Santuario y Emilio Espinoza» (Gobernación de Antioquia, 2025, p. 9).',
        },
        {
          tipo: 'parrafo',
          texto:
            'Algo muy significativo de la época, que merece especial mención, es que a través de Radio Sutatenza se desplegaba una pedagogía dirigida a los líderes y lideresas del campo, centrada no solo en impartir educación, sino también en instruir aquellos conocimientos necesarios para capacitar los liderazgos e integrar el gremio de asociaciones comunales. Como bien menciona Jorge Enrique Castaño, líder de la vereda La Aurora: «Por Radio Sutatenza era que se formaban los líderes [...] por ejemplo venía una persona de Bogotá y ya nos hacían unas capacitaciones, ya esos líderes le iban colaborando a uno» (comunicación personal, 2026). El papel de esta emisora fue fundamental en la vereda, ya que era ampliamente sintonizada; dada su importancia educativa, se distribuyeron cartillas con las cuales se alfabetizó a gran parte de la población campesina. Como señala Radio Nacional de Colombia (2017): «Se distribuyeron 6.453.937 cartillas de educación fundamental integral en 955 municipios del país [...] Se formaron 20.039 dirigentes campesinos. Se realizaron 4.365 cursos de extensión en 687 municipios del país».',
        },
        {
          tipo: 'parrafo',
          texto:
            'El colegio de La Aurora nació por una iniciativa comunitaria, más que institucional, tanto así que del predio que comprende el actual colegio sólo se compró una pequeña parte a Félix Antonio Arango, quien brindó facilidades de pago para la Junta de Acción Comunal. Las otras partes correspondieron a las donaciones de la familia de la actual presidenta, Mariela de Jesús Espinoza Estrada, así, su tío José Humberto Espinoza donó una parte y su mamá, Consuelo de Jesús Estrada otra y por último, el predio que corresponde a la actual cancha del colegio, anteriormente perteneció a Jesús María o suso y Julia Espinoza, tía de Mariela, —quienes donaron ese otro predio a cambio de que la Junta de Acción Comunal les construyera otra casa en un lote cercano al colegio, así comentan las fuentes orales vivas al respecto:',
        },
        {
          tipo: 'cita',
          texto:
            '«Y era estrechito eso ahí porque había una casita que era de don Suso Espinoza, que ya ahí fue donde la Acción Comunal le hizo la casita ahí abajo, al bordo de la vía»',
          autor: 'Gustavo Franco, comunicación personal, 2026',
        },
        {
          tipo: 'cita',
          texto:
            '«Como no teníamos cancha ni nada a donde jugar los muchachos, ahí había una casa del primo hermano mío, de Suso, que era una persona muy querida y muy formal, pero la señora no, la señora era un poquito groserita, entonces los niños jugando con el balón, se les iba a la casa de ella, entonces [el balón] le tiraba las tejas, entonces la señora cogía el balón y lo chuzaba con un cuchillo.»',
          autor: 'Mariela Espinoza, comunicación personal, 2026',
        },
        {
          tipo: 'parrafo',
          texto:
            'Así, el lote de «Suso» Espinoza se convirtió en la cancha de la escuela, y la Junta de Acción Comunal le construyó una nueva casa, ubicada diagonal al establecimiento educativo, cruzando la vía principal.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Para el año de 1975 se iniciaron las primeras clases a cargo de la docente Fanny Betancur, quien recuerda con cierto aire de nostalgia lo siguiente:',
        },
        {
          tipo: 'cita',
          texto:
            '«No estaban sino las paredes de un salón y el techo, no más; no tenía ni puertas, ni ventanas, ni piso, ni pupitres, ni tableros, sinceramente no había nada, ahí nos podíamos escampar en ese lugar, no más»',
          autor: 'Fanny Betancur, comunicación personal, 2026',
        },
        {
          tipo: 'parrafo',
          texto:
            'De esa forma se instruyeron las primeras clases en aquel espacio rural, en donde se desarrollaban actividades en dos jornadas, de 7:00 a 11:30 de la mañana y de 1:00 a 4:00 de la tarde. En paralelo, se abrió un espacio de educación nocturna para enseñar a la población adulta a leer, escribir y realizar operaciones aritméticas básicas, tal como recuerda Jorge Enrique Castaño, quien asistió a dichas sesiones:',
        },
        {
          tipo: 'cita',
          texto:
            '«Empecé la nocturna aquí, la que nos dio clase aquí en nocturna fue Amanda Saldarriaga, la esposa de José Castaño, por ahí en el 74 más o menos; se prestaban [los salones] para los que quisiéramos, ahí fue que aprendimos a leer y a escribir un poquito»',
          autor: 'Jorge Enrique Castaño, comunicación personal, 2024',
        },
        {
          tipo: 'figura',
          pagina: 21,
          pie: 'Se aprecia en la fotografía: de izquierda a derecha José Humberto Espinoza, en el centro Emilio Espinoza y Rosa Elvira García.',
        },
        {
          tipo: 'cita',
          texto:
            '«Era enanito, oiga y berraquito, se iba pal monte y se echaba unas alfardas por ahí de seis, siete metros, se echaba unos palos grandes de esos montes de allá de esas cordilleras, para colaborar con los techos, le gustaba mucho la cazería, si a él lo querían ver feliz, que cazara una Guagua, o el gurre o armadillo.»',
          autor: 'J. Castaño, comunicación personal, 2026',
        },
        {
          tipo: 'cita',
          texto:
            '«En ese tiempo era uno a media hora de camino, no existían zapatos, todo el mundo era descalzo [...] cuidar los animales, echarles bogadito y se iba uno al colegio... después a medio día [...] y de colegio por la tarde lo mandaban a uno por leña»',
          autor: 'G. Franco, comunicación personal, 2026',
        },
        {
          tipo: 'parrafo',
          texto:
            'En ese paisaje cotidiano se fueron dando las clases, que empezaron con 17 alumnos en el grado primero y 6 en segundo, niños, jóvenes y adultos asistían a pesar de las difíciles condiciones propias de los contextos rurales de la década de los setenta, en donde los niños debían trabajar para apoyar las labores domésticas del hogar y, al mismo tiempo, aprender en aquella escuela las habilidades necesarias para ese horizonte que evolucionaba ante sus ojos. En esa rústica escuela, los asientos para los niños se crearon con adobes y orillos —que eran tablas de madera muy rústicas, casi que recién taladas— y todos los días, sin falta, se recogían con paciencia y se guardaban para que no fueran robadas ni las tablas ni aquellos adobes.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La labor de las docentes rurales no se limitaba al acto de impartir sus clases; ellas también ejercían un liderazgo activo al ser parte de la población alfabetizada, con capacidad de redactar oficios, gestionar recursos, manejar dinero o liderar eventos culturales en beneficio de los espacios educativos. Asimismo, por estas capacidades de liderazgo y trabajo comunitario —pues en esencia mucho de eso tiene también la docencia—, las personas confiaban profundamente en el papel de las maestras, a quienes se respetaba, admiraba y acataba en cada consejo. La docente Fanny Betancur fue uno de esos pilares en la vereda La Aurora, como recuerda Mariela de Jesús Espinoza:',
        },
        {
          tipo: 'cita',
          texto:
            '«Y Fanny empezó, y fue para nosotros la persona más importante que empezó a enseñarnos a ir a la gobernación, empezó a buscar recursos ella, con los mismos familiares del pueblo, a traer mesitas y cositas pal colegio. La profesora Fanny y el papá de ella que iba mucho a Medellín, le enseñaron a Dominguito a ir a Medellín a buscar recursos en la Gobernación.»',
          autor: 'M. Espinoza, comunicación personal, 2026',
        },
        {
          tipo: 'parrafo',
          texto:
            'Las Romerías o festivales eran iniciativas importantes para recaudar fondos, ya que toda la comunidad de La Aurora se reunía en la escuela para aunar esfuerzos en el mejoramiento de los espacios educativos, así, dichos encuentros festivos se alargaban hasta las 2 o 3 de la mañana y su ejecución facilitaba la obtención de recursos, que eran administrados en su totalidad por las docentes, al ser ellas las únicas que tenían conocimientos necesarios para administrarlo, entre habilidades muy básicas como saber leer y escribir, porque para la fecha las personas adultas no lo sabían, pero al mismo tiempo, ellas contaban con la confianza de toda la comunidad.',
        },
      ],
    },
    {
      slug: 'acueducto-aurora-viboral',
      titulo: 'El Acueducto Aurora Viboral y la salud en la vereda',
      inicio: 22,
      fin: 27,
      paginaArchivo: 25,
      bloques: [
        {
          tipo: 'cita',
          texto:
            '«En la Escuela de Rivera, el agua había que cargarla por lo menos dos cuadras, desde una cañada, entonces se recogía en galonsitos, y al que cargaba el aguita le daban un confite, uno era feliz»',
          autor: 'G. Franco, comunicación personal, 2026',
        },
        {
          tipo: 'parrafo',
          texto:
            'Este es un recuerdo que atesora Gustavo Franco, natural de la vereda La Aurora y quien fue estudiante de dos proyectos educativos hermanos: la Escuela de Rivera y la Escuela de La Aurora. Aunque en antigüedad puede decirse que en Rivera contaron con una escuela rural más prontamente que en La Aurora, ambas surgieron en una línea de tiempo muy consecutiva; además, sus poblaciones eran muy cercanas ya que compartían límites territoriales, tanto así que muchas de sus profesoras trabajaron en ambos espacios durante la década de los setenta.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Paralelo a los proyectos educativos, se fue visibilizando la necesidad de un acueducto que los fortaleciera, de esa forma, la vereda emprendió la empresa de un pequeño acueducto captando el agua en los terrenos conocidos como Filo de Hambre de La Aurora y El Quemado de Viboral; de estos bosques emergía agua que terminaba en una zona más baja de la vereda donde se recolectaba, como recuerda Mariela Espinoza:',
        },
        {
          tipo: 'cita',
          texto:
            '«Y así empezamos un acueducto para 25 personas, un señor de la vereda que se llamaba Joaquín Cardona nos dio un pedacito de tierra y nos dijo: “Hagan un tanquesito ahí”, porque la casa de él tenía mucha agua»',
          autor: 'M. Espinoza, comunicación personal, 2026',
        },
        {
          tipo: 'parrafo',
          texto:
            'En ese hilo de palabras que se entrelazan en los relatos, se llega a un consenso generalizado entre todos los entrevistados, quienes afirman ese primer comienzo de un acueducto comunitario en la finca de Joaquín Cardona. Alrededor de este proceso, también fue muy importante la participación de Efrén Ramírez y Rubén Castaño, quienes fueron líderes clave de esta empresa en una segunda etapa del proyecto. Como bien recuerda Gustavo Franco:',
        },
        {
          tipo: 'cita',
          texto:
            '«Cuando eso, el tanque para la Escuela de La Aurora fue aquí abajito, esa finca era de Joaquín Cardona, ese dio el permiso para hacer el primer acueducto, y ya el acueducto sí, apenas hicieron el de arriba, que por potente, dieron ese»',
          autor: 'G. Franco, comunicación personal, 2026',
        },
        {
          tipo: 'parrafo',
          texto:
            'La construcción del acueducto se hizo en jornadas de convites comunitarios, trabajando sábados y domingos, abriendo zanjas y huecos para colocar los primeros tanques. Aquel acueducto inicial que abastecía con agua potable la escuela y 25 casas, fue quedándose sin capacidad en la medida que la vereda crecía, por tal motivo se inició el proyecto de las bocatomas La Linda, Puente Piedra y El Quemado, ubicadas en la vereda Viboral, donde convergen las aguas de la microcuenca para llevar este recurso vital a tres centros rurales poblados: Las Brisas, La Aurora y Viboral. El acueducto fue adquiriendo parte de la zona boscosa para su protección y actualmente conservan una gran finca que está en constante ciudado y proyecto reforestador, ubicada en la vereda San Eusebio, con límites entre El Santuario y El Carmen de Viboral.',
        },
        {
          tipo: 'cita',
          texto:
            '«Y esta casa fue la primera casa que tuvo televisor en la vereda, y aquí nos juntábamos todos a ver televisión»',
          autor: 'Mariela de Jesús Espinoza, comunicación personal, 2026',
        },
        {
          tipo: 'parrafo',
          texto:
            'El lote para la construcción del actual puesto de salud, lo dondó Efrén Ramírez, uno de los líderes importante de la vereda, como recuerda Mariela Espinoza:',
        },
        {
          tipo: 'cita',
          texto:
            '«Como don Efrén era un líder de acá, de los buenos, nos dijo —camine, yo le muestro Don Domingo a dónde haga el puesto de salud— y nos dio un lote grande, sin escritura, nos lo dio así grande el lote que tenemos ahora, entonces ya le dijimos al señor alcalde y entonces el señor alcalde ya lo llamó a él y le dijo, —venga haga papeles que yo les voy hacer el puesto de salud— ese puesto de salud que hay ahora nos lo dio el primer alcalde, entonces ya don Efrén hizo los papeles»',
          autor: 'M. Espinoza, comunicación personal, 2026',
        },
        {
          tipo: 'parrafo',
          texto:
            'La primera enfermera que laboró allí, fue Dora Pérez, quien llegó a cumplir tareas de suma importancia para la comunidad como: hacer controles, revisar la presión, atender los niños y las embarazadas. En ese espacio rural, la salud era muy básica y por lo general la mayoría de los partos se atendían en las casas ya que no existían controles prenatales ni un seguimiento riguroso para tener una fecha precisa de los nacimientos, por esta razón, una vez nacidos los infantes, las parteras y promotoras de salud los llevaban inmediatamente al hospital para ser revisados.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La pediatría en Colombia es tardía, se consolida en el siglo XX y viene a encarar los problemas existentes frente a la alta tasa de muertes en las primeras edades. Como señala Rodríguez (2008), respecto a este panorama: «Colombia presentaba, aún a mediados del siglo XX, una de las estadísticas latinoamericanas más elevadas en mortalidad infantil. Colombia tenía un promedio anual de 141,8 de niños muertos por 1000 nacidos vivos» (p. 362). Las cifras demuestran que en la Colombia del siglo XX los niños se morían por enfermedades muy comunes como diarreas, gripe, influenza y todo tipo de infecciones, por tal motivo, el asenso de la medicina social, fue una estrategia para afrontar los problemas sanitarios y sería una herramienta para hablar de modernidad en las naciones, en ese orden, los censos de la mortalidad infantil eran una medida que demostraba a grandes rasgos, que tan modernos eran los Estados, incentivando que la iniciativa de la medicina social fuera llevada a todos los rincones del país.',
        },
        { tipo: 'figura', pagina: 30 },
      ],
    },
    {
      slug: 'conclusiones',
      titulo: 'Conclusiones',
      inicio: 28,
      fin: 30,
      paginaArchivo: 31,
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'En toda su trayectoria, La Aurora ha sido edificada con el esfuerzo de su gente sencilla, de aquellos líderes sin vanaglorias que donaron allí un lote, aquí un centavo y otros un esfuerzo más, para aportar a la cuota de jugarse el todo por el todo, el todo por la vida misma, por un sueño colectivo. Es esencial saber, que las necesidades y los grandes esfuerzos para mejorarlas suelen ser el toque indispensable para concebir una comunidad con identidad, por esto, cuando planteamos al principio de este texto, que aquel sujeto colectivo, aquella identidad arraigada, podría analizarse a la luz de ciertos términos, para el caso de La Aurora, esa unión vital entre “Organización Comunitaria + Luchas Compartidas” es el ingrediente estructural que cimentó la identidad rural de la vereda, y que hoy corre el riesgo de perderse ante una avalancha de sucesos propios del desarrollo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'No deja de ser peculiar saber que la adversidad potencia grandes hazañas, que los ratos amargos que envuelven muchas veces a los individuos, aumentan el deseo de organizarse colectivamente y mientras más se lucha, más difícil es abandonar la tierra, abandonar la casa, que se convierte luego en hogar cuando allí arraiga la vecindad, la familia y las raices. Un poco de eso, es lo que vamos perdiendo cuando empiezan a solventarse ciertas necesidades y con el tiempo, ya no se necesita del otro para complementarse; cuando un vínculo se rompe por la individualización o por el afán de los días es cuando hablamos de esa pérdida de identidad colectiva.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Por esta razón, en la presente investigación recurrimos al pasado para hallar ese ser, eso escencial que es La Aurora: potenciamos esa idea de Organización Comunitaria + Luchas Compartidas pero, añadiremos al final el término: Líderazgos, así, esta suma quedara concluída para obtener esa escencia más fiel. Es importante para concluír este texto, la mencion de aquellos liderazgos que fueron los motores escenciales para construír esta comunidad, algunos fueron colonos de este territorio y son nombrados con remembranza por quienes son sus sucesores: José Albino Soto y hermanos, Efrén Ramírez, Luis Eladio Soto, Pedro Luis Quintero, José Castaño, Rubén Castaño, Pedro Antonio Espinoza, Consuelo de Jesús Estrada, Alpidio Franco, Felipe Alzate, José Domingo Gómez, Eleodoro Franco, María Dolores Zuluaga, Joaquín Cardona, Gustavo Franco, Hernán Ramírez, Jorge Enrique Castaño, Fanny Betancur, Mariela de Jesús Espinoza Estrada, Domingo Arango, Luis Hernán Arango, Fabio Narváez, José Humberto Espinoza, Emilio Espinoza, entre otros habitantes quienes aportaron su granito de arena.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Las luchas todavía no terminan para esta comunidad, dado que la vereda se sueña con tener el espacio construido llamado: Caseta Comunal, proyecto que ha sido varias veces atrasado por distintos requisitos y trámites aún en proceso. Recientemente se puso en discusión el tema legal del colegio, ya que, de aquellos predios donados por la familia de Mariela Espinoza, la actual presidenta de la Junta de Acción Comunal, nunca se hicieron escrituras y este establecimiento educativo figura como propiedad de la Junta de Acción Comunal, no del municipio, lo que implica una gran deuda predial para La Junta de Acción Comunal. En suma, aún se lucha por nuevos sueños imposibles y a pesar de saber eso, los diferentes liderazgos todavía asumen una actitud positiva, paciente y resiliente ante el aparente sueño imposible; al día de hoy siguen siendo aquellos mismos, los que alguna vez emergieron de la nada, los que siguen luchando por la construcción de esos pocos sueños que les quedan, tal vez esperando entregarlos a alguien que recién camine en este mundo, porque una sola vida nunca es suficiente para los sueños imposibles. No queda más que preguntarle al lector, cuántos sueños comparte con su humanidad vecina, qué tanto se entera de lo que pasa a su alrededor y si asume una posición creadora o simplemente se resigna ante las cosas que quizá ve imposibles de cambiar...',
        },
      ],
    },
    {
      slug: 'agradecimientos',
      titulo: 'Agradecimientos',
      inicio: 33,
      fin: 33,
      paginaArchivo: 36,
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'Pienso que las palabras no alcanzan para agradecer a la presidenta de la Junta de Accion Comunal de la vereda La Aurora, Mariela de Jesús Espinoza Estrada, quien acompañó cada parte integral de este proceso, así mismo, ha sido una lideresa fundamental a lo largo de toda la trayectoria de este territorio, por esta razón, este texto es especialmente dedicado a ella.',
        },
        {
          tipo: 'parrafo',
          texto:
            'También quiero agradecer a los miembros de la Junta de Acción Comunal quienes participaron en los talleres de memoria de este proyecto y aportaron sus resultados para ser publicados en esta cartilla, ellos son: Idaly Zuluaga, Jesús David Ramírez, Stiven Zuluaga, Luz Adriana Ramírez, Leny Franco, Lety Quintero, Yenny Betancur, Liliana Franco, Ximena Martínez, Doralba Hernández, Maria del Socorro, Blanca Nubia.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Así mismo un agradecimiento para Isabel Cristina López Giraldo por su acompañamiento y orientación en los talleres de fotobordado.',
        },
        {
          tipo: 'parrafo',
          texto:
            'A Jorge Enrrique Castaño por el préstamo del espacio en el colegio para los talleres y por su entrevista.',
        },
        {
          tipo: 'parrafo',
          texto:
            'A Fabián Rendón Morales por las tomas aéreas registradas para el proyecto documental.',
        },
        {
          tipo: 'parrafo',
          texto:
            'A Fanny Betancur y Gustavo Franco por sus entrevistas para la documentación del proyecto.',
        },
        {
          tipo: 'parrafo',
          texto:
            'A Sebastián Pérez Rodríguez por el acompañamiento, apoyo esencial y composición musical del proyecto audiovisual.',
        },
        {
          tipo: 'parrafo',
          texto:
            'A Viviana Serna Arbeláez por aportar su obra artística para la gráfica de este proyecto.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Al Programa Municipal de Estímulos del Instituto de Cultura de El Carmen de Viboral por hacer realidad este proyecto y valorar los aportes de las comunidades rurales.',
        },
      ],
    },
    {
      slug: 'fuentes-y-bibliografia',
      titulo: 'Fuentes y Bibliografía',
      inicio: 34,
      fin: 34,
      paginaArchivo: 37,
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'Bachelard, G. (2000). La poética del espacio (F. González Aramburo, Trad.). Fondo de Cultura Económica. (Obra original publicada en 1957).',
        },
        {
          tipo: 'parrafo',
          texto:
            'Portelli, A. [2016]. El orden de otra historia: Conversaciones con la historia oral. Universidad Autónoma de Baja California).',
        },
        {
          tipo: 'parrafo',
          texto:
            'Gobernación de Antioquia. (10 de marzo de 2025). Resolución del 10 de marzo de 2025 (p. 9). Archivo de la Gobernación de Antioquia.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Ossa Zuluaga, J. J. (2020). Camino a la Vereda. Instituto de Cultura de El Carmen de Viboral.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Radio Nacional de Colombia. (20 de agosto de 2017). Radio Sutatenza: la primera revolución educativa del campo para el campo. https://www.radionacional.co/cultura/radio-sutatenza-la-primera-revolucion-educativa-del-campo-para-el-campo',
        },
        {
          tipo: 'parrafo',
          texto:
            'Rodríguez, P. (Ed.). (2008). Historia de la infancia en América Latina. Universidad Externado de Colombia.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Betancur, Fanny. (2026). Docente rural y líder comunitaria de la vereda La Aurora. Comunicación personal / Entrevista de campo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Castaño, Jorge Enrique. (2024). Líder comunitario y habitante de la vereda La Aurora. Comunicación personal / Entrevista de campo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Espinoza, Mariela de Jesús. (2026). Presidente de la Junta de Acción Comunal de la vereda La Aurora. Comunicación personal / Entrevista de campo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Franco, Gustavo. (2026). Habitante de la vereda La Aurora y exestudiante de las escuelas de Rivera y La Aurora. Comunicación personal / Entrevista de campo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Serna, V. (2026). Arropados por el paisaje. Ilustración, Tinta sobre papel, 15x20.',
        },
      ],
    },
  ] satisfies Capitulo[],
} as const;

export function getCapituloBySlug(slug: string): Capitulo | undefined {
  return revista.capitulos.find((capitulo) => capitulo.slug === slug);
}
