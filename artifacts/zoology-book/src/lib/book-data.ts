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
          { type: "heading", level: 1, text: "Arquitectura Animal — Parte I" },
          { type: "heading", level: 2, text: "Biodiversidad del mundo viviente" },
          { type: "callout", variant: "info", title: "Dato clave", content: "La vida fue unicelular durante 2.500 millones de años antes de que aparecieran los primeros animales." },
          { type: "paragraph", text: "La aparición de las cianobacterias provoca la acumulación de O₂ en la atmósfera y, en consecuencia, la aparición de los eucariotas." },
          { type: "paragraph", text: "Los coanoflagelados se consideran los organismos más próximos filogenéticamente a los animales actuales (metazoos). Los coanocitos (células flageladas que forman los poríferos) podrían haber derivado de los coanoflagelados, ya que son prácticamente idénticos." },
          { type: "paragraph", text: "Existen colonias facultativas como las de Proterospongia (protistas) sin división de funciones ni tejidos diferenciados, formadas únicamente por células de tipo coanocito, que ilustran posibles estados intermedios entre protistas y metazoos." },
        ],
      },
      {
        id: "metazoos-caracteristicas",
        title: "¿Qué es un metazoo?",
        content: [
          { type: "heading", level: 2, text: "Metazoos: características generales" },
          { type: "paragraph", text: "Los animales (metazoos) comparten un conjunto de rasgos básicos:" },
          { type: "list", items: [
            "Son pluricelulares con células diferenciadas en tejidos.",
            "Son heterótrofos y, en general, con capacidad de movimiento.",
            "Derivan de un desarrollo embrionario característico (con blastulación y gastrulación).",
            "Presentan ciclos diploides con gametos haploides (óvulos y espermatozoides)."
          ]},
          { type: "callout", variant: "tip", title: "Ventajas de la pluricelularidad", content: "Mayor longevidad, éxito reproductivo, eficacia funcional y posibilidad de alcanzar grandes tamaños corporales." },
          { type: "heading", level: 3, text: "¿Cuántas maneras hay de ser «animal»?" },
          { type: "paragraph", text: "Se han descrito unos 34 tipos de organización (filos) de metazoos. Cada filo responde a un plan estructural diferente — el «Bauplan» o «Body Plan» —, es decir, a una arquitectura animal propia." },
          { type: "paragraph", text: "Cada filo construye su plan estructural siguiendo un proceso de desarrollo embrionario particular." },
        ],
      },
      {
        id: "formacion-animal",
        title: "Formación de un animal",
        content: [
          { type: "heading", level: 2, text: "¿Cómo se forma un animal?" },
          { type: "paragraph", text: "Existen tres opciones teóricas para construir un cuerpo pluricelular:" },
          { type: "definition", term: "Opción 1 — Masa de células", definition: "No funcionaría: las células interiores no podrían intercambiar gases por difusión. Se necesita una capa muy fina." },
          { type: "definition", term: "Opción 2 — Una capa de células", definition: "Tampoco resulta viable como animal: presenta limitaciones de oxigenación y organización (ej. Volvox, una colonia)." },
          { type: "definition", term: "Opción 3 — Dos capas de células", definition: "Sí funciona: permite el intercambio de gases por difusión y separa funciones (ectodermo y endodermo). Es la base de los diploblásticos." },
        ],
      },
      {
        id: "cavidades-corporales",
        title: "Cavidades corporales",
        content: [
          { type: "heading", level: 2, text: "Cavidades corporales en los triblásticos" },
          { type: "paragraph", text: "Los triblásticos (con tres hojas embrionarias) tienen problemas para evolucionar hacia tamaños grandes si no resuelven la difusión interna." },
          { type: "definition", term: "Solución 1", definition: "Hacerse alargados y aplanados (mayor relación superficie/volumen). Es la solución de los platelmintos." },
          { type: "definition", term: "Solución 2", definition: "Disponer de cavidades internas con fluidos en movimiento, que ayudan al transporte y la difusión y permiten un mayor tamaño." },
          { type: "paragraph", text: "Según el tipo de cavidad reconocemos tres modelos de organización:" },
          { type: "definition", term: "Acelomados", definition: "Sin cavidad interna; el mesodermo es compacto. Ejemplo: gusanos planos." },
          { type: "definition", term: "Pseudocelomados", definition: "Con cavidad (pseudoceloma) no rodeada por mesotelio. Actúa como esqueleto hidrostático y crea una presión interna estable. Ejemplo: nematodos." },
          { type: "definition", term: "Celomados", definition: "Con cavidad verdadera (celoma) rodeada por un epitelio mesodérmico (peritoneo). Permite el transporte de fluidos, el intercambio regulado entre tejidos y la aparición de órganos complejos. Ejemplo: anélidos." },
          { type: "keypoint", points: [
            "Diploblásticos = 2 hojas embrionarias (ectodermo + endodermo).",
            "Triblásticos = 3 hojas (añaden el mesodermo).",
            "El celoma facilita el aumento de tamaño y la complejidad orgánica."
          ]},
        ],
      },
    ],
  },
  {
    id: "arquitectura-2",
    number: 2,
    title: "Arquitectura Animal — Parte II",
    subtitle: "Simetría, metamería y esqueletos",
    sections: [
      {
        id: "simetria",
        title: "Simetría corporal",
        content: [
          { type: "heading", level: 2, text: "Tipos de simetría" },
          { type: "definition", term: "Asimetría", definition: "Sin plano de simetría definido. Ejemplo: muchas esponjas." },
          { type: "definition", term: "Simetría radial", definition: "Múltiples planos de simetría que pasan por el eje oral-aboral. Típica de animales sésiles o pelágicos pasivos (cnidarios, ctenóforos)." },
          { type: "definition", term: "Simetría bilateral", definition: "Un único plano de simetría que divide el cuerpo en mitades especulares (derecha e izquierda). Implica la aparición de una región anterior (cabeza) y una posterior, junto con cefalización." },
          { type: "callout", variant: "info", content: "La simetría bilateral está ligada a la búsqueda activa de alimento y a la cefalización (concentración de órganos sensoriales en la región anterior)." },
        ],
      },
      {
        id: "metameria",
        title: "Metamería y segmentación",
        content: [
          { type: "heading", level: 2, text: "Metamería" },
          { type: "paragraph", text: "La metamería es la repetición seriada de unidades estructurales (metámeros o segmentos) a lo largo del eje anteroposterior del cuerpo. Cada metámero suele incluir una porción de celoma, musculatura, nervios y a veces órganos repetidos." },
          { type: "definition", term: "Metamería homónoma", definition: "Todos los segmentos son muy similares (ej. anélidos poliquetos)." },
          { type: "definition", term: "Metamería heterónoma", definition: "Los segmentos están especializados en regiones (ej. artrópodos: cabeza, tórax y abdomen)." },
          { type: "definition", term: "Pseudometamería", definition: "Repetición aparente de algunos órganos sin verdadera segmentación celómica (ej. monoplacóforos, poliplacóforos)." },
          { type: "callout", variant: "tip", title: "Ventajas de la metamería", content: "Permite especializar regiones del cuerpo, facilita la locomoción, aumenta la eficacia muscular y favorece el crecimiento por adición de segmentos (crecimiento teloblástico)." },
        ],
      },
      {
        id: "esqueletos",
        title: "Tipos de esqueleto",
        content: [
          { type: "heading", level: 2, text: "Sistemas esqueléticos" },
          { type: "definition", term: "Esqueleto hidrostático", definition: "El soporte se basa en la presión de un líquido interno encerrado por una pared muscular. Típico de cnidarios, platelmintos, anélidos y nematodos." },
          { type: "definition", term: "Exoesqueleto", definition: "Esqueleto externo segregado por la epidermis. Puede ser de quitina (artrópodos) o de carbonato cálcico (moluscos, briozoos, braquiópodos)." },
          { type: "definition", term: "Endoesqueleto", definition: "Esqueleto interno mineralizado. Típico de equinodermos (placas de carbonato cálcico) y vertebrados (huesos y cartílagos)." },
          { type: "callout", variant: "warning", content: "El exoesqueleto rígido limita el crecimiento y obliga a procesos de muda (ecdisis) periódicos en los ecdisozoos." },
        ],
      },
    ],
  },
  {
    id: "arquitectura-3",
    number: 3,
    title: "Arquitectura Animal — Parte III",
    subtitle: "Desarrollo embrionario y filogenia básica",
    sections: [
      {
        id: "desarrollo",
        title: "Desarrollo embrionario",
        content: [
          { type: "heading", level: 2, text: "Etapas del desarrollo" },
          { type: "list", ordered: true, items: [
            "Fecundación: unión del óvulo y el espermatozoide (interna o externa).",
            "Segmentación: divisiones mitóticas sucesivas del zigoto que generan la mórula.",
            "Blastulación: formación de la blástula con una cavidad interna (blastocele).",
            "Gastrulación: invaginación que origina ectodermo, endodermo y arquénteron (futuro tubo digestivo).",
            "Organogénesis: formación de órganos a partir de las hojas embrionarias."
          ]},
          { type: "heading", level: 3, text: "Tipos de segmentación" },
          { type: "definition", term: "Segmentación radial", definition: "Los blastómeros se sitúan unos sobre otros formando filas. Típica de deuteróstomos." },
          { type: "definition", term: "Segmentación espiral", definition: "Los blastómeros se disponen alternando posiciones. Típica de protóstomos espirales (Spiralia)." },
          { type: "definition", term: "Segmentación holoblástica", definition: "Divisiones completas del zigoto (huevos con poco vitelo)." },
          { type: "definition", term: "Segmentación meroblástica", definition: "Divisiones parciales (huevos con mucho vitelo, como los cefalópodos)." },
        ],
      },
      {
        id: "protostomos-deuterostomos",
        title: "Protóstomos y deuteróstomos",
        content: [
          { type: "heading", level: 2, text: "Dos grandes linajes de bilaterales" },
          { type: "table", headers: ["Carácter", "Protóstomos", "Deuteróstomos"], rows: [
            ["Origen de la boca", "Del blastoporo", "Del segundo orificio"],
            ["Origen del ano", "Segundo orificio", "Del blastoporo"],
            ["Segmentación", "Espiral, determinada", "Radial, indeterminada"],
            ["Formación del celoma", "Esquizocélica", "Enterocélica"],
            ["Ejemplos", "Anélidos, moluscos, artrópodos", "Equinodermos, cordados"]
          ]},
          { type: "callout", variant: "info", title: "Nephrozoa", content: "Tanto protóstomos como deuteróstomos forman parte de los Nephrozoa, animales bilaterales con sistema excretor." },
          { type: "paragraph", text: "Los protóstomos se subdividen en dos grandes clados: Spiralia (= Lophotrochozoa, con segmentación espiral y a menudo larva trocófora) y Ecdysozoa (con cutícula y proceso de muda)." },
        ],
      },
      {
        id: "filogenia",
        title: "Esquema filogenético básico",
        content: [
          { type: "heading", level: 2, text: "Árbol simplificado de los metazoos" },
          { type: "list", items: [
            "Porifera (esponjas) — diploblásticos sin tejidos verdaderos.",
            "Ctenophora y Cnidaria — diploblásticos con simetría radial.",
            "Bilateria — animales bilaterales triblásticos.",
            "  → Spiralia (Lophotrochozoa): platelmintos, anélidos, moluscos, lofoforados.",
            "  → Ecdysozoa: nematodos, artrópodos, etc.",
            "  → Deuterostomia: equinodermos, cordados."
          ]},
          { type: "keypoint", points: [
            "El plan corporal de cada filo se hereda y se conserva con pocas modificaciones evolutivas.",
            "El estudio comparado del desarrollo embrionario es esencial para reconstruir la filogenia animal.",
            "Los caracteres compartidos por todos los descendientes de un ancestro común se llaman sinapomorfías."
          ]},
        ],
      },
    ],
  },
  {
    id: "ctenoforos-placozoos",
    number: 4,
    title: "Ctenóforos y Placozoos",
    subtitle: "Filos basales de los metazoos",
    sections: [
      {
        id: "ctenoforos",
        title: "Ctenóforos",
        content: [
          { type: "heading", level: 2, text: "Filo Ctenophora" },
          { type: "paragraph", text: "Los ctenóforos son animales marinos planctónicos, transparentes y gelatinosos. Su nombre significa «portadores de peines» por las hileras de cilios fusionados en peines (ctenos) que utilizan para nadar." },
          { type: "list", items: [
            "Simetría birradial (variante de la radial).",
            "Diploblásticos con una mesoglea muy desarrollada.",
            "Ocho hileras de placas ciliadas (ctenos) usadas para la natación.",
            "Dos tentáculos largos retráctiles con coloblastos (células adhesivas), no urticantes.",
            "Cavidad gastrovascular ramificada con boca y poros aborales.",
            "Estatocisto apical para el equilibrio."
          ]},
          { type: "callout", variant: "info", title: "Diferencia clave con los cnidarios", content: "Los ctenóforos no tienen cnidocitos. Capturan presas con coloblastos (células pegajosas) en lugar de células urticantes." },
          { type: "paragraph", text: "Mayoritariamente hermafroditas, con fecundación externa y desarrollo directo a través de una larva cidípida." },
        ],
      },
      {
        id: "placozoos",
        title: "Placozoos",
        content: [
          { type: "heading", level: 2, text: "Filo Placozoa" },
          { type: "paragraph", text: "Los placozoos son los metazoos con la organización corporal más sencilla conocida. El representante clásico es Trichoplax adhaerens." },
          { type: "list", items: [
            "Cuerpo aplanado, irregular, de unos pocos milímetros.",
            "Sin simetría definida y sin órganos.",
            "Solo unos pocos tipos celulares organizados en dos epitelios (dorsal y ventral) y una capa intermedia con células contráctiles.",
            "Sin sistema nervioso ni musculatura organizada.",
            "Se desplazan deslizándose sobre el sustrato gracias a los cilios ventrales.",
            "Digestión externa: secretan enzimas sobre el sustrato y absorben los nutrientes."
          ]},
          { type: "callout", variant: "tip", content: "Su simplicidad ha llevado a considerarlos un modelo para entender el origen de los metazoos." },
        ],
      },
    ],
  },
  {
    id: "origen-metazoos",
    number: 5,
    title: "Origen de los Metazoos",
    subtitle: "De los protistas coloniales al animal pluricelular",
    sections: [
      {
        id: "hipotesis",
        title: "Hipótesis sobre el origen",
        content: [
          { type: "heading", level: 2, text: "Hipótesis evolutivas" },
          { type: "definition", term: "Hipótesis colonial (Haeckel)", definition: "Los metazoos derivarían de colonias de protistas flagelados similares a los coanoflagelados, en las que se produjo una progresiva especialización celular." },
          { type: "definition", term: "Hipótesis sincitial", definition: "Propone que los metazoos derivarían de un protista plurinucleado (ciliado) que posteriormente se compartimentaría en células." },
          { type: "paragraph", text: "Las pruebas moleculares y morfológicas actuales apoyan claramente la hipótesis colonial: los coanoflagelados son el grupo hermano de los metazoos." },
        ],
      },
      {
        id: "coanoflagelados",
        title: "Los coanoflagelados",
        content: [
          { type: "heading", level: 2, text: "Coanoflagelados" },
          { type: "paragraph", text: "Son protistas unicelulares con un único flagelo rodeado por un collar de microvellosidades (la «coana»). Esta morfología es prácticamente idéntica a la de los coanocitos de las esponjas." },
          { type: "list", items: [
            "Pueden ser solitarios o formar colonias facultativas.",
            "Capturan partículas alimenticias con el collar de microvellosidades.",
            "Comparten con los metazoos genes implicados en adhesión celular y señalización."
          ]},
          { type: "callout", variant: "example", title: "Proterospongia", content: "Forma colonial de coanoflagelados sin diferenciación celular: un puente conceptual hacia la pluricelularidad animal." },
        ],
      },
      {
        id: "novedades-metazoos",
        title: "Novedades evolutivas de los metazoos",
        content: [
          { type: "heading", level: 2, text: "Innovaciones clave" },
          { type: "list", items: [
            "Adhesión celular estable mediante cadherinas e integrinas.",
            "Matriz extracelular con colágeno.",
            "Comunicación celular: señalización por péptidos y receptores.",
            "Desarrollo embrionario regulado con blastulación y gastrulación.",
            "Diferenciación de células germinales y somáticas."
          ]},
          { type: "keypoint", points: [
            "El paso de protista colonial a metazoo implicó una división estable del trabajo entre células.",
            "El colágeno es una proteína exclusiva de los metazoos.",
            "La aparición de los Hox genes permitió la diversificación de planes corporales en los bilaterales."
          ]},
        ],
      },
    ],
  },
  {
    id: "patologias-protistas",
    number: 6,
    title: "Patologías y Protistas Asociados",
    subtitle: "Protistas parásitos de interés zoológico",
    sections: [
      {
        id: "introduccion-patologias",
        title: "Introducción",
        content: [
          { type: "heading", level: 2, text: "Protistas parásitos" },
          { type: "paragraph", text: "Aunque los protistas no son metazoos, varios grupos parasitan animales y son responsables de enfermedades importantes en la fauna salvaje, los animales domésticos y el ser humano. Su estudio es relevante en zoología por su impacto ecológico y sanitario." },
        ],
      },
      {
        id: "ejemplos-protistas",
        title: "Ejemplos relevantes",
        content: [
          { type: "heading", level: 2, text: "Grupos y patologías" },
          { type: "definition", term: "Apicomplexos (Plasmodium)", definition: "Parásitos intracelulares con un complejo apical para la invasión celular. Plasmodium causa la malaria, transmitida por mosquitos del género Anopheles." },
          { type: "definition", term: "Tripanosomátidos (Trypanosoma, Leishmania)", definition: "Flagelados parásitos transmitidos por insectos vectores. Causan la enfermedad del sueño, la enfermedad de Chagas y la leishmaniasis." },
          { type: "definition", term: "Amebas (Entamoeba histolytica)", definition: "Causan disentería amebiana en humanos." },
          { type: "definition", term: "Ciliados (Ichthyophthirius)", definition: "Parásitos externos de peces que provocan la enfermedad del «punto blanco» en acuicultura." },
          { type: "callout", variant: "warning", title: "Importancia ecológica", content: "Las parasitosis por protistas pueden regular las poblaciones hospedadoras y afectar gravemente a la producción acuícola y ganadera." },
        ],
      },
    ],
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
