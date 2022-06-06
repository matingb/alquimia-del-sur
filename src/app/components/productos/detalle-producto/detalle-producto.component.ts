import { Component, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  @Input()
  public nombre: string;
  
  @Input()
  public aplicacion: string;
  
  @Input()
  public presentacion: string;

  public isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openClose() {
    this.isOpen = this.isOpen === true ? false : true;
    setTimeout(this.modifyAsideHeight, 50);
  }
  
  modifyAsideHeight() {
    let height = document.querySelector<HTMLElement>('.contenedor').offsetHeight;
    document.querySelector('aside').style.height = height + "px";
  }
}
