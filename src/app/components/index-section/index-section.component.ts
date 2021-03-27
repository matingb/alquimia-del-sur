import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/clases/item';

@Component({
  selector: 'app-index-section',
  templateUrl: './index-section.component.html',
  styleUrls: ['./index-section.component.scss']
})
export class IndexSectionComponent implements OnInit {

  public productos: Array<Item> = [
  new Item("AGUA", "2/1/2/1"),
  new Item("NUTRICIÓN: ALIMENTACIÓN Y COSMETICA", "2/2/2/2"),
  new Item("PETRÓLEO", "2/3/2/3"),
  ];

  public equipos: Array<Item> = [
    new Item("PLANTAS PARA TRATAMIENTOS DE EFLUENTES", "2/1/2/1"),
    new Item("PLANTAS POTABILIZADORAS", "2/2/2/2"),
    new Item("PLANTAS CLUACALES", "2/3/2/3"),
    new Item("EQUIPOS PARA ENERGIA FOTOVOLTAICA", "3/1/3/1"),
    new Item("FILTROS PRENSAS", "3/2/3/2"),
    new Item("CENTRIFUGAS DECANTER", "3/3/3/3"),
    new Item("PLANTAS PARA OSMOSIS INVERSA - DEMI - ABLANDAMIENTO DE AGUA", "4/2/4/2"),
    ];

    public servicios: Array<Item> = [
      new Item("ASESORAMIENTO", "2/1/2/1"),
      new Item("CURSOS EN LÍNEA O EN COMPAÑÍA", "3/1/3/1"),
      new Item("PROYECTO Y DIRECCIÓN DE OBRAS", "4/1/4/1"),
      new Item("OPERACIÓN, CONTROL, ANÁLISIS Y ELABORACIÓN DE INFORMES DE PLANTAS QUE UTILIZAN LOS EQUIPOS OFRECIDOS O SIMILARES", "2/2/5/2"),
      ];

      public novedades: Array<Item> = [
        new Item("COVID - DESINFECCIÓN", "2/1/2/1"),
        new Item("SERVICIOS DE LABORATORIO", "2/2/2/2")
      ];

  constructor() { }

  ngOnInit(): void {
  }
  
}
