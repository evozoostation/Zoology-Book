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
    title: "Arquitectura Animal — Parte I",
    subtitle: "Biodiversidad y origen de los metazoos",
    sections: [
      {
        id: "biodiversidad",
        title: "Biodiversidad del mundo viviente",
        content: [
          { type: "heading", level: 2, text: "Biodiversidad del mundo viviente" },
          { type: "paragraph", text: "La vida fue unicelular durante más de 2.500 millones de años. Todo cambió cuando las cianobacterias comenzaron a liberar oxígeno a la atmósfera. Ese gas, tóxico para muchos organismos primitivos, resultó ser el combustible que permitiría el salto hacia formas de vida más complejas: los eucariotas." },
          { type: "paragraph", text: "Más tarde, hace unos 541 millones de años, se produjo la llamada Explosión del Cámbrico. En un lapso geológicamente breve, aparecieron prácticamente todos los grandes grupos de animales que conocemos hoy. Es el momento fundacional de la biodiversidad animal." },
          { type: "callout", variant: "info", title: "¿Sabías que...?", content: "Los coanoflagelados son los parientes unicelulares más cercanos a los animales. Sus colonias nos dan pistas de cómo pudo surgir la pluricelularidad." }
        ]
      },
      {
        id: "que-es-un-metazoo",
        title: "¿Qué es un metazoo?",
        content: [
          { type: "heading", level: 2, text: "Los verdaderos animales" },
          { type: "paragraph", text: "Cuando hablamos de animales (o metazoos) nos referimos a organismos pluricelulares que comparten un puñado de rasgos esenciales. Son heterótrofos, es decir, se alimentan de materia orgánica producida por otros seres vivos. Sus células se agrupan en tejidos especializados, y su desarrollo embrionario sigue un guion muy parecido en todos ellos: del cigoto a la blástula, de la blástula a la gástrula, y de ahí a la complejidad de órganos y sistemas." },
          { type: "paragraph", text: "Una de las grandes ventajas de ser pluricelular es que se pueden alcanzar tamaños mayores, vivir más años y repartir el trabajo entre células especializadas. Cada tipo celular hace lo que mejor sabe, y todas colaboran para que el conjunto funcione." },
          { type: "heading", level: 3, text: "El plan estructural (Bauplan)" },
          { type: "paragraph", text: "Cada filo animal responde a una arquitectura interna diferente: a eso los biólogos llaman «Bauplan» o plan estructural. Por ejemplo, los moluscos tienen un pie muscular, un manto y una concha, mientras que los artrópodos presentan un exoesqueleto articulado. Se han descrito unos 34 filos de metazoos, y cada uno es una solución única al problema de cómo organizar un cuerpo." }
        ]
      },
      {
        id: "formacion-animal",
        title: "¿Cómo se forma un animal?",
        content: [
          { type: "heading", level: 2, text: "De una masa de células a un cuerpo organizado" },
          { type: "paragraph", text: "Los primeros animales eran muy simples. Para entender su origen podemos imaginar distintos niveles de organización:" },
          { type: "definition", term: "Opción 1 — Masa maciza de células", definition: "No funcionaría: las células del interior quedarían aisladas del exterior, sin oxígeno ni nutrientes. El intercambio de gases por difusión solo es eficaz en capas muy finas." },
          { type: "definition", term: "Opción 2 — Una sola capa de células", definition: "Tampoco es suficiente. El famoso alga verde Volvox forma esferas huecas de una sola capa, pero no puede complejizarse más porque carece de un interior especializado." },
          { type: "definition", term: "Opción 3 — Dos capas de células", definition: "Aquí sí hay un avance: una capa externa (ectodermo) que protege y otra interna (endodermo) que recubre una cavidad digestiva. Así funcionan los cnidarios (como las medusas) y las esponjas. Es el nivel de los diploblásticos." },
          { type: "definition", term: "Opción 4 — Tres capas", definition: "La gran revolución: añadir el mesodermo, una capa media que dará lugar a músculos, esqueleto, sistema circulatorio... La mayoría de los animales actuales somos triblásticos." }
        ]
      },
      {
        id: "cavidades-corporales",
        title: "Cavidades corporales",
        content: [
          { type: "heading", level: 2, text: "El problema de crecer" },
          { type: "paragraph", text: "Cuando un animal triblástico quiere ser más grande, la difusión interna se vuelve insuficiente. La evolución encontró dos soluciones principales:" },
          { type: "list", items: [ "Aplanarse y alargarse (como los gusanos planos), para maximizar la superficie en contacto con el exterior.", "Desarrollar cavidades internas llenas de líquido que sirvan como esqueleto hidrostático y permitan el transporte de sustancias." ] },
          { type: "heading", level: 3, text: "Según las cavidades, distinguimos tres modelos:" },
          { type: "definition", term: "Acelomados", definition: "No tienen cavidad interna. El mesodermo es compacto. Ejemplo: los platelmintos (gusanos planos)." },
          { type: "definition", term: "Pseudocelomados", definition: "Poseen una cavidad (pseudoceloma) que no está rodeada por un epitelio propio. Actúa como esqueleto hidrostático y permite cierta compartimentación. Ejemplo: los nematodos." },
          { type: "definition", term: "Celomados", definition: "Son los más complejos. El celoma es una cavidad verdadera tapizada por un epitelio de origen mesodérmico (peritoneo). Allí dentro pueden alojarse órganos, circular fluidos y regular el intercambio con los tejidos. Ejemplo: anélidos, moluscos, artrópodos y nosotros mismos." },
          { type: "callout", variant: "tip", title: "Un detalle importante", content: "El pseudoceloma deriva del blastocele (la cavidad del embrión temprano). El celoma, en cambio, es una cavidad de nueva formación. Muchos animales tienen ambos tipos a la vez: espacios pseudocelómicos que funcionan como hemoceloma (sistema circulatorio abierto)." }
        ]
      },
      {
        id: "simetria-corporal",
        title: "Simetría corporal",
        content: [
          { type: "heading", level: 2, text: "La huella del estilo de vida" },
          { type: "paragraph", text: "La simetría de un animal nos habla de cómo se mueve y cómo percibe el mundo." },
          { type: "definition", term: "Asimetría", definition: "Sin ningún plano de simetría. Es rara y típica de formas muy irregulares, como algunas esponjas." },
          { type: "definition", term: "Simetría radial", definition: "Cuerpo organizado alrededor de un eje central, como una rueda. La tienen animales sésiles (pólipos) o que flotan a la deriva (medusas). Reciben estímulos de todas direcciones y sus órganos sensoriales están repartidos uniformemente." },
          { type: "definition", term: "Simetría bilateral", definition: "Un solo plano sagital divide el cuerpo en dos mitades especulares (derecha e izquierda). Implica una dirección preferente de movimiento: la cabeza va delante, con los órganos sensoriales concentrados (cefalización). Es el plan ganador de los animales activos y depredadores." },
          { type: "paragraph", text: "La simetría bilateral aparece con los triblásticos y está estrechamente ligada a la búsqueda activa de alimento. También conllevó la aparición de una región anterior (cabeza) y otra posterior, así como una espalda (dorso) y un vientre (vientre)." }
        ]
      },
      {
        id: "metameria",
        title: "Metamería: la segmentación del cuerpo",
        content: [
          { type: "heading", level: 2, text: "Repetir para crecer y especializarse" },
          { type: "paragraph", text: "Cuando un animal celomado quiere aumentar de tamaño sin perder eficacia, una estrategia brillante es repetir una misma unidad básica a lo largo del eje del cuerpo. Cada unidad, o metámero, contiene su porción de celoma, músculos, nervios y a veces órganos repetidos. Esto se llama metamería." },
          { type: "paragraph", text: "Un ejemplo claro son los anélidos, como la lombriz de tierra: su cuerpo parece una sucesión de anillos casi idénticos. Pero la evolución permite que esos metámeros se especialicen en distintas funciones: unos para la alimentación, otros para la reproducción, etc. Cuando aparecen regiones claramente diferenciadas (cabeza, tórax, abdomen) hablamos de tagmatización." },
          { type: "definition", term: "Metamería homónoma", definition: "Todos los segmentos son muy parecidos entre sí (excepto el primero y el último). Típica de lombrices y algunos poliquetos." },
          { type: "definition", term: "Metamería heterónoma", definition: "Los segmentos se agrupan en regiones especializadas (tagmas). La encontramos en artrópodos (cabeza, tórax y abdomen) y también en vertebrados (columna vertebral, costillas, músculos segmentados)." },
          { type: "callout", variant: "warning", title: "Cuidado con la pseudometamería", content: "No confundir con repeticiones seriadas que no proceden del mesodermo segmentado. Por ejemplo, las tenias parecen segmentadas, pero sus proglótides no son metámeros verdaderos. Eso es pseudometamería." }
        ]
      },
      {
        id: "esqueletos",
        title: "Esqueletos: soporte y movimiento",
        content: [
          { type: "heading", level: 2, text: "Tres maneras de sujetar el cuerpo" },
          { type: "paragraph", text: "Los animales necesitan una estructura que les dé forma, sostenga los músculos y permita el movimiento. La evolución ha fabricado tres tipos básicos de esqueleto." },
          { type: "definition", term: "Esqueleto hidrostático", definition: "Es el más sencillo: una cavidad llena de líquido rodeada de músculos. Al contraer los músculos se genera presión y el cuerpo se mueve. Es muy eficaz en medios acuáticos y en animales pequeños. Lo usan los cnidarios, los gusanos planos, los nematodos y los anélidos." },
          { type: "definition", term: "Exoesqueleto", definition: "Cubierta rígida externa segregada por la epidermis. Protege al animal, pero limita el crecimiento (hay que mudarlo periódicamente). Ejemplos: concha de moluscos, caparazón de artrópodos (quitina)." },
          { type: "definition", term: "Endoesqueleto", definition: "Estructura interna mineralizada (huesos o cartílago) o de otro material. Permite un crecimiento continuo y un anclaje profundo de los músculos. Es propio de equinodermos (placas calcáreas) y vertebrados." },
          { type: "paragraph", text: "Muchos animales combinan dos tipos. Por ejemplo, los anélidos tienen esqueleto hidrostático, pero también quetas (estructuras rígidas) que les ayudan a anclarse. Y los moluscos tienen concha (exoesqueleto) pero también su cuerpo blando se mantiene gracias a la presión de sus fluidos." }
        ]
      },
      {
        id: "metazoos-coloniales",
        title: "Metazoos coloniales y polimorfismo",
        content: [
          { type: "heading", level: 2, text: "Cuando varios individuos se unen en uno solo" },
          { type: "paragraph", text: "Algunos animales forman colonias en las que los individuos (zooides) son genéticamente idénticos (clones) y permanecen físicamente unidos. Viven como una especie de superorganismo." },
          { type: "paragraph", text: "El polimorfismo colonial ocurre cuando los zooides se especializan en distintas tareas: unos se dedican a la alimentación (gastrozooides), otros a la reproducción (gonozooides) y otros a la defensa (dactilozooides). Es un paso hacia la integración de un verdadero organismo único." },
          { type: "paragraph", text: "En los metazoos modulares, la individualidad de cada zooide se difumina tanto que apenas se distingue dónde empieza uno y termina el otro. Es común en esponjas y cnidarios (como los corales)." }
        ]
      },
      {
        id: "desarrollo-embrionario",
        title: "Desarrollo embrionario",
        content: [
          { type: "heading", level: 2, text: "Del huevo al animal" },
          { type: "paragraph", text: "El desarrollo embrionario es uno de los rasgos más conservados de los metazoos. Comienza con la fecundación, sigue con segmentaciones sucesivas (sin aumentar el tamaño, solo el número de células) y culmina con la formación de las capas embrionarias." },
          { type: "heading", level: 3, text: "Segmentación" },
          { type: "paragraph", text: "El patrón de segmentación depende de la cantidad y distribución del vitelo (la yema). Los huevos con poco vitelo (oligolecíticos) se dividen por completo (segmentación holoblástica). Los que tienen mucho vitelo (polilecíticos) solo se dividen parcialmente (segmentación meroblástica)." },
          { type: "heading", level: 3, text: "Gastrulación" },
          { type: "paragraph", text: "En la blástula las células se disponen en la periferia dejando una cavidad central (blastocele). Luego, una invaginación forma el arquénteron (futuro intestino) y el blastoporo (el primer orificio). Así nacen el ectodermo (exterior) y el endodermo (interior)." },
          { type: "heading", level: 3, text: "Protóstomos y deuteróstomos" },
          { type: "paragraph", text: "En los protóstomos (como moluscos, anélidos y artrópodos), el blastoporo se convierte en la boca. En los deuteróstomos (equinodermos y cordados), el blastoporo se convierte en el ano y la boca se forma después, en el extremo opuesto. Esta diferencia fundamental separa dos grandes linajes de animales." },
          { type: "table", headers: ["Carácter", "Protóstomos", "Deuteróstomos"], rows: [
            ["Origen de la boca", "Del blastoporo", "De neoformación"],
            ["Segmentación", "Espiral y determinada", "Radial e indeterminada"],
            ["Formación del celoma", "Esquizocélica", "Enterocélica"],
            ["Ejemplos", "Anélidos, moluscos, artrópodos", "Equinodermos, cordados"]
          ] }
        ]
      },
      {
        id: "vocabulario",
        title: "Vocabulario clave",
        content: [
          { type: "heading", level: 2, text: "Términos que conviene recordar" },
          { type: "definition", term: "Filo", definition: "Categoría taxonómica que agrupa especies con un mismo plan corporal (Bauplan)." },
          { type: "definition", term: "Sinapomorfía", definition: "Carácter novedoso compartido por todos los miembros de un grupo y su ancestro común." },
          { type: "definition", term: "Apomorfía", definition: "Carácter derivado." },
          { type: "definition", term: "Plesiomorfía", definition: "Carácter ancestral, heredado del ancestro más antiguo." },
          { type: "definition", term: "Grupo monofilético", definition: "Incluye a un ancestro común y a todos sus descendientes." },
          { type: "definition", term: "Grupo parafilético", definition: "Incluye al ancestro pero no a todos los descendientes." },
          { type: "definition", term: "Grupo polifilético", definition: "Agrupa especies sin un ancestro común exclusivo (por convergencia)." },
          { type: "definition", term: "Celoma", definition: "Cavidad corporal secundaria rodeada por un epitelio mesodérmico." },
          { type: "definition", term: "Pseudoceloma", definition: "Cavidad corporal sin epitelio propio, derivada del blastocele." }
        ]
      }
    ]
  },
  {
    id: "arquitectura-2",
    number: 2,
    title: "Arquitectura Animal — Parte II",
    subtitle: "Simetría, metamería y estrategias esqueléticas",
    sections: [
      {
        id: "simetria",
        title: "Simetría corporal",
        content: [
          { type: "heading", level: 2, text: "La simetría como reflejo del estilo de vida" },
          { type: "paragraph", text: "Cuando observamos un animal, la disposición simétrica de su cuerpo nos cuenta mucho sobre cómo se mueve, cómo se alimenta y cómo percibe el entorno. La evolución ha ensayado tres grandes soluciones." },
          { type: "definition", term: "Asimetría", definition: "Ausencia total de simetría. No existe ningún plano que divida el cuerpo en mitades especulares. Es propia de formas muy irregulares, como muchas esponjas (poríferos)." },
          { type: "definition", term: "Simetría radial", definition: "El cuerpo se organiza alrededor de un eje central (oral-aboral) de modo que múltiples planos que pasan por ese eje dividen al animal en partes iguales. Es la simetría de los cnidarios (medusas, pólipos) y los ctenóforos. Resulta muy útil para animales sésiles o que flotan a la deriva, porque reciben estímulos de cualquier dirección." },
          { type: "definition", term: "Simetría bilateral", definition: "Un único plano (el sagital) divide el cuerpo en dos mitades especulares: derecha e izquierda. Esta simetría está asociada a la locomoción activa y a la cefalización: la región anterior (cabeza) concentra los órganos sensoriales y el cerebro. Es el plan dominante en los triblásticos y, por tanto, en la mayoría de los animales." },
          { type: "callout", variant: "tip", title: "Un caso especial: la simetría birradial", content: "Algunos ctenóforos presentan simetría birradial, una variante de la radial en la que solo dos planos (perpendiculares entre sí) producen mitades iguales. Es una solución intermedia entre la radial y la bilateral." }
        ]
      },
      {
        id: "metameria",
        title: "Metamería: la repetición de segmentos",
        content: [
          { type: "heading", level: 2, text: "La fuerza de repetir una misma unidad" },
          { type: "paragraph", text: "Cuando un animal celomado necesita crecer en tamaño sin perder eficacia funcional, una estrategia brillante es repetir una misma unidad básica una y otra vez a lo largo del eje del cuerpo. Cada unidad, llamada metámero o segmento, contiene su propia porción de celoma, músculos, nervios y, a menudo, órganos repetidos (como nefridios o vasos sanguíneos)." },
          { type: "paragraph", text: "Esta organización segmentada se denomina metamería. No es lo mismo que la simple repetición de apéndices: la verdadera metamería implica que el mesodermo se divide en somitas durante el desarrollo embrionario." },
          { type: "definition", term: "Metamería homónoma", definition: "Todos los segmentos son muy similares entre sí (excepto el primero y el último). Es típica de anélidos como la lombriz de tierra o muchos poliquetos marinos. La homonomía permite una locomoción ondulatoria muy eficaz." },
          { type: "definition", term: "Metamería heterónoma", definition: "Los segmentos se agrupan en regiones especializadas llamadas tagmas. Cada tagma cumple una función distinta: cabeza (alimentación y percepción), tórax (locomoción), abdomen (reproducción). Aparece en artrópodos y también, con matices, en vertebrados (columna vertebral con regiones: cervical, torácica, lumbar...)." },
          { type: "paragraph", text: "El proceso de especialización de los segmentos se conoce como tagmatización. Por ejemplo, en los insectos, los tres pares de patas se concentran en el tórax, mientras que el abdomen carece de apéndices locomotores." },
          { type: "callout", variant: "warning", title: "Cuidado: no toda repetición es metamería", content: "Algunos animales (como las tenias) parecen segmentados, pero sus proglótides no se originan a partir de somitas mesodérmicas. Esta falsa segmentación recibe el nombre de pseudometamería. También es pseudometamérica la repetición de placas en los poliplacóforos (quitones) o monoplacóforos." }
        ]
      },
      {
        id: "esqueletos",
        title: "Esqueletos: soporte, protección y movimiento",
        content: [
          { type: "heading", level: 2, text: "Tres grandes familias estructurales" },
          { type: "paragraph", text: "Los animales necesitan una arquitectura interna que les dé forma, sirva de anclaje a los músculos y proteja los órganos vitales. La naturaleza ha inventado tres tipos básicos de esqueleto, a veces combinados en un mismo animal." },
          { type: "definition", term: "Esqueleto hidrostático", definition: "Es el más simple y antiguo. Consiste en una cavidad (o varias) llena de líquido rodeada por paredes musculares. La contracción de la musculatura presuriza el líquido, generando rigidez y movimiento. Es característico de cnidarios, platelmintos, nematodos y anélidos. En estos últimos, la metamería potencia el movimiento ondulatorio al aislar la presión en cada segmento mediante septos." },
          { type: "definition", term: "Exoesqueleto", definition: "Cubierta externa rígida, secretada por la epidermis. Puede ser de carbonato cálcico (conchas de moluscos), quitina (artrópodos) o combinaciones de ambos. El exoesqueleto protege al animal y permite la fijación de músculos, pero impide el crecimiento continuo: el animal debe mudar periódicamente (ecdisis) para crecer. Los artrópodos y nematodos son expertos en esta estrategia." },
          { type: "definition", term: "Endoesqueleto", definition: "Estructura interna, a menudo mineralizada, que crece con el animal. Permite un anclaje profundo de la musculatura y no requiere ser mudada. Es típico de equinodermos (placas calcáreas por debajo de la piel) y vertebrados (cartílago y hueso)." },
          { type: "paragraph", text: "Muchos animales combinan varios tipos. Por ejemplo, las tortugas tienen un exoesqueleto (caparazón) y un endoesqueleto (huesos internos). Los moluscos poseen concha (exoesqueleto) pero su cuerpo también utiliza un esqueleto hidrostático para desplazarse (el pie)." },
          { type: "callout", variant: "info", title: "Una curiosidad: las esponjas", content: "Los poríferos carecen de verdaderos tejidos, pero sintetizan un esqueleto de espículas (silíceas o calcáreas) y fibras de colágeno (esponjina). Es un ejemplo de esqueleto inorgánico secreción celular individual." }
        ]
      },
      {
        id: "metazoos-coloniales",
        title: "Metazoos coloniales: vivir en comunidad clonal",
        content: [
          { type: "heading", level: 2, text: "Un solo genotipo, muchos cuerpos" },
          { type: "paragraph", text: "Algunos animales no viven solitarios, sino que forman colonias en las que cada miembro (denominado zooide) es genéticamente idéntico a los demás (clones). Estos zooides permanecen físicamente conectados y a menudo comparten cavidades o sistemas de distribución de nutrientes." },
          { type: "paragraph", text: "La colonialidad es muy frecuente en cnidarios (corales, hidrozoos), briozoos y algunos tunicados. En estos grupos, la colonia puede comportarse como un superorganismo: los zooides se especializan en diferentes funciones, dando lugar al polimorfismo colonial." },
          { type: "heading", level: 3, text: "Tipos de zooides especializados" },
          { type: "list", items: [
            "Gastrozooides: capturan presas y realizan la digestión (alimentan a la colonia).",
            "Gonozooides: dedicados exclusivamente a la reproducción sexual.",
            "Dactilozooides: defendiendo la colonia con cnidocitos o estructuras urticantes."
          ] },
          { type: "paragraph", text: "En los metazoos modulares, la individualidad de cada zooide se difumina hasta el punto de que resulta difícil saber dónde empieza uno y termina el otro. Es el caso de muchas esponjas, corales y briozoos incrustantes. Esta estrategia permite a la colonia crecer de forma indeterminada y colonizar grandes superficies." },
          { type: "callout", variant: "example", title: "Ejemplo clásico", content: "Los hidrozoos del género Obelia forman colonias ramificadas con diferentes tipos de zooides. Las colonias pueden alcanzar tamaños considerables y producir medusas que liberan gametos." }
        ]
      },
      {
        id: "resumen-arquitectura",
        title: "Resumen de arquitectura animal",
        content: [
          { type: "heading", level: 2, text: "Ideas centrales para recordar" },
          { type: "keypoint", points: [
            "La simetría del cuerpo (radial o bilateral) está ligada al tipo de vida y a la cefalización.",
            "La metamería permite crecer y especializar regiones corporales (tagmatización).",
            "Existen tres tipos básicos de esqueleto: hidrostático, exoesqueleto y endoesqueleto.",
            "La colonialidad con polimorfismo representa un nivel intermedio entre individuo y superorganismo."
          ] },
          { type: "paragraph", text: "En los próximos capítulos veremos cómo estos conceptos se plasman en los diferentes filos de animales, desde las esponjas hasta los vertebrados." }
        ]
      }
    ]
  },
  {
    id: "arquitectura-3",
    number: 3,
    title: "Arquitectura Animal — Parte III",
    subtitle: "Desarrollo embrionario y grandes linajes",
    sections: [
      {
        id: "desarrollo-embrionario",
        title: "Desarrollo embrionario: del cigoto al organismo",
        content: [
          { type: "heading", level: 2, text: "Las etapas fundamentales" },
          { type: "paragraph", text: "Todos los metazoos comparten un patrón básico de desarrollo que comienza con la fecundación y culmina en la formación de un adulto. Estas etapas son tan antiguas que se han conservado durante cientos de millones de años." },
          { type: "list", ordered: true, items: [
            "Fecundación: unión del óvulo y el espermatozoide, que da lugar al cigoto diploide.",
            "Segmentación: el cigoto se divide repetidamente sin aumentar de tamaño, originando una mórula (acúmulo macizo de células).",
            "Blastulación: las células emigran a la periferia formando una esfera hueca (blástula) con una cavidad interna llamada blastocele.",
            "Gastrulación: una invaginación de la blástula produce el arquénteron (futuro tubo digestivo) y el blastoporo (primera abertura). Aparecen las dos primeras capas embrionarias: ectodermo (externa) y endodermo (interna).",
            "Organogénesis: las capas embrionarias se diferencian en tejidos y órganos."
          ] },
          { type: "callout", variant: "info", title: "La tercera capa", content: "En los triblásticos (la mayoría de animales) aparece el mesodermo, una capa intermedia que dará lugar a músculos, sistema circulatorio, esqueleto y otros órganos internos. En los diploblásticos (cnidarios, ctenóforos) el mesodermo no existe." }
        ]
      },
      {
        id: "segmentacion",
        title: "La segmentación: los primeros pasos del embrión",
        content: [
          { type: "heading", level: 2, text: "Patrones de división celular" },
          { type: "paragraph", text: "La segmentación del cigoto no es aleatoria; sigue patrones determinados por la cantidad y distribución del vitelo (sustancias de reserva) dentro del óvulo." },
          { type: "definition", term: "Oligolecítico", definition: "Poco vitelo. La segmentación es holoblástica (completa) y las células se dividen por igual. Típico de equinodermos y mamíferos." },
          { type: "definition", term: "Mesolecítico", definition: "Vitelo abundante pero concentrado en un polo (heterolecítico). Segmentación holoblástica pero desigual: las células del polo animal (con menos vitelo) son más pequeñas que las del polo vegetativo. Ejemplo: anfibios." },
          { type: "definition", term: "Polilecítico", definition: "Muy abundante vitelo. Segmentación meroblástica (incompleta): las divisiones afectan solo la región activa del citoplasma. Típico de aves, reptiles y muchos moluscos cefalópodos." },
          { type: "heading", level: 3, text: "Disposición de los blastómeros" },
          { type: "definition", term: "Segmentación radial", definition: "Los blastómeros se sitúan unos encima de otros, formando anillos regulares. Es propia de deuteróstomos (equinodermos, cordados)." },
          { type: "definition", term: "Segmentación espiral", definition: "Los blastómeros se disponen en espiral, alternando posiciones en cada división. Es característica de los protóstomos espirales (Spiralia: platelmintos, anélidos, moluscos, lofoforados)." },
          { type: "paragraph", text: "La segmentación no solo determina el tamaño celular, sino que en algunos grupos fija el destino de cada célula desde muy pronto (desarrollo determinado) o lo mantiene flexible (desarrollo indeterminado). Esta diferencia tiene enormes consecuencias evolutivas." }
        ]
      },
      {
        id: "gastrulacion",
        title: "Gastrulación: el nacimiento del tubo digestivo",
        content: [
          { type: "heading", level: 2, text: "Del disco al saco" },
          { type: "paragraph", text: "La gastrulación es uno de los momentos más críticos del desarrollo. Durante esta fase, la blástula se invagina o pliega para formar un embrión de dos capas (gástrula). La cavidad interna que se forma es el arquénteron, que se abrirá al exterior por el blastoporo." },
          { type: "paragraph", text: "En los diploblásticos, con estas dos capas ya es suficiente para construir un organismo funcional (cnidarios, ctenóforos). En los triblásticos, en cambio, la gastrulación continúa: células del endodermo o del blastoporo proliferan para formar el mesodermo." },
          { type: "heading", level: 3, text: "Formación del mesodermo: dos caminos evolutivos" },
          { type: "definition", term: "Esquizocelia", definition: "El mesodermo se origina a partir de células que proliferan desde el blastoporo (específicamente del blastómero 4d) y que forman masas sólidas que luego se ahuecan para formar el celoma. Es típica de protóstomos (anélidos, artrópodos, moluscos)." },
          { type: "definition", term: "Enterocelia", definition: "El mesodermo surge como evaginaciones del arquénteron (intestino embrionario) que se desprenden y forman cavidades. Es característica de deuteróstomos (equinodermos, cordados)." },
          { type: "callout", variant: "tip", title: "Un detalle embriológico", content: "Los acelomados (platelmintos) y pseudocelomados (nematodos) no forman un celoma verdadero; por tanto, no presentan esquizocelia ni enterocelia. Su mesodermo es compacto y no se ahueca." }
        ]
      },
      {
        id: "protostomos-deuterostomos",
        title: "Protóstomos y deuteróstomos: dos grandes destinos",
        content: [
          { type: "heading", level: 2, text: "El blastoporo decide el futuro del animal" },
          { type: "paragraph", text: "Una de las primeras decisiones que toma el embrión es qué hacer con el blastoporo, la abertura que comunica el arquénteron con el exterior. Según su destino, los animales bilaterales se dividen en dos linajes fundamentales." },
          { type: "definition", term: "Protóstomos", definition: "El blastoporo se convierte en la boca. El ano se forma después, en el extremo opuesto o a partir del propio blastoporo. La segmentación es espiral y determinada, y el celoma se forma por esquizocelia. Ejemplos: moluscos, anélidos, artrópodos, nematodos." },
          { type: "definition", term: "Deuteróstomos", definition: "El blastoporo se convierte en el ano. La boca se forma de novo en el extremo opuesto. La segmentación es radial e indeterminada (las células embrionarias son totipotentes más tiempo), y el celoma se forma por enterocelia. Ejemplos: equinodermos, hemicordados, cordados." },
          { type: "table", headers: ["Carácter embrionario", "Protóstomos", "Deuteróstomos"], rows: [
            ["Origen de la boca", "Del blastoporo", "De neoformación"],
            ["Origen del ano", "Secundario (a veces del blastoporo)", "Del blastoporo"],
            ["Segmentación", "Espiral y determinada", "Radial e indeterminada"],
            ["Formación del celoma", "Esquizocélica (por proliferación celular)", "Enterocélica (por evaginación del arquénteron)"],
            ["Ejemplos", "Anélidos, moluscos, artrópodos", "Equinodermos, cordados"]
          ] },
          { type: "callout", variant: "info", title: "Una excepción notable", content: "Los nematodos son protóstomos, pero su segmentación no es espiral pura (es bilateral determinada). Es un grupo derivado dentro de Ecdysozoa." }
        ]
      },
      {
        id: "filogenia-basica",
        title: "El árbol de la vida de los animales",
        content: [
          { type: "heading", level: 2, text: "Grandes linajes de metazoos" },
          { type: "paragraph", text: "Gracias a la morfología comparada y, sobre todo, a las filogenias moleculares, hoy podemos dibujar un árbol bastante consensuado de las relaciones entre los filos animales." },
          { type: "list", items: [
            "Porifera (esponjas) — animales sin tejidos verdaderos, probablemente el grupo hermano del resto de metazoos o, según algunos estudios, Ctenophora.",
            "Ctenophora (ctenóforos) — diploblásticos con simetría birradial y peines ciliares.",
            "Cnidaria (cnidarios) — diploblásticos con cnidocitos; incluye pólipos, medusas y corales.",
            "Bilateria — todos los animales con simetría bilateral y tres capas embrionarias (triblásticos).",
            "  ├── Deuterostomia: equinodermos, hemicordados, cordados.",
            "  └── Protostomia: dos grandes clados:",
            "       ├── Spiralia (o Lophotrochozoa): segmentación espiral, a menudo larva trocófora. Incluye platelmintos, anélidos, moluscos, lofoforados.",
            "       └── Ecdysozoa: cutícula con quitina y muda (ecdisis). Incluye nematodos, artrópodos, priapúlidos y otros."
          ] },
          { type: "paragraph", text: "Dentro de Spiralia, los Lophotrochozoa se caracterizan por presentar larva trocófora (una larva ciliada típica) o, en algunos grupos, lofóforo (corona de tentáculos para la alimentación). Dentro de Ecdysozoa, la presencia de una cutícula que se muda periódicamente es la sinapomorfía más clara." },
          { type: "keypoint", points: [
            "El desarrollo embrionario proporciona caracteres clave para reconstruir la filogenia.",
            "La distinción entre protóstomos y deuteróstomos es fundamental para entender la evolución animal.",
            "La presencia de cutícula quitinosa y muda define a los Ecdysozoa, uno de los grupos más diversos (artrópodos, nematodos).",
            "La segmentación espiral y la larva trocófora son marcas de los Spiralia."
          ] }
        ]
      },
      {
        id: "vocabulario-embrionario",
        title: "Vocabulario embrionario clave",
        content: [
          { type: "heading", level: 2, text: "Términos que conviene recordar" },
          { type: "definition", term: "Blastocele", definition: "Cavidad interna de la blástula, llena de líquido." },
          { type: "definition", term: "Arquénteron", definition: "Cavidad digestiva primaria que se forma durante la gastrulación." },
          { type: "definition", term: "Blastoporo", definition: "Abertura del arquénteron al exterior; su destino define protóstomos/deuteróstomos." },
          { type: "definition", term: "Segmentación determinada", definition: "El destino de cada célula está fijado desde las primeras divisiones. Si se separan, no pueden formar un individuo completo." },
          { type: "definition", term: "Segmentación indeterminada", definition: "Las células embrionarias conservan totipotencia durante más tiempo; la separación precoz puede dar lugar a gemelos idénticos." },
          { type: "definition", term: "Huevo telolecito", definition: "Huevo con mucho vitelo concentrado en un polo (como en aves y cefalópodos). Segmentación meroblástica discoidal." },
          { type: "definition", term: "Huevo centrolecito", definition: "Vitelo en el centro del óvulo; típico de artrópodos. Segmentación superficial." }
        ]
      }
    ]
  },
  {
    id: "ctenophora-placozoa-origen",
    number: 4,
    title: "Ctenophora, Placozoa i l'origen dels metazoa",
    subtitle: "Els enigmàtics parents basals",
    sections: [
      {
        id: "ctenoforos-intro",
        title: "Ctenòfors: els portadors de pinta",
        content: [
          { type: "heading", level: 2, text: "Fílum Ctenophora" },
          { type: "paragraph", text: "Els ctenòfors són animals marins, gairebé sempre transparents i d'aspecte gelatinós. El seu nom significa «portadors de pinta», en al·lusió a les vuit fileres de cilis fusionats que recorren el seu cos i que bateguen sincrònicament per a propulsar-se a l'aigua. Encara que durant molt de temps es van agrupar amb els cnidaris, avui sabem que constitueixen un llinatge independent i, possiblement, el grup germà de la resta de metazous." },
          { type: "paragraph", text: "La majoria són pelàgics i formen part important del plàncton gelatinós. Alguns són bentònics. S'alimenten de petits crustacis, larves de peixos i altres zooplàncton; les espècies més grans poden capturar fins i tot altres ctenòfors." },
          { type: "list", items: [
            "Simetria birradial: dos plans de simetria perpendiculars (no és la radial típica dels cnidaris).",
            "Cos amb un pol oral (on se situa la boca) i un pol aboral (on s'obre l'anus).",
            "Vuit files de «pintes» (ctens) que recorren el cos longitudinalment; cada pinta està formada per cilis gegants fusionats.",
            "Dos tentacles llargs, retràctils, proveïts de col·loblasts (cèl·lules adhesives) per a capturar preses; no posseeixen cnidocits urticants.",
            "Sistema digestiu complet: boca, faringe, estómac, canals i porus anals.",
            "Xarxa nerviosa subepitelial, però amb una organització única (en sinciti, no amb neurones discretes).",
            "Òrgan apical amb estatòcist (equilibri) connectat a les pintes mitjançant bandes ciliades."
          ] },
          { type: "callout", variant: "info", title: "¿Diploblàstics o triblàstics?", content: "Durant anys es van considerar diploblàstics, però estudis recents mostren que posseeixen una capa muscular entre l'ectoderma i l'endoderma, que alguns interpreten com un mesoderma incipient. La seva posició filogenètica continua sent molt debatuda." }
        ]
      },
      {
        id: "ctenoforos-reproduccio",
        title: "Reproducció i desenvolupament dels ctenòfors",
        content: [
          { type: "heading", level: 2, text: "Cicle vital i larva cidípida" },
          { type: "paragraph", text: "La majoria dels ctenòfors són hermafrodites, amb gònades d'origen endodèrmic que maduren simultàniament. Poden autofecundar-se, cosa poc comuna en animals. La fecundació és externa i el desenvolupament indirecte inclou una larva característica, anomenada larva cidípida, que ja presenta les vuit files de pintes." },
          { type: "paragraph", text: "Aquesta larva mostra estructures ectodèrmiques (les pintes), endodèrmiques (els canals meridionals fins a l'anus) i unes altres que podrien correspondre a un mesènquima o mesoderma primitiu. La complexitat larvària contrasta amb la relativa simplicitat d'alguns adults." },
          { type: "callout", variant: "tip", title: "Biodiversitat", content: "Es coneixen unes 200 espècies de ctenòfors, totes marines. Malgrat la seva escassa diversitat, la seva importància ecològica és enorme en ecosistemes planctònics." }
        ]
      },
      {
        id: "placozous",
        title: "Placozous: els metazous més simples",
        content: [
          { type: "heading", level: 2, text: "Fílum Placozoa: la simplicitat portada a l'extrem" },
          { type: "paragraph", text: "Els placozous són, sens dubte, els metazous amb l'organització més senzilla coneguda. Durant més d'un segle, l'únic representant va ser Trichoplax adhaerens, un petit organisme marí bentònic que sembla una ameba aplanada d'uns pocs mil·límetres. Recentment s'ha descobert una sorprenent diversitat críptica, amb diverses espècies morfològicament indistingibles però genèticament diferents." },
          { type: "paragraph", text: "El cos d'un placozoo manca per complet de simetria definida. No té sistema nerviós, ni músculs, ni òrgans digestius. Es desplaça sobre el substrat marí mitjançant cilis ventrals i secreta enzims digestius per a absorbir els nutrients de l'exterior (digestió externa)." },
          { type: "list", items: [
            "Cos discoïdal, aplanat, d'uns 2–3 mm de diàmetre.",
            "Dues capes epitelials (dorsal i ventral) separades per un espai amb cèl·lules contràctils i ameboides.",
            "Només uns pocs tipus cel·lulars (descrits sis, amb diversos subtipus).",
            "Unions cel·lulars tipus desmosoma.",
            "S'alimenten de microalgues i detritus; la digestió és extracorpòria.",
            "Es reprodueixen per fissió binària i també sexualment (s'han observat estadis amb espermatozoides i òvuls)."
          ] },
          { type: "callout", variant: "warning", title: "Un animal amb gens Hox", content: "Malgrat la seva extrema simplicitat, els placozous posseeixen gens Hox i Parahox, els mateixos que en altres animals regulen l'organització anteroposterior. Això suggereix que la seva senzillesa és secundària (per pèrdua) o que els gens Hox poden tenir funcions més bàsiques que no requereixen un eix corporal complex." }
        ]
      },
      {
        id: "placozous-filogenia",
        title: "Posició filogenètica dels placozous",
        content: [
          { type: "heading", level: 2, text: "On situar els placozous?" },
          { type: "paragraph", text: "Els estudis moleculars situen Placozoa com el grup germà d'un clade que inclou Cnidaria i Bilateria, formant tots ells el grup Parahoxozoa (per compartir gens Parahox). Això significa que els placozous no són els metazous més basals (aquest lloc el disputen porífers i ctenòfors), sinó que van divergir després però posteriorment van simplificar la seva morfologia." },
          { type: "paragraph", text: "La genòmica comparada ha revelat que Trichoplax comparteix nombroses famílies de gens reguladors del desenvolupament amb cnidaris i bilaterals, incloent-hi factors de transcripció associats a la neurogènesi… encara que ell mateix no tingui neurones. És un exemple fascinant d'evolució per pèrdua o de retenció d'un programa genètic no expressat." },
          { type: "keypoint", points: [
            "Placozoa, Cnidaria i Bilateria formen el clade Parahoxozoa.",
            "La simplicitat dels placozous és convergent o secundària, no ancestral.",
            "El seu estudi ajuda a entendre quins gens són necessaris per a construir un animal i quins són prescindibles."
          ] }
        ]
      },
      {
        id: "origen-metazous-hipotesis",
        title: "L'origen dels metazous: de protists a animals",
        content: [
          { type: "heading", level: 2, text: "Quin va ser el primer animal?" },
          { type: "paragraph", text: "Una de les preguntes més fascinants de la zoologia és com va sorgir el primer animal a partir d'un avantpassat unicel·lular. Durant dècades es va assumir que les esponges (Porifera) eren el grup més basal, però les anàlisis moleculars dels últims anys han posat en dubte aquesta visió." },
          { type: "paragraph", text: "Existeixen dues hipòtesis principals:" },
          { type: "definition", term: "Hipòtesi tradicional (Porifera basal)", definition: "Les esponges serien el grup germà de la resta de metazous. Això implica que l'avantpassat de tots els animals era similar a una esponja: sense teixits vertaders, amb coanòcits i sistema aquïfer. La complexitat (teixits, nervis, músculs) hauria aparegut després, en el llinatge que porta a cnidaris i bilaterals." },
          { type: "definition", term: "Hipòtesi alternativa (Ctenophora basal)", definition: "Els ctenòfors serien el grup més basal. Això implica conseqüències revolucionàries: els ctenòfors posseeixen músculs i sistema nerviós, que haurien evolucionat de manera independent a la resta d'animals (convergència). Els porífers serien un grup derivat que hauria perdut teixits." },
          { type: "callout", variant: "info", title: "El debat obert", content: "Ambdues hipòtesis tenen suport molecular, i encara no hi ha consens. Cada nova filogènia basada en gens o en l'anàlisi de microRNAs canvia l'arbre. La posició de Ctenophora és el major desafiament actual de la filogènia animal." }
        ]
      },
      {
        id: "evidencies-origen-independent",
        title: "Evidències de l'origen independent del sistema nerviós",
        content: [
          { type: "heading", level: 2, text: "Si els ctenòfors són basals, el seu sistema nerviós és únic" },
          { type: "paragraph", text: "La hipòtesi de Ctenophora com a grup germà implica que el sistema nerviós (i els músculs) haurien evolucionat dues vegades: una en els ctenòfors i una altra en la resta d'eumetazous (cnidaris + bilaterals). Aquesta idea, encara que heterodoxa, es recolza en diverses evidències sorprenents:" },
          { type: "list", items: [
            "Els ctenòfors utilitzen neurotransmissors específics i manquen de la maquinària molecular per a processar microRNAs que regulen el desenvolupament neuronal en altres metazous.",
            "Els gens típicament expressats en les neurones de cnidaris i bilaterals estan absents en els ctenòfors, o no s'expressen en les seves cèl·lules nervioses.",
            "La xarxa neuronal dels ctenòfors té una arquitectura única: les neurites es fusionen formant un sinciti, no hi ha sinapsis discretes com en altres animals."
          ] },
          { type: "paragraph", text: "Si això es confirma, els ctenòfors representarien un experiment evolutiu independent per a construir un animal amb músculs i nervis, completament diferent al de la resta del regne animal. Serien, en cert sentit, els 'extraterrestres evolutius' del nostre propi planeta." },
          { type: "keypoint", points: [
            "La posició filogenètica de ctenòfors i porífers continua sent incerta i canvia segons les dades.",
            "L'origen dels teixits i del sistema nerviós podria no ser únic, sinó convergent.",
            "Els placozous demostren que la simplicitat morfològica no equival a posició basal."
          ] }
        ]
      },
      {
        id: "caracteristiques-metazous",
        title: "Què defineix realment un metazou?",
        content: [
          { type: "heading", level: 2, text: "Les innovacions del regne animal" },
          { type: "paragraph", text: "Encara que la frontera entre protists colonials i vertaders animals és difusa, els metazous comparteixen un conjunt de característiques que els defineixen com a grup monofilètic." },
          { type: "list", items: [
            "Pluricel·lularitat amb cèl·lules connectades mitjançant unions especialitzades (caderines, desmosomes).",
            "Heterotròfia per ingestió (no absorció externa com els fongs).",
            "Factors de senyalització únics (Wnt, Frizzled, Hedgehog, EGFR) i factors de transcripció (Hox, Parahox, ETS, POU).",
            "Matriu extracel·lular amb col·lagen tipus IV, nidogen i perlecà.",
            "Espermatozoides amb morfologia característica (cap, peça mitjana, flagel).",
            "Desenvolupament embrionari amb blàstula i gàstrula (sense excepcions conegudes)."
          ] },
          { type: "paragraph", text: "El registre fòssil del Proterozoic (fa uns 580 milions d'anys) ens ha deixat les primeres evidències de metazous: petjades, impressions de cossos tous com els de la fauna d'Ediacara. Però va ser en el Cambrià, fa uns 541 milions d'anys, quan es va produir la gran explosió de diversitat: van aparèixer gairebé tots els fílums actuals, es van desenvolupar ecosistemes tridimensionals complexos i es va establir la dinàmica fonamental de la biosfera marina." },
          { type: "callout", variant: "example", title: "Causes de l'Explosió del Cambrià", content: "Entre les hipòtesis més acceptades: augment de l'oxigen dissolt, desgel de glaciacions, fragmentació del supercontinent Rodínia, aparició dels gens Hox, biomineralització (closques dures) i augment de la competència ecològica." }
        ]
      }
    ]
  },
  {
    id: "protozoos-y-enfermedades",
    number: 5,
    title: "Protozoos",
    subtitle: "Los primeros eucariotas móviles y su impacto sanitario",
    sections: [
      {
        id: "introduccion-protozoos",
        title: "Introducción a los protozoos",
        content: [
          { type: "heading", level: 2, text: "¿Qué son los protozoos?" },
          { type: "paragraph", text: "Los protozoos se encuentran dentro de los protistas. Los protistas son organismos eucariotas con organización celular que pueden asemejarse a hongos, a plantas (algas) o a animales (protozoos). Los protozoos son protistas con motilidad (al menos en alguna fase de su ciclo) y básicamente heterótrofos." },
          { type: "paragraph", text: "El grupo de los protozoos no es natural; es polifilético, es decir, agrupa individuos con ancestros diferentes. Un grupo monofilético incluye a todos los descendientes de un mismo ancestro, mientras que uno parafilético incluye al ancestro pero no a todos sus descendientes." },
          { type: "list", items: [
            "Células solitarias e independientes. Algunas especies presentan organización colonial (individuos o zooides germinativos y somáticos).",
            "Cada célula equivale a un organismo completo que asume todas las funciones.",
            "La tendencia evolutiva hacia una mayor complejidad estructural ocurre de manera convergente en muchos grupos: polimerización (multiplicación de estructuras como vacuolas, flagelos), formación de colonias y multiplicación del número de núcleos (una clara tendencia a la pluricelularidad).",
            "Las células con muchos núcleos, cada uno gobernando una parte, se consideran pluricelulares."
          ] },
          { type: "paragraph", text: "Los protozoos son protistas básicamente heterótrofos. Algunos capturan presas y pueden realizar fotosíntesis (a veces los protozoos no se diferencian de las algas). Viven en medios acuosos, son vulnerables a la desecación, pueden formar quistes, y son aerobios o anaerobios. Pueden ser libres (planctónicos o bentónicos) o simbiontes (parásitos, comensales o mutualistas)." }
        ]
      },
      {
        id: "componentes-funcionales",
        title: "Componentes funcionales de los protozoos",
        content: [
          { type: "heading", level: 2, text: "Estructura celular" },
          { type: "list", items: [
            "Núcleo (con 1 o 2 nucléolos).",
            "Mitocondrias, aparato de Golgi.",
            "Retículo endoplasmático.",
            "Vacuolas (digestivas, contráctiles).",
            "Plastos (en formas fotosintéticas).",
            "Lisosomas.",
            "Extrusomas (orgánulos de descarga)."
          ] },
          { type: "paragraph", text: "La membrana celular (plasmalema) puede estar reforzada interna o externamente. Internamente por microtúbulos, vesículas y microfilamentos (citoesqueleto). Externamente puede estar recubierta de mucopolisacáridos (glicocálix) o reforzada por formaciones esqueléticas (testas) minerales u orgánicas." },
          { type: "definition", term: "Quiste", definition: "Membrana protectora externa orgánica que forma quistes de resistencia en condiciones extremas. No todas las especies la tienen." }
        ]
      },
      {
        id: "movimiento-locomocion",
        title: "Movimiento y locomoción",
        content: [
          { type: "heading", level: 2, text: "Cómo se mueven los protozoos" },
          { type: "paragraph", text: "Se mueven como respuesta a estímulos químicos, lumínicos o táctiles. El movimiento es una respuesta sensible y se produce mediante formaciones específicas:" },
          { type: "definition", term: "Seudópodos", definition: "Extensiones del citoplasma. Según su morfología: lobópodos (redondeados), filópodos (largos y finos), rizópodos (anastomosados) y axópodos (con un eje interno de microtúbulos que puede polimerizarse y despolimerizarse)." },
          { type: "definition", term: "Flagelos", definition: "Formados por un axonema microtubular (9 dobletes + 2 centrales) y un cinetosoma (9 tripletes). Pueden moverse de diversas maneras, generando ondas que producen un movimiento paralelo al flagelo. Se encuentran mayoritariamente en la parte anterior." },
          { type: "definition", term: "Cilios", definition: "Estructura similar a los flagelos pero más cortos y numerosos. Se agrupan en cinetias (hileras). Dos tipos de movimiento: fase efectiva y fase de recuperación. La coordinación es metacrónica a lo largo de las cinetias y sincrónica en cada fila transversal. Generan un movimiento perpendicular al cuerpo celular." }
        ]
      },
      {
        id: "nutricion",
        title: "Nutrición",
        content: [
          { type: "heading", level: 2, text: "La alimentación en protozoos" },
          { type: "list", items: [
            "Difusión pasiva (por gradiente de concentración) o activa con transporte activo.",
            "Endocitosis: formación de vesículas.",
            "Pinocitosis (micropartículas en disolución).",
            "Fagocitosis (fagotrofia o nutrición holozoica): formación de vacuolas digestivas. Puede haber citostoma o no."
          ] },
          { type: "paragraph", text: "Las amebas realizan fagocitosis en cualquier punto de la membrana plasmática (sin citostoma). Los ciliados, en cambio, tienen fagocitosis y expulsión de residuos en puntos específicos (citostoma/citofaringe y citopigio)." }
        ]
      },
      {
        id: "reproduccion-protozoos",
        title: "Reproducción",
        content: [
          { type: "heading", level: 2, text: "Reproducción asexual" },
          { type: "definition", term: "Escisión binaria", definition: "División en dos células hijas. Puede ser simetricogénica (plano longitudinal, «en espejo»), asimétrica u homotetogénica (plano transversal, típica de ciliados). En los ciliados, el macronúcleo se divide por amitosis (reparto desigual) y el micronúcleo por mitosis." },
          { type: "definition", term: "Gemación", definition: "El organismo genera otro y se puede distinguir el progenitor del descendiente." },
          { type: "definition", term: "Escisión múltiple", definition: "La célula se divide en varios descendientes iguales. División muy rápida. Ejemplo: Plasmodium (parásito de la malaria)." },
          { type: "heading", level: 2, text: "Reproducción sexual" },
          { type: "definition", term: "Singamia", definition: "Unión de dos células. Puede ser isogamia (células iguales) o anisogamia (células diferentes; la oogamia es un caso con un gameto grande y otro pequeño)." },
          { type: "definition", term: "Conjugación", definition: "Unión temporal para intercambiar material genético. Típica de ciliados. Los individuos compatibles (mating type) se unen, intercambian pronúcleos y luego se separan." }
        ]
      },
      {
        id: "clasificacion-protistas",
        title: "Clasificación de los protistas",
        content: [
          { type: "heading", level: 2, text: "Grandes grupos" },
          { type: "paragraph", text: "La sistemática de los protozoos es compleja y ha cambiado mucho con los análisis moleculares. Una clasificación actual ampliamente aceptada incluye los siguientes supergrupos:" },
          { type: "list", items: [
            "Opistocontos: hongos, metazoos, coanoflagelados.",
            "Amebozoos: amebas lobopodiales (como Amoeba proteus).",
            "Arqueplastos: plantas verdes, clorofíceas, rodofíceas.",
            "SAR (Stramenopiles, Alveolates, Rhizaria):",
            "Rizarios: foraminíferos, radiolarios, silicofilóseos.",
            "Alveolados: dinoflagelados, apicomplejos (Plasmodium), ciliados (Paramecium).",
            "Estramenopilos: diatomeas, feofíceas.",
            "Metamonada: parabasálidos (ej. Trichomonas).",
            "Discoba: euglenozoos (euglénidos y cinetoplástidos como Trypanosoma y Leishmania)."
          ] },
          { type: "callout", variant: "info", title: "Coanoflagelados", content: "Vida libre. Pequeños flagelados marinos o de agua dulce (3-10 μm), fijos y sedentarios, solitarios o coloniales. Tienen un solo flagelo rodeado por un collar de microvellosidades (30-40). El collar y la disposición del flagelo recuerdan a los coanocitos de las esponjas." }
        ]
      },
      {
        id: "grupos-especificos",
        title: "Grupos específicos de interés",
        content: [
          { type: "heading", level: 2, text: "Euglenozoos" },
          { type: "paragraph", text: "Los flagelos emergen de una cavidad; mitocondrias con crestas discoidales. Cuerpo recubierto por un citoesqueleto microtubular." },
          { type: "list", items: [
            "Euglénidos: marinos, de agua dulce, autótrofos y/o heterótrofos. Extienden dos flagelos desde la cavidad.",
            "Cinetoplástidos: con cinetoplasto (estructura de ADN mitocondrial). Parásitos o de vida libre. Los tripanosomátidos son endoparásitos tisulares o hemáticos, intra o extracelulares. Ejemplos humanos: Trypanosoma (enfermedad del sueño, mal de Chagas) y Leishmania (leishmaniasis)."
          ] },
          { type: "heading", level: 2, text: "Metamónados" },
          { type: "paragraph", text: "Flagelados sin mitocondrias clásicas (principalmente debido al parasitismo o la vida en ambientes anóxicos). Presentan hidrogenosomas o mitosomas. Trichomonas vaginalis se transmite sexualmente y causa vaginitis en humanos. Trichonympha y Spirotrichonympha son simbiontes mutualistas en termitas." },
          { type: "heading", level: 2, text: "Alveolados: ciliados" },
          { type: "list", items: [
            "Presentan alvéolos bajo la membrana.",
            "Cilios (al menos en una fase de la vida), agrupados en cinetias.",
            "Micronúcleo diploide y macronúcleo poliploide.",
            "Citostoma y citopigio.",
            "Escisión binaria (asexual) y conjugación (sexual).",
            "Vida libre en agua dulce o marina, solitarios o coloniales, comensales, mutualistas y parásitos."
          ] },
          { type: "heading", level: 2, text: "Amebas" },
          { type: "paragraph", text: "Locomoción por seudópodos. Se agrupan según el tipo de seudópodos y esqueleto: gimnamebas (sin esqueleto) y testáceas (con esqueleto externo)." },
          { type: "heading", level: 2, text: "Foraminíferos" },
          { type: "paragraph", text: "La mayoría marinos y bentónicos. Sus testas (conchas) externas son de numerosos tipos, generalmente multicamerales y constituidas por CaCO₃ (a veces sílice u otros materiales). Presentan reticulopodios que salen por la abertura y con los que atrapan a sus presas." },
          { type: "heading", level: 2, text: "Radiolarios (protistas con axopodios)" },
          { type: "paragraph", text: "Pertenecen a varios clados (polifiléticos). Típicamente con axopodios. Marinos y de agua dulce. De vida libre, algunos con algas simbiontes. Generalmente planctónicos. Esqueletos a menudo muy complejos." }
        ]
      },
      {
        id: "patologias-protozoos",
        title: "Patologías causadas por protozoos",
        content: [
          { type: "heading", level: 2, text: "El parasitismo en protozoos" },
          { type: "paragraph", text: "El parasitismo es una relación interespecífica en la que el parásito a menudo prescinde de sus propios medios de supervivencia para depender obligadamente del hospedador. Esta característica polifilética ha surgido en muchos momentos diferentes de la evolución. Algunos patógenos pueden ser nocivos para cualquier tipo de hospedador porque, con la evolución, han dejado de ser específicos." },
          { type: "table", headers: ["Beneficiosos", "Patológicos"], rows: [
            ["Mineralización de nutrientes en suelo y aguas (Paramecium)", "Parásitos en plantas (Plasmopara, parásito de la vid) y animales de consumo (Eimeria)"],
            ["Prevención de patógenos en el tratamiento de aguas (Vorticella)", "Parásitos del ser humano (Trypanosoma, Plasmodium, Entamoeba)"],
            ["Toxicidad: mareas rojas (Gonyaulax) — no son parásitos pero son tóxicas", ""]
          ] },
          { type: "paragraph", text: "Los protozoos pueden causar patologías tanto en animales como en plantas. Pueden afectar al ser humano si estos son de consumo, pero no tienen por qué ser dañinos per se." }
        ]
      },
      {
        id: "parasitos-humanos",
        title: "Parásitos humanos: vías de transmisión",
        content: [
          { type: "heading", level: 2, text: "¿Cómo nos infectamos?" },
          { type: "list", items: [
            "**Agua mal depurada**: Naegleria (ameba de agua dulce), Cryptosporidium.",
            "**Aire**: transporta protozoos muy ligeros que suelen afectar a la piel o al aparato digestivo. Acanthamoeba (parásito de agua, tierra y aire muy resistente, se aísla en vías respiratorias).",
            "**Alimentos** (carne, pescado, verduras).",
            "**Poca higiene**, principalmente dental, y transmisión sexual: Trichomonas vaginalis (mujeres y hombres).",
            "**Vectores artrópodos hematófagos** (que se alimentan de sangre): mosquitos, moscas, chinches."
          ] },
          { type: "paragraph", text: "Estas infecciones están especialmente asociadas a regiones ecuatoriales y lugares pobres, aunque algunas (como la leishmaniasis) también están presentes en áreas templadas." }
        ]
      },
      {
        id: "amebas-patogenas",
        title: "Amebas patógenas: Entamoeba histolytica",
        content: [
          { type: "heading", level: 2, text: "Entamoeba histolytica" },
          { type: "list", items: [
            "Cosmopolita, distribuida por todo el mundo según la higiene del momento y del lugar.",
            "**Patología**: disentería amebiana (gastroenteritis muy fuerte, con sangre en heces). Parásito intestinal y extraintestinal (graves ulceraciones intestinales y abscesos en órganos internos).",
            "Entre 20.000 y 100.000 muertes anuales.",
            "**Transmisión**: fecal-oral a través de quistes. Agua, alimentos (verduras frescas sin cocinar con agua contaminada).",
            "Un solo hospedador: el ser humano."
          ] }
        ]
      },
      {
        id: "discoba-cinetoplastidos",
        title: "Discoba: cinetoplástidos (Trypanosoma, Leishmania)",
        content: [
          { type: "heading", level: 2, text: "Tripanosomas" },
          { type: "definition", term: "Trypanosoma brucei", definition: "Causa la enfermedad del sueño. Traspasa la barrera hematoencefálica y afecta al SNC: fatiga constante, dolor extremo, insomnio agudo nocturno, coma y muerte. Transmitido por la mosca tsé-tsé en África." },
          { type: "definition", term: "Trypanosoma cruzi", definition: "Causa el mal de Chagas (aproximadamente los mismos efectos). El vector es una chinche (reduviano). Presente en toda Sudamérica; causa más de 60.000 muertes anuales." },
          { type: "definition", term: "Leishmania", definition: "Se encuentra en regiones templadas y tropicales, según los vectores y las especies. Causa entre 75.000 y 80.000 muertes anuales. En Cataluña existe una subespecie (Leishmania infantum) que afecta a perros y humanos (si el sistema inmune presenta alguna deficiencia). El vector es una mosca (flebótomo)." }
        ]
      },
      {
        id: "apicomplejos",
        title: "Apicomplejos: Toxoplasma y Plasmodium",
        content: [
          { type: "heading", level: 2, text: "Apicomplexa" },
          { type: "paragraph", text: "Presentan un complejo apical que les sirve para incrustarse en las células hospedadoras. No tienen flagelos excepto en la fase de gametos. Algunos (alveolados) pueden tener escisión múltiple. Meiosis cigótica." },
          { type: "heading", level: 2, text: "Toxoplasma gondii" },
          { type: "list", items: [
            "Cosmopolita, ligado a los gatos.",
            "**Patología**: solo es grave en embriones y en adultos con inmunodeficiencias (o sida). En embriones puede afectar hígado y cerebro, e incluso provocar ceguera. Se infecta a través de la placenta. Es un parásito oportunista que no tiene capacidad de infectar a personas sanas.",
            "**Transmisión**: ooquistes de gatos, acumulados en verduras, agua o carne (si se cocina, el parásito muere)."
          ] },
          { type: "heading", level: 2, text: "Plasmodium (malaria o paludismo)" },
          { type: "list", items: [
            "Parásitos intracelulares de la sangre y otros tejidos de mamíferos y aves.",
            "No producen esporas libres; siempre están dentro del vector (mosquito) o del hospedador humano.",
            "Causa de 1 a 2.5 millones de muertes anuales.",
            "Cuatro especies nocivas para humanos: P. vivax, P. malariae, P. ovale y P. falciparum (la más mortífera).",
            "Vector: insecto díptero del género Anopheles (hembra)."
          ] }
        ]
      },
      {
        id: "ciclo-plasmodium",
        title: "Ciclo biológico de Plasmodium",
        content: [
          { type: "heading", level: 2, text: "Cómo se desarrolla la malaria" },
          { type: "paragraph", text: "El mosquito hembra pica al ser humano e inyecta esporozoítos. Éstos llegan al hígado, donde experimentan una esquizogonia (división asexual múltiple dentro de los hepatocitos), produciendo merozoítos. Los merozoítos salen del hígado e invaden eritrocitos, donde realizan otra esquizogonia. Los glóbulos rojos se hinchan (alimentándose de hemoglobina) y eventualmente se rompen, liberando más merozoítos y causando fiebres periódicas. Algunos merozoítos se diferencian en gametocitos." },
          { type: "paragraph", text: "Si un mosquito pica a una persona infectada, ingiere los gametocitos. En el intestino del mosquito se forman microgametos y macrogametos, se produce la fecundación y se origina un cigoto móvil (oocineto). El oocineto atraviesa el epitelio intestinal, se enquista (oocisto), realiza meiosis y mitosis, produciendo esporozoítos que migran a las glándulas salivales del mosquito, listos para infectar a otro humano." },
          { type: "keypoint", points: [
            "Fiebres periódicas sincrónicas con la ruptura de eritrocitos.",
            "Anemia, diarreas, oclusión capilar, daño renal y cerebral pueden llevar a la muerte."
          ] }
        ]
      },
      {
        id: "prevencion-malaria",
        title: "Prevención de la malaria (profilaxis)",
        content: [
          { type: "heading", level: 2, text: "Estrategias de control" },
          { type: "list", items: [
            "Quimioprofilaxis.",
            "Control del vector: insecticidas (DDT), peces (gambusias), mosquiteras, repelentes, ropa adecuada.",
            "Vacunas: Dr. Manuel Patarroyo (30–60% de efectividad, cedida a la OMS). RTS,S (Mosquirix, 30–62%) o R21/Matrix-M (77%)."
          ] }
        ]
      }
    ]
  },
  {
    id: "poriferos",
    number: 7,
    title: "Poríferos",
    subtitle: "Las esponjas",
    sections: [
      {
        id: "caracteristicas-poriferos",
        title: "Características generales",
        content: [
          { type: "heading", level: 1, text: "Tema 2 — Poríferos (esponjas)" },
          { type: "paragraph", text: "Los poríferos son metazoos basales sin tejidos verdaderos ni órganos. Su cuerpo está organizado alrededor de un sistema acuífero que les permite filtrar agua y obtener alimento." },
          { type: "list", items: [
            "Diploblásticos sin verdaderos tejidos: organización celular.",
            "Sésiles, mayoritariamente marinos (algunos de agua dulce).",
            "Sin simetría definida (asimétricos o con simetría radial aproximada).",
            "Sin sistema nervioso, digestivo, circulatorio ni excretor.",
            "Cuerpo perforado por numerosos poros inhalantes (ostíolos) y un orificio exhalante mayor (ósculo).",
            "Gran capacidad de regeneración."
          ]},
          { type: "callout", variant: "info", title: "Sinapomorfías", content: "Coanocitos, sistema acuífero con cámaras coanocitarias y espículas de soporte." },
        ],
      },
      {
        id: "tipos-organizacion",
        title: "Tipos de organización",
        content: [
          { type: "heading", level: 2, text: "Ascon, sicon y leucon" },
          { type: "paragraph", text: "Según la complejidad del sistema acuífero distinguimos tres modelos morfológicos:" },
          { type: "definition", term: "Ascon", definition: "El más simple. El agua entra por los poróciros y llega directamente al atrio (espongocele), tapizado por coanocitos. Solo en formas pequeñas." },
          { type: "definition", term: "Sicon", definition: "La pared se pliega y los coanocitos se sitúan en cámaras radiales. El atrio está tapizado por pinacocitos." },
          { type: "definition", term: "Leucon", definition: "Organización más compleja: los coanocitos se agrupan en cámaras coanocitarias dispersas en el mesohilo. Es el modelo más eficiente y el de mayor tamaño." },
          { type: "callout", variant: "tip", content: "El paso de ascon a leucon aumenta enormemente la superficie de filtración sin aumentar el volumen del cuerpo." },
        ],
      },
      {
        id: "anatomia-poriferos",
        title: "Anatomía celular",
        content: [
          { type: "heading", level: 2, text: "Tipos celulares" },
          { type: "heading", level: 3, text: "Pinacodermo (capa externa)" },
          { type: "list", items: [
            "Pinacocitos: células planas que tapizan la superficie externa y los canales.",
            "Poróciros: células perforadas que forman los poros inhalantes."
          ]},
          { type: "heading", level: 3, text: "Mesohilo (capa intermedia gelatinosa)" },
          { type: "list", items: [
            "Arqueocitos: células ameboides totipotentes; intervienen en nutrición, transporte, excreción y reproducción.",
            "Tesocitos: células de reserva.",
            "Lofocitos: sintetizan colágeno (esqueleto orgánico) y espongina.",
            "Esclerocitos: sintetizan las espículas (esqueleto inorgánico)."
          ]},
          { type: "heading", level: 3, text: "Coanodermo" },
          { type: "list", items: [
            "Coanocitos: células flageladas con collar de microvellosidades. Tapizan las cámaras coanocitarias, generan el flujo de agua y capturan partículas pequeñas. Pueden transformarse en espermatozoides."
          ]},
          { type: "heading", level: 3, text: "Canales y musculatura" },
          { type: "list", items: [
            "Miocitos: células contráctiles alrededor de ósculos y canales. Permiten variar el diámetro de las aberturas. Respuesta lenta porque no son sensibles a estímulos eléctricos."
          ]},
          { type: "heading", level: 3, text: "Tipos de espículas" },
          { type: "list", items: [
            "Silíceas (SiO₂): formadas por una sola célula sobre un eje proteico central. Pueden ser grandes (megascleras) o pequeñas (microscleras).",
            "Calcáreas (CaCO₃): formadas por varias células, sin eje central, translúcidas, con tres ejes. Solo megascleras."
          ]},
        ],
      },
      {
        id: "nutricion-poriferos",
        title: "Nutrición",
        content: [
          { type: "heading", level: 2, text: "Sistema acuífero y nutrición" },
          { type: "paragraph", text: "El agua entra por los poros inhalantes, atraviesa los canales y las cámaras coanocitarias, y sale por el ósculo. Los flagelos de los coanocitos generan la corriente. El collar de microvellosidades retiene las partículas alimenticias, que son fagocitadas." },
          { type: "list", items: [
            "Las partículas grandes son capturadas por los arqueocitos en los canales inhalantes.",
            "Las partículas más pequeñas (~1 μm) son capturadas por los coanocitos y transferidas a los arqueocitos para la digestión intracelular.",
            "Muchas esponjas albergan bacterias simbiontes que captan materia orgánica disuelta por difusión.",
            "Las esponjas ascon y sicon pueden incorporar materia orgánica disuelta por pinocitosis."
          ]},
          { type: "callout", variant: "warning", title: "Excepción", content: "Las esponjas carnívoras carecen de sistema acuífero y capturan presas con tentáculos provistos de espículas. Las digieren externamente con la ayuda de bacterias simbiontes." },
        ],
      },
      {
        id: "reproduccion-poriferos",
        title: "Reproducción",
        content: [
          { type: "heading", level: 2, text: "Reproducción asexual" },
          { type: "list", items: [
            "Fragmentación: un trozo del cuerpo origina un nuevo individuo.",
            "Gemación: pequeñas yemas se desprenden y crecen.",
            "Formación de gémulas: pequeñas esferas recubiertas de espículas con arqueocitos en su interior, células de resistencia que pueden sobrevivir a condiciones adversas. Típicas de esponjas de agua dulce."
          ]},
          { type: "heading", level: 2, text: "Reproducción sexual" },
          { type: "paragraph", text: "Muchas esponjas son hermafroditas (monoicas), generalmente con desarrollo asincrónico de los sexos (proteróginas o proterándricas); otras son dioicas." },
          { type: "list", items: [
            "Los óvulos derivan de los arqueocitos; los espermatozoides, de los coanocitos.",
            "Fecundación generalmente interna: los espermatozoides liberados son captados por otra esponja, transportados por los coanocitos hasta los arqueocitos y entregados al óvulo.",
            "Suelen ser vivíparas (incuban larvas), aunque también las hay ovovivíparas."
          ]},
          { type: "heading", level: 2, text: "Tipos de larvas" },
          { type: "definition", term: "Anfiblástula", definition: "Larva hueca con un hemisferio de células flageladas y otro sin flagelos." },
          { type: "definition", term: "Parenquímula", definition: "Larva maciza ciliada que se asienta en el fondo y empieza a abrir cavidades en su interior." },
        ],
      },
      {
        id: "clasificacion-poriferos",
        title: "Clasificación",
        content: [
          { type: "heading", level: 2, text: "Clases de poríferos" },
          { type: "definition", term: "Calcáreas", definition: "Pequeñas. Espículas de CaCO₃, solo megascleras. Sin fibras de espongina. Pueden tener cualquier tipo de organización (ascon, sicon o leucon). Géneros: Clathrina, Sycon, Leucon." },
          { type: "definition", term: "Demosponjas", definition: "Aproximadamente el 90 % de las especies. Tamaño y formas muy variables. Organización siempre leucon. Espículas de SiO₂ y fibras de espongina. Ejemplos: Suberites (simbionte de cangrejos ermitaños), Petrosia, Chondrosia, Tethya, Axinella, Agelas, Ircinia, Euspongia (esponja de baño)." },
          { type: "definition", term: "Hexactinélidas", definition: "Esponjas vítreas. Sin pinacodermo ni coanodermo verdaderos: estructuras sincitiales complejas. Espículas de SiO₂, generalmente hexactinas, organizadas en redes tridimensionales. Bentónicas de aguas profundas. Ejemplos: Euplectella, Hyalonema." },
          { type: "definition", term: "Homosclerómorfas", definition: "Esqueleto variable, con o sin espículas pequeñas de SiO₂ sin eje central. Presentan una lámina basal que delimita tejidos rudimentarios. Ejemplo: Oscarella." },
          { type: "callout", variant: "info", title: "Formas externas", content: "Arborescentes/ramificadas (Axinella), tubulares (Agelas), reticuladas, laminares (Phaquelia), incrustantes (Crambe crambe) y masivas (Ircinia). La forma depende del hábitat y la genética; la coloración depende a menudo de algas simbiontes." },
        ],
      },
    ],
  },
  {
    id: "cnidarios",
    number: 8,
    title: "Cnidarios",
    subtitle: "Pólipos, medusas y corales",
    sections: [
      {
        id: "caracteristicas-cnidarios",
        title: "Características generales",
        content: [
          { type: "heading", level: 1, text: "Tema 3 — Cnidarios" },
          { type: "paragraph", text: "Los cnidarios son el grupo hermano de los bilaterales. Comparten con éstos rasgos plesiomórficos como las dos capas embrionarias, la simetría radial y la larva plánula." },
          { type: "callout", variant: "info", title: "Sinapomorfía", content: "Cnidocitos (células urticantes), exclusivos del grupo." },
          { type: "list", items: [
            "Diploblásticos: ectodermo y endodermo separados por una mesoglea.",
            "Simetría radial.",
            "Acuáticos, mayoritariamente marinos (algunos de agua dulce).",
            "No cefalizados (en las medusas, algunos órganos sensoriales se agrupan en racimos).",
            "Cavidad gastrovascular con una sola abertura (boca = ano).",
            "Grado de organización tisular: tejidos definidos pero órganos rudimentarios.",
            "Ciclo vital típico con alternancia de pólipo y medusa (excepto antozoos).",
            "Unas 10.000 especies conocidas."
          ]},
        ],
      },
      {
        id: "polipo-medusa",
        title: "Pólipo y medusa",
        content: [
          { type: "heading", level: 2, text: "Las dos formas corporales" },
          { type: "table", headers: ["Característica", "Pólipo (sésil)", "Medusa (pelágica)"], rows: [
            ["Posición", "Boca y tentáculos hacia arriba", "Boca y manubrio hacia abajo"],
            ["Cuerpo", "Disco pedio + columna + corona oral", "Umbrela con tentáculos + manubrio con boca"],
            ["Mesoglea", "Reducida", "Muy desarrollada (forma la campana)"],
            ["Función", "Vegetativa, asexual", "Sexual, dispersiva"]
          ]},
          { type: "callout", variant: "tip", content: "Un pólipo es como una medusa invertida: si gira, se expande adoptando forma de umbrela." },
        ],
      },
      {
        id: "cnidocitos",
        title: "Cnidocitos",
        content: [
          { type: "heading", level: 2, text: "La célula urticante" },
          { type: "paragraph", text: "El cnidocito es la célula encargada de la defensa y la captura de presas. Contiene una cápsula (cnidocisto o nematocisto) con un filamento enrollado bajo gran presión." },
          { type: "paragraph", text: "Cuando el cnidocilio (prolongación sensorial externa) es estimulado, se abre el opérculo y el filamento sale disparado para clavarse o adherirse a la presa. Funciones: adhesivos, penetrantes, envolventes y venenosos." },
        ],
      },
      {
        id: "anatomia-cnidarios",
        title: "Anatomía y fisiología",
        content: [
          { type: "heading", level: 2, text: "Capas corporales" },
          { type: "definition", term: "Epidermis", definition: "Células epitelio-musculares con fibras contráctiles longitudinales en su parte externa y circulares en la interna." },
          { type: "definition", term: "Gastrodermis", definition: "Células nutritivo-musculares y flageladas, con capacidad fagocítica. Movilizan el agua y capturan fragmentos digeridos." },
          { type: "definition", term: "Mesoglea", definition: "Capa gelatinosa intermedia, acelular en hidrozoos y con células dispersas en escifozoos y antozoos." },
          { type: "paragraph", text: "Las células intersticiales son totipotentes y permiten regenerar cualquier tipo celular." },
          { type: "heading", level: 3, text: "Sistema nervioso" },
          { type: "paragraph", text: "Red difusa de neuronas multipolares y bipolares en contacto con células sensoriales. Transmisión lenta y bidireccional. En las medusas hay un anillo nervioso que recuerda a un cerebro simple." },
          { type: "heading", level: 3, text: "Órganos sensoriales (solo en medusas)" },
          { type: "list", items: [
            "Estatocistos: marcan la gravedad gracias a un estatolito.",
            "Ocelos: detectan la luz y formas básicas."
          ]},
          { type: "heading", level: 3, text: "Funciones biológicas" },
          { type: "paragraph", text: "Respiración y excreción se realizan por difusión. Son carnívoros: macrófagos (capturan presas con los tentáculos) o micrófagos (captan plancton). La digestión es extra e intracelular. Muchas especies establecen simbiosis con algas fotosintéticas (zooxantelas)." },
        ],
      },
      {
        id: "reproduccion-cnidarios",
        title: "Reproducción y ciclos",
        content: [
          { type: "heading", level: 2, text: "Reproducción asexual y sexual" },
          { type: "list", items: [
            "Asexual: gemación (puede formar colonias) y fisión.",
            "Gran capacidad de regeneración.",
            "Sexual: las gónadas son poco estructuradas; los gametos derivan de células intersticiales.",
            "Generalmente ovíparos, aunque algunos incuban los huevos.",
            "Segmentación holoblástica, indeterminada y radial.",
            "Larva plánula ciliada, libre nadadora."
          ]},
          { type: "heading", level: 2, text: "Tipos de ciclo biológico" },
          { type: "definition", term: "Holopelágico", definition: "Solo fase medusa (ej. Aglaura)." },
          { type: "definition", term: "Bentopelágico", definition: "Combinación de pólipo y medusa. Es el más habitual." },
          { type: "definition", term: "Holobentónico", definition: "Solo fase pólipo (ej. Hydra)." },
        ],
      },
      {
        id: "clasificacion-cnidarios",
        title: "Clasificación",
        content: [
          { type: "heading", level: 2, text: "Clases principales" },
          { type: "list", items: [
            "Anthozoa: solo pólipo (Octocorallia, Hexacorallia, Ceriantharia).",
            "Medusozoa: alternancia pólipo-medusa (Hydrozoa, Staurozoa, Cubozoa, Scyphozoa).",
            "Endocnidozoa: cnidarios parásitos extremadamente modificados (Myxozoa y Polypodiozoa)."
          ]},
        ],
      },
      {
        id: "anthozoa",
        title: "Clase Anthozoa",
        content: [
          { type: "heading", level: 2, text: "Anthozoa" },
          { type: "list", items: [
            "Cavidad gastrovascular dividida en cámaras por septos (mesenterios).",
            "Actinofaringe: tubo que va desde la boca hacia el interior.",
            "Sifonoglifos: surcos ciliados que mantienen la circulación de agua.",
            "Mesoglea con células; cnidocitos en epidermis y gastrodermis.",
            "Pólipos solitarios o coloniales, marinos.",
            "Ciclo sin fase medusa.",
            "Gónadas en la gastrodermis (internas).",
            "Pueden tener esqueleto o no."
          ]},
          { type: "heading", level: 3, text: "Subclases" },
          { type: "definition", term: "Hexacorallia", definition: "Tentáculos lisos no pinnados, mesenterios múltiples de 6. Solitarios o coloniales. Anémonas, madréporas (corales duros, constructores de arrecifes), corales negros." },
          { type: "definition", term: "Octocorallia", definition: "Siempre coloniales. 8 tentáculos pinnados y 8 mesenterios. Esqueletos axiales córneos (gorgonias) o de calcita con espículas (coral rojo Corallium). Plumas de mar." },
          { type: "definition", term: "Ceriantharia", definition: "Pólipos solitarios que viven en un tubo mucoso con filamentos especiales (pticocistos). Sin disco pedio. Dos coronas de tentáculos (marginales y labiales)." },
          { type: "callout", variant: "warning", title: "Arrecifes coralinos", content: "Los hexacoralarios madreporarios construyen arrecifes en simbiosis con zooxantelas. Crecimiento muy lento (1–2 cm/año). El blanqueamiento por aumento de temperatura amenaza estos ecosistemas: los corales expulsan las algas y mueren." },
        ],
      },
      {
        id: "medusozoa",
        title: "Clase Medusozoa",
        content: [
          { type: "heading", level: 2, text: "Medusozoa" },
          { type: "heading", level: 3, text: "Subclase Hydrozoa" },
          { type: "list", items: [
            "Altísima diversidad, mayoritariamente marinos (algunos de agua dulce).",
            "Ciclo con alternancia de pólipos y medusas (hidromedusas con velo).",
            "Cavidad gastrodérmica no tabicada; cnidocitos solo en la epidermis.",
            "Gónadas generalmente epidérmicas (externas), a diferencia de otras clases.",
            "Pólipos coloniales (zooides) homomorfos o polimorfos: gonozooides, gastrozooides, dactilozooides.",
            "Ejemplo de ciclo típico: Obelia. Hydra es un caso de ciclo solo pólipo (atecada)."
          ]},
          { type: "heading", level: 3, text: "Subclase Scyphozoa" },
          { type: "list", items: [
            "Grandes medusas sin velo, con gran cavidad subumbrelar.",
            "Mesoglea con células.",
            "Gastrodermis con cuatro bolsas y canales anulares de circulación.",
            "Gónadas endodérmicas.",
            "Pólipo pequeño (escifistoma) que se reproduce por estrobilación.",
            "Unas 200 especies; depredadoras; oceánicas y litorales.",
            "Ejemplos: Pelagia, Aurelia, Chrysaora, Rhizostoma (pulmón de mar), Cotylorhiza (huevo frito)."
          ]},
          { type: "callout", variant: "info", title: "Proliferaciones de medusas", content: "Aumento de temperatura, exceso de nutrientes, sobrepesca de depredadores (tortugas) y corrientes superficiales favorecen su proliferación." },
          { type: "heading", level: 3, text: "Subclase Staurozoa" },
          { type: "list", items: [
            "Sésiles: «medusas» fijadas al sustrato (estauromedusas).",
            "Ocho brazos alrededor de la boca.",
            "Reproducción sexual con larva plánula no nadadora.",
            "Unas 50 especies en aguas frías y someras."
          ]},
          { type: "heading", level: 3, text: "Subclase Cubozoa" },
          { type: "list", items: [
            "Mayor importancia de la fase medusa.",
            "Cada pólipo produce una sola cubomedusa (sin estrobilación).",
            "Medusas cuadrangulares con tentáculos en pedalios.",
            "Velario en lugar de velo.",
            "Ropalios con ocelos y nematocistos: muy desarrollados.",
            "Grandes nadadoras y depredadoras: «avispas de mar» (Chironex fleckeri puede matar a una persona en pocos minutos).",
            "Tropicales y subtropicales."
          ]},
        ],
      },
    ],
  },
  {
    id: "platelmintos",
    number: 9,
    title: "Platelmintos",
    subtitle: "Gusanos planos",
    sections: [
      {
        id: "caracteristicas-platelmintos",
        title: "Características generales",
        content: [
          { type: "heading", level: 1, text: "Tema 4 — Platelmintos (gusanos planos)" },
          { type: "paragraph", text: "Los platelmintos son los primeros bilaterales que estudiamos, con morfología dorsiventral. La búsqueda activa de alimento introduce el concepto de bilateralidad y la diferenciación entre una región anterior y una posterior." },
          { type: "callout", variant: "info", title: "Posición filogenética", content: "Pertenecen a Nephrozoa (animales con sistema excretor) y a Spiralia (segmentación espiral del huevo)." },
          { type: "list", items: [
            "Triblásticos, bilaterales, protóstomos y acelomados (sin cavidad interna verdadera).",
            "Cefalizados.",
            "Cuerpo blando y aplanado.",
            "Epidermis celular o sincitial.",
            "Sistema digestivo con un solo orificio (como los cnidarios).",
            "Sistema excretor por protonefridios (sinapomorfía de Nephrozoa).",
            "Generalmente hermafroditas (monoicos).",
            "Desarrollo directo o indirecto (la mayoría de los parásitos, indirecto).",
            "Segmentación espiral.",
            "Vida libre o parásitos.",
            "Sin sistema circulatorio ni respiratorio."
          ]},
          { type: "callout", variant: "tip", title: "Compromiso superficie/volumen", content: "El cuerpo plano facilita la difusión interna en ausencia de circulatorio. Los limita a hábitats acuáticos, terrestres muy húmedos o al parasitismo." },
        ],
      },
      {
        id: "clasificacion-platelmintos",
        title: "Clasificación",
        content: [
          { type: "heading", level: 2, text: "Grupos principales" },
          { type: "paragraph", text: "Los antiguos «turbelarios» son hoy un grupo parafilético de vida libre. Frente a ellos, los Neodermata son un clado de parásitos que han perdido la epidermis ciliada y la han sustituido por un tegumento sincitial." },
          { type: "definition", term: "Archoophora", definition: "El ovocito ya contiene vitelo (sustancias de reserva) cuando se forma el huevo." },
          { type: "definition", term: "Neoophora", definition: "Las células vitelinas son aparte y proporcionan el vitelo al huevo (huevos ectolecíticos)." },
        ],
      },
      {
        id: "turbelarios",
        title: "Turbelarios",
        content: [
          { type: "heading", level: 2, text: "Turbelarios (vida libre)" },
          { type: "paragraph", text: "Mayoritariamente de vida libre, pueden ser marinos, dulciacuícolas, terrestres o parásitos. Como ejemplo se utilizan los Tricládidos, capaces de proyectar la faringe como una trompa y con tres ramas intestinales bien definidas." },
          { type: "list", items: [
            "Epidermis con numerosas células glandulares y rabditos (secreciones mucosas y defensivas).",
            "Mesénquima (parénquima) con células fijas, contráctiles, cromatóforos, células secretoras y neoblastos (totipotentes, permiten la regeneración).",
            "Locomoción muco-ciliar y por contracción muscular."
          ]},
          { type: "heading", level: 3, text: "Aparato digestivo" },
          { type: "paragraph", text: "Es un saco con la faringe muy desarrollada y ramas intestinales que sustituyen al sistema circulatorio. Carnívoros, con digestión extra e intracelular y succión intestinal mediante faringe suctora." },
          { type: "heading", level: 3, text: "Excreción y sistema nervioso" },
          { type: "list", items: [
            "Red de protonefridios con células flamígeras: regulan la presión osmótica y eliminan amonio.",
            "Cefalización con concentración de órganos sensoriales: ocelos en copa pigmentada, estatocistos, receptores táctiles y quimiorreceptores."
          ]},
          { type: "heading", level: 3, text: "Reproducción" },
          { type: "list", items: [
            "Sexual: hermafroditas, fecundación interna, cruzada y recíproca.",
            "Huevos endolecíticos o ectolecíticos.",
            "Desarrollo directo o indirecto (larva de Müller).",
            "Asexual: fisión y regeneración."
          ]},
        ],
      },
      {
        id: "neodermata",
        title: "Neodermata (parásitos)",
        content: [
          { type: "heading", level: 2, text: "Adaptaciones a la vida parasitaria" },
          { type: "list", items: [
            "Epitelio ciliado sustituido por un sincitio citoplasmático no ciliado (tegumento).",
            "Estructuras de fijación al hospedador: ventosas, ganchos, espinas.",
            "Reducción del sistema digestivo (las tenias lo han perdido por completo).",
            "Sistema nervioso y órganos sensoriales reducidos.",
            "Adaptación a ambientes con poco oxígeno (respiración aerobia o anaerobia).",
            "Aparato reproductor voluminoso y complejo, con ciclos vitales a menudo heteroxenos."
          ]},
          { type: "heading", level: 2, text: "Trematodos" },
          { type: "list", items: [
            "Aspidogastros y Digeneos (forma de hoja con boca apical y dos ventosas).",
            "Hermafroditas con reproducción sexual (y fases asexuales en larvas).",
            "Ciclo heteroxeno: hospedador definitivo + uno o más intermediarios.",
            "Estadios larvarios: miracidio → esporocisto → redia → cercaria → metacercaria."
          ]},
          { type: "callout", variant: "example", title: "Ejemplos clínicos", content: "Clonorchis sinensis (clonorquiosis, ligada al consumo de pescado crudo, puede derivar en cáncer biliar); Fasciola hepatica (distomatosis hepática); Schistosoma mansoni (esquistosomiasis: dioico, vive en vasos sanguíneos del intestino, sus huevos espinosos atraviesan capilares)." },
          { type: "heading", level: 2, text: "Monogeneos" },
          { type: "list", items: [
            "Hermafroditas con fecundación cruzada.",
            "Ovíparos u ovovivíparos; larva ciliada oncomiracidio.",
            "Un solo hospedador (mayoría ectoparásitos de peces).",
            "Estructuras de fijación: prohaptor (anterior) y opistohaptor (posterior).",
            "Ejemplo: Gyrodactylus salaris, ectoparásito grave de salmónidos, ovovivíparo."
          ]},
          { type: "heading", level: 2, text: "Cestodos" },
          { type: "list", items: [
            "Cuerpo dividido en escólex (zona homóloga a la cabeza) y estróbilo formado por proglótides.",
            "Ausencia total de sistema digestivo: absorben los nutrientes a través del tegumento.",
            "Ciclos heteroxenos complejos.",
            "Ejemplos: Taenia solium (teniasis y cisticercosis, peligrosa cuando los cisticercos se localizan en el SNC) y Echinococcus granulosus (quiste hidatídico que puede comportarse como un tumor cerebral)."
          ]},
        ],
      },
    ],
  },
  {
    id: "anelidos",
    number: 10,
    title: "Anélidos",
    subtitle: "Gusanos segmentados",
    sections: [
      {
        id: "caracteristicas-anelidos",
        title: "Características generales",
        content: [
          { type: "heading", level: 1, text: "Tema 5 — Anélidos (gusanos segmentados)" },
          { type: "list", items: [
            "Segmentados y metamerizados: el celoma se repite en cada segmento y actúa como esqueleto hidrostático.",
            "Quetas: estructuras en forma de espinas para moverse y fijarse al sustrato.",
            "Órganos nucales: estructura sensorial quimiorreceptora detrás del primer segmento (algunos grupos los pierden).",
            "Cuerpo vermiforme, cilíndrico y de simetría bilateral.",
            "Celomados protóstomos con celoma muy desarrollado.",
            "Segmentación espiral, esquizocélicos, larva trocófora.",
            "Segmentación homónoma con crecimiento teloblástico (se añaden segmentos antes del último).",
            "Sistema excretor con metanefridios.",
            "Cutícula de colágeno que no se muda; epidermis a veces ciliada.",
            "Sistema nervioso hiponeuro (como en platelmintos).",
            "Sistema circulatorio cerrado.",
            "Sistema digestivo completo (boca y ano).",
            "Unas 17.000 especies en hábitats marinos, dulciacuícolas y terrestres."
          ]},
          { type: "callout", variant: "info", title: "Novedades evolutivas", content: "Sistema circulatorio cerrado, sistema digestivo completo y desarrollo del celoma." },
        ],
      },
      {
        id: "metameria-anelidos",
        title: "Metamería y anatomía",
        content: [
          { type: "heading", level: 2, text: "Metamería" },
          { type: "paragraph", text: "Solo tres segmentos son distintos del resto: prostomio (anterior), peristomio (con la boca) y pigidio (con el ano). Los segmentos intermedios son metámeros homólogos que se generan por crecimiento teloblástico." },
          { type: "heading", level: 2, text: "Celoma" },
          { type: "paragraph", text: "Es el esqueleto hidrostático del animal. Está dividido en dos mitades por mesenterios, que albergan el vaso dorsal (VD), el vaso ventral (VV) y el tubo digestivo (TD)." },
          { type: "heading", level: 2, text: "Quetas" },
          { type: "paragraph", text: "Son producidas por células llamadas quetoblastos. La presencia de musculatura asociada permite que sean retráctiles (la acícula moviliza las quetas). No son sinapomorfía exclusiva de los anélidos: también las presentan los lofoforados." },
          { type: "heading", level: 2, text: "Órganos nucales" },
          { type: "paragraph", text: "Fositas quimiorreceptoras situadas en el prostomio, inervadas desde la parte posterior del cerebro. Muy desarrolladas en los anélidos más activos y ausentes en clitelados." },
        ],
      },
      {
        id: "polychaeta",
        title: "Polychaeta",
        content: [
          { type: "heading", level: 2, text: "Polychaeta" },
          { type: "paragraph", text: "Grupo parafilético. Plan corporal típico:" },
          { type: "definition", term: "Cabeza", definition: "Prostomio (con antenas, palpos, ojos y cirros peristomiales) y peristomio (con la boca, faringe musculosa retráctil y mandíbulas)." },
          { type: "definition", term: "Tronco", definition: "Segmentos con parapodios y quetas; pueden tener cirros ventrales o dorsales, élitros y branquias para el intercambio de gases." },
          { type: "definition", term: "Pigidio", definition: "Último segmento con el ano y cirros pigidiales." },
          { type: "callout", variant: "info", content: "Muchas especies viven en tubos mucosos formados agregando partículas de arena." },
          { type: "heading", level: 3, text: "Sistemas internos" },
          { type: "list", items: [
            "Pared corporal con cuatro grandes haces musculares para el movimiento ondulatorio.",
            "Sistema nervioso hiponeuro: ganglio bilobulado (cerebro), conectivos circumfaríngicos, ganglios segmentarios y nervios laterales con axones gigantes.",
            "Órganos sensoriales: antenas, palpos, cirros tentaculares, cirros ventrales y dorsales, cirros pigidiales, ocelos y carúncula.",
            "Sistema excretor con metanefridios (un par por metámero) y podocitos asociados a vasos sanguíneos.",
            "Sistema circulatorio cerrado con vaso dorsal (hacia el cerebro) y vaso ventral (hacia el pigidio); los vasos son contráctiles, sin un corazón definido.",
            "Respiración cutánea o por branquias dorsales en los parapodios.",
            "Pigmentos respiratorios diversos: hemoglobina, clorocruorina (verde), hemeritrina (violeta-rosada)."
          ]},
        ],
      },
      {
        id: "metanefridios-vs-protonefridios",
        title: "Metanefridios vs. protonefridios",
        content: [
          { type: "heading", level: 2, text: "Comparación" },
          { type: "table", headers: ["Característica", "Protonefridios", "Metanefridios"], rows: [
            ["Animales", "Sin celoma ni circulatorio", "Con celoma y circulatorio"],
            ["Funciones", "Transporte, ultrafiltración, reabsorción", "Transporte y reabsorción"],
            ["Filtración", "Activa con células flamígeras", "Ultrafiltración de hemolinfa con podocitos"]
          ]},
        ],
      },
      {
        id: "estrategias-alimentacion",
        title: "Estrategias alimentarias",
        content: [
          { type: "heading", level: 2, text: "Tipos de alimentación en anélidos" },
          { type: "list", items: [
            "Depredadores: con probóscide y mandíbulas para capturar presas.",
            "Herbívoros y detritívoros.",
            "Filtradores: corona de tentáculos o branquias modificadas.",
            "Sedimentívoros: ingieren sustrato y digieren su materia orgánica.",
            "Hematófagos: sanguijuelas con mandíbulas y secreciones anestésicas (hirudina), anticoagulantes y vasodilatadoras."
          ]},
        ],
      },
      {
        id: "clitellata",
        title: "Clitellata",
        content: [
          { type: "heading", level: 2, text: "Clitelados" },
          { type: "paragraph", text: "Anélidos con clitelo (banda glandular del epitelio) que produce el capullo donde se depositan los huevos. Incluyen oligoquetos (lombrices) e hirudíneos (sanguijuelas)." },
          { type: "heading", level: 3, text: "Reproducción" },
          { type: "list", items: [
            "Hermafroditas con fecundación interna por cópula (penis o inyección hipodérmica de espermatóforos).",
            "Gónadas bien diferenciadas con celomiductos.",
            "El clitelo no interviene en la fecundación pero genera el capullo.",
            "Desarrollo directo, sin larva."
          ]},
          { type: "paragraph", text: "Los orificios sexuales coinciden con la región del clitelo: 10 pares de testículos y 1 par de ovarios inmersos en el mesénquima. El espermiducto se enrolla formando una vesícula seminal (epidídimo); el canal eyaculador es evaginable y actúa como pene; los gonoporos son ventrales." },
        ],
      },
      {
        id: "aplicaciones-anelidos",
        title: "Aplicaciones e impacto",
        content: [
          { type: "heading", level: 2, text: "Importancia ecológica y aplicada" },
          { type: "list", items: [
            "Constituyen aproximadamente un tercio de la diversidad del bentos marino.",
            "Capitella capitata es bioindicador de aguas eutrofizadas.",
            "Las sanguijuelas pueden parasitar peces y anfibios y causar problemas en acuicultura.",
            "Vectores de enfermedades: las sanguijuelas pueden transmitir flagelados; los oligoquetos son hospedadores secundarios de mixosporidios."
          ]},
        ],
      },
    ],
  },
  {
    id: "moluscos",
    number: 11,
    title: "Moluscos",
    subtitle: "Cuerpo blando, gran diversidad",
    sections: [
      {
        id: "posicion-moluscos",
        title: "Posición filogenética",
        content: [
          { type: "heading", level: 1, text: "Tema 6 — Moluscos" },
          { type: "paragraph", text: "Los moluscos son uno de los filos más diversos en planes corporales y tamaños. Pertenecen a Lophotrochozoa: bilaterales protóstomos con segmentación espiral y larva trocófora." },
          { type: "list", items: [
            "Bivalvos: almejas, mejillones.",
            "Cefalópodos: pulpos, calamares, sepias.",
            "Gasterópodos: caracoles y babosas (la mayoría de moluscos).",
            "Solenogastros y Caudofoveatos.",
            "Poliplacóforos (quitones).",
            "Monoplacóforos.",
            "Escafópodos."
          ]},
        ],
      },
      {
        id: "caracteristicas-moluscos",
        title: "Características generales",
        content: [
          { type: "heading", level: 2, text: "Características" },
          { type: "list", items: [
            "Cuerpo blando, no segmentado (triblásticos).",
            "Hábitats muy variados: marinos, dulciacuícolas y terrestres.",
            "Múltiples estrategias alimentarias: ramoneadores, suspensívoros, depredadores...",
            "Simetría bilateral, secundariamente asimétrica en los gasterópodos por la torsión.",
            "Cavidad celómica reducida, limitada a pequeños espacios alrededor de gónadas, corazón y nefridios.",
            "Sistema circulatorio abierto (cerrado en cefalópodos).",
            "Pie muscular ventral en la mayoría.",
            "Masa visceral que concentra los órganos internos.",
            "Manto: capa epidérmica que recubre la masa visceral y forma la cavidad paleal.",
            "Aparato bucal con odontóforo y rádula.",
            "Tubo digestivo completo con intestino regionalizado y un gran ciego digestivo.",
            "Aparato respiratorio con branquias o ctenidios (acuáticos), branquias secundarias (nudibranquios) o pulmón (gasterópodos pulmonados).",
            "Sistema excretor con metanefridios (a menudo llamados riñones)."
          ]},
          { type: "callout", variant: "info", title: "Sinapomorfías de los moluscos", content: "Pie, cavidad paleal, concha y rádula." },
        ],
      },
      {
        id: "morfologia-moluscos",
        title: "Morfología corporal",
        content: [
          { type: "heading", level: 2, text: "El pie" },
          { type: "paragraph", text: "Estructura ciliada y muscular con glándulas mucosas que crean una superficie de deslizamiento. Permite moverse y huir de depredadores. En cefalópodos se ha modificado en brazos y sifón, lo que les permite una natación muy activa." },
          { type: "heading", level: 2, text: "El manto" },
          { type: "paragraph", text: "Pliegue dorsal que envuelve el cuerpo, forma la cavidad paleal, protege las vísceras y secreta la concha. Tiene tres lóbulos: secretor, sensorial y muscular." },
          { type: "heading", level: 2, text: "La concha" },
          { type: "paragraph", text: "Función protectora y de soporte. Está formada por carbonato cálcico y proteínas. Pluriestratificada en tres capas:" },
          { type: "list", items: [
            "Periostraco: capa externa de conquiolina (proteína), aspecto córneo.",
            "Ostraco: prismas hexagonales de calcita perpendiculares a la superficie.",
            "Hipostraco: láminas finas de aragonito (rómbico) que pueden ser iridiscentes (nácar)."
          ]},
          { type: "callout", variant: "tip", title: "Procesos clave en la evolución del molusco", content: "Torsión (gasterópodos): giro de 180° de la masa visceral durante la fase de larva veliger. Espiralización: solución para aumentar la masa visceral sin perder funcionalidad." },
          { type: "heading", level: 2, text: "La rádula" },
          { type: "paragraph", text: "Hilera de dientes quitinosos que actúan como un raspador. Permite explotar diversos nichos tróficos: micrófagos (muchos dientes en hilera), filtradores (rádula reducida o ausente, como los bivalvos) y carnívoros (pocos dientes y grandes). La rádula toxoglosa de algunos gasterópodos es afilada y venenosa." },
          { type: "callout", variant: "warning", content: "No confundir la rádula con las mandíbulas, estructuras endurecidas presentes en muchos moluscos para pellizcar y desgarrar." },
          { type: "heading", level: 2, text: "Cavidad paleal" },
          { type: "paragraph", text: "Recoge productos de excreción, heces y gametos, y protege los ctenidios. Contiene osfradios (quimiorreceptores) y glándulas defensivas. Presenta tres poros: anal, nefróporo y gonóporo." },
        ],
      },
      {
        id: "sistemas-moluscos",
        title: "Sistemas internos",
        content: [
          { type: "heading", level: 2, text: "Aparato digestivo" },
          { type: "paragraph", text: "Boca con regiones especializadas, estómago compartimentalizado, ciegos digestivos en el intestino. Los bivalvos presentan un estilo cristalino que rota gracias al saco del estilo y digiere el cordón alimenticio mucoso." },
          { type: "heading", level: 2, text: "Sistema nervioso" },
          { type: "paragraph", text: "Anillo periesofágico ganglionar y un anillo ventral. Presenta torsión en gasterópodos (estreptoneuria, en forma de 8) y forma de escalera en aculíferos. Está reducido en bivalvos. En cefalópodos el cerebro es masivo: son los invertebrados con mayor capacidad cognitiva." },
          { type: "list", items: [
            "Tentáculos: tactoreceptores.",
            "Estatocistos con estatolitos.",
            "Fotorreceptores y ojos complejos.",
            "Osfradios: quimiorreceptores.",
            "Astetes en poliplacóforos."
          ]},
          { type: "heading", level: 2, text: "Sistema circulatorio" },
          { type: "paragraph", text: "Generalmente abierto (cerrado en cefalópodos). La hemolinfa contiene hemocianina (de cobre, sangre azulada) y, en algunos, hemoglobina. La mioglobina aparece a nivel muscular." },
          { type: "heading", level: 2, text: "Branquias y respiración" },
          { type: "paragraph", text: "Las branquias filtran alimento y permiten la respiración cutánea. Algunos moluscos las pierden y desarrollan branquias secundarias o pulmones (moluscos terrestres)." },
          { type: "heading", level: 2, text: "Reproducción" },
          { type: "list", items: [
            "Gonocoristas o hermafroditas (solenogastros, monoplacóforos, gasterópodos heterobranquios, algunos bivalvos).",
            "Generalmente un par de gónadas, aunque a menudo una se atrofia.",
            "Fecundación externa o interna mediante cópula.",
            "Desarrollo indirecto con larva trocófora seguida de larva veliger en gasterópodos y bivalvos.",
            "Desarrollo directo en algunos marinos, en especies de agua dulce, terrestres y cefalópodos."
          ]},
        ],
      },
      {
        id: "aculifera",
        title: "Aculifera",
        content: [
          { type: "heading", level: 2, text: "Grupo Aculifera" },
          { type: "paragraph", text: "Moluscos sin concha verdadera, con espículas calcáreas consideradas homólogas a la concha." },
          { type: "definition", term: "Aplacophora", definition: "Cuerpo vermiforme, pequeño en general. Incluye Caudofoveata (sin pie, infaunales, sedimentívoros, marinos) y Solenogastres (sin cabeza, con surco ventral, escamas calcáreas, hermafroditas, carnívoros)." },
          { type: "definition", term: "Polyplacophora", definition: "Concha formada por 8 placas articuladas. Mantel con perinotum y espículas. Cuerpo deprimido dorsoventralmente. Cefalización reducida, rádula presente. Corazón con un ventrículo y dos aurículas. Marinos herbívoros. Los ctenidios producen una pseudometamería visible." },
        ],
      },
      {
        id: "conchifera",
        title: "Conchifera",
        content: [
          { type: "heading", level: 2, text: "Grupo Conchifera" },
          { type: "definition", term: "Monoplacophora", definition: "Concha cónica única, parcialmente enrollada. Pie grande y circular. Pseudometamería con 5–6 pares de ctenidios, 6 pares de nefridios y 8 pares de músculos retractores. Marinos sedimentívoros." },
          { type: "definition", term: "Scaphopoda", definition: "Forma de colmillo, concha cónica perforada en ambos extremos (2–150 mm). Pie excavador. Sin cefalización marcada; rádula presente. Unas 650 especies marinas, todas excavadoras de fondos blandos. Capturan alimento con tentáculos llamados captáculos." },
        ],
      },
      {
        id: "bivalvia",
        title: "Bivalvia",
        content: [
          { type: "heading", level: 2, text: "Bivalvia" },
          { type: "callout", variant: "info", title: "Sinapomorfías", content: "Concha bivalva articulada y ausencia de rádula." },
          { type: "list", items: [
            "Filtradores: locomoción reducida, pie modificado para excavar (pelecípodos, en forma de cuña).",
            "Acéfalos: órganos sensoriales poco desarrollados.",
            "Branquias adaptadas tanto a la respiración como a la captura de alimento.",
            "Marinos y dulciacuícolas.",
            "Algunas especies tienen hasta 200 ojos rudimentarios.",
            "Originalmente epibentónicos reptantes; evolutivamente pasaron a vida excavadora (compresión lateral, fusión del manto y formación de sifones) y a la filtración (desarrollo de los ctenidios y pérdida de la rádula)."
          ]},
          { type: "heading", level: 3, text: "Morfología externa" },
          { type: "list", items: [
            "Umbo: parte más antigua de la concha.",
            "Charnera con dos modelos: taxodonta (numerosos dientes iguales) o heterodonta (2–3 dientes cardinales centrales y dientes laterales)."
          ]},
          { type: "heading", level: 3, text: "Filtración" },
          { type: "paragraph", text: "El agua entra por el sifón inhalante; los cilios de las branquias capturan las partículas y las dirigen hacia un surco alimentario. Las partículas, envueltas en mucus, se transportan por movimientos ciliares hasta la boca. El agua sale por el sifón exhalante." },
          { type: "heading", level: 3, text: "Tipos de branquias" },
          { type: "table", headers: ["Tipo", "Descripción"], rows: [
            ["Protobranquias", "Ctenidios primitivos bipectinados"],
            ["Filibranquias", "Branquias plegadas en W unidas por cilios"],
            ["Eulamelibranquias", "Branquias en W unidas por tejidos perforados (ostíolos)"],
            ["Septibranquias", "Tabiques musculares modificados"]
          ]},
          { type: "heading", level: 3, text: "Reproducción y desarrollo" },
          { type: "list", items: [
            "Mayoritariamente dioicos (excepto en algunas especies de agua dulce y ostras).",
            "Fecundación externa (a veces interna).",
            "Desarrollo indirecto con larva trocófora y larva veliger (con dos valvas).",
            "Los bivalvos de agua dulce tienen una larva especial llamada gloquidio, ectoparásita de peces."
          ]},
          { type: "callout", variant: "example", title: "Formación de perlas", content: "Cualquier cuerpo extraño que quede entre la concha y el manto se recubre de capas de nácar formando una perla." },
          { type: "heading", level: 3, text: "Tipos de vida" },
          { type: "list", items: [
            "Filtradores de fondos blandos (modelo original).",
            "Sedimentívoros con sifones aspiradores.",
            "Colonización de fondos duros: con mecanismos de adhesión, libres nadadores o excavadores de roca y madera."
          ]},
          { type: "heading", level: 3, text: "Concha de bivalvos" },
          { type: "list", items: [
            "Integripaliales: línea paleal continua, sin seno.",
            "Sinupaliales: con seno paleal donde se alojan los conductos sifonales."
          ]},
          { type: "callout", variant: "tip", title: "Ejemplos comunes", content: "Mytilus (mejillón), Lithophaga (dátil de mar), Crassostrea y Ostrea (ostras), Acanthocardia (verrucosa), Glycymeris (almendra de mar), Ruditapes (almeja), Venus, Chamelea, Arca, Pecten (vieira), Pinna (nacra), Donax (coquina), Ensis (navaja)." },
        ],
      },
      {
        id: "gastropoda",
        title: "Gastropoda",
        content: [
          { type: "heading", level: 2, text: "Gastropoda" },
          { type: "callout", variant: "info", title: "Sinapomorfía", content: "Torsión de 180° de la masa visceral." },
          { type: "list", items: [
            "Concha dorsal única, a menudo espiralizada.",
            "Cabeza muy desarrollada; rádula presente.",
            "Pie ventral, reptador y alargado.",
            "Cavidad paleal anterior con un ctenidio en la mayoría (consecuencia de la torsión).",
            "Marinos, terrestres o de agua dulce; gran diversidad de formas de vida y alimentación."
          ]},
          { type: "heading", level: 3, text: "Organización general" },
          { type: "list", items: [
            "Cefalización acentuada.",
            "Crecimiento dorsal de la masa visceral.",
            "Espiralización de la concha: la concha plano-espiral primitiva (exogástrica o endogástrica) evoluciona en una concha helicoidal más compacta. Para mantener el centro de gravedad, el lado derecho pierde masa visceral.",
            "Torsión de la masa visceral: giro de 180° antihorario que sitúa la cavidad paleal en posición anterior. Es independiente de la espiralización y posterior evolutivamente.",
            "Se produce en las últimas fases de la larva veliger en dos pasos: un giro rápido de 90° por contracción del músculo retractor derecho y un giro lento de 90° por crecimiento diferencial."
          ]},
          { type: "definition", term: "Eutineuria", definition: "Cordones nerviosos no cruzados (sin torsión o con detorsión)." },
          { type: "definition", term: "Estreptoneuria", definition: "Cordones nerviosos cruzados en forma de 8 (consecuencia de la torsión)." },
          { type: "callout", variant: "info", title: "Efectos anatómicos de la torsión", content: "Pérdida de una gónada, pérdida de la simetría bilateral (las vísceras se desplazan hacia la izquierda) y pérdida de un ctenidio." },
        ],
      },
      {
        id: "cephalopoda",
        title: "Cephalopoda",
        content: [
          { type: "heading", level: 2, text: "Cephalopoda" },
          { type: "list", items: [
            "Estrategia eco-evolutiva semejante a la de los vertebrados marinos: nadadores pelágicos rápidos.",
            "Reducción e internalización (o pérdida) de la concha: pasa a ser un esqueleto interno.",
            "Cuerpo fusiforme.",
            "Sistema nervioso y órganos de los sentidos muy desarrollados.",
            "Sistema circulatorio cerrado.",
            "Un par de branquias.",
            "Unas 800 especies vivientes, de gran interés económico."
          ]},
          { type: "heading", level: 3, text: "Superórdenes" },
          { type: "definition", term: "Decapodiformes", definition: "8 brazos y 2 tentáculos largos. Incluyen Sepiida (sepias y sepiolas), Myopsida (calamares) y Oegopsida (pota)." },
          { type: "definition", term: "Octopodiformes", definition: "8 brazos iguales. Octopoda incluye Octopodidae, Eledonidae y Argonautidae." },
          { type: "heading", level: 3, text: "Evolución de la concha" },
          { type: "list", items: [
            "Belemnites: fragmocono (órgano de flotación), prostro (centro de gravedad) y proóstraco (esquelético, soporte muscular).",
            "Spirula: concha espiralizada interna.",
            "Loligo (calamar): pluma quitinosa interna homóloga al proóstraco.",
            "Sepia: concha calcárea interna que actúa como órgano de flotación.",
            "Octopus: pérdida total de la concha."
          ]},
        ],
      },
    ],
  },
  {
    id: "lofoforados",
    number: 12,
    title: "Lofoforados y Ecdysozoa",
    subtitle: "Filtradores con lofóforo y animales con muda",
    sections: [
      {
        id: "lofoforados",
        title: "Lofoforados",
        content: [
          { type: "heading", level: 1, text: "Tema 7 — Lofoforados y Ecdysozoa" },
          { type: "heading", level: 2, text: "Lofoforados" },
          { type: "paragraph", text: "Los lofoforados son un clado que agrupa varios filos con un plan corporal común, todos sésiles o muy poco móviles." },
          { type: "list", items: [
            "Simetría bilateral.",
            "Protóstomos: el primer orificio embrionario forma la boca.",
            "Segmentación espiral.",
            "Larva trocófora o larva con lofóforo."
          ]},
          { type: "callout", variant: "info", title: "Sinapomorfías", content: "Lofóforo: corona de tentáculos ciliados, derivada del mesosoma, que sirve para alimentarse. Cuerpo no cefalizado, dividido en tres regiones (prosoma, mesosoma y metasoma) con sus respectivas cavidades celómicas. Sistema digestivo en U." },
          { type: "list", items: [
            "Viven en tubos o presentan exoesqueleto. Todos son sésiles.",
            "Generalmente marinos y bentónicos.",
            "Sistema circulatorio bastante desarrollado.",
            "Muy bien representados en el registro fósil. Unas 7.000 especies."
          ]},
        ],
      },
      {
        id: "bryozoa",
        title: "Phylum Bryozoa (= Ectoprocta)",
        content: [
          { type: "heading", level: 2, text: "Briozoos" },
          { type: "callout", variant: "info", title: "Sinapomorfía", content: "Prosoma generalmente ausente. Lofóforo retráctil." },
          { type: "list", items: [
            "Siempre coloniales: cada individuo se llama zooide. Mayoritariamente marinos, algunos de agua dulce.",
            "Simplificación por miniaturización: sin sistema circulatorio, excretor ni respiratorio.",
            "Funículos: cordones celulares mesodérmicos para almacenar y distribuir nutrientes y unir individuos de la colonia."
          ]},
          { type: "heading", level: 3, text: "Polimorfismo colonial" },
          { type: "list", items: [
            "Autozooides: «normales», alimentan a la colonia.",
            "Avicularias: en forma de pico, defensivos (evitan epibiontes).",
            "Vibraculares: para el desplazamiento en colonias móviles.",
            "Cenozooides: soporte estructural.",
            "Nanozooides: limpieza.",
            "Espinozooides: defensa.",
            "Gonozooides: reproducción, con ovicelas para incubar embriones."
          ]},
          { type: "heading", level: 3, text: "Reproducción" },
          { type: "list", items: [
            "Asexual: formación de colonias por gemación a partir del ancéstrula; estatoblastos (gemas de resistencia) en filactolemados de agua dulce.",
            "Sexual: hermafroditas; fecundación habitualmente interna; muchas modalidades de incubación.",
            "Segmentación radial holoblástica con celoblástula.",
            "Dos tipos de larva: cifonauta (libre, planctotrófica, con valvas quitinosas) y coronada (totalmente ciliada, lecitotrófica)."
          ]},
          { type: "heading", level: 3, text: "Clasificación" },
          { type: "definition", term: "Filactolemados", definition: "De agua dulce, prosoma con cavidad (protocele), lofóforo grande en forma de herradura, colonias homomorfas con estatoblastos. Conexión por poros." },
          { type: "definition", term: "Estenolemados", definition: "Marinos, zooides tubulares sin prosoma, lofóforo reducido y circular. Polimorfismo colonial poco desarrollado. Poliembrionía: a partir de un embrión se generan varios clones idénticos." },
          { type: "definition", term: "Gimnolemados", definition: "Marinos, sin prosoma, lofóforo reducido. Conexión entre zooides por células en reloj de arena. Es el grupo más diverso." },
        ],
      },
      {
        id: "phoronida",
        title: "Phylum Phoronida",
        content: [
          { type: "heading", level: 2, text: "Foronídeos" },
          { type: "callout", variant: "info", title: "Sinapomorfías", content: "Secretan tubos quitinosos (mucopolisacáridos) que entierran en sustratos blandos o fijan en duros. Prosoma reducido." },
          { type: "list", items: [
            "Individuos solitarios pero a veces gregarios.",
            "Lofóforo circular en formas pequeñas y complejo en formas grandes.",
            "Dioicos o hermafroditas; larva actinotroca.",
            "Conservan caracteres plesiomórficos dentro de los lofoforados.",
            "Solo 13 especies en dos géneros: Phoronis y Phoronopsis.",
            "Sistema circulatorio prácticamente cerrado."
          ]},
        ],
      },
      {
        id: "brachiopoda",
        title: "Phylum Brachiopoda",
        content: [
          { type: "heading", level: 2, text: "Braquiópodos" },
          { type: "callout", variant: "info", title: "Convergencia evolutiva", content: "Ejemplo muy claro de convergencia evolutiva con los bivalvos: cuerpo cerrado por dos valvas, una dorsal y una ventral." },
          { type: "list", items: [
            "Valvas segregadas por el manto (carbonato o fosfato cálcico, escleroproteínas).",
            "Cuerpo fijado al sustrato por un pedúnculo ventral.",
            "Quetas que evitan la entrada de partículas grandes y aportan protección.",
            "Formas solitarias y marinas.",
            "Lofóforo complejo (equivalente funcional a los ctenidios complejos de los bivalvos).",
            "Sistema circulatorio abierto.",
            "Reproducción solo sexual; especies dioicas; fecundación externa.",
            "Larva lobulada de vida corta."
          ]},
          { type: "heading", level: 3, text: "Clasificación" },
          { type: "definition", term: "Inarticulata", definition: "Concha de fosfato cálcico y quitina, sin charnera. Pedúnculo largo con cavidad y musculatura. Epistoma con cavidad reducida." },
          { type: "definition", term: "Articulata", definition: "Concha de carbonato cálcico, con charnera. Pedúnculo corto y fibrilar. Viven con el lado ventral hacia arriba; a veces gregarios." },
        ],
      },
      {
        id: "ecdysozoa-intro",
        title: "Ecdysozoa",
        content: [
          { type: "heading", level: 2, text: "Ecdysozoa" },
          { type: "paragraph", text: "Ecdysozoa es uno de los dos grandes clados de los protóstomos (el otro es Spiralia)." },
          { type: "callout", variant: "info", title: "Sinapomorfías", content: "Cutícula secretada por la epidermis que forma un esqueleto externo y contiene quitina en alguna fase. Proceso de muda (ecdisis) controlado por hormonas (ecdisona). Ausencia de epitelios ciliados. Segmentación no espiral." },
          { type: "heading", level: 3, text: "La muda" },
          { type: "paragraph", text: "La cutícula está unida a la epidermis. Comienza con la apólisis (separación de epidermis y cutícula), la epidermis secreta fluido y empieza a crecer una nueva cutícula. La cutícula vieja se rompe y se desprende. El crecimiento es discontinuo, alternando períodos intermudales y de muda." },
        ],
      },
      {
        id: "introverta",
        title: "Introverta (Cycloneuralia)",
        content: [
          { type: "heading", level: 2, text: "Introverta" },
          { type: "paragraph", text: "Presentan un introverto (probóscide) en la parte anterior del cuerpo, evaginable. El cerebro tiene forma de anillo dispuesto alrededor de la parte más anterior del tubo digestivo (circumesofágico)." },
          { type: "heading", level: 3, text: "Scalidophora (Cephalorhyncha)" },
          { type: "paragraph", text: "Introverto con espinas (escálidas) dispuestas en círculos. Dos anillos de músculos retractores en el introverto." },
          { type: "definition", term: "Phylum Priapulida", definition: "Cuerpo vermiforme (0,05–20 cm) dividido en introverto, tronco y plumaje caudal (respiratorio y quimiorreceptor). Sin sistema circulatorio. Dioicos; fecundación externa; desarrollo indirecto. Marinos, bentónicos, excavadores. Depredadores. 22 especies." },
          { type: "definition", term: "Phylum Kinorhyncha", definition: "Cuerpo alargado (<1 mm) con verdadera segmentación: 13 zonitas (introverto, cuello, tronco). Cutícula con placas articuladas. Dioicos con fecundación interna. Desarrollo directo (juveniles con 11 zonitas y 6 mudas hasta el adulto). Marinos, meiofauna. 340 especies. Detritívoros." },
          { type: "definition", term: "Phylum Loricifera", definition: "Cuerpo pequeño (250 μm) en cuatro regiones (introverto, cuello, tórax retráctil y abdomen recubierto por una lóriga cuticular). Dioicos. Marinos, meiofauna. 38 especies. Bacteriófagos." },
        ],
      },
      {
        id: "nematoda",
        title: "Nematozoa: Nematoda",
        content: [
          { type: "heading", level: 2, text: "Nematozoa (= Nematoida)" },
          { type: "paragraph", text: "Característicos por su simplicidad: «un tubo dentro de otro tubo». Cutícula formada principalmente por colágeno. Musculatura solo longitudinal, cordones nerviosos dorsal y ventral, cloaca común para digestivo y genitales, espermatozoides sin flagelo." },
          { type: "heading", level: 2, text: "Phylum Nematoda" },
          { type: "list", items: [
            "Triblásticos, bilaterales, protóstomos, pseudocelomados (mesénquima). El pseudoceloma actúa como esqueleto hidrostático.",
            "No segmentados; eutelia (número fijo de células: una vez adultos, no crecen por división celular sino por aumento del tamaño celular).",
            "Cutícula de colágeno con mudas.",
            "Cuerpo cilíndrico (80 μm – 8 m).",
            "Cordones epidérmicos que alojan los nervios longitudinales.",
            "Sin sistema circulatorio ni respiratorio.",
            "Excretor con células de Renette.",
            "Órganos cefálicos quimiorreceptores (anfidios).",
            "Dioicos o monoicos; cópula.",
            "Ciclo directo con cuatro estadios juveniles y cuatro mudas.",
            "Marinos, dulciacuícolas, terrestres húmedos y parásitos.",
            "Unas 25.000 especies (probablemente subestimado)."
          ]},
          { type: "heading", level: 3, text: "Cutícula" },
          { type: "list", items: [
            "Lámina externa.",
            "Lámina media esponjosa.",
            "Lámina interna fibrosa pluriestratificada (muy desarrollada en parásitos y formas terrestres).",
            "Lámina basal en contacto con la epidermis.",
            "Externamente puede ser lisa, estriada o con granulaciones, sedas, escamas o papilas."
          ]},
          { type: "heading", level: 3, text: "Aparatos y movimiento" },
          { type: "list", items: [
            "Movimiento por interacción entre cutícula elástica, pseudoceloma a presión y musculatura longitudinal (sin musculatura circular).",
            "Aparato digestivo con labios, dientes, mandíbulas o estiletes según el tipo de alimentación.",
            "Sin circulatorio: la circulación se da por movimientos del fluido pseudocélico.",
            "Sin respiratorio: intercambio de gases por la cutícula. Metabolismo aerobio o anaerobio.",
            "Excreción mediante una o dos células glandulares (Renette), no homólogas a los protonefridios. Función básicamente osmorreguladora."
          ]},
          { type: "heading", level: 3, text: "Sistema nervioso" },
          { type: "list", items: [
            "Anillo nervioso circumfaríngeo.",
            "Órganos sensoriales: ocelos, sedas y papilas táctiles, anfidios y fásmidos (quimiorreceptores)."
          ]},
          { type: "heading", level: 3, text: "Reproducción y ciclo vital" },
          { type: "list", items: [
            "Los machos presentan dos espículas copuladoras y órganos accesorios.",
            "Cópula con transferencia de espermatozoides ameboideos a la vagina.",
            "Dioicos o hermafroditas proterándricos. Partenogénesis frecuente.",
            "Desarrollo directo, eutelia y crecimiento por aumento del tamaño celular (Caenorhabditis elegans es el modelo de estudios genéticos).",
            "Cuatro estadios juveniles con mudas (ecdisis).",
            "Ovoviviparismo frecuente en parásitos."
          ]},
          { type: "heading", level: 3, text: "Tipos de vida" },
          { type: "list", items: [
            "Vida libre: bacteriófagos, depredadores, fitófagos.",
            "Parásitos: ectoparásitos o endoparásitos de animales o plantas; ciclos con uno o dos hospedadores."
          ]},
        ],
      },
      {
        id: "nematomorpha",
        title: "Phylum Nematomorpha",
        content: [
          { type: "heading", level: 2, text: "Nematomorfos («gusanos crin de caballo»)" },
          { type: "list", items: [
            "Cutícula de colágeno con mudas.",
            "Cuerpo largo (10–150 cm) y muy delgado (0,5–2,5 mm).",
            "Digestivo reducido, sin sistema circulatorio, respiratorio ni excretor.",
            "Musculatura exclusivamente longitudinal.",
            "Dioicos con fecundación interna.",
            "Ciclo: huevo → larva → ingestión por artrópodo → juvenil parásito → salida al agua → adulto de vida libre que no se alimenta.",
            "Parásitos monoxenos o heteroxenos en fase larvaria. Los juveniles absorben nutrientes del insecto hospedador y manipulan su comportamiento para que se lance al agua.",
            "Unas 520 especies."
          ]},
        ],
      },
    ],
  },
  {
    id: "vocabulario",
    number: 13,
    title: "Vocabulario",
    subtitle: "Glosario de términos clave",
    sections: [
      {
        id: "glosario",
        title: "Glosario",
        content: [
          { type: "heading", level: 1, text: "Vocabulario zoológico" },
          { type: "definition", term: "Filo (phylum)", definition: "Categoría taxonómica con el rango más alto después del reino. Hace referencia al plan corporal: un conjunto de características compartidas que agrupan organismos muy diferentes. Reino → filo → clase." },
          { type: "definition", term: "Árbol filogenético", definition: "Esquema que intenta reproducir las relaciones de parentesco evolutivo: un antepasado común que ha dado origen a diferentes descendientes." },
          { type: "definition", term: "Arquetípico", definition: "Reconstrucción hipotética de un organismo ancestral." },
          { type: "definition", term: "Sinapomorfía", definition: "Carácter derivado que comparten todos los miembros de un grupo, incluido el antepasado común." },
          { type: "definition", term: "Apomorfía", definition: "Carácter derivado." },
          { type: "definition", term: "Plesiomorfía", definition: "Carácter ancestral compartido con los antepasados, no exclusivo del grupo." },
          { type: "definition", term: "Grupo monofilético", definition: "Incluye a un antepasado común y a todos sus descendientes." },
          { type: "definition", term: "Grupo polifilético", definition: "Sus miembros no comparten un antepasado común reciente; es una agrupación artificial." },
          { type: "definition", term: "Grupo parafilético", definition: "Comparten antepasado común, pero no incluye a todos sus descendientes." },
          { type: "definition", term: "Gonocorístico (= unisexual)", definition: "Con sexos separados (machos y hembras distintos)." },
          { type: "definition", term: "Hermafrodita (= monoico)", definition: "Cada individuo presenta los dos sexos." },
          { type: "definition", term: "Homóloga", definition: "Estructura con el mismo origen evolutivo, aunque pueda tener funciones diferentes." },
          { type: "definition", term: "Análoga", definition: "Estructura con función similar pero distinto origen evolutivo (convergencia)." },
          { type: "definition", term: "Meiofauna", definition: "Conjunto de metazoos que viven dentro del sedimento, de tamaño microscópico." },
          { type: "definition", term: "Pseudoceloma", definition: "Cavidad llena de líquido cuya cubierta externa es el mesodermo, sin un epitelio mesodérmico que la rodee por completo." },
          { type: "definition", term: "Celoma", definition: "Cavidad interna verdadera rodeada por un epitelio de origen mesodérmico (peritoneo)." },
          { type: "definition", term: "Metámero", definition: "Unidad repetida de un cuerpo segmentado, con su correspondiente porción de celoma, musculatura y nervios." },
          { type: "definition", term: "Crecimiento teloblástico", definition: "Adición de nuevos segmentos justo antes del último (típico de anélidos)." },
          { type: "definition", term: "Larva trocófora", definition: "Larva ciliada típica de los protóstomos espirales (anélidos, moluscos, lofoforados)." },
          { type: "definition", term: "Larva veliger", definition: "Larva característica de gasterópodos y bivalvos, derivada de la trocófora, con velo ciliado." },
          { type: "definition", term: "Cnidocito", definition: "Célula urticante exclusiva de los cnidarios, contiene un nematocisto con un filamento enrollado bajo presión." },
          { type: "definition", term: "Coanocito", definition: "Célula flagelada con collar de microvellosidades característica de los poríferos." },
          { type: "definition", term: "Lofóforo", definition: "Corona de tentáculos ciliados con función alimentaria y respiratoria, característica de los lofoforados." },
          { type: "definition", term: "Rádula", definition: "Hilera de dientes quitinosos en la boca de los moluscos, usada como raspador." },
          { type: "definition", term: "Manto", definition: "Pliegue dorsal del cuerpo de los moluscos que recubre la masa visceral, forma la cavidad paleal y secreta la concha." },
          { type: "definition", term: "Cavidad paleal", definition: "Espacio entre el manto y la masa visceral del molusco; aloja branquias, gonóporos, nefróporos y ano." },
          { type: "definition", term: "Quetas", definition: "Estructuras quitinosas en forma de espinas, presentes en anélidos y lofoforados; ayudan a la fijación y al movimiento." },
          { type: "definition", term: "Metanefridio", definition: "Sistema excretor tubular abierto al celoma; típico de anélidos y moluscos." },
          { type: "definition", term: "Protonefridio", definition: "Sistema excretor de animales sin celoma, basado en células flamígeras; presente en platelmintos y larvas de muchos grupos." },
          { type: "definition", term: "Ecdisis", definition: "Proceso de muda de la cutícula en los Ecdysozoa, controlado por la hormona ecdisona." },
          { type: "definition", term: "Eutelia", definition: "Característica de algunos animales (como los nematodos) cuyo número de células es fijo en la edad adulta; el crecimiento se da por aumento del tamaño celular." },
          { type: "definition", term: "Estreptoneuria", definition: "Disposición cruzada en forma de 8 de los cordones nerviosos, consecuencia de la torsión en gasterópodos." },
          { type: "definition", term: "Eutineuria", definition: "Disposición no cruzada de los cordones nerviosos (sin torsión o con detorsión secundaria)." },
          { type: "definition", term: "Mesoglea", definition: "Capa intermedia gelatinosa entre ectodermo y endodermo en cnidarios y ctenóforos." },
          { type: "definition", term: "Mesénquima", definition: "Tejido de relleno con matriz extracelular y diversos tipos celulares; en platelmintos cumple funciones de soporte y difusión." },
          { type: "definition", term: "Estatocisto", definition: "Órgano sensorial del equilibrio, con un estatolito de mayor densidad que indica la dirección de la gravedad." },
          { type: "definition", term: "Osfradio", definition: "Quimiorreceptor situado en la cavidad paleal de los moluscos." },
          { type: "definition", term: "Hemocianina", definition: "Pigmento respiratorio basado en cobre que da color azul a la hemolinfa de muchos moluscos y artrópodos." },
          { type: "definition", term: "Zooxantelas", definition: "Algas dinoflageladas simbióticas que viven en los tejidos de muchos cnidarios y aportan productos fotosintéticos al hospedador." },
        ],
      },
    ],
  },
];

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.id === id);
}

export function getSectionById(
  chapterId: string,
  sectionId: string
): Section | undefined {
  const chapter = getChapterById(chapterId);
  return chapter?.sections.find((section) => section.id === sectionId);
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
