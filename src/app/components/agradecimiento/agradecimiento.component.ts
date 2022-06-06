import { Component, OnInit } from '@angular/core';

declare var gtag;

@Component({
  selector: 'app-agradecimiento',
  templateUrl: './agradecimiento.component.html',
  styleUrls: ['./agradecimiento.component.scss']
})
export class AgradecimientoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gtag('event', 'conversion', {'send_to': 'AW-10778560458/skZfCIiGs_cCEMqPz5Mo'});
  }

}
