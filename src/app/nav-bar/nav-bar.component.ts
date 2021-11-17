import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() selectPage = new EventEmitter<number>() 

  constructor() { }

  ngOnInit(): void {
  }

  didClickRecipes() {
    this.selectPage.emit(0)
  }

  didClickList() {
    this.selectPage.emit(1)
  }
}
