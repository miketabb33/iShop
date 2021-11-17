import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent implements OnInit {
  pageNumber = 0

  constructor() {}

  ngOnInit() {

  }

  didChangePage(pageNumber: number) {
    this.pageNumber = pageNumber
  }
}
