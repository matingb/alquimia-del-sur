import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-item',
  templateUrl: './index-item.component.html',
  styleUrls: ['./index-item.component.scss']
})
export class IndexItemComponent implements OnInit {

  @Input()
  public items : Array<String>;

  constructor() { }

  ngOnInit(): void { 

  }

}
