import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { Ingridient } from '../interfaces/ingridients';
import { DialogAddComponent } from '../shared_module/dialogs/add-dialog/dialog.add.component';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.scss']
})
export class SearchRecipeComponent {

  recipeTypes: string[] = ['Breakfast','Lunch','Dinner'];
  ingridientsForRecipe: Ingridient[] = [
    {ingridientName: 'Haferflocken',isVegetarian: true}];

  constructor(
    private matDialog: MatDialog
    ) { }

  ngOnInit(){
  }

  addIngridient(){
    console.log("Add ingrideient to recipe")

  }

  openDialog(){
    let dialogRef = this.matDialog.open(DialogAddComponent,{width: '350px',})
    dialogRef.componentInstance.itemName = 'Ingridient'
  }

  removeIngridientFromList(name: string){
    this.ingridientsForRecipe.forEach((value,index)=>{
      if(value.ingridientName == name) this.ingridientsForRecipe.splice(index,1);
    })
  }
}
