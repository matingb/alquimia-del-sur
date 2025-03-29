import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { ACEITE_DE_CALENDULA, ACEITE_DE_CILANTRO, ACEITE_DE_CIPRES, ACEITE_DE_CITRONELLA, ACEITE_DE_ENEBRO, ACEITE_DE_EUCALIPTO, ACEITE_DE_LAVANDA, ACEITE_DE_MANZANA_VERDE, ACEITE_DE_MENTA, ACEITE_DE_OREGANO, ACEITE_DE_ROMERO, ACEITE_DE_ROSA_MOSQUETA, ACEITE_DE_SALVIA, ACEITE_DE_TANACETO, BioCosmetico, HIDROALTO_DE_SALVIA, HIDROLATO_DE_CIPRES, HIDROLATO_DE_CITRONELA, HIDROLATO_DE_ENEBRO, HIDROLATO_DE_EUCALIPTO, HIDROLATO_DE_HIPERICO, HIDROLATO_DE_LAVANDA, HIDROLATO_DE_MELISA, HIDROLATO_DE_MENTA, HIDROLATO_DE_OREGANO, HIDROLATO_DE_PINO, HIDROLATO_DE_ROMERO, HIDROLATO_DE_ROSAS, HIDROLATO_DE_RUDA, HIDROLATO_DE_TANACETO, QUE_SON_LOS_HIDROLATOS } from './biocosmeticos';

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
  

  hidrolatos = [
    QUE_SON_LOS_HIDROLATOS,
    HIDROLATO_DE_LAVANDA,
    HIDROLATO_DE_MENTA,
    HIDROLATO_DE_TANACETO,
    HIDROLATO_DE_ENEBRO,
    HIDROLATO_DE_OREGANO,
    HIDROLATO_DE_PINO,
    HIDROLATO_DE_ROSAS,
    HIDROALTO_DE_SALVIA,
    HIDROLATO_DE_CIPRES,
    HIDROLATO_DE_ROMERO,
    HIDROLATO_DE_RUDA,
    HIDROLATO_DE_EUCALIPTO,
    HIDROLATO_DE_CITRONELA,
    HIDROLATO_DE_MELISA,
    HIDROLATO_DE_HIPERICO
  ];

  aceites = [
    ACEITE_DE_LAVANDA,
    ACEITE_DE_CALENDULA,
    ACEITE_DE_CILANTRO,
    ACEITE_DE_CIPRES,
    ACEITE_DE_CITRONELLA,
    ACEITE_DE_ENEBRO,
    ACEITE_DE_EUCALIPTO,
    ACEITE_DE_MANZANA_VERDE,
    ACEITE_DE_MENTA,
    ACEITE_DE_OREGANO,
    ACEITE_DE_ROMERO,
    ACEITE_DE_ROSA_MOSQUETA,
    ACEITE_DE_SALVIA,
    ACEITE_DE_TANACETO
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
