import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public categoriaSeleccionada = null;

  private _acidoClorhídrico = {
      nombre: "Ácido Clorhídrico",
      aplicacion: "",
      presentacion: "",
  }
  private _acidoSulfúrico = {
    nombre: "Ácido Sulfúrico",
    aplicacion: "Es utilizado en la industria de los fertilizantes, refinación de petróleo y en la industria minera. Es materia prima para la producción de explosivos, plásticos, fibras, detergentes y pigmentos inorgánicos. También se utiliza en el procesado de metales, para el tratamiento de acero, cobre, uranio, vanadio y metales no ferrosos. Se utiliza en el tratamiento de pieles y cueros. Es un componente en la fabricación de acumuladores (baterías) en la industria automotriz.",
    presentacion: "Líquido a granel",
  }
  private _antiespumante = {
    nombre: "Antiespumantes siliconados y no siliconados",
    aplicacion: "Usos variados en procesos con generación de espuma",
    presentacion: "Bidones de 20 litros - Tambores de 200 litros - Contenedores de 1000 litros",
  }
  private _agentesDispersantes = {
    nombre: "Agentes Dispersantes",
    aplicacion: "Se utilizan para eliminar la presencia de depósitos orgánicos e inorgánicos que reducen la velocidad de flujo de los sistemas industriales, provocando costosas paradas y favoreciendo la contaminación microbiológica de los equipos. Nuestra serie de productos específicos nos permite mantener las instalaciones en perfecto estado de conservación y limpieza.",
    presentacion: "Bidón – Tambor - IBC",
  }
  private _alguicida = {
    nombre: "Alguicidas",
    aplicacion: "Producto utilizado para la eliminar y prevenir la formación de algas y combatir la presencia de bacterias y hongos.",
    presentacion: "Botellas de 1 litro - Bidones de 5 litros y 20 litros – Tambor por 200 litros. Diluir acorde a la recomendación en la hoja técnica",
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

  public mineria = {
      nombre: "Mineria",
      productos: [
        this._antiespumante,
      ]
  };

  mostrarProductos(categoria: any) {
    this.categoriaSeleccionada = categoria;
  }
}
