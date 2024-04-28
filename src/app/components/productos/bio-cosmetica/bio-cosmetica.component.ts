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
    presentacion: "\nBotella ámbar (pet) 1000 ml.\nBotella de vidrio ámbar 250 ml. (con tapa, atomizador y en difusor ambiental)",
  }

  mostrarProductos(categoria: any) {
    this.categoriaSeleccionada = categoria;
    this.categoryChange = this.categoryChange === true ? false : true;
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
