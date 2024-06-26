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
      titulo: "TRATAMIENTO DE EFLUENTES",
      descripcion: "Nuestra especialidad es el tratamiento integral de efluentes industriales para pequeñas, medianas o industrias. Por esta razón, consúltenos antes de Invertir en el tratamiento de este tipo de efluentes."
    },
    {
      titulo: "POTABILIZACIÓN",
      descripcion: "Permiten someter el agua a distintos procesos para que pueda ser consumida por el ser humano sin que presente un riesgo para su salud. Implica, por tanto, el tratamiento de aguas superficiales o subterráneas para obtener agua potable con calidad conforme a lo establecido en el código del estado en el cual se establece la planta, que establece los criterios sanitarios de la calidad del agua de consumo humano."
    },
    {
      titulo: "PLANTAS CLOACALES",
      descripcion: "Nuestra especialidad es el tratamiento integral de efluentes cloacales para pequeñas, medianas o grandes comunidades, barrios privados, emprendimientos hoteleros o cabañas, etc. Por esta razón, consúltenos antes de Invertir en el tratamiento de este tipo de efluentes."
    },
    {
      titulo: "EQUIPOS PARA ENERGÍA FOTOVOLTAICA",
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
    },
    {
      titulo: "CABINAS SANITIZANTES",
      descripcion: "Sistema a través del cual tanto las personas como los objetos que llevan consigo son descontaminados antes de ingresar a algún lugar de concurrencia. Tiene la finalidad de reducir la carga de virus tan actuales y de difusión mundial en la superficie de vestimenta, cuerpo y objetos."
    },
    {
      titulo: "CONTROL DE DERRAMES DE HIDROCARBUROS",
      descripcion: "Alquimia del Sur es representante de Aqua – Guard empresa Canadiense ubicada en la ciudad de Vancouver con más de 50 años de trayectoria en el control de derrames, siendo una de las tres lideres mundiales con experiencia en este rubro. AQUA-GUARD ofrece una extensa gama de soluciones integrales 100% a la medida para el combate de derrames pretroleros y temas relacionados."
    },
  ];

  public productos: any[] = [
    {
      titulo: "AGUA",
      link: "agua",
      icon: "fas fa-tint",
      texto: "Alquimia del Sur ofrece una amplia variedad de productos para el tratado y cuidado del agua. Para más información no dude en contactarse con nosotros."
    },
    {
      titulo: "BIO COSMÉTICA NATURAL",
      link: "bio-cosmetica",
      icon: "fas fa-utensils",
      texto: "Dentro de nuestros productos orientados a la alimentación y la cosmética se encuentran: aceites esenciales, vinagre de manzana orgánico y citrato de magnesio."
    },
    {
      titulo: "PETRÓLEO",
      link: "petroleo",
      icon: "fas fa-oil-can",
      texto: "Alquimia del Sur comercializa productos para el petróleo como los inhibidores de corrosión, incrustación, de azufre, de parafinas, antifoam, surfactantes, bactericidas, reductores de fricción. Todos ellos tanto sólidos (en su variante microsólidos) como líquido."
    },
  ];

  public customEquipoOptions: OwlOptions  = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        autoplayTimeout: 1500,
      },
      600: {
        items: 2,
      },
      1080: {
        items: 3,
      }
    }
  }

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
        autoplayTimeout: 500,
      },
      300: {
        items: 3,
        autoplayTimeout: 500,
      },
      640: {
        items: 4
      },
      820: {
        items: 5
      },
      940: {
        items: 6
      },
      1080: {
        items: 7
      },
      1220: {
        items: 8
      }
    }
  }

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor() { }

  ngOnInit(): void {
  }

}
