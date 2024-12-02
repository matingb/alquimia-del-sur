import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bio-cosmetica',
  templateUrl: './bio-cosmetica.component.html',
  styleUrls: ['./bio-cosmetica.component.scss'],
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
export class BioCosmeticaComponent {

  public categoryChange = false;
  public categoriaSeleccionada = null;
  public hideNav = true;

  gruposVisibles: { [key: string]: boolean } = {
    hidrolatos: false,
    aceites: false,
  };

  private queSonLosHidrolatos: BioCosmetico = {
    nombre: "¿Qué son los Hidrolatos?",
    descripcion: "Los hidrolatos son productos derivados del proceso de destilación de plantas frescas aromáticas, como flores, hojas, tallos o raíces. Durante la destilación, el vapor de agua atraviesa la planta y arrastra consigo los compuestos aromáticos y otras sustancias solubles en agua. Luego, este vapor se enfría y se condensa, produciendo dos productos: el aceite esencial y el hidrolato, también conocido como agua floral o agua destilada. \n\nLas plantas tienen propiedades medicinales naturales, que, si conocemos y elegimos, nos contribuyen a la salud física, mental y emocional. La destilación mantiene las propiedades medicinales y curativas de cada planta. \n\nLos hidrolatos pueden tener una amplia gama de beneficios para la piel y la salud, como propiedades calmantes, tonificantes, hidratantes, antiinflamatorias, antisépticas y refrescantes. Son más suaves que los aceites esenciales y pueden ser utilizados directamente sobre la piel sin dilución, lo que los hace ideales para personas con piel sensible o niños. Es importante elegir hidrolatos de alta calidad y almacenarlos correctamente para preservar sus propiedades. \n\nLos hidrolatos contienen una pequeña cantidad de aceites esenciales disueltos en agua, así como compuestos solubles en agua de la planta, lo que les confiere propiedades terapéuticas y aromáticas. Se utilizan en aromaterapia, cuidado de la piel y cosmética natural, así como en la cocina y la elaboración de perfumes. \n\nNuestros aceites e hidrolatos surgen de plantas cultivadas, cosechadas y destiladas en la localidad de Epuyén, de la Provincia de Chubut, Argentina dónde por ley se prohíbe el uso de agroquímicos y pesticidas. \n\nAlquimia del Sur y Bosque, gracias articulan esta iniciativa para brindar en estas esencias naturales productos que favorecen la salud corporal, mental y el bienestar emocional."
  }

  private hidrolatoDeLavanda: BioCosmetico = {
    nombre: "Hidrolato de Lavanda (Lavandula angustifolia)",
    descripcion: "El nombre específico (angustifolia) hace referencia a las hojas estrechas de esta especie. La lavanda es una planta de la familia de las lamiáceas. El nombre científico de la lavanda, lavandulae, proviene del verbo latino lavare. \n\nGracias a sus propiedades antiinflamatorias, otro de sus principales usos es como calmante del dolor. Su aplicación es externa. El hidrolato y aceite esencial de Lavanda se extrae tras la destilación de las flores y se utilizan para elaborar productos de cosmética natural. \n\nEl hidrolato de lavanda tiene propiedades antisépticas, calmantes y antiinflamatorias. Es especial para tratar alteraciones de la piel como heridas pequeñas, quemaduras, irritaciones, psoriasis, dermatitis, acné o caspa. Su aroma relajante ayuda a reducir alteraciones nerviosas, como el estrés, el insomnio y la ansiedad. \n\nLa Lavanda le aporta a la piel calma, purificación, en las pieles que sufren desequilibrio, nerviosismo, impaciencia ayuda a la desinflamación y contribuye en la piel frágil. \n • Contiene propiedades antisépticas y antiinflamatorias para calmar y equilibrar la piel. \n • Efectos calmantes que reducen los dolores de cabeza y migrañas, tortícolis, reumáticos, de lumbares, de pies y piernas. \n • Restaura y fortalece el cabello seco o dañado. \n • Equilibra alteraciones del cuero cabelludo como caspa o caída del cabello. \n • Como tónico facial, Hidrata y tonifica la piel, sirve para tratar la piel grasa y el acné. \n • Ayuda a disminuir la tensión arterial, reduce los mareos en los viajes y facilita las digestiones en estados de alteraciones por nerviosismo. \n • Como descongestivo en los resfríos y de la gripe. \n • Para la flatulencia estomacal e intestinal excesiva colocar sobre el vientre. \n • Disminuye el asma y los dolores de garganta. \n • Calmante de picaduras de insectos. \n • Para los ojos inflamados: empapar dos algodones y colocar sobre los párpados cerrados por varios minutos. \n • Aliada del hogar para mantener alejadas a las polillas. \n • Su aroma relaja la mente, disminuye el estrés, el insomnio, el nerviosismo, la fatiga, la ansiedad y la depresión.",
    presentacion: "Botella ámbar (Pet) 1000 ml. \nBotella ámbar vidrio 250 ml (con tapa, difusor ambiental con varillas natural o negras, pulverizador tipo spray)",
  }

  private hidrolatoDeMenta: BioCosmetico = {
    nombre: "Hidrolato de Menta (Mentha piperita L.)",
    descripcion: "Los hidrolatos se generan a partir de la destilación al vapor de las hojas de menta, lo cual permite que mantengan todas las propiedades de aroma y sabor originales en una concentración más baja y sean más fáciles de usar que los aceites esenciales.\n\nEl hidrolato de menta tiene propiedades antibacterianas, antisépticas, purificantes, tonificantes y refrescantes gracias a su contenido en mentol natural. \n\nPor su poder relajante ayuda a aliviar dolores musculares y articulares, como las contracturas, también sirve para calmar los nervios y la ansiedad, así como para facilitar el sueño. Por vía tópica se ha demostrado su acción analgésica para el tratamiento de dolores de cabeza y cefaleas. \n\nTambién para el tratamiento de resfriados por su acción antiséptica y sudorífica, en forma de vahos o aplicada sobre la piel cerca de las fosas nasales. En caso de fatiga repentina, rociar la cara evitando los ojos y las mucosas con hidrolato de Menta piperita. Esto aumentará tu concentración y atención. \n\nEs adecuado para pieles sensibles y puede usarse con frecuencia sin irritar la piel. Es astringente, ayuda a cerrar los poros y revitaliza las pieles apagadas. Se puede pulverizar el producto sin diluir en agua y dar suaves toques por todo el rostro para tratar problemas como el acné o las espinillas, entre otras formas de aprovecharlo. \n\nTambién se aplica vía tópica para el tratamiento de dolores musculares y articulares. \n\nEn Picaduras de picazón, alergias: Realizar una compresa de hidrolato de menta piperita y aplicar en el sitio de la lesión. Se Obtiene un alivio rápido. \n\nAñade hidrolato de menta piperita con agua fría. El efecto de enfriamiento puede ser eficaz en caso de fiebre alta. Colocar un paño empapado frío en ambas pantorrillas. \n\nEl hidrolato de menta piperita se puede utilizar como una loción después de la ducha o después del afeitado.",
    presentacion: "Botella de plástico ámbar",
    cantidad: "1000 ml",
  }

  private hidrolatoDeTanaceto: BioCosmetico = {
    nombre: "Hidrolato de Tanaceto (Tanacetum Vulgare)",
    descripcion: "El uso medicinal de la tanaceto es antiguo, lo demuestra una orden emitida por Carlomagno para que cultiven en sus campos hierbas y condimentos, incluyendo a Tanacetum vulgare que es como se la conoce actualmente.\n\nSe utilizaba el tanacetum vulgare para la faena de animales, ya que ahuyentaba losinsectos y las moscas. En la actualidad se utiliza como un eficaz repelente, ya queayuda a depurar el ambiente de insectos, con un aroma agradable. Es una opción natural para evitar insecticidas y productos químicos industriales.\n\nSu aroma es una mezcla entre hierbas y alcanfor. La fragancia es ligeramente dulce. Esta sustancia tiene un efecto calmante cuando se inhala. De este modo, promueve la relajación y ayuda a reducir los estados de estrés, además se utiliza inhalando su perfume momentos de migrañas y neuralgias.\nLa planta pertenece a la familia de la manzanilla, contiene camazuleno, un compuesto con propiedades calmantes y antioxidantes. La fito cosmética utiliza esta planta para reducir las irritaciones, pues contiene guaiol y guaiazuleno.\n\nSe puede utilizar cómo tónico facial ya que contiene varios antioxidantes, por lo que podría ayudar a atenuar las líneas de expresión y las arrugas propias del envejecimiento.\n\nEn su aplicación externa se aplica su aceite para combatir el reumatismo. En Irlanda del siglo XIX, se sugería bañarse en una solución de tanaceto y sal como una cura para el dolor articular. Un masaje con hidrolato de tanaceto podría ser eficaz para reducir el dolor causado por las neuralgias, la artritis o la tendinitis.\n\nSe puede masajear la zona del vientre en los trastornos menstruales en general.\n\nEntre los beneficios de la planta de Tanacetum vulgare parece tener propiedades anti inflamatorias, antialérgicas, (combate el picor), flebotónicas (tonifica los vasossanguíneos), sedantes y calmantes.",
    presentacion: "Botella de plástico ámbar",
    cantidad: "1000 ml",
  }

  private hidrolatoDeEnebro: BioCosmetico = {
    nombre: "Hidrolato de Enebro",
    descripcion: "El enebro simboliza la fuerza vital y en varias civilizaciones se usó como purificante tantopara el cuerpo como para el ambiente (se dice que Hipócrates erradicó la peste deAtenas gracias al Enebro).\n\nEl hidrolato de enebro tiene un aroma exquisito, además de ser en la aromaterapia el más indicado para purificar el cuerpo y el alma ya que, proporciona ligereza y frescura y llenarse de energía.\n\nEl enebro es considerado como una planta protectora, se cuelga en las puertas para alejar las fuerzas malignas y se utiliza para purificar el ambiente, limpiar las energías negativas, protege de las enfermedades.\n\nEl enebro y su flor fomentan la positividad, el optimismo y la alegría. Alinea todas las energías del cuerpo, ayuda a superar cualquier tipo de infelicidad y fatiga en el cuerpo que se pueda sentir.\n\nEl enebro se considera un signo de superación, crecimiento y autodescubrimiento. Promueve la voluntad de aprender constantemente y mejorar todos los aspectos de la vida, ya sean físicos, emocionales o sociales.\n• Es un antiséptico general.\n• Es diurético, estimula la función renal y su limpieza por lo que ayuda a sacar al exterior toxinas como el ácido úrico que se acumula en todo tipo dereumatismos (de tejidos blandos o duros, artritis, artrosis, poli artritis, lumbago) y reduce la acidez en el cuerpo.\n• Ayuda a eliminar celulitis, edemas y retención de líquidos en piernas y cuerpo y en los párpados. Apoya las dietas de adelgazamiento.\n• Para la piel aplícalo en el acné como tónico purificante o formando parte de mascarillas. Y aplicado sobre la piel ayuda a las irritaciones y la psoriasis.\n• Dolor muscular o menstrual. Por sus efectos anti-inflamatorios y por su propiedad de drenar líquidos ayuda en cualquier proceso inflamatorio ya que disminuye el dolor y favorece el estancamiento.\n• Cuando se tiene un objetivo que cumplir y se tiene la sensación que los obstáculos son insalvables, ayuda a salir de la impresión de estancamiento.\n• Proporciona energía vital y ayuda a salir de la impresión de estar absorbido porlos problemas de los demás.\n• Proporciona un estado de alegría y constancia, por lo tanto puede proporcionar una sensación de alivio a las personas que sufren estrés, ansiedad e incluso depresión. Aporta al cuerpo un tiempo de paz, induce al descanso y combate elinsomnio y anima a seguir adelante y a cambiar el enfoque del pasado al presente.\n\nSu uso colabora para resolver conflictos, mitigar rencores, promover una comunicación honesta y eficaz, entablar relaciones más estrechas y duraderas.",
    presentacion: "Botella ámbar (pet) 1000 ml.\nBotella de vidrio ámbar 250 ml. (con tapa, atomizador y en difusor ambiental)",
  }

  private hidrolatoDeOregano: BioCosmetico = {
    nombre: "Hidrolato de Orégano",
    descripcion: "El orégano es una hierba aromática, originaria de la región mediterránea que en la antigüedad era muy popular tanto por sus virtudes gastronómicas como curativas. Porque, así como hoy es casi imposible imaginar una pizza sin la mozzarella salpicada de orégano seco, hubo un tiempo donde sus hojas frescas eran un ítem del botiquín médico. Y el motivo es la gran cantidad de propiedad que tienen. Entro otros elementos, el orégano contiene fibra, hierro, magnesio, folato, calcio, zinc, potasio y ácidos grasos omega, además de vitaminas A, C, E, B6 y K. \n\n<strong>Propiedades del Hidrolato de Orégano.</strong> \n1. Antimicrobianas: El hidrolato de orégano contiene compuestos antimicrobianos que pueden ayudar a combatir las bacterias y hongos que causan el acné y otras infecciones cutáneas. \n2. Purificantes: Sus propiedades purificantes ayudan a limpiar y desintoxicar la piel, dejándola fresca y revitalizada. \n3. Estimulantes: Se cree que el aroma del orégano tiene propiedades estimulantes que pueden ayudar a aumentar la energía y la vitalidad. \n\n<strong>Beneficios del hidrolato de Orégano.</strong> \n1. Cuidado de la piel por sus propiedades antimicrobianas y purificantes para la piel. \n2. El orégano contiene sustancias químicas que pueden ayudar a reducir la tos ya que se utiliza contra algunas bacterias y virus. \n3. Antiinflamatorio, antibacteriano y germicida. El orégano tiene propiedades muy nutritivas, y también es especialmente eficaz para tratar la celulitis. \n4. Cuidado capilar: Se puede utilizar como enjuague capilar para fortalecer el cabello, estimular el cuero cabelludo y combatir problemas del cuero cabelludo como la caspa. Estimula el crecimiento: Al ser rico en vitaminas y minerales esenciales, como el hierro y el zinc, el orégano aumenta la circulación sanguínea en el cuero cabelludo, lo que ayuda a tener un cabello XL. Aporta brillo natural: Además agrega sedosidad a tu cabello. \n5. Los enjuagues bucales con orégano anticipa el desarrollo inicial de las caries dentales.  \n6. Aromaterapia: El aroma herbal y ligeramente picante del hidrolato de orégano lo convierte en un agente en aromaterapia para promover la energía y la vitalidad. Se puede rociar en el aire o aplicar sobre la piel como perfume natural.",
    presentacion: "Botella ámbar (pet) 1000 ml.\nBotella de vidrio ámbar 250 ml. (con tapa, difusor ambiental con varillas natural o negras, pulverizador tipo spray)",
  }

  private hidrolatoDePino: BioCosmetico = {
    nombre: "Hidrolato de Pino",
    descripcion: "El pino, por ser un árbol siempre verde, es un símbolo de inmortalidad y eternidad. Además, debido a las agujas unidas en pares e injertadas en ramitas cortas, simboliza la felicidad conyugal y la fertilidad. \nPrincipalmente se usa del pino las yemas, el aceite esencial es utilizado por sus propiedades balsámicas, expectorantes y antisépticas. Es un fuerte diurético y astringente. Ayuda a controlar enfermedades respiratorias como resfriado, bronquitis y tos. También se utiliza de manera externa para detener sangrados, además de ser perfecto como antipirético, ayudando a controlar la fiebre. \nLo más hermoso que conocemos sobre el Pino, es la tradición de su decoración en el tiempo de la navidad con gran variedad de adornos y se unen luces de brillantes colores, como un símbolo de alegría y unión. \n\n<strong>PARA EL CUERPO FISICO</strong> \n• Ayuda al cuerpo a regenerar la Vitamina C. \n• Previene la formación de cataratas en el cristalino del ojo. \n• Ayuda a reducir el colesterol malo, que obstruye y bloquea las arterias, mientras que eleva el colesterol bueno (HDL). Mejora la salud del corazón y el control de la tensión sanguínea. \n• Ayuda a reducir la inflamación de las venas varicosas. \n• Protege para evitar las alergias y la enfermedad pulmonar. \n• Reduce la inflamación de las articulaciones debido a la artritis. \n• Reduce los trastornos menstruales. \n• Reduce la Híper pigmentación de la piel. \n• Mejora el funcionamiento del sistema inmunológico \n• Ayuda a curar las heridas y reducir los hematomas en la piel. \n• Por su poder anti inflamatorio contribuye a los golpes, dolores articulares y reuma. \n• Ofrece unos beneficios anti edad debido a su protección frente a los radicales libres que producen beneficios en el colágeno de la piel y la elastina. \n\n<strong>PARA LAS EMOCIONES</strong> \n• Mejora el funcionamiento de la memoria.  \n• Puede ayudar a mejorar la fertilidad, al mejorar la calidad del esperma   \n• Parece que es útil en el trastorno por déficit de atención con hiperactividad (THDA). \n• Su aroma ayuda a mantener buenas relaciones y conversaciones propicia el espacio de mostrarse en libertad. \nLas aplicaciones y usos son a título indicativo, no representan en modo alguno una prescripción médica. No se aceptará ninguna responsabilidad por su uso para fines terapéuticos, cosméticos.",
    presentacion: "Botella ámbar (pet) 1000 ml.\nBotella de vidrio ámbar 250 ml. (con tapa, difusor ambiental con varillas natural o negras, pulverizador tipo spray)",
  }

  private aceiteDeLavanda: BioCosmetico = {
    nombre: "Aceite Esencial de Lavanda",
    descripcion: "<b>METODO DE EXTRACCIÓN</b>\nSe obtiene por destilación a vapor de las espigas florales.\n\n<b>DESCRIPCIÓN</b>\n Su aroma es floral y herbáceo, con sub‐tonos balsámicos y leñosos. Combina bien con la mayoría de los aceites, ejemplo de eucalipto, romero, citronella, etc.\nÍndice de Refracción: 1,460 a 1,470\nDensidad: 0,885 a 0,905 g/cm3\n\n<b>APLICACIONES</b>\nSe puede usar tópicamente o por inhalación. Hay muchas formas de utilizarlo, en forma líquida, con ungüentos, spray, lociones, cremas, baños, difusores. Su aroma ayuda a mitigar el estrés, la ansiedad, el insomnio.\n\n <b>USOS</b>\n Se usa en quemaduras, inflamación, curación de heridas, cortes, eccema, dermatitis, combate el acné, en pieles grasas atenúa la grasitud, limpiando los poros; jaquecas, gripe, insomnio, migrañas, infecciones de la piel, bacterias, llagas, úlceras, acné, forúnculos, asma, reumatismo, artritis, lavado de ropa, repelente de insectos. Tiene propiedades calmantes, actúa como tranquilizante en tensiones nerviosas, histeria, concentración, ansiedad.\nPara masajes relajantes, poner dos gotas de esencia de lavanda en aceite vegetal, masajear manos, cuello y pies.\n\n<b>ACCIONES TERAPÉUTICAS</b>\nAnalgésico, antibacteriano, antidepresivo, antiespasmódico, antiinflamatorio, antimicrobiano, antiséptico, antiviral, insecticida, desodorante, sedante.",
    presentacion: "Envasado en frasco de vidrio ámbar tipo gotero de 10 y 20 ml.",
  }

  private aceiteDeCalendula: BioCosmetico = {
    nombre: "Aceite Esencial de Caléndula",
    descripcion: "<b>METODO DE EXTRACCIÓN</b>\nPor destilación a vapor de las flores.\n\n<b>DESCRIPCIÓN</b>\nEl aceite esencial de caléndula, conocido por sus propiedades curativas y beneficios para la piel, es un producto natural extraído de las flores de caléndula (Caléndula). Este aceite se ha utilizado durante siglos en la medicina tradicional y en el cuidado de la piel por sus propiedades antiinflamatorias, antimicrobianas y cicatrizantes.\nÍndice de Refracción: 1,475 a 1,485\nDensidad: 0,89 a 0,915 g/cm3\n\n<b>USOS</b>\nPropiedades Antiinflamatorias:\nAlivia la inflamación y el enrojecimiento de la piel.\nIdeal para tratar afecciones cutáneas como dermatitis y eczema.\nCicatrización y Regeneración de la Piel:\nPromueve la curación de heridas, cortes y quemaduras.\nAyuda a reducir la aparición de cicatrices.\nPropiedades Antimicrobianas:\nCombate infecciones bacterianas y fúngicas.\nÚtil en el tratamiento del acné y otras infecciones cutáneas.\nHidratación y Nutrición de la Piel:\nHidrata profundamente la piel seca y agrietada.\nRico en antioxidantes que nutren y protegen la piel.\n\n<b>APLICACIONES</b>\nCuidado de la Piel:\nAñadir unas gotas al baño para una piel suave y nutrida.\nMezclar con una crema hidratante para potenciar sus efectos relajantes.\nMasajes:\nUtilizar como aceite de masaje para aliviar la tensión muscular y mejorar la circulación.\nTratamiento de Heridas y Quemaduras:\nAplicar directamente sobre la zona afectada para acelerar la curación.\nComo aromaterapia, usar en difusores, para crear un ambiente relajante y aliviar el estrés.\n\n<b>FORMAS DE USO:</b>\nAplicación Tópica:\nDiluir unas gotas en un aceite portador (como el aceite de almendra o jojoba) antes de aplicar sobre la piel.\nBaños Relajantes:\nAñadir 5‐10 gotas al agua del baño y mezclar bien.\nDifusión:\nAñadir 3‐5 gotas a un difusor de aceites esenciales.\n\n<b>PRECAUCIONES:</b>\nUso Externo:\nNo ingerir. Evitar el contacto con los ojos y las mucosas.\nRealizar una prueba de sensibilidad antes de usar para evitar reacciones alérgicas.\nEmbarazo y Lactancia:\nConsultar con un médico antes de usar durante el embarazo o la lactancia.\nAlmacenamiento:\nGuardar en un lugar fresco y seco, lejos de la luz directa del sol.",
    presentacion: "Envase de vidrio ámbar tipo gotero de 10 y 20 ml.",
  }

  private aceiteDeCilantro: BioCosmetico = {
    nombre: "Aceite Esencial de Cilantro",
    descripcion: "<b>METODO DE EXTRACCIÓN:</b>\nPor destilación a vapor de las ramitas y las agujas.\n\n<b>DESCRIPCIÓN:</b>\nTiene aroma dulce, especiado y herbáceo\nÍndice de Refracción: 1,469 a 1,479\nDensidad: 0,890 a 0,910 g/cm3\n\n<b>PRECAUCIONES:</b>\nNinguna.\n\n<b>USOS:</b>\nVarices, hemorroides, menstruación dolorosa, tos, bronquitis, tos ferina, acné, piel grasa, sudoración excesiva, asma, sinusitis, alergias estacionales, dolores musculares, cura de heridas, fiebre, repelente de insectos, congestión del pecho, resfrío, gripe, desinfectante.\n\n<b>APLICACIONES:</b>\nUsar con aceite de masajes o ungüento, en dolores musculares, menstruales, tos, congestión, varices. Se puede agregar a un spray y usar como repelente de insectos en el patio. También se puede mezclar con un tónico o hidratante facial para tonificar la piel y combatir el acné.\n Para las alergias estacionales, sinusitis, congestión, pulverizar con aceite esencial de ciprés las habitaciones, mezclando 10 gotas de aceite esencial de ciprés y dos cucharadas de aceite portador y aplicar en el pecho, para ayudar al sistema respiratorio.\n\n<b>ACCIONES TERAPÉUTICAS:</b>\nACCIONES TERAPÉUTICAS: Analgésico, antibacteriano, antiespasmódico, antiinflamatorio, antifebril, antiséptico, astringente, descongestionante, desodorante, diurético, insecticida, sedante.",
    presentacion: "Envase de vidrio color ámbar tipo gotero de 10 y 20 ml.",
  }

  private aceiteDeCipres: BioCosmetico = {
    nombre: "Aceite Esencial de Ciprés",
    descripcion: "<b>METODO DE EXTRACCIÓN:</b>\nSe trituran y destilan a vapor, las semillas del cilantro.\n\n<b>DESCRIPCIÓN:</b>\nTiene aroma dulce, especiado y herbáceo\nÍndice de Refracción: 1,473 a 1,483\nDensidad: 0,863 a 0,879 g/ cm3\n\n<b>PRECAUCIONES:</b>\nNinguna.\n\n<b>USOS:</b>\nEstrés, ansiedad, fatiga mental, flatulencia, indigestión, reumatismo, dolor muscular, afrodisíaco, depresión, migrañas, para heridas y cortes de piel, quemaduras, eczemas, dermatitis, fungicida, ayuda al sistema inmunitario, estimulación del apetito, fortalece el cabello, cura el pie de atleta, tiña, náuseas, vómitos.\n\n<b>APLICACIONES:</b>\nSe puede mezclar con ungüentos, para limpiar y tratar heridas, en inflamación de la piel, combate el pie de atleta, la tiña y dolores menstruales. Se puede diluir en aceite de masaje y aplicar la mezcla sobre el abdomen para ayudar a la digestión y aliviar los gases. Sirve para el acné, limpia y suaviza la piel. También se puede usar en un difusor, para levantar el ánimo.\n\n<b>ACCIONES TERAPÉUTICAS:</b>\nAfrodisíaco, analgésico, antibacteriano, antidepresivo, antiespasmódico, ayuda al sistema inmunitario, carminativo, sedante.",
    presentacion: "Envase de vidrio color ámbar tipo gotero de 10 y 20 ml.",
  }

  private aceiteDeCitronella: BioCosmetico = {
    nombre: "Aceite Esencial de Citronella",
    descripcion: "<b>METODO DE EXTRACCIÓN:</b>\nSe obtiene de la destilación a vapor de las hojas frescas de la planta.\n\n<b>DESCRIPCIÓN:</b>\nEste aceite esencial desprende un fresco aroma cítrico y herbario.\nÍndice de Refracción: 1,479 a 1,490\nDensidad: 0,890 a 0,910 g/cm3\n\n<b>PRECAUCIONES:</b>\nNo ingerir el aceite esencial, evitar el contacto con los ojos y mucosas.\n\n<b>USOS:</b>\nAlivia los dolores reumáticos. artritis, dolores musculares, neuralgia, tiene un gran poder antiinflamatorio. Es un repelente natural contra mosquitos y otros insectos. También se usa en cuidados de la piel, con acné, grasitud, dermatitis, eccema, sudoración excesiva, olor corporal. Ayuda en resfríos y gripes. Limpieza y tratamiento de heridas, hogos. Ayuda al sistema inmunitario, gases, tos, congestión, piojos, caspa, fiebre. Tiene propiedades calmantes que ayudan a reducir el estrés y la ansiedad.\n\n<b>APLICACIONES:</b>\nPara repeler insectos, poner una pequeña cantidad en algún aceite portador o ungüento y aplicar a la piel. Para abrir las vías respiratorias y aliviar la tos espasmódica, elaborando una pomada para aplicar en el pecho. Agregar algún champú para los hongos o caspa del cuero cabelludo. También se puede asociar a otro aceite como de cilantro, lavanda, eucalipto, romero, pino y poner en un difusor, para ayudar a la respiración, la congestión. Para dolores masajear la zona afectada con una mezcla de aceite de citronella y un aceite portador.\n\n<b>ACCIONES TERAPÉUTICAS:</b>\nAnalgésico, antibacteriano (de la piel) antidepresivo, antiespasmódico,antiinflamatorio, antimicrobiano (de la piel). Antiséptico, astringente, bactericida, desodorante, fungicida, insecticida.\n\n<b>ALMACENAMIENTO:</b>\nGuardar este aceite lejos de la luz del sol, para preservar sus propiedades.",
    presentacion: "Envase de vidrio color ámbar tipo gotero de 10 y 20 ml.",
  }

  private aceiteDeEnebro: BioCosmetico = {
    nombre: "Aceite Esencial de Enebro",
    descripcion: "<b>METODO DE EXTRACCIÓN:</b>\nEl aceite de enebro se obtiene por destilación de las bayas de la planta, con vapor de agua.\n\n<b>DESCRIPCIÓN:</b>\nEs un líquido transparente, ligeramente amarillo, con un aroma fresco yherbáceo.\nÍndice de Refracción: 1,48 a 1,50\nDensidad: 0,85 a 0,90 g/cm3\n\n<b>APLICACIONES:</b>\nSe aplica en cosmética, en cuidados de la piel como tónico facial y corporal, reducir la inflamación, y combatir las bacterias que causan el acné y el eccema, y en tratamientos de psoriasis. Mejora la circulación sanguínea, en el crecimiento del cabello, también para eliminar la caspa. En aromaterapia, se usa en difusores e inhaladores para reducir el estrés, la ansiedad y ayudar a relajarse. Se usa en masajes para aliviar dolores articulares y musculares, reduce la inflamación y el dolor. Se usa como desodorante natural, por sus propiedades antimicrobianas. Como antimicrobiano combate bacterias, hongos y virus. Alivia la picazón de la piel.\n\n<b>USOS:</b>\nAromaterapia, cosmética, farmacéutica, repelente de insectos.\n\n<b>ACCIONES TERAPÉUTICAS:</b>\nAntiinflamatorio, antimicrobiano, combate bacterias, hongos y virus. Antiespasmódico, antipruriginoso, alivia la picazón. Combate los parásitos, neutraliza el ácido gástrico. Expectorante, ayuda a eliminar el moco y las ecreciones.",
    presentacion: "Envase de vidrio color ámbar tipo gotero de 10 y 20 ml.",
  }

  private aceiteDeEucalipto: BioCosmetico = {
    nombre: "Aceite Esencial de Eucalipto",
    descripcion: `<b>MÉTODO DE EXTRACCIÓN:</b>\nPor destilación a vapor de las hojas.\n\n<b>DESCRIPCIÓN:</b>\nDesprende un olor dulce, refrescante y alcanforado, con tonos suaves y leñosos.\nÍndice de Refracción: 1,450 a 1,460\nDensidad: 0,905 a 0,925 g/cm3\n\n<b>USOS:</b>\nEs bueno para refrescar el aire, para la depresión, ansiedad, congestión, tos, alergias estacionales, expulsar mocos, bronquitis, asma, sinusitis, garganta irritada, gripe, resfríos, fiebre, ayuda al sistema inmunitario, esguinces, herpes, varicela, picores, acné, cura de heridas y cortes, quemaduras, claridad mental, repelente de insectos, eliminación de hongos.\n\n<b>APLICACIONES:</b>\nSirve en difusores y humidificadores para la tos, congestión y las alergias estacionales. Si se aplica con algún aceite portador ayuda en dolores reumáticos, musculares y los picores de la piel irritada. También para desinfectar los ambientes.\n\n<b>PRECAUCIONES:</b>\nNo usar en niños menores de 6 años, no ponerles en la cara y no darlo a beber.\n\n<b>ACCIONES TERAPÉUTICAS:</b>\nAnalgésico, antibacteriano, antidepresivo, anticonvulsivo, antiespasmódico, antifúngico, antipirético, antitusivo, antiviral, descongestionante, estimulante, expectorante, insecticida, sedante.`,
    presentacion: "Envase de vidrio color ámbar tipo gotero de 10 y 20 ml.",
  };

  private aceiteManzanaVerde: BioCosmetico = {
    nombre: "Aceite Esencial de Manzana Verde",
    descripcion: `<b>MODO DE EXTRACCIÓN:</b>\nSe extrae mediante destilación al vapor, siendo ésta la forma más común de extracción y la que proporciona mayor calidad de este aceite esencial.\n\n<b>DESCRIPCIÓN:</b>\nEl aroma de este aceite es fresco, afrutado y ligeramente dulce, revitalizante y estimulante que ayuda a reducir el estrés y la ansiedad. Se caracteriza por notas de manzana verde, hierbas y cítricos. Su apariencia es de un líquido claro, amarillento, con sabor ligeramente amargo.\nÍndice de Refracción: 1,472 a 1,482\nDensidad: 0,890 a 0,900 g/cm3\n\n<b>PRECAUCIONES:</b>\nDiluir en algún aceite portador antes de aplicarlo en la piel, ya que puede ser irritante si está muy concentrado. No usarlo en heridas abiertas o cortes, ya que podría retrasar la curación. Usar con precaución durante el embarazo y la lactancia.\n\n<b>USOS:</b>\n- En Aromaterapia, usar en difusores para crear un ambiente relajado.\n- En cuidado de la piel, aplicar diluido para hidratar, suavizar la piel, reducir la aparición de arrugas y calmar la piel irritada o inflamada.\n- Para cabello y cuero cabelludo, diluir y aplicar para nutrir y fortalecer el cabello o calmar la irritación del cuero cabelludo.\n- Se puede usar para saborizar bebidas.\n- En masajes, usar diluido para relajar y refrescar.\n- Como insecticida natural, aplicar diluido en la piel.\n\n<b>APLICACIONES:</b>\n- Para crema hidratante: mezclar 5 a 7 gotas de aceite esencial con 10 ml de crema hidratante.\n- Para aceite de masajes: mezclar 10 a 15 gotas con 50 ml de aceite portador (por ejemplo, aceite de oliva) y crear un aceite relajante o repelente de insectos.\n- Como desodorante natural: mezclar 5 a 7 gotas con 10 ml de aceite de coco.\n- Tónico facial: mezclar 5 a 7 gotas con 100 ml de agua destilada y aplicar en la piel para equilibrar el pH y reducir los poros.\n- Aceite para el cabello: mezclar 10 a 15 gotas con 50 ml de aceite portador y aplicar en el cabello para nutrir y fortalecer.\n\n<b>ACCIONES TERAPÉUTICAS:</b>\nAntiinflamatorio, Antioxidante, Antimicrobiano, Antidepresivo, Antialérgico, Antiespasmódico (alivia espasmos musculares y dolor), Cicatrizante, Tónico, Refrescante de la piel.`,
    presentacion: "Envase de vidrio color ámbar tipo gotero de 10 y 20 ml.",
  };

  private aceiteMenta: BioCosmetico = {
    nombre: "Aceite Esencial de Menta",
    descripcion: `<b>EXTRACCIÓN:</b>\nSe obtiene por destilación a vapor de las hojas.\n\n<b>DESCRIPCIÓN:</b>\nEl aceite de menta es viscoso y desprende un aroma fresco, mentolado, herbario, con sub‐tonos dulces y balsámicos.\nNo usar en niños menores de seis años debido a su contenido de mentol y cineol. Usar diluido: 30 gotas en 30 ml.\nÍndice de Refracción: 1,460 a 1,470\nDensidad: 0,890 a 0,910 g/cm3\n\n<b>USOS:</b>\nSe utiliza para:\n- Problemas digestivos: colon, acidez, dispepsia, dolor de estómago, diarrea y flatulencias.\n- Alivio del dolor en general: dolores musculares, jaquecas, migrañas.\n- Enfriar quemaduras, irritación de la piel y tratar el acné.\n- Problemas de circulación.\n- Síntomas de gripe y fiebre.\n- Limpieza del sistema linfático.\n- Como dentífrico y enjuague bucal.\n- En difusores, alivia la congestión.\n\n<b>ACCIONES TERAPÉUTICAS:</b>\nAntiséptico, astringente, digestivo, expectorante, febrífugo, insecticida, sedante, vasoconstrictor, analgésico, antibacteriano, antiespasmódico, antifúngico, antiinflamatorio, antimicrobiano.`,
    presentacion: "Envase de vidrio color ámbar tipo gotero de 10 y 20 ml.",
  };

  private aceiteOregano: BioCosmetico = {
    nombre: "Aceite Esencial de Orégano",
    descripcion: `<b>MÉTODO DE EXTRACCIÓN:</b>\nSe obtiene por destilación a vapor de los extremos florales y las hojas.\n\n<b>DESCRIPCIÓN:</b>\nEl aceite esencial de orégano tiene un color que va del amarillo oscuro a pálido y desprende un aroma especiado, cálido y herbáceo, con subtonos alcanforados.\nÍndice de Refracción: 1,50 a 1,512\nDensidad: 0,92 a 0,94 g/cm3\n\n<b>PRECAUCIONES:</b>\nNo usar durante el embarazo o lactancia, tampoco en niños menores de dos años.\n\n<b>USOS:</b>\n- Relajación, rigidez muscular, estrés, insomnio y síndrome de piernas inquietas.\n- Alivia constipación, congestión, mucosidad excesiva, garganta irritada, resfríos y gripe.\n- Ayuda al sistema inmunitario.\n- Alivia dolores menstruales, musculares, alergias, artritis y sinusitis.\n- Trata infecciones fúngicas, pie de atleta, jaquecas, psoriasis, acné, eccema, picores de la piel y picaduras de insectos.\n- Es digestivo.\n- En difusores, se utiliza como purificador del aire.\n\n<b>APLICACIONES:</b>\n- Muy útil en caso de náuseas.\n- Gran antiséptico, se usa con sprays limpiadores.\n- Ayuda a relajar la tensión muscular, aliviar la tos y la congestión añadiéndolo a algún aceite o ungüento para masajes.\n- Se puede aspirar el vapor de orégano en caso de resfrío, lo cual estimula el sistema inmunitario (realizar varias veces al día).\n\n<b>ACCIONES TERAPÉUTICAS:</b>\nAnalgésico, antibacteriano, antiespasmódico, antifúngico, antiinfeccioso, antiinflamatorio, antioxidante, antiparasitario, antiséptico, antitusivo, antiviral, ayuda al sistema inmunitario, digestivo, expectorante.`,
    presentacion: "Envase de vidrio color ámbar tipo gotero de 10 y 20 ml.",
  };

  private aceiteRomero: BioCosmetico = {
    nombre: "Aceite Esencial de Romero",
    descripcion: `<b>MÉTODO DE EXTRACCIÓN:</b>\nPor destilación a vapor de las hojas y flores.\n\n<b>DESCRIPCIÓN:</b>\nDesprende un aroma fresco y herbáceo con subtonos leñosos.\nÍndice de Refracción: 1,465 a 1,475\nDensidad: 0,910 a 0,93 g/cm3\n\n<b>PRECAUCIONES:</b>\nNo usar en embarazadas, en lactancia, en personas con epilepsia o en niños menores de seis años. No aplicar en la cara de los niños. Usar diluido: 36 gotas en 30 ml.\n\n<b>USOS:</b>\n- Proporciona claridad, energía mental y concentración.\n- Alivia la apatía y apoya al sistema inmunitario.\n- Acaba con los gérmenes, refresca y limpia el aire.\n- Se utiliza para dolores musculares, artritis, reumatismo y dolores menstruales.\n- Como repelente de insectos y para eliminar piojos.\n- Reparador de cabello: trata acné, cuero cabelludo graso, y mejora la salud capilar.\n- Alivia tos, congestión, expulsa mocos, resfríos, gripes, y ayuda en la cura de heridas y quemaduras.\n\n<b>APLICACIONES:</b>\n- Usar diluido con otros aceites o ungüentos para aliviar tos, congestión, dolores musculares y alergias estacionales.\n- Funciona como tónico e hidratante para pieles con acné o grasitud.\n- Para un cabello sano y brillante: combatir piojos, caspa y grasitud añadiendo una gota de aceite esencial de romero a un cuarto de litro de champú y usar de dos a tres veces por semana.\n\n<b>ACCIONES TERAPÉUTICAS:</b>\nAnalgésico, antibacteriano, antiespasmódico, antifúngico, antiinflamatorio, antimicrobiano, antioxidante, antitusivo, antiviral, antirreumático, digestivo, expectorante.`,
    presentacion: "Envase de vidrio color ámbar tipo gotero de 10 y 20 ml.",
  };

  private aceiteRosaMosqueta: BioCosmetico = {
    nombre: "Aceite Esencial de Rosa Mosqueta",
    descripcion: `<b>MODO DE EXTRACCIÓN:</b>\nEl aceite esencial de rosa mosqueta se extrae mediante la destilación a vapor de las semillas de la planta.\n\n<b>DESCRIPCIÓN:</b>\nEste aceite vegetal tiene un color amarillento o anaranjado, con un aroma intenso y afrutado, y un sabor ligeramente amargo y ácido. Es rico en ácidos grasos esenciales (omega 3 y 6), vitamina C y antioxidantes.\nÍndice de Refracción: 1,456 a 1,465\nDensidad: 0,856 a 0,863 g/cm3\nSe recomienda almacenarlo en recipientes oscuros y en un lugar fresco para preservar su calidad.\n\n<b>PRECAUCIONES:</b>\n- Usar con precaución durante el embarazo o lactancia.\n- Evitar usarlo en heridas abiertas o cortes, ya que podría retrasar la cicatrización.\n- Es un aceite esencial concentrado, por lo que debe diluirse con un aceite portador antes de aplicarlo en la piel.\n\n<b>USOS:</b>\n- Hidrata, regenera y protege la piel, reduciendo arrugas y mejorando la elasticidad.\n- Ayuda a disminuir cicatrices y estrías.\n- Propiedades antiinflamatorias: alivia inflamación y enrojecimiento de la piel.\n- Propiedades antioxidantes: protege la piel de los daños provocados por los radicales libres.\n- En difusores, su aroma afrutado reduce el estrés y mejora el estado de ánimo.\n- Tratamiento del acné, eccema, psoriasis y dermatitis.\n- Hidrata profundamente la piel, dejándola suave y tersa.\n- Estimula la regeneración celular, mejorando la apariencia de la piel.\n- En masajes, se usa como aceite portador para diluir aceites relajantes.\n\n<b>APLICACIONES:</b>\n- En cremas y lociones para rehidratar y regenerar la piel.\n- Tratamientos faciales para reducir arrugas.\n- Tratamientos corporales para humectar y relajar la piel.\n- En cicatrices y estrías para mejorar su apariencia.\n\n<b>ACCIONES TERAPÉUTICAS:</b>\n- Regenerador y antiinflamatorio de la piel.\n- Antioxidante, hidratante y cicatrizante.\n- Propiedades antiaging, calmantes y antimicrobianas (inhibe el crecimiento de bacterias y hongos).\n- Analgésico: alivia dolor e inflamación.\n- Antiestrés: su aroma afrutado mejora el estado de ánimo.\n\n<b>PRESENTACIÓN:</b>\nEnvase de vidrio color ámbar tipo gotero de 10 y 20 ml.`,
    presentacion: "Envase de vidrio color ámbar tipo gotero de 10 y 20 ml.",
  };

  private aceiteSalvia: BioCosmetico = {
    nombre: "Aceite Esencial de Salvia",
    descripcion: `<b>MODO DE EXTRACCIÓN:</b>\nEste aceite se extrae a través de la destilación al vapor de las hojas y flores de la planta.\n\n<b>DESCRIPCIÓN:</b>\nEs un líquido volátil de color amarillo pálido o incoloro, con un aroma herbáceo y ligeramente amargo.\nÍndice de Refracción: 1,45 a 1,50\nDensidad: 0,90 a 0,95 g/cm3\n\n<b>PRECAUCIONES:</b>\n- No utilizar durante el embarazo, lactancia o en niños menores de 6 años.\n- No aplicar directamente sobre la piel sin diluir.\n- Precaución en personas con presión alta, diabetes, problemas de hígado o riñón.\n- No inhalarlo puro, ya que podría irritar las vías respiratorias.\n- Puede causar irritación en pieles sensibles.\n- Evitar la exposición a altas temperaturas después de aplicarlo.\n\n<b>USOS:</b>\n- Aromaterapia: reduce estrés, ansiedad y promueve la relajación.\n- Cuidado de la piel: trata acné, eccema y psoriasis.\n- Cabello: alivia picor, combate la caspa y previene la caída del cabello.\n- Repelente de insectos.\n- Cuidado bucal: reduce la placa bacteriana y mejora la salud bucal.\n- Masajes: alivia dolores musculares y articulares.\n- Trastornos digestivos: alivia indigestión, estreñimiento y diarrea.\n\n<b>APLICACIONES:</b>\n- Aromaterapia: en difusores, inhalación y masajes.\n- Cosmética: en cremas, lociones, champús y jabones.\n- Farmacéutica: en medicamentos para la piel.\n- Repelente de insectos: en sprays, velas y difusores.\n- Terapias alternativas: reiki, reflexología, meditación.\n- Veterinaria: para afecciones de animales.\n- Odontología: para tratar afecciones bucales.\n- Industria: productos de limpieza y desinfección.\n\n<b>ACCIONES TERAPÉUTICAS:</b>\nAntiinflamatorio, Antiespasmódico, Antimicrobiano (combate bacterias, virus y hongos), Antifúngico, Insecticida, Antioxidante, Analgésico, Sedante, Antipruriginoso, Antiparasitario, Inmunoestimulante (fortalece el sistema inmunitario), Antiaging (reduce los signos del envejecimiento), Protector de la piel y Antiviral.\n\n<b>PRESENTACIÓN:</b>\nEnvase de vidrio color ámbar tipo gotero de 10 y 20 ml.`,
    presentacion: "Envase de vidrio color ámbar tipo gotero de 10 y 20 ml.",
  };

  private aceiteTanaceto: BioCosmetico = {
    nombre: "Aceite Esencial de Tanaceto",
    descripcion: `<b>MÉTODO DE EXTRACCIÓN:</b>\nEste aceite se obtiene a partir de la destilación a vapor de las flores y hojas de la planta.\n\n<b>DESCRIPCIÓN:</b>\nEl aceite esencial de tanaceto es concentrado, tiene un color amarillo pálido o incoloro, con un aroma fresco, herbáceo y ligeramente amargo.\nÍndice de Refracción: 1,45 a 1,50\nDensidad: 0,85 a 0,90 g/cm3\n\n<b>PRECAUCIONES:</b>\n- No usar durante el embarazo, lactancia o en niños menores de seis años.\n- No aplicar directamente sobre la piel sin diluir.\n- No ingerir.\n- Usarlo siempre diluido con un aceite portador (por ejemplo, aceite de coco, oliva o almendras).\n\n<b>USOS:</b>\nEste aceite esencial tiene múltiples aplicaciones debido a sus propiedades:\n- <b>Aromaterapia:</b> reduce el estrés, la ansiedad y promueve la relajación.\n- <b>Repelente de insectos:</b> eficaz contra mosquitos y otros insectos.\n- <b>Cuidados de la piel:</b> trata acné, eccema y psoriasis.\n- <b>Cuidados del cabello:</b> combate la caspa y alivia la picazón del cuero cabelludo.\n- <b>Masajes:</b> alivia dolores articulares, musculares, artritis y artrosis.\n- <b>Problemas respiratorios:</b> útil para tratar tos, resfríos y sinusitis.\n\n<b>APLICACIONES:</b>\n- <b>Aromaterapia:</b> en difusores para inhalación.\n- <b>Cosmética:</b> como ingrediente en lociones, champús y jabones.\n- <b>Farmacéutica:</b> en tratamientos para problemas de la piel.\n- <b>Repelente de insectos:</b> en sprays, velas y difusores.\n- <b>Cuidados de la piel:</b> tratamiento de acné, eccema, psoriasis y otras afecciones.\n- <b>Cabello:</b> en tratamientos para caspa, picor y caída del cabello.\n- <b>Masajes:</b> con aceites portadores para aliviar dolores musculares y articulares.\n\n<b>ACCIONES TERAPÉUTICAS:</b>\n- Antiinflamatoria: reduce la inflamación.\n- Analgésica: alivia el dolor.\n- Antiespasmódica: calma espasmos musculares y calambres.\n- Antimicrobiana: combate bacterias, virus y hongos.\n- Antifúngica: elimina hongos y levaduras.\n- Insecticida: repele y elimina insectos.\n- Sedante: promueve la relajación y reduce la ansiedad.\n- Antipruriginosa: alivia la picazón.\n- Protectora de la piel: protege contra el daño ambiental y reduce los signos del envejecimiento.\n\n<b>PRESENTACIÓN:</b>\nEnvase de vidrio color ámbar tipo gotero de 10 y 20 ml.`,
    presentacion: "Envase de vidrio color ámbar tipo gotero de 10 y 20 ml.",
  };
  

  hidrolatos = [
    this.queSonLosHidrolatos,
    this.hidrolatoDeLavanda,
    this.hidrolatoDeMenta,
    this.hidrolatoDeTanaceto,
    this.hidrolatoDeEnebro,
    this.hidrolatoDeOregano,
    this.hidrolatoDePino
  ];

  aceites = [
    this.aceiteDeLavanda,
    this.aceiteDeCalendula,
    this.aceiteDeCilantro,
    this.aceiteDeCipres,
    this.aceiteDeCitronella,
    this.aceiteDeEnebro,
    this.aceiteDeEucalipto,
    this.aceiteManzanaVerde,
    this.aceiteMenta,
    this.aceiteOregano,
    this.aceiteRomero,
    this.aceiteRosaMosqueta,
    this.aceiteSalvia,
    this.aceiteTanaceto
  ];


  mostrarProductos(categoria: any) {
    this.categoriaSeleccionada = categoria;
    this.categoryChange = this.categoryChange === true ? false : true;
    this.toggleNav();
  }

  toggleGrupo(grupo: string) {
    this.gruposVisibles[grupo] = !this.gruposVisibles[grupo];
  }

  toggleNav() {
    if (window.innerWidth <= 900) {
      this.hideNav = !this.hideNav;
    }
  }
  
  openClose(any: any) {
    any.openClose = any.openClose === true ? false : true;
  }
}

interface BioCosmetico {
  nombre: string;
  descripcion: string;
  presentacion?: string;
  cantidad?: string
}
