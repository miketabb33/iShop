import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef
  @ViewChild("amountInput") amountInput: ElementRef
  @Output() onAddIngredient = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit(): void {
  }

  didClickAdd() {
    const name = this.nameInput.nativeElement.value
    const amount = this.amountInput.nativeElement.value
    const newIngredient = new Ingredient(name, amount)
    this.onAddIngredient.emit(newIngredient)
  }
}
