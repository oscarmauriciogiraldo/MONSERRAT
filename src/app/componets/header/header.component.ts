import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDropDownMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropDownMenu(){
    this.showDropDownMenu = !this.showDropDownMenu
  }

}
