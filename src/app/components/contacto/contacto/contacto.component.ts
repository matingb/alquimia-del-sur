import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    const body = { 
      nombre: data.nombre,
      apellido: data.apellido,
      asunto: data.asunto, 
      email: data.email,
      mensaje: data.mensaje
    };
    console.dir(body);
    this.httpClient.post<any>('http://localhost:5000/hola', body)
    .subscribe(data => {
    });
  }
}
