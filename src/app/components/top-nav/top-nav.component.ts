import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class HeaderComponent implements OnInit {

  public hideNav: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (window.matchMedia("(max-width: 767px)").matches)
    {
      this.hideNav = true;
    }
  }

  toggleNav() {
    if(this.hideNav == true) {
      this.hideNav = false;
    }
    else {
      this.hideNav = true;
    }
  }
}
