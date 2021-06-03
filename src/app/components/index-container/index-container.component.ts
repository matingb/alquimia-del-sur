import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index-container',
  templateUrl: './index-container.component.html',
  styleUrls: ['./index-container.component.scss']
})
export class IndexContainerComponent implements OnInit {

  public equipos: any[] = [
    {
      titulo: "TRATAMIENTOS DE EFLUENTES",
      descripcion: "Nuestra especialidad es el tratamiento integral de efluentes industriales para pequeñas, medianas o industrias. Por esta razón, consúltenos antes de Invertir en el tratamiento de este tipo de efluentes."
    },
    {
      titulo: "PLANTAS POTABILIZADORAS",
      descripcion: "Permiten someter el agua a distintos procesos para que pueda ser consumida por el ser humano sin que presente un riesgo para su salud. Implica, por tanto, el tratamiento de aguas superficiales o subterráneas para obtener agua potable con calidad conforme a lo establecido en el código del estado en el cual se establece la planta, que establece los criterios sanitarios de la calidad del agua de consumo humano."
    },
    {
      titulo: "PLANTAS CLOACALES",
      descripcion: "Nuestra especialidad es el tratamiento integral de efluentes cloacales para pequeñas, medianas o grandes comunidades, barrios privados, emprendimientos hoteleros o cabañas, etc. Por esta razón, consúltenos antes de Invertir en el tratamiento de este tipo de efluentes."
    },
    {
      titulo: "EQUIPOS PARA ENERGÍA FOTOVOLTÁICA",
      descripcion: "Estación de carga de vehículos eléctricos nivel 2 universal preparada para cargar dos vehículos simultáneamente. Compatible con todos los vehículos tipo plug-in. Viene equipada con un sistema abierto de procesamiento de pagos sin efectivo."
    },
    {
      titulo: "FILTROS PRENSAS",
      descripcion: "Son equipos diseñados para la filtración, deshidratación o concentración de semi-sólidos. Estos barros o semi-sólidos pueden provenir del tratamiento de efluentes cloacales, industriales, etc."
    },
    {
      titulo: "CENTRIFUGAS DECANTER",
      descripcion: "La Decanter suma beneficios a la producción por su operación continua. Son requeridos menos controles y mínima supervisión. Puede reemplazar filtros batch y continuos y a varios métodos de sedimentación estática. Llega a ser una herramienta de separación extremadamente sensible con aplicación en distintas áreas."
    },
    {
      titulo: "PLANTAS PARA OSMOSIS INVERSA",
      descripcion: "En comparación con las tecnologías de filtración tradicionales que dependen de una pantalla o filtro para eliminar partículas, la ósmosis inversa (OI) es un proceso de separación impulsado por presión que emplea una membrana semipermeable y los principios de filtración de flujo cruzado."
    }
  ];

  public productos: any[] = [
    {
      titulo: "AGUA",
      icon: "fas fa-tint",
      texto: "Alquimia del Sur ofrece una amplia variedad de productos para el tratado y cuidado del agua. Para más información no dude en contactarse con nosotros."
    },
    {
      titulo: "ALIMENTACIÓN Y COSMÉTICA",
      icon: "fas fa-utensils",
      texto: "Dentro de nuestros productos orientados a la alimentación y la cosmética se encuentran: aceites esenciales, vinagre de manzana orgánico y citrato de magnesio."
    },
    {
      titulo: "PETRÓLEO",
      icon: "fas fa-oil-can",
      texto: "Alquimia del Sur comercializa productos para el petróleo como los inhibidores de corrosión, incrustación, de azufre, de parafinas, antifoam, surfactantes, bactericidas, reductores de fricción. Todos ellos tanto sólidos (en su variante microsólidos) como líquido."
    },
  ];

  public customOptions: OwlOptions  = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
        autoplayTimeout: 500,
      },
      740: {
        items: 4
      },
      940: {
        items: 7
      },
      1150: {
        items: 9
      }
    }
  }

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor() { }

  ngOnInit(): void {
  }

}
