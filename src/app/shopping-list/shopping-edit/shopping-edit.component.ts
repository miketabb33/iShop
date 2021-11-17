import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef
  @ViewChild("amountInput") amountInput: ElementRef

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  didClickAdd() {
    const name = this.nameInput.nativeElement.value
    const amount = this.amountInput.nativeElement.value
    const newIngredient = new Ingredient(name, amount)
    this.shoppingListService.addIngredients([newIngredient])
  }
}
