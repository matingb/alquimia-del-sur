import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(private httpClient: HttpClient, private toastr: ToastrService, private router: Router,) { }

  ngOnInit(): void {
  }

  onClickSubmit(ngForm:NgForm) {
    if (ngForm.valid == true) {
      const body = { 
        nombre: ngForm.value.nombre,
        apellido: ngForm.value.apellido,
        asunto: ngForm.value.asunto, 
        email: ngForm.value.email,
        mensaje: ngForm.value.mensaje,
        numero: ngForm.value.numero
      };
      this.toastr.info('Aguarde, este proceso podría demorar unos segundos', 'Enviando Mensaje');
      this.httpClient.post<any>('https://email-sender-v3f4.onrender.com/sendEmail', body)
      .subscribe(data => {
        this.router.navigate(['/agradecimiento']);
        //this.toastr.success("data.message", 'Mail enviado correctamente');
        ngForm.reset();
      },
        error => {
          this.toastr.error('Vuelva a intentar en unos minutos. Si el error persiste puede comunicarse directamente con marfer09@hotmail.com', 'Ocurrió un error', { timeOut: 10000 });
      });
    }
    else {
      this.toastr.error('Los campos no fueron completados correctamente', 'Error al enviar el mail');
    }
  }
}

