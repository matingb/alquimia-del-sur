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
export class BioCosmeticaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(this.modifyAsideHeight, 50);
  }

  public categoryChange = false;
  public categoriaSeleccionada = null;
  public hideNav = true;

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
    descripcion: "El uso medicinal de la tanaceto es antiguo, lo demuestra una orden emitida porCarlomagno para que cultiven en sus campos hierbas y condimentos, incluyendo aTanacetum vulgare que es como se la conoce actualmente.\n\nSe utilizaba el tanacetum vulgare para la faena de animales, ya que ahuyentaba losinsectos y las moscas. En la actualidad se utiliza como un eficaz repelente, ya queayuda a depurar el ambiente de insectos, con un aroma agradable. Es una opciónnatural para evitar insecticidas y productos químicos industriales.\n\nSu aroma es una mezcla entre hierbas y alcanfor. La fragancia es ligeramente dulce.Esta sustancia tiene un efecto calmante cuando se inhala. De este modo, promueve larelajación y ayuda a reducir los estados de estrés, además se utiliza inhalando superfume momentos de migrañas y neuralgias.\nLa planta pertenece a la familia de la manzanilla, contiene camazuleno, un compuestocon propiedades calmantes y antioxidantes. La fito cosmética utiliza esta planta parareducir las irritaciones, pues contiene guaiol y guaiazuleno.\n\nSe puede utilizar cómo tónico facial ya que contiene varios antioxidantes, por lo quepodría ayudar a atenuar las líneas de expresión y las arrugas propias delenvejecimiento.\n\nEn su aplicación externa se aplica su aceite para combatir el reumatismo. En Irlandadel siglo XIX, se sugería bañarse en una solución de tanaceto y sal como una cura parael dolor articular. Un masaje con hidrolato de tanaceto podría ser eficaz para reducirel dolor causado por las neuralgias, la artritis o la tendinitis.\n\nSe puede masajear la zona del vientre en los trastornos menstruales en general.\n\nEntre los beneficios de la planta de Tanacetum vulgare parece tener propiedadesantiinflamatorias, antialérgicas, (combate el picor), flebotónicas (tonifica los vasossanguíneos), sedantes y calmantes.",
    presentacion: "Botella de plástico ámbar",
    cantidad: "1000 ml",
  }

  private hidrolatoDeEnebro: BioCosmetico = {
    nombre: "Hidrolato de Enebro",
    descripcion: "El enebro simboliza la fuerza vital y en varias civilizaciones se usó como purificante tantopara el cuerpo como para el ambiente (se dice que Hipócrates erradicó la peste deAtenas gracias al Enebro).\n\nEl hidrolato de enebro tiene un aroma exquisito, además de ser en la aromaterapia elmás indicado para purificar el cuerpo y el alma ya que, proporciona ligereza y frescura yllenarse de energía.\n\nEl enebro es considerado como una planta protectora, se cuelga en las puertas paraalejar las fuerzas malignas y se utiliza para purificar el ambiente, limpiar las energíasnegativas, protege de las enfermedades.\n\nEl enebro y su flor fomentan la positividad, el optimismo y la alegría. Alinea todas lasenergías del cuerpo, ayuda a superar cualquier tipo de infelicidad y fatiga en el cuerpoque se pueda sentir.\n\nEl enebro se considera un signo de superación, crecimiento y autodescubrimiento.Promueve la voluntad de aprender constantemente y mejorar todos los aspectos de lavida, ya sean físicos, emocionales o sociales.\n• Es un antiséptico general.\n• Es diurético, estimula la función renal y su limpieza por lo que ayuda a sacar alexterior toxinas como el ácido úrico que se acumula en todo tipo dereumatismos (de tejidos blandos o duros, artritis, artrosis, poli artritis, lumbago)y reduce la acidez en el cuerpo.\n• Ayuda a eliminar celulitis, edemas y retención de líquidos en piernas y cuerpo yen los párpados. Apoya las dietas de adelgazamiento.\n• Para la piel aplícalo en el acné como tónico purificante o formando parte demascarillas. Y aplicado sobre la piel ayuda a las irritaciones y la psoriasis.\n• Dolor muscular o menstrual. Por sus efectos anti-inflamatorios y por supropiedad de drenar líquidos ayuda en cualquier proceso inflamatorio ya quedisminuye el dolor y favorece el estancamiento.\n• Cuando se tiene un objetivo que cumplir y se tiene la sensación que losobstáculos son insalvables, ayuda a salir de la impresión de estancamiento.\n• Proporciona energía vital y ayuda a salir de la impresión de estar absorbido porlos problemas de los demás.\n• Proporciona un estado de alegría y constancia, por lo tanto puede proporcionaruna sensación de alivio a las personas que sufren estrés, ansiedad e inclusodepresión. Aporta al cuerpo un tiempo de paz, induce al descanso y combate elinsomnio y anima a seguir adelante y a cambiar el enfoque del pasado alpresente.\n\nSu uso colabora para resolver conflictos, mitigar rencores, promover unacomunicación honesta y eficaz, entablar relaciones más estrechas y duraderas.",
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

interface BioCosmetico {
  nombre: string;
  descripcion: string;
  presentacion: string;
  cantidad?: string
}
