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
  | { type: "keypoint"; points: string[] }
  | { type: "image"; src: string; alt: string; caption?: string; width?: "sm" | "md" | "lg" | "full" };

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
          {
            type: "image",
            src: "https://res.cloudinary.com/dhtyvmi5f/image/upload/q_auto/f_auto/v1777131292/Gemini_Generated_Image_j1rhksj1rhksj1rh_vvhbqm.png",
            alt: "Filogenia de los Eucariotas: Relaciones evolutivas entre los grandes linajes",
            caption: "árbol filogenético circular de los Eucariotas, que ilustra las relaciones evolutivas entre los grandes grupos de seres vivos",
            width: "lg"
          },
          {type: "image",
            src: "https://res.cloudinary.com/dhtyvmi5f/image/upload/f_auto,q_auto/v1777128668/Gemini_Generated_Image_ckkjc4ckkjc4ckkj_piqy6h.png",
            alt: "Árbol de la vida de los Eucariotas",
            caption: "**El Árbol de la Vida Eucariota:** Relaciones filogenéticas entre los cinco grandes supergrupos y el origen de la multicelularidad.",
            width: "lg"
          },
          { type: "paragraph", text: "Más tarde, hace unos 541 millones de años, se produjo la llamada Explosión del Cámbrico. En un lapso geológicamente breve, aparecieron prácticamente todos los grandes grupos de animales que conocemos hoy. Es el momento fundacional de la biodiversidad animal." },
          {
            type: "image",
            src: "https://res.cloudinary.com/dhtyvmi5f/image/upload/q_auto/f_auto/v1777131791/Gemini_Generated_Image_qbjq1gqbjq1gqbjq_bevxva.png",
            alt: "Evolución de la pluricelularidad desde un ancestro unicelular",
            caption: "**La Hipótesis Colonial:** Transición de un organismo unicelular flagelado a una colonia y, finalmente, a un organismo pluricelular con diferenciación en células somáticas y germinales.",
            width: "lg"
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dhtyvmi5f/image/upload/q_auto/f_auto/v1777132775/Gemini_Generated_Image_40npjw40npjw40np_flp9xk.png",
            alt: "Estructura detallada de un coanoflagelado",
            caption: "**Anatomía de un coanoflagelado:** Se observa el flagelo central rodeado por el collar de microvellosidades, estructura clave para la filtración de partículas alimenticias y ancestro directo de los coanocitos en poríferos.",
            width: "md"
          },
          { type: "paragraph", text: "Entre los parientes unicelulares más cercanos a los animales se encuentran los coanoflagelados. Estos protistas coloniales poseen un flagelo rodeado por un collar de microvellosidades, una estructura prácticamente idéntica a los coanocitos de las esponjas. Su estudio es clave para entender cómo se originó la pluricelularidad." },
          {
            type: "video",
            src: "https://res.cloudinary.com/dhtyvmi5f/video/upload/v1777133640/videoplayback_ohw9w4.mp4",
            caption: "**Dinámica colonial de *C. flexa*:** Observación de dinoflagelados ovalados y colonias de coanoflagelados en agua marina de Curazao, mostrando su capacidad de contraerse en esferas y expandirse en forma de copa.",
          },
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
            "**Opistocontos**: hongos, metazoos, coanoflagelados.",
            "**Amebozoos**: amebas lobopodiales (como Amoeba proteus).",
            "**Arqueplastos**: plantas verdes, clorofíceas, rodofíceas.",
            "**SAR** (Stramenopiles, Alveolates, Rhizaria):",
            "**Rizarios**: foraminíferos, radiolarios, silicofilóseos.",
            "**Alveolados**: dinoflagelados, apicomplejos (Plasmodium), ciliados (Paramecium).",
            "**Estramenopilos**: diatomeas, feofíceas.",
            "**Metamonada**: parabasálidos (ej. Trichomonas).",
            "**Discoba**: euglenozoos (euglénidos y cinetoplástidos como Trypanosoma y Leishmania)."
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
    number: 6,
    title: "Poríferos",
    subtitle: "Las esponjas: metazoos sin tejidos verdaderos",
    sections: [
      {
        id: "posicion-filogenetica",
        title: "Posición filogenética",
        content: [
          { type: "heading", level: 2, text: "El grupo basal de los animales" },
          { type: "paragraph", text: "Los poríferos (esponjas) son el grupo basal dentro de los metazoos, es decir, el linaje que divergió primero del resto de animales. Se consideran el grupo hermano de los coanoflagelados, unos protistas coloniales que ya estudiamos. Sin embargo, aún no está claro si los ctenóforos son aún más basales; el debate sigue abierto." },
          { type: "paragraph", text: "Las esponjas son metazoos muy primitivos que carecen de tejidos verdaderos. Su nivel de organización es celular, no tisular. Esto significa que sus células son relativamente independientes y pueden cambiar de función, pero no forman órganos ni sistemas." },
          { type: "callout", variant: "info", title: "Apomorfía y plesiomorfías", content: "La apomorfía (carácter derivado) de los poríferos es el sistema acuífero. Las plesiomorfías (caracteres ancestrales) que comparten con otros metazoos son los coanocitos y el nivel de organización celular." }
        ]
      },
      {
        id: "caracteristicas-generales",
        title: "Características generales",
        content: [
          { type: "heading", level: 2, text: "¿Qué hace única a una esponja?" },
          { type: "list", items: [
            "Son metazoos muy primitivos (aparecieron en el Precámbrico, hace más de 600 millones de años).",
            "Nivel de organización celular (no forman tejidos ni órganos). Sus células son totipotentes y pueden regenerar un individuo completo si se disocian.",
            "Plan corporal diseñado para la filtración del agua (sistema acuífero).",
            "Asimétricas o con simetría radial aproximada; a menudo forman estructuras modulares.",
            "Esqueleto interno formado por espículas (silíceas o calcáreas) y fibras de colágeno (esponjina).",
            "Carecen de células nerviosas y musculares. Las respuestas a estímulos son muy lentas.",
            "Marinas y de agua dulce: unas 8.300 especies vivientes, la mayoría marinas (solo unas 50 de agua dulce).",
            "Habitan todos los mares y profundidades, desde la zona intermareal hasta los abismos.",
            "Tamaño muy variable: desde pocos milímetros hasta más de 5 metros de diámetro.",
            "Son muy longevas: se han encontrado esponjas de hasta 2.300 años.",
            "Presentan plasticidad morfológica y cromática: su forma y color dependen del hábitat y de las algas simbiontes.",
            "Son sésiles (viven fijas al sustrato) y han desarrollado defensas químicas para no ser depredadas."
          ] },
          { type: "callout", variant: "tip", title: "Capacidad de regeneración", content: "Si se tritura una esponja hasta separar sus células, éstas pueden reorganizarse y formar una nueva esponja completa. Es un ejemplo extremo de regeneración y totipotencia celular." }
        ]
      },
      {
        id: "sistema-acuifero",
        title: "El sistema acuífero: el corazón de la esponja",
        content: [
          { type: "heading", level: 2, text: "Cómo funciona una esponja" },
          { type: "paragraph", text: "El sistema acuífero es la estructura clave de las esponjas. El agua entra por numerosos poros inhalantes (ostiolos), circula a través de canales y cámaras internas, y sale por una o varias aberturas mayores llamadas ósculos. Este flujo constante proporciona alimento, oxígeno y elimina desechos." },
          { type: "paragraph", text: "Las células responsables de generar la corriente son los coanocitos, que recubren las cámaras y poseen un flagelo rodeado por un collar de microvellosidades. El batido de los flagelos crea una succión que arrastra el agua." },
          { type: "heading", level: 3, text: "Modelos estructurales" },
          { type: "definition", term: "Asconoide", definition: "El más sencillo. El agua entra por porocitos (células perforadas) y llega directamente a una cavidad central (espongiocele) tapizada por coanocitos. Solo posible en esponjas pequeñas. Ejemplo: Clathrina." },
          { type: "definition", term: "Siconoide", definition: "La pared se pliega formando canales radiales. Los coanocitos se sitúan en cámaras vibrátiles separadas; el atrio central está recubierto por pinacocitos, no por coanocitos. Ejemplo: Sycon." },
          { type: "definition", term: "Leuconoide", definition: "El más complejo. Los coanocitos se agrupan en pequeñas cámaras redondas distribuidas por todo el mesohilo. El agua circula por un sistema de canales inhalantes y exhalantes. Es el modelo más eficiente y permite tamaños grandes. Ejemplo: la mayoría de las esponjas." },
          { type: "callout", variant: "warning", title: "¡Siempre sale en examen!", content: "El profesor ha indicado que los tres modelos estructurales (ascon, sicon, leucon) son pregunta frecuente. Recuerda sus diferencias y ejemplos." }
        ]
      },
      {
        id: "tipos-celulares",
        title: "Tipos celulares de las esponjas",
        content: [
          { type: "heading", level: 2, text: "Una fábrica de células especializadas" },
          { type: "paragraph", text: "Aunque las esponjas no tienen tejidos, poseen una sorprendente variedad de células con funciones específicas." },
          { type: "heading", level: 3, text: "Pinacodermo (capa externa y revestimiento de canales)" },
          { type: "list", items: [
            "Pinacocitos: células planas que recubren la superficie externa (exopinacocitos), la cavidad interna (endopinacocitos) y los canales. Los basopinacocitos fijan la esponja al sustrato.",
            "Porocitos: células cilíndricas con un poro central que conecta el exterior con el interior. Solo presentes en las formas asconoides."
          ] },
          { type: "heading", level: 3, text: "Mesohilo (matriz gelatinosa interna)" },
          { type: "list", items: [
            "Arqueocitos: células ameboides totipotentes. Participan en la digestión, el transporte de nutrientes, la excreción y la reproducción. Pueden diferenciarse en cualquier otro tipo celular.",
            "Esclerocitos: sintetizan las espículas (esqueleto inorgánico). Las espículas silíceas son producidas por una sola célula alrededor de un eje proteico; las calcáreas, por varias células.",
            "Espongocitos, lofocitos y colenocitos: producen el esqueleto orgánico, principalmente colágeno y fibras de esponjina.",
            "Esferulocitos: acumulan metabolitos secundarios y sustancias químicas de defensa (pigmentos, tóxicos). Dan color a la esponja y la protegen de depredadores."
          ] },
          { type: "heading", level: 3, text: "Coanodermo" },
          { type: "list", items: [
            "Coanocitos: células flageladas con un collar de microvellosidades. Generan la corriente de agua y capturan partículas alimenticias. También pueden transformarse en espermatozoides durante la reproducción sexual."
          ] },
          { type: "heading", level: 3, text: "Células contráctiles" },
          { type: "list", items: [
            "Miocitos: rodean los ósculos y los canales principales. Al contraerse regulan el flujo de agua. Son células musculares primitivas, pero no responden a estímulos eléctricos (sí a químicos), por lo que su respuesta es lenta."
          ] }
        ]
      },
      {
        id: "nutricion",
        title: "Nutrición y filtración",
        content: [
          { type: "heading", level: 2, text: "Cómo comen las esponjas" },
          { type: "paragraph", text: "Las esponjas se alimentan de partículas en suspensión (bacterias, microalgas, detritus orgánico). El sistema acuífero filtra grandes volúmenes de agua: una esponja de 1 cm³ puede bombear hasta 22 litros por día." },
          { type: "paragraph", text: "Las partículas más grandes (> 50 μm) son capturadas por los arqueocitos en los canales inhalantes mediante fagocitosis. Las partículas pequeñas (~1 μm) son retenidas por el collar de los coanocitos y luego transferidas a los arqueocitos, que realizan la digestión intracelular. El material no digerido se expulsa por los canales exhalantes." },
          { type: "paragraph", text: "Muchas esponjas albergan bacterias simbiontes (hasta el 40% de su biomasa) que capturan materia orgánica disuelta por difusión y aportan nutrientes. En aguas pobres en partículas, esta simbiosis es esencial." },
          { type: "callout", variant: "example", title: "Una excepción fascinante", content: "Existen esponjas carnívoras (descubiertas en aguas profundas). No tienen sistema acuífero; capturan pequeños crustáceos con tentáculos recubiertos de espículas ganchudas. Digieren la presa externamente con ayuda de bacterias simbiontes y luego absorben los nutrientes." }
        ]
      },
      {
        id: "reproduccion",
        title: "Reproducción y desarrollo",
        content: [
          { type: "heading", level: 2, text: "Asexual y sexual: dos estrategias" },
          { type: "heading", level: 3, text: "Reproducción asexual" },
          { type: "list", items: [
            "Fragmentación: un trozo de esponja se desprende y forma un nuevo individuo.",
            "Gemación: yemas externas se separan y crecen.",
            "Gémulas: estructuras de resistencia típicas de esponjas de agua dulce. Son pequeñas esferas recubiertas de espículas (microscleras) que contienen arqueocitos de reserva. Cuando mueren los tejidos, la gémula sobrevive y, al llegar la primavera, libera los arqueocitos que forman una nueva esponja."
          ] },
          { type: "heading", level: 3, text: "Reproducción sexual" },
          { type: "paragraph", text: "La mayoría de las esponjas son hermafroditas (monoicas), aunque los sexos suelen madurar en momentos distintos (proteroginia o proterandria) para evitar la autofecundación. También hay especies dioicas." },
          { type: "list", items: [
            "Los óvulos se forman a partir de arqueocitos, a menudo alimentados por células nutridoras (trofocitos).",
            "Los espermatozoides se diferencian a partir de coanocitos, que pierden el flagelo y el collar y se transforman en células espermáticas.",
            "La fecundación es interna: los espermatozoides liberados entran por la corriente de agua y son capturados por coanocitos de otra esponja. Estos los transportan hasta los arqueocitos, que los llevan al óvulo.",
            "El zigoto se incuba dentro de la esponja (son vivíparas) hasta convertirse en una larva (anfiblástula o parenquímula).",
            "La larva nada libremente, se fija al sustrato y sufre una metamorfosis para formar una esponja juvenil."
          ] },
          { type: "callout", variant: "tip", title: "Colonización de nuevos ambientes", content: "Las larvas nadadoras permiten la dispersión de las esponjas. Además, las gémulas de las especies de agua dulce pueden ser transportadas por aves o corrientes." }
        ]
      },
      {
        id: "clasificacion",
        title: "Clasificación de los poríferos",
        content: [
          { type: "heading", level: 2, text: "Cuatro clases actuales" },
          { type: "definition", term: "Clase Calcáreas", definition: "Esponjas pequeñas, de hasta 10 cm. Espículas de carbonato cálcico (calcita), solo megascleras. Sin fibras de esponjina. Pueden presentar los tres tipos de organización (ascon, sicon, leucon). Ejemplos: Clathrina (ascon), Sycon (sicon), Leuconia (leucon)." },
          { type: "definition", term: "Clase Demosponjas", definition: "El 90% de las especies. Tamaño y formas muy variables. Organización siempre leucon. Espículas de sílice (SiO₂) y fibras de esponjina (colágeno). Formas comunes: incrustantes, masivas, ramificadas, tubulares. Ejemplos: Suberites (vive sobre conchas de cangrejos ermitaños), Petrosia, Chondrosia, Tethya, Axinella, Agelas, Ircinia, y la esponja de baño (Euspongia)." },
          { type: "definition", term: "Clase Hexactinélidas", definition: "Esponjas vítreas (vidrio) de aguas profundas. Presentan un esqueleto de espículas silíceas hexactinas (con seis radios) fusionadas en una red tridimensional. Carecen de pinacodermo y coanodermo verdaderos; el cuerpo es un sincitio (células fusionadas). Ejemplos: Euplectella (esponja cesta de Venus, vive en el Pacífico), Hyalonema (presente en el Mediterráneo)." },
          { type: "definition", term: "Clase Homoscleromorfas", definition: "Pequeñas, con esqueleto variable (pueden carecer de espículas o tener espículas silíceas diminutas sin eje central). Presentan una lámina basal que recuerda a un tejido rudimentario. Algunos autores las consideran el grupo más cercano a los eumetazoos. Ejemplo: Oscarella." },
          { type: "heading", level: 3, text: "Formas externas (plasticidad morfológica)" },
          { type: "paragraph", text: "La misma especie puede adoptar formas diferentes según el ambiente (corrientes, luz, profundidad). Entre las morfologías habituales encontramos: arborescente/ramificada (Axinella), tubular (Agelas), laminar (Phaquelia), incrustante (Crambe crambe), masiva (Ircinia) y reticulada." }
        ]
      },
      {
        id: "importancia-ecologica",
        title: "Importancia ecológica y aplicaciones",
        content: [
          { type: "heading", level: 2, text: "Las esponjas como ingenieras de ecosistemas" },
          { type: "paragraph", text: "Las esponjas filtran enormes cantidades de agua, contribuyendo a la claridad y a la calidad del agua en arrecifes y fondos marinos. Proporcionan refugio a muchos invertebrados pequeños (crustáceos, poliquetos). Sus defensas químicas son fuente de compuestos bioactivos de interés farmacológico (anticancerígenos, antivirales, antiinflamatorios)." },
          { type: "paragraph", text: "Tradicionalmente, las esponjas de baño (Euspongia, Hippospongia) se han recolectado para uso humano. Hoy en día, la acuicultura de esponjas proporciona material sostenible." },
          { type: "keypoint", points: [
            "Las esponjas son filtradoras clave en ecosistemas marinos.",
            "Producen compuestos químicos únicos de gran interés biomédico.",
            "Su capacidad de regeneración las convierte en modelos para estudiar la totipotencia celular.",
            "El debate sobre su posición (poríferos vs ctenóforos basales) sigue activo en la comunidad científica."
          ] }
        ]
      }
    ]
  },
  {
    id: "cnidarios",
    number: 7,
    title: "Cnidarios",
    subtitle: "Pólipos, medusas y la conquista de la simetría radial",
    sections: [
      {
        id: "caracteristicas-generales",
        title: "Características generales",
        content: [
          { type: "heading", level: 2, text: "¿Qué son los cnidarios?" },
          { type: "paragraph", text: "Los cnidarios son animales diploblásticos (ectodermo y endodermo separados por una mesoglea) con simetría radial. Constituyen el grupo hermano de los bilaterales, es decir, el linaje más próximo a los animales con simetría bilateral. Su nombre proviene de las células urticantes o cnidocitos, su principal sinapomorfía." },
          { type: "list", items: [
            "Son acuáticos, mayoritariamente marinos (algunas especies de agua dulce, como la hidra).",
            "Presentan dos formas corporales básicas: el pólipo (sésil, tubular) y la medusa (libre nadadora, con forma de campana).",
            "Carecen de cefalización (los órganos sensoriales, cuando existen, se agrupan en racimos).",
            "Poseen una cavidad gastrovascular con una sola abertura (boca y ano son la misma).",
            "Tienen tejidos definidos pero órganos rudimentarios.",
            "Su ciclo vital típicamente alterna entre pólipo (reproducción asexual) y medusa (reproducción sexual), aunque existen variaciones.",
            "Se conocen unas 10.000 especies actuales."
          ] },
          { type: "callout", variant: "info", title: "Sinapomorfías vs plesiomorfías", content: "La sinapomorfía exclusiva de los cnidarios es el cnidocito. Las plesiomorfías que comparten con los ancestros son: dos capas embrionarias, simetría radial, larva plánula, red nerviosa motora y células mioepiteliales de origen ectodérmico y endodérmico." }
        ]
      },
      {
        id: "polipo-medusa",
        title: "Pólipo y medusa: dos caras de una misma moneda",
        content: [
          { type: "heading", level: 2, text: "Formas corporales" },
          { type: "paragraph", text: "El pólipo es la forma sésil. Tiene forma de saco con la boca y los tentáculos hacia arriba, fijado al sustrato por un disco basal. La medusa es la forma libre nadadora, con la boca hacia abajo y los tentáculos en el borde de la umbrela (campana). Un pólipo es como una medusa invertida." },
          { type: "table", headers: ["Característica", "Pólipo", "Medusa"], rows: [
            ["Estilo de vida", "Sésil, fijo al sustrato", "Pelágico, nada libremente"],
            ["Forma", "Cilíndrica (copa o tubo)", "Umbrela (campana) con manubrio"],
            ["Boca y tentáculos", "Hacia arriba", "Hacia abajo"],
            ["Mesoglea", "Poco desarrollada", "Muy desarrollada, gelatinosa"],
            ["Reproducción", "Asexual (gemación, fisión)", "Sexual (gametos)"]
          ] },
          { type: "callout", variant: "tip", content: "Una medusa se forma a partir de un pólipo por un proceso llamado estrobilación (en escifozoos) o por gemación (en hidrozoos)." }
        ]
      },
      {
        id: "cnidocitos",
        title: "Cnidocitos: la célula urticante",
        content: [
          { type: "heading", level: 2, text: "El arma secreta de los cnidarios" },
          { type: "paragraph", text: "Los cnidocitos son células especializadas en la defensa y la captura de presas. Contienen una cápsula llamada cnidocisto (o nematocisto) que alberga un filamento enrollado bajo alta presión. En la superficie externa de la célula hay un cnidocilio (pelillo sensorial). Cuando se estimula, el cnidocilio desencadena la apertura del opérculo y el filamento se dispara, clavándose o enrollándose en la presa." },
          { type: "paragraph", text: "Existen varios tipos de cnidocistos según su función: penetrantes (inyectan toxina), envolventes (rodean a la presa), adhesivos (pegan la presa) y glutinantes." },
          { type: "callout", variant: "warning", title: "Importancia médica", content: "Algunas medusas (como la avispa de mar, Chironex fleckeri) tienen veneno extremadamente potente que puede matar a un humano en pocos minutos. Otras producen irritaciones cutáneas dolorosas (carabela portuguesa, Physalia)." }
        ]
      },
      {
        id: "anatomia-fisiologia",
        title: "Anatomía y fisiología",
        content: [
          { type: "heading", level: 2, text: "Capas del cuerpo y sistemas" },
          { type: "heading", level: 3, text: "Epidermis (ectodermo)" },
          { type: "paragraph", text: "Formada por células epitelio-musculares con miofibrillas longitudinales. También contiene cnidocitos, células sensoriales y células intersticiales totipotentes (capaces de regenerar cualquier tipo celular)." },
          { type: "heading", level: 3, text: "Gastrodermis (endodermo)" },
          { type: "paragraph", text: "Compuesta por células nutritivo-musculares con miofibrillas circulares y flagelos que mueven el agua dentro de la cavidad gastrovascular. Participan en la digestión intracelular." },
          { type: "heading", level: 3, text: "Mesoglea" },
          { type: "paragraph", text: "Capa gelatinosa acelular (en hidrozoos) o con células dispersas (en escifozoos y antozoos). Aporta rigidez y flotabilidad." },
          { type: "heading", level: 3, text: "Sistema nervioso" },
          { type: "paragraph", text: "Red difusa de neuronas multipolares y bipolares sin centros integradores. La transmisión es lenta y bidireccional. En las medusas existe un anillo nervioso que coordina la natación. Los cnidarios no tienen cerebro." },
          { type: "heading", level: 3, text: "Órganos sensoriales (solo en medusas)" },
          { type: "list", items: [
            "Estatocistos: detectan la gravedad (equilibrio). Contienen un estatolito (concreción calcárea) que se mueve por gravedad y estimula cilios sensoriales.",
            "Ocelos: fotorreceptores simples que distinguen luz de oscuridad; en algunas medusas pueden formar imágenes rudimentarias."
          ] }
        ]
      },
      {
        id: "alimentacion-digestion",
        title: "Alimentación y digestión",
        content: [
          { type: "heading", level: 2, text: "Carnívoros por excelencia" },
          { type: "paragraph", text: "Los cnidarios son carnívoros. Los pólipos capturan presas del plancton (micrófagos) o pequeños crustáceos y peces (macrófagos) con sus tentáculos. Las medusas atrapan presas que quedan adheridas a sus tentáculos urticantes." },
          { type: "paragraph", text: "La digestión comienza en la cavidad gastrovascular (extracelular) gracias a enzimas secretadas por la gastrodermis. Los fragmentos semidigeridos son fagocitados por las células nutritivo-musculares, donde se completa la digestión (intracelular). Los residuos se expulsan por la boca." },
          { type: "paragraph", text: "Muchos cnidarios (como los corales y algunas medusas) mantienen simbiosis con algas zooxantelas (dinoflagelados). Las algas realizan fotosíntesis y aportan hasta el 90% de los nutrientes del cnidario, a cambio de protección y nutrientes." },
          { type: "callout", variant: "example", title: "Corales y zooxantelas", content: "Esta simbiosis es la base de los arrecifes coralinos. El estrés térmico provoca la expulsión de las algas, causando el blanqueamiento y la muerte del coral." }
        ]
      },
      {
        id: "reproduccion-ciclos",
        title: "Reproducción y ciclos biológicos",
        content: [
          { type: "heading", level: 2, text: "Asexual y sexual se combinan" },
          { type: "heading", level: 3, text: "Reproducción asexual" },
          { type: "list", items: [
            "Gemación: el pólipo produce yemas que se separan o permanecen unidas formando colonias.",
            "Fisión: el pólipo se divide longitudinal o transversalmente en dos individuos.",
            "Gran capacidad de regeneración: un pequeño fragmento puede reconstruir todo el animal."
          ] },
          { type: "heading", level: 3, text: "Reproducción sexual" },
          { type: "paragraph", text: "Las gónadas son simples engrosamientos del epitelio (epidermis en hidrozoos, gastrodermis en el resto). Los gametos derivan de células intersticiales. La fecundación puede ser externa (en medusas) o interna (en antozoos). El desarrollo da lugar a una larva plánula ciliada que nada hasta fijarse y transformarse en pólipo." },
          { type: "heading", level: 3, text: "Tipos de ciclo vital" },
          { type: "definition", term: "Holopelágico", definition: "Solo existe la fase medusa (ej. Aglaura). El ciclo es directo, sin pólipo." },
          { type: "definition", term: "Bentopelágico", definition: "Alternancia de generaciones: pólipo (bentónico) produce medusas (pelágicas), y las medusas producen gametos que originan nuevos pólipos. Es el ciclo más común, típico de muchos hidrozoos y escifozoos." },
          { type: "definition", term: "Holobentónico", definition: "Solo existe la fase pólipo; las medusas están ausentes o son muy reducidas. Ejemplo: Hydra (hidrozoo de agua dulce)." }
        ]
      },
      {
        id: "clasificacion",
        title: "Clasificación de los cnidarios",
        content: [
          { type: "heading", level: 2, text: "Cuatro clases vivientes" },
          { type: "heading", level: 3, text: "Clase Anthozoa (antozoos)" },
          { type: "paragraph", text: "Son exclusivamente pólipos (no hay fase medusa). Son los cnidarios más diversos (más de 6.000 especies). Su cavidad gastrovascular está dividida por mesenterios (septos). Incluyen las anémonas, los corales duros (madreporarios), los corales blandos (octocorales) y las gorgonias. Importantes constructores de arrecifes." },
          { type: "heading", level: 3, text: "Clase Medusozoa (medusozoos)" },
          { type: "paragraph", text: "Agrupa a los cnidarios que presentan fase medusa en su ciclo (aunque a veces muy reducida). Se subdivide en varias subclases:" },
          { type: "list", items: [
            "Hydrozoa (hidrozoos): pólipos generalmente coloniales y medusas con velo (velarium). Ejemplos: Hydra (pólipo solitario de agua dulce), Obelia (colonia marina), Physalia (carabela portuguesa, una colonia flotante).",
            "Scyphozoa (escifozoos): medusas grandes sin velo, con mesoglea muy desarrollada. El pólipo (escifistoma) produce medusas por estrobilación. Ejemplos: Aurelia (medusa luna), Pelagia, Rhizostoma (pulmón de mar).",
            "Cubozoa (cubozoos): medusas en forma de cubo, con cuatro tentáculos (o grupos de tentáculos) y velario. Potente veneno. Ejemplos: Chironex fleckeri (avispa de mar, letal), Carybdea marsupialis (Mediterráneo).",
            "Staurozoa (estaurozoos): medusas sésiles (viven fijas al sustrato), con forma de copa y 8 brazos. Ejemplos: Lucernaria."
          ] },
          { type: "callout", variant: "info", title: "Endocnidozoa: cnidarios parásitos", content: "Incluye a Myxozoa y Polypodiozoa, antiguamente considerados protistas. Son parásitos intracelulares de peces e invertebrados. Su morfología está extremadamente simplificada, pero conservan cnidocistos." }
        ]
      },
      {
        id: "antozoos",
        title: "Antozoos en detalle",
        content: [
          { type: "heading", level: 2, text: "Las anémonas y los corales" },
          { type: "paragraph", text: "Los antozoos tienen una cavidad gastrovascular dividida por septos completos o incompletos. La boca se abre en una actinofaringe (tubo que desciende hacia el interior). En los extremos de los septos pueden tener filamentos mesentéricos con cnidocitos y glándulas digestivas." },
          { type: "list", items: [
            "Hexacorallia: tentáculos lisos, no pinnados. Los mesenterios son múltiplos de 6. Incluyen anémonas de mar (Actiniaria), corales madreporarios (Scleractinia, constructores de arrecifes) y corales negros (Antipatharia).",
            "Octocorallia: ocho tentáculos pinnados (con plumas) y ocho mesenterios. Incluyen corales blandos (Alcyonacea), gorgonias (Gorgoniidae) y coral rojo (Corallium rubrum). Su esqueleto puede ser de espículas calcáreas sueltas o de un eje axial córneo.",
            "Ceriantharia: anémonas tubícolas que viven dentro de un tubo mucoso. Tienen dos coronas de tentáculos (marginales y labiales). No poseen disco pedal, sino un extremo aboral perforado."
          ] },
          { type: "callout", variant: "warning", title: "Blanqueamiento de corales", content: "El aumento de la temperatura del mar provoca que los corales expulsen las zooxantelas, perdiendo su color y su principal fuente de alimentación. Si la situación se prolonga, el coral muere. Este fenómeno afecta gravemente a los arrecifes de todo el mundo." }
        ]
      },
      {
        id: "hidrozoos",
        title: "Hidrozoos: pequeños pero diversos",
        content: [
          { type: "heading", level: 2, text: "Los cnidarios más versátiles" },
          { type: "paragraph", text: "Los hidrozoos presentan alternancia de generaciones con pólipos coloniales (raramente solitarios) y medusas pequeñas con velo (el velo es una membrana que reduce la abertura de la umbrela). Las medusas tienen gónadas epidérmicas (visibles desde el exterior)." },
          { type: "paragraph", text: "Los pólipos pueden ser polimórficos dentro de una misma colonia: gastrozooides (alimentación), gonozooides (reproducción), dactilozooides (defensa). La colonia puede estar recubierta por un perisacro quitinoso (tecada) o no (atecada)." },
          { type: "list", items: [
            "Ejemplo de ciclo típico: Obelia. Los gonozooides liberan medusas que producen gametos; el zigoto da una larva plánula que se fija y origina una nueva colonia.",
            "Hydra: hidrozoo de agua dulce sin fase medusa; se reproduce asexualmente por gemación y sexualmente con gónadas temporales.",
            "Physalia (carabela portuguesa): no es una medusa sino una colonia flotante de pólipos especializados. Su velo urticante puede ser peligroso para los humanos."
          ] }
        ]
      },
      {
        id: "escifozoos-cubozoos",
        title: "Escifozoos y cubozoos: las grandes medusas",
        content: [
          { type: "heading", level: 2, text: "Medusas sin velo y medusas cúbicas" },
          { type: "heading", level: 3, text: "Scyphozoa" },
          { type: "paragraph", text: "Las medusas escifozoas son las típicas grandes medusas de hasta 2 metros de diámetro. Carecen de velo, tienen la mesoglea con células y la cavidad gastrovascular presenta cuatro bolsas y canales. El pólipo (escifistoma) es pequeño y se reproduce asexualmente por estrobilación: se divide transversalmente en una pila de discos (éfiros) que se liberan y se convierten en medusas adultas." },
          { type: "list", items: [
            "Órdenes destacados: Semaeostomeae (Aurelia, Chrysaora, Pelagia) y Rhizostomeae (Rhizostoma, Cotylorhiza).",
            "Algunas presentan simbiosis con zooxantelas (Cassiopea, la medusa invertida)."
          ] },
          { type: "heading", level: 3, text: "Cubozoa" },
          { type: "paragraph", text: "Medusas cúbicas con cuatro lados planos, de ahí su nombre. Son nadadoras activas y depredadoras eficaces. Presentan un velarium (un repliegue del margen) en lugar de velo. Cada tentáculo termina en una pedalia. Los ropalios (órganos sensoriales) contienen ocelos complejos y estatocistos." },
          { type: "list", items: [
            "Su veneno es neurotóxico y cardiotóxico extremadamente potente. Chironex fleckeri (avispa de mar) es considerada el animal marino más venenoso.",
            "En el Mediterráneo está presente Carybdea marsupialis, cuya picadura es muy dolorosa pero raramente mortal."
          ] }
        ]
      },
      {
        id: "arrecifes-coralinos",
        title: "Arrecifes coralinos: las selvas del mar",
        content: [
          { type: "heading", level: 2, text: "Estructura, ecología y amenazas" },
          { type: "paragraph", text: "Los arrecifes coralinos son formaciones rocosas calcáreas construidas principalmente por corales madreporarios (Scleractinia). Los pólipos segregan un esqueleto de carbonato cálcico que se acumula generación tras generación. Su crecimiento es muy lento: de 1 a 2 cm por año." },
          { type: "paragraph", text: "La simbiosis con zooxantelas (algas dinoflageladas) es imprescindible. Por eso los arrecifes se limitan a aguas cálidas (temperatura > 18°C), transparentes y menos de 40 metros de profundidad." },
          { type: "list", items: [
            "Los arrecifes albergan cerca del 25% de la biodiversidad marina, a pesar de ocupar menos del 1% del fondo oceánico.",
            "Son barreras naturales que protegen las costas de la erosión y los temporales.",
            "Sustentan pesquerías y el turismo en muchas regiones tropicales."
          ] },
          { type: "callout", variant: "warning", title: "El blanqueamiento masivo", content: "El calentamiento global provoca episodios de blanqueamiento a gran escala. En 2016 y 2017, la Gran Barrera de Coral perdió más de la mitad de sus corales vivos por este fenómeno. Sin una reducción de las emisiones de CO₂, se prevé que la mayoría de los arrecifes desaparezcan en 2050." }
        ]
      },
      {
        id: "resumen-cnidarios",
        title: "Resumen: claves de los cnidarios",
        content: [
          { type: "heading", level: 2, text: "Lo que hay que recordar" },
          { type: "keypoint", points: [
            "Los cnidarios son diploblásticos con simetría radial y cnidocitos (células urticantes).",
            "Alternancia de generaciones: pólipo (asexual) y medusa (sexual), aunque algunos grupos han perdido una de las fases.",
            "La digestión es mixta (extracelular en cavidad gastrovascular e intracelular en gastrodermis).",
            "Los antozoos (corales y anémonas) son exclusivamente pólipos; los medusozoos incluyen hidrozoos, escifozoos, cubozoos y estaurozoos.",
            "Los arrecifes de coral son ecosistemas esenciales y están en peligro por el cambio climático."
          ] }
        ]
      }
    ]
  },
  {
    id: "platelmintos",
    number: 8,
    title: "Platelmintos",
    subtitle: "Gusanos planos: vida libre y parasitismo",
    sections: [
      {
        id: "caracteristicas-generales",
        title: "Características generales",
        content: [
          { type: "heading", level: 2, text: "¿Qué son los platelmintos?" },
          { type: "paragraph", text: "Los platelmintos son los primeros animales bilaterales que estudiamos. Presentan una marcada morfología dorsiventral (aplastados). Su simetría bilateral y la búsqueda activa de alimento llevaron a la cefalización (concentración de órganos sensoriales y nerviosos en la región anterior)." },
          { type: "list", items: [
            "Triblásticos, bilaterales, protóstomos y acelomados (no tienen cavidad interna).",
            "Cuerpo blando y aplanado, vermiforme en muchos grupos.",
            "Epidermis celular o sincitial (en parásitos).",
            "Sistema digestivo incompleto: un solo orificio (boca y ano son la misma abertura).",
            "Sistema excretor con protonefridios (células flamígeras).",
            "Generalmente hermafroditas (monoicos).",
            "Desarrollo directo o indirecto (con larvas).",
            "Segmentación espiral del huevo (carácter de Spiralia).",
            "Sin sistema circulatorio ni respiratorio; el intercambio gaseoso se realiza por difusión a través del tegumento."
          ] },
          { type: "callout", variant: "info", title: "Compromiso superficie/volumen", content: "La ausencia de sistemas de transporte obliga a que el cuerpo sea aplanado o muy pequeño para que la difusión sea eficaz. Por eso los platelmintos viven en medios acuáticos o muy húmedos, o como parásitos." }
        ]
      },
      {
        id: "clasificacion",
        title: "Clasificación de los platelmintos",
        content: [
          { type: "heading", level: 2, text: "Grupos principales" },
          { type: "paragraph", text: "Tradicionalmente se dividían en Turbelarios (vida libre), Trematodos (duelas), Monogéneos (ectoparásitos de peces) y Cestodos (tenias). Hoy se sabe que los turbelarios son un grupo parafilético y que los parásitos forman un clado llamado Neodermata, caracterizado por un tegumento sincitial (pérdida de la epidermis ciliada)." },
          { type: "list", items: [
            "Turbelarios (parafilético): vida libre, marinos, dulceacuícolas o terrestres húmedos.",
            "Neodermata: parásitos con tegumento sincitial, ventosas y ganchos.",
            "  - Trematodos (duelas): parásitos internos de moluscos y vertebrados.",
            "  - Monogéneos: ectoparásitos de peces, ciclo directo.",
            "  - Cestodos (tenias): parásitos del intestino de vertebrados, sin tubo digestivo."
          ] }
        ]
      },
      {
        id: "turbelarios",
        title: "Turbelarios (vida libre)",
        content: [
          { type: "heading", level: 2, text: "Turbolarios" },
          { type: "paragraph", text: "Los turbelarios de vida libre como las tricládidas son acelomados con el cuerpo cubierto por una epidermis ciliada que contiene numerosas glándulas y rabditos (estructuras defensivas que secretan mucus). El mesénquima (parénquima) rellena el espacio entre órganos y contiene células totipotentes (neoblastos) que permiten una extraordinaria capacidad de regeneración." },
          { type: "list", items: [
            "Locomoción: por cilios (moco ciliar) y contracciones musculares.",
            "Aparato digestivo: faringe evaginable (trompa) e intestino ramificado (tres ramas en tricládidos). Digestión extracelular e intracelular.",
            "Sistema excretor: protonefridios con células flamígeras (flame cells) que regulan la presión osmótica y eliminan amoníaco.",
            "Sistema nervioso: ganglios cerebrales y cordones nerviosos longitudinales (hiponeuro). Órganos sensoriales: ocelos (manchas oculares), estatocistos, receptores táctiles y quimiorreceptores.",
            "Reproducción: hermafroditas, fecundación cruzada interna. Huevos endolecíticos o ectolecíticos. Desarrollo directo o indirecto (larva de Müller en algunos marinos).",
            "Reproducción asexual: fisión y regeneración (un fragmento puede reconstruir todo el animal)."
          ] },
          { type: "callout", variant: "example", title: "Planaria", content: "Dugesia (planaria de agua dulce) es un modelo clásico en estudios de regeneración: un trozo de 1/279 del animal puede regenerar un individuo completo." }
        ]
      },
      {
        id: "neodermata",
        title: "Neodermata: adaptaciones al parasitismo",
        content: [
          { type: "heading", level: 2, text: "¿Qué tienen en común los platelmintos parásitos?" },
          { type: "list", items: [
            "Pérdida de la epidermis ciliada; sustituida por un tegumento sincitial (neodermis) que protege al parásito de las enzimas del hospedador y absorbe nutrientes.",
            "Órganos de fijación: ventosas, ganchos, espinas (ventosa oral, ventosa ventral, bothridios, etc.).",
            "Reducción o pérdida del sistema digestivo (en cestodos, ausente por completo).",
            "Sistema nervioso y órganos sensoriales muy reducidos.",
            "Adaptaciones metabólicas: respiración anaerobia en ambientes pobres en oxígeno.",
            "Aparato reproductor muy desarrollado (proglótides en cestodos, alta producción de huevos).",
            "Ciclos vitales complejos con uno o varios hospedadores."
          ] }
        ]
      },
      {
        id: "trematodos",
        title: "Trematodos (duelas)",
        content: [
          { type: "heading", level: 2, text: "Digenia: el ciclo más complejo" },
          { type: "paragraph", text: "Los trematodos digeneos tienen forma de hoja, con dos ventosas (oral y ventral). Son parásitos de moluscos (primer hospedador) y vertebrados (hospedador definitivo)." },
          { type: "list", items: [
            "Hermafroditas (excepto los esquitosomas, que son dioicos).",
            "Fecundación interna cruzada.",
            "Ciclo heteroxeno: huevo → miracidio (larva ciliada) → esporocisto → redia → cercaria → metacercaria (enquistada) → adulto.",
            "Proliferación asexual dentro del hospedador intermediario (esporocistos y redias)."
          ] },
          { type: "heading", level: 3, text: "Ejemplos de interés médico-veterinario" },
          { type: "definition", term: "Clonorchis sinensis", definition: "Parásito de los conductos biliares de humanos y otros mamíferos. Se adquiere por consumo de pescado de agua dulce crudo (metacercarias en el músculo). Muy frecuente en el sudeste asiático; puede causar colangitis y cáncer de vías biliares." },
          { type: "definition", term: "Fasciola hepatica", definition: "Duela hepática de rumiantes y humanos. Ciclo con caracol de agua dulce (Lymnaea) como primer hospedador. Las metacercarias se enquistan en vegetación acuática; el consumo de berros infectados produce fascioliasis (lesiones hepáticas)." },
          { type: "definition", term: "Schistosoma spp.", definition: "Parásitos dioicos (macho y hembra separados). Viven en las venas del intestino o de la vejiga. Los huevos espinosos atraviesan los capilares y salen con heces u orina. La cercaria furcocerca (cola bifurcada) penetra activamente por la piel humana durante el baño. Causa esquistosomiasis (bilarziasis), enfermedad crónica debilitante que afecta a más de 200 millones de personas en África, Asia y América del Sur." }
        ]
      },
      {
        id: "monogeneos",
        title: "Monogéneos",
        content: [
          { type: "heading", level: 2, text: "Ectoparásitos de peces" },
          { type: "paragraph", text: "Los monogéneos son parásitos principalmente de peces (branquias, piel), aunque también de anfibios y reptiles marinos. Su característica principal es el ciclo directo (un solo hospedador) y la presencia de un opistohaptor (órgano de fijación posterior con ganchos y ventosas)." },
          { type: "list", items: [
            "Hermafroditas, fecundación cruzada.",
            "Ovíparos u ovovivíparos.",
            "Larva ciliada llamada oncomiracidio que busca activamente al hospedador.",
            "Pueden producir graves pérdidas económicas en acuicultura."
          ] },
          { type: "callout", variant: "warning", title: "Gyrodactylus salaris", content: "Este monogéneo es una amenaza para las poblaciones de salmón atlántico. Se introdujo en Noruega a través de peces de piscifactoría y causó el colapso de varios ríos salmoneros. Es ovovivíparo y puede transmitirse directamente por contacto." }
        ]
      },
      {
        id: "cestodos",
        title: "Cestodos (tenias)",
        content: [
          { type: "heading", level: 2, text: "Parásitos intestinales sin tubo digestivo" },
          { type: "paragraph", text: "Los cestodos son parásitos del intestino de vertebrados. Su cuerpo está dividido en escólex (órgano de fijación, con ventosas o ganchos), cuello (zona de crecimiento) y estróbilo (serie de proglótides). Cada proglótide contiene un aparato reproductor completo (hermafrodita)." },
          { type: "list", items: [
            "Carecen completamente de sistema digestivo; absorben nutrientes directamente a través del tegumento.",
            "Proglótides maduras (grávidas) se desprenden y liberan huevos al exterior.",
            "Ciclo heteroxeno: uno o dos hospedadores intermediarios (herbívoros, peces, artrópodos).",
            "Larvas: oncosfera (con ganchos) y cisticerco, cisticercoide, hidátide, etc."
          ] },
          { type: "heading", level: 3, text: "Ejemplos" },
          { type: "definition", term: "Taenia solium", definition: "Tenía del cerdo (hospedador intermediario) y humana (hospedador definitivo). El consumo de cerdo mal cocido infecta con cisticercos. Si el ser humano ingiere los huevos (por fecalismo oral), se desarrollan cisticercos en el sistema nervioso central (cisticercosis neurocística), una enfermedad grave que puede causar epilepsia y muerte." },
          { type: "definition", term: "Echinococcus granulosus", definition: "Parásito pequeño (unos pocos milímetros) de cánidos (perros, lobos). Los hospedadores intermediarios son ovejas, caballos y humanos. La larva forma quistes hidatídicos en hígado y pulmones. El quiste crece lentamente y puede alcanzar grandes tamaños; la rotura causa reacciones anafilácticas muy graves." },
          { type: "definition", term: "Diphyllobothrium latum", definition: "Tenía del pescado (amplio en zonas con consumo de pescado crudo, como el norte de Europa). Causa anemia por deficiencia de vitamina B12." }
        ]
      },
      {
        id: "vocabulario-platelmintos",
        title: "Vocabulario clave",
        content: [
          { type: "heading", level: 2, text: "Términos esenciales" },
          { type: "definition", term: "Acelomado", definition: "Animal sin cavidad corporal interna; el mesodermo es compacto. Ejemplo: platelmintos." },
          { type: "definition", term: "Protonefridio", definition: "Sistema excretor con células flamígeras (solenocitos). Típico de platelmintos, nemertinos y larvas de otros grupos." },
          { type: "definition", term: "Neoblasto", definition: "Célula totipotente del mesénquima de turbelarios; responsable de la regeneración." },
          { type: "definition", term: "Neodermis", definition: "Tegumento sincitial característico de los platelmintos parásitos (Neodermata). Sustituye a la epidermis ciliada." },
          { type: "definition", term: "Proglótide", definition: "Segmento del estróbilo de un cestodo; contiene un aparato reproductor completo." },
          { type: "definition", term: "Cisticerco", definition: "Larva de cestodo en forma de vesícula con un escólex invaginado. Típica de Taenia." },
          { type: "definition", term: "Miracidio", definition: "Primera larva de los trematodos digeneos, ciliada, que busca activamente al caracol hospedador." },
          { type: "definition", term: "Cercaria", definition: "Larva de trematodo con cola, que abandona el caracol y busca al segundo hospedador o se enquista." }
        ]
      },
      {
        id: "resumen-platelmintos",
        title: "Resumen: claves de los platelmintos",
        content: [
          { type: "heading", level: 2, text: "Lo que hay que recordar" },
          { type: "keypoint", points: [
            "Son acelomados, bilaterales y protóstomos con segmentación espiral.",
            "Los de vida libre (turbelarios) tienen gran capacidad de regeneración por neoblastos.",
            "Los parásitos (Neodermata) han perdido la epidermis ciliada y desarrollaron ventosas y ganchos.",
            "Los trematodos tienen ciclos complejos con reproducción asexual en caracoles (esporocistos, redias).",
            "Los cestodos carecen de tubo digestivo y están formados por proglótides; su larva (cisticerco, hidátide) puede ser muy patológica en humanos."
          ] }
        ]
      }
    ]
  },
  {
    id: "anelidos",
    number: 9,
    title: "Anélidos",
    subtitle: "Gusanos segmentados: del mar al suelo",
    sections: [
      {
        id: "caracteristicas-generales",
        title: "Características generales",
        content: [
          { type: "heading", level: 2, text: "¿Qué hace únicos a los anélidos?" },
          { type: "paragraph", text: "Los anélidos son el primer grupo de animales que presenta una verdadera segmentación (metamería). Su cuerpo está formado por la repetición seriada de unidades estructurales llamadas metámeros o anillos. Esta organización les ha permitido colonizar ambientes marinos, de agua dulce y terrestres." },
          { type: "list", items: [
            "Triblásticos, bilaterales, protóstomos y celomados.",
            "Celoma muy desarrollado que actúa como esqueleto hidrostático.",
            "Metamería homónoma (segmentos similares) o heterónoma (especialización regional).",
            "Crecimiento teloblástico: nuevos segmentos se añaden delante del pigidio.",
            "Pared corporal con cutícula de colágeno (no se muda).",
            "Quetas (estructuras quitinosas de fijación y locomoción) producidas por quetoblastos.",
            "Sistema digestivo completo (boca y ano).",
            "Sistema circulatorio cerrado (sangre circula por vasos).",
            "Sistema excretor con metanefridios (un par por segmento).",
            "Sistema nervioso hiponeuro: ganglios cerebrales y cordón nervioso ventral doble.",
            "Muchas especies con larva trocófora (carácter plesiomórfico).",
            "Unas 17.000 especies descritas, mayoritariamente marinas."
          ] },
          { type: "callout", variant: "info", title: "Novedades evolutivas", content: "Con los anélidos aparecen por primera vez el sistema circulatorio cerrado, el sistema digestivo completo y un celoma bien compartimentado." }
        ]
      },
      {
        id: "metameria",
        title: "Metamería y organización corporal",
        content: [
          { type: "heading", level: 2, text: "La fuerza de repetir segmentos" },
          { type: "paragraph", text: "En los anélidos, el cuerpo se divide en tres regiones diferenciadas: prostomio (primer segmento, delante de la boca), peristomio (segmento que contiene la boca) y pigidio (último segmento, con el ano). Los segmentos intermedios son metámeros homólogos que pueden estar especializados (tagmatización)." },
          { type: "definition", term: "Metamería homónoma", definition: "Todos los segmentos son muy similares entre sí, excepto los extremos. Ejemplo: lombriz de tierra." },
          { type: "definition", term: "Metamería heterónoma", definition: "Los segmentos se agrupan en regiones con funciones distintas (tagmas). Ejemplo: poliquetos con región cefálica, tórax y abdomen." },
          { type: "paragraph", text: "Cada segmento contiene una porción del celoma, ganglios nerviosos, metanefridios, vasos sanguíneos y a veces quetas o parapodios. Los septos (tabiques) separan los segmentos y permiten hidrostatizar cada metámero de forma independiente, lo que facilita la locomoción ondulatoria." }
        ]
      },
      {
        id: "pared-corporal-quetas",
        title: "Pared corporal, quetas y locomoción",
        content: [
          { type: "heading", level: 2, text: "Estructura externa y movimiento" },
          { type: "paragraph", text: "La pared del cuerpo está formada por epidermis (células cilíndricas con cutícula colágena), una capa de musculatura circular y otra de musculatura longitudinal, y el celoma interno presurizado. La contracción alternante de estos músculos permite el movimiento ondulatorio o peristáltico." },
          { type: "paragraph", text: "Las quetas son estructuras quitinosas en forma de espinas que se proyectan desde la pared del cuerpo. Son producidas por células llamadas quetoblastos y pueden estar agrupadas en haces. En los poliquetos se insertan en los parapodios (apéndices laterales). En oligoquetos e hirudíneos son más simples y menos numerosas." },
          { type: "definition", term: "Parapodios", definition: "Apéndices laterales locomotores, típicos de poliquetos, divididos en notopodio (rama dorsal) y neuropodio (rama ventral). Cada parapodio lleva una o varias quetas y a menudo branquias." },
          { type: "callout", variant: "tip", content: "Las lombrices de tierra usan las quetas para anclarse al suelo mientras contraen y expanden sus segmentos. Las sanguijuelas, en cambio, han perdido las quetas y se desplazan con ventosas." }
        ]
      },
      {
        id: "sistemas-internos",
        title: "Sistemas internos",
        content: [
          { type: "heading", level: 2, text: "Organización funcional" },
          { type: "heading", level: 3, text: "Aparato digestivo" },
          { type: "paragraph", text: "Completo (boca, faringe, esófago, buche, molleja, intestino y ano). Adaptado a diferentes dietas: depredadores (con mandíbulas), detritívoros (ingieren sedimento), filtradores (con tentáculos ciliados) y hematófagos (hirudíneos con ventosas y secreciones anticoagulantes)." },
          { type: "heading", level: 3, text: "Sistema circulatorio" },
          { type: "paragraph", text: "Cerrado. La sangre circula por vasos longitudinales (dorsal y ventral) y vasos transversales (arcos aórticos, que actúan como corazones). La hemoglobina (o clorocruorina, de color verde) está disuelta en el plasma. En los oligoquetos, el vaso dorsal es contráctil y bombea sangre hacia delante." },
          { type: "heading", level: 3, text: "Sistema excretor" },
          { type: "paragraph", text: "Metanefridios: un par por segmento. Cada metanefridio consta de un nefrostoma (embudo ciliado que recoge líquido celómico), un conducto contorneado y un nefridioporo (abertura externa). Eliminan desechos nitrogenados y regulan el equilibrio hídrico." },
          { type: "heading", level: 3, text: "Sistema nervioso" },
          { type: "paragraph", text: "Hiponeuro: cerebro (ganglios supraesofágicos) conectado por comisuras periesofágicas a un cordón nervioso ventral doble, con un par de ganglios por segmento. Los poliquetos presentan ocelos, estatocistos y órganos nucales (quimiorreceptores)." },
          { type: "heading", level: 3, text: "Respiración" },
          { type: "paragraph", text: "Cutánea a través del tegumento (debe mantenerse húmedo). Los poliquetos marinos desarrollan branquias ramificadas en los parapodios. La lombriz de tierra respira por la piel y requiere ambientes húmedos." }
        ]
      },
      {
        id: "poliquetos",
        title: "Poliquetos (Polychaeta)",
        content: [
          { type: "heading", level: 2, text: "Los anélidos más diversos" },
          { type: "paragraph", text: "Los poliquetos son mayoritariamente marinos, bentónicos o pelágicos. Se caracterizan por presentar parapodios con abundantes quetas (de ahí su nombre: muchas quetas). Incluyen formas errantes (depredadoras, como Nereis) y sedentarias (tubícolas, filtradoras, como los gusanos tubícolas o el gusano de Navidad)." },
          { type: "list", items: [
            "Cabeza diferenciada: prostomio (con antenas, palpos, ojos) y peristomio (con la boca y a menudo cirros tentaculares).",
            "Parapodios con dos ramas (notopodio y neuropodio) provistas de quetas y a menudo con cirros dorsales y ventrales.",
            "Faringe evaginable con mandíbulas quitinosas en formas depredadoras.",
            "Algunos desarrollan branquias para el intercambio gaseoso.",
            "Reproducción dioica (sexos separados). Fecundación externa. Desarrollo indirecto con larva trocófora.",
            "En algunas especies, fenómeno de epitoquia: el animal produce una región posterior especializada (epitoco) que se separa y libera los gametos (reproducción sincronizada)."
          ] },
          { type: "callout", variant: "example", title: "Arenicola marina", content: "El gusano de la arena, común en playas, es un poliqueto sedentario que vive en galerías en forma de U. Excava el sedimento y se alimenta de la materia orgánica que contiene." }
        ]
      },
      {
        id: "clitelados",
        title: "Clitelados: oligoquetos e hirudíneos",
        content: [
          { type: "heading", level: 2, text: "El clitelo, una innovación reproductora" },
          { type: "paragraph", text: "Los clitelados son un grupo monofilético de anélidos que se caracterizan por la presencia del clitelo, una banda glandular en los segmentos anteriores que secreta un capullo donde se depositan los huevos. Incluyen a los oligoquetos (lombrices de tierra y acuáticas) y los hirudíneos (sanguijuelas)." },
          { type: "heading", level: 3, text: "Oligoquetos (Oligochaeta)" },
          { type: "paragraph", text: "Poseen pocas quetas (de ahí su nombre) insertadas directamente en la pared del cuerpo, sin parapodios. Son hermafroditas con fecundación interna. El clitelo produce un capullo que recibe los óvulos y los espermatozoides. Desarrollo directo (sin larva)." },
          { type: "list", items: [
            "Ejemplo: lombriz de tierra (Lumbricus terrestris).",
            "Vida en el suelo (edáfica) o en agua dulce.",
            "Se alimentan de detritus orgánico (geófagos); su digestión puede incluir una molleja con partículas de arena.",
            "Importancia ecológica: airean y mezclan el suelo, mejoran su estructura y fertilidad."
          ] },
          { type: "heading", level: 3, text: "Hirudíneos (Hirudinea)" },
          { type: "paragraph", text: "Sanguijuelas. Carecen de quetas y parapodios. Tienen ventosas anterior (alrededor de la boca) y posterior (fijación). El número de segmentos es fijo (33 en la mayoría), pero externamente pueden estar subdivididos en anillos secundarios." },
          { type: "list", items: [
            "La mayoría son hematófagas (sangre de vertebrados), aunque algunas son depredadoras de pequeños invertebrados.",
            "Glándulas salivales secretan anestésico, anticoagulante (hirudina) y vasodilatador.",
            "Hermafroditas con fecundación interna mediante espermatóforos (inyección hipodérmica).",
            "El clitelo produce un capullo que se deposita en el sustrato; desarrollo directo.",
            "Se emplearon históricamente en sangrías (medicina humoral) y hoy en microcirugía para reducir hematomas."
          ] },
          { type: "callout", variant: "warning", title: "Parasitismo", content: "Algunas sanguijuelas son vectores de protozoos (por ejemplo, transmiten Trypanosoma a peces). En acuicultura pueden causar pérdidas económicas." }
        ]
      },
      {
        id: "reproduccion-anelidos",
        title: "Reproducción en anélidos",
        content: [
          { type: "heading", level: 2, text: "Estrategias diversas" },
          { type: "definition", term: "Poliquetos (generalmente dioicos)", definition: "Fecundación externa (liberación sincronizada de gametos, a menudo con epitoquia). Desarrollo indirecto con larva trocófora." },
          { type: "definition", term: "Oligoquetos (hermafroditas)", definition: "Dos individuos se aparean y transfieren espermatozoides. Cada uno secreta un capullo por el clitelo, que se desliza hacia delante recogiendo los óvulos y los espermatozoides. Desarrollo directo." },
          { type: "definition", term: "Hirudíneos (hermafroditas)", definition: "Cópula con espermatóforos que pueden introducirse mediante un pene o por inyección hipodérmica. El capullo se deposita fuera del cuerpo." }
        ]
      },
      {
        id: "importancia-anelidos",
        title: "Importancia ecológica y aplicada",
        content: [
          { type: "heading", level: 2, text: "Ingenieros del suelo y clave en redes tróficas" },
          { type: "paragraph", text: "Las lombrices de tierra son fundamentales para la fertilidad del suelo: excavan galerías que airean y drenan el terreno, incorporan materia orgánica a capas profundas y sus deyecciones (vermicompost) son ricas en nutrientes." },
          { type: "paragraph", text: "En el mar, los poliquetos son una parte importante de la dieta de peces y crustáceos. Algunas especies son indicadoras de calidad ambiental (Capitella capitata, por ejemplo, prolifera en zonas eutrofizadas)." },
          { type: "paragraph", text: "Las sanguijuelas tienen aplicaciones médicas (mejoran la circulación en injertos) y farmacológicas (la hirudina se produce por ingeniería genética como anticoagulante)." },
          { type: "keypoint", points: [
            "Los anélidos son los primeros celomados con verdadera segmentación (metamería).",
            "El sistema circulatorio cerrado y el digestivo completo son novedades evolutivas importantes.",
            "Los poliquetos son el grupo más diverso, con parapodios y quetas abundantes.",
            "Los clitelados (oligoquetos e hirudíneos) tienen clitelo y desarrollo directo.",
            "Las lombrices mejoran la calidad del suelo; las sanguijuelas tienen interés médico."
          ] }
        ]
      }
    ]
  },
  {
    id: "moluscos",
    number: 10,
    title: "Moluscos",
    subtitle: "El cuerpo blando que conquistó todos los ambientes",
    sections: [
      {
        id: "caracteristicas-generales",
        title: "Características generales",
        content: [
          { type: "heading", level: 2, text: "¿Qué define a un molusco?" },
          { type: "paragraph", text: "Los moluscos son uno de los filos más diversos del reino animal, con más de 100.000 especies vivientes. Su nombre significa \"blandos\", en referencia a su cuerpo no segmentado y desprovisto de esqueleto interno rígido (aunque muchos secretan una concha calcárea externa). Han colonizado todos los ambientes: mares, aguas dulces y tierra firme." },
          { type: "list", items: [
            "Triblásticos, bilaterales, protóstomos, celomados (celoma reducido).",
            "Cuerpo dividido en tres regiones: cabeza (con órganos sensoriales), pie muscular (locomoción) y masa visceral (órganos internos).",
            "Manto: pliegue dorsal de la pared corporal que segrega la concha (cuando existe) y delimita la cavidad paleal.",
            "Concha (a menudo reducida o perdida secundariamente) de carbonato cálcico, con tres capas: periostraco (orgánico), ostraco (prismas de calcita) e hipostraco (láminas de aragonito, a veces nacarado).",
            "Rádula: estructura quitinosa raspadora (excepto en bivalvos).",
            "Sistema circulatorio abierto (excepto cefalópodos, que lo tienen cerrado).",
            "Respiración por branquias (ctenidios), pulmón (gasterópodos terrestres) o superficie del manto.",
            "Sistema excretor con metanefridios (riñones).",
            "Sistema nervioso ganglionar; en cefalópodos es el más complejo de los invertebrados.",
            "Desarrollo con larva trocófora y a menudo larva veliger (en muchos marinos)."
          ] },
          { type: "callout", variant: "info", title: "Sinapomorfías del filo", content: "Pie muscular, manto, concha (aunque secundariamente perdida en algunos) y rádula (excepto bivalvos)." }
        ]
      },
      {
        id: "morfologia-corporal",
        title: "Morfología corporal",
        content: [
          { type: "heading", level: 2, text: "Plan básico del molusco" },
          { type: "definition", term: "Pie", definition: "Estructura muscular ventral, generalmente con glándulas mucosas y cilios. Función locomotora (reptación, excavación o natación). En cefalópodos se ha transformado en brazos y sifón." },
          { type: "definition", term: "Manto", definition: "Pliegue dorsal del cuerpo. Protege la masa visceral, segrega la concha y crea la cavidad paleal donde se alojan las branquias, los osfradios (quimiorreceptores) y los poros excretor y genital." },
          { type: "definition", term: "Concha", definition: "Estructura calcárea protectora. Capas: periostraco (córneo), ostraco (calcita) e hipostraco (aragonito, nácar). Puede estar reducida (algunos gasterópodos) o ausente (babosas, pulpos)." },
          { type: "definition", term: "Rádula", definition: "Órgano raspador situado en la boca, formado por una cinta quitinosa con filas de dientes. Se mueve sobre una estructura cartilaginosa (odontóforo). Permite raspar algas, perforar conchas o inyectar veneno (en conos)." },
          { type: "paragraph", text: "Dos procesos evolutivos clave: la torsión (exclusiva de gasterópodos) y la espiralización de la concha (para compactar la masa visceral)." }
        ]
      },
      {
        id: "sistemas-internos",
        title: "Sistemas internos",
        content: [
          { type: "heading", level: 2, text: "Fisiología" },
          { type: "heading", level: 3, text: "Aparato digestivo" },
          { type: "paragraph", text: "Completo, con boca (rádula, glándulas salivales), esófago, estómago (con glándula digestiva o hepatopáncreas), intestino y ano que desemboca en la cavidad paleal. En bivalvos, filtradores, la rádula ha desaparecido y el estómago recibe el estilo cristalino (masa de mucus y enzimas) y el escudo gástrico (superficie quitinosa que protege la pared del estómago)." },
          { type: "heading", level: 3, text: "Sistema circulatorio" },
          { type: "paragraph", text: "Abierto (lacunar) en la mayoría: el corazón (ventrículo + aurículas) bombea hemolinfa hacia la aorta, que se vacía en lagunas (hemocele); luego retorna por senos venosos y branquias. En cefalópodos es cerrado (más eficiente) y tienen corazones branquiales accesorios. Pigmento respiratorio: hemocianina (azul) o, raramente, hemoglobina." },
          { type: "heading", level: 3, text: "Sistema respiratorio" },
          { type: "paragraph", text: "Los moluscos acuáticos usan ctenidios (branquias) situados en la cavidad paleal. Los terrestres han desarrollado un pulmón (cavidad paleal vascularizada) que se abre al exterior por un neumostoma. Algunos nudibranquios tienen branquias secundarias desnudas (ceratas)." },
          { type: "heading", level: 3, text: "Sistema excretor" },
          { type: "paragraph", text: "Metanefridios (riñones) que filtran el hemocele y eliminan desechos a la cavidad paleal. En cefalópodos, las venas branquiales atraviesan los riñones para ultrafiltración." },
          { type: "heading", level: 3, text: "Sistema nervioso y órganos sensoriales" },
          { type: "paragraph", text: "Ganglionar, con anillo periesofágico (cerebro, ganglios pedal y pleurales). En gasterópodos, la torsión produce la quiastoncuria (cruzamiento de los conectivos nerviosos en forma de 8). En cefalópodos hay una verdadera masa cerebral protegida por cartílago y axones gigantes para la contracción rápida del sifón. Los órganos sensoriales incluyen tentáculos (tacto), estatocistos (equilibrio), ojos (desde simples ocelos hasta ojos con cristalino en cefalópodos) y osfradios (quimiorreceptores en la cavidad paleal)." }
        ]
      },
      {
        id: "reproduccion-desarrollo",
        title: "Reproducción y desarrollo",
        content: [
          { type: "heading", level: 2, text: "Estrategias reproductivas" },
          { type: "list", items: [
            "La mayoría dioicos (sexos separados), aunque muchos gasterópodos son hermafroditas.",
            "Fecundación externa (bivalvos, algunos gasterópodos) o interna (cefalópodos, gasterópodos terrestres).",
            "Desarrollo indirecto: huevo → larva trocófora → larva veliger (con velo ciliado y concha embrionaria) → juvenil.",
            "En cefalópodos, desarrollo directo (huevos telolecíticos con mucho vitelo).",
            "Los bivalvos de agua dulce tienen larva gloquidio, parásita temporal de peces."
          ] },
          { type: "callout", variant: "tip", content: "La larva veliger es una adaptación al plancton que permite la dispersión de los moluscos marinos. En algunos grupos puede permanecer meses en el plancton." }
        ]
      },
      {
        id: "clasificacion-aculifera",
        title: "Aculifera (moluscos sin concha verdadera)",
        content: [
          { type: "heading", level: 2, text: "Aplacóforos y poliplacóforos" },
          { type: "heading", level: 3, text: "Clase Caudofoveata" },
          { type: "paragraph", text: "Sin pie ni concha, con cutícula quitinosa y escamas calcáreas (espículas). Boca rodeada de un escudo. Viven enterrados verticalmente en sedimentos marinos, con la cavidad paleal (con un par de ctenidios) en contacto con el agua. Son infaunales, sedimentívoros. Unisexuales." },
          { type: "heading", level: 3, text: "Clase Solenogastres" },
          { type: "paragraph", text: "Sin concha, sin pie diferenciado; presentan un surco ventral con crestas longitudinales. Rádula a menudo ausente. Cuerpo cubierto de escamas calcáreas. Cavidad paleal posterior sin ctenidios (branquias secundarias). Hermafroditas. Carnívoros de cnidarios." },
          { type: "heading", level: 3, text: "Clase Polyplacophora (quitones)" },
          { type: "paragraph", text: "Concha formada por 8 placas articuladas. Perinotum (borde carnoso del manto) que sobresale de la concha y puede llevar espículas, espinas o sedas calcáreas. Cuerpo deprimido dorsoventralmente. Pie ancho y muscular. Herbívoros marinos, de la zona intermareal. Con rádula. Corazón con un ventrículo y dos aurículas. Los ctenidios se disponen a los lados del pie, dando sensación de pseudometamería." }
        ]
      },
      {
        id: "conchifera",
        title: "Conchifera (con concha única o dos valvas)",
        content: [
          { type: "heading", level: 2, text: "Monoplacóforos, escafópodos, bivalvos" },
          { type: "heading", level: 3, text: "Clase Monoplacophora" },
          { type: "paragraph", text: "Concha única, cónica, parcialmente enrollada. Cuerpo pequeño (3-30 mm). Pie grande y circular. Presentan pseudometamería (repetición de órganos): 5-6 pares de ctenidios, 6 pares de nefridios, 8 pares de músculos retractores. Viven en fondos marinos profundos. Se consideran fósiles vivientes (Neopilina)." },
          { type: "heading", level: 3, text: "Clase Scaphopoda" },
          { type: "paragraph", text: "Concha cónica, alargada (forma de colmillo) y abierta por ambos extremos. Pie muscular excavador (permite enterrarse). Tentáculos captáculos alrededor de la boca (ciliados) para capturar foraminíferos y otros microorganismos. Marinos, enterrados en sedimentos arenosos." },
          { type: "heading", level: 3, text: "Clase Bivalvia" },
          { type: "paragraph", text: "Concha con dos valvas articuladas por una charnela (puede ser taxodonta (numerosos dientes iguales) o heterodonta (2-3 dientes cardinales y laterales)). Cabeza reducida (acéfalos); sin rádula. Branquias modificadas para la filtración. Tipos de branquias: protobranquias (bipectinadas), filibranquias (plegadas, unidas por cilios), eulamelibranquias (plegadas, unidas por tejido con ostiolos) y septibranquias (tabiques musculares)." },
          { type: "list", items: [
            "Sifones inhalante y exhalante (formados por el manto) cuando viven enterrados.",
            "Estilo cristalino (rota constantemente dentro del estómago, ayuda a digerir).",
            "Escudo gástrico (superficie quitinosa que protege el estómago).",
            "Mayoritariamente dioicos; fecundación externa; larva veliger (en agua dulce, larva gloquidio ectoparásita de peces)."
          ] },
          { type: "callout", variant: "example", title: "Cultivo de mejillón", content: "Mytilus galloprovincialis. Las larvas gloquidio no existen en bivalvos marinos; son exclusivas de los unionidos de agua dulce." }
        ]
      },
      {
        id: "gasteropodos",
        title: "Gasterópodos: torsión y diversificación",
        content: [
          { type: "heading", level: 2, text: "El giro evolutivo de 180°" },
          { type: "paragraph", text: "La torsión es un proceso embrionario único de los gasterópodos. Durante la larva veliger, la masa visceral y la cavidad paleal giran 180° en sentido antihorario en dos fases: primero un giro rápido de 90° por contracción del músculo retractor derecho, luego un giro lento de 90° por crecimiento diferencial. Esto sitúa la cavidad paleal (con las branquias y el ano) por delante de la cabeza, protegiendo la región cefálica, pero causa problemas de contaminación (las heces caen sobre la cabeza)." },
          { type: "list", items: [
            "Consecuencias anatómicas: pérdida de un ctenidio (el del lado derecho), una aurícula y un nefridio; desplazamiento de las vísceras hacia la izquierda; quiastoncuria (cordones nerviosos cruzados en forma de 8).",
            "Soluciones evolutivas: desarrollo de sifones, detorsión secundaria (en opistobranquios), pérdida de branquias (nudibranquios).",
            "Espiralización de la concha para compactar la masa visceral; la mayoría dextrógira (enrollamiento a la derecha)."
          ] },
          { type: "heading", level: 3, text: "Subclases" },
          { type: "definition", term: "Prosobranquios", definition: "Mayoritariamente marinos; branquias delante del corazón; concha operculada; sexos separados. Ejemplos: lapas (Patella), bígaros (Littorina), caracolas (Buccinum), caracol de mar (Stramonita)." },
          { type: "definition", term: "Opistobranquios", definition: "Marinos; detorsión parcial o total; pérdida frecuente de la concha y del opérculo; branquias secundarias o ceratas. Hermafroditas. Ejemplos: liebre de mar (Aplysia), nudibranquios (Chromodoris, Flabellina), babosas marinas." },
          { type: "definition", term: "Pulmonados", definition: "Terrestres o de agua dulce; sin branquias; cavidad paleal transformada en pulmón (neumostoma). Concha a veces reducida (Helix, caracol terrestre) o ausente (babosa Limax). Hermafroditas. Desarrollo directo." }
        ]
      },
      {
        id: "cefalopodos",
        title: "Cefalópodos: invertebrados inteligentes",
        content: [
          { type: "heading", level: 2, text: "Depredadores activos de gran cerebro" },
          { type: "paragraph", text: "Los cefalópodos (sepias, calamares, pulpos) son moluscos exclusivamente marinos, depredadores, con una organización muy compleja: sistema circulatorio cerrado (con corazones branquiales), cerebro desarrollado (masa periesofágica protegida por cartílago), ojos con cristalino (convergencia con vertebrados), y comportamiento sofisticado (aprendizaje, uso de herramientas)." },
          { type: "list", items: [
            "Pie modificado en una corona de brazos (8 en pulpos, 8 brazos + 2 tentáculos en calamares y sepias).",
            "Sifón (embudo) que permite la propulsión a chorro.",
            "Concha reducida e interna: pluma en calamares (Loligo), jibia en sepias (Sepia). Nautilus conserva una concha externa planoespirada con cámaras (flotación). Belemnites (fósiles) tenían un fragmocono. En pulpos ha desaparecido por completo.",
            "Cromatóforos (células pigmentarias bajo control nervioso) que permiten cambios de color rápidos (camuflaje, comunicación). Algunos presentan bioluminiscencia por bacterias simbiontes o fotóforos intrínsecos.",
            "Tinta (melanina) en bolsa conectada al recto; se expulsa para despistar depredadores.",
            "Mandíbulas córneas (pico de loro) y rádula para desgarrar presas.",
            "Fecundación interna mediante espermatóforos transferidos por un brazo modificado (hectocótilo)."
          ] },
          { type: "callout", variant: "warning", title: "Inteligencia cefalópoda", content: "Se ha demostrado que los pulpos resuelven laberintos, abren frascos con tapa de rosca y reconocen a los cuidadores. Su sistema nervioso tiene unos 500 millones de neuronas, con axones gigantes que permiten contracciones muy rápidas (escape)." }
        ]
      },
      {
        id: "importancia-moluscos",
        title: "Importancia ecológica y humana",
        content: [
          { type: "heading", level: 2, text: "Recursos, plagas y biomedicina" },
          { type: "paragraph", text: "Los moluscos son fundamentales en la acuicultura y pesca mundial. Mejillones, ostras, almejas, calamares y pulpos son recursos de alto valor comercial." },
          { type: "list", items: [
            "Los bivalvos filtran grandes volúmenes de agua, mejorando su claridad y sirviendo como bioindicadores de calidad ambiental.",
            "Algunos moluscos son vectores de parásitos (caracoles de agua dulce hospedan trematodos como Schistosoma).",
            "Caracoles terrestres pueden ser plagas en agricultura (helícidos).",
            "Del manto de algunos bivalvos se obtienen perlas (nácar).",
            "Compuestos bioactivos de moluscos se investigan como fármacos (antitumorales, analgésicos, antivirales)."
          ] },
          { type: "keypoint", points: [
            "Los moluscos tienen un plan corporal exitoso que ha permitido colonizar todos los ambientes.",
            "La rádula, el manto y el pie son sus sinapomorfías (excepto rádula en bivalvos).",
            "La torsión de los gasterópodos es un proceso evolutivo único con consecuencias anatómicas profundas.",
            "Los cefalópodos tienen el sistema nervioso más complejo entre los invertebrados y ojos análogos a los de vertebrados.",
            "Los bivalvos son excelentes bioindicadores y filtradores clave en ecosistemas acuáticos."
          ] }
        ]
      }
    ]
  },
  {
    id: "lofoforados-ecdysozoa",
    number: 11,
    title: "Lofoforados y Ecdysozoa",
    subtitle: "Filtradores con lofóforo y animales con muda",
    sections: [
      {
        id: "lofoforados-generales",
        title: "Lofoforados: características generales",
        content: [
          { type: "heading", level: 2, text: "¿Qué son los lofoforados?" },
          { type: "paragraph", text: "Los lofoforados son un clado que agrupa tres filos de animales acuáticos, sésiles o poco móviles, que comparten un plan corporal con lofóforo (corona de tentáculos ciliados para la alimentación). Aunque tradicionalmente se consideraban próximos a los anélidos y moluscos (por la larva trocófora), hoy se sitúan dentro de Spiralia como grupo hermano de los moluscos y anélidos." },
          { type: "list", items: [
            "Simetría bilateral (aunque son sésiles, no cefalizados).",
            "Protóstomos: el blastoporo forma la boca.",
            "Segmentación espiral del huevo.",
            "Larva trocófora o larva con lofóforo."
          ] },
          { type: "callout", variant: "info", title: "Sinapomorfías del clado", content: "Lofóforo (corona de tentáculos ciliados derivada del mesosoma) y cuerpo dividido en tres regiones (prosoma, mesosoma, metasoma) con sus respectivas cavidades celómicas. Sistema digestivo en U (con excepciones)." },
          { type: "paragraph", text: "Todos son marinos, bentónicos y sésiles (viven fijos al sustrato o dentro de tubos). Presentan sistema circulatorio bastante desarrollado (en algunos, cerrado). Están bien representados en el registro fósil (braquiópodos y briozoos son muy abundantes desde el Paleozoico). Se conocen unas 7.000 especies actuales." }
        ]
      },
      {
        id: "bryozoa",
        title: "Filo Bryozoa (Ectoprocta)",
        content: [
          { type: "heading", level: 2, text: "Briozoos: colonias de zooides" },
          { type: "paragraph", text: "Los briozoos son animales coloniales, con individuos llamados zooides, cada uno de tamaño microscópico (menos de 1 mm). Las colonias pueden adoptar formas incrustantes, erectas, ramificadas o en forma de costra. Viven en mares (la mayoría) y también en agua dulce (filactolemas)." },
          { type: "list", items: [
            "Prosoma generalmente ausente. Lofóforo retráctil.",
            "Exoesqueleto (zooecio) secretado por el epitelio; quitinoso, calcáreo o gelatinoso.",
            "Sin sistema circulatorio, excretor ni respiratorio (simplificación por miniaturización).",
            "Funículo: cordón celular mesodérmico que conecta el estómago con el epitelio; distribuye nutrientes y forma las yemas de resistencia (estatoblastos).",
            "Polimorfismo colonial: autozoides (alimentación), avicularios (defensa con forma de pico), vibracularios (movimiento), gonozoides (reproducción), etc."
          ] },
          { type: "heading", level: 3, text: "Reproducción y desarrollo" },
          { type: "paragraph", text: "Asexual: formación de colonias por gemación a partir de una larva que se fija (ancéstrula). En filactolemas se forman estatoblastos (yemas de resistencia) que pueden sobrevivir al frío o la sequía." },
          { type: "paragraph", text: "Sexual: la mayoría de los zooides son hermafroditas. Los espermatozoides se liberan al agua por poros en los tentáculos; la fecundación es interna (el esperma entra por el orificio intertentacular). Los embriones se incuban en el gonozooide (ovicela). Larva cifonauta (planctotrófica, con valvas quitinosas) o larva coronada (lecitotrófica)." },
          { type: "heading", level: 3, text: "Clasificación" },
          { type: "definition", term: "Clase Phylactolaemata", definition: "De agua dulce. Prosoma con cavidad (protocolo). Lofóforo grande en forma de herradura. Colonias homomorfas. Estatoblastos con flotadores (anillo de aire). Ejemplo: Plumatella." },
          { type: "definition", term: "Clase Stenolaemata", definition: "Marinos. Zooides tubulares, con lofóforo reducido y circular. Polimorfismo poco desarrollado. Conexión por poros. Importantes en el fósil (orden Cyclostomata). Ejemplo: Crisia." },
          { type: "definition", term: "Clase Gymnolaemata", definition: "Marinos, grupo más diverso. Sin prosoma, lofóforo circular. Conexión entre zooides por células en reloj de arena. Orden Cheilostomata (mayoría de especies). Ejemplos: Bugula, Membranipora." }
        ]
      },
      {
        id: "phoronida",
        title: "Filo Phoronida",
        content: [
          { type: "heading", level: 2, text: "Foronídeos: solitarios y tubícolas" },
          { type: "paragraph", text: "Los foronídeos son gusanos marinos que viven dentro de tubos quitinosos (mucopolisacáridos) fijos al sustrato (rocas o arena). Son solitarios, aunque pueden ser gregarios. Tienen un lofóforo circular o en herradura (en formas grandes)." },
          { type: "list", items: [
            "Prosoma reducido; cuerpo dividido en dos regiones: metámera anterior (mesosoma con lofóforo) y posterior (metasoma).",
            "Sistema circulatorio prácticamente cerrado (glóbulos con hemoglobina).",
            "Excretor con protonefridios (en larva) y metanefridios (en adulto).",
            "Dioicos o hermafroditas (la mayoría). Fecundación externa o interna.",
            "Segmentación radial (no espiral) y larva actinotroca planctónica (con lóbulos ciliados).",
            "Unas 13 especies actuales, dos géneros: Phoronis y Phoronopsis."
          ] },
          { type: "callout", variant: "tip", content: "La larva actinotroca es muy característica y permite la dispersión de los foronídeos. Puede nadar varias semanas antes de metamorfosarse." }
        ]
      },
      {
        id: "brachiopoda",
        title: "Filo Brachiopoda",
        content: [
          { type: "heading", level: 2, text: "Braquiópodos: conchas pero con plan diferente" },
          { type: "paragraph", text: "Los braquiópodos son un ejemplo clásico de convergencia evolutiva con los bivalvos, aunque su plan corporal es muy distinto. Tienen dos valvas (una dorsal y una ventral), pero son de distinto tamaño y forma; el animal vive fijo al sustrato por un pedúnculo ventral." },
          { type: "list", items: [
            "Valvas de carbonato cálcico (articulados) o fosfato cálcico y quitina (inarticulados).",
            "Lofóforo complejo (en forma de dos brazos enrollados) que ocupa la cavidad paleal.",
            "Sin cabeza, sin mandíbulas; el lofóforo filtra partículas alimenticias.",
            "Sistema circulatorio abierto con corazón y vasos.",
            "Dioicos, fecundación externa. Segmentación holoblástica radial. Larva lobulada de vida corta.",
            "Muy abundantes en el Paleozoico; hoy solo unas 350 especies (relictos)."
          ] },
          { type: "heading", level: 3, text: "Clasificación" },
          { type: "definition", term: "Inarticulados", definition: "Valvas sin charnera (solo músculos). Pedúnculo largo, con cavidad celómica. Ejemplo: Lingula (fósil viviente, se conoce desde el Cámbrico)." },
          { type: "definition", term: "Articulados", definition: "Valvas con charnera (dientes y encajes). Pedúnculo corto, fibrilar. Viven con el lado ventral hacia arriba. Ejemplo: Terebratulina (Mediterráneo)." },
          { type: "callout", variant: "info", content: "Aunque parecidos a bivalvos, los braquiópodos tienen un plano de simetría diferente: en bivalvos las valvas son laterales (izquierda-derecha); en braquiópodos, dorsal-ventral." }
        ]
      },
      {
        id: "ecdysozoa-intro",
        title: "Ecdysozoa: el supergrupo de la muda",
        content: [
          { type: "heading", level: 2, text: "Una innovación clave: la cutícula y la ecdisis" },
          { type: "paragraph", text: "Ecdysozoa es uno de los dos grandes clados de protóstomos (el otro es Spiralia). Agrupa a filos tan diversos como nematodos, artrópodos, priapúlidos, cinorrincos, loricíferos y otros. Su sinapomorfía más importante es la presencia de una cutícula de quitina (o colágeno) que se muda periódicamente bajo control hormonal (ecdisis)." },
          { type: "list", items: [
            "Cutícula secretada por la epidermis, que forma un exoesqueleto flexible o rígido.",
            "Crecimiento discontinuo: el animal debe mudar para crecer (estadios intermudales y mudas).",
            "Regulada por la hormona ecdisona.",
            "Ausencia de epitelios ciliados en la superficie (excepto en algunos grupos).",
            "Segmentación no espiral (en los que tienen segmentación)."
          ] },
          { type: "callout", variant: "info", title: "Proceso de muda", content: "La apólisis separa la epidermis de la cutícula vieja; la epidermis secreta una nueva cutícula; la cutícula vieja se rompe y el animal sale (éxuvia)." },
          { type: "paragraph", text: "Dentro de Ecdysozoa se distinguen dos grandes linajes: Scalidophora (priapúlidos, cinorrincos, loricíferos) y Nematozoa (nematodos y nematomorfos), y el gigantesco clado Panarthropoda (artrópodos, tardígrados, onicóforos). En este capítulo nos centraremos en introvertos y nematodos; los artrópodos se tratarán aparte." }
        ]
      },
      {
        id: "introversos",
        title: "Introverta (Cycloneuralia): escálidos y nematomorfos",
        content: [
          { type: "heading", level: 2, text: "Animales con introverto evaginable" },
          { type: "paragraph", text: "Los introvertos (hoy llamados Cycloneuralia) son un grupo de ecdisozoos que presentan un introverto (probóscide) en la parte anterior que puede invaginarse (meterse hacia dentro) y evaginarse (sacarse). La boca se abre al final del introverto. El cerebro tiene forma de anillo alrededor del esófago anterior (circumesofágico)." },
          { type: "heading", level: 3, text: "Phylum Priapulida" },
          { type: "definition", term: "Priapúlidos", definition: "Gusanos marinos de 0,05 a 20 cm, con cuerpo dividido en introverto (con espinas), tronco y una cola caudal con función respiratoria y sensorial (plumario). Sin sistema circulatorio. Sistema excretor: protonefridios. Dioicos, fecundación externa. Desarrollo indirecto (larva). Son depredadores excavadores. Unas 22 especies. Ejemplo: Priapulus (aguas frías)." },
          { type: "heading", level: 3, text: "Phylum Kinorhyncha" },
          { type: "definition", term: "Cinorrincos", definition: "Microscópicos (<1 mm), marinos de la meiofauna. Cuerpo dividido en 13 zonitas (segmentos cuticulares articulados). Introverto con espinas (escálidas). Cutícula con placas. Dioicos, fecundación interna, desarrollo directo (juveniles con 11 zonitas, 6 mudas). Unas 340 especies. Detritívoros." },
          { type: "heading", level: 3, text: "Phylum Loricifera" },
          { type: "definition", term: "Loricíferos", definition: "Muy pequeños (250 µm), descubiertos en 1983. Cuerpo dividido en introverto, cuello, tórax retráctil y abdomen recubierto por una lóriga (armadura) cuticular. Sin sistemas circulatorio ni respiratorio. Dioicos, fecundación interna. Viven en espacios intersticiales (meiofauna). Unas 38 especies." },
          { type: "heading", level: 3, text: "Phylum Nematomorpha (gusanos de crin de caballo)" },
          { type: "definition", term: "Nematomorfos", definition: "Adultos de vida libre (no se alimentan) de 10-150 cm de largo, muy delgados. Las larvas son parásitas de artrópodos (saltamontes, grillos, cangrejos). Controlan el comportamiento del hospedador para que se lance al agua, donde emerge el adulto. Cutícula de colágeno con mudas. Dioicos, fecundación interna. Unas 520 especies." }
        ]
      },
      {
        id: "nematodos",
        title: "Phylum Nematoda (gusanos redondos)",
        content: [
          { type: "heading", level: 2, text: "La simplicidad llevada al éxito" },
          { type: "paragraph", text: "Los nematodos son quizá los animales más abundantes y ubicuos de la Tierra. Se calcula que representan el 80% de los individuos del reino animal. Viven en todos los ambientes acuosos y terrestres, y muchas especies son parásitas de plantas, animales (incluidos humanos) y hongos." },
          { type: "list", items: [
            "Cuerpo cilíndrico, alargado, no segmentado, con una cutícula de colágeno que mudan hasta 4 veces (eutelia: número fijo de células).",
            "Pseudoceloma con función hidrostática; presión elevada (turgor).",
            "Musculatura solo longitudinal (sin circular); movimiento por ondulaciones laterales.",
            "Sistema digestivo completo (boca, faringe muscular, intestino, ano/cloaca).",
            "Sin sistema circulatorio ni respiratorio; intercambio gaseoso por difusión cutánea.",
            "Sistema excretor: células de Renette (glándulas grandes) con función osmorreguladora.",
            "Sistema nervioso: anillo nervioso circumfaríngeo y cordones longitudinales (dorsal, ventral, laterales).",
            "Organos sensoriales: anfidios (quimiorreceptores cefálicos) y fásmidos (caudales).",
            "Dioicos (macho con espículas copuladoras y aleta caudal; hembra con vulva y ano).",
            "Desarrollo directo con 4 estadios juveniles (larvas) separados por mudas."
          ] },
          { type: "heading", level: 3, text: "Alimentación y vida libre" },
          { type: "paragraph", text: "Los nematodos de vida libre son bacteriófagos, micófagos o depredadores (algunos con estilete para perforar). Son clave en la descomposición y el reciclado de nutrientes en el suelo." },
          { type: "heading", level: 3, text: "Parásitos de interés" },
          { type: "definition", term: "Ascaris lumbricoides", definition: "Parásito intestinal humano, cosmopolita. Puede alcanzar 30 cm. La infección se produce por ingestión de huevos con larvas." },
          { type: "definition", term: "Enterobius vermicularis", definition: "Oxiuros; muy común en niños. Las hembras migran al ano para poner huevos, causando prurito." },
          { type: "definition", term: "Ancylostoma duodenale / Necator americanus", definition: "Gusanos anquilostoma. Penetran por la piel (generalmente en pies descalzos) y migran al intestino, causando anemia." },
          { type: "definition", term: "Trichinella spiralis", definition: "Causa triquinosis. Se adquiere por consumo de carne de cerdo o jabalí mal cocida; las larvas enquistadas en músculo causan miopatías." },
          { type: "definition", term: "Wuchereria bancrofti", definition: "Filariasis linfática. Transmitida por mosquitos. Las larvas (microfilarias) obstruyen los vasos linfáticos produciendo elefantiasis (hinchazón extrema de extremidades y genitales)." },
          { type: "callout", variant: "warning", title: "Caenorhabditis elegans", content: "Este nematodo de vida libre (1 mm) es un organismo modelo en biología. Fue el primer animal cuyo genoma se secuenció (1998). Ha llevado a descubrimientos fundamentales en desarrollo, neurobiología y envejecimiento." }
        ]
      },
      {
        id: "resumen-lofoforados-ecdysozoa",
        title: "Resumen general",
        content: [
          { type: "heading", level: 2, text: "Ideas clave" },
          { type: "keypoint", points: [
            "Los lofoforados (briozoos, foronídeos, braquiópodos) son sésiles, filtradores con lofóforo, y tienen larva trocófora o actinotroca.",
            "Los briozoos son coloniales y pueden presentar polimorfismo; sus colonias son importantes en los arrecifes.",
            "Los braquiópodos tienen concha bivalva pero con simetría dorsal-ventral, no lateral; fueron muy abundantes en el Paleozoico.",
            "Ecdysozoa agrupa animales que mudan su cutícula (ecdisis) bajo control hormonal.",
            "Los nematodos son los ecdisozoos más numerosos, de gran importancia ecológica y médica, con un número fijo de células (eutelia)."
          ] }
        ]
      }
    ]
  },  {
    id: "panartropodos-artropodos",
    number: 12,
    title: "Panartrópodos y generalidades de los artrópodos",
    subtitle: "El supergrupo de la cutícula quitinosa y los apéndices articulados",
    sections: [
      {
        id: "panarthropoda",
        title: "Panarthropoda: onicóforos, tardígrados y artrópodos",
        content: [
          { type: "heading", level: 2, text: "¿Qué son los panartrópodos?" },
          { type: "paragraph", text: "Panarthropoda es un clado monofilético que incluye a los artrópodos (insectos, crustáceos, arácnidos, miriápodos) junto con dos grupos más pequeños: los onicóforos (gusanos aterciopelados) y los tardígrados (osos de agua). Todos comparten un antepasado común que ya poseía apéndices pareados, cutícula quitinosa y un sistema circulatorio abierto con corazón dorsal." },
          { type: "list", items: [
            "Apéndices pareados ventrolaterales con uñas terminales (sinapomorfía).",
            "Cutícula quitinosa que requiere mudas (ecdisis) para crecer.",
            "Cavidad general del cuerpo de tipo hemocele (fusión de celoma y blastocele).",
            "Sistema circulatorio abierto con corazón dorsal provisto de ostiolos.",
            "Cerebro frontal-dorsal que conecta con un anillo periesofágico y una cadena ganglionar ventral (hiponeuro)."
          ] },
          { type: "paragraph", text: "Los panartrópodos constituyen uno de los grupos de animales más exitosos en términos de biodiversidad. Los artrópodos por sí solos representan aproximadamente el 82% de todas las especies animales descritas y la mitad de la biomasa animal del planeta." }
        ]
      },
      {
        id: "onychophora",
        title: "Onychophora: los gusanos aterciopelados",
        content: [
          { type: "heading", level: 2, text: "Onicóforos" },
          { type: "paragraph", text: "Los onicóforos (unos 200 especies actuales) son animales vermiformes, terrestres, que viven en ambientes muy húmedos (bosques tropicales y templados). Su cuerpo blando, cubierto por una cutícula fina y aterciopelada, recuerda a una oruga. Son depredadores nocturnos que cazan pequeños invertebrados." },
          { type: "list", items: [
            "Sinapomorfías: glándulas del veneno (o del vesc) que secretan un líquido adhesivo para atrapar presas (pueden proyectarlo hasta 30 cm). Musculatura circular subcutánea de fibra lisa. Sistema traqueal (invaginaciones del tegumento) para el intercambio gaseoso, similar al de los artrópodos.",
            "Cuerpo alargado con numerosos pares de patas cortas y no articuladas (lobópodos).",
            "Antenas sensoriales y mandíbulas duras quitinosas.",
            "Nefridios metaméricos y corazón dorsal.",
            "Son fotófobos y requieren humedad porque no pueden cerrar sus estigmas traqueales (pérdida de agua).",
            "La fecundación es interna; algunos son ovíparos y otros ovovivíparos."
          ] },
          { type: "callout", variant: "info", content: "Los onicóforos son considerados el grupo hermano de los artrópodos (junto con los tardígrados). Su estudio es clave para entender la transición de un cuerpo blando a uno artropodizado con exoesqueleto rígido." }
        ]
      },
      {
        id: "tardigrada",
        title: "Tardigrada: los osos de agua",
        content: [
          { type: "heading", level: 2, text: "Tardígrados" },
          { type: "paragraph", text: "Los tardígrados son animales microscópicos (50 μm a 1 mm) que habitan en musgos, líquenes, suelos y sedimentos marinos. Son famosos por su extraordinaria resistencia a condiciones extremas mediante la criptobiosis (desecación, radiación, vacío, temperaturas cercanas al cero absoluto)." },
          { type: "list", items: [
            "Sinapomorfías: aparato bucal con estiletes para perforar células (de plantas, algas o pequeños invertebrados). Un nervio conecta el protocerebro con el primer ganglio de la cadena ventral.",
            "Cuerpo con cuatro pares de lobópodos (patas cortas, no articuladas) terminados en uñas (diploungulas).",
            "Eutelia: número fijo de células en cada especie (no crecen por división celular, sino por aumento de tamaño).",
            "Carecen de corazón, cavidades celómicas y metanefridios.",
            "Presentan un sistema digestivo con faringe muscular succionadora y placoides (estructuras calcificadas que trituran el alimento).",
            "La criptobiosis les permite sobrevivir años en estado seco y rehidratarse al volver las condiciones favorables."
          ] },
          { type: "callout", variant: "tip", content: "Los tardígrados se encuentran desde el Ártico hasta la Antártida, desde fosas abisales hasta las cumbres más altas. Su capacidad de resistir el espacio exterior los ha convertido en organismos modelo en astrobiología." }
        ]
      },
      {
        id: "arthropoda-sinapomorfias",
        title: "Phylum Arthropoda: sinapomorfías y artropodización",
        content: [
          { type: "heading", level: 2, text: "¿Qué define a un artrópodo?" },
          { type: "paragraph", text: "Los artrópodos son el filo más diverso del reino animal. Su éxito se debe a la artropodización: un proceso evolutivo que transformó un ancestro de cuerpo blando y segmentado (similar a un anélido) en un animal con exoesqueleto rígido, apéndices articulados y tagmatización (regionalización de segmentos)." },
          { type: "list", items: [
            "Sinapomorfías: un par de apéndices articulados por segmento corporal.",
            "Cutícula quitinosa que forma un exoesqueleto endurecido (esclerotizado).",
            "Metamería heterónoma o tagmosis (fusión de segmentos en unidades funcionales: cabeza, tórax, abdomen).",
            "Ausencia de epitelio ciliado (la superficie está cubierta por cutícula).",
            "Cavidad corporal de tipo hemocele (sistema circulatorio abierto).",
            "Musculatura estriada en fascículos independientes, insertada en el esqueleto (apodemas)."
          ] },
          { type: "paragraph", text: "La artropodización permitió a los artrópodos colonizar todos los ambientes (marinos, dulceacuícolas, terrestres y aéreos). El exoesqueleto les proporciona protección contra depredadores, soporte y una superficie para la inserción muscular, pero limita el crecimiento (obligando a mudas periódicas)." }
        ]
      },
      {
        id: "cuticula-muda",
        title: "La cutícula y la muda (ecdisis)",
        content: [
          { type: "heading", level: 2, text: "Exoesqueleto: estructura y funciones" },
          { type: "paragraph", text: "La cutícula de los artrópodos es una estructura compleja secretada por la epidermis. Está formada principalmente por quitina (un polisacárido de N-acetilglucosamina) y proteínas (esclerotinas). Puede estar endurecida adicionalmente por sales cálcicas (crustáceos) o por tanado de proteínas." },
          { type: "list", items: [
            "Capas de la cutícula: epicutícula (capa externa delgada, con ceras y proteínas, impermeable), exocutícula (endurecida, esclerotizada, a menudo pigmentada) y endocutícula (elástica, no esclerotizada).",
            "Escleritas y membranas: las placas rígidas se llaman escleritas (tergito dorsal, esternito ventral, pleurito lateral). Las membranas articulares (sin exocutícula) permiten el movimiento.",
            "Formaciones cuticulares: sedas, espinas, escamas (asociadas a células tricógenas).",
            "Endoesqueleto: invaginaciones de la cutícula (apodemas) que sirven de inserción muscular."
          ] },
          { type: "heading", level: 3, text: "La muda o ecdisis" },
          { type: "paragraph", text: "El crecimiento es discontinuo. Para aumentar de tamaño, el artrópodo debe desprenderse de su exoesqueleto viejo y secretar uno nuevo. Este proceso es controlado por hormonas (ecdisona)." },
          { type: "list", items: [
            "Fases: apólisis (separación de la cutícula vieja de la epidermis), secreción de la nueva cutícula, ruptura de la exuvia (cutícula vieja) a lo largo de líneas de rotura preformadas, y emergencia del animal.",
            "Durante la muda, el artrópodo es vulnerable (la nueva cutícula es blanda hasta que se endurece).",
            "Control neuroendocrino: el protocerebro secreta hormona protoracicotrópica (PTTH) que estimula las glándulas protorácicas a producir ecdisona."
          ] }
        ]
      },
      {
        id: "apendices-tagmosis",
        title: "Apéndices articulados y tagmosis",
        content: [
          { type: "heading", level: 2, text: "Evolución de la versatilidad estructural" },
          { type: "paragraph", text: "Los apéndices de los artrópodos son evaginaciones de las regiones pleurales de cada segmento, formados por una serie de artejos (podómeros) unidos por membranas articulares. Su musculatura intrínseca (dentro del apéndice) y extrínseca (desde el cuerpo) permite movimientos muy precisos." },
          { type: "list", items: [
            "Tipos de apéndices según su función: antenas (sensoriales), piezas bucales (mandíbulas, maxilas, labio), patas locomotoras, alas (en insectos), quelíceros (en arácnidos), etc.",
            "Tagmosis: la fusión de segmentos en regiones especializadas. Por ejemplo, en insectos: cabeza (sensorial y alimentación), tórax (locomoción y alas) y abdomen (reproducción y excretor). En crustáceos: cefalotórax y abdomen. En arácnidos: prosoma y opistosoma."
          ] },
          { type: "callout", variant: "info", content: "La tagmosis ha permitido a los artrópodos explotar una increíble variedad de nínchos ecológicos: desde filtrar plancton (crustáceos) hasta volar (insectos) o tejer seda (arañas)." }
        ]
      },
      {
        id: "sistemas-internos-artropodos",
        title: "Organización interna de los artrópodos",
        content: [
          { type: "heading", level: 2, text: "Sistemas nervioso, circulatorio, respiratorio, excretor y reproductor" },
          { type: "heading", level: 3, text: "Sistema nervioso" },
          { type: "paragraph", text: "Hiponeuro: cerebro (ganglios supraesofágicos) con tres regiones (protocerebro, deutocerebro y tritocerebro), conectado a un anillo periesofágico y a una cadena ganglionar ventral (par de ganglios por segmento, a menudo fusionados). Los órganos sensoriales incluyen sensilias tricoides (mecanorreceptoras), sensilias campaniformes (presión) y sensilias setiformes (quimiorreceptoras)." },
          { type: "heading", level: 3, text: "Órganos sensoriales" },
          { type: "paragraph", text: "Ocelos (ojos simples) y ojos compuestos (formados por ommatidios). En los ojos compuestos se distinguen dos tipos: de aposición (alta agudeza visual, buena luz) y de superposición (mayor sensibilidad, poca luz)." },
          { type: "heading", level: 3, text: "Sistemas respiratorios" },
          { type: "list", items: [
            "Cutánea (solo en artrópodos muy pequeños o de cutícula fina).",
            "Branquias: evaginaciones asociadas a apéndices (crustáceos).",
            "Filotequeas o pulmones en libro: invaginaciones de la cutícula que forman láminas (arácnidos).",
            "Tráqueas: sistema de tubos ramificados que llevan oxígeno directamente a los tejidos (insectos, miriápodos). Las traqueolas (ramificaciones terminales) son donde se produce el intercambio gaseoso. Los estigmas (aberturas) pueden abrirse y cerrarse."
          ] },
          { type: "heading", level: 3, text: "Sistema circulatorio" },
          { type: "paragraph", text: "Abierto (lacunar). La hemolinfa es bombeada por un corazón dorsal tubular, con un par de ostiolos por segmento, hacia la aorta y luego a lagunas (hemocele). La hemolinfa retorna por senos peri­viscerales y branquias o pulmones. Puede contener hemocianina (azul) o hemoglobina." },
          { type: "heading", level: 3, text: "Sistema excretor" },
          { type: "list", items: [
            "Órganos metaméricos (mesodérmicos): glándulas antenales o maxilares (crustáceos), glándulas coxales (arácnidos).",
            "Tubos de Malpighi: evaginaciones del tracto digestivo (endodérmicas en arácnidos, ectodérmicas en miriápodos e insectos). Excretan ácido úrico (ahorro de agua).",
            "Sistemas criptonefríticos (acumulación de desechos)."
          ] },
          { type: "heading", level: 3, text: "Reproducción" },
          { type: "paragraph", text: "La mayoría son dioicos (gonocóricos), con fecundación externa (acuáticos) o interna (terrestres). Oviparos, ovovivíparos o vivíparos. Desarrollo directo o indirecto con metamorfosis (holometabolia o hemimetabolia). Presentan a menudo dimorfismo sexual y comportamientos de cortejo complejos." }
        ]
      },
      {
        id: "resumen-panartropodos",
        title: "Resumen: claves de Panarthropoda",
        content: [
          { type: "heading", level: 2, text: "Ideas fundamentales" },
          { type: "keypoint", points: [
            "Panarthropoda incluye onicóforos, tardígrados y artrópodos; comparten apéndices pareados, cutícula quitinosa y hemocele.",
            "Los artrópodos se caracterizan por exoesqueleto endurecido, apéndices articulados y tagmosis.",
            "La muda (ecdisis) es el mecanismo para crecer, controlado por ecdisona.",
            "Los sistemas respiratorios varían: branquias, pulmones en libro o tráqueas.",
            "La excreción puede ser por glándulas antenales/coxales o por tubos de Malpighi.",
            "El éxito evolutivo de los artrópodos se debe a la versatilidad de sus apéndices, la protección del exoesqueleto y la colonización de todos los ambientes."
          ] }
        ]
      }
    ]
  },
  {
    id: "ambulacraria-hemicordats-equino",
    number: 13,
    title: "Ambulacraria, Hemicordados y Equinodermos",
    subtitle: "Deuteróstomos con celoma trímero y simetría radial secundaria",
    sections: [
      {
        id: "ambulacraria-general",
        title: "Ambulacraria: el clado de los deuteróstomos con celoma trímero",
        content: [
          { type: "heading", level: 2, text: "¿Qué son los ambulacrarios?" },
          { type: "paragraph", text: "Ambulacraria es un clado monofilético de deuteróstomos que incluye a dos filos: Hemicordata (gusanos bellota y pterobranquios) y Echinodermata (estrellas, ofiuras, erizos, holoturias y crinoideos). Las evidencias moleculares (18S rRNA, genes mitocondriales) y los caracteres morfológicos (larva con bandas ciliadas y presencia de un celoma trímero) confirman su parentesco. Son exclusivamente marinos." },
          { type: "heading", level: 3, text: "Morfología larvaria: la larva tornaria y sus derivados" },
          { type: "paragraph", text: "Las larvas de los ambulacrarios presentan bandas ciliadas que utilizan para nadar y alimentarse (planctotróficas). La boca se sitúa en posición medial y el tubo digestivo es completo. En los hemicordados, la larva se llama tornaria, con una banda ciliada preoral característica en forma de herradura. En los equinodermos, según la clase, las larvas reciben nombres distintos: bipinnaria y brachiolaria (asteroideos), pluteus (equinoideos y ofiuroideos), auricularia (holoturoideos) y doliolaria (crinoideos). Todas estas larvas son bilaterales y de vida pelágica, lo que permite la dispersión. La metamorfosis transforma la larva bilateral en un adulto con simetría pentarradiada (en equinodermos) o en un adulto bilateral (en hemicordados)." },
          { type: "heading", level: 3, text: "Celoma trímero (arquicería)" },
          { type: "paragraph", text: "Durante el desarrollo embrionario, el celoma se origina a partir de tres pares de cavidades independientes (arquicería) que corresponden a tres regiones corporales: protocel (axocel), mesocel (hidrocel) y metacel (somatocel). Esta organización tripartita es una sinapomorfía de los ambulacrarios. En hemicordados, estas tres cavidades persisten en el adulto y se corresponden con la probóscide (protocel), el collar (mesocel) y el tronco (metacel). En equinodermos, el protocel se reduce, el mesocel forma el sistema vascular acuífero (hidrocel) y el metacel se convierte en el celoma perivisceral (somatocel) que rodea las vísceras." },
          { type: "callout", variant: "info", content: "La arquitectura trímera del celoma es una de las pruebas más sólidas del parentesco entre hemicordados y equinodermos, y no aparece en otros deuteróstomos como los cordados." }
        ]
      },
      {
        id: "hemichordata-detalle",
        title: "Phylum Hemichordata: gusanos con collar y hendiduras faríngeas",
        content: [
          { type: "heading", level: 2, text: "Características generales de los hemicordados" },
          { type: "paragraph", text: "Los hemicordados son animales vermiformes (con forma de gusano), de simetría bilateral, marinos y bentónicos, con distribución cosmopolita. Viven desde la zona intermareal hasta grandes profundidades. Son sedentarios o sésiles, micrófagos (sedimentívoros o filtradores) y se alimentan con ayuda de cilios. El cuerpo se divide en tres regiones que coinciden con las tres cavidades celomáticas: probóscide (protosoma), collar (mesosoma) y tronco (metasoma)." },
          { type: "list", items: [
            "Presentan hendiduras faríngeas (faringotremia) en el tronco, que son poros que comunican la faringe con el exterior; son homólogas a las hendiduras branquiales de los cordados.",
            "Divertículo bucal (estomocordio) en la probóscide; es una estructura hueca que se proyecta hacia delante y contiene células capaces de fijar yodo (homólogo de la endóstilo de los urocordados y cefalocordados, y precursor de la glándula tiroides de los vertebrados).",
            "Estructura excretora única: el glomérulo renal, situado en el interior de la probóscide, que filtra los desechos de la hemolinfa y los expulsa al exterior por un poro dorsal.",
            "Sexos separados (dioicos), fecundación externa y desarrollo indirecto con larva tornaria planctónica (similar a la bipinnaria de los equinodermos).",
            "También se reproducen asexualmente por fisión (escisión transversal) en muchas especies."
          ] },
          { type: "heading", level: 3, text: "Clase Enteropneusta (gusanos bellota)" },
          { type: "paragraph", text: "Son hemicordados solitarios, de tamaño variable (10-40 cm, aunque algunos pueden alcanzar hasta 2 m de longitud). Viven en galerías en forma de U en el sedimento de fondos marinos, desde la zona intermareal hasta los abismos. Se alimentan de partículas orgánicas del sedimento (sedimentívoros). Su cuerpo musculoso les permite excavar. La probóscide es cónica y muy contráctil; el collar es corto y lleva la boca en su cara ventral; el tronco es alargado y puede tener hasta 200 pares de hendiduras faríngeas. Unas 120 especies. Ejemplos: Balanoglossus, Saccoglossus." },
          { type: "heading", level: 3, text: "Clase Pterobranchia" },
          { type: "paragraph", text: "Son hemicordados coloniales o que forman agregaciones, con individuos de tamaño muy pequeño (0,1-5 mm). Viven en aguas frías, a menudo en profundidad. Se alimentan mediante un lofóforo (corona de tentáculos ciliados) que rodea la boca, una estructura convergente con los lofoforados (braquiópodos, briozoos). El cuerpo está dividido en probóscide (escudo cefálico), collar (con los tentáculos) y tronco (que puede secretar un tubo quitinoso). Unas 20 especies. El orden más conocido es Rhabdopleura (fósil viviente, se conocen formas similares desde el Cámbrico)." }
        ]
      },
      {
        id: "echinodermata-intro",
        title: "Phylum Echinodermata: introducción y características generales",
        content: [
          { type: "heading", level: 2, text: "Los equinodermos: piel espinosa" },
          { type: "paragraph", text: "Los equinodermos (del griego echinos, espina, y derma, piel) son animales exclusivamente marinos, bentónicos, con una simetría pentarradiada (de cinco radios) en el estado adulto, pero con larvas bilaterales. Su nombre alude al esqueleto dérmico calcáreo que poseen, a menudo provisto de espinas. Presentan una gran diversidad morfológica y de tamaños (de menos de 1 cm a más de 3 m). Se conocen unas 7.300 especies vivientes y unas 15.000 fósiles, con un registro excepcional debido a la facilidad de fosilización de sus placas calcáreas." },
          { type: "list", items: [
            "Simetría pentarradiada secundaria (derivada de la bilateral ancestral). La simetría radial es una adaptación a la vida bentónica sésil o de desplazamiento lento.",
            "Endoesqueleto calcáreo (ossículos o placas) formado por carbonato cálcico (calcita) con una microestructura porosa (estereoma). Está producido por células mesenquimáticas de la dermis y recubierto por una fina epidermis ciliada.",
            "Sistema vascular acuífero (o ambulacral) lleno de agua de mar, que utilizan para la locomoción, alimentación, respiración y funciones sensoriales. Es una de sus sinapomorfías más características.",
            "Sistema hemal (o sanguíneo) derivado del celoma, con función de transporte de nutrientes y hormonas; está formado por canales y lagunas, sin un corazón propulsor.",
            "Sistema nervioso descentralizado, con un anillo nervioso central (periesofágico) y cordones radiales que recorren cada ambulacro. Carecen de cerebro.",
            "Excreción principalmente por difusión a través de la superficie corporal (piel, podios, branquias dérmicas) y mediante celomocitos especializados que fagocitan desechos.",
            "Gran capacidad de regeneración: pueden regenerar brazos (asteroideos, ofiuroideos), podios, e incluso órganos internos (holoturoideos). Algunas especies se reproducen asexualmente por fisión (división del disco).",
            "Reproducción sexual generalmente gonocórica (dioica), con fecundación externa y desarrollo indirecto (larva planctotrófica o lecitotrófica). También hay hermafroditismo en algunas especies (especialmente en crinoideos y algunos ofiuroideos)."
          ] },
          { type: "callout", variant: "info", content: "Los equinodermos son deuteróstomos, lo que significa que durante el desarrollo embrionario el blastoporo se convierte en el ano y la boca se forma de neoformación. Comparten este carácter con los cordados y hemicordados." }
        ]
      },
      {
        id: "sistema-acuifero-detalle",
        title: "El sistema vascular acuífero (ambulacral)",
        content: [
          { type: "heading", level: 2, text: "Un sistema hidráulico para la locomoción y la alimentación" },
          { type: "paragraph", text: "El sistema vascular acuífero es una red de canales llenos de agua de mar, que se origina a partir del mesocel (hidrocel) embrionario. Está formado por los siguientes componentes (desde la entrada del agua hasta los podios):" },
          { type: "list", items: [
            "Madreporita: placa calcárea perforada situada en la cara aboral (excepto en crinoideos y algunas holoturias). Filtra el agua de mar que entra al sistema.",
            "Canal pétreo: conducto calcificado que conecta la madreporita con el canal anular.",
            "Canal anular: rodea el esófago; de él parten los canales radiales y los canales de Tiedemann (que producen celomocitos).",
            "Canales radiales: recorren cada brazo o ambulacro por el interior de la cara oral (o por surcos abiertos en asteroideos).",
            "Ampollas: pequeñas vesículas musculares situadas en la base de cada podio; su contracción impulsa el agua hacia el podio.",
            "Podios (pies ambulacrales): estructuras musculares tubulares con una ventosa distal (a menudo). Su función es locomotora, adhesiva, respiratoria y sensorial."
          ] },
          { type: "paragraph", text: "El funcionamiento es hidráulico: al contraerse la ampolla, el agua es forzada hacia el podio, que se alarga y presiona contra el sustrato (o contra la presa). La ventosa se adhiere por succión o por secreción de mucus. La relajación de la ampolla y la contracción del podio retraen el pie. La coordinación de miles de podios permite el desplazamiento lento pero constante." },
          { type: "heading", level: 3, text: "Variaciones del sistema acuífero en los diferentes grupos" },
          { type: "list", items: [
            "Asteroideos: surcos ambulacrales abiertos, podios con ventosa, madreporita en la cara aboral. Poseen además órganos sensoriales en los extremos de los brazos (ocelos).",
            "Ofiuroideos: surcos cerrados, podios sin ventosa (no locomotores), madreporita en la cara oral. La locomoción es por movimiento serpentiforme de los brazos.",
            "Echinoideos (erizos regulares): surcos ambulacrales cerrados, podios con ventosa que sobresalen por las placas ambulacrales. Sistema acuífero asociado a la linterna de Aristóteles.",
            "Holoturoideos: podios modificados en tentáculos bucales (alimentación) y podios locomotores ventrales (a menudo con ventosa). Madreporita interna, conectada al celoma (no al exterior).",
            "Crinoideos: carecen de madreporita; el agua entra por hidroporos en la placa madreporítica (o por el tegumento). Podios son los tentáculos de las pinnulas, sin ventosa, usados para la captura de partículas."
          ] }
        ]
      },
      {
        id: "esqueleto-y-tegumento",
        title: "Endoesqueleto, espinas y tegumento",
        content: [
          { type: "heading", level: 2, text: "El esqueleto calcáreo: protección y soporte" },
          { type: "paragraph", text: "El esqueleto de los equinodermos es de origen mesodérmico (a diferencia del exoesqueleto de artrópodos, que es ectodérmico). Está formado por pequeñas placas u ossículos de carbonato cálcico (calcita) con una microestructura porosa única, el estereoma. Los ossículos pueden estar fusionados formando una teca rígida (erizos, crinoideos), articulados entre sí (brazos de ofiuras y crinoideos) o dispersos en la dermis (holoturias)." },
          { type: "list", items: [
            "En las estrellas de mar, los ossículos forman una malla flexible unida por tejido conectivo; esta disposición permite cierta movilidad del cuerpo.",
            "En los erizos de mar, las placas están soldadas formando un caparazón globular o aplanado (teca). Las espinas (largas o cortas) se articulan sobre los tubérculos de las placas.",
            "En las ofiuras, los brazos tienen vértebras calcáreas articuladas (proporcionan gran movilidad lateral). El disco central está protegido por placas imbricadas.",
            "En las holoturias, los ossículos son microscópicos (espículas) en forma de anclas, ganchos o mesas; la pared del cuerpo es blanda y coriácea.",
            "En los crinoideos, las placas forman un cáliz rígido que protege las vísceras, y los brazos están compuestos por vértebras articuladas."
          ] },
          { type: "paragraph", text: "El tegumento está formado por una epidermis externa ciliada (con células sensoriales y glandulares) y una dermis gruesa que contiene el esqueleto. En la dermis también se encuentra colágeno mutable, un tejido que puede cambiar rápidamente su rigidez bajo control nervioso (permite la autotomía y la regeneración)." }
        ]
      },
      {
        id: "sistemas-internos-equino",
        title: "Sistemas circulatorio, nervioso, excretor y reproductor",
        content: [
          { type: "heading", level: 2, text: "Organización interna de los equinodermos" },
          { type: "heading", level: 3, text: "Sistema hemal (o sanguíneo)" },
          { type: "paragraph", text: "Deriva del celoma y está formado por canales y lagunas sin revestimiento endotelial. Funcionalmente transporta nutrientes, hormonas y celomocitos. No es un sistema cerrado ni tiene un corazón propulsor; el movimiento de la hemolinfa se debe a la acción de los cilios y a las contracciones del sistema acuífero. Comprende un anillo hemal periesofágico, lagunas genitales y lagunas asociadas a la glándula digestiva (hepática). En holoturias, el sistema hemal está muy desarrollado." },
          { type: "heading", level: 3, text: "Sistema nervioso" },
          { type: "paragraph", text: "Es descentralizado, sin un cerebro definido. Consta de tres componentes: el sistema nervioso ectoneural (de origen ectodérmico), el hiponeural (de origen mesodérmico) y el sistema entérico (asociado al digestivo). El sistema ectoneural incluye un anillo nervioso periesofágico y cordones radiales que recorren cada ambulacro. En los asteroideos, los nervios radiales están situados en el fondo de los surcos ambulacrales. En ofiuroideos y equinoideos, los nervios son internos. Los órganos sensoriales son simples: ocelos en los extremos de los brazos de estrellas y erizos, estatocistos en holoturias, y numerosas células sensoriales en la epidermis (tacto, quimiorrecepción)." },
          { type: "heading", level: 3, text: "Aparato digestivo" },
          { type: "paragraph", text: "Varía según la clase. En los asteroideos, la boca lleva a un estómago cardíaco (que puede evaginarse para la digestión externa), un estómago pilórico (con glándulas digestivas que se extienden a los brazos) y un intestino corto que termina en el ano (en la cara aboral). Los ofiuroideos carecen de ano; los residuos se expulsan por la boca. Los equinoideos tienen un intestino largo enrollado, con una linterna de Aristóteles (estructura masticadora) en la región bucal. Las holoturias tienen un intestino largo y recto que desemboca en el ano posterior; algunas son sedimentívoras. Los crinoideos tienen un tracto digestivo en forma de U o de lazo." },
          { type: "heading", level: 3, text: "Respiración y excreción" },
          { type: "paragraph", text: "La respiración se realiza principalmente a través de la superficie del cuerpo, especialmente a través de los podios y branquias dérmicas (papilas en asteroideos). En holoturias, los árboles respiratorios (divertículos del intestino posterior) aumentan enormemente la superficie de intercambio. En ofiuroides, las bursas (invaginaciones de la pared del disco) cumplen función respiratoria y también albergan las gónadas. La excreción de amoníaco se realiza por difusión a través de la piel; los celomocitos fagocitan partículas de desecho y las acumulan en células especializadas (esferocitos)." },
          { type: "heading", level: 3, text: "Reproducción y desarrollo" },
          { type: "paragraph", text: "La mayoría de los equinodermos son dioicos (sexos separados), aunque algunas especies (especialmente crinoideos y ofiuroideos) son hermafroditas. Las gónadas son múltiples (de dos a diez, según la clase) y se abren al exterior por gonoporos. La fecundación es externa (los gametos se liberan al agua). El desarrollo es indirecto: zigoto → blástula → gástrula → larva planctónica (bipinnaria, pluteus, auricularia, doliolaria). La larva sufre una metamorfosis para convertirse en un juvenil de simetría pentarradiada. En algunas especies polares o de aguas profundas, el desarrollo puede ser directo (sin larva, incubación de los embriones). La reproducción asexual por fisión (división del disco) se da en varias especies de asteroideos y ofiuroideos." }
        ]
      },
      {
        id: "clase-asteroidea-detalle",
        title: "Clase Asteroidea: las estrellas de mar",
        content: [
          { type: "heading", level: 2, text: "Estrellas de mar: depredadoras de brazos móviles" },
          { type: "paragraph", text: "Las estrellas de mar tienen un disco central poco diferenciado de los brazos (generalmente 5, pero pueden tener 4 a 40). La simetría es pentarradiada, con la boca en el centro de la cara oral (hacia el sustrato) y el ano en la cara aboral. Presentan surcos ambulacrales abiertos a lo largo de cada brazo, con hileras de podios provistos de ventosa." },
          { type: "list", items: [
            "Morfología externa: espinas dérmicas cortas (a veces provistas de pedicelarios, pequeñas pinzas que limpian la superficie y capturan larvas). Pápulas (branquias dérmicas) en la cara aboral para el intercambio gaseoso. Ocelos en el extremo de cada brazo (sensibles a la luz).",
            "Esqueleto: ossículos calcáreos formando una malla flexible. Musculatura muy desarrollada en los podios.",
            "Aparato digestivo: estómago cardíaco evaginable (puede salir por la boca para digerir presas externamente, como moluscos bivalvos). Glándulas pilóricas (dos por brazo) que secretan enzimas y absorben nutrientes.",
            "Sistema acuífero: madreporita en la cara aboral, canal pétreo, anillo periesofágico, canales radiales en cada brazo, ampollas y podios.",
            "Reproducción: dioicas, con gónadas en cada brazo (por pares). Fecundación externa. Larva bipinnaria, que evoluciona a brachiolaria antes de la metamorfosis. Algunas especies incuban los huevos (como Leptasterias).",
            "Regeneración: extraordinaria; pueden regenerar brazos perdidos (incluso un individuo completo a partir de un solo brazo con parte del disco central).",
            "Ecología trófica: depredadoras activas (estrellas de mar comunes) o carroñeras; algunas son suspensívoras. Se alimentan de moluscos, crustáceos, anélidos, etc. La estrella corona de espinas (Acanthaster planci) se alimenta de corales y ha causado graves daños en la Gran Barrera de Coral cuando sus poblaciones crecen descontroladamente (posiblemente debido a la desaparición de sus depredadores naturales)."
          ] },
          { type: "callout", variant: "example", title: "Ejemplos de asteroideos", content: "Asterias rubens (estrella de mar común del Atlántico), Marthasterias glacialis (estrella espinosa), Luidia ciliaris (con largas espinas marginales), Acanthaster planci (corona de espinas)." }
        ]
      },
      {
        id: "clase-ophiuroidea-detalle",
        title: "Clase Ophiuroidea: ofiuras o estrellas quebradizas",
        content: [
          { type: "heading", level: 2, text: "Ofiuras: brazos serpentiformes para moverse rápidamente" },
          { type: "paragraph", text: "Las ofiuras se distinguen de las estrellas de mar por tener el disco central claramente diferenciado y brazos largos, delgados y muy móviles (movimiento serpentiforme). Los surcos ambulacrales están cerrados, y los podios carecen de ventosa y no participan en la locomoción (ésta se realiza mediante la musculatura de los brazos y las espinas laterales). Presentan dos morfologías básicas: ofiuras típicas (con brazos cilíndricos) y frinofiúrides (con brazos aplanados y ramificados, adaptados a la suspensión)." },
          { type: "list", items: [
            "Morfología externa: disco central cubierto por placas imbricadas (escamas). Los brazos están formados por vértebras calcáreas articuladas que permiten un movimiento lateral muy amplio. En los brazos hay espinas (laterales) que protegen los podios y participan en el desplazamiento.",
            "Sistema digestivo: carecen de ano; los residuos no digeridos se expulsan por la boca. La digestión es intracelular (dentro de los fagocitos de la glándula digestiva).",
            "Bursas: invaginaciones de la pared del disco en la base de los brazos. Función respiratoria, excretora y albergan las gónadas. El intercambio de gases se produce a través de la fina pared de las bursas.",
            "Sistema acuífero: madreporita en la cara oral (a menudo en una de las placas bucales). Canales radiales internos, podios sin ampollas, poco funcionales.",
            "Reproducción: dioicas, con gónadas en las bursas. Fecundación externa. Larva pluteus (diferente de la de los equinoideos, con brazos alados). Algunas especies incuban los embriones en las bursas.",
            "Ecología trófica: muy diversas: depredadoras (capturan pequeños crustáceos), carroñeras, detritívoras selectivas o suspensívoras (filtran partículas con los podios y las espinas). Algunas son comensales (viven en el interior de esponjas, corales, etc.). Pueden alcanzar grandes densidades en fondos blandos."
          ] },
          { type: "callout", variant: "example", title: "Ejemplos de ofiuroideos", content: "Ophiothrix fragilis (ofiura común de fondos rocosos), Ophioderma longicaudum (de brazos largos), Gorgonocephalus (ofiura de la gorgona, con brazos ramificados)." }
        ]
      },
      {
        id: "clase-holothuroidea-detalle",
        title: "Clase Holothuroidea: pepinos de mar",
        content: [
          { type: "heading", level: 2, text: "Holoturias: el cuerpo blando y los árboles respiratorios" },
          { type: "paragraph", text: "Las holoturias (pepinos de mar) tienen el cuerpo alargado, cilíndrico, de simetría bilateral secundaria (se arrastran sobre el sustrato). La boca está rodeada por tentáculos bucales (podios modificados, de 10 a 30) que utilizan para la alimentación; el ano se sitúa en el extremo posterior. La pared del cuerpo es blanda y coriácea, con espículas microscópicas en la dermis. Carecen de brazos y espinas externas." },
          { type: "list", items: [
            "Locomoción: mediante podios ventrales (con ventosa) y movimientos peristálticos del cuerpo. Algunas holoturias son excavadoras y viven enterradas en el sedimento.",
            "Esqueleto: reducido a espículas calcáreas de formas muy variadas (anclas, ganchos, mesas con torre, etc.) que tienen valor taxonómico.",
            "Sistema acuífero: madreporita interna, conectada al celoma (no al exterior). Los tentáculos bucales son podios muy modificados.",
            "Árboles respiratorios: divertículos del intestino posterior que se ramifican dentro del celoma, aumentando la superficie de intercambio gaseoso y excretor. Expulsan agua a través del ano (contracción del intestino).",
            "Tubos de Cuvier: estructuras defensivas situadas en la base de los árboles respiratorios. Al ser irritadas, las holoturias expulsan largos filamentos blanquecinos, pegajosos y tóxicos que pueden disuadir a los depredadores. Los tubos se regeneran posteriormente.",
            "Evisceración: mecanismo extremo de defensa mediante el cual el animal expulsa sus órganos internos (intestino, árboles respiratorios, gónadas) por el ano o por rotura de la pared corporal. Los órganos se regeneran en pocas semanas.",
            "Colágeno mutable: la dermis puede cambiar su rigidez bajo control nervioso (endurecerse o licuarse), permitiendo la autotomía y la regeneración.",
            "Reproducción: dioicas (pocas hermafroditas), con una sola gónada (tubular). Desarrollo indirecto con larva auricularia que se transforma en doliolaria y luego en pentácula (juvenil).",
            "Ecología trófica: sedimentívoras (ingieren arena y extraen materia orgánica) o suspensívoras (capturan partículas con los tentáculos mucosos). Son importantes en el reciclaje de nutrientes en fondos marinos."
          ] },
          { type: "callout", variant: "warning", title: "Sobreexplotación", content: "Los pepinos de mar son capturados en muchas regiones (Indo-Pacífico) para la alimentación humana (beche-de-mer, trepang). Muchas especies están sobreexplotadas y algunas en peligro de extinción. Además, el cambio climático (acidificación del océano) afecta a la formación de sus espículas calcáreas." }
        ]
      },
      {
        id: "clase-crinoidea-detalle",
        title: "Clase Crinoidea: lirios de mar y comátulas",
        content: [
          { type: "heading", level: 2, text: "Crinoideos: los equinodermos más antiguos" },
          { type: "paragraph", text: "Los crinoideos son los equinodermos más antiguos (dominaron los fondos marinos del Paleozoico). Su cuerpo tiene forma de cáliz (protegido por placas calcáreas) del que parten brazos ramificados (a menudo 5, pero se subdividen). La mayoría vive fija al sustrato mediante un pedúnculo (lirios de mar); otros pueden desplazarse usando los brazos (comátulas)." },
          { type: "list", items: [
            "Morfología externa: cáliz con la boca y el ano en la cara supina (hacia arriba). Los brazos están divididos en pinnulas (ramificaciones) que llevan los podios (tentáculos alimentarios). Los podios carecen de ventosa y son ciliados.",
            "Sistema acuífero: sin madreporita visible; el agua entra por hidroporos en la placa madrepórica (o por el tegumento). Canales radiales recorren los brazos y las pinnulas.",
            "Sistema digestivo: tracto en forma de U o de lazo, con el ano en una pequeña protuberancia (chimenea anal) cerca de la boca. Son suspensívoros: las pinnulas generan corrientes que atrapan partículas, transportadas por cilios hacia la boca.",
            "Reproducción: dioicas (algunas hermafroditas). Las gónadas se encuentran en las pinnulas de los brazos. Fecundación externa, desarrollo indirecto con larva doliolaria (con bandas ciliadas) que se fija y metamorfosea en un juvenil pedunculado (lirio). En comátulas, el pedúnculo se pierde al madurar.",
            "Regeneración: pueden regenerar brazos perdidos. Algunas especies son muy longevas (decenas de años)."
          ] },
          { type: "callout", variant: "example", title: "Ejemplos de crinoideos", content: "Pentacrinus (lirio de mar pedunculado), Antedon (comátula común del Mediterráneo), Metacrinus (especies de aguas profundas)." }
        ]
      },
      {
        id: "clase-echinoidea-detalle",
        title: "Clase Echinoidea: erizos de mar",
        content: [
          { type: "heading", level: 2, text: "Erizos regulares e irregulares: del pastoreo a la excavación" },
          { type: "paragraph", text: "Los erizos de mar tienen un esqueleto globular (regulares) o aplanado (irregulares) formado por placas soldadas (caparazón), que está cubierto por espinas móviles articuladas sobre tubérculos. La boca se sitúa en el centro de la cara oral y posee una estructura masticadora especializada, la linterna de Aristóteles, con cinco dientes calcáreos. El ano puede estar en la cara aboral (regulares) o desplazado hacia el extremo posterior (irregulares)." },
          { type: "list", items: [
            "Erizos regulares (ej. Paracentrotus lividus, Arbacia lixula): simetría pentarradiada evidente, cuerpo esférico semirrígido. Viven sobre sustratos duros (rocas, praderas de algas). Se alimentan de algas (herbívoros, aunque algunos pueden ser omnívoros). Tienen una linterna de Aristóteles bien desarrollada para raspar las algas. Los podios ambulacrales tienen ventosas y son locomotores y sensoriales. Madreporita y ano en la cara aboral.",
            "Erizos irregulares (ej. Spatangus purpureus, Clypeaster, Echinocardium): simetría bilateral secundaria (cuerpo acorazonado o aplanado). Viven enterrados en sedimentos blandos (arena, fango). Son detritívoros o sedimentívoros (ingen canales de arena para extraer materia orgánica). La linterna de Aristóteles está reducida o ausente; el aparato masticador puede ser sustituido por una estructura de filtración. El ano se ha desplazado hacia el posterior, y las espinas y podios están adaptados para la excavación.",
            "Sistema acuífero: similar al de asteroideos, pero con podios que salen por pares de poros en las placas ambulacrales. En los irregulares, los podios dorsales pueden tener función respiratoria (formando áreas petaloides).",
            "Linterna de Aristóteles: formada por cinco dientes calcáreos (piramidales) sostenidos por estructuras esqueléticas (apófisis, epífisis, rótulas). Es operada por potentes músculos y permite raspar o triturar.",
            "Reproducción: dioicas con 5 pares de gónadas (en regulares) o 4 pares (en irregulares). Fecundación externa. Larva pluteus (con forma de estrella, con brazos esqueléticos calcáreos). Después de la metamorfosis, el juvenil se fija al sustrato y adquiere la simetría pentarradiada.",
            "Ecología: Los erizos regulares son importantes controladores de las poblaciones de algas. Su sobrepastoreo (cuando faltan depredadores como nutrias o peces) puede convertir praderas de algas en eriales (barrenos marinos). Los erizos irregulares bioturban el sedimento y contribuyen a su oxigenación.",
            "Valor humano: Las gónadas (huevas) de erizos regulares (Paracentrotus lividus, Strongylocentrotus) son un manjar (ou de mar, uni). Se recolectan o cultivan intensamente, lo que en algunas áreas ha llevado a la sobreexplotación.",
            "Cambio climático: El aumento de la temperatura del mar está favoreciendo a especies termófilas como Arbacia lixula (más carnívora/omívora) en detrimento de Paracentrotus lividus, alterando las comunidades bentónicas."
          ] },
          { type: "callout", variant: "info", content: "La linterna de Aristóteles (presente sólo en equinoideos) es una estructura exclusiva que permite la masticación. En los erizos irregulares esta estructura está ausente o muy reducida porque se alimentan de partículas finas." }
        ]
      },
      {
        id: "regeneracion-y-defensa",
        title: "Regeneración, autotomía y defensas químicas",
        content: [
          { type: "heading", level: 2, text: "Capacidades sorprendentes: regenerar y defenderse" },
          { type: "paragraph", text: "Los equinodermos poseen una extraordinaria capacidad de regeneración. Pueden reconstruir brazos (asteroideos, ofiuroideos), podios, espinas, e incluso órganos internos completos (intestino, árboles respiratorios, gónadas). En algunos casos, un solo brazo con parte del disco central puede regenerar un animal entero (asteroideos). La regeneración es posible gracias a células indiferenciadas (amebocitos) y a la reorganización de tejidos." },
          { type: "paragraph", text: "La autotomía (desprendimiento voluntario de un brazo o de las vísceras) es un mecanismo de defensa frecuente. Los ofiuroideos desprenden brazos cuando son atacados; los asteroideos pueden sacrificar un brazo; las holoturias expulsan los tubos de Cuvier o realizan evisceración (expulsión del intestino y los árboles respiratorios). En todos los casos, las estructuras perdidas se regeneran en semanas o meses." },
          { type: "paragraph", text: "Además de la autotomía, muchos equinodermos producen sustancias tóxicas o repelentes (saponinas, asterosaponinas) que disuaden a los depredadores. Las holoturias poseen toxinas en los tubos de Cuvier y en la pared del cuerpo. Algunas estrellas de mar son venenosas (Crown-of-thorns)." }
        ]
      },
      {
        id: "ecologia-y-conservacion",
        title: "Importancia ecológica y conservación",
        content: [
          { type: "heading", level: 2, text: "Equinodermos en los ecosistemas marinos" },
          { type: "paragraph", text: "Los equinodermos cumplen funciones ecológicas clave. Las estrellas de mar y las ofiuras son importantes depredadores que regulan las poblaciones de moluscos, crustáceos y erizos. Los erizos regulares, al pastar algas, determinan la estructura de las comunidades de macroalgas. Los erizos irregulares y las holoturias son ingenieros del sedimento (bioturbación) y contribuyen al reciclaje de nutrientes. Los crinoideos y ofiuras suspensívoras filtran partículas del agua." },
          { type: "paragraph", text: "Sin embargo, muchas poblaciones de equinodermos están amenazadas por la actividad humana. La sobreexplotación pesquera (recogida de erizos para consumo, pesca de pepinos de mar) ha llevado a la disminución de algunas especies. El cambio climático (calentamiento del mar, acidificación) afecta la formación del esqueleto calcáreo (dificultad para precipitar carbonato cálcico) y provoca desplazamientos de especies. Las especies invasoras (como la estrella de mar del norte, Asterias amurensis) han causado graves daños en ecosistemas de Australia." },
          { type: "keypoint", points: [
            "Ambulacraria es un clado monofilético de deuteróstomos con celoma trímero y larvas planctotróficas con bandas ciliadas.",
            "Hemicordados: gusanos bellota (enteropneustos) y pterobranquios. Presentan hendiduras faríngeas, estomocordio y glomérulo renal.",
            "Equinodermos: simetría pentarradiada secundaria, sistema vascular acuífero, endoesqueleto calcáreo y regeneración notable.",
            "Clases principales: Asteroidea (estrellas), Ophiuroidea (ofiuras), Holothuroidea (holoturias), Crinoidea (lirios y comátulas) y Echinoidea (erizos regulares e irregulares).",
            "Importancia ecológica: depredación, pastoreo, bioturbación, filtración. Algunas especies tienen valor comercial y están amenazadas."
          ] }
        ]
      }
    ]
  },
  {
    id: "chordata",
    number: 14,
    title: "Chordata",
    subtitle: "Cordados: del notocordio a la columna vertebral",
    sections: [
      {
        id: "generalidades-sinapomorfias",
        title: "Generalidades y sinapomorfías del filo Chordata",
        content: [
          { type: "heading", level: 2, text: "¿Qué define a un cordado?" },
          { type: "paragraph", text: "El filo Chordata agrupa a animales que presentan en algún momento de su desarrollo (normalmente en la fase embrionaria o larvaria) cuatro estructuras características: notocordio, tubo neural dorsal, hendiduras faríngeas (faringotremia) y cola postanal. Estas sinapomorfías son compartidas por todos los cordados, aunque en muchos grupos adultos se modifican o desaparecen (como el notocordio, que puede ser reemplazado por la columna vertebral)." },
          { type: "list", items: [
            "Notocordio: barra esquelética flexible de origen mesodérmico, situada dorsal al tubo digestivo y ventral al tubo neural. Proporciona soporte y sirve de anclaje para la musculatura. En los vertebrados, es sustituido por las vértebras (cartilaginosas u óseas).",
            "Tubo neural dorsal (epineuria): sistema nervioso central en forma de tubo hueco, situado en posición dorsal (por encima del notocordio). Se forma por invaginación de la placa neural durante la neurulación. Da lugar al cerebro y la médula espinal.",
            "Faringotremia: presencia de hendiduras faríngeas (faringotomos) que perforan la pared de la faringe y comunican la cavidad faríngea con el exterior. En los cordados acuáticos, estas hendiduras forman las branquias; en los tetrápodos, se transforman en otras estructuras (amígdalas, oído medio, glándulas paratiroides).",
            "Cola postanal: prolongación del cuerpo que se extiende más allá del ano. Contiene el notocordio, el tubo neural y músculos, y está relacionada con la locomoción (en especial en formas acuáticas). En muchos vertebrados terrestres la cola es vestigial o está muy reducida.",
            "Endostilo: surco ciliado en el suelo de la faringe, con células que secretan mucus y que fijan yodo. En los cefalocordados y urocordados, el endostilo ayuda a capturar partículas alimenticias. En vertebrados, evoluciona hacia la glándula tiroides."
          ] },
          { type: "callout", variant: "info", content: "Los cordados son deuteróstomos (el blastoporo se convierte en ano) y pertenecen al clado Olfactores (junto con urocordados y cefalocordados). Su ancestro común probablemente era un pequeño filtrador bentónico parecido a los actuales cefalocordados." }
        ]
      },
      {
        id: "subfilo-urochordata",
        title: "Subfilo Urochordata (Tunicata): los tunicados",
        content: [
          { type: "heading", level: 2, text: "Urocordados: cordados solo en la larva" },
          { type: "paragraph", text: "Los urocordados (tunicados) son animales exclusivamente marinos, con unas 3.000 especies, desde aguas superficiales hasta abisales. El nombre “tunicados” se debe a la túnica, una cubierta externa de glucoproteínas y celulosa (tunicina) secretada por el manto. La mayoría son sésiles en estado adulto (ascidias), pero algunos son pelágicos (sáldas, pirosomas, apendicularias). Presentan las sinapomorfías de los cordados solo en la larva nadadora (con forma de renacuajo), que sufre una metamorfosis drástica." },
          { type: "heading", level: 3, text: "Clase Ascidiacea (ascidias)" },
          { type: "paragraph", text: "Adultos sésiles (fijos al sustrato), solitarios o coloniales. El cuerpo tiene forma de saco, con dos sifones (inhalante y exhalante). El agua entra por el sifón oral (inhalante), pasa a la faringe (con numerosas hendiduras faríngeas), donde se filtran las partículas alimenticias; el agua sale por el sifón atrial (exhalante). El endostilo secreta mucus que atrapa las partículas y las conduce al esófago. Carecen de notocordio y tubo neural en el adulto. La larva (renacuajo) tiene notocordio en la cola, tubo neural y un otolito (estatocisto). La metamorfosis fija la larva por la cabeza y reabsorbe la cola, perdiendo las características de cordado. Son hermafroditas (proterándricos) con fecundación externa. Pueden reproducirse asexualmente por gemación (colonias)." },
          { type: "heading", level: 3, text: "Clase Thaliacea (sáldas, pirosomas, doliolos)" },
          { type: "paragraph", text: "Tunicados pelágicos, coloniales o solitarios. Su cuerpo es transparente, con forma de barril o cilíndrica. Los sifones están en extremos opuestos. Nadan por contracción muscular (propulsión a chorro). Alternan generaciones asexual y sexual (metagénesis). Ejemplo: Salpa, Pyrosoma (forman colonias bioluminiscentes)." },
          { type: "heading", level: 3, text: "Clase Appendicularia (Larvacea)" },
          { type: "paragraph", text: "Pequeños tunicados (menos de 1 cm) que retienen la morfología de larva (neotenia): conservan el notocordio y la cola en la edad adulta, pero no tienen túnica; segregan una “casa” gelatinosa (filtro) que renuevan periódicamente. Son planctónicos. Ejemplo: Oikopleura." },
          { type: "callout", variant: "info", content: "Los urocordados son el grupo hermano de los vertebrados (junto con los cefalocordados forman el clado Olfactores). Su genoma ha sufrido una simplificación secundaria." }
        ]
      },
      {
        id: "subfilo-cephalochordata",
        title: "Subfilo Cephalochordata: los anfioxos",
        content: [
          { type: "heading", level: 2, text: "Cefalocordados: el modelo de cordado primitivo" },
          { type: "paragraph", text: "Los cefalocordados (anfioxos, del género Branchiostoma) son pequeños animales marinos (hasta 8 cm) que viven enterrados en fondos arenosos de aguas templadas y tropicales. Presentan las cuatro sinapomorfías de los cordados durante toda su vida (no sufren metamorfosis). Su organización corporal es muy simple y se considera un modelo del plan corporal ancestral de los cordados." },
          { type: "list", items: [
            "Cuerpo en forma de pez, aplanado lateralmente, con aleta dorsal, caudal y anal (sin aletas pares).",
            "Notocordio que se extiende desde la punta del hocico hasta la cola (de ahí el nombre cefalocordado, “cuerda en la cabeza”).",
            "Tubo neural dorsal con una vesícula cerebral rudimentaria (sin cerebro diferenciado).",
            "Faringe con hasta 200 pares de hendiduras faríngeas (que comunican con el atrio, una cavidad ventral), con función filtradora. El endostilo secreta mucus.",
            "Músculos segmentados en miómeros dispuestos en forma de V (carácter plesiomórfico).",
            "Sistema circulatorio cerrado sin corazón (el vaso ventral contráctil bombea la sangre). Sin pigmentos respiratorios.",
            "Excreción por protonefridios (en los primeros segmentos).",
            "Sexos separados (dioicos), fecundación externa. Desarrollo indirecto con una larva que sufre una metamorfosis para fijarse en el sedimento.",
            "Unas 35 especies (géneros Branchiostoma, Epigonichthys)."
          ] }
        ]
      },
      {
        id: "subfilo-craniata",
        title: "Subfilo Craniata (Vertebrata): innovaciones clave",
        content: [
          { type: "heading", level: 2, text: "Los vertebrados: el origen del cráneo y la columna vertebral" },
          { type: "paragraph", text: "El subfilo Craniata (o Vertebrata, según las clasificaciones) incluye a los animales con cráneo (cavidad ósea o cartilaginosa que protege el encéfalo) y, en la mayoría, columna vertebral. Aparecen en el Cámbrico (hace unos 530 millones de años) con formas como Myllokunmingia. Los vertebrados presentan importantes novedades evolutivas respecto a los cordados más basales:" },
          { type: "list", items: [
            "Cráneo (condrocráneo, esplacnocráneo y dermatocráneo) que protege el cerebro y los órganos sensoriales.",
            "Columna vertebral (vértebras) que reemplaza al notocordio (el notocordio puede persistir como núcleo pulposo en discos intervertebrales).",
            "Cresta neural: población de células ectodérmicas que migran durante el desarrollo para formar huesos de la cara, neuronas sensoriales, células pigmentarias y cartílago.",
            "Placodas ectodérmicas: engrosamientos del ectodermo que originan los órganos sensoriales especializados (cristalino, epitelio de oído interno, quimiorreceptores).",
            "Encéfalo tripartito (prosencéfalo, mesencéfalo, rombencéfalo) que evoluciona a complejas regiones cerebrales.",
            "Epidermis pluriestratificada y sistema tegumentario con glándulas, escamas, plumas o pelos.",
            "Musculatura metamérica (miómeros en W) que permite mayor control locomotor.",
            "Aumento del número de genes Hox (duplicaciones en el ancestro de los vertebrados).",
            "Sistema circulatorio cerrado con corazón ventral y eritrocitos con hemoglobina."
          ] },
          { type: "callout", variant: "info", content: "Los vertebrados constituyen el grupo más diverso de cordados (más de 70.000 especies) y han colonizado todos los ambientes: mares, aguas dulces, tierra firme y aire (aves)." }
        ]
      },
      {
        id: "agnatos",
        title: "Agnatos (vertebrados sin mandíbulas)",
        content: [
          { type: "heading", level: 2, text: "Mixinos y lampreas: los vertebrados más primitivos" },
          { type: "paragraph", text: "Los agnatos son vertebrados que carecen de mandíbulas (la boca es circular y succionadora). Incluyen grupos extintos (ostracodermos) y dos clases actuales: Mixinos (Myxini) y Lampreas (Petromyzontida). Son los únicos vertebrados vivos que no presentan vértebras verdaderas en algunos casos (mixinos) o las tienen muy rudimentarias." },
          { type: "heading", level: 3, text: "Clase Myxini (mixinos o anguilas babosas)" },
          { type: "paragraph", text: "Marinos, bentónicos, en aguas frías. Unas 75 especies. Cuerpo alargado, sin aletas pares, con una sola aleta caudal. Piel desnuda (sin escamas) con numerosas glándulas mucosas que segregan grandes cantidades de mucílago como defensa. Cráneo cartilaginoso pero sin vértebras (notocordio persiste). Boca con dos placas dentales córneas. Narina única en posición dorsal. Ojos rudimentarios bajo la piel. Cuatro pares de tentáculos alrededor de la boca. De 5 a 15 pares de sacos branquiales (no hendiduras verdaderas). Corazón con un solo canal semicircular en el oído interno. Alimentación: carroñeros o parásitos (penetran en peces y se alimentan de sus fluidos). Son gonocóricos (sexos separados), fecundación externa, desarrollo directo (sin larva)." },
          { type: "heading", level: 3, text: "Clase Petromyzontida (lampreas)" },
          { type: "paragraph", text: "Unas 38 especies, marinas y de agua dulce (zonas templadas). Cuerpo anguiliforme, sin aletas pares; dos aletas dorsales y aleta caudal. Boca en ventosa con dientes córneos (odontoides) y lengua también con dientes. Ojos bien desarrollados (vida activa). 7 pares de aberturas branquiales. Esqueleto cartilaginoso, con vértebras rudimentarias. Notocordio persistente. Dos canales semicirculares en el oído. La respiración: el agua entra por la boca y por el primer poro branquial (espiráculo) y sale por los demás. Alimentación: muchas especies son parásitas de peces (se adhieren con la ventosa y succionan sangre y tejidos); otras no se alimentan en la fase adulta (mueren tras la reproducción). Ciclo vital: larva (ammocoete) filtradora (parecida al anfioxo), que vive enterrada en sedimentos de ríos durante varios años; sufre una metamorfosis para convertirse en adulto. Los adultos migran al mar (especies anádromas) o permanecen en agua dulce. Reproducción: construyen nidos en grava, mueren tras desovar. La lamprea marina (Petromyzon marinus) es invasora en los Grandes Lagos de Norteamérica, causando graves daños a las pesquerías." }
        ]
      },
      {
        id: "gnathostomata-intro",
        title: "Gnatostomados: la aparición de las mandíbulas",
        content: [
          { type: "heading", level: 2, text: "La conquista de la depredación activa" },
          { type: "paragraph", text: "Los gnatostomados (vertebrados con mandíbulas) aparecieron en el Silúrico (hace unos 440 millones de años) y rápidamente diversificaron. La mandíbula deriva del primer arco branquial (arco mandibular), que se articula con el cráneo (suspensión anfistílica, hiostílica o autostílica). Las mandíbulas permitieron una alimentación más eficiente (depredación activa) y una radiación evolutiva sin precedentes. Los grupos actuales incluyen los condrictios (peces cartilaginosos) y los osteíctios (peces óseos), de los que derivan los tetrápodos." }
        ]
      },
      {
        id: "condrictios",
        title: "Clase Chondrichthyes: peces cartilaginosos",
        content: [
          { type: "heading", level: 2, text: "Tiburones, rayas y quimeras" },
          { type: "paragraph", text: "Los condrictios son peces con esqueleto cartilaginoso (calcificado en algunas zonas, pero sin hueso verdadero). Su piel está recubierta por dentículos dérmicos (escamas placoideas), que dan rugosidad y reducen la turbulencia. Presentan 5-7 pares de hendiduras branquiales (sin opérculo) y un espiráculo (primera abertura branquial modificada). La cola es heterocerca (lóbulo superior más largo). No tienen vejiga natatoria; la flotación se logra mediante un hígado grande y rico en lípidos (escuálido) y, en algunos, por la baja densidad del cartílago. La reproducción es interna (los machos poseen pterigopodios, modificaciones de las aletas pelvianas, para transferir esperma). Pueden ser ovíparos, ovovivíparos o vivíparos." },
          { type: "heading", level: 3, text: "Subclase Elasmobranchii (tiburones y rayas)" },
          { type: "list", items: [
            "Unas 1.200 especies. Tiburones (forma fusiforme, branquias laterales, ojos laterales) y rayas (cuerpo deprimido, branquias ventrales, aletas pectorales expandidas).",
            "Mandíbulas con dientes en varias filas (reemplazo continuo).",
            "Intestino con válvula espiral (aumenta la superficie de absorción).",
            "Osmoregulación: retienen urea y trimetilamina óxido (TMAO) para mantener la osmolaridad de la sangre ligeramente superior al agua de mar.",
            "Sistema de línea lateral muy desarrollado; además, presentan electroreceptores (ampollas de Lorenzini) que detectan campos eléctricos (útiles para localizar presas enterradas).",
            "Reproducción: tiburón blanco (ovovivíparo), tiburón martillo (vivíparo con placenta), raya látigo (ovípara con cápsulas)."
          ] },
          { type: "heading", level: 3, text: "Subclase Holocephali (quimeras o peces rata)" },
          { type: "paragraph", text: "Unas 50 especies, principalmente de aguas profundas. Cuerpo con una sola abertura branquial (cubierta por un opérculo falso). Dientes fusionados en placas trituradoras. Cola delgada (dificerca). Suspensión mandibular autostílica (el palatocuadrado se fusiona al cráneo). Carecen de escamas placoideas (piel lisa). Se alimentan de crustáceos y moluscos. Ejemplo: Hydrolagus (quimera de hocico corto)." }
        ]
      },
      {
        id: "osteictios",
        title: "Clase Osteichthyes: peces óseos",
        content: [
          { type: "heading", level: 2, text: "Peces con esqueleto osificado" },
          { type: "paragraph", text: "Los osteíctios tienen esqueleto óseo (al menos parcialmente). La mayoría poseen vejiga natatoria (órgano de flotación) derivada del pulmón primitivo. Branquias cubiertas por un opérculo óseo móvil. El corazón tiene un cono arterioso (o bulbo arterioso). Presentan escamas (elasmoides, ganoides, cosmoides). Se dividen en dos grandes grupos: Actinopterygii (peces de aletas radiadas) y Sarcopterygii (peces de aletas lobuladas, de los que evolucionaron los tetrápodos)." },
          { type: "heading", level: 3, text: "Actinopterygii (peces de aletas radiadas)" },
          { type: "list", items: [
            "Aletas sostenidas por radios lepidotricos (material parecido a la queratina).",
            "Cola homocerca (los lóbulos son simétricos externamente; internamente la columna se dobla ligeramente hacia arriba).",
            "Vejiga natatoria presente en la mayoría (fisóstoma o fisoclística).",
            "Subclase Chondrostei: condrosteos (esturiones, espátulas). Esqueleto mayoritariamente cartilaginoso, cola heterocerca, espiráculo presente. Ejemplo: Acipenser (esturión, productor de caviar).",
            "Subclase Neopterygii: holósteos (Lepisosteus, Amia) y teleósteos. Los teleósteos constituyen la mayoría de los peces actuales (> 26.000 especies). Presentan aletas con radios, maxilares móviles (protráctiles), vejiga natatoria sin conexión al tubo digestivo (fisoclística), escamas elasmoides (cicloideas o ctenoideas), y esqueleto bien osificado. Órdenes: Clupeiformes (sardinas), Salmoniformes (salmones), Cypriniformes (carpa), Perciformes (perca), etc."
          ] },
          { type: "heading", level: 3, text: "Sarcopterygii (peces de aletas lobuladas)" },
          { type: "list", items: [
            "Aletas pares con un eje basal óseo (carnoso) y radios articulados; la cintura pectoral es robusta.",
            "Poseen pulmones o una vejiga natatoria que funciona como pulmón (respiración aérea).",
            "Subclase Actinistia (celacantos): considerados fósiles vivientes, con representantes actuales (Latimeria chalumnae, L. menadoensis). Aletas lobuladas, cola trilobulada (dificerca), notocordio persistente. Hábitat: aguas profundas marinas.",
            "Subclase Dipnoi (peces pulmonados): tres géneros actuales (Neoceratodus en Australia, Protopterus en África, Lepidosiren en Sudamérica). Cuerpo alargado, aletas lobuladas, respiración aérea obligada (estivan en el barro durante la sequía, dentro de un capullo). Son los parientes vivos más cercanos a los tetrápodos."
          ] },
          { type: "callout", variant: "info", content: "Los sarcopterigios y los tetrápodos forman un clado monofilético (Choanata) caracterizado por la presencia de coanas (conductos que comunican las fosas nasales con la cavidad bucal, permitiendo respirar con la boca cerrada)." }
        ]
      },
      {
        id: "tetrapoda",
        title: "Superclase Tetrapoda: la conquista del medio terrestre",
        content: [
          { type: "heading", level: 2, text: "De las aletas a las extremidades con dedos" },
          { type: "paragraph", text: "Los tetrápodos (vertebrados con cuatro extremidades funcionales o derivadas) evolucionaron a partir de sarcopterigios durante el Devónico (hace unos 370 millones de años). Fósiles de transición como Tiktaalik muestran aletas lobuladas con muñeca y dedos incipientes. Las principales adaptaciones para la vida terrestre incluyen:" },
          { type: "list", items: [
            "Extremidades con dedos (quiridio) y cinturas escapular y pélvica reforzadas, conectadas a la columna vertebral.",
            "Columna vertebral regionalizada (vértebras cervicales, torácicas, lumbares, sacras, caudales).",
            "Flexión de la cabeza mediante la articulación atlanto-occipital (primeras dos vértebras modificadas).",
            "Pulmones más desarrollados (superficie de intercambio aumentada; en anfibios son sacos simples, en amniotas más complejos).",
            "Circulación doble y completa (corazón con tres cámaras en anfibios y tres con tabique parcial o cuatro en amniotas).",
            "Respiración cutánea complementaria en anfibios (piel húmeda y permeable).",
            "Hendiduras faríngeas reducidas (las primeras dos se convierten en oído medio y amígdala).",
            "Coanas (narinas internas) que permiten respirar aire sin abrir la boca."
          ] }
        ]
      },
      {
        id: "anfibios",
        title: "Clase Amphibia: anfibios, los primeros tetrápodos",
        content: [
          { type: "heading", level: 2, text: "Anfibios: vida doble (agua y tierra)" },
          { type: "paragraph", text: "Los anfibios actuales (unos 8.000 especies) son depredadores de pequeños invertebrados, con piel húmeda y glandular (mucosa y venenosa). No tienen escamas ni uñas. El corazón es tricameral (dos aurículas y un ventrículo) con un espiral parcial que desvía la sangre. Son ectotermos. La mayoría necesita agua para la reproducción (huevos sin cáscara, larvas acuáticas con branquias y metamorfosis). Existen tres órdenes." },
          { type: "heading", level: 3, text: "Orden Gymnophiona (cecilias)" },
          { type: "paragraph", text: "Apodos (sin extremidades), de hábitos subterráneos (excavadores) o acuáticos. Cuerpo anillado, ojos pequeños o ausentes, tentáculos sensoriales entre los ojos y las narinas. Unas 200 especies tropicales. Reproducción: fecundación interna (el macho introduce un órgano copulador, el falodeo). Mayoría ovíparos (con puesta terrestre y cuidado parental) o vivíparos. Larvas acuáticas en algunas especies." },
          { type: "heading", level: 3, text: "Orden Caudata (urodelos: salamandras y tritones)" },
          { type: "paragraph", text: "Unas 700 especies. Cuerpo alargado, con cola bien desarrollada y cuatro extremidades (aunque algunas especies acuáticas tienen reducción). Piel lisa. Fecundación interna mediante espermatóforos que la hembra recoge. Mayoría ovíparas (larvas acuáticas con branquias externas). Algunas especies presentan neotenia (conservación de caracteres larvarios, como branquias, en el adulto, por ejemplo, el axolote Ambystoma mexicanum). Ejemplos: Triturus (tritón), Salamandra (salamandra, vivípara)." },
          { type: "heading", level: 3, text: "Orden Anura (ranas y sapos)" },
          { type: "paragraph", text: "Unas 6.700 especies. Cuerpo compacto, sin cola en el adulto, con extremidades posteriores muy desarrolladas para el salto. Metamorfosis completa: renacuajo (larva acuática herbívora/filtradora) se transforma en adulto carnívoro. Vocalizaciones mediante sacos vocales. Fecundación externa (amplexo). La mayoría son ovíparas (masas de huevos en agua). Ejemplo: Rana (rana verde), Bufo (sapo), Hyla (rana arbórea). Los anfibios están sufriendo una crisis de conservación global: declive de poblaciones debido a pérdida de hábitat, cambio climático y enfermedades como la quitridiomicosis (Batrachochytrium dendrobatidis)." }
        ]
      },
      {
        id: "amniotas",
        title: "Amniotas: el huevo con membranas extraembrionarias",
        content: [
          { type: "heading", level: 2, text: "La conquista definitiva de la tierra firme" },
          { type: "paragraph", text: "Los amniotas surgieron en el Carbonífero (hace unos 320 millones de años). Su principal innovación es el huevo amniótico, que permite la reproducción fuera del agua. El huevo contiene cuatro membranas extraembrionarias: amnios (rodea al embrión y lo protege), corion (intercambio gaseoso), alantoides (acumula desechos y contribuye al intercambio) y saco vitelino (nutrición). Los amniotas incluyen a los saurópsidos (reptiles y aves) y a los sinápsidos (mamíferos)." },
          { type: "list", items: [
            "Fecundación interna (copulación o espermatóforo).",
            "Desarrollo directo (sin larva).",
            "Piel queratinizada, con escamas (reptiles), plumas (aves) o pelo (mamíferos), que evita la desecación.",
            "Respiración pulmonar exclusiva (en reptiles y aves; los mamíferos también).",
            "Circulación doble y completa (corazón con cuatro cámaras, aunque en reptiles no mamíferos el ventrículo está incompletamente dividido).",
            "Excreción de ácido úrico (reptiles, aves) o urea (mamíferos)."
          ] }
        ]
      },
      {
        id: "reptiles",
        title: "Clase Reptilia (saurópsidos no avianos)",
        content: [
          { type: "heading", level: 2, text: "Reptiles: escamas y ectotermia" },
          { type: "paragraph", text: "Los reptiles actuales (más de 10.000 especies) son amniotas ectotermos, con piel cubierta de escamas epidérmicas (queratina). La mayoría son ovíparos; los huevos tienen cáscara calcárea o coriácea. El corazón es tricameral con un tabique ventricular incompleto (excepto en cocodrilos, que tienen cuatro cámaras). Respirán exclusivamente por pulmones (no respiración cutánea). Excreción de ácido úrico (ahorro de agua)." },
          { type: "heading", level: 3, text: "Orden Testudines (tortugas)" },
          { type: "paragraph", text: "Unas 350 especies. Cuerpo protegido por un caparazón óseo fusionado a las vértebras y costillas. Mandíbulas sin dientes, con un pico córneo. Ectotermas, de distribución mundial. Marinas, de agua dulce y terrestres. La reproducción es ovípara; el sexo está determinado por la temperatura de incubación. Longevidad muy alta (>150 años en especies grandes)." },
          { type: "heading", level: 3, text: "Orden Squamata (lagartos, serpientes, anfisbenas)" },
          { type: "paragraph", text: "El orden más diverso de reptiles actuales (más de 10.000 especies). Cuerpo cubierto de escamas imbricadas, que mudan periódicamente (muda de la piel completa). Los lagartos (Sauria) tienen cuatro extremidades (algunos las han perdido secundariamente). Las serpientes (Ophidia) son ápodas, con mandíbulas muy flexibles (unidas por ligamentos elásticos) que permiten tragar presas enteras; tienen órganos de Jacobson (quimiorreceptores) y algunas poseen glándulas de veneno. Los anfisbenos (Amphisbaenia) son reptiles excavadores con cuerpo anillado y extremidades atrofiadas. La reproducción es ovípara u ovovivípara. Ejemplos: Lacerta (lagarto), Vipera (víbora), Python (pitón)." },
          { type: "heading", level: 3, text: "Orden Crocodylia (cocodrilos, aligátores, gaviales)" },
          { type: "paragraph", text: "Unas 24 especies, las más cercanas a las aves. Son reptiles semiacuáticos, depredadores, con cuerpo alargado, mandíbulas potentes y dientes implantados en alvéolos (tecodontia). Corazón completamente dividido (cuatro cámaras). Exhiben cuidado parental (la hembra construye un nido, protege los huevos y transporta a las crías). Ectotermos, pero pueden regular su temperatura mediante baños de sol. Ejemplo: Crocodylus niloticus, Alligator mississippiensis." }
        ]
      },
      {
        id: "aves",
        title: "Clase Aves: los reptiles emplumados",
        content: [
          { type: "heading", level: 2, text: "Aves: homeotermas, con plumas y vuelo" },
          { type: "paragraph", text: "Las aves evolucionaron a partir de dinosaurios terópodos en el Jurásico (Archeopteryx, hace 150 Ma). Son amniotas con plumas (estructuras epidérmicas de queratina), endotermia (homeotermas), y esqueleto adaptado al vuelo (huesos neumáticos, quilla en el esternón, fusión de vértebras). Presentan un corazón con cuatro cámaras, circulación doble y completa. Respiración con sacos aéreos que permiten un flujo unidireccional de aire en los pulmones (muy eficiente). Mandíbulas sin dientes (beca córnea). Ojos grandes y buena visión en color. Órgano vocal: siringe. Excreción de ácido úrico (poco agua). Reproducción: ovípara, con huevos amnióticos calcáreos, incubación externa, cuidado parental. Los polluelos pueden ser nidícolas (altriciales) o nidífugos (precoces)." },
          { type: "heading", level: 3, text: "Adaptaciones al vuelo" },
          { type: "list", items: [
            "Aletas (alas) con plumas de vuelo (remeras, cobertoras, timoneras).",
            "Esternón con quilla (excepto en aves no voladoras como el avestruz).",
            "Huesos neumáticos (con cavidades llenas de aire) que reducen el peso.",
            "Fusión de vértebras (sacro y pigóstilo) para dar rigidez.",
            "Sacos aéreos conectados a los pulmones, que también facilitan la termorregulación.",
            "Metabolismo elevado (endotermia)."
          ] },
          { type: "heading", level: 3, text: "Clasificación de las aves" },
          { type: "paragraph", text: "Aves actuales (Neornithes) se dividen en Paleognathae (aves no voladoras como el avestruz, emú, ñandú, kiwi, casuario) y Neognathae (aves con quilla, la mayoría, incluyendo gallináceas, patos, gaviotas, rapaces, loros, paseriformes). Existen más de 10.000 especies. Muchas realizan largas migraciones (rutas migratorias intercontinentales). Las aves desempeñan funciones ecológicas importantes (polinización, dispersión de semillas, control de plagas). Algunas especies son de interés económico (aves de corral) o cinegético. Además, pueden ser vectores de enfermedades (gripe aviar, virus del Nilo occidental)." }
        ]
      },
      {
        id: "mamiferos",
        title: "Clase Mammalia: glándulas mamarias y pelo",
        content: [
          { type: "heading", level: 2, text: "Mamíferos: endotermos, vivíparos (en su mayoría) con pelo y leche" },
          { type: "paragraph", text: "Los mamíferos son sinápsidos (un solo arco temporal en el cráneo) que evolucionaron a partir de los terápsidos en el Triásico. Presentan pelo (carácter sinapomórfico), glándulas mamarias (producen leche), dentición diferenciada (heterodoncia) y diphyodontia (dos juegos de dientes, deciduos y permanentes). El corazón es tetracameral, circulación doble completa, endotermia. Excreción de urea. Encéfalo muy desarrollado, con neocorteza. Órganos sensoriales complejos (audición con tres huesecillos: martillo, yunque y estribo). Fecundación interna. La mayoría son vivíparos (excepto monotremas)." },
          { type: "heading", level: 3, text: "Subclase Prototheria (monotremas)" },
          { type: "paragraph", text: "Solo cinco especies actuales (ornitorrinco y cuatro equidnas). Viven en Australia y Nueva Guinea. Ponen huevos (ovíparos), pero amamantan a las crías (sin pezones, la leche es secretada por campos glandulares). Pelo, hocico en forma de pico (ornitorrinco). Esqueleto reptiliano (cintura pectoral con huesos coracoides y procoracoides). Cloaca. Ectotermia moderada (no regulan perfectamente la temperatura)." },
          { type: "heading", level: 3, text: "Subclase Theria (marsupiales y placentarios)" },
          { type: "paragraph", text: "Infraclase Metatheria (marsupiales): unas 330 especies, principalmente en Australia y América. Las crías nacen muy inmaduras (altriciales) y completan su desarrollo en una bolsa (marsupio) donde se adhieren a un pezón. Ejemplos: canguros (Macropus), koalas (Phascolarctos), zarigüeyas (Didelphis)." },
          { type: "paragraph", text: "Infraclase Eutheria (placentarios): la mayoría de los mamíferos (unas 5.000 especies). Poseen placenta corioalantoidea (comunicación íntima madre-embrión) que permite gestaciones largas y crías más desarrolladas. Órdenes destacados: Rodentia (roedores, más del 40% de especies), Chiroptera (murciélagos, únicos mamíferos voladores), Cetacea (ballenas, delfines), Carnivora (perros, gatos, osos, focas), Proboscidea (elefantes), Primates (lémures, monos, simios, humanos)." },
          { type: "heading", level: 3, text: "Orden Primates y familia Hominidae" },
          { type: "paragraph", text: "Primates: dedos prensiles, uñas planas, visión binocular (ojos frontales), cerebro grande. Suborden Strepsirrhini (lémures) y Haplorrhini (monos, simios). La familia Hominidae (grandes simios) incluye a chimpancés (Pan), gorilas (Gorilla), orangutanes (Pongo) y humanos (Homo). El género Homo aparece hace unos 2.5 millones de años en África; la única especie actual es Homo sapiens, caracterizada por bipedismo, cerebro muy desarrollado y lenguaje simbólico." }
        ]
      },
      {
        id: "resumen-chordata",
        title: "Resumen: claves de los cordados",
        content: [
          { type: "heading", level: 2, text: "Ideas fundamentales" },
          { type: "keypoint", points: [
            "Los cordados se definen por notocordio, tubo neural dorsal, hendiduras faríngeas y cola postanal (en algún estadio).",
            "Urocordados: adultos sésiles (ascidias) o pelágicos; solo la larva presenta las cuatro sinapomorfías.",
            "Cefalocordados (anfioxos): presentan todas las sinapomorfías toda la vida; modelo de cordado primitivo.",
            "Craniados (vertebrados): cráneo, columna vertebral, cresta neural y placodas; gran diversificación.",
            "Agnatos (mixinos, lampreas): sin mandíbulas; lampreas tienen larva ammocoete.",
            "Gnatostomados (mandíbulas): condrictios (esqueleto cartilaginoso, dentículos dérmicos, válvula espiral) y osteíctios (esqueleto óseo, vejiga natatoria).",
            "Tetrápodos (amfibios, amniotas): extremidades con dedos, pulmones, circulación doble.",
            "Amniotas (reptiles, aves, mamíferos): huevo amniótico, piel queratinizada, excreción de ácido úrico o urea.",
            "Aves: plumas, endotermia, esqueleto neumático, huevos con cáscara calcárea.",
            "Mamíferos: pelo, glándulas mamarias, heterodoncia, cerebro desarrollado."
          ] }
        ]
      }
    ]
  },
  {
    id: "vocabulario",
    number: 15,
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
