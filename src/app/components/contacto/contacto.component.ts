import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onClickSubmit(ngForm:NgForm) {
    console.dir(ngForm);
    if (ngForm.valid == true) {
      const body = { 
        nombre: ngForm.value.nombre,
        apellido: ngForm.value.apellido,
        asunto: ngForm.value.asunto, 
        email: ngForm.value.email,
        mensaje: ngForm.value.mensaje
      };
      this.httpClient.post<any>('https://garzangb.herokuapp.com/sendEmail', body)
      .subscribe(data => {
        this.toastr.success(data.message, 'Mail enviado correctamente');
        ngForm.reset();
      },
        error => {
          this.toastr.error('Vuelva a intentar en unos minutos', 'Ocurrió un error');
        }
      );
    }
    else {
      this.toastr.error('Los campos no fueron completados correctamente', 'Error al enviar el mail');
    }
  }
}
