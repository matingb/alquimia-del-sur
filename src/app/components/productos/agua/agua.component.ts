import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-agua',
  templateUrl: './agua.component.html',
  styleUrls: ['./agua.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition('true => false', [
        style({opacity: 0}),
        animate('800ms ease-in', style({opacity:1}))
      ]),
      transition('false => true', [
        style({opacity: 0}),
        animate('800ms ease-in', style({opacity:1}))
      ]),
      transition(':enter', [
        style({opacity: 0}),
        animate('800ms ease-in', style({opacity:1}))
      ])
    ]),
    trigger('navInOut', [
      transition(':enter', [
        style({ width: 0, overflow: 'hidden' }),
        animate('0.3s', style({ width: '!'}))
      ]),
      transition(':leave', [
        style({ width: '!', overflow: 'hidden' }),
        animate('0.3s', style({ width: 30}))
      ])
    ])
  ]
})
export class AguaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(this.modifyAsideHeight, 50);
  }

  public categoryChange = false;
  public categoriaSeleccionada = null;
  public hideNav = true;

  private _antracita = {
    nombre: "Antracita",
    aplicacion: "La antracita es un excelente medio de filtración para clarificación del agua en uso potable o industrial, cuando es usada en combinación con arenas filtrantes. Es un carbón mineral, de color negro, brillante, con gran dureza, presenta mayor contenido en carbono, hasta un 95%.",
    presentacion: "Bolsas",
  }
  private _arena = {
    nombre: "Arena",
    aplicacion: "La arena es provista en diferentes tamaños (gravas) generalmente se provee entre 0.3 a 1.5mm. Generalmente se utilizan en los filtros de arena tanto en piscinas como en potabilización y tratamiento de efluentes",
    presentacion: "Bolsa – Bolsones de 1000 litros - Granel",
  }
  private _carbonActivado = {
    nombre: "Carbón Activado",
    aplicacion: "El carbón activado es utilizado en el tratamiento de agua anterior a columnas de desmineralización, tratamiento de agua en filtros domésticos, embotelladora, agua potable y de proceso. En la remoción de compuestos orgánicos, remoción de cloro, sabor y olor, tratamiento de efluentes en la fase de pulimento. Para lo tratamiento de glicerina, en la adsorción de oro, carbonato de sodio, éster. También es usado en las granulometrías más grandes (4x10, 6x12, 12X20 y 8x30) para tratamiento de gases en general, recuperación de disolventes, tratamiento del aire, adsorción de alcohol, purificación de CO2, entre otros.",
    presentacion: "Bolsa – Bolsones",
  }

  private _mediosFiltrantes = {
    nombre: "Medios Filtrantes",
    productos: [
      this._antracita,
      this._arena,
      this._carbonActivado,
    ],
    aplicacion: "Se utilizan para sacar impurezas que compones los sólidos sedimentables que se encuentran en las aguas tratadas y se utilizan en función del micronaje de las partículas que se quieren separar",
    openClose: false,
  }

  private _acidoClorhídrico = {
      nombre: "Ácido Clorhídrico",
      aplicacion: "Es utilizado para acidificación para ajuste de pH, baños de decapado, regeneración de resinas",
      presentacion: "Tambor - bombona para descargar tanque - granel. Se presenta en varias concentraciones",
  }
  private _acidoSulfúrico = {
    nombre: "Ácido Sulfúrico",
    aplicacion: "Es utilizado en la industria de los fertilizantes, refinación de petróleo y en la industria minera. Es materia prima para la producción de explosivos, plásticos, fibras, detergentes y pigmentos inorgánicos. También se utiliza en el procesado de metales, para el tratamiento de acero, cobre, uranio, vanadio y metales no ferrosos. Se utiliza en el tratamiento de pieles y cueros. Es un componente en la fabricación de acumuladores (baterías) en la industria automotriz.",
    presentacion: "Líquido a granel",
  }
  private _acidoCitrico = {
    nombre: "Ácido Citríco",
    aplicacion: "Es utilizado en las limpiezas acidas industriales, se utiliza como desincrustante, se utiliza para controlar el pH de los alimentos y es un antioxidante enérgico, se utiliza en la industria farmacéutica, química y petrolera, Se utiliza en detergentes y otros productos de limpieza, para estabilizarlos, otorgarles acidez y reemplazar a los ácidos fuertes",
    presentacion: "Bolsas por 25 Kg",
  }
  private _acidos = {
    nombre: "Ácidos",
    productos: [
      this._acidoCitrico,
      this._acidoClorhídrico,
      this._acidoSulfúrico,
    ],
    aplicacion: "Su función es la de bajar el pH del sistema a tratar. Generalmente se utiliza cuando el pH es alcalino o para lograr llegar al pH adecuado para que se produzca la coagulación",
    openClose: false,
  }
  private _agentesDispersantes = {
    nombre: "Agentes Dispersantes",
    aplicacion: "Se utilizan para eliminar la presencia de depósitos orgánicos e inorgánicos que reducen la velocidad de flujo de los sistemas industriales, provocando costosas paradas y favoreciendo la contaminación microbiológica de los equipos. Nuestra serie de productos específicos nos permite mantener las instalaciones en perfecto estado de conservación y limpieza.",
    presentacion: "Bidón – Tambor - IBC",
  }
  private _alguicidas = {
    nombre: "Alguicidas",
    aplicacion: "Producto utilizado para la eliminar y prevenir la formación de algas y combatir la presencia de bacterias y hongos.",
    presentacion: "Botellas de 1 litro - Bidones de 5 litros y 20 litros – Tambor por 200 litros. Diluir acorde a la recomendación en la hoja técnica",
  }
  private _antiespumante = {
    nombre: "Antiespumantes siliconados y no siliconados",
    aplicacion: "Usos variados en procesos con generación de espuma",
    presentacion: "Bidones de 20 litros - Tambores de 200 litros - Contenedores de 1000 litros",
  }
  private _bacteriasAerobias = {
    nombre: "Bacterias Aerobias",
    aplicacion: "Su aplicación permite a la biomasa de la planta hacer frente a efluentes con concentraciones altas de sustratos tales como aceites, grasas, proteínas, almidones y carbohidratos. Es recomendado para la aplicación en el tratamiento de los efluentes de las siguientes industrias: Aceiteras, Alimenticias, Azucareras, Curtiembres, Saneamiento y Pesqueras",
    presentacion: "Cuñetes por 10 Kg",
  }
  private _bacteriasIndustriales = {
    nombre: "Bacterias Industriales",
    aplicacion: "Recomendado en el tratamiento de los efluentes cloacales y de los siguientes tipos de industrias: Alimenticias, Bebidas, Curtiembres, Pesqueras, Aceiteras y Azucareras entre otras. En el caso de efluentes mixtos o con barros muy jóvenes puede aplicarse en combinación con bacterias alta performance.",
    presentacion: "Bidones por 10 Kg",
  }
  private _bacteriasAltaPerformance = {
    nombre: "Bacterias alta performance",
    aplicacion: "Es utilizado en el tratamiento de efluentes líquidos en la degradación de componentes difíciles en diferentes industrias como ser petroquímicas, curtiembres, farmacéuticas y papeleras. En caso de requerirse el producto puede ser aplicado en combinación con Bacterias Industriales",
    presentacion: "Cuñetes por 10 Kg",
  }
  private _bacteriasConEnzinasParaGrasas = {
    nombre: "Bacterias con enzimas para grasas",
    aplicacion: "Esta bacteria es una mezcla sinérgica de microorganismos del género Bacillus especialmente seleccionados, basándose en su superior actividad enzimática frente a sustratos específicos tales como aceites, grasas, proteínas, almidones y carbohidratos. Las enzimas producidas por las bacterias permiten romper la molécula de grasa generando ácidos grasos y glicerol promoviendo la solubilización de esta. La aplicación del producto continúa su acción desarrollando un biofilm que provee una absorción y digestión de los depósitos de grasa remanente en las cañerías. Bacterias para grasas puede ser utilizado para mantener en condiciones óptimas de operación trampas de grasa, pozos ciegos y cañerías, permitiendo ahorrar en el mantenimiento de los sistemas, reduciendo las molestias de los servicios de limpieza y bombeo de tanques atmosféricos. Con el uso de bacterias para grasa se logra destapar cañerías, restaurar drenajes lentos y eliminar malos olores provenientes de la descomposición orgánica.",
    presentacion: "Baldes plásticos por 10 Kg",
  }

  private _bacterias = {
    nombre: "Bacterias",
    productos: [
      this._bacteriasAerobias,
      this._bacteriasIndustriales,
      this._bacteriasAltaPerformance,
    ],
    aplicacion: "Si bien cada planta o sistema desarrolla una flora y biomasa autóctona que le es propia, ésta requiere de la inserción de una colonia especialmente preparada cuando no se cumplen las expectativas de depuración. \n" +
    "Para ello contamos con una herramienta fundamental para la operación de plantas y sistemas de tratamiento y transformación de efluentes: Los preparados bacterianos. \n" +
    "Una selección de familias y especies bacterianas especialmente cultivadas para la degradación de determinados residuos (Por ejemplo: Grasas, almidón, hidrocarburos, celulosa, etc.) en condiciones tanto aeróbicas como anaeróbicas. ",
    openClose: false,
  }

  private _hidroxidoDeSodio = {
    nombre: "Hidróxido de Sodio",
    aplicacion: "Se utiliza como reactivo, agente regulador de pH, agente regenerador de resinas de intercambio iónico, catalizador, agente de grabado, agente de limpieza, entre otros usos. Se ofrece al 50 % y en diluciones de menor concentración",
    presentacion: "Granel - Tambor",
  } 
  private _calQuimica = {
    nombre: "Cal Química",
    aplicacion: "Se utiliza generalmente para el ajuste de pH elevando la basicidad del medio, en forma de lechada de cal aportando sólidos al efluente que derivaran en una mayor remoción y compactación de estos en el tratamiento fisicoquímico.",
    presentacion: "Bolsa – Bolsón",
  }

  private _neutralizantes = {
    nombre: "Neutralizantes",
    productos: [
      this._hidroxidoDeSodio,
      this._calQuimica,
    ],
    aplicacion: "Son productos que se utilizan para elevar el pH de un sistema a tratar. Generalmente se utiliza cuando el pH es acido para lograr llegar al pH adecuado para que se produzca la coagulación",
    openClose: false,
  }

  private _clarificador = {
    nombre: "Clarificador",
    aplicacion: "Floculante utilizado para el mantenimiento del agua de piscinas. Gracias a su acción, las partículas suspendidas se aglomeran y posteriormente se decantan en el fondo de la piscina para luego ser removidas fácilmente con un limpiafondo. Permite mantener el agua limpia y cristalina.",
    presentacion: "Bidones de 5L y 20 L",
  }
  private _cloruroDeCalcio = {
    nombre: "Cloruro de Calcio",
    aplicacion: "Se utiliza en la industria de manzanas, en la industria de la construcción como acelerador del fraguado, el cloruro de calcio, como refrigerante al tener un punto de cristalización inferior al agua actúa como anticongelante, en el transporte se agrega al agua que se agrega a las llantas, se obtiene peso adicional y se impide el congelamiento de esta en climas fríos. Para control de polvo en carreteras pues retiene la humedad por períodos prolongados no generándose polvo tan rápido disminuyendo así costos de mantenimiento. Se utiliza en la industria química en la producción de sales de calcio. Fuente de calcio en la producción de fertilizantes. Catalizador de reacciones de lixiviación de sulfuros de cobre. En minería en el proceso de lavado de carbón mineral, para la separación de materia mineral extraña por medio de humectación. En el petróleo como aditivo para perforación. En efluentes es un eficaz precipitante para la eliminación de fluoruros a la vez que mejora la eliminación de silicatos por densificación del floc. De la misma forma, para el tratamiento de los desechos aceitosos, encuentra aplicación debido a su capacidad para romper las emulsiones oleosas",
    presentacion: "Líquido: tambor, IBC y granel. Sólido: Bolsa y Bolsón",
  }
  private _cloruroferrico = {
    nombre: "Cloruro Férrico",
    aplicacion: "El Cloruro Férrico se emplea para el tratamiento efluentes líquidos residuales. Su función es la de coagular y acelerar la sedimentación de sólidos en suspensión y absorción de contaminantes disueltos, incluyendo materia orgánica.",
    presentacion: "Bidón por 25 Kg – Tambor por 250 Kg – IBC por 1250 Kg - Cisternas por 4400 Kg – Granel por 28 Ton",
  }
  private _cloruroferrozo = {
    nombre: "Cloruro Ferroso",
    aplicacion: "Reducir el potencial zeta para obtener flocs de gran tamaño en aguas y efluentes industriales. Reductor de metales pesados en efluentes industriales. Con el agregado de polielectrolitos absorbedores de metales pesados, se hace ideal para ocluir y precipitar mercurio, plomo, estaño, níquel, etc. siempre que los mismos se encuentren en solución. ",
    presentacion: "Tambor por 250 Kg – IBC por 1250 Kg",
  }
  private _sulfatoDeAluminio = {
    nombre: "Sulfato de aluminio",
    aplicacion: "Coagulante para agua potable. Coagulante para tratamientos primarios. Tratamiento de agua en pozos de petróleo. Es utilizado en el tratamiento de barros de petróleo. A su vez, sirve para ajuste de pH, la fabricación de sales dobles y la purificación de glicerina. También es un aditivo acelerador de fraguado, es utilizado en el tratamiento de barros de petróleo y como materia prima en la industria del papel. También es utilizado como materia prima en celulosas",
    presentacion: "Sólido al 17% de Óxidos Útiles - Polvo en diferentes granulometrías. Bolsas de 25 Kg / Big Bags de 1000 Kg - Líquido al 7,6% y 8% - Se vende a granel, en tambores de 200 litros y en contenedores de 1000 litros",
  }
  private _policloruroDeAluminio = {
    nombre: "Policloruro de Aluminio",
    aplicacion: "Coagulante para agua potable. Coagulante para tratamientos primarios. Tratamiento de agua en pozos de petróleo",
    presentacion: "Líquido al 17,5% de Óxidos Útiles - Se vende a granel, en tambores de 200 litros y en contenedores de 1000 litros",
  }

  private _coagulantes = {
    nombre: "Coagulantes",
    productos: [
      this._cloruroferrico,
      this._cloruroferrozo,
      this._sulfatoDeAluminio,
      this._policloruroDeAluminio,
    ],
    aplicacion: "Su función principal es desestabilizar, coagular y remover los sólidos coloidales suspendidos en un líquido. Se los utiliza principalmente para remoción de color, turbiedad y como ruptores de emulsión.",
    openClose: false,
  }

  private _controlDeOlores = {
    nombre: "Control de olores",
    aplicacion: "Son productos que inhibe el olor, se trata de un producto biológico que contiene bacterias que inhiben la proliferación de microorganismos responsables de la putrefacción de la materia orgánica, contribuyendo de esta forma a la eliminación de olores ofensivos. es utilizado con excelentes resultados entre otros usos en contenedores de basura, residuos orgánicos, sistemas cloacales, trampas de grasa, barros generados en el tratamiento de efluentes, superficies generadoras de olor, etc.",
    presentacion: "Bidón y Tambor",
  }
  private _hipocloritoDeSodio = {
    nombre: "Hipoclorito de Sodio",
    aplicacion: "Es utilizado como oxidante en el proceso de potabilización de agua. También es usado hogareñamente para limpieza de superficies y como desinfectante en piscinas. Este producto también puede ser utilizado como blanqueador para las fibras textiles. Se utiliza como biocida en torres de enfriamiento",
    presentacion: "Tambor por 250 Kg – IBC por 1250 Kg",
  }  
  private _glutaraldehido = {
    nombre: "Glutaraldehído",
    aplicacion: "Se utiliza para el control de ensuciamiento microbiológico (biofouling) en circuitos de agua, control microbiológico en agua de torres de enfriamiento y circuitos de petróleo, sanitización de superficies",
    presentacion: "Bidón - Tambor - IBC",
  }
  private _tHPS = {
    nombre: "THPS",
    aplicacion: "Se aplica principalmente en sistemas de tratamientos de aguas, en la fabricación de papel, y en operaciones de pozos de petróleo. Donde resulta eficaz para el control de bacterias sulfato reductoras y reductoras de hierro. Es amigable con el medioambiente por su rápida degradación. Se utiliza para disolver depósitos de sulfuros de hierro.",
    presentacion: "Tambor - IBC",
  }

  private _biocidas = {
    nombre: "Biocidas",
    productos: [
      this._hipocloritoDeSodio,
      this._glutaraldehido,
      this._tHPS,
    ],
    aplicacion: "La proliferación de hongos y bacterias actúan sobre las cañerías que conducen el agua, y coadyuvan en la corrosión de los metales. Por este motivo es necesario mantener su concentración en valores controlables. Es necesario que estén dichos microorganismos en valores normales en el agua potable pues pueden dañar al ser humano. Por otro lado, para el agua que van a vertido tienen que estar dentro de determinados valores para no contaminar los ríos y arroyo. El medio para controlar a los microorganismos son los biocidas",
    openClose: false,
  }

  private _inhibidoresDeCorrosion = {
    nombre: "Inhibidores de Corrosión",
    aplicacion: "Se agregan al agua para evitar que el agua corroa a las cañerías por las cuales circulan. Formando en algunos casos un film protector en las cañerías.",
    presentacion: "Bidón – Tambor – IBC - Microencapsulados",
  }
  private _inhibidoresDeIncrustacion = {
    nombre: "Inhibidores de Incrustación",
    aplicacion: "Disponemos también de una gama de antiincrustantes que previene la formación de depósitos en circuitos de refrigeración, calderas de vapor y sistemas de osmosis inversa, mejorando el rendimiento industrial. En los circuitos de refrigeración conseguimos evitar la presencia de incrustaciones mejorando el intercambio térmico y evitando la proliferación bacteriana. En calderas de vapor logramos una reducción de los elevados costes de mantenimiento, garantizando el correcto estado del equipo. Y en los sistemas de osmosis inversa reducimos fenómenos de colmatación de membranas, evitando paradas y mejorando el estado de conservación de membranas. En la industria del petróleo se utilizan para evitar la presencia de incrustaciones en las cañerías que transportan aguas en los diferentes circuitos",
    presentacion: "Bidón – Tambor – IBC - Microencapsulado",
  }
  private _inhibidoresDeSulfuro = {
    nombre: "Inhibidores de Súlfuro",
    aplicacion: "Producto formulado con derivados amínicos y polímericos con acción eliminadora de sulfuros o ácido sulfhídrico producto de la reacción del ácido con depósitos que contienen sulfuros y dióxido de carbono para las operaciones de crudo y gas",
    presentacion: "Tambor – IBC - Microencapsulado",
  }
  private _inhibidoresDeParafinas = {
    nombre: "Inhibidores de Parafinas",
    aplicacion: "Producto formulado para controlar, solubilizar y/o remover parafinas y asfáltenos. Además, proporciona una excelente preparación de la roca para trabajos ácidos y de fractura mediante la eliminación de hidrocarburos pesados de la superficie de la formación",
    presentacion: "Tambor – IBC - Microencapsulado",
  }
  private _productosBiologicosParaLimpieza = {
    nombre: "Productos biologicos para limpieza",
    aplicacion: "Es un degradante altamente efectivo que descompone y separa los compuestos orgánicos de los hidrocarburos. Está compuesto de terpenos de naranjas, cultivos bacterianos y otros surfactantes que dirigen su acción a la degradación de los derivados del petróleo y otros tipos de aceites como el aceite vegetal, de animal, mineral y de palma. Se utiliza para biorremediación",
    presentacion: "Tambor de 200 litros",
  }
  private _poliaminasCationicasCuaternarias = {
    nombre: "Poliaminas catiónicas cuaternarias",
    aplicacion: "Operaciones de flotación por aire disuelto, separación de agua aceitosa, control de sólidos de perforación, reducción de uso de sales orgánicas en la coagulación. Coagulación en agua potable y en tratamientos primarios",
    presentacion: "Bidón - Tambor - IBC",
  }
  private _poliacrilamidasCationicas = {
    nombre: "Poliacrilamidas catiónicas",
    aplicacion: "Operaciones de flotación por aire disuelto, deshidratación mecánica, control de sólidos de perforación, filtración, generación de propiedades espesantes de lodos, mejoradores de reología. Como coadyuvantes de coagulación en agua potable y tratamiento primario en efluentes",
    presentacion: "Bolsas de 25 Kg. en pallets – IBC - Tambor – Bidón",
  }
  private _poliacrilamidasAnionicas = {
    nombre: "Poliacrilamidas aniónicas",
    aplicacion: "Deshidratación mecánica, precipitación, operaciones de separación con aire disuelto. Como coadyuvantes de coagulación en agua potable y tratamiento primario en efluentes",
    presentacion: "Bolsas de 25 Kg. en pallets – IBC - Tambor – Bidón",
  }
  private _poliacrilamidasNoIonicas = {
    nombre: "Poliacrilamidas no iónicas",
    aplicacion: "Se utiliza para la deshidratación de lodos en pozos en yacimientos petrolíferos. Como coadyuvantes de coagulación en agua potable y tratamiento primario en efluentes",
    presentacion: "Bolsas de 25 Kg. en pallets – IBC - Tambor – Bidón",
  }

  private _floculantes = {
    nombre: "Floculantes",
    productos: [
      this._poliacrilamidasCationicas,
      this._poliacrilamidasAnionicas,
      this._poliacrilamidasNoIonicas,
      this._poliaminasCationicasCuaternarias,
    ],
    aplicacion: "Son productos que tienen la particularidad de aumentar el tamaño de los flocs producidos. Ello se debe a su elevado peso molecular y tienen afinidad a los mismos en función de la carga",
    openClose: false,
  }

  private _resinasAnionicas = {
    nombre: "Resinas Aniónicas",
    aplicacion: "Es una resina aniónica fuerte, uniforme y geliforme. Se utiliza para desmineralización de agua",
    presentacion: "Bolsas",
  }
  private _resinasCationicas = {
    nombre: "Resinas Catiónicas",
    aplicacion: "Utilizamos resinas catiónicas fuertes. Se utiliza para ablandamiento de agua y también para desmineralización",
    presentacion: "Bolsas",
  }

  public mineria = {
      nombre: "Mineria",
      grupos: [
        this._agentesDispersantes,
        this._antiespumante,
        this._coagulantes,
        this._biocidas,
        this._inhibidoresDeCorrosion,
        this._inhibidoresDeIncrustacion,
        this._floculantes,
      ]
  };

  public osmosisInversa = {
    nombre: "Osmosis Inversa y Resinas de Intercambio Iónico",
    grupos: [
      this._acidos,
      this._agentesDispersantes,
      this._inhibidoresDeIncrustacion,
      this._biocidas,
      this._neutralizantes,
      this._resinasAnionicas,
      this._resinasCationicas,
    ]
};

  public petroleoPetroquimica = {
    nombre: "Petróleo y Petroquímica",
    grupos: [
      this._acidos,
      this._glutaraldehido,
      this._biocidas,
      this._cloruroDeCalcio,
      this._inhibidoresDeParafinas,
      this._inhibidoresDeCorrosion,
      this._inhibidoresDeIncrustacion,
      this._inhibidoresDeSulfuro,
      this._neutralizantes,
      this._productosBiologicosParaLimpieza,
    ]
};

public piscinas = {
  nombre: "Piscinas",
  grupos: [
    this._alguicidas,
    this._clarificador,
    this._biocidas,
  ]
};

public potabilizacion = {
  nombre: "Potabilización",
  grupos: [
    this._mediosFiltrantes,
    this._acidos,
    this._coagulantes,
    this._biocidas,
    this._floculantes,
    this._calQuimica,
    this._hidroxidoDeSodio,
  ]
};

public torresDeEnfrimiento = {
  nombre: "Torres de Enfriamiento",
  descripcion: "Nuestra gama de productos químicos incluye combinaciones de productos químicos orgánicos e inorgánicos, cuya formulación responde a las necesidades específicas de nuestros clientes para el agua de refrigeración y proceso. \n\nProgramas de tratamiento para sistemas de enfriamiento abiertos, semiabiertos y cerrados. \n\nLos objetivos prácticos del tratamiento interno de agua de enfriamiento son:",
  lista: [
    "•	Mantener todas las superficies de intercambiadores y demás superficies de las fases agua en una condición estructuralmente firme y limpia, adecuadamente protegidas contra los problemas operacionales y productivos, asociados con la deposición, corrosión, incrustaciones, crecimiento microbiano y la contaminación.",
    "•	Promover condiciones en la fase agua que permitan un eficiente intercambio de calor.",
    "•	Prestar servicios de apoyo técnico y de otra índole para agregar valor a las operaciones de enfriamiento y procesos de producción.",
    "•	Crear una conciencia de los objetivos del programa y su importancia, y establecer la confianza del cliente en las estrategias operativas del programa a través de la capacitación, la cooperación mutua, la comunicación y revisión por la dirección",
    "•	Permitir que la aplicación sea factible y controlable con un mínimo de mano de obra y dinero",
    "•	Ser rentable teniendo en cuenta el capital total del sistema de agua y los costos de operación",
    "•	Minimizar los problemas en cuanto a salud, seguridad y medio ambiente."
  ]
};

public tratamientoDeEfluentes = {
  nombre: "Tratamiento de Efluentes",
  grupos: [
    this._acidos,
    this._bacterias,
    this._bacteriasConEnzinasParaGrasas,
    this._coagulantes,
    this._floculantes,
    this._hidroxidoDeSodio,
    this._calQuimica,
    this._controlDeOlores,
  ]
};

public tratamientoDeGeneracionDeVaporCaldera = {
  nombre: "Tratamiento de generación de vapor – caldera",
  descripcion: "Maximización de los ciclos de concentración mientras se controlan las incrustaciones y la corrosión, reduciendo los costos operativos, ahorro de combustible, agua y mantenimiento.\n\nProgramas de tratamiento para sistemas de generación de vapor y calefacción\n\nEn casi todas las áreas industriales, se necesita de vapor para diferentes objetivos, por ejemplo, vapor para los procesos industriales, con fines de calefacción o la generación de electricidad. Para llegar a la mejor eficiencia del sistema de caldera, un tratamiento óptimo de la caldera es esencial. Las alteraciones en las calderas producidas por depósitos, incrustaciones, corrosión, sobrecalentamiento local o arrastres en el vapor, reducen la seguridad operacional y podrían dar lugar a enormes daños económicos. EG ofrece tecnologías innovadoras para evitar incrustaciones y corrosión en todo el sistema de caldera – tanque de agua de alimentación, calentador de agua, vapor y sistema de condensado.\n\n¿Por qué elegir nuestros tratamientos?",
  lista: [
    "•	Para evitar daños materiales.",
    "•	Para un intercambio de calor óptimo, sin sobrecalentamiento localizado.",
    "•	Para reducir al mínimo las potenciales averías.",
    "•	Para evitar el sobrecalentamiento y, en el caso de arrastre, el riesgo de depósitos sobre las aspas de la turbina.",
    "•	Para una larga vida útil de sus sistemas.",
    "•	Independientemente de la calidad de la preparación del agua que ingresa a su caldera, se necesita un programa de tratamiento interno para que su caldera funcione a su máximo rendimiento. Dentro de la caldera pueden ocurrir cuatro grandes problemas: incrustaciones, sedimentación, corrosión y residuos.",
  ]
};

categorias = [
  this.mineria,
  this.osmosisInversa,
  this.petroleoPetroquimica,
  this.piscinas,
  this.potabilizacion,
  this.torresDeEnfrimiento,
  this.tratamientoDeGeneracionDeVaporCaldera
];

  mostrarProductos(categoria: any) {
    this.categoriaSeleccionada = categoria;
    this.categoryChange = this.categoryChange === true ? false : true;
    this.toggleNav();
  }

  toggleNav() {
    this.hideNav = this.hideNav === true ? false : true;
    setTimeout(this.modifyAsideHeight, 50);
  }
  
  openClose(any: any) {
    any.openClose = any.openClose === true ? false : true;
    setTimeout(this.modifyAsideHeight, 50);
  }

  modifyAsideHeight() {
    let height = document.querySelector<HTMLElement>('.contenedor').offsetHeight;
    document.querySelector('aside').style.height = height + "px";
  }
}
