import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input()
  public icon: string;

  @Input()
  public titulo: string;

  @Input()
  public texto: string;

  @Input()
  public textAling: string;

  constructor() { }

  ngOnInit(): void {
  }

}
