export interface Section {
  id: string;
  title: string;
  content: ContentBlock[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  sections: Section[];
}

export type ContentBlock =
  | { type: "heading"; level: 1 | 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "definition"; term: string; definition: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; variant: "info" | "warning" | "tip" | "example"; title?: string; content: string }
  | { type: "keypoint"; points: string[] };

export const chapters: Chapter[] = [
  {
    id: "arquitectura-1",
    number: 1,
    title: "Arquitectura Animal - Parte I",
    subtitle: "Biodiversidad del Mundo Viviente",
    sections: [
      {
        id: "biodiversidad",
        title: "Biodiversidad del Mundo Viviente",
        content: [
          { type: "heading", level: 1, text: "Arquitectura Animal - Parte I" },
          { type: "heading", level: 2, text: "Biodiversidad del Mundo Viviente" },
          { type: "callout", variant: "info", title: "Nota", content: "La vida fue unicelular durante 2500 millones de años." },
          { type: "paragraph", text: "Aparición de las cianobacterias provoca la aparición de O₂ en la atmósfera y, en consecuencia, la aparición de los eucariotas." },
          { type: "paragraph", text: "Se estima que son los organismos más próximos filogenéticamente a los animales actuales (metazoos). Los coanocitos (células flageladas que forman los poríferos) podrían haber derivado de los coanoflagelados ya que son idénticos. No obstante, no es demostrable esta convergencia evolutiva." },
          { type: "paragraph", text: "En el caso de los metazoos; tenemos unas colonias de tipo facultativo de Proterospongia (protistas) sin división de funciones ni tejidos diferenciados. Lo único que se observa son los coanocitos que son uno de los tipos celulares de las esponjas, los cuales son idénticos a los coanoflagelados." },
        ],
      },
      {
        id: "metazoos",
        title: "Metazoos",
        content: [
          { type: "heading", level: 2, text: "Metazoos" },
          { type: "paragraph", text: "Los animales son:" },
          { type: "list", items: [
            "Multicelulares: tienen células diferenciadas",
            "Heterótrofos y con capacidad de movimiento",
            "Derivan de un desarrollo embrionario característico",
            "Tienen ciclos diploides y espermatozoos"
          ]},
          { type: "paragraph", text: "Ventajas → Longevidad, éxito reproductivo, eficacia funcional, tamaño corporal" },
          { type: "heading", level: 3, text: "¿Cuántas maneras hay de ser \"animal\"?" },
          { type: "paragraph", text: "Se han descrito unos 34 Tipos de organización (=Fila) de Metazoos. Cada tipo responde a un diferente plan estructural = \"Bauplan\" = \"Body Plan\", es decir, a una diferente arquitectura animal." },
          { type: "paragraph", text: "Cada tipo construye su plan estructural siguiendo un proceso de desarrollo embrionario particular." },
          { type: "paragraph", text: "Los grupos (Fila) de Metazoos:" },
          { type: "list", items: [
            "Moluscos",
            "Artrópodos",
            "Cordados"
          ]},
        ],
      },
      {
        id: "formacion-animal",
        title: "Formación de un Animal",
        content: [
          { type: "heading", level: 2, text: "Formación de un Animal" },
          { type: "definition", term: "Opción 1", definition: "una masa de células ✗ no estarían suficientemente organizadas ni con suficientes células específicas como para considerarse animales. Además, se necesita una capa de células muy fina para poder hacer el intercambio de gases por difusión." },
          { type: "definition", term: "Opción 2", definition: "una capa de células — falta de oxigenación. (ej: Volvox)" },
          { type: "definition", term: "Opción 3", definition: "dos capas de células ✓ Sí funcionan para poder hacer el intercambio de gases por difusión." },
        ],
      },
      {
        id: "cavidades-corporales",
        title: "Cavidades Corporales",
        content: [
          { type: "heading", level: 2, text: "Cavidades Corporales" },
          { type: "paragraph", text: "Los triblásticos tienen problemas para evolucionar hacia un aumento de tamaño en la evolución." },
          { type: "definition", term: "Solución 1", definition: "hacerse alargados y planos." },
          { type: "definition", term: "Solución 2", definition: "tener cavidades con fluidos en movimiento. Además de ayudar al transporte y la difusión de sustancias, las cavidades facilitan el aumento de tamaño." },
          { type: "paragraph", text: "Tres modelos de metazoos triblásticos según las cavidades del cuerpo:" },
          { type: "definition", term: "Acelomados", definition: "sin cavidad, mesodermo compacto. ej: gusanos planos" },
          { type: "definition", term: "Pseudocelomados", definition: "con un falso sistema de cavidades (pseudoceloma) no envueltas por membrana. El pseudoceloma hace de esqueleto hidrostático para guardar fluidos y crea una presión homeostática. Como el intercambio de gases no se puede regular, tienen un sistema diseñado para conducir el tejido respiratorio. ej: nematodos" },
          { type: "definition", term: "Celomados", definition: "sistema de cavidades (celoma) envueltas por una membrana epitelial (mesotelio, peritoneo) y contienen líquidos internos importantes para procesos respiratorios, hormonales... El intercambio entre la cavidad y los tejidos se puede regular. ej: anélidos." },
        ],
      },
    ],
  },
  {
    id: "arquitectura-2",
    number: 2,
    title: "Arquitectura Animal - Parte II",
    subtitle: "Metamería y Sistemas Esqueléticos",
    sections: [
      {
        id: "metameria",
        title: "Metamería",
        content: [
          { type: "heading", level: 1, text: "Arquitectura Animal - Parte II" },
          { type: "heading", level: 2, text: "Metamería" },
          { type: "heading", level: 3, text: "Aumento de tamaño de un celomado" },
          { type: "paragraph", text: "Los celomados como anélidos tienen un segmento cefálico y uno de ano. Cada segmento se separa por septos originados por el mesodermo. Cada una de estas unidades funcionales se van multiplicando para aumentar el tamaño. Inicialmente cada segmento tiene la misma función pero a lo largo del desarrollo embrionario cada segmento se especializa en una actividad diferente." },
          { type: "definition", term: "Metamería", definition: "repetición seriada, en el eje antero-posterior, de partes del organismo = segmentación. Se llama metamería cuando la repetición es debida al rompimiento del mesodermo en piezas repetidas (somitos) durante el desarrollo embrionario." },
          { type: "callout", variant: "example", title: "Ejemplo", content: "Un anélido en su desarrollo iría replicando el mismo segmento diversas veces entre la boca y el ano. De esta manera consigue tener un tamaño más grande." },
        ],
      },
      {
        id: "simetria",
        title: "Tipos de Simetría",
        content: [
          { type: "heading", level: 2, text: "Tipos de Simetría" },
          { type: "table", headers: ["Tipo", "Ejes", "Ejemplos"], rows: [
            ["Asimetría", "Sin ejes definidos", "Esponjas"],
            ["Simetría radial", "Eje oral-aboral, eje dorso-ventral", "Cnidarios"],
            ["Simetría bilateral", "Eje antero-posterior, P. Sagital = P. longitudinal, P. Transversal", "La mayoría de animales"]
          ]},
          { type: "paragraph", text: "En animales con simetría bilateral se definen: Anterior, Posterior, Frontal, Sagital, Transversal." },
        ],
      },
      {
        id: "sistemas-esqueleticos",
        title: "Sistemas Esqueléticos",
        content: [
          { type: "heading", level: 2, text: "Sistemas Esqueléticos" },
          { type: "paragraph", text: "Los esqueletos tienen función sostenedora, locomotora (hacen de antagonista a la musculatura) y/o protectora. Los esqueletos pueden ser hidrostáticos o rígidos; un organismo puede tener los dos tipos:" },
          { type: "definition", term: "Hidrostáticos", definition: "se basan en la actuación de la musculatura sobre los fluidos y cavidades corporales, gracias a la presión hidrostática. Especialmente eficientes cuando la cavidad que hace de esqueleto está metamerizada, los metámeros separados permiten que una parte se aleje de la otra haciendo un movimiento ondulatorio que permite el desplazamiento. Son los únicos sistemas esqueléticos en muchos organismos acuáticos y en terrestres pequeños. ej: Anélidos." },
          { type: "definition", term: "Rígidos", definition: "Exoesqueleto (externo) o Endoesqueleto (interno)." },
        ],
      },
    ],
  },
  {
    id: "arquitectura-3",
    number: 3,
    title: "Arquitectura Animal - Parte III",
    subtitle: "Desarrollo Embrionario",
    sections: [
      {
        id: "desarrollo-embrionario",
        title: "Desarrollo Embrionario",
        content: [
          { type: "heading", level: 1, text: "Arquitectura Animal - Parte III" },
          { type: "heading", level: 2, text: "Desarrollo Embrionario" },
          { type: "paragraph", text: "Es lo que va desde la fertilización hasta la eclosión del huevo (nacimiento)." },
          { type: "heading", level: 3, text: "Segmentación" },
          { type: "paragraph", text: "El cigoto se segmenta en células denominadas blastómeros, sin aumentar su tamaño (mórula). El patrón de segmentación depende de la cantidad de vitelo." },
        ],
      },
      {
        id: "blastulacion-gastrulacion",
        title: "Blastulación - Gastrulación",
        content: [
          { type: "heading", level: 2, text: "Blastulación - Gastrulación" },
          { type: "table", headers: ["Proceso", "Descripción"], rows: [
            ["Blastulación", "En las primeras etapas, el embrión incrementa el número de células, pero el volumen queda igual (mórula). La blástula se forma cuando las células se desplazan a la periferia dejando una cavidad en el medio (blastocele). El embrión se estructura en una capa de células."],
            ["Gastrulación", "Proceso por el cual la blástula pasa al estadio de dos capas embrionarias (gástrula): los blastómeros se diferencian en ectodermo y endodermo dejando una nueva cavidad (arquénteron) que se abre al exterior por el blastóporo. Todos los metazoos pasan por un estadio equiparable a la gástrula."]
          ]},
        ],
      },
      {
        id: "protostomia-deuterostomia",
        title: "Protostomía y Deuterostomía",
        content: [
          { type: "heading", level: 2, text: "Protostomía y Deuterostomía" },
          { type: "paragraph", text: "La protostomía y la deuterostomía son procesos embriológicos diferentes evolutivamente para formar la boca de los celomados:" },
          { type: "definition", term: "Protostomía", definition: "La boca deriva del blastóporo (el ano puede derivar del blastóporo o no). Moluscos, anélidos y artrópodos." },
          { type: "definition", term: "Deuterostomía", definition: "La boca es de neoformación. En el extremo opuesto de los blastóporos. El ano puede derivar del blastóporo o no. Equinodermos, cordados." },
        ],
      },
      {
        id: "desarrollo-postembrionario",
        title: "Desarrollo Post-embrionario",
        content: [
          { type: "heading", level: 2, text: "Desarrollo Post-embrionario" },
          { type: "paragraph", text: "Procesos que van desde la eclosión hasta el estado adulto." },
          { type: "list", items: [
            "Desarrollo directo: no hay fase de larva (el embrión origina un juvenil)",
            "Desarrollo indirecto: con estadio larvario"
          ]},
          { type: "definition", term: "Larva", definition: "estadio con caracteres morfológicos diferentes a los del embrión y el adulto" },
          { type: "definition", term: "Metamorfosis", definition: "conjunto de cambios morfológicos en que se pierden los caracteres larvarios y se adquieren los de juvenil/adulto" },
        ],
      },
    ],
  },
  {
    id: "ctenoforos-placozoos",
    number: 4,
    title: "Ctenóforos, Placozoos y Origen de los Metazoos",
    subtitle: "Organismos Basales",
    sections: [
      {
        id: "introduccion",
        title: "Introducción",
        content: [
          { type: "heading", level: 1, text: "Ctenóforos, Placozoos y Origen de los Metazoos" },
          { type: "paragraph", text: "La complejidad morfológica no implica una posición alta en el árbol de la evolución." },
          { type: "paragraph", text: "Estos dos grupos son organismos muy basales, pero todavía no sabemos si los poríferos son más basales que los ctenóforos." },
        ],
      },
      {
        id: "ctenoforos",
        title: "Filo Ctenophora",
        content: [
          { type: "heading", level: 2, text: "Filo Ctenophora" },
          { type: "list", items: [
            "Durante mucho tiempo se creyó que eran diblásticos, igual que los cnidarios. Pero se observó que tienen una capa muscular entre medio, por lo tanto podrían ser triblásticos.",
            "Todos son marinos.",
            "La mayoría son pelágicos y algunos bentónicos. Son una parte importante del plancton gelatinoso.",
            "En general son carnívoros (macrófagos). Se alimentan de plancton, zooplancton y peces pequeños. Algunas formas grandes se alimentan de otros ctenóforos.",
            "La mayoría son hermafroditas, gónadas endodérmicas."
          ]},
        ],
      },
      {
        id: "larva-cidipode",
        title: "Larva Cidípode y Capas Embrionarias",
        content: [
          { type: "heading", level: 2, text: "Larva Cidípode y Capas Embrionarias" },
          { type: "paragraph", text: "Entre el cigoto y el adulto se pasa por la larva cidípode, que presenta estructuras ectodérmicas (los 4 Ctenerow), estructuras endodérmicas (de los canales meridionales hasta el anal) y estructuras que se cree que serían del mesénquima o mesodermo." },
        ],
      },
      {
        id: "placozoos",
        title: "Filo Placozoa",
        content: [
          { type: "heading", level: 2, text: "Filo Placozoa" },
          { type: "list", items: [
            "Organismos diblásticos",
            "Ameboides",
            "Marinos bentónicos",
            "Seis tipos celulares descritos (con diversos sub-tipos)",
            "Uniones celulares tipo desmosoma",
            "Sin sistema nervioso, músculos, ni sistema digestivo",
            "Trichoplax adhaerens descrito en 1883. Fue el único miembro conocido durante más de un siglo.",
            "Sorprendente diversidad de especies descubierta recientemente",
            "4 familias con nombres (con más genomas que especies descritas)"
          ]},
          { type: "paragraph", text: "Los placozoos comparten genética y bioquímica con otros filos de metazoos. Comparten varias familias de moléculas del desarrollo de estos como la señalización (Wnt, Runglent), adhesión celular..." },
        ],
      },
    ],
  },
  {
    id: "origen-metazoos",
    number: 5,
    title: "Origen y Radiación de los Invertebrados Marinos",
    subtitle: "Características y Origen de los Metazoos",
    sections: [
      {
        id: "caracteristicas-metazoa",
        title: "Características Metazoa",
        content: [
          { type: "heading", level: 1, text: "Origen y Radiación de los Invertebrados Marinos" },
          { type: "heading", level: 2, text: "Características Metazoa" },
          { type: "list", items: [
            "Organismos pluricelulares; células conectadas mediante moléculas de unión",
            "Heterótrofos por ingestión",
            "Factores especiales de señalización, adhesión y regulación transcripcional (cinasa C, Wnt, Frizzled, Hedgehog, EGFR, cadherina clásica, HOX, ETS y POU). Neurotransmisores RFamida y acetilcolina",
            "Componentes de la matriz extracelular (colágeno tipo IV, nidógeno y perlecán)",
            "Tipos especiales de espermatozoides",
            "Los óvulos se desarrollan a partir de una de las cuatro células de la meiosis, las otras tres se convierten en cuerpos polares y degeneran",
            "Embriogénesis especial: cigoto – blástula – gástrula – organogénesis",
            "Taxón monofilético, que contiene 35–40 filos",
            "Hasta ahora se han descrito unos 1,5 millones de especies vivas (estimadas no descritas 5–200)"
          ]},
        ],
      },
      {
        id: "origen",
        title: "Origen",
        content: [
          { type: "heading", level: 2, text: "Origen" },
          { type: "paragraph", text: "Se originaron en el Proterozoico hace unos 580 Ma, tenemos el primer registro fósil. No obstante, el Paleozoico es un periodo pobre en fósiles. Si no tenemos muchos fósiles, usaremos datos moleculares para inferir el árbol filogenético." },
        ],
      },
      {
        id: "fauna-cambrica",
        title: "Fauna Cámbrica",
        content: [
          { type: "heading", level: 2, text: "Fauna Cámbrica" },
          { type: "paragraph", text: "Gran mayoría de filos animales. La explosión Cámbrica produce:" },
          { type: "list", items: [
            "Aparición de los principales grupos de animales",
            "Aparición de ecosistemas tridimensionales complejos",
            "Origen de la dinámica fundamental de la biosfera marina"
          ]},
          { type: "paragraph", text: "Las causas de esta explosión fueron:" },
          { type: "list", items: [
            "Cambios climáticos: dejaron de haber glaciaciones, temperaturas son más altas. Aumento del nivel del mar",
            "Aumento del oxígeno disuelto en agua",
            "Biomineralización",
            "Fragmentación del supercontinente Rodinia",
            "Complejidad en hábitat y cadena trófica",
            "Competencia ecológica",
            "Aparición genes Hox (intervienen en la expresión diferencial de los ejes posteriores de un organismo, permite la evolución de organismos complejos), fibras de colágeno"
          ]},
        ],
      },
    ],
  },
  {
    id: "patologias-protistas",
    number: 6,
    title: "Patologías Causadas por Protistas",
    subtitle: "Protozoos Patógenos",
    sections: [
      {
        id: "parasitismo",
        title: "El Parasitismo",
        content: [
          { type: "heading", level: 1, text: "Patologías Causadas por Protistas" },
          { type: "paragraph", text: "El parasitismo es una relación interespecífica entre 2 individuos, el parásito llega a menudo a prescindir de los propios medios de supervivencia para pasar a depender obligadamente del huésped. Esta característica polifilética ha surgido en muchos momentos diferentes de la evolución." },
          { type: "paragraph", text: "Algunos patógenos pueden ser nocivos para cualquier tipo de huésped porque con la evolución han dejado de ser específicos." },
          { type: "paragraph", text: "Los protozoos pueden causar patologías tanto en animales como en plantas: pueden afectar a los humanos si estos son de consumo, pero no tienen por qué ser dañinos." },
          { type: "table", headers: ["Beneficiosos", "Patológicos"], rows: [
            ["Mineralización de los nutrientes al suelo y las aguas (Paramecium)", "Parásitos en plantas (Plasmopara: parásitos de las viñas) y animales (Eimeria: parásito en los pollos de consumo)"],
            ["Prevención de patógenos en el tratamiento de aguas (Vorticella)", "Parásitos del hombre (Trypanosoma)"],
            ["Toxicidad: las mareas rojas no son parásitos pero son tóxicas (Gonyaulax)", ""]
          ]},
        ],
      },
      {
        id: "tripanosoma",
        title: "Trypanosoma",
        content: [
          { type: "heading", level: 2, text: "Trypanosoma" },
          { type: "paragraph", text: "Trypanosoma brucei. Enfermedad del sueño. La enfermedad es endémica en África (subsahariana). Es la mosca tse-tse la que hace de vector. Es el mismo tripanosoma que afecta al ganado." },
          { type: "paragraph", text: "El tripanosoma evade el sistema inmunitario con la glucoproteína de superficie. La señal de infección se caracteriza por fluctuaciones periódicas del número de tripanosomas en sangre." },
          { type: "paragraph", text: "Trypanosoma cruzi. Aprox. los mismos efectos sobre el enfermo, pero el vector es una chinche, presente en toda Sudamérica. Causa más de 60.000 muertes anuales." },
          { type: "paragraph", text: "Leishmania. Se encuentra en regiones temperadas y tropicales, según los vectores y las especies. Causa entre 75 y 80.000 muertes anuales. En Cataluña existe una subespecie, Leishmania infantum, que afecta a perros y hombres (si el sistema inmunitario tiene alguna deficiencia). El vector es una mosca." },
        ],
      },
      {
        id: "apicomplexos",
        title: "Apicomplejos",
        content: [
          { type: "heading", level: 2, text: "Apicomplejos" },
          { type: "paragraph", text: "Complejo apical, que les sirve para hacer incisiones allá donde se quieren incrustar. No tienen flagelos, sólo cuando son gámetas. Si son alveolados, pueden tener escisión múltiple. Meiosis zigomática." },
          { type: "paragraph", text: "Estructura del complejo apical: anillos conoidales, conoide, anillo polar, micronemas (orgánulos pareados), microporo, roptrias, cuerpo de Golgi, alveolos, nucleo, mitocondria, retículo endoplasmático, anillo posterior, sitio de exocitosis." },
        ],
      },
      {
        id: "malaria",
        title: "Malaria - Plasmodium",
        content: [
          { type: "heading", level: 2, text: "Malaria - Plasmodium" },
          { type: "paragraph", text: "Ciclo vital de Plasmodium (malaria): Si un mosquito pica, los gametocitos dan 8 microgámetas, o una macro, seguido de una fecundación. Esta fecundación deriva en un cigoto móvil, oocigoto, que migra hacia los tejidos del alrededor del estómago del insecto con un movimiento ameboide, atraviesa el epitelio del tubo digestivo y se enquista." },
          { type: "paragraph", text: "Después se produce la meiosis y mitosis subsiguientes, dando lugar a los esporozoítos. Estos migran hasta las glándulas salivales del insecto, donde esperan para infectar a otro huésped." },
          { type: "heading", level: 3, text: "Sintomatología y Patología" },
          { type: "paragraph", text: "Causa fiebres periódicas, se producen sincrónicamente cuando se revientan los eritrocitos y salen los merozoítos. Anemia y diarreas. Oclusión capilar del SNC. Riñón = muerte." },
          { type: "heading", level: 3, text: "Prevención (Profilaxis)" },
          { type: "list", items: [
            "Quimioprofilaxis",
            "Vector: Insecticidas (DDT), Peces: gambusias, Mallas, repelentes, ropa adecuada",
            "Vacunas: RTS,S Mosquirix con un 30-50% de eficacia. Será más extendida de los CME"
          ]},
        ],
      },
    ],
  },
  {
    id: "poriferos",
    number: 7,
    title: "Poríferos (Esponjas)",
    subtitle: "Filo Porifera",
    sections: [
      {
        id: "caracteristicas",
        title: "Características Generales",
        content: [
          { type: "heading", level: 1, text: "Poríferos (Esponjas)" },
          { type: "paragraph", text: "Todos los organismos deben defenderse, por eso es más habitual encontrar organismos sésiles (invertebrados marinos) que contengan compuestos con actividad biológica, como las esponjas, los cnidarios y las ascidias (el 80% de los invertebrados presentan esta característica)." },
          { type: "heading", level: 2, text: "Tipos Celulares" },
          { type: "list", items: [
            "PINACOCITOS: células aplanadas que forman la capa externa (pinacodermo)",
            "POROCITOS: células con poro que regula entrada de agua (solo Ascon)",
            "COANOCITOS: células con flagelo y collar de microvellosidades. Responsables de crear corriente de agua y captar partículas",
            "ARQUEOCITOS: células totipotentes en el mesohilo. Pueden diferenciarse en otros tipos celulares",
            "ESCLEROCITOS: células que secretan espículas",
            "ESPONJOCITOS: células que secretan fibras de espongina"
          ]},
        ],
      },
      {
        id: "canales",
        title: "Canales",
        content: [
          { type: "heading", level: 2, text: "Canales" },
          { type: "paragraph", text: "MIOCITOS → Células contráctiles. Pueden hacer variar el tamaño de los canales. Pueden hacer inflar/desinflar un individuo. Con microtúbulos y microfilamentos en el citoplasma (equivalente a células musculares porque no son sensibles a estímulos eléctricos). Respuesta lenta." },
        ],
      },
      {
        id: "nutricion",
        title: "Nutrición",
        content: [
          { type: "heading", level: 2, text: "Nutrición" },
          { type: "paragraph", text: "Basada en el sistema acuífero. Por los porocitos o los poros inhalantes entran los diferentes tipos de partículas con diferentes tamaños, pero hay un tamaño máximo de partícula (las partículas pueden ser M.O. o M.I.)." },
          { type: "paragraph", text: "Antes de entrar al sistema de coanocitos, en los canales inhalantes (excepto ascon), se pueden seleccionar partículas por los arqueocitos. Otras células también pueden fagocitar partículas, sobre todo las que se encuentran cerca de los canales del sistema acuífero." },
          { type: "callout", variant: "info", title: "Digestión intracelular", content: "Partículas menores de 1 μm. Excreción (amoniaco) por difusión simple." },
        ],
      },
      {
        id: "tipos-estructurales",
        title: "Tipos Estructurales",
        content: [
          { type: "heading", level: 2, text: "Tipos Estructurales" },
          { type: "table", headers: ["Tipo", "Características"], rows: [
            ["Ascon", "Estructura más simple. Coanocitos recubren el atrio."],
            ["Sicon", "Pared plegada formando canales radiales con coanocitos."],
            ["Leucon", "Coanocitos en cámaras esféricas. Mayor complejidad y eficiencia."]
          ]},
        ],
      },
    ],
  },
  {
    id: "cnidarios",
    number: 8,
    title: "Cnidarios",
    subtitle: "Filo Cnidaria",
    sections: [
      {
        id: "caracteristicas",
        title: "Características Generales",
        content: [
          { type: "heading", level: 1, text: "Cnidarios" },
          { type: "paragraph", text: "Contiene un opérculo, y sale disparado el filamento que se encuentra dentro y captura la presa. Diferentes funciones: adhesivos, penetrantes, envolventes y algunos venenosos." },
          { type: "paragraph", text: "Hay una parte de la célula que es sensible, el cnidocilio, que cuando lo tocamos permite la abertura del opérculo y sale el filamento." },
          { type: "heading", level: 2, text: "Anatomía y Morfología" },
          { type: "definition", term: "Epidermis", definition: "células epiteliomusculares con fibras contráctiles. Las células se ramifican hacia el interior. La capa más exterior sería de miofibrilas longitudinales y el interior, miofibrilas circulares." },
          { type: "definition", term: "Gastrodermis", definition: "células nutritivo-musculares y flageladas, fagocíticas. Tienen capacidad de mover el agua con el flagelo y capturar fragmentos de lo que se ha ingerido." },
          { type: "definition", term: "Mesoglea", definition: "capa gelatinosa acelular intermedia" },
          { type: "paragraph", text: "Podemos encontrar células sensoriales en la parte exterior e interior, que están en contacto con células del sistema nervioso." },
        ],
      },
      {
        id: "arrecifes",
        title: "Arrecifes de Coral",
        content: [
          { type: "heading", level: 2, text: "Arrecifes de Coral" },
          { type: "callout", variant: "warning", title: "Sistema amenazado", content: "Los arrecifes coralinos son un sistema amenazado principalmente por la temperatura. Los cnidarios no soportan el aumento descontrolado de algas a causa del aumento de fotosíntesis, de manera que las expulsan (blanqueamiento) y en consecuencia mueren." },
        ],
      },
      {
        id: "clase-hydrozoa",
        title: "Clase Hydrozoa",
        content: [
          { type: "heading", level: 2, text: "Clase Medusozoa" },
          { type: "heading", level: 3, text: "1. Subcl. Hydrozoa" },
          { type: "list", items: [
            "Altísima diversidad, especies marinas y algunas de agua dulce",
            "Ciclo vital con alternancia de generaciones: pólipos asexuados y medusas sexuadas",
            "Cavidad gastrodérmica no tabicada",
            "Gastrodermis sin cnidocitos (cnidocitos sólo en epidermis)",
            "Gónadas generalmente de origen epidérmico, básicamente al exterior (a diferencia de las otras clases de cnidarios)",
            "Reproducción asexual por germinación"
          ]},
        ],
      },
    ],
  },
  {
    id: "platelmintos",
    number: 9,
    title: "Platelmintos (Gusanos Planos)",
    subtitle: "Tema 4 - Platihelmints",
    sections: [
      {
        id: "introduccion",
        title: "Introducción",
        content: [
          { type: "heading", level: 1, text: "Tema 4 - Platelmintos (Gusanos Planos)" },
          { type: "paragraph", text: "Forman parte de los bilaterales (morfología dorsiventral). A partir de la búsqueda del alimento se introduce el concepto de bilateral, y la diferenciación de una región anterior y una posterior." },
          { type: "paragraph", text: "Nephrozoa, grupo de animales que tienen sistema excretor. Dentro de estos diferenciamos 2 grupos según el desarrollo embrionario: Deuterostomía (orificio primario no genera boca) y Protostomía (orificio primario sí genera boca)." },
          { type: "paragraph", text: "Dentro de los Spirallia: segmentación del huevo es espiral." },
        ],
      },
      {
        id: "ciclo-clonorchis",
        title: "Ciclo Vital de Clonorchis sinensis",
        content: [
          { type: "heading", level: 2, text: "Ciclo Vital de Clonorchis sinensis (clonorquiosis)" },
          { type: "paragraph", text: "En los conductos biliares generará huevos con miracidio que irán a parar al exterior. Una vez está dentro del huésped intermediario 1r, en este caso un caracol, el huevo comienza a desarrollarse." },
          { type: "paragraph", text: "Primero sale una larva miracidio. Esta cambia y se transforma en un esporocisto, estructura más grande, en su interior se comienzan a generar redias (nuevos individuos). Todavía dentro del caracol, las redias dan a una nueva generación asexual, las cercarias." },
          { type: "paragraph", text: "Estas buscarán a otro huésped intermediario, en este caso un pez y se enquistan, dando metacercarias enquistadas. El huésped definitivo sería un mamífero que ingiere el pez infectado." },
          { type: "paragraph", text: "La infección de Clonorchis puede derivar en un cáncer. Muy común en regiones que tienen dietas ricas en pescado crudo." },
        ],
      },
    ],
  },
  {
    id: "anelidos",
    number: 10,
    title: "Anélidos",
    subtitle: "Gusanos Segmentados",
    sections: [
      {
        id: "plan-corporal",
        title: "Plan Corporal",
        content: [
          { type: "heading", level: 1, text: "Anélidos" },
          { type: "heading", level: 2, text: "Plan Corporal" },
          { type: "table", headers: ["Región", "Características"], rows: [
            ["Cabeza", "Prostomio: 1r segmento. Puede portar antenas, palpos táctiles (ojos), cirros peristomiales. Peristomio: 2n segmento. Se abre la boca, esta puede contener una faringe musculosa que puede ser retráctil y una mandíbula."],
            ["Tronco", "Pueden tener cirros ventrales o dorsales. Cirros foliares paralelos al cuerpo. Élitros perpendiculares. Se pueden generar branquias, estructura muy ramificada para el intercambio de gases."],
            ["Pigidio", "Segmento final"]
          ]},
          { type: "paragraph", text: "Parapodio: estructura con notopodio (dorsal), neuropodio (ventral), quetas, cirros y acícula." },
        ],
      },
      {
        id: "corte-transversal",
        title: "Corte Transversal",
        content: [
          { type: "heading", level: 2, text: "Corte Transversal" },
          { type: "paragraph", text: "Tienen unos ciegos estomacales donde se hace la digestión. También ciegos intestinales." },
          { type: "paragraph", text: "Celoma obliterado (pseudoceloma), relleno de células, no es una estructura líquida que permitiera encogirse. Estos no necesitan hacer este movimiento. Tienen un celoma muy reducido." },
          { type: "paragraph", text: "3 cortes de digestivo corresponden a un tubo y 2 ciegos." },
        ],
      },
    ],
  },
  {
    id: "moluscos",
    number: 11,
    title: "Moluscos",
    subtitle: "Filo Mollusca",
    sections: [
      {
        id: "radula",
        title: "Rádula",
        content: [
          { type: "heading", level: 1, text: "Moluscos" },
          { type: "paragraph", text: "Al inicio los moluscos eran micrófagos (muchos dientes en fila). Van poder convertirse en filtradores con la rádula reducida o ausente como los bivalvos y algunos gasterópodos, y carnívoros con pocos dientes y grandes." },
          { type: "paragraph", text: "Rádula toxoglosa es un tipo de rádula típica de algunos gasterópodos afilada y venenosa." },
          { type: "callout", variant: "warning", title: "Importante", content: "NO confundir rádula con mandíbulas. Muchos moluscos tienen estas estructuras endurecidas para pellizcar y desgarrar, y dentro tienen la rádula." },
        ],
      },
      {
        id: "cavidad-palial",
        title: "Cavidad Palial",
        content: [
          { type: "heading", level: 2, text: "Cavidad Palial" },
          { type: "paragraph", text: "Es donde se abocan los productos de excreción, los gametos y los gases. Confiere protección a los ctenidios." },
          { type: "paragraph", text: "En el interior tienen los osfradios (quimiorreceptor) y glándulas defensivas." },
          { type: "paragraph", text: "Tienen 3 poros: anal, nefróporo y gonóporo." },
        ],
      },
      {
        id: "aparato-digestivo",
        title: "Aparato Digestivo",
        content: [
          { type: "heading", level: 2, text: "Aparato Digestivo" },
          { type: "paragraph", text: "Tubo digestivo con boca y rádula. Estómago con saco del estilo (varilla gelatinosa de enzimas digestivos). Hepatopáncreas (glándula digestiva)." },
        ],
      },
      {
        id: "bivalvos",
        title: "Bivalvos",
        content: [
          { type: "heading", level: 2, text: "Bivalvos" },
          { type: "paragraph", text: "Charnera: punto donde se unen las 2 valvas:" },
          { type: "list", items: [
            "Taxodonta: numerosos dientes iguales y paralelos.",
            "Heterodonta: 2-3 dientes centrales (cardinales) bajo el umbo de la concha y dientes laterales alargados por delante y detrás de los cardinales."
          ]},
          { type: "heading", level: 3, text: "Circulación del agua y filtración de partículas alimentarias" },
          { type: "paragraph", text: "En el cordón alimentario mucoso queda todo el alimento enganchado. El agua entra por el sifón inhalante. Los cilios de las branquias captan las partículas alimentarias y las dirigen hacia el surco alimentario. Las partículas alimentarias embolcalladas en mucus son transportadas por movimientos ciliares hacia la boca. El agua sale por el sifón exhalante." },
        ],
      },
      {
        id: "torsion-gasteropodos",
        title: "Torsión en Gasterópodos",
        content: [
          { type: "heading", level: 2, text: "Torsión en Gasterópodos" },
          { type: "paragraph", text: "Efectos anatómicos:" },
          { type: "list", items: [
            "Pérdida de una gónada",
            "Pérdida simetría bilateral (desplazamiento de las vísceras hacia la izquierda)",
            "Pérdida de un ctenidio",
            "Pérdida de la branquia, aurícula y nefrídio derechos",
            "Desarrollo del sifón (inhalante)"
          ]},
        ],
      },
    ],
  },
  {
    id: "briozoos",
    number: 12,
    title: "Briozoos y Otros Filos",
    subtitle: "Lofoforados y Ecdisozoos",
    sections: [
      {
        id: "briozoos",
        title: "Briozoos",
        content: [
          { type: "heading", level: 1, text: "Briozoos y Otros Filos" },
          { type: "heading", level: 2, text: "Briozoos" },
          { type: "paragraph", text: "Autozooides: \"normales\" que alimentan a la colonia." },
          { type: "paragraph", text: "Heterozooides: tienen funciones especializadas:" },
          { type: "list", items: [
            "Avicularias: en forma de pico, defensa, evitar que epibiontes se posen sobre ellos.",
            "Vibracularias: sirven para avanzar en aquellos grupos que son móviles.",
            "Cenozooides: soporte.",
            "Nanozooides: limpieza.",
            "Espinozooides: defensa.",
            "Gonozooides: especialmente importante los que presentan ovicelda, que es donde se incorpora el embrión y donde se incubará hasta que se libere la larva."
          ]},
        ],
      },
      {
        id: "nutricion-briozoos",
        title: "Nutrición de Briozoos",
        content: [
          { type: "heading", level: 2, text: "Nutrición" },
          { type: "paragraph", text: "Activa: el tentáculo se mueve cuando detecta una presa porque entra el corriente central. Succión de la faringe. Pedrer muscular permite la trituración de partículas." },
        ],
      },
      {
        id: "otros-filos",
        title: "Otros Filos Menores",
        content: [
          { type: "heading", level: 2, text: "Otros Filos Menores" },
          { type: "heading", level: 3, text: "Scalidophora (Cephalorhyncha)" },
          { type: "paragraph", text: "Introvert con espinas o escálidas dispuestas en círculos. Presentan dos anillos de músculos retractores del introvert." },
          { type: "heading", level: 3, text: "Phylum Priapulida" },
          { type: "paragraph", text: "Cuerpo vermiforme (0,05 a 20cm), dividido en: Introvert, Tronco, Plumón caudal (respiratorio y quimiorreceptor). Sin sistema circulatorio. Sistema urogenital (protonefridios asociados a las gónadas). Dioicos; un par de gónadas; fecundación externa. Desarrollo indirecto. Marinos, bentónicos, excavadores, tubícolas. Viven en sedimentos donde forman galerías." },
        ],
      },
    ],
  },
  {
    id: "vocabulario",
    number: 13,
    title: "Vocabulario",
    subtitle: "Términos Clave",
    sections: [
      {
        id: "terminos",
        title: "Términos y Definiciones",
        content: [
          { type: "heading", level: 1, text: "Vocabulario" },
          { type: "definition", term: "Filo", definition: "categoría taxonómica con rango más alto después de reino. Un filo hace referencia al plan corporal. Hay una serie de características compartidas que los agrupa, aunque sean organismos muy diferentes. reino → filo → clase" },
          { type: "definition", term: "Árbol filogenético", definition: "intenta reproducir cuáles son las relaciones filogenéticas, antepasado común que va a dar diferentes descendientes. Se agrupan según el origen evolutivo." },
          { type: "definition", term: "Arquetipo", definition: "reconstrucción de un organismo que ha existido (ancestro)." },
          { type: "definition", term: "Sinapomorfia", definition: "característica que comparten todos los individuos del grupo incluyendo el antepasado común." },
          { type: "definition", term: "Apomorfia", definition: "carácter derivado" },
          { type: "definition", term: "Grupo monofilético", definition: "todos los organismos que derivan de un antepasado común" },
          { type: "definition", term: "Grupo polifilético", definition: "no germanos, no comparten antepasado" },
        ],
      },
    ],
  },
];

export function getChapterById(chapterId: string): Chapter | undefined {
  return chapters.find((c) => c.id === chapterId);
}

export function getSectionById(chapterId: string, sectionId: string): Section | undefined {
  const chapter = getChapterById(chapterId);
  return chapter?.sections.find((s) => s.id === sectionId);
}

export function getNextSection(
  chapterId: string,
  sectionId: string
): { chapterId: string; sectionId: string } | null {
  const chapterIndex = chapters.findIndex((c) => c.id === chapterId);
  if (chapterIndex === -1) return null;
  const chapter = chapters[chapterIndex];
  const sectionIndex = chapter.sections.findIndex((s) => s.id === sectionId);
  if (sectionIndex === -1) return null;
  const nextSection = chapter.sections[sectionIndex + 1];
  if (nextSection) {
    return { chapterId: chapter.id, sectionId: nextSection.id };
  }
  const nextChapter = chapters[chapterIndex + 1];
  if (nextChapter && nextChapter.sections[0]) {
    return { chapterId: nextChapter.id, sectionId: nextChapter.sections[0].id };
  }
  return null;
}

export function getPreviousSection(
  chapterId: string,
  sectionId: string
): { chapterId: string; sectionId: string } | null {
  const chapterIndex = chapters.findIndex((c) => c.id === chapterId);
  if (chapterIndex === -1) return null;
  const chapter = chapters[chapterIndex];
  const sectionIndex = chapter.sections.findIndex((s) => s.id === sectionId);
  if (sectionIndex === -1) return null;
  const prevSection = chapter.sections[sectionIndex - 1];
  if (prevSection) {
    return { chapterId: chapter.id, sectionId: prevSection.id };
  }
  const prevChapter = chapters[chapterIndex - 1];
  if (prevChapter && prevChapter.sections.length > 0) {
    const last = prevChapter.sections[prevChapter.sections.length - 1];
    return { chapterId: prevChapter.id, sectionId: last.id };
  }
  return null;
}
