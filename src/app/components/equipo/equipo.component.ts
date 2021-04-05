import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  @Input()
  public titulo: string;

  @Input()
  public descripcion: string;

  constructor() { }

  ngOnInit(): void {
  }

}
